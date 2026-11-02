"use client";

import React from "react";
import { Trophy, Medal, Star, Users, MapPin } from "lucide-react";

type Record = {
  title: string;
  winner: string;
  location: string;
  date: string;
  icon: React.ReactNode;
};

const records: Record[] = [
  {
    title: "Inter-College Cricket",
    winner: "Dept of EEE",
    location: "MAIN GROUND",
    date: "FEB 2026",
    icon: <Trophy className="w-5 h-5 text-[var(--theme-color2)]" />,
  },
  {
    title: "Basketball League",
    winner: "Team Titans",
    location: "INDOOR COURT",
    date: "JAN 2026",
    icon: <Users className="w-5 h-5 text-[var(--theme-color2)]" />,
  },
  {
    title: "Badminton Open",
    winner: "Rahul & Team",
    location: "SPORTS COMPLEX",
    date: "JAN 2026",
    icon: <Medal className="w-5 h-5 text-[var(--theme-color2)]" />,
  },
  {
    title: "Annual Marathon",
    winner: "Athletics Dept",
    location: "CAMPUS ROADS",
    date: "DEC 2025",
    icon: <Star className="w-5 h-5 text-[var(--theme-color2)]" />,
  },
  {
    title: "Table Tennis Cup",
    winner: "Mechanical Engg",
    location: "STUDENT CENTER",
    date: "DEC 2025",
    icon: <Trophy className="w-5 h-5 text-[var(--theme-color2)]" />,
  },
  {
    title: "Chess Tournament",
    winner: "Computer Science",
    location: "LIBRARY HALL",
    date: "NOV 2025",
    icon: <Medal className="w-5 h-5 text-[var(--theme-color2)]" />,
  },
];

export default function SportsRecords() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Badge */}
        <div className="mb-4">
          <span className="text-xs font-semibold px-4 py-1 rounded-xs bg-[var(--theme-color2)]/5 border border-[var(--theme-color2)]/10 text-[var(--theme-color2)] tracking-wide">
            CAMPUS SPORTS MEETING
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--theme-color)]">
          Sports Records{" "}
          <span className="text-[var(--body-text-color)] font-medium">
            <em>2025 - 2026</em>
            </span>
        </h2>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {records.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[var(--background)] border border-[var(--theme-color2)]/20 rounded-2xl p-6 min-h-[235px] shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:bg-[var(--theme-color2)]/5 hover:shadow-xl hover:border-[var(--theme-color2)]/20 hover:[&_svg]:text-[var(--theme-color2)]"
            >
              <span className="absolute top-6 right-6 text-xs font-bold tracking-wider text-[var(--theme-color2)] opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {item.date}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--theme-color2)]/10 mb-4 transition-colors duration-300 ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--theme-color)] transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
                {item.title}
              </h3>

              {/* Winner */}
              <p className="text-sm mt-1 text-[var(--body-text-color)] transition-colors duration-300">
                <span className="font-medium text-[var(--body-text-color)] transition-colors duration-300">Winner:</span>{" "}
                {item.winner}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4 text-xs text-[var(--body-text-color)] transition-colors duration-300">
                <MapPin className="w-3.5 h-3.5 text-[var(--theme-color2)] transition-colors duration-300" />
                {item.location}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}