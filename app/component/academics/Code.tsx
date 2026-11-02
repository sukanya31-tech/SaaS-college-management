"use client";

import { ShieldCheck, Users, Scale, Clock, Zap, EyeOff, FileWarning } from "lucide-react";

const items = [
  {
    title: "Academic Integrity",
    tag: "CORE VALUE",
    desc: "Uphold the highest standards of honesty. Plagiarism, cheating, or data falsification will result in immediate disciplinary action.",
    icon: ShieldCheck,
  },
  {
    title: "Inclusion & Respect",
    tag: "COMMUNITY",
    desc: "Maintain a zero-tolerance policy towards harassment, discrimination, or bullying. Every voice deserves a safe space.",
    icon: Users,
  },
  {
    title: "Professional Decorum",
    tag: "STANDARD",
    desc: "Students are expected to adhere to the prescribed dress code and maintain professional etiquette during campus hours.",
    icon: Scale,
  },
  {
    title: "Punctuality & Presence",
    tag: "ATTENDANCE",
    desc: "Minimum 75% attendance is mandatory. Consistent tardiness affects both internal grading and laboratory access.",
    icon: Clock,
  },
  {
    title: "Digital Ethics",
    tag: "IT POLICY",
    desc: "Responsible use of campus Wi-Fi and computing resources. Cybersecurity breaches are handled with legal protocols.",
    icon: Zap,
  },
  {
    title: "Substance Policy",
    tag: "SAFETY",
    desc: "The campus is a strictly tobacco, alcohol, and drug-free zone. Possession leads to immediate suspension.",
    icon: EyeOff,
  },
];

export default function CodeOfConduct() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-16">
      <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10 xl:px-16">

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest bg-[var(--theme-color2)]/10 border border-[var(--theme-color2)]/20 text-[var(--theme-color2)] px-4 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)]" aria-hidden="true" />
            INSTITUTIONAL STANDARDS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-color)] mb-3">
          CODE OF <span className="italic text-[var(--body-text-color)]">CONDUCT</span>
        </h2>

        {/* Description */}
        <p className="text-[var(--body-text-color)] max-w-2xl mb-10 text-sm md:text-base">
          Our campus thrives on mutual respect and professional excellence. All students are expected to harmonize their behavior with the following pillars of our community.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-[var(--background)] rounded-2xl p-6 border border-[var(--theme-bg-light)]/5 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 min-h-[300px]"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--footer-text-color)] mb-4">
                  <Icon className="w-5 h-5 text-[var(--theme-color2)] transition-transform duration-300 group-hover:scale-110" />
                </div>

                <p className="text-[10px] tracking-widest text-[var(--body-text-color)] font-semibold mb-1">
                  {item.tag}
                </p>

                <h3 className="text-lg font-semibold text-[var(--theme-color)] mb-2 transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--body-text-color)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 bg-[var(--background)] border border-[var(--theme-bg-light)]/5 rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-[var(--theme-color2)]/5 rounded-lg">
              <FileWarning className="w-4 h-4 text-[var(--theme-color2)]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--theme-color)]">
                Non-Compliance Notice
              </p>
              <p className="text-xs text-[var(--body-text-color)]">
                Violations are reviewed by the Academic Board and may lead to permanent expulsion.
              </p>
            </div>
          </div>

          <button className="bg-[var(--theme-color)] text-[var(--background)] text-xs font-semibold px-5 py-2 rounded-full hover:bg-[var(--theme-color2)] transition">
            DOWNLOAD HANDBOOK PDF
          </button>
        </div>

      </div>
    </section>
  );
}
