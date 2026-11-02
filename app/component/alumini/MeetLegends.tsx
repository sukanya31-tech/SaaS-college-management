"use client";

import Image from "next/image";

const alumni = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "SENIOR DEV AT GOOGLE",
    year: "CLASS OF 2018",
    image: "/alumini/legend1.png",
    badge: "bg-blue-600/20 text-blue-400",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "PRODUCT DESIGNER",
    year: "CLASS OF 2020",
    image: "/alumini/legend-2.png",
    badge: "bg-fuchsia-600/20 text-fuchsia-400",
    active: true,
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "AI RESEARCHER",
    year: "CLASS OF 2015",
    image: "/alumini/legend3.png",
    badge: "bg-pink-600/20 text-pink-400",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "FOUNDER OF TECHBLOOM",
    year: "CLASS OF 2019",
    image: "/alumini/legend4.png",
    badge: "bg-pink-600/20 text-pink-400",
  },
];

export default function LegendsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--theme-color)] py-20 text-[var(--background)]">

      {/* Decorative purple accent (left-bottom) */}
      <span className="pointer-events-none absolute -left-28 -bottom-28 h-84 w-84 rounded-full bg-[var(--theme-purple)]/30 blur-3xl z-0"></span>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Top Label */}
        <div className="mb-5 flex justify-center">
          <span className="rounded-full border border-[var(--theme-color2)]/30 bg-[var(--theme-color2)]/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-[var(--theme-color2)]">
            Network Directory
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl font-bold tracking-tight md:text-6xl">
          Meet Our{" "}
          <span className="italic font-semibold text-[var(--background)]">Legends</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-[var(--background)]/50">
          From Silicon Valley to independent startups, our alumni are shaping
          the future of technology and design through innovation and leadership.
        </p>

        {/* Cards */}
          <div className="mt-20 grid grid-cols-1 lg:gap-46 md:gap-18 md:grid-cols-2 xl:grid-cols-4 justify-center justify-items-center">
            <div className={`group relative w-[19rem] -mx-8 rounded-[24px] border-l border-t-4 border-r-4 border-b-4 border-[var(--background)] bg-[var(--theme-color)] px-8 pt-10 pb-0 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] flex flex-col justify-between min-h-[22rem]`}>
              <div className="card-inner flex h-full flex-1 flex-col">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-[3px] border-[var(--body-text-color)]">
                  <Image
                    src="/alumini/legend1.png"
                    alt="Alex Rivera"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-tight">
                  Alex Rivera
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[2px] text-[var(--background)]/50">
                  SENIOR DEV AT GOOGLE
                </p>
                <div className="mt-8">
                  <span className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide bg-[var(--theme-blue)]/10 border border-[var(--theme-blue)]/20 text-[var(--theme-blue)]`}>
                    CLASS OF 2018
                  </span>
                </div>
              </div>
              <span className="pointer-events-none absolute bottom-0 left-4 right-4 h-[4px] max-w-full origin-center scale-x-0 bg-[var(--theme-blue)] transition-transform duration-300 group-hover:scale-x-100 overflow-hidden"></span>
            </div>

            <div className={`group relative w-[19rem] -mx-4 rounded-[24px] border-l-4 border-t-4 border-r-4 border-b-4 border-[var(--background)] bg-[var(--theme-color)] px-8 pt-10 pb-0 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(168,85,247,0.4)] flex flex-col justify-between min-h-[22rem]`}>
              <div className="card-inner flex h-full flex-1 flex-col">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-[3px] border-[var(--body-text-color)]">
                  <Image
                    src="/alumini/legend-2.png"
                    alt="Sarah Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-tight">
                  Sarah Chen
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[2px] text-[var(--background)]/50">
                  PRODUCT DESIGNER
                </p>
                <div className="mt-8">
                  <span className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide bg-[var(--theme-purple)]/20 border border-[var(--theme-purple)]/30 text-[var(--theme-purple)]`}>
                    CLASS OF 2020
                  </span>
                </div>
              </div>
              <span className="pointer-events-none absolute bottom-0 left-4 right-4 h-[4px] max-w-full origin-center scale-x-0 bg-[var(--theme-purple)] transition-transform duration-300 group-hover:scale-x-100 overflow-hidden"></span>
            </div>

            <div className={`group relative w-[19rem] -mx-4 rounded-[24px] border-l border-t-4 border-r-4 border-b-4 border-[var(--background)] bg-[var(--theme-color)] px-8 pt-10 pb-0 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(236,72,153,0.4)] flex flex-col justify-between min-h-[22rem]`}>
              <div className="card-inner flex h-full flex-1 flex-col">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-[3px] border-[var(--body-text-color)]">
                  <Image
                    src="/alumini/legend3.png"
                    alt="Marcus Thorne"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-tight">
                  Marcus Thorne
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[2px] text-[var(--background)]/50">
                  AI RESEARCHER
                </p>
                <div className="mt-8">
                  <span className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 text-[var(--theme-color2)]`}>
                    CLASS OF 2015
                  </span>
                </div>
              </div>
              <span className="pointer-events-none absolute bottom-0 left-4 right-4 h-[4px] max-w-full origin-center scale-x-0 bg-[var(--theme-color2)] transition-transform duration-300 group-hover:scale-x-100 overflow-hidden"></span>
            </div>

            <div className={`group relative w-[19rem] -mx-4 rounded-[24px] border-l-4 border-t-4 border-r-4 border-b-4 border-[var(--background)] bg-[var(--theme-color)] px-8 pt-10 pb-0 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(236,72,153,0.4)] flex flex-col justify-between min-h-[22rem]`}>
              <div className="card-inner flex h-full flex-1 flex-col">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-[3px] border-[var(--body-text-color)]">
                  <Image
                    src="/alumini/legend4.png"
                    alt="Elena Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-tight">
                  Elena Rodriguez
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[2px] text-[var(--background)]/50">
                  FOUNDER OF TECHBLOOM
                </p>
                <div className="mt-8">
                  <span className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 text-[var(--theme-color2)]`}>
                    CLASS OF 2019
                  </span>
                </div>
              </div>
              <span className="pointer-events-none absolute bottom-0 left-4 right-4 h-[4px] max-w-full origin-center scale-x-0 bg-[var(--theme-color2)] transition-transform duration-300 group-hover:scale-x-100 overflow-hidden"></span>
            </div>
        </div>

        {/* Button */}
        <div className="mt-20 flex justify-center">
          <button className="rounded-full bg-[var(--theme-color2)] px-10 py-4 text-lg font-semibold text-[var(--background)] shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition hover:scale-105">
            Join the Alumni Network
          </button>
        </div>
      </div>
    </section>
  );
}