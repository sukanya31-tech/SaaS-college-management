"use client";

import {
  Building2,
  Users,
  GraduationCap,
  Gift,
  BookOpen,
  UserCheck,
  BriefcaseBusiness,
} from "lucide-react";
import { useEffect, useState } from "react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const frameRate = 16;
    const increment = Math.ceil(end / (duration / frameRate));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
        return;
      }
      setCount(start);
    }, frameRate);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function AboutCollege() {
  return (
    <section className="bg-[var(--background)] py-20 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 items-start lg:items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:max-lg:text-5xl lg:text-6xl font-bold text-[var(--footer-bg)] mb-5 md:mb-7">
            About Our College
          </h2>

          <p className="text-[var(--body-text-color)] leading-relaxed mb-5 text-lg sm:text-xl md:max-lg:text-xl lg:text-2xl">
            DIGIT College of Engineering delivers high-quality education with
            an industry-focused curriculum, experienced faculty, and
            innovation-driven learning. We are committed to nurturing future
            leaders who excel in technology, research, and entrepreneurship.
          </p>

          <p className="text-[var(--body-text-color)] leading-relaxed mb-8 text-lg sm:text-xl md:max-lg:text-xl lg:text-2xl">
            With state-of-the-art infrastructure and strong industry
            partnerships, we ensure our students gain both theoretical knowledge
            and practical exposure to succeed in the global market.
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-[var(--body-text-color)] text-lg sm:text-xl md:max-lg:text-xl lg:text-2xl">
              <BookOpen className="text-[var(--theme-color2)]" size={20} />
              Industry-Oriented Curriculum
            </li>

            <li className="flex items-center gap-3 text-[var(--body-text-color)] text-lg sm:text-xl md:max-lg:text-xl lg:text-2xl">
              <UserCheck className="text-[var(--theme-color2)]" size={20} />
              Expert Faculty Members
            </li>

            <li className="flex items-center gap-3 text-[var(--body-text-color)] text-lg sm:text-xl md:max-lg:text-xl lg:text-2xl">
              <BriefcaseBusiness className="text-[var(--theme-color2)]" size={20} />
              Excellent Placement Record
            </li>
          </ul>

          {/* BUTTON */}
          <button className="bg-[var(--footer-bg)] text-[var(--background)] text-lg sm:text-xl md:max-lg:text-xl lg:text-2xl px-6 sm:px-7 md:max-lg:px-6 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 hover:bg-[var(--footer-bg)] transition">
            Read More →
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="relative bg-[var(--theme-bg-light)] rounded-2xl shadow-xl p-8 sm:p-10 md:max-lg:p-8 lg:p-12 overflow-hidden">

          {/* TOP ICON */}
          <div className="flex justify-center mb-4 md:mb-5">
            <Building2 size={36} className="text-[var(--theme-color2)] md:max-lg:w-10 md:max-lg:h-10 lg:w-12 lg:h-12" />
          </div>

          <h3 className="text-xl sm:text-2xl md:max-lg:text-2xl lg:text-3xl font-semibold text-center text-[var(--footer-bg)] mb-3">
            15+ Years of Excellence
          </h3>

          <p className="text-[var(--body-text-color)] text-center text-lg sm:text-xl md:max-lg:text-xl lg:text-2xl mb-8 md:max-lg:mb-8 lg:mb-12">
            Empowering students with innovation, leadership, and professional
            excellence since our establishment.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">

            {/* STUDENTS */}
            <div className="bg-[var(--background)] rounded-3xl shadow-md p-5 sm:p-6 text-center transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <Users className="mx-auto text-[var(--theme-blue)] mb-2.5" size={28} />
              <p className="font-semibold text-[var(--footer-bg)] text-xl sm:text-2xl">
                <CountUp end={5000} suffix="+" />
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[var(--body-text-color)]">
                Students
              </p>
            </div>

            {/* FACULTY */}
            <div className="bg-[var(--background)] rounded-3xl shadow-md p-5 sm:p-6 text-center transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <GraduationCap className="mx-auto text-[var(--theme-green)] mb-2.5" size={28} />
              <p className="font-semibold text-[var(--footer-bg)] text-xl sm:text-2xl">
                <CountUp end={120} suffix="+" />
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[var(--body-text-color)]">
                Faculty Members
              </p>
            </div>

            {/* PLACEMENT */}
            <div className="bg-[var(--background)] rounded-3xl shadow-md p-5 sm:p-6 text-center transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
              <Gift className="mx-auto text-[var(--theme-color2)] mb-2.5" size={28} />
              <p className="font-semibold text-[var(--footer-bg)] text-xl sm:text-2xl">
                <CountUp end={95} suffix="%" />
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[var(--body-text-color)]">
                Placement Rate
              </p>
            </div>

          </div>

          {/* DECORATION CIRCLE */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-pink-200 rounded-full opacity-40 translate-x-10 -translate-y-10"></div>

        </div>

      </div>
    </section>
  );
}