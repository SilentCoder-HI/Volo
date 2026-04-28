import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f6f7] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-semibold">
          <Link href="/" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">Projects</Link>
          <Link href="/stitch" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">Community</Link>
          <Link href="/design/new" className="rounded-xl bg-[#6a1cf6] px-4 py-2 text-white">Studio</Link>
        </div>

        <section className="space-y-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#6a1cf6]">Manifesto</p>
              <h1 className="mt-3 text-5xl font-black tracking-tight text-[#2c2f30] md:text-6xl">Built for the Agile Curator.</h1>
              <p className="mt-4 max-w-xl text-lg text-[#595c5d]">
                Volo is designed for fast creative movement, where structure feels light and ideas ship without friction.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-6">
              <div className="h-72 rounded-[1.5rem] bg-gradient-to-br from-[#ac8eff] via-[#d8b5ff] to-[#e3c6ff]" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] bg-[#eff1f2] p-6">
              <h2 className="text-xl font-black tracking-tight text-[#2c2f30]">Radical Simplicity</h2>
              <p className="mt-2 text-sm text-[#595c5d]">Interfaces stay clean, focused, and breathable.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-6">
              <h2 className="text-xl font-black tracking-tight text-[#2c2f30]">Kinetic Energy</h2>
              <p className="mt-2 text-sm text-[#595c5d]">Every action responds instantly to keep flow alive.</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#eff1f2] p-6">
              <h2 className="text-xl font-black tracking-tight text-[#2c2f30]">Editorial Precision</h2>
              <p className="mt-2 text-sm text-[#595c5d]">Strong hierarchy and refined spacing across pages.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
