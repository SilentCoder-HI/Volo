import React from 'react';

export default function Toolbar() {
  return (
    <div style={{
      position: 'fixed',
      left: 340,
      top: 12,
      padding: '8px 12px',
      borderRadius: 12,
      background: 'rgba(24,24,27,0.85)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
    }}>
      <span style={{ marginRight: 8, fontWeight: 600 }}>Tools</span>
      <span style={{ marginRight: 6 }}>Rect</span>
      <span style={{ marginRight: 6 }}>Circle</span>
      <span>Move</span>
    </div>
  );
}
