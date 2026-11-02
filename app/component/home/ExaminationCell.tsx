"use client";
import { CalendarDays, FileText, ClipboardCheck, ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[var(--theme-bg-light)] px-8 md:px-12 lg:px-20 py-14 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-64 w-64 md:h-80 md:w-80 bg-[radial-gradient(at_top_left,var(--theme-color2),transparent_65%)] opacity-20 pointer-events-none"
      />
      <section className="max-w-8xl mx-auto w-full">

        {/* Heading */}
        <div className="mb-16 md:mb-14">
          <p className="text-[var(--theme-color2)] font-bold tracking-widest text-sm uppercase mb-3">
            Academic Governance
          </p>

          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-[var(--theme-color)] leading-tight mb-5">
            Examination <br /> Control Center
          </h1>

          <p className="text-[var(--body-text-color)] text-xl md:text-lg lg:text-xl max-w-2xl">
            A centralized digital system managing examinations, evaluations and
            academic integrity with precision and transparency.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16">

          {/* Card 1 */}
          <div className="group relative bg-[var(--background)] rounded-2xl p-8 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition min-h-[340px] border border-transparent hover:border-[var(--theme-color2)]">
            <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-[var(--theme-color2)] opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 bg-[var(--theme-color2)]/10 transition-colors duration-300 group-hover:bg-[var(--theme-color2)]">
              <CalendarDays className="text-[var(--theme-color2)] w-7 h-7 transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl mt-9 mb-3 text-[var(--theme-color)]">
              Exam Timetables
            </h3>

            <p className="text-[var(--body-text-color)] text-2xl md:text-lg lg:text-2xl">
              Semester schedules, practical exams and supplementary dates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[var(--background)] rounded-2xl p-8 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition min-h-[340px] border border-transparent hover:border-[var(--theme-color2)]">
            <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-[var(--theme-color2)] opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 bg-[var(--theme-color2)]/10 transition-colors duration-300 group-hover:bg-[var(--theme-color2)]">
              <FileText className="text-[var(--theme-color2)] w-7 h-7 transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl mt-9 mb-3 text-[var(--theme-color)]">
              Results Portal
            </h3>

            <p className="text-[var(--body-text-color)] text-2xl md:text-lg lg:text-2xl">
              Instant access to semester and revaluation results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[var(--background)] rounded-2xl p-8 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition min-h-[340px] border border-transparent hover:border-[var(--theme-color2)]">
            <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-[var(--theme-color2)] opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
            <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 bg-[var(--theme-color2)]/10 transition-colors duration-300 group-hover:bg-[var(--theme-color2)]">
              <ClipboardCheck className="text-[var(--theme-color2)] w-7 h-7 transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl mt-9 mb-3 text-[var(--theme-color)]">
              Hall Ticket Access
            </h3>

            <p className="text-[var(--body-text-color)] text-2xl md:text-lg lg:text-2xl">
              Secure download of examination hall tickets.
            </p>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

          <div className="bg-[var(--background)] rounded-xl shadow-md hover:shadow-xl transition p-5 sm:p-8 md:p-6 text-center">
            <h3 className="text-3xl font-bold text-[var(--theme-color2)]">100%</h3>
            <p className="text-[var(--body-text-color)] text-base sm:text-xl md:text-lg lg:text-2xl mt-2 leading-tight break-words">Transparency</p>
          </div>

          <div className="bg-[var(--background)] rounded-xl shadow-md hover:shadow-xl transition p-5 sm:p-8 md:p-6 text-center">
            <h3 className="text-3xl font-bold text-[var(--theme-color2)]">30+</h3>
            <p className="text-[var(--body-text-color)] text-base sm:text-xl md:text-lg lg:text-2xl mt-2 leading-tight break-words">Exams / Year</p>
          </div>

          <div className="bg-[var(--background)] rounded-xl shadow-md hover:shadow-xl transition p-5 sm:p-8 md:p-6 text-center">
            <h3 className="text-3xl font-bold text-[var(--theme-color2)]">10K+</h3>
            <p className="text-[var(--body-text-color)] text-base sm:text-xl md:text-lg lg:text-2xl mt-2 leading-tight break-words">Students Served</p>
          </div>

          <div className="bg-[var(--background)] rounded-xl shadow-md hover:shadow-xl transition p-5 sm:p-8 md:p-6 text-center">
            <h3 className="text-3xl font-bold text-[var(--theme-color2)]">24/7</h3>
            <p className="text-[var(--body-text-color)] text-base sm:text-xl md:text-lg lg:text-2xl mt-2 leading-tight break-words">Support System</p>
          </div>

        </div>

      </section>
    </main>
  );
}