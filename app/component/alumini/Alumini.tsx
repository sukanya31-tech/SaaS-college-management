
'use client';

import { useState } from 'react';
import { Calendar, Users, Search, SquareArrowOutUpRight } from 'lucide-react';

export default function HomePage() {
  const [search, setSearch] = useState('');

  const updates = [
    {
      date: "Dec 15, 2025",
      tag: "REUNION",
      title: "Annual Grand Alumni Meet 2025 - Silver Jubilee Celebration",
      meta: "ENTRY TYPE : REGISTRATION",
    },
    {
      date: "Nov 05, 2025",
      tag: "MENTORSHIP",
      title: "Industry Expert Talk: Navigating Silicon Valley Careers",
      meta: "ENTRY TYPE : WEBINAR",
    },
    {
      date: "Oct 28, 2025",
      tag: "ACHIEVEMENT",
      title: "Alumni Spotlight: Dr. Sarah Chen wins Global Innovator Award",
      meta: "ENTRY TYPE : ARTICLE",
    },
    {
      date: "Oct 12, 2025",
      tag: "GIVING",
      title: "Campus Infrastructure Fund Legacy Hall Contribution Drive",
      meta: "ENTRY TYPE : DONATION",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--theme-bg-light)] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="w-full rounded-2xl border border-[var(--body-text-color)]/10 bg-white shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8 border-b border-[var(--body-text-color)]/10">
          {/* Left */}
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="mt-1">
              <Users size={20} className="sm:h-[22px] sm:w-[22px]" color="var(--theme-color2)" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[var(--theme-color)] tracking-tight sm:text-3xl">
                Alumni Association
              </h1>

              <p className="mt-1 text-sm text-[var(--body-text-color)] sm:mt-0.5 lg:-ml-8">
                Connecting our past, present, and future legacy.
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-[320px] lg:w-[250px]">
            <input
              type="text"
              placeholder="Search alumni events or news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[var(--theme-color2)]/20 bg-[var(--background)] pl-10 pr-4 py-2.5 text-[13px] text-[var(--body-text-color)] outline-none transition focus:border-[var(--theme-color2)]/20 focus:ring-2 focus:ring-[var(--theme-color2)]/20"
            />

            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2"
              size={16}
              color="var(--theme-color2)"
            />

          </div>
        </div>

        {/* Table Header */}
        <div className="hidden grid-cols-[1.2fr_1fr_3fr_1fr] px-4 py-5 text-[10px] tracking-[0.18em] uppercase text-[var(--body-text-color)]/50 border-b border-[var(--body-text-color)]/10 bg-[var(--footer-text-color)]/30 font-bold md:grid md:px-6 lg:px-8">
          <div>Timeline</div>
          <div>Focus Area</div>
          <div>Latest Updates</div>
          <div className="text-right">Action</div>
        </div>

        {/* Rows */}
        {updates
          .filter(
            (item) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.tag.toLowerCase().includes(search.toLowerCase()) ||
              item.meta.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
          <div
            key={index}
            className="group grid grid-cols-1 gap-3 px-4 py-5 border-b border-[var(--body-text-color)]/10 last:border-none md:grid-cols-[1.2fr_1fr_3fr_1fr] md:items-center md:gap-0 md:px-6 md:py-8 lg:px-8"
          >
            {/* Date */}
            <div className="flex items-center gap-2 text-[14px] text-[var(--body-text-color)] group-hover:text-[var(--theme-color2)] md:pr-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--body-text-color)]/50 md:hidden">
                Timeline
              </span>
              <Calendar size={16} className="text-[var(--body-text-color)] group-hover:text-[var(--theme-color2)]" />
              {item.date}
            </div>

            {/* Badge */}
            <div>
              <span className="inline-flex items-center rounded-lg bg-[var(--body-text-color)]/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-[var(--body-text-color)] transition group-hover:bg-[var(--theme-color2)]/10 group-hover:text-[var(--theme-color2)]">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[15px] font-semibold text-[var(--body-text-color)] leading-relaxed transition-transform duration-200 group-hover:text-[var(--theme-color2)] group-hover:translate-x-2">
                {item.title}
              </h3>

              <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[var(--body-text-color)]/60">
                {item.meta}
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-start md:justify-end">
              <button className="flex items-center gap-1 rounded-full border border-[var(--theme-color2)]/10 px-5 py-2 text-[12px] font-semibold text-[var(--theme-color2)] transition hover:bg-[var(--theme-color2)] hover:text-[var(--background)]">
                View
                <SquareArrowOutUpRight size={12} className="text-current ml-1" />
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}