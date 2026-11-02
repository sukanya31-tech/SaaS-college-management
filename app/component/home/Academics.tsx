"use client"

import { useState } from "react"
import {
  Bell,
  Scale,
  CalendarDays,
  FileText,
  Shield,
  Ban,
  Download
} from "lucide-react"

type TabType =
  | "admissions"
  | "rules"
  | "calendar"
  | "meetings"
  | "conduct"
  | "antiragging"

export default function Academics() {

  const [activeTab, setActiveTab] = useState<TabType>("admissions")

  const tabs = [
    { id: "admissions", label: "Admissions" },
    { id: "rules", label: "Rules" },
    { id: "calendar", label: "Calendar" },
    { id: "meetings", label: "Meetings" },
    { id: "conduct", label: "Conduct" },
    { id: "antiragging", label: "Anti Ragging" },
  ]

  const content = {
    admissions: {
      icon: Bell,
      title: "Admissions & Notifications",
      description:
        "Stay updated with latest admission announcements, eligibility criteria and important deadlines.",
      pdf: "/pdfs/admissions.pdf",
      bullets: [
        "Admission Notifications",
        "Eligibility Criteria",
        "Application Procedure",
        "Important Dates"
      ]
    },

    rules: {
      icon: Scale,
      title: "Rules & Regulations",
      description:
        "Institutional policies and academic rules governing student conduct and academic standards.",
      pdf: "/pdfs/rules.pdf",
      bullets: [
        "Attendance Policy",
        "Examination Rules",
        "Disciplinary Regulations",
        "Academic Integrity Guidelines"
      ]
    },

    calendar: {
      icon: CalendarDays,
      title: "Academic Calendar",
      description:
        "Detailed semester schedules including classes, exams and institutional events.",
      pdf: "/pdfs/calendar.pdf",
      bullets: [
        "Semester Schedule",
        "Examination Timetable",
        "Holiday List",
        "Academic Events"
      ]
    },

    meetings: {
      icon: FileText,
      title: "Minutes of Meeting",
      description:
        "Official documentation of academic council and committee discussions.",
      pdf: "/pdfs/meetings.pdf",
      bullets: [
        "Academic Council Meetings",
        "Board of Studies Records",
        "Departmental Meetings",
        "Policy Review Notes"
      ]
    },

    conduct: {
      icon: Shield,
      title: "Code of Conduct",
      description:
        "Guidelines outlining ethical behavior and responsibilities of students and staff.",
      pdf: "/pdfs/conduct.pdf",
      bullets: [
        "Student Responsibilities",
        "Faculty Responsibilities",
        "Ethical Standards",
        "Disciplinary Actions"
      ]
    },

    antiragging: {
      icon: Ban,
      title: "Anti Ragging Policy",
      description:
        "Strict anti-ragging measures ensuring a safe, respectful and inclusive campus environment.",
      pdf: "/pdfs/anti-ragging.pdf",
      bullets: [
        "Anti-Ragging Committee",
        "Reporting Mechanism",
        "Punitive Actions",
        "Student Safety Measures"
      ]
    }
  }

  const current = content[activeTab]
  const Icon = current.icon

  return (

    <section className="bg-(--color-theme-bg-light) py-16 md:py-20">

      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

      {/* TITLE */}

      <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">

        <h2 className="text-5xl sm:text-5xl md:text-5xl font-bold text-(--color-theme) mb-4">
          Academics
        </h2>

        <p className="text-(--color-body-text) text-base sm:text-lg md:text-xl">
          Access important academic information, institutional policies and official documentation.
        </p>

      </div>


      {/* TAB BUTTONS */}

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-10 md:mb-12">

        {tabs.map((tab) => {

          const isActive = activeTab === tab.id

          return (

            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`
              px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5
              min-w-[130px] sm:min-w-[150px]
              rounded-full text-sm sm:text-base md:text-lg
              font-medium transition border-2
              ${
                isActive
                ? "bg-(--color-theme-2) text-white border-(--color-theme-2) shadow-md"
                : "bg-white text-(--color-theme) border-gray-200 hover:border-(--color-theme-2)"
              }
              `}
            >
              {tab.label}

            </button>

          )

        })}

      </div>


      {/* CONTENT CARD */}

      <div className="bg-[var(--background)] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 w-full mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">


          {/* LEFT SIDE */}

          <div>

            <div className="flex items-center gap-4 sm:gap-5 mb-5">

              <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-(--color-theme-2)"/>

              <h3 className="text-xl sm:text-3xl md:text-3xl font-semibold text-(--color-theme)">
                {current.title}
              </h3>

            </div>

            <p className="text-(--color-body-text) text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
              {current.description}
            </p>

            {activeTab === "admissions" && (
              <div className="mb-6 md:mb-8 rounded-lg p-4 sm:p-5 border-2 border-theme-2/10 bg-theme-2/5 w-full max-w-fit">
                <h4 className="text-lg sm:text-xl md:text-3xl font-semibold text-(--color-theme) mb-3">
                  Latest Admission Notification 2026-27
                </h4>
                <p className="text-(--color-body-text) text-2xl sm:text-sm md:text-base leading-relaxed whitespace-normal">
                  Applications are open for UG & PG programs. Last date to apply: 30th june 2026
                </p>

                {/* DOWNLOAD BUTTON */}
                <a
                  href={current.pdf}
                  download
                  className="inline-flex items-center gap-2.5 mt-4 text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg bg-(--color-theme-2) text-[var(--background)] transition"
                >
                  <Download size={20}/>
                  Download Notifications
                </a>
              </div>
            )}

            {activeTab !== "admissions" && (
              <a
                href={current.pdf}
                download
                className="inline-flex items-center gap-2.5 mb-6 md:mb-8 text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg border-2 border-(--color-theme-2) text-(--color-theme-2) hover:bg-(--color-theme-2) hover:text-[var(--background)] transition"
              >
                <Download size={20}/>
                Download PDF
              </a>
            )}
        

         </div>


          {/* RIGHT SIDE LIST */}

          <div className="space-y-3 sm:space-y-4 text-left lg:ml-auto lg:w-[24rem]">

            {current.bullets.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3 text-(--color-body-text) text-base sm:text-lg md:text-xl transition-transform duration-200 hover:translate-x-2"
              >

                <span className="w-2.5 h-2.5 bg-(--color-theme-2) rounded-full"></span>

                {item}

              </div>

            ))}

          </div>

        </div>

      </div>

      </div>

    </section>

  )

}