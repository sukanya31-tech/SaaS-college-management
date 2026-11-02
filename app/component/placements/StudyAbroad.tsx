"use client";

import { CreditCard, GraduationCap, SendHorizontal, Sparkles } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Counseling",
    desc: "Expert guidance tailored for your engineering career path abroad.",
    icon: "graduation-cap",
  },
  {
    title: "Student Loans",
    desc: "Expert guidance tailored for your engineering career path abroad.",
    icon: "credit-card",
  },
  {
    title: "Scholarships",
    desc: "Expert guidance tailored for your engineering career path abroad.",
    icon: "sparkles",
  },
  {
    title: "Pre-Departure",
    desc: "Expert guidance tailored for your engineering career path abroad.",
    icon: "send-horizontal",
  },
];

export default function StudyAbroadSection() {
  return (
    <section className="bg-[var(--background)] py-16 px-6 md:px-12 lg:px-20">
      {/* Tag */}
      <div className="mb-4">
        <span className="text-xs tracking-widest uppercase bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-3 py-1 border border-[var(--theme-color2)]/50 rounded-sm font-semibold">
          Global Education
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-color)] mb-12">
        Graduate Study Abroad Center.
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="group bg-[var(--background)] rounded-2xl border border-[var(--body-text-color)]/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-color2)] hover:shadow-lg"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--theme-color2)]/5 mb-4 transition-colors duration-300 group-hover:bg-[var(--theme-color2)]">
              {item.icon === "graduation-cap" ? (
                <GraduationCap className="w-5 h-5 text-[var(--theme-color2)] transition-colors duration-300 group-hover:text-[var(--background)]" />
              ) : item.icon === "credit-card" ? (
                <CreditCard className="w-5 h-5 text-[var(--theme-color2)] transition-colors duration-300 group-hover:text-[var(--background)]" />
              ) : item.icon === "sparkles" ? (
                <Sparkles className="w-5 h-5 text-[var(--theme-color2)] transition-colors duration-300 group-hover:text-[var(--background)]" />
              ) : item.icon === "send-horizontal" ? (
                <SendHorizontal className="w-5 h-5 text-[var(--theme-color2)] -rotate-90 transition-colors duration-300 group-hover:text-[var(--background)]" />
              ) : (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                />
              )}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-[var(--theme-color)] mb-2 transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[var(--body-text-color)] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}