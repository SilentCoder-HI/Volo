import React from 'react';
import { useCanvasStore } from '@store/useCanvasStore';

export default function RightPanel() {
  // Use direct store selectors with loose typing to avoid TS issues
  // const shapes = useCanvasStore((s: any) => s.shapes);
  // const selected = shapes.find((s: any) => s.selected);

  const update = (field: string, value: string | number) => {
    // if (!selected) return;
    // useCanvasStore.getState().updateShape(selected.id, { [field]: value });
  };

  if (true) {
    return (
      <aside style={panelStyle}>
        <div style={{ fontWeight: 600 }}>Inspector</div>
        <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4 }}>Select a shape to edit properties</div>
      </aside>
    );
  }

  return (
    <aside style={panelStyle}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Inspector</div>
      <div style={{ fontSize: 12, marginBottom: 6 }}>ID: {selected.id}</div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
        <span>Type:</span>
        <strong>{selected.type}</strong>
      </div>
      {selected.type === 'circle' ? (
        <div style={rowStyle}>
          <span>Radius</span>
          <input
            type="number"
            defaultValue={selected.radius ?? 40}
            onBlur={(e) => update('radius', Number(e.target.value))}
          />
        </div>
      ) : (
        <>
          <div style={rowStyle}>
            <span>Width</span>
            <input type="number" defaultValue={selected.width ?? 100} onBlur={(e) => update('width', Number(e.target.value))} />
          </div>
          <div style={rowStyle}>
            <span>Height</span>
            <input type="number" defaultValue={selected.height ?? 100} onBlur={(e) => update('height', Number(e.target.value))} />
          </div>
        </>
      )}
      <div style={rowStyle}>
        <span>Color</span>
        <input type="color" defaultValue={selected.color} onBlur={(e) => update('color', e.target.value)} />
      </div>
    </aside>
  );
}

const panelStyle: React.CSSProperties = {
  width: 320,
  height: '100%',
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  background: 'rgba(15,15,20,0.95)',
  color: '#fff',
  padding: 16,
  boxSizing: 'border-box',
  borderLeft: '1px solid rgba(255,255,255,0.08)'
};

const rowStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginTop: 8 };
