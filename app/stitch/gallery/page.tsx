import Link from "next/link";

const cards = ["Linen Light", "Pastel Thread", "Minimal Needle", "Studio Cotton", "Pearl Fabric", "Clean Satin"];

export default function StitchGalleryPage() {
  return (
    <main className="min-h-screen bg-[#f5f6f7] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-semibold">
          <Link href="/stitch" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">Community</Link>
          <Link href="/stitch/contact" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">Team</Link>
          <Link href="/design/new" className="rounded-xl bg-[#6a1cf6] px-4 py-2 text-white">Create</Link>
        </div>

        <section>
          <h1 className="text-5xl font-black tracking-tight text-[#2c2f30]">Volo Projects</h1>
          <p className="mt-3 text-[#595c5d]">Choose a style direction, then refine it inside your design workspace.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div key={card} className="rounded-[2rem] bg-white p-5">
                <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-[#ac8eff] via-[#d8b5ff] to-[#e3c6ff]" />
                <h2 className="text-lg font-black tracking-tight text-[#2c2f30]">{card}</h2>
                <p className="mt-1 text-sm text-[#595c5d]">Balanced bento-style composition for modern visual products.</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
