"use client";

import { ReactNode } from "react";
import {
  Users,
  Settings,
  ShieldCheck,
  FileText,
} from "lucide-react";

/* =========================
   Reusable Card Component
========================= */
interface InfoCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  points: string[];
}

function InfoCard({ icon, title, subtitle, points }: InfoCardProps) {
  return (
    <div className="bg-[var(--background)] backdrop-blur-md rounded-2xl shadow-md p-6 border border-[var(--body-text-color)]/5 hover:shadow-lg transition-all duration-300 min-h-64 flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--theme-color2)]/5 text-[var(--theme-color2)]">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--theme-color)]">{title}</h3>
          <p className="text-xs font-semibold tracking-wide text-[var(--theme-color2)] uppercase">
            {subtitle}
          </p>
        </div>
      </div>

      {/* List */}
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-[var(--body-text-color)] text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 bg-[var(--theme-color2)] rounded-full"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================
   Main Section Component
========================= */
export default function ExaminationSection() {
  const compositionPoints = [
    "Chief Controller of Examinations: Led by the Principal.",
    "Controller of Examinations (CoE): Senior faculty nominated by the Principal.",
    "Additional Controllers (ACE): Four senior faculty members (ACE-1 to ACE-4).",
    "Support Staff: Includes Office Assistants, Programmers, and Data Entry Operators.",
  ];

  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-16 bg-[var(--theme-color2)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_28%,color-mix(in_srgb,var(--theme-color2)_15%,var(--background))_0%,transparent_55%),linear-gradient(120deg,#f7f5f8_0%,#f3f3f6_100%)]" />

      <div className="relative z-10">
        {/* Top Label */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 text-xs font-semibold tracking-wide rounded-full bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] border border-[var(--theme-color2)]/20">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-color2)] animate-pulse" />
           INSTITUTIONAL GOVERNANCE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-color)] leading-tight">
          Examination Structure & <br />
          <span className="italic font-medium text-[var(--body-text-color)]">
            Functions
          </span>
        </h1>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <InfoCard
            icon={<Users size={20} />}
            title="Composition of Examination Branch"
            subtitle="Administrative Hierarchy"
            points={compositionPoints}
          />

          <InfoCard
            icon={<Settings size={20} />}
            title="Core Responsibilities"
            subtitle="Operations & Management"
            points={[
              "Coordination of Semester End Examinations (SEE) and valuation.",
              "Maintenance of absolute secrecy regarding confidential materials.",
              "Issuance of Hall Tickets, Mark Sheets, and Provisional Certificates.",
              "Budgeting and stock maintenance for the entire examination section.",
            ]}
          />

          <InfoCard
            icon={<ShieldCheck size={20} />}
            title="Confidential Functions"
            subtitle="Integrity & Standards"
            points={[
              "Identification and appointment of external paper setters.",
              "Secure printing and distribution of Question Papers.",
              "Selection of the Panel of Examiners in coordination with HODs.",
              "Management of double-valuation processes for transparency.",
            ]}
          />

          <InfoCard
            icon={<FileText size={20} />}
            title="ACE Portfolio Distribution"
            subtitle="Functional Roles"
            points={[
              "ACE-1: Focuses on Confidential work and Paper Setting.",
              "ACE-2: Manages Examination Conduct and Invigilation.",
              "ACE-3: Oversees Valuation and Evaluator Allotment.",
              "ACE-4: Manages Results Database and Marks Processing.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}