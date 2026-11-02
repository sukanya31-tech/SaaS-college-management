"use client";

import Image from "next/image";

export default function ManagementOfCollege() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[40vh] min-h-[300px] sm:min-h-[280px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/management/management hero.png"
        alt="Campus"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Left Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-color)]/90 via-[var(--theme-color)]/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full w-full max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10 xl:px-16">
        
        <div className="flex items-start gap-2 sm:gap-3 md:gap-4 max-w-full sm:max-w-sm md:max-w-md lg:max-w-xl">

          {/* Pink Line */}
          <div className="w-[2px] sm:w-[3px] h-20 sm:h-24 md:h-28 lg:h-32 bg-[var(--theme-color2)] mt-1 flex-shrink-0"></div>

          <div className="w-full">
            {/* Small Heading */}
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-xs tracking-[4px] sm:tracking-[5px] md:tracking-[6px] text-[var(--background)] font-semibold mb-2 sm:mb-2.5 md:mb-3 leading-tight">
              <span className="text-[var(--theme-color2)]">MANAGEMENT</span> OF COLLEGE
            </p>

            {/* Glass Card */}
            <div className="bg-[var(--theme-bg-light)]/5 backdrop-blur-xs border border-[var(--background)]/20 rounded-md p-2.5 sm:p-3 md:p-4 lg:p-5 text-[var(--background)]/80 text-xs sm:text-sm md:text-base leading-relaxed shadow-lg">
              <em>
                Our administrative framework is dedicated to optimizing campus
                operations and academic workflows. We ensure excellence through
                strategic resource planning and institutional growth.
              </em>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
      