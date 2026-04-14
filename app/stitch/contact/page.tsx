import Link from "next/link";

export default function StitchContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f6f7] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-semibold">
          <Link href="/stitch" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">Community</Link>
          <Link href="/stitch/gallery" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">Projects</Link>
          <Link href="/" className="rounded-xl bg-[#6a1cf6] px-4 py-2 text-white">Home</Link>
        </div>

        <section className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-[#eff1f2] p-8 lg:col-span-5">
            <h1 className="text-4xl font-black tracking-tight text-[#2c2f30]">Team Space</h1>
            <p className="mt-3 text-sm text-[#595c5d]">Share your requirements and we will shape a collaboration-ready Volo layout.</p>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-white p-4 text-sm font-semibold">24 active members</div>
              <div className="rounded-2xl bg-white p-4 text-sm font-semibold">142 tasks closed</div>
              <div className="rounded-2xl bg-white p-4 text-sm font-semibold">98% productivity</div>
            </div>
          </div>
          <form className="rounded-[2rem] bg-white p-8 lg:col-span-7">
            <h2 className="text-xl font-black tracking-tight text-[#2c2f30]">Invite and Request</h2>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-xl bg-[#e0e3e4] px-4 py-3 text-sm outline-none ring-[#6a1cf6] focus:ring-2" placeholder="Your Name" />
              <input className="w-full rounded-xl bg-[#e0e3e4] px-4 py-3 text-sm outline-none ring-[#6a1cf6] focus:ring-2" placeholder="Email Address" />
              <textarea className="h-36 w-full rounded-xl bg-[#e0e3e4] px-4 py-3 text-sm outline-none ring-[#6a1cf6] focus:ring-2" placeholder="Describe your stitch design idea..." />
            </div>
            <button type="button" className="mt-5 rounded-xl bg-[#6a1cf6] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
              Send Request
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
