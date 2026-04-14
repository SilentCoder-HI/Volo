import Link from "next/link";

const stitchPages = [
  { href: "/stitch", title: "Stitch Home", desc: "Overview of stitch-ready templates and tools." },
  { href: "/stitch/gallery", title: "Stitch Gallery", desc: "Explore prebuilt stitch-inspired visual styles." },
  { href: "/stitch/contact", title: "Stitch Contact", desc: "Share your requirements for custom stitch themes." },
];

export default function StitchPage() {
  return (
    <main className="min-h-screen bg-[#f5f6f7] px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-semibold">
          <Link href="/" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">Projects</Link>
          <Link href="/about" className="rounded-xl bg-white px-4 py-2 text-slate-600 hover:text-[#6a1cf6]">About</Link>
          <Link href="/design/new" className="rounded-xl bg-[#6a1cf6] px-4 py-2 text-white">Studio</Link>
        </div>

        <section className="rounded-[2rem] bg-[#eff1f2] p-8 md:p-10">
          <h1 className="text-4xl font-black tracking-tight text-[#2c2f30] md:text-5xl">Community Showcase</h1>
          <p className="mt-3 max-w-3xl text-[#595c5d]">
            Discover stitched interface ideas, community spaces, and collaboration flows inspired by the Volo design language.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {stitchPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl bg-white p-5 transition hover:-translate-y-0.5"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6a1cf6]">Volo</p>
                <h2 className="mt-2 text-xl font-black tracking-tight text-[#2c2f30]">{item.title}</h2>
                <p className="mt-2 text-sm text-[#595c5d]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
