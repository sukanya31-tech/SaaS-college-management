// app/components/AdmissionsSection.tsx
"use client";

import clsx from "clsx";
import { ArrowUpRight, FileDown, Zap, Briefcase, Sprout, Pill } from "lucide-react";
import { useState } from "react";

const tabs = [
  { label: "B.Tech Engineering", icon: Zap },
  { label: "Global MBA", icon: Briefcase },
  { label: "Agricultural Sciences", icon: Sprout },
  { label: "Pharmacy (B.Pharm)", icon: Pill },
];

const programContent = {
  "B.Tech Engineering": {
    title: "B.Tech Engineering",
    description: "Future-ready specializations in AI, Robotics, and Sustainable Tech.",
    seats: "1200+",
    duration: "4 Years",
    packages: "45 LPA",
    tags: ["CSE", "ECE", "Mechanical", "AI & DS"],
  },
  "Global MBA": {
    title: "Global MBA",
    description: "Executive leadership and strategic management for the digital age.",
    seats: "240",
    duration: "2 Years",
    packages: "28 LPA",
    tags: ["Marketing", "Finance", "HR", "Business Analytics"],
  },
  "Agricultural Sciences": {
    title: "Agricultural Sciences",
    description: "Advancing food security through precision farming and biotechnology.",
    seats: "180",
    duration: "4 Years",
    packages: "12 LPA",
    tags: ["B.Sc(Hons)", "M.Sc(Agronomy)"],
  },
  "Pharmacy (B.Pharm)": {
    title: "Pharmacy (B.Pharm)",
    description: "Pharmaceutical reasearch and clinical excellence.",
    seats: "100",
    duration: "4 Years",
    packages: "15 LPA",
    tags: ["B. Pharmacy", "M. Pharmacy"],
  },
};

export default function AdmissionsSection() {
  const [activeTab, setActiveTab] = useState("B.Tech Engineering");
  const content = programContent[activeTab as keyof typeof programContent];

  return (
    <section className="w-full bg-[var(--body-text-color)]/10 py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] text-xs border border-[var(--theme-color2)]/5 font-bold mb-6">
          <span className="w-2 h-2 bg-[var(--theme-color2)] rounded-full" />
          ADMISSIONS OPEN 2026-27
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[ var(--theme-color)] leading-tight">
          Architecting the Next
          <br />
          <span className="italic font-medium text-[var(--body-text-color)]">
            Generation of Leaders.
          </span>
        </h1>

        <p className="mt-4 text-[var(--body-text-color)] max-w-xl text-sm">
          Select your path and download the official 2026 brochure. Join a
          community of innovators across engineering, management, and life
          sciences.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mt-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={clsx(
                  "group flex items-center justify-center gap-2 min-w-[190px] px-6 py-2.5 rounded-2xl border text-sm transition-colors duration-200",
                  isActive
                    ? "bg-[var(--theme-color2)]/6 border-[var(--theme-color2)] text-[var(--theme-color)] shadow-sm"
                    : "bg-[var(--background)] border-[var(--body-text-color)]/20 text-[var(--body-text-color)]  hover:border-[var(--theme-color2)]"
                )}
              >
                <Icon
                  size={16}
                  className={clsx(
                    "transition-colors",
                    isActive
                      ? "text-[var(--theme-color2)]"
                      : "text-[var(--theme-color)]"
                  )}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Left Card */}
          <div className="md:col-span-2 self-start bg-[var(--background)] rounded-3xl p-8 shadow-md border border-[var(--body-text-color)]/10 border-t-4 rounded-t-xl border-t-[var(--theme-color2)]">
            <h2 className="text-2xl font-bold text-[var(--theme-color)]">
              {content.title}
            </h2>

            <p className="text-sm text-[var(--body-text-color)] mt-2">
              {content.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div>
                <p className="text-xs text-[var(--body-text-color)] uppercase">Seats</p>
                <p className="text-xl font-bold text-[var(--theme-color)]">{content.seats}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--body-text-color)] uppercase">Duration</p>
                <p className="text-xl font-bold text-[var(--theme-color)]">{content.duration}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--body-text-color)] uppercase">Packages</p>
                <p className="text-xl font-bold text-[var(--theme-color)]">{content.packages}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-6 flex-wrap">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-xl bg-[var(--background)] text-[var(--body-text-color)] border border-[var(--body-text-color)]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Apply Card */}
            <div className="bg-[var(--background)] rounded-2xl p-6 min-h-[250px] shadow-md border border-[var(--body-text-color)]/20 border-t-4 rounded-t-xl border-t-[var(--theme-color2)]">
              <div className="inline-block px-3 py-1 text-xs rounded-full bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] font-medium mb-3 border border-[var(--theme-color2)]/15">
                APPLY NOW
              </div>

              <h3 className="text-lg font-bold text-[var(--theme-color)]">
                Apply for 2026
              </h3>

              <p className="text-xs text-[var(--body-text-color)] mt-1">
                Early bird applications close on April 15, 2026.
              </p>

              <button className="mt-5 w-full bg-[var(--theme-color2)]  text-[var(--background)] py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition">
                Start Application
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Brochure Card */}
            <div className="bg-[var(--background)] rounded-2xl p-6 min-h-[250px] shadow-md border border-[var(--body-text-color)]/20">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[var(--theme-color2)]/10 rounded-lg text-[var(--theme-color2)]">
                  <FileDown size={18} />
                </div>
                <span className="text-xs text-[var(--body-text-color)]">PDF · 4.2 MB</span>
              </div>

              <h3 className="text-lg font-bold text-[var(--theme-color)]">
                Brochure & Curriculum
              </h3>

              <p className="text-xs text-[var(--body-text-color)] mt-1">
                Download the latest syllabus, curriculum, and admission details.
              </p>

              <button className="mt-4 text-[var(--theme-color2)] text-sm font-medium flex items-center gap-1">
                Download Syllabus
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}