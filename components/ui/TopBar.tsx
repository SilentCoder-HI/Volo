import React from 'react';
import { useCanvasStore } from '../../store/useCanvasStore';

export default function TopBar() {
  const addRect = () => useCanvasStore((s: any) => s.addShape({ type: 'rect', width: 120, height: 100, color: '#38bdf8' }));
  const addCircle = () => useCanvasStore((s: any) => s.addShape({ type: 'circle', radius: 50, width: 100, height: 100, color: '#f472b6' }));
  const zoomIn = () => {
    const current = useCanvasStore((s: any) => s.zoom) ?? 1;
    const z = Math.min(3, current + 0.1);
    useCanvasStore((s: any) => s.setZoom?.(z));
  };
  const zoomOut = () => {
    const current = useCanvasStore((s: any) => s.zoom) ?? 1;
    const z = Math.max(0.25, current - 0.1);
    useCanvasStore((s: any) => s.setZoom?.(z));
  };
  const zoomReset = () => useCanvasStore((s: any) => s.setZoom?.(1));

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'fixed', left: 320, right: 320, top: 0, height: 56, background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(6px)' }}>
      <div style={{ fontWeight: 700, fontSize: 14 }}>Volo Studio</div>
      <button onClick={addRect} style={buttonStyle}>Rect</button>
      <button onClick={addCircle} style={buttonStyle}>Circle</button>
      <div style={{ flex: 1 }} />
      <button onClick={zoomOut} style={buttonStyle}>-</button>
      <span style={{ padding: '0 8px' }}>
        Zoom
      </span>
      <button onClick={zoomIn} style={buttonStyle}>+</button>
      <button onClick={zoomReset} style={buttonStyle}>Reset</button>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  background: '#1f2937',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.15)',
  padding: '6px 10px',
  borderRadius: 8,
  cursor: 'pointer',
};
