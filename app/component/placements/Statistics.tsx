import React from "react";

interface Row {
  company: string;
  role: string;
  selects: number;
  salary: string;
}

const data: Row[] = [
  { company: "Amazon", role: "SDE", selects: 1, salary: "46.38" },
  { company: "Flipkart", role: "SDE", selects: 1, salary: "32.57" },
  { company: "Optum", role: "Fulltime", selects: 29, salary: "18.56" },
  { company: "Synopsys", role: "PPO", selects: 2, salary: "18.00" },
  { company: "TCS-Prime", role: "Fulltime", selects: 1, salary: "9.60" },
];

export default function PlacementStats() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-16 flex justify-center">
      <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-[var(--theme-color)] mb-4">
          Placement Statistics
        </h1>
        <p className="text-[var(--body-text-color)] max-w-2xl text-lg mb-10">
          Analysis of recruitment engagement, compensation benchmarks, and
          industry partnerships for the 2024-25 academic cycle.
        </p>

        {/* Table Card */}
        <div className="bg-[var(--background)] rounded-2xl shadow-md border border-[var(--body-text-color)]/20 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 px-8 py-4 bg-[var(--footer-text-color)] text-[var(--body-text-color)] text-sm font-semibold tracking-wide">
            <span>COMPANY</span>
            <span>ROLE</span>
            <span>SELECTS</span>
            <span className="text-right">SALARY (LPA)</span>
          </div>

          {/* Rows */}
          {data.map((item, index) => (
            <div
              key={index}
              className="group grid grid-cols-4 px-8 py-5 items-center border-t border-[var(--body-text-color)]/10 text-sm bg-[var(--background)] hover:bg-[var(--footer-text-color)]/50 transition-colors duration-200"
            >
              <span className="font-medium text-[var(--theme-color)] transition-colors duration-200 group-hover:text-[var(--theme-color2)]">
                {item.company}
              </span>
              <span className="text-[var(--body-text-color)]">{item.role}</span>
              <span className="text-[var(--body-text-color)]">{item.selects}</span>
              <span className="text-right font-semibold text-[var(--theme-color2)]">
                {item.salary}
              </span>
            </div>
          ))}

          {/* Footer */}
          <div className="text-center text-xs text-[var(--body-text-color)] py-4">
            Viewing top recruiters • Data refreshed March 2026
          </div>
        </div>
        </section>
    </main>
  );
}
