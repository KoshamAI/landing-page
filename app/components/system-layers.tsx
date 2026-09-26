"use client";

import { useState } from "react";

const stages = [
  {
    name: "Sensors",
    label: "What is deployed",
    title: "Deploy a connected sensor network.",
    detail: "Kosham provides cameras and other sensors built for the platform, along with the edge devices and gateways that connect them. Compatible existing feeds can join the same network.",
  },
  {
    name: "Perception",
    label: "What is seen",
    title: "Turn raw footage into usable observations.",
    detail: "Edge models detect and classify vehicles and events while preserving the source footage behind each observation.",
  },
  {
    name: "Networks",
    label: "What connects",
    title: "Track repeat activity across sites.",
    detail: "Kosham links observations across locations and systems so operators can see where a vehicle appeared, when it returned, and which sites it approached.",
  },
  {
    name: "Intelligence",
    label: "What it means",
    title: "Connect each observation to the entity behind it.",
    detail: "An ontology links vehicles, sites, organizations, routes, and events so operators can trace relationships between detections and the records connected to them.",
  },
  {
    name: "Investigate",
    label: "Dig deeper",
    title: "Ask the next question in plain language.",
    detail: "Operators can investigate activity across sites and trace every answer back to the observations behind it.",
  },
];

function SensorsVisual() {
  return (
    <div className="grid h-full min-h-[390px] grid-cols-2 gap-3">
      {[
        ["CAM-042", "East perimeter", "Online"],
        ["ANPR-018", "Gate 02", "Online"],
        ["RADAR-006", "North approach", "Online"],
        ["EDGE-012", "Site 11", "Online"],
      ].map(([id, location, status], index) => (
        <div className="relative flex min-h-44 flex-col justify-between overflow-hidden border border-white/12 bg-night p-5" key={id}>
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-1/2 -translate-y-1/2 rotate-45 border border-signal/15" />
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-ivory/38"><span>0{index + 1}</span><span className="text-signal">{status}</span></div>
          <div><p className="text-2xl font-medium tracking-[-0.035em]">{id}</p><p className="mt-2 text-sm text-ivory/48">{location}</p></div>
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-ivory/35"><span className="h-1.5 w-1.5 rounded-full bg-signal" /> Telemetry received</div>
        </div>
      ))}
    </div>
  );
}

function NetworksVisual() {
  return (
    <div className="relative h-full min-h-[390px] overflow-hidden border border-white/12 bg-night">
      <div className="absolute inset-0 bg-map-grid opacity-35" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 440" fill="none" role="img" aria-label="Vehicle observations shown as an intelligence overlay on a road map">
        <g stroke="#D8C3A5" strokeOpacity=".18" strokeWidth="5">
          <path d="M-24 94C102 74 205 116 320 88c146-35 244-20 424 18" />
          <path d="M44 462c52-108 108-174 203-236C350 159 432 98 486-22" />
          <path d="M194 458c11-94 79-140 165-172 112-41 196-98 258-218" />
          <path d="M-20 304c126 32 236 20 344-22 125-49 227-42 420-2" />
        </g>
        <g stroke="#D8C3A5" strokeOpacity=".11" strokeWidth="2">
          <path d="M-8 174c111 19 194 6 278-27 94-37 199-21 291 24 62 30 115 33 180 20" />
          <path d="M102-18c38 94 82 147 158 190 95 54 125 117 136 278" />
          <path d="M590-18c-21 95-7 165 54 231 45 49 63 116 53 230" />
          <path d="M13 392c102-35 174-29 262 12 63 29 131 27 225-5 73-25 146-20 232 17" />
        </g>
        <path d="M62 338C158 292 166 104 298 128c118 22 122 174 224 131 61-26 72-94 139-118" stroke="#10182B" strokeWidth="6" opacity=".8" />
        <path d="M62 338C158 292 166 104 298 128c118 22 122 174 224 131 61-26 72-94 139-118" stroke="#7297FF" strokeWidth="2.5" strokeDasharray="7 7" />
        {[[62,338],[298,128],[522,259],[661,141]].map(([x,y], index) => (
          <g key={index}>
            <circle cx={Number(x)} cy={Number(y)} r="18" fill="#7297FF" opacity=".12" />
            <circle cx={Number(x)} cy={Number(y)} r="5" fill="#7297FF" />
          </g>
        ))}
      </svg>
      <div className="absolute left-5 top-5 border border-white/10 bg-night/90 px-4 py-3 text-[9px] uppercase tracking-[.16em] text-ivory/50"><span className="text-signal">Map overlay</span> · Road network</div>
      <div className="absolute bottom-5 left-5 border border-white/10 bg-night/90 px-4 py-3 text-[9px] uppercase tracking-[.16em] text-ivory/50">Highlighted path · 04 linked observations</div>
      <div className="absolute bottom-5 right-5 text-[9px] uppercase tracking-[.16em] text-ivory/30">2 km</div>
    </div>
  );
}

function PerceptionVisual() {
  return (
    <div className="relative h-full min-h-[390px] overflow-hidden border border-white/12 bg-[#111a2d]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-x-[12%] bottom-[13%] top-[12%] border border-white/8">
        <div className="absolute bottom-[18%] left-[13%] h-[31%] w-[43%] border-2 border-signal">
          <span className="absolute -top-7 left-[-2px] bg-signal px-2 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-night">Vehicle · 98.4%</span>
        </div>
        <div className="absolute right-[12%] top-[19%] h-[22%] w-[20%] border border-gold">
          <span className="absolute -top-6 left-[-1px] whitespace-nowrap bg-gold px-2 py-1 text-[8px] font-bold uppercase tracking-[.12em] text-night">Plate detected</span>
        </div>
        <div className="absolute bottom-[12%] left-[8%] h-px w-[84%] bg-white/10" />
        <div className="absolute bottom-[12%] left-[61%] h-[70%] w-px bg-white/10" />
      </div>
      <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[.18em] text-ivory/40">CAM-042 · East perimeter · Live</div>
      <div className="absolute bottom-5 right-5 text-right text-[9px] uppercase tracking-[.18em] text-signal">Observation retained<br />02:14:08 IST</div>
    </div>
  );
}

function IntelligenceVisual() {
  return (
    <div className="relative h-full min-h-[390px] overflow-hidden border border-white/12 bg-night p-4 sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[9px] uppercase tracking-[0.18em] text-ivory/38"><span>Entity graph / MH 04 XX 2741</span><span className="text-signal">5 linked records</span></div>
      <svg className="mt-2 h-[calc(100%_-_44px)] w-full" viewBox="0 0 760 390" fill="none" role="img" aria-label="Vehicle registration MH 04 XX 2741 connected to sites, a route, an event, and an organization">
        <g stroke="#7297FF" strokeOpacity=".42" strokeWidth="1.3">
          <path d="M246 195H330" />
          <path d="M330 47V327" />
          <path d="M330 47H414" /><path d="M330 117H414" /><path d="M330 187H414" /><path d="M330 257H414" /><path d="M330 327H414" />
        </g>
        <g fill="#7297FF"><circle cx="330" cy="47" r="3" /><circle cx="330" cy="117" r="3" /><circle cx="330" cy="187" r="3" /><circle cx="330" cy="257" r="3" /><circle cx="330" cy="327" r="3" /></g>

        <rect x="36" y="140" width="210" height="110" fill="#16213A" stroke="#7297FF" strokeWidth="1.5" />
        <text x="58" y="168" fill="#7297FF" fontFamily="Inter, Arial, sans-serif" fontSize="8" letterSpacing="2">VEHICLE</text>
        <text x="58" y="205" fill="#F4F0E7" fontFamily="Inter, Arial, sans-serif" fontSize="20">MH 04 XX 2741</text>
        <text x="58" y="232" fill="#D8C3A5" fontFamily="Inter, Arial, sans-serif" fontSize="8" letterSpacing="1.4">INTERNAL ID · VEH-2741</text>

        <g fill="#10182B" stroke="#D8C3A5" strokeOpacity=".35">
          <rect x="414" y="20" width="300" height="54" /><rect x="414" y="90" width="300" height="54" /><rect x="414" y="160" width="300" height="54" /><rect x="414" y="230" width="300" height="54" /><rect x="414" y="300" width="300" height="54" />
        </g>
        <g fontFamily="Inter, Arial, sans-serif">
          <g fontSize="8" letterSpacing="1.8"><text x="434" y="42" fill="#7297FF">LOCATION</text><text x="434" y="112" fill="#7297FF">LOCATION</text><text x="434" y="182" fill="#C98632">EVENT</text><text x="434" y="252" fill="#7297FF">ROUTE</text><text x="434" y="322" fill="#C98632">ORGANIZATION</text></g>
          <g fill="#F4F0E7" fontSize="15"><text x="574" y="52">Site 04</text><text x="574" y="122">Site 11</text><text x="574" y="192">Event 1842</text><text x="574" y="262">NH48</text><text x="550" y="332">Northline Logistics</text></g>
          <g fill="#D8C3A5" fontSize="7" letterSpacing="1"><text x="342" y="42">OBSERVED AT</text><text x="342" y="112">RETURNED TO</text><text x="342" y="182">GENERATED</text><text x="342" y="252">TRAVELLED VIA</text><text x="342" y="322">ASSOCIATED</text></g>
        </g>
      </svg>
    </div>
  );
}

function InvestigateVisual() {
  return (
    <div className="flex h-full min-h-[390px] flex-col overflow-hidden border border-white/12 bg-night p-4 sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[9px] uppercase tracking-[0.18em] text-ivory/38"><span>Investigation workspace</span><span className="text-signal">Evidence linked</span></div>
      <div className="mt-4 border border-signal/35 bg-signal/[.06] px-5 py-4">
        <p className="text-[8px] uppercase tracking-[0.18em] text-signal">Query</p>
        <p className="mt-2 text-base leading-6 tracking-[-0.015em] sm:text-lg">Which vehicles appeared at both Site 04 and Site 11 this month?</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.17em] text-ivory/38"><span>Matching vehicles</span><span className="text-signal">07 results</span></div>
      <div className="mt-2 grid flex-1 gap-2">
        {[
          ["MH 04 XX 2741", "Site 04 + Site 11", "07 observations", "Today · 02:14"],
          ["DL 01 AB 4829", "Site 04 + Site 11", "03 observations", "18 Sep · 23:41"],
          ["GJ 05 RK 1182", "Site 04 + Site 11", "02 observations", "11 Sep · 04:08"],
        ].map(([plate, sites, evidence, lastSeen], index) => (
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 border border-white/10 bg-white/[.025] px-4 py-3" key={plate}>
            <div className="min-w-0"><div className="flex items-center gap-3"><span className="text-[9px] font-bold tracking-[0.16em] text-gold">0{index + 1}</span><p className="truncate text-sm font-medium text-ivory">{plate}</p></div><p className="mt-1 pl-7 text-[10px] text-ivory/38">{sites} · {lastSeen}</p></div>
            <span className="border border-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-ivory/48">{evidence}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals = [SensorsVisual, PerceptionVisual, NetworksVisual, IntelligenceVisual, InvestigateVisual];

export default function SystemLayers() {
  const [active, setActive] = useState(0);
  const ActiveVisual = visuals[active];
  const stage = stages[active];

  return (
    <section id="capabilities" className="relative overflow-hidden border-b border-white/10 bg-deep px-6 py-24 text-ivory sm:px-10 lg:px-16 lg:py-28">
      <div className="absolute inset-0 bg-topography opacity-[.05]" />
      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div><p className="eyebrow"><span className="h-1.5 w-1.5 rotate-45 bg-gold" /> One connected system</p><h2 className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl">From sensors to investigation.</h2></div>
          <p className="max-w-xl text-base leading-7 text-ivory/60 lg:justify-self-end">Five layers turn distributed observations into linked records that operators can search, trace, and verify.</p>
        </div>

        <div className="mt-14 overflow-x-auto border-y border-white/12" role="tablist" aria-label="Kosham system layers">
          <div className="grid min-w-[760px] grid-cols-5">
            {stages.map((item, index) => (
              <button className={`relative border-r border-white/12 px-5 py-5 text-left transition last:border-r-0 ${active === index ? "bg-signal/[.1] text-ivory" : "text-ivory/38 hover:bg-white/[.03] hover:text-ivory/70"}`} key={item.name} onClick={() => setActive(index)} role="tab" aria-selected={active === index}>
                <span className={`text-[9px] font-bold tracking-[0.2em] ${active === index ? "text-signal" : "text-current"}`}>0{index + 1}</span>
                <span className="mt-3 block text-base font-semibold tracking-[-0.025em]">{item.name}</span>
                {active === index && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-signal" />}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid h-[820px] grid-rows-[368px_420px] gap-8 lg:h-[520px] lg:grid-cols-[.62fr_1.38fr] lg:grid-rows-1 lg:items-stretch">
          <div className="flex h-full flex-col justify-between overflow-hidden border border-white/12 bg-white/[.025] p-7 sm:p-9">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{stage.label}</p><h3 className="mt-6 text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl">{stage.title}</h3><p className="mt-6 text-sm leading-7 text-ivory/58">{stage.detail}</p></div>
          </div>
          <div className="h-full overflow-hidden" role="tabpanel" aria-label={`${stage.name} layer`}><ActiveVisual /></div>
        </div>
      </div>
    </section>
  );
}
