"use client"
import React from 'react';
import { superform } from '@silentcoderhi/superform';
import { useForm } from '@silentcoderhi/superform/react';

const projectInquirySchema = superform.object({
  name: superform.string().min(2, 'Name must be at least 2 characters'),
  email: superform.string().email('Enter a valid email address'),
  project: superform.string().min(3, 'Project title must be at least 3 characters'),
});

export default function HomePage() {
  const { register, handleSubmit, errors, isSubmitting, reset } = useForm(projectInquirySchema);
  const [notification, setNotification] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [attemptedSubmit, setAttemptedSubmit] = React.useState(false);

  React.useEffect(() => {
    if (!attemptedSubmit) return;
    if (Object.keys(errors).length > 0) {
      setNotification({ type: 'error', message: 'Please fix form errors before submitting.' });
    }
  }, [attemptedSubmit, errors]);

  React.useEffect(() => {
    if (!notification) return;
    const timeout = setTimeout(() => setNotification(null), 3500);
    return () => clearTimeout(timeout);
  }, [notification]);

  const onSubmit = async (data: { name: string; email: string; project: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setNotification({
      type: 'success',
      message: `Thanks ${data.name}, your "${data.project}" request was submitted.`,
    });
    reset();
    setAttemptedSubmit(false);
  };

  return (
    <main className="min-h-screen pt-16">
      <div className="flex">
        {/* Page Sidebar */}
        <aside className="fixed bottom-0 top-16 w- w-72 border-r border-[#eff1f2] bg-white p-6">
          <div className="mb-8 flex items-center gap-3 rounded-2xl bg-[#f5f6f7] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ac8eff] text-lg font-black text-[#2a0070]">V</div>
            <div>
              <div className="text-sm font-bold">Main Workspace</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[#757778]">Design Team</div>
            </div>
          </div>

          <div className="space-y-1">
            <SidebarItem icon={<WorkspaceIcon />} label="Workspace" active />
            <SidebarItem icon={<FolderIcon />} label="Projects" />
            <SidebarItem icon={<GlobeIcon />} label="Community" />
            <SidebarItem icon={<UsersIcon />} label="Team" />
            <SidebarItem icon={<SettingsIcon />} label="Settings" />
          </div>

          <div className="mt-12">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#757778] ml-3">Library</p>
            <div className="mt-4 space-y-1">
              <SidebarItem icon={<FileIcon />} label="My Files" />
              <SidebarItem icon={<ShareIcon />} label="Shared with me" />
              <SidebarItem icon={<DraftsIcon />} label="Drafts" />
            </div>
          </div>

          <div className="mt-auto pt-10">
            <div className="rounded-3xl bg-[#ac8eff]/15 p-5 text-center shadow-inner">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#6a1cf6]">Upgrade Plan</p>
              <p className="mt-2 text-[10px] font-bold text-[#595c5d]">Unlock advanced bento features and unlimited cloud storage.</p>
              <button className="mt-4 w-full rounded-2xl bg-[#6a1cf6] py-2.5 text-xs font-bold text-white shadow-lg shadow-[#6a1cf6]/20 transition hover:bg-[#5a15d7]">
                Upgrade Now
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="ml-72 flex-1 p-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h1 className="text-4xl font-black tracking-tight text-[#2c2f30]">Volo Projects</h1>
                <p className="mt-2 text-[#595c5d]">Organize your creative chaos into precise containers.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ring-[#0000000a]">
                  <SortIcon />
                  Sort
                </button>
                <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ring-[#0000000a]">
                  <ViewIcon />
                  View
                </button>
              </div>
            </div>

            <section className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                {/* Featured Project Card */}
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl transition-transform hover:-translate-y-1">
                  <div className="h-[420px] bg-gradient-to-br from-[#6a1cf6] via-[#7d4bff] to-[#ac8eff]">
                    <img src="https://images.unsplash.com/photo-1633533412150-dc394bbd97a6?q=80&w=2000" alt="Nebula" className="h-full w-full object-cover opacity-80 mix-blend-overlay transition group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">Active Project</p>
                    <h2 className="mt-3 text-5xl font-black tracking-tighter">Nebula OS Interface</h2>
                    <p className="mt-3 max-w-xl text-white/80">Designing the future of spatial computing with agile curation principles.</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-[#eff1f2]">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-white/60">+4 others</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <ProjectCard title="E-commerce Flow" desc="User journey and wireframes for high-end boutique." status="Critical Review" />
                  <div className="flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-[#eff1f2] p-8 text-center transition hover:bg-white/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eff1f2] text-[#6a1cf6]">
                      <PlusIcon />
                    </div>
                    <h3 className="mt-4 text-sm font-bold">New Concept</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:col-span-4">
                {notification && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold shadow-sm ${
                      notification.type === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-rose-200 bg-rose-50 text-rose-700'
                    }`}
                  >
                    {notification.message}
                  </div>
                )}

                <div className="rounded-[2.5rem] bg-white p-8 shadow-md">
                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ac8eff]/20 text-[#6a1cf6]">
                     <SparklesIcon />
                   </div>
                   <h2 className="mt-6 text-2xl font-black tracking-tight">Brand Identity 2024</h2>
                   <p className="mt-2 text-sm text-[#595c5d]">Exploration of minimalist typography and tonal layering for tech brands.</p>
                   <div className="mt-8 pt-6 border-t border-[#eff1f2] flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase tracking-widest text-[#757778]">Updated 2h ago</span>
                     <div className="text-[#6a1cf6]">
                       <ArrowRightIcon />
                     </div>
                   </div>
                </div>

                <div className="rounded-[2.5rem] bg-[#eff1f2] p-8">
                   <h2 className="text-2xl font-black tracking-tight">Team Sync</h2>
                   <p className="mt-2 text-sm text-[#595c5d]">Collaborative workspace for the Q3 roadmap and design sprint assets.</p>
                   <button className="mt-8 rounded-xl bg-[#2c2f30] px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-black/10">
                     Join Session
                   </button>
                   <div className="mt-10 flex justify-end">
                     <div className="text-[#6a1cf6] animate-pulse">
                       <SyncIcon />
                     </div>
                   </div>
                </div>

                <div className="rounded-[2.5rem] bg-white p-8 shadow-md">
                  <h2 className="text-2xl font-black tracking-tight text-[#2c2f30]">Quick Inquiry</h2>
                  <p className="mt-2 text-sm text-[#595c5d]">Send a project request with built-in form validation.</p>

                  <form
                    className="mt-6 space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                    onSubmitCapture={() => setAttemptedSubmit(true)}
                  >
                    <div>
                      <input
                        {...register('name')}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm outline-none ring-[#6a1cf6] transition focus:ring-2"
                      />
                      {errors.name && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        {...register('email')}
                        placeholder="Email address"
                        className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm outline-none ring-[#6a1cf6] transition focus:ring-2"
                      />
                      {errors.email && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.email}</p>}
                    </div>

                    <div>
                      <input
                        {...register('project')}
                        placeholder="Project title"
                        className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm outline-none ring-[#6a1cf6] transition focus:ring-2"
                      />
                      {errors.project && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.project}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-[#6a1cf6] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#5a15d7] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex cursor-pointer items-center gap-3 rounded-2xl p-3 transition-all ${
      active ? 'bg-white shadow-sm ring-1 ring-[#0000000a]' : 'text-[#757778] hover:bg-white hover:text-[#2c2f30]'
    }`}>
      <div className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
        active ? 'bg-[#6a1cf6] text-white' : 'bg-[#f5f6f7] group-hover:bg-white'
      }`}>
        {icon}
      </div>
      <span className={`text-xs font-bold tracking-tight ${active ? 'text-[#6a1cf6]' : ''}`}>{label}</span>
    </div>
  );
}

function ProjectCard({ title, desc, status }: { title: string; desc: string; status: string }) {
  return (
    <div className="group rounded-[2rem] bg-white p-2 shadow-sm transition hover:shadow-xl">
      <div className="h-48 overflow-hidden rounded-[1.75rem] bg-[#eff1f2]">
        <img src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800" alt={title} className="h-full w-full object-cover transition group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-black tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-[#595c5d]">{desc}</p>
        <div className="mt-6 flex items-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
           <span className="text-[10px] font-black uppercase tracking-widest text-red-500">{status}</span>
        </div>
      </div>
    </div>
  );
}

// Icons
function WorkspaceIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>; }
function FolderIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>; }
function GlobeIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>; }
function UsersIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function SettingsIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>; }
function FileIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>; }
function ShareIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>; }
function DraftsIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>; }
function SortIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m15 18-3 3-3-3"/><path d="M12 3v18"/><path d="m9 6 3-3 3 3"/></svg>; }
function ViewIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/></svg>; }
function PlusIcon() { return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14m-7-7v14"/></svg>; }
function SparklesIcon() { return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>; }
function ArrowRightIcon() { return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>; }
function SyncIcon() { return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>; }
