// app/page.tsx
import React from "react";

const features = [
  {
    title: "Resume Analysis",
    desc: "Expert feedback to create ATS-friendly and industry ready resumes.",
  },
  {
    title: "Mock Interviews",
    desc: "Real interview simulations to improve communication and technical articulation.",
  },
  {
    title: "Personality Analysis",
    desc: "Career mapping assessments to identify strengths and professional direction.",
  },
];

export default function CareerGuidance() {
  return (
    <main className="min-h-screen bg-[var(--theme-bg-light)] py-16 flex items-center justify-center">
      <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-[var(--theme-color)] mb-3">
          Career Guidance
        </h1>
        <p className="text-[var(--body-text-color)] max-w-2xl mx-auto mb-12 text-medium leading-relaxed">
          DIGIT College of Engineering supports students with structured career mentoring,
          interview preparation, and industry readiness programs to ensure successful professional growth.
        </p>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-[var(--body-text-color)]/10 p-6 text-left hover:shadow-md transition h-48 flex flex-col justify-center"
            >
              <h3 className="font-bold text-[var(--theme-color)] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--body-text-color)] text-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className="bg-[var(--background)] rounded-2xl shadow-md border border-[var(--body-text-color)]/10 p-8 text-left w-full">
          <h2 className="text-3xl font-bold text-[var(--theme-color)] mb-6">
            Workshops & <span className="text-[var(--theme-color2)]">Mentorship</span>
          </h2>

          <ul className="space-y-4">
            {[
              "Soft Skills Development",
              "GATE Preparation",
              "Alumni Mentorship",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[var(--body-text-color)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--theme-color2)]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>
    </main>
  );
}

