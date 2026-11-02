"use client"

import Link from "next/link"

type Notice = {
  day: string
  month: string
  year: string
  title: string
  category: string
  link: string
}

const notices: Notice[] = [
  {
    day: "25",
    month: "FEB",
    year: "2026",
    title: "MBA Admissions 2026 – Applications Open",
    category: "Admissions",
    link: "/admissions",
  },
  {
    day: "20",
    month: "FEB",
    year: "2026",
    title: "Campus Drive – Infosys Recruitment",
    category: "Placement",
    link: "/placements",
  },
  {
    day: "02",
    month: "MAR",
    year: "2026",
    title: "B.Tech Semester Examination Timetable Released",
    category: "Examination",
    link: "/pdfs/timetable.pdf",
  },
  {
    day: "18",
    month: "MAR",
    year: "2026",
    title: "Scholarship Applications Open for 2026",
    category: "Scholarships",
    link: "/scholarships",
  },
  {
    day: "22",
    month: "MAR",
    year: "2026",
    title: "Workshop on Artificial Intelligence",
    category: "Events",
    link: "/events/ai-workshop",
  },
]

export default function Notifications() {
  return (
    <section className="bg-(--color-theme-bg-light) py-28">

      {/* scroll animation */}
      <style jsx>{`
        .scroll-list {
          animation: scrollUp 18s linear infinite;
        }

        .scroll-wrapper:hover .scroll-list {
          animation-play-state: paused;
        }

        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div className="max-w-8xl mx-auto px-6 md:px-16">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE CONTENT */}

          <div className="max-w-2xl">

            <p className="text-(--color-theme-2) uppercase font-semibold tracking-wider mb-4 text-lg">
              Updates
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-(--color-theme) leading-tight mb-6">
              Stay Updated <br/> With Campus Notices
            </h2>

            <p className="text-(--color-body-text) text-2xl leading-relaxed mb-8">
              Get real-time updates on examinations, admissions,
              placements, and academic announcements. All official
              circulars are published here for easy access.
            </p>

            <Link
              href="/notices"
              className="text-(--color-theme-2) text-xl font-semibold hover:underline"
            >
              Explore All Notices →
            </Link>

          </div>


          {/* RIGHT NOTIFICATIONS */}

          <div className="relative h-[28rem] overflow-hidden scroll-wrapper">

            {/* vertical divider */}


            <div className="scroll-list pl-12">

              {[...notices, ...notices].map((notice, index) => (

                <Link
                  key={index}
                  href={notice.link}
                  className="group relative flex items-stretch border-b border-gray-200 py-2"
                >

                  {/* PINK HOVER LINE */}

                  <span className="absolute -left-2.5 inset-y-2 w-0.75 bg-(--color-theme-2) opacity-0 group-hover:opacity-100 transition"></span>

                  {/* DATE COLUMN (always white) */}

                  <div className="w-28 bg-[var(--background)] text-center py-7">

                    <p className="text-4xl font-bold text-(--color-theme)">
                      {notice.day}
                    </p>

                    <p className="text-2xl text-[var(--body-text-color)] uppercase">
                      {notice.month}
                    </p>

                    <p className="text-2xl text-[var(--body-text-color)]  uppercase">
                      {notice.year}
                    </p>

                  </div>

                  {/* CONTENT AREA */}

                  <div className="flex-1 py-7 px-7 transition-all duration-300 bg-transparent group-hover:bg-[var(--background)] group-hover:-translate-y-0.5 flex flex-col justify-center">

                    <h4
                      className={`text-xl font-semibold transition ${
                        notice.title === "B.Tech Semester Examination Timetable Released"
                          ? "text-(--color-theme-2)"
                          : "text-(--color-theme) group-hover:text-(--color-theme-2)"
                      }`}
                    >
                      {notice.title}
                    </h4>

                    <p className="text-lg text-[var(--body-text-color)] mt-2">
                      {notice.category}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}