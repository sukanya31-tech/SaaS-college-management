"use client";

import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";

const meetings = [
  {
    date: "9th June, 2017",
    time: "04:00 PM",
    location: "Conference Room",
    active: true,
    presidedBy: "Dr. B. Madhubala (Director)",
    members: [
      "Dr. M. Madhavi (Chairperson)",
      "Prof. P. Pinkalben (Coordinator)",
      "Dr. Ramesh B (Secretary)",
      "Mr. Satish Kumar (HOD Management)",
      "Ms. P. Saritha (HOD Computer Applications)",
      "Mr. GM. Joshi (Industry Nominee)",
    ],
    agenda: [
      "Constitution of IQAC for NAAC Accreditation",
      "Quality improvement measures for academic excellence",
      "Preparation of Self Study Report (SSR)",
    ],
    discussions: [
      "Presentation on purpose and functions of IQAC",
      "Enriching curriculum with industry orientation",
      "Need for ICT enabled Learning Management systems",
      "Automating the Administrative office",
    ],
    resolutions: [
      "Unanimous acceptance of IQAC constitution",
      "Initiation of NAAC accreditation application",
      "Fortnightly review of NAAC preparations",
    ],
  },
  {
    date: "26th July, 2017",
    time: "",
    location: "Conference Room",
    active: false,
    presidedBy: "Dr. M. Madhavi (Director)",
    members: [
      "Dr. M. Madhavi",
      "Prof. P. PinakPani",
      "Dr. Ramesh B Nimmatodri",
      "Ms. Naga Padma",
      "Mr. P. Somaiah (Librarian)",
      "Ms. S. Sandhya (Alumnus)",
    ],
    agenda: [
      "Review of previous resolutions",
      "Progress of NAAC works",
      "Information for quantitative and qualitative parameters",
      "Library Automation discussions",
    ],
    discussions: [
      "Orientation on Learning Management System (Edmodo)",
      "Solar Photovoltaic cells installation status",
      "Deputing criteria-wise coordinators for SSR",
      "Maintenance of green campus and water harvesting",
    ],
    resolutions: [
      "Procurement of ERP software for office automation",
      "Establishment of additional smart classrooms",
      "Application for Net Meter for solar energy",
    ],
  },
];

export default function MinutesOfMeeting() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMeeting = meetings[activeIndex];

  return (
    <section className="bg-[var(--theme-bg-light)] min-h-screen px-6 md:px-16 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--theme-color2)]/10 bg-[var(--theme-color2)]/5 px-4 py-1.5 text-[13px] font-semibold tracking-[0.18em] text-[var(--theme-color2)]">
          <TriangleAlert className="h-3.5 w-3.5" strokeWidth={2} />
          <span>IQAC</span>
        </div>

        <h1 className="text-5xl font-bold text-[var(--theme-color)]">
          Minutes Of <span className="italic text-[var(--body-text-color)]">Meeting</span>
        </h1>

        <p className="text-sm text-[var(--body-text-color)] mt-3 max-w-xl">
          Internal Quality Assurance Cell records regarding NAAC accreditation,
          academic excellence, and institutional development.
        </p>

        <div className="mt-6 border-t border-[var(--body-text-color)]/10"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[300px] lg:flex">
          <div className="minutes-scrollbar overflow-x-auto overflow-y-hidden pb-2 lg:flex-1 lg:h-full">
            <div className="min-w-full lg:min-w-[420px] space-y-3 pr-3">
              {meetings.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-xl px-5 py-4 border transition-all duration-300 text-left
                    ${
                      activeIndex === index
                        ? "bg-[var(--background)] border-[var(--theme-color2)] shadow-[0_8px_20px_rgba(233,30,99,0.12)]"
                        : "bg-[var(--background)]  border-transparent"
                    }
                  `}
                >
                  <p
                    className={`text-[var(--theme-color)] leading-none tracking-tight font-bold mb-2 ${
                      activeIndex === index
                        ? "text-[var(--theme-color2)]"
                        : "text-[var(--body-text-color)]"
                    }`}
                  >
                    {item.date}
                  </p>

                  <p className="text-[11px] tracking-wide text-[var(--body-text-color)] uppercase">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1">
          <div className="bg-[var(--background)] rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-[var(--theme-color2)] text-[var(--background)] p-6">
              <h2 className="text-xl font-bold">
                {activeMeeting.date}
              </h2>

              <p className="text-xs mt-1">
                {activeMeeting.time
                  ? `${activeMeeting.time} • ${activeMeeting.location}`
                  : activeMeeting.location}
              </p>

              <p className="text-xs mt-2 opacity-90">
                Presided by {activeMeeting.presidedBy}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Members */}
              <div>
                <h3 className="text-xs font-semibold text-[var(--theme-color2)] mb-3 uppercase">
                  Members Present
                </h3>

                <div className="flex flex-wrap gap-2">
                  {activeMeeting.members.map((member, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-[var(--theme-color2)]/15 text-[var(--body-text-color)] rounded-full bg-[var(--theme-color2)]/5"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Agenda + Discussion */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Agenda */}
                <div>
                  <h4 className="font-semibold text-[var(--theme-color)] mb-3">
                    Agenda
                  </h4>

                  <div className="space-y-3">
                    {activeMeeting.agenda.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-5 w-[2px] shrink-0 bg-[var(--body-text-color)]/30" />
                        <p className="text-sm text-[var(--body-text-color)] leading-6">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discussion */}
                <div>
                  <h4 className="font-semibold text-[var(--theme-color)] mb-3">
                    Discussions
                  </h4>

                  <div className="space-y-3">
                    {activeMeeting.discussions.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-5 w-[2px] shrink-0 bg-[var(--body-text-color)]/30" />
                        <p className="text-sm text-[var(--body-text-color)] leading-6">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resolution */}
              <div className="border border-[var(--theme-color2)]/10 rounded-xl p-4 bg-[var(--theme-color2)]/5">
                <h4 className="text-sm font-semibold text-[var(--theme-color2)] mb-3">
                  Resolutions Passed
                </h4>

                <ol className="text-sm text-[var(--body-text-color)] space-y-1 list-decimal list-inside">
                  {activeMeeting.resolutions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}