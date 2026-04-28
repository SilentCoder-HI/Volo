"use client";

import React, { useState, useEffect, useRef } from "react";
import { Stage as KonvaStage, Layer, Shape, Circle, Rect } from "react-konva";
import { useCanvasStore } from '@/store/useCanvasStore';
import type Konva from "konva";
import type { KonvaEventObject } from "konva/lib/Node";

const StageCanvas: React.FC = () => {
  const stageRef = useRef<Konva.Stage | null>(null);
  const gridSize = 24;

  const shapes = useCanvasStore((s) => s.shapes);
  const updateShape = useCanvasStore((s) => s.updateShape);
  const selectShape = useCanvasStore((s) => s.selectShape);

  const handleStageClick = (e: KonvaEventObject<PointerEvent>) => {
    // If click on empty canvas area, deselect shapes
    if (e.target === e.target.getStage()) {
      selectShape(undefined);
    }
  };

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverPoint, setHoverPoint] = useState<{ x: number; y: number } | null>(null);
  const [pulseTick, setPulseTick] = useState(0);

  // Handle resize
  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const animate = (timestamp: number) => {
      setPulseTick(timestamp);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Grid drawing dots removed for simplicity and to reduce re-renders

  // Zoom handler (FIXED)
  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const stage = stageRef.current;
    if (!stage) return;

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    const scaleBy = 1.2; // faster zoom
    const direction = e.evt.deltaY > 0 ? -1 : 1;

    let newScale =
      direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    const MIN_SCALE = 0.2;
    const MAX_SCALE = 5;

    newScale = Math.max(MIN_SCALE, Math.min(newScale, MAX_SCALE));

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    setScale(newScale);
    setPosition(newPos);
  };

  // Drag handler
  const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
    setPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handlePointerMove = () => {
    const stage = stageRef.current;
    if (!stage) return;

    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const stageScale = stage.scaleX();
    setHoverPoint({
      x: (pointer.x - stage.x()) / stageScale,
      y: (pointer.y - stage.y()) / stageScale,
    });
  };

  const handlePointerLeave = () => {
    setHoverPoint(null);
  };

  if (!size.width) return null;

  return (
    <KonvaStage
      ref={stageRef}
      width={size.width}
      height={size.height}
      className="volo-canvas"
      scale={{ x: scale, y: scale }}
      x={position.x}
      y={position.y}
      draggable
      onWheel={handleWheel}
      onDragMove={handleDragMove}
      onPointerDown={handleStageClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Layer listening={false}>
        {/* The "Artboard" Background */}
        <Rect
          x={size.width / 2 - 640} // Center 1280px artboard
          y={size.height / 2 - 360} // Center 720px artboard
          width={1280}
          height={720}
          fill="white"
          shadowBlur={40}
          shadowColor="rgba(15, 23, 42, 0.08)"
          shadowOffset={{ x: 0, y: 16 }}
          cornerRadius={4}
        />
      </Layer>

      <Layer listening={false} perfectDrawEnabled={false}>
        <Shape
          sceneFunc={(context: Konva.Context, shape: Konva.Shape) => {
            const buffer = scale < 1 ? 1000 : 300;

            const startX = (-position.x / scale) - buffer;
            const startY = (-position.y / scale) - buffer;
            const endX = ((size.width - position.x) / scale) + buffer;
            const endY = ((size.height - position.y) / scale) + buffer;

            const gridStartX = Math.floor(startX / gridSize) * gridSize;
            const gridStartY = Math.floor(startY / gridSize) * gridSize;
            const gridEndX = Math.ceil(endX / gridSize) * gridSize;
            const gridEndY = Math.ceil(endY / gridSize) * gridSize;

            for (let x = gridStartX; x <= gridEndX; x += gridSize) {
              for (let y = gridStartY; y <= gridEndY; y += gridSize) {
                let dotRadius = 1.2;
                let alpha = 0.15;

                if (hoverPoint) {
                  const dx = x - hoverPoint.x;
                  const dy = y - hoverPoint.y;
                  const distance = Math.hypot(dx, dy);
                  const hoverRange = gridSize * 5;

                  if (distance < hoverRange) {
                    const influence = 1 - distance / hoverRange;
                    dotRadius += influence * 1.5;
                    alpha += influence * 0.25;
                  }
                }

                context.fillStyle = `rgba(15, 23, 42, ${Math.min(alpha, 0.5)})`;
                context.beginPath();
                context.arc(x, y, dotRadius, 0, Math.PI * 2);
                context.fill();
              }
            }

            if (hoverPoint) {
              const pulse = (Math.sin((pulseTick / 1000) * 2.4) + 1) / 2;
              const haloRadius = 15 + pulse * 15;

              context.beginPath();
              context.arc(hoverPoint.x, hoverPoint.y, haloRadius, 0, Math.PI * 2);
              context.strokeStyle = `rgba(106, 28, 246, ${0.15 + pulse * 0.15})`;
              context.lineWidth = 1;
              context.stroke();
            }

            context.fillStrokeShape(shape);
          }}
        />
      </Layer>
      <Layer>
        {shapes.map((shape) => {
          if (shape.type === 'circle') {
            return (
              <Circle
                key={shape.id}
                x={shape.x}
                y={shape.y}
                radius={shape.radius || 40}
                fill={shape.color}
                draggable
                onPointerDown={(e) => {
                  e.cancelBubble = true;
                  selectShape(shape.id);
                }}
                onDragEnd={(e) => {
                  updateShape(shape.id, { x: e.target.x(), y: e.target.y() });
                }}
                stroke={shape.selected ? "#334155" : "rgba(71,85,105,0.45)"}
                strokeWidth={shape.selected ? 2.5 : 1.4}
                dash={shape.selected ? [8, 5] : [4, 6]}
              />
            );
          } else {
            return (
              <Rect
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.width || 80}
                height={shape.height || 80}
                fill={shape.color}
                draggable
                onPointerDown={(e) => {
                  e.cancelBubble = true;
                  selectShape(shape.id);
                }}
                onDragEnd={(e) => {
                  updateShape(shape.id, { x: e.target.x(), y: e.target.y() });
                }}
                cornerRadius={8}
                stroke={shape.selected ? "#334155" : "rgba(71,85,105,0.45)"}
                strokeWidth={shape.selected ? 2.5 : 1.4}
                dash={shape.selected ? [10, 5] : [5, 7]}
              />
            );
          }
        })}
      </Layer>
    </KonvaStage>
  );
};

export default StageCanvas;
