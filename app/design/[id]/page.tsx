import React from 'react';
import Sidebar from '@components/ui/Sidebar';
import Toolbar from '@components/ui/Toolbar';
import Stage from '@components/canvas/Stage';

export default function DesignPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#09090b', color: '#e5e7eb' }}>
      {/* <Sidebar /> */}
      <Toolbar />
      <Stage />
    </div>
  );
}
