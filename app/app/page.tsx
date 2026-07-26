import Link from "next/link";

const steps = [
  {
    code: "00:00:01",
    title: "Drop in a product",
    body: "One photo or a link to your listing. No shoot, no shipping a sample to a creator.",
  },
  {
    code: "00:00:14",
    title: "Pick a voice, write an angle",
    body: "Choose an AI presenter and a hook — or let the script writer draft three angles to test.",
  },
  {
    code: "00:00:42",
    title: "Render, caption, ship",
    body: "Cut for TikTok, Reels, and Feed in one pass. Export and push straight to your ad account.",
  },
];

const models = [
  "Runway Gen-4",
  "Veo 3",
  "Kling 3.0",
  "Luma Dream Machine",
  "Sora 2",
  "HeyGen Avatars",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-rail">
        <span className="font-display text-xl tracking-tight text-bone">
          Shelfie
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-mute">
          <a href="#how" className="hover:text-bone transition-colors">
            How it works
          </a>
          <a href="#models" className="hover:text-bone transition-colors">
            Models
          </a>
          <a href="#pricing" className="hover:text-bone transition-colors">
            Pricing
          </a>
        </div>
        <Link
          href="/generate"
          className="text-sm px-4 py-2 rounded-full bg-amber text-ink font-medium hover:bg-bone transition-colors"
        >
          Open studio
        </Link>
      </nav>

      {/* hero */}
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-20">
        <p className="timecode text-xs text-ember mb-4">SHELFIE / AD STUDIO</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-bone max-w-3xl">
          Splice a product photo into an ad that looks shot by a real creator.
        </h1>
        <p className="text-mute max-w-xl mt-6 text-lg">
          Shelfie turns a single image into UGC-style video ads — scripted, voiced,
          and cut for TikTok, Reels, and Feed — without booking a creator or a
          studio day.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/generate"
            className="px-6 py-3 rounded-full bg-amber text-ink font-medium hover:bg-bone transition-colors"
          >
            Generate your first ad
          </Link>
          
            href="#how"
            className="px-6 py-3 rounded-full border border-rail text-bone hover:border-mute transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* filmstrip / signature element */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-rail bg-panel">
          <div className="flex items-center gap-1 px-4 py-2 border-b border-rail">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-1.5 h-3 rounded-sm bg-rail" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rail">
            {[
              { label: "SOURCE", desc: "Product photo, as uploaded" },
              { label: "TAKE 01", desc: "AI presenter holds the product" },
              { label: "FINAL CUT", desc: "Captioned, scored, ready to run" },
            ].map((frame) => (
              <div key={frame.label} className="p-8">
                <p className="timecode text-xs text-ember mb-3">
                  {frame.label}
                </p>
                <div className="aspect-[9/16] max-w-[180px] rounded-lg bg-gradient-to-b from-rail to-panel border border-rail mb-4" />
                <p className="text-sm text-mute">{frame.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 px-4 py-2 border-t border-rail">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-1.5 h-3 rounded-sm bg-rail" />
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="px-6 md:px-12 py-20 border-t border-rail">
        <p className="timecode text-xs text-ember mb-4">HOW IT WORKS</p>
        <h2 className="font-display text-3xl md:text-4xl text-bone mb-12 max-w-xl">
          Three cuts, start to finish.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.code} className="border-t border-rail pt-6">
              <p className="timecode text-xs text-mute mb-3">{step.code}</p>
              <h3 className="font-display text-xl text-bone mb-2">
                {step.title}
              </h3>
              <p className="text-mute text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* models */}
      <section id="models" className="px-6 md:px-12 py-20 border-t border-rail">
        <p className="timecode text-xs text-ember mb-4">UNDER THE HOOD</p>
        <h2 className="font-display text-3xl md:text-4xl text-bone mb-10 max-w-xl">
          One credit pool, every top rendering engine.
        </h2>
        <div className="flex flex-wrap gap-3">
          {models.map((m) => (
            <span
              key={m}
              className="timecode text-xs px-4 py-2 rounded-full border border-rail text-mute"
            >
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* pricing teaser */}
      <section id="pricing" className="px-6 md:px-12 py-20 border-t border-rail">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="timecode text-xs text-ember mb-4">PRICING</p>
            <h2 className="font-display text-3xl md:text-4xl text-bone max-w-lg">
              Plans that scale with how many ads you're testing.
            </h2>
          </div>
          <Link
            href="/generate"
            className="shrink-0 px-6 py-3 rounded-full bg-amber text-ink font-medium hover:bg-bone transition-colors w-fit"
          >
            Start free
          </Link>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-rail text-mute text-xs timecode">
        © {new Date().getFullYear()} SHELFIE STUDIO
      </footer>
    </main>
  );
}
