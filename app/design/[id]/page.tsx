"use client"
import React from 'react';
import Sidebar from '@/components/ui/Sidebar';
import Toolbar from '@/components/ui/Toolbar';
import Stage from '@/components/canvas/Stage';
import RightPanel from '@/components/ui/RightPanel';

export default function DesignPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f5f6f7] text-[#2c2f30] pt-16">
      {/* Sidebar (Layers) */}
      <Sidebar />
      
      {/* Central Canvas */}
      <div className="absolute inset-0 z-0">
        <Stage />
      </div>

      {/* Floating Toolbar */}
      <Toolbar />
      
      {/* Inspector Panel */}
      <RightPanel />
    </main>
  );
}
