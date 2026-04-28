"use client"
import React from 'react';
import { useCanvasStore } from '@/store/useCanvasStore';

export default function Toolbar() {
  const addShape = useCanvasStore(s => s.addShape);

  return (
    <div className="fixed bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl bg-white/90 p-1.5 shadow-[0_16px_48px_rgba(0,0,0,0.12)] backdrop-blur-xl ring-1 ring-[#eff1f2]">
      <ToolButton icon={<SelectIcon />} active />
      <div className="mx-1 h-6 w-[1.5px] bg-[#eff1f2]" />
      <ToolButton 
        icon={<RectIcon />} 
        onClick={() => addShape({ type: 'rect', color: '#6a1cf6', width: 100, height: 100 })} 
      />
      <ToolButton 
        icon={<CircleIcon />} 
        onClick={() => addShape({ type: 'circle', color: '#6a1cf6', radius: 50 })} 
      />
      <ToolButton icon={<PenIcon />} />
      <ToolButton icon={<TextIcon />} />
      <ToolButton icon={<ImageIcon />} />
      <ToolButton icon={<HandIcon />} />
    </div>
  );
}

function ToolButton({ icon, active = false, onClick }: { icon: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
        active 
          ? 'bg-[#6a1cf6] text-white shadow-lg shadow-[#6a1cf6]/20' 
          : 'text-[#595c5d] hover:bg-[#f5f6f7] hover:text-[#2c2f30]'
      }`}
    >
      {icon}
    </button>
  );
}

function SelectIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/>
    </svg>
  );
}

function RectIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/>
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>
    </svg>
  );
}

function TextIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  );
}

function HandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
    </svg>
  );
}
