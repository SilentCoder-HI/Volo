import React from 'react';

export default function Sidebar() {
  return (
    <aside style={{
      width: 320,
      height: '100%',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      background: 'rgba(24,24,27,0.95)',
      borderRight: '1px solid rgba(255,255,255,0.08)',
      color: '#fff',
      padding: 16,
      boxSizing: 'border-box'
    }}>
      <div style={{ fontWeight: 700, marginBottom: 12 }}>Bento Box</div>
      <div style={{ fontSize: 12, opacity: 0.8, marginTop: 8 }}>Layers</div>
      <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4 }}>Assets</div>
    </aside>
  );
}
