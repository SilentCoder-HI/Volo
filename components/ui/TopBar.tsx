"use client";
import React from 'react';
import { useCanvasStore } from '../../store/useCanvasStore';

export default function TopBar() {
  // Actions use the store's getState to stay out of hook rules
  const addRect = () => useCanvasStore.getState().addShape({ type: 'rect', width: 120, height: 100, color: '#38bdf8' });
  const addCircle = () => useCanvasStore.getState().addShape({ type: 'circle', radius: 50, width: 100, height: 100, color: '#f472b6' });
  const zoomIn = () => {
    const current = useCanvasStore.getState().zoom ?? 1;
    const z = Math.min(3, current + 0.1);
    useCanvasStore.getState().setZoom?.(z);
  };
  const zoomOut = () => {
    const current = useCanvasStore.getState().zoom ?? 1;
    const z = Math.max(0.25, current - 0.1);
    useCanvasStore.getState().setZoom?.(z);
  };
  const zoomReset = () => useCanvasStore.getState().setZoom?.(1);

  return (
    <div className="fixed left-80 right-72 top-4 z-30 flex h-14 items-center gap-2 rounded-2xl bg-white/80 px-4 text-[#595c5d] shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mr-2 text-sm font-black tracking-tight text-[#6a1cf6]">Volo Studio</div>
      <button onClick={addRect} className={buttonClass}>Rect</button>
      <button onClick={addCircle} className={buttonClass}>Circle</button>
      <div className="flex-1" />
      <button onClick={zoomOut} className={buttonClass}>-</button>
      <span className="px-2 text-xs text-zinc-600">Zoom</span>
      <button onClick={zoomIn} className={buttonClass}>+</button>
      <button onClick={zoomReset} className={buttonClass}>Reset</button>
    </div>
  );
}

const buttonClass =
  "rounded-lg bg-[#eff1f2] px-2.5 py-1 text-xs font-semibold text-[#2c2f30] transition hover:bg-[#e0e3e4]";
