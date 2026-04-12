"use client";

import React, { useEffect, useState, useRef } from "react";
import { Stage as KonvaStage, Layer, Rect, Circle, Line } from "react-konva";
import { useCanvasStore } from "@store/useCanvasStore";

const StageCanvas: React.FC = () => {
  // const shapes = useCanvasStore((s) => s.shapes);
  // const updateShape = useCanvasStore((s) => s.updateShape);
  // const selectShape = useCanvasStore((s) => s.selectShape);

  const stageRef = useRef<any>(null);

  const [size, setSize] = useState({ width: 800, height: 600 });
  const [scale, setScale] = useState(1);

  const gridSize = 50;
  const scaleBy = 1.05;

  // ✅ Responsive canvas
  useEffect(() => {
    const onResize = () => {
      const w = Math.max(620, window.innerWidth - 340);
      const h = Math.max(420, window.innerHeight - 120);
      setSize({ width: w, height: h });
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ Drag update
  const handleDragEnd = (e: any, id: string) => {
    const x = e.target.x();
    const y = e.target.y();
    // updateShape(id, { x, y });
  };

  // ✅ Mouse wheel zoom (REAL zoom)
  const handleWheel = (e: any) => {
    e.evt.preventDefault();

    const stage = stageRef.current;
    const oldScale = scale;

    const pointer = stage.getPointerPosition();

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    const direction = e.evt.deltaY > 0 ? -1 : 1;
    const newScale =
      direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setScale(newScale);

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    stage.position(newPos);
    stage.batchDraw();
  };

  // ✅ Buttons zoom
  const zoomIn = () => {
    const stage = stageRef.current;
    const newScale = scale * scaleBy;

    setScale(newScale);
    stage.scale({ x: newScale, y: newScale });
    stage.batchDraw();
  };

  const zoomOut = () => {
    const stage = stageRef.current;
    const newScale = scale / scaleBy;

    setScale(newScale);
    stage.scale({ x: newScale, y: newScale });
    stage.batchDraw();
  };

  // ✅ Grid (auto scales visually with stage)
  const renderGrid = () => {
    const lines: React.ReactElement[] = [];

    for (let x = 0; x <= size.width; x += gridSize) {
      lines.push(
        <Line
          key={`v-${x}`}
          points={[x, 0, x, size.height]}
          stroke="#333"
          strokeWidth={0.5}
        />
      );
    }

    for (let y = 0; y <= size.height; y += gridSize) {
      lines.push(
        <Line
          key={`h-${y}`}
          points={[0, y, size.width, y]}
          stroke="#333"
          strokeWidth={0.5}
        />
      );
    }

    return lines;
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>

      {/* ✅ Zoom Controls */}
      <div style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
        <button onClick={zoomIn}>+</button>
        <button onClick={zoomOut}>−</button>
      </div>

      <KonvaStage
        ref={stageRef}
        width={size.width}
        height={size.height}
        onWheel={handleWheel}
        // onMouseDown={(e) => {
        //   const clickedOnEmpty = e.target === e.target.getStage();
        //   if (clickedOnEmpty) {
        //     selectShape(undefined);
        //   }
        // }}
        className="volo-canvas"
      >
        {/* Grid */}
        <Layer>{renderGrid()}</Layer>

        {/* Shapes */}
        {/* <Layer>
          {shapes.map((s) => {
            if (s.type === "circle") {
              return (
                <Circle
                  key={s.id}
                  x={s.x}
                  y={s.y}
                  radius={s.radius ?? 40}
                  fill={s.color}
                  draggable
                // onClick={() => selectShape(s.id)}
                // onDragEnd={(e) => handleDragEnd(e, s.id)}
                />
              );
            }

            return (
              <Rect
                key={s.id}
                x={s.x}
                y={s.y}
                width={s.width ?? 100}
                height={s.height ?? 100}
                fill={s.color}
                draggable
              // onClick={() => selectShape(s.id)}
              // onDragEnd={(e) => handleDragEnd(e, s.id)}
              />
            );
          })}
        </Layer> */}
      </KonvaStage>
    </div>
  );
};

export default StageCanvas;