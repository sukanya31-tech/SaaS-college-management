"use client";

import Image from "next/image";
import { Check, Building2, Users, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <span className="bg-[var(--theme-color2)]/10 text-[var(--theme-color2)] border border-[var(--theme-color2)]/20 text-xs font-semibold px-4 py-2 rounded-md tracking-wider">
              EMPOWERING EXCELLENCE
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--footer-bg)] leading-tight">
              Shaping the Next <br />
              <span className="italic text-[var(--body-text-color)] font-medium">
                Generation of Leaders.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-[var(--body-text-color)] leading-relaxed max-w-xl">
              Founded on the principles of innovation and academic rigor, our
              institution serves as a catalyst for transformative learning. We
              inspire students to challenge the status quo and build the future.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-xl">

              <Feature text="World-Class Faculty" />
              <Feature text="Research Excellence" />
              <Feature text="Global Partnerships" />
              <Feature text="Modern Campus" />

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="group relative w-full h-[400px] md:h-[460px] rounded-4xl overflow-hidden shadow-lg">
            <Image
              src="/about/about-college.png"
              alt="Students studying"
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[var(--footer-bg)]/20 mt-16"></div>

        {/* STATS SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <StatCard
            icon={<Building2 size={26} />}
            number="15+"
            label="Years Excellence"
          />

          <StatCard
            icon={<Users size={26} />}
            number="5000+"
            label="Students Enrolled"
          />

          <StatCard
            icon={<Award size={26} />}
            number="98%"
            label="Success Rate"
          />

        </div>

      </div>
    </section>
  );
}

/* FEATURE CARD */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 bg-[var(--background)] border border-[var(--footer-bg)]/20 hover:border-[var(--theme-color2)]/40 transition-colors duration-200 shadow-md rounded-lg px-4 py-3">
      <div className="bg-[var(--theme-color2)] text-white rounded-md p-1">
        <Check size={14} />
      </div>
      <span className="text-sm font-medium text-[var(--theme-color)]">{text}</span>
    </div>
  );
}

/* STAT CARD */

function StatCard({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) {
  return (
    <div className="group bg-[var(--background)] rounded-xl p-8 shadow-sm hover:shadow-md transition">

      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[var(--theme-color2)]/10 text-[var(--theme-color2)] mb-5 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-3xl font-bold text-[var(--theme-color)]">
        {number}
      </h3>

      <p className="text-xs tracking-widest uppercase text-[var(--body-text-color)] mt-1">
        {label}
      </p>
    </div>
  );
}