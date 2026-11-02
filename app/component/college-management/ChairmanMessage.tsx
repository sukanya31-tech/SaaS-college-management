"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[var(--background)] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <span className=" text-[var(--theme-color2)]  text-md font-bold  tracking-wider">
              LEADERSHIP
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--footer-bg)] leading-tight">
              College Chairman
        
            </h2>

            {/* Description */}
            <p className="mt-6 text-[var(--body-text-color)] font-semibold leading-relaxed max-w-xl border-l-4 border-[var(--theme-color2)] pl-4">
                <em>
               "Empowering the next generation of innovators through excellence in
                education and a commitment to holistic development. We don't just 
                build careers: we build the future leaders of our global society."
              </em>
              
            </p>

            <div className="mt-8 w-full max-w-sm rounded-2xl bg-white p-6 shadow-md border border-[var(--footer-bg)]/10 hover:border-[var(--theme-color2)] cursor-pointer transition-colors duration-200 group">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--theme-color2)] text-[var(--background)] transition-all duration-300 group-hover:bg-[var(--theme-color2)] group-hover:text-[var(--background)] group-hover:rotate-12">
                  <UserRound size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[var(--footer-bg)] leading-none">Dr. Harrison Reed</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-[var(--body-text-color)]">
                    Founding Chairman
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
        <div className="group relative w-full h-[400px] md:h-[460px] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.01] hover:-rotate-1">

          <Image
          src="/management/chairman.png"
          alt="Students studying"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="w-full h-[500px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out"/>

          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[var(--color-theme)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
            {/* ✅ FLOATING BADGE (FIXED) */}
          <div className="
           absolute 
           lg:top-214 lg:left-190
           translate-y-105 lg:translate-y-0
           md:top-145 md:left-100
           bg-[var(--background)] rounded-2xl 
           px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4
           shadow-xl border border-[var(--footer-bg)]/10
           text-center animate-bounce hover:animate-none transition-all duration-300">

            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--theme-color2)]">
              25+
            </p>
            <p className="mt-1 text-[9px] sm:text-xs uppercase tracking-[0.2em] text-[var(--body-text-color)] font-semibold">
              Years of Impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}