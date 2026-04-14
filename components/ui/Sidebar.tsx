"use client"
import React from 'react';
import { useCanvasStore } from '@/store/useCanvasStore';

export default function Sidebar() {
  const shapes = useCanvasStore((state) => state.shapes);
  const selectShape = useCanvasStore((state) => state.selectShape);

  return (
    <aside className="fixed inset-y-[72px] left-4 z-20 flex w-72 flex-col rounded-[2rem] bg-[#eff1f2] p-6 text-[#2c2f30] shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#595c5d]">Layers</h2>
        <button className="text-[#595c5d] hover:text-[#6a1cf6]">
          <PlusIcon />
        </button>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto pr-2">
        <LayerItem 
          label="Workspace" 
          icon={<WorkspaceIcon />} 
          active={!shapes.some(s => s.selected)}
          onClick={() => selectShape(undefined)}
        />
        
        <div className="mt-4 space-y-1">
          {shapes.length === 0 ? (
            <div className="p-4 text-center text-[10px] font-bold uppercase tracking-widest text-[#757778]">
              No active layers
            </div>
          ) : (
            shapes.map((shape) => (
              <LayerItem
                key={shape.id}
                label={shape.type === 'rect' ? `Rectangle_${shape.id.slice(0, 4)}` : `Circle_${shape.id.slice(0, 4)}`}
                icon={shape.type === 'rect' ? <RectIcon /> : <CircleIcon />}
                active={shape.selected}
                onClick={() => selectShape(shape.id)}
                nested
              />
            ))
          )}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-[1.75rem] bg-[#ac8eff]/20 p-5 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#6a1cf6]">Upgrade Plan</p>
          <p className="mt-2 text-xs font-semibold text-[#2c2f30]">Unlock premium bento features and cloud sync.</p>
          <button className="mt-4 w-full rounded-2xl bg-[#6a1cf6] py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-[#5a15d7]">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}

function LayerItem({ label, icon, active, onClick, nested = false }: { label: string; icon: React.ReactNode; active?: boolean; onClick: () => void; nested?: boolean }) {
  return (
    <div 
      onClick={onClick}
      className={`group flex cursor-pointer items-center gap-3 rounded-2xl p-3 transition-all ${
        active 
          ? 'bg-white shadow-sm ring-1 ring-[#6a1cf6]/10' 
          : 'hover:bg-white/50'
      } ${nested ? 'ml-6' : ''}`}
    >
      <div className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
        active ? 'bg-[#6a1cf6] text-white' : 'bg-white text-[#595c5d] group-hover:bg-[#eff1f2]'
      }`}>
        {icon}
      </div>
      <span className={`text-xs font-bold tracking-tight ${active ? 'text-[#2c2f30]' : 'text-[#757778]'}`}>
        {label}
      </span>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-7-7v14"/>
    </svg>
  );
}

function WorkspaceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
    </svg>
  );
}

function RectIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/>
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  );
}
