
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isLogoMarqueePaused, setIsLogoMarqueePaused] = useState(false);

  return (
    <main className="min-h-[80vh] bg-[var(--theme-black)] text-[var(--background)] flex justify-center">
      <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <div className="inline-block mb-6 px-4 py-1 text-xs tracking-widest rounded-full text-[var(--theme-color2)] border border-[var(--theme-color2)]/50 font-bold">
            CAMPUS PLACEMENT 2024
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[var(--background)] leading-tight mb-6">
            Connecting Talent with Industry Leaders
          </h1>

          <p className="text-[var(--background)]/70 max-w-xl text-xl mb-10">
            Our placement cell bridges the gap between academic excellence and
            corporate requirements. Partnering with top-tier organizations to
            ensure our students build successful careers.
          </p>

          <div className="mt-6 flex gap-12">
            <div>
              <h2 className="text-3xl font-bold">450+</h2>
              <p className="text-[var(--body-text-color)] text-sm tracking-widest">
                COMPANIES VISITED
              </p>
            </div>
            <div className="h-12 w-px bg-[var(--body-text-color)]/30 self-center" />
            <div>
              <h2 className="text-3xl font-bold">98%</h2>
              <p className="text-[var(--body-text-color)] text-sm tracking-widest">
                PLACEMENT RATE
              </p>
            </div>
          </div>
        </div>

        {/* Right Logos: two vertical tracks — left scrolls up, right scrolls down */}
        <div
          className="logo-marquee relative isolate mt-8 md:mt-14 flex gap-4 justify-end items-start"
          onMouseEnter={() => setIsLogoMarqueePaused(true)}
          onMouseLeave={() => setIsLogoMarqueePaused(false)}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[var(--theme-black)]/70 via-[var(--theme-black)]/35 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[var(--theme-black)]/70 via-[var(--theme-black)]/35 to-transparent" />

          {/** Split logos into two columns by index */}
          <div className="w-48 h-[600px] overflow-hidden">
            <div
              className="logo-track logo-track-up"
              style={{ animationPlayState: isLogoMarqueePaused ? "paused" : "running" }}
            >
              {logos
                .filter((_, i) => i % 2 === 0)
                .concat(logos.filter((_, i) => i % 2 === 0))
                .map((logo, i) => (
                  <div
                    key={`left-${i}`}
                    className="group bg-[var(--theme-color)]/25 border border-[var(--body-text-color)]/45 rounded-2xl w-full h-35 flex items-center justify-center shadow-lg p-3 mb-4 transition-all duration-300 hover:border-[var(--theme-color2)]/70 hover:shadow-[0_0_24px_rgba(236,72,153,0.45)]"
                  >
                    <Image
                      src={logo}
                      alt={`company-${i}`}
                      width={logo.includes("accenture") ? 150 : 110}
                      height={logo.includes("accenture") ? 70 : 55}
                      className="object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 group-hover:saturate-150 group-hover:contrast-125"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="w-48 h-[600px] overflow-hidden">
            <div
              className="logo-track logo-track-down"
              style={{ animationPlayState: isLogoMarqueePaused ? "paused" : "running" }}
            >
              {logos
                .filter((_, i) => i % 2 === 1)
                .concat(logos.filter((_, i) => i % 2 === 1))
                .map((logo, i) => (
                  <div
                    key={`right-${i}`}
                    className="group bg-[var(--theme-color)]/25 border border-[var(--body-text-color)]/45 rounded-2xl w-full h-35 flex items-center justify-center shadow-lg p-3 mb-4 transition-all duration-300 hover:border-[var(--theme-color2)]/70 hover:shadow-[0_0_24px_rgba(236,72,153,0.45)]"
                  >
                    <Image
                      src={logo}
                      alt={`company-${i}`}
                      width={110}
                      height={55}
                      className="object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 group-hover:saturate-150 group-hover:contrast-125"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const logos = [
  "/placements1/accenture.png",
  "/placements1/cognizant-logo.svg",
  "/placements1/dbs-logo.svg",
  "/placements1/tcs.png",
  "/placements1/cgi.png",
  "/placements1/infosys.png",
  "/placements1/newgen.png",
  "/placements1/Submit-tech-logo.png",
  "/placements1/ces.png",
  "/placements1/epam.svg",
  "/placements1/arcot.png",
  "/placements1/synechronwhite.png",
  "/placements1/dataeconomy.png",
  "/placements1/normsoftware.png",
];

