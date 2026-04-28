"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/design');

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#eff1f2] bg-white px-6">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6a1cf6] text-sm font-black text-white">V</div>
          <span className="text-xl font-black tracking-tighter text-[#2c2f30]">Volo</span>
        </Link>

        {isStudio && (
          <div className="flex items-center gap-2 rounded-xl bg-[#f5f6f7] px-3 py-1.5 text-sm font-semibold text-[#2c2f30]">
            <span>Agile_Curator_Dashboard.v2</span>
            <ChevronDownIcon />
          </div>
        )}

        <div className="hidden items-center gap-6 text-sm font-bold text-[#595c5d] md:flex">
          <NavLink href="/" active={pathname === '/'}>Projects</NavLink>
          <NavLink href="/stitch" active={pathname === '/stitch'}>Community</NavLink>
          <NavLink href="/stitch/contact" active={pathname === '/stitch/contact'}>Team</NavLink>
          <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link 
          href="/design/new" 
          className="rounded-xl bg-[#6a1cf6] px-5 py-2 text-sm font-bold text-white transition hover:opacity-90"
        >
          Create New
        </Link>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-[#f5f6f7]">
          <BellIcon />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-[#f5f6f7]">
          <SettingsIcon />
        </button>
        <div className="h-9 w-9 overflow-hidden rounded-full bg-[#eff1f2]">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="h-full w-full object-cover" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link 
      href={href} 
      className={`relative transition-colors hover:text-[#2c2f30] ${active ? 'text-[#6a1cf6]' : ''}`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-[#6a1cf6]" />
      )}
    </Link>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}
