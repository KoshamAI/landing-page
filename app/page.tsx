import SystemLayers from "./components/system-layers";

const communityOutcomes = [
  { number: "01", title: "Detect earlier", detail: "Identify repeat perimeter activity before it becomes an incident." },
  { number: "02", title: "Respond with context", detail: "Give security teams prior sightings and related activity while an incident is underway." },
  { number: "03", title: "Investigate across sites", detail: "Reconstruct movement across locations and share evidence with other response teams." },
];

function KoshamMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Kosham">
      <svg className={compact ? "h-7 w-7" : "h-9 w-9"} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 2 38 20 20 38 2 20 20 2Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="m20 7 13 13-13 13L7 20 20 7Z" stroke="currentColor" strokeWidth="1.2" opacity=".78" />
        <path d="m20 12 8 8-8 8-8-8 8-8Z" stroke="currentColor" strokeWidth="1.2" opacity=".56" />
        <path d="m20 16 4 4-4 4-4-4 4-4Z" fill="currentColor" />
      </svg>
      <span className={compact ? "text-lg font-semibold tracking-[-0.04em]" : "text-xl font-semibold tracking-[-0.04em]"}>kosham</span>
    </span>
  );
}

function LayeredCore() {
  return (
    <div className="relative aspect-square w-full max-w-[620px]" aria-label="Five connected layers resolving into one protected core">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 620" fill="none" aria-hidden="true">
        <path className="layer-line layer-one" d="M64 64h138V38h216v26h138v138h26v216h-26v138H418v26H202v-26H64V418H38V202h26V64Z" />
        <path className="layer-line layer-two" d="M112 112h116V86h164v26h116v116h26v164h-26v116H392v26H228v-26H112V392H86V228h26V112Z" />
        <path className="layer-line layer-three" d="M160 160h92v-24h116v24h92v92h24v116h-24v92h-92v24H252v-24h-92v-92h-24V252h24v-92Z" />
        <path className="layer-line layer-four" d="M208 208h68v-22h68v22h68v68h22v68h-22v68h-68v22h-68v-22h-68v-68h-22v-68h22v-68Z" />
        <path className="layer-line layer-five" d="M252 252h38v-18h40v18h38v38h18v40h-18v38h-38v18h-40v-18h-38v-38h-18v-40h18v-38Z" />
      </svg>
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ivory shadow-[0_0_30px_rgba(114,151,255,0.8)]" />

      <div className="signal signal-one" />
      <div className="signal signal-two" />
      <div className="signal signal-three" />
      <div className="absolute left-[7%] top-1/2 flex -translate-y-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ivory/45"><span className="h-px w-8 bg-signal/50" /> site 04</div>
      <div className="absolute bottom-[10%] right-[8%] text-right text-[10px] uppercase tracking-[0.22em] text-ivory/45">verified node<br /><span className="text-signal">18.5204° N</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-night text-ivory">
      <section id="top" className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-signal/10 blur-[140px]" />
        <div className="absolute -right-28 -top-20 h-96 w-96 rounded-full bg-gold/10 blur-[150px]" />

        <nav className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16" aria-label="Primary navigation">
          <div className="flex items-center">
            <a href="#top" className="text-ivory"><KoshamMark /></a>
            <span className="indic-display ml-5 hidden border-l border-white/15 pl-5 text-sm text-sandstone/70 sm:block">कोशम्</span>
          </div>
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.15em] text-ivory/55 md:flex">
            <a className="transition hover:text-ivory" href="#platform">Platform</a>
            <a className="transition hover:text-ivory" href="#capabilities">Capabilities</a>
            <a className="transition hover:text-ivory" href="#mission">Mission</a>
          </div>
          <a className="border border-ivory/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-signal hover:bg-signal hover:text-night" href="mailto:hello@kosham.ai?subject=Kosham%20briefing">Request briefing</a>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-[1440px] items-center gap-10 px-6 pb-16 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-16">
          <div className="max-w-3xl pt-16 lg:pt-0">
            <p className="eyebrow"><span className="h-1.5 w-1.5 rotate-45 bg-gold" /> Perimeter intelligence</p>
            <h1 className="mt-7 text-balance text-5xl font-medium leading-[.98] tracking-[-0.055em] sm:text-7xl xl:text-[6.8rem]">Understand what&apos;s moving around <span className="text-sandstone">your critical assets.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/62 sm:text-xl">Kosham links observations across cameras, sensors, and locations so teams can track vehicles, identify repeat activity, and investigate across sites.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="bg-ivory px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-night transition hover:bg-signal" href="mailto:hello@kosham.ai?subject=Kosham%20briefing">Request a briefing <span aria-hidden="true">↗</span></a>
              <a className="border border-white/20 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] transition hover:border-white/60" href="#platform">Explore the system <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end"><LayeredCore /></div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-wrap justify-between gap-5 border-t border-white/10 px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-ivory/40 sm:px-10 lg:px-16">
          <span>Physical world intelligence</span><span>Built for India</span>
        </div>
      </section>

      <section id="platform" className="border-b border-night/10 bg-ivory px-6 py-24 text-night sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <p className="eyebrow text-deep"><span className="h-px w-8 bg-gold" /> From observation to action</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl">Cameras record events.<br />Kosham builds <span className="text-deep/45">understanding.</span></h2>
            <p className="max-w-lg text-base leading-7 text-deep/65">Most camera footage is isolated by site and timestamp. Kosham links repeat observations so teams can trace vehicles, find associations, and review activity outside the gate.</p>
          </div>

          <div className="mt-20 grid gap-10 bg-deep p-6 text-ivory sm:p-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div>
              <p className="eyebrow"><span className="h-1.5 w-1.5 bg-signal" /> One entity. Every encounter.</p>
              <h3 className="mt-6 text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl">Track repeat activity across sites.</h3>
              <p className="mt-5 max-w-lg text-sm leading-6 text-ivory/58">Kosham links each sighting to the same entity record. Operators can see where a vehicle appeared, when it returned, and which sites it approached.</p>
            </div>
            <div className="border border-white/15 bg-night/70 p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[10px] uppercase tracking-[0.18em] text-ivory/40"><span>Entity / VEH-2741</span><span className="flex items-center gap-2 text-signal"><span className="h-1.5 w-1.5 rounded-full bg-signal" /> Live network</span></div>
              <div className="mt-4 grid gap-4 sm:grid-cols-[.85fr_1.15fr]">
                <div className="border border-white/10 bg-white/[.035] p-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-ivory/35">Registration</p>
                  <p className="mt-2 text-xl font-medium">MH 04 XX 2741</p>
                  <div className="mt-6 space-y-4 text-xs">
                    <div><p className="text-ivory/35">First observed</p><p className="mt-1 text-ivory/80">SITE 04 · 02:14 IST</p></div>
                    <div><p className="text-ivory/35">Network encounters</p><p className="mt-1 text-ivory/80">07 across 03 locations</p></div>
                    <div><p className="text-ivory/35">Pattern</p><p className="mt-1 text-gold">Repeat perimeter activity</p></div>
                  </div>
                </div>
                <div className="relative min-h-64 overflow-hidden border border-white/10 bg-[#111a2d]">
                  <div className="absolute inset-0 bg-map-grid opacity-50" />
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 300" fill="none" aria-hidden="true">
                    <path d="M26 240C86 208 96 85 169 102c72 18 77 115 142 94 38-12 43-56 84-73" stroke="#7297FF" strokeWidth="1.4" strokeDasharray="5 6" opacity=".8" />
                    <path d="M52 40c74 42 115 8 174 48 49 33 47 94 151 149" stroke="#D8C3A5" strokeWidth=".8" opacity=".25" />
                    {[[26,240],[169,102],[311,196],[395,123]].map(([x,y], i) => <g key={i}><circle cx={x} cy={y} r="10" fill="#7297FF" opacity=".13" /><circle cx={x} cy={y} r="3" fill="#7297FF" /></g>)}
                  </svg>
                  <div className="absolute bottom-4 left-4 border border-white/10 bg-night/80 px-3 py-2 text-[9px] uppercase tracking-[.16em] text-ivory/50">Cross-site path resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SystemLayers />

      <section className="relative overflow-hidden bg-sandstone px-6 py-24 text-night sm:px-10 lg:px-16 lg:py-28">
        <div className="stepwell-corner bottom-0 right-0" aria-hidden="true" />
        <div className="mx-auto max-w-[1320px]">
          <div className="relative grid min-h-[520px] overflow-hidden border border-night/15 bg-ivory lg:grid-cols-[1fr_.9fr] lg:items-stretch">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-deep"><span className="h-1.5 w-1.5 rotate-45 bg-gold" /> Built for India</p>
              <h2 className="editorial-display mt-6 text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">Designed for India.</h2>
              <p className="mt-7 max-w-xl text-base leading-7 text-deep/68">Deployments may span industrial corridors, dense cities, remote terrain, and disconnected networks. Kosham is built to operate across them.</p>
              <div className="mt-10 border-t border-night/15 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Built for sovereign capability</p>
                <p className="mt-4 max-w-xl text-lg leading-7 text-deep/75">Technology developed for India&apos;s security requirements, infrastructure, and operating environment.</p>
              </div>
            </div>
            <div className="relative flex min-h-80 items-center justify-center border-t border-night/15 bg-[#cfb48f] p-8 lg:border-l lg:border-t-0">
              <div className="absolute inset-6 border border-night/10" />
              <div className="absolute inset-0 bg-indian-grid opacity-25" />
              <div className="relative text-center">
                <p className="indic-display text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-none tracking-[-0.055em]">सत्यमेव जयते</p>
                <div className="mx-auto my-6 flex max-w-xs items-center gap-4"><span className="h-px flex-1 bg-night/30" /><span className="h-3 w-3 rotate-45 border border-night/50" /><span className="h-px flex-1 bg-night/30" /></div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-deep/55">Truth alone triumphs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="relative overflow-hidden border-y border-white/10 bg-deep px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute bottom-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 translate-y-1/2 rotate-45 border border-signal/10" />
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow"><span className="h-1.5 w-1.5 rotate-45 bg-gold" /> Safer communities</p>
              <h2 className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl">Security does not stop at the perimeter.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-ivory/60 lg:justify-self-end">Critical sites do not operate in isolation. Better perimeter awareness helps teams respond sooner, preserve evidence, and coordinate with nearby sites and response teams.</p>
          </div>
          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {communityOutcomes.map((outcome) => (
              <article className="bg-deep p-7 sm:p-9" key={outcome.title}>
                <span className="text-[10px] font-bold tracking-[0.2em] text-gold">{outcome.number}</span>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em]">{outcome.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ivory/55">{outcome.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 pb-10 pt-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 border-b border-white/10 pb-20 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-sandstone/70"><span className="h-px w-8 bg-gold" /><span className="indic-display tracking-normal">कोशम्</span></p>
              <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl">A unified intelligence layer for the physical world.</h2>
            </div>
            <a className="inline-block bg-gold px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-night transition hover:bg-sandstone" href="mailto:hello@kosham.ai?subject=Kosham%20briefing">Talk to us <span aria-hidden="true">↗</span></a>
          </div>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div><KoshamMark compact /><p className="mt-4 max-w-sm text-xs leading-5 text-ivory/35">Perimeter intelligence for the physical world.</p></div>
          <div className="text-left text-[10px] uppercase tracking-[0.18em] text-ivory/35 sm:text-right"><a className="transition hover:text-ivory" href="mailto:hello@kosham.ai">hello@kosham.ai</a><p className="mt-2">© {new Date().getFullYear()} Kosham Technologies</p></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
