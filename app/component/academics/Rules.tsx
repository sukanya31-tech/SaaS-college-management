// app/components/RegulatoryIndex.tsx
"use client";

import { ArrowUpRight, Clock, TrendingUp, Award, AlertTriangle, Scale, Zap, FileText } from "lucide-react";

type Card = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    id: "REG-01",
    title: "Attendance Framework",
    description:
      "Mandatory compliance for semester examination eligibility and condonation.",
    points: [
      "75% Aggregate attendance required",
      "65% Minimum for medical condonation",
      "Detention applied below 65%",
    ],
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: "REG-02",
    title: "Promotion Strategy",
    description:
      "Credit-based progression metrics for B.Tech R22 vertical movement.",
    points: [
      "1st to 2nd Year: 20/40 Credits",
      "2nd to 3rd Year: 48/80 Credits",
      "3rd to 4th Year: 76/120 Credits",
    ],
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    id: "REG-03",
    title: "Grading System",
    description:
      "The 10-point Letter Grade system used for SGPA and CGPA calculation.",
    points: [
      "O (Outstanding): 90-100% [10 pts]",
      "A+ (Excellent): 80-89% [9 pts]",
      "F (Fail): < 40% [0 pts]",
    ],
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: "REG-04",
    title: "Examination Ethics",
    description:
      "Strict protocols against academic malpractice and impersonation.",
    points: [
      "Impersonation: Police Handover",
      "Copying: All subject cancellation",
      "Gadgets: Expulsion from Hall",
    ],
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  {
    id: "REG-05",
    title: "Grace Marks Policy",
    description:
      "Provision for marginal marks required to pass or change class.",
    points: [
      "Max 0.25% of total marks allowed",
      "Applicable for theory subjects only",
      "Helps in securing degree/class",
    ],
    icon: <Scale className="w-5 h-5" />,
  },
  {
    id: "REG-06",
    title: "Project & Industry",
    description:
      "Guidelines for Industrial Projects, Internships, and Viva-Voce.",
    points: [
      "Mandatory 4-week Summer Internship",
      "Internal & External Project Eval",
      "Industry project viva in 8th Sem",
    ],
    icon: <Zap className="w-5 h-5" />,
  },
];

export default function RegulatoryIndex() {
  return (
    <section className="w-full bg-[var(--theme-bg-light)] py-16">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 mb-12">
        <span className="text-xs tracking-widest px-3 py-1 rounded-xs bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] border border-[var(--theme-color2)]/15 font-bold">
          STATUTORY RECORDS
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-color)]">
            Regulatory{" "}
            <span className="italic font-medium text-[var(--body-text-color)]">Index</span>
          </h2>

          <p className="text-sm text-[var(--body-text-color)] mt-4 md:mt-0 max-w-xs border-l border-[var(--body-text-color)]/20 pl-4">
            Official DIGIT R22 Academic Guidelines & Compliance Protocols.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative rounded-3xl p-6 shadow-sm border bg-[var(--background)] border-[var(--body-text-color)]/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1  hover:bg-gradient-to-b hover:from-[var(--theme-color2)]/5 hover:via-[var(--theme-color2)]/3 hover:to-[var(--background)]"
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl border bg-[var(--body-text-color)]/10 text-[var(--theme-color2)] border-[var(--body-text-color)]/10 transition-all duration-300 group-hover:bg-[var(--theme-color2)] group-hover:text-[var(--background)]  group-hover:rotate-6"
              >
                {card.icon}
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-[var(--body-text-color)]/10  text-[var(--body-text-color)]">
                {card.id}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-2 text-[var(--theme-color)] transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
              {card.title}
            </h3>

            <p className="text-sm text-[var(--body-text-color)] mb-4">
              {card.description}
            </p>

            <ul className="space-y-2 mb-6">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--body-text-color)]">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--body-text-color)] transition-colors duration-300 group-hover:bg-[var(--theme-color2)]" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full flex items-center justify-between text-sm font-semibold px-4 py-3 rounded-xl bg-[var(--body-text-color)]/5 text-[var(--theme-color)] transition-colors duration-300 hover:bg-[var(--theme-color2)] hover:text-[var(--background)]">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 transition-colors duration-300" />
                DOWNLOAD PDF
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}