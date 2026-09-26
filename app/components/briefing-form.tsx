"use client";

import { FormEvent } from "react";

export default function BriefingForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = encodeURIComponent(`Request a Briefing from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nI would like to request a briefing.`);

    window.location.href = `mailto:hi@kosham.ai?subject=${subject}&body=${body}`;
  }

  const inputClass = "mt-2 w-full border border-white/15 bg-white/[.035] px-4 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/25 focus:border-signal";

  return (
    <form className="border border-white/12 bg-white/[.025] p-6 sm:p-8" onSubmit={handleSubmit}>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Request a Briefing</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-ivory/45">
          Name
          <input className={inputClass} name="name" type="text" autoComplete="name" required />
        </label>
        <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-ivory/45">
          Company
          <input className={inputClass} name="company" type="text" autoComplete="organization" required />
        </label>
        <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-ivory/45 sm:col-span-2">
          Work email
          <input className={inputClass} name="email" type="email" autoComplete="email" inputMode="email" required />
        </label>
      </div>
      <button className="mt-6 bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-night transition hover:bg-sandstone" type="submit">Request a Briefing</button>
    </form>
  );
}
