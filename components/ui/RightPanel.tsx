"use client"
import React from 'react';
import { useCanvasStore } from '@/store/useCanvasStore';

export default function RightPanel() {
  const shapes = useCanvasStore((s) => s.shapes);
  const updateShape = useCanvasStore((s) => s.updateShape);
  const selected = shapes.find((s) => s.selected);

  const update = (field: string, value: string | number) => {
    if (!selected) return;
    updateShape(selected.id, { [field]: value });
  };

  if (!selected) {
    return (
      <aside className="fixed inset-y-[72px] right-4 z-20 flex w-80 flex-col rounded-[2rem] bg-[#eff1f2] p-6 text-[#2c2f30] shadow-sm">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#595c5d]">Inspector</h2>
        <div className="flex h-full flex-col items-center justify-center text-center opacity-40">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-sm">
            <SelectIcon />
          </div>
          <p className="text-xs font-bold">Select a layer to<br />inspect properties</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed inset-y-[72px] right-4 z-20 flex w-80 flex-col rounded-[2rem] bg-[#eff1f2] p-6 text-[#2c2f30] shadow-sm">
      <div className="flex-1 space-y-8 overflow-y-auto pr-2">
        {/* Alignment */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#595c5d]">Alignment</h3>
          <div className="mt-4 flex items-center justify-between gap-1 rounded-2xl bg-white p-1.5 shadow-sm">
            <IconButton icon={<AlignLeftIcon />} />
            <IconButton icon={<AlignCenterIcon />} />
            <IconButton icon={<AlignRightIcon />} />
            <div className="mx-1 h-4 w-px bg-[#eff1f2]" />
            <IconButton icon={<AlignTopIcon />} />
            <IconButton icon={<AlignMiddleIcon />} />
            <IconButton icon={<AlignBottomIcon />} />
          </div>
        </section>

        {/* Geometry */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#595c5d]">Geometry</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <InputGroup label="Width" value={selected.width || selected.radius * 2 || 0} onChange={(v) => update('width', v)} />
            <InputGroup label="Height" value={selected.height || selected.radius * 2 || 0} onChange={(v) => update('height', v)} />
          </div>
        </section>

        {/* Styling */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#595c5d]">Styling</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div 
                  className="h-8 w-8 rounded-lg shadow-inner ring-1 ring-black/5" 
                  style={{ backgroundColor: selected.color }}
                />
                <span className="text-xs font-bold text-[#2c2f30]">Fill Color</span>
              </div>
              <input 
                type="color" 
                value={selected.color} 
                onChange={(e) => update('color', e.target.value)} 
                className="h-8 w-16 cursor-pointer opacity-0 absolute right-12"
              />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#595c5d]">{selected.color}</span>
            </div>
            
            <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-dashed border-[#eff1f2] bg-white text-[#595c5d]">
                  <StrokeIcon />
                </div>
                <span className="text-xs font-bold text-[#2c2f30]">Stroke</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#595c5d]">2px</span>
            </div>
          </div>
        </section>

        {/* Effects */}
        <section>
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#595c5d]">Effects</h3>
            <PlusIcon />
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
            <span className="text-xs font-bold text-[#2c2f30]">Drop Shadow</span>
            <SettingsIcon />
          </div>
        </section>
      </div>

      <div className="mt-auto pt-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3 text-xs font-bold text-[#2c2f30] shadow-sm transition hover:bg-[#f5f6f7]">
          <DownloadIcon />
          Export Asset
        </button>
      </div>
    </aside>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors hover:bg-[#eff1f2] text-[#595c5d] hover:text-[#2c2f30]">
      {icon}
    </button>
  );
}

function InputGroup({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black uppercase tracking-widest text-[#757778] ml-1">{label}</label>
      <input 
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#2c2f30] shadow-sm outline-none ring-[#6a1cf6]/20 focus:ring-4 transition"
      />
    </div>
  );
}

// Icons
function SelectIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/>
    </svg>
  );
}

function AlignLeftIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10"/><path d="M7 12h8"/></svg>;
}
function AlignCenterIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 7v10"/><path d="M8 12h8"/></svg>;
}
function AlignRightIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 7v10"/><path d="M9 12h8"/></svg>;
}
function AlignTopIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M12 7v8"/></svg>;
}
function AlignMiddleIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 12h10"/><path d="M12 8v8"/></svg>;
}
function AlignBottomIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 17h10"/><path d="M12 9v8"/></svg>;
}

function StrokeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>;
}

function PlusIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7v14"/></svg>;
}

function SettingsIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
}

function DownloadIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
}
