"use client";

import Image from "next/image";

export default function AboutMinutes() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[40vh] min-h-[300px] sm:min-h-[280px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/academics/Minutesmeetinghero.png"
        alt="Campus"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Left Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-color)]/90 via-[var(--theme-color)]/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full w-full max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10 xl:px-16">
        
        <div className="mt-6 sm:mt-7 md:mt-8 flex items-start gap-2 sm:gap-3 md:gap-4 max-w-full sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl">

          {/* Pink Line */}
          <div className="-mt-2 sm:mt-1 md:-mt-1 lg:mt-1 w-[2px] sm:w-[3px] h-24 sm:h-28 md:h-32 lg:h-28 bg-[var(--theme-color2)] flex-shrink-0"></div>

          <div className="w-full">
            {/* Small Heading */}
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[4px] sm:tracking-[5px] md:tracking-[6px] text-[var(--background)] font-semibold mb-2 sm:mb-2.5 md:mb-3 leading-tight">
              <span className="text-[var(--theme-color2)]">MINUTES OF</span> MEETING
            </p>

            {/* Glass Card */}
            <div className="bg-[var(--theme-bg-light)]/5 border border-[var(--background)]/20 rounded-md p-2.5 sm:p-3 md:p-4 lg:p-5 lg:w-[460px] xl:w-[600px] text-[var(--background)]/80 text-xs sm:text-sm md:text-base font-semibold leading-relaxed shadow-lg">
              <em>
                Official records documenting intitutional decisions, academic
                milestones, and technical progress to ensures transparency and
                accountability.
              </em>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}