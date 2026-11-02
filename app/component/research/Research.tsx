
'use client'

import { ArrowUpRight, Award, BookOpen, Download, Fingerprint, FileText, Globe, Lightbulb, Users, ShieldCheck } from 'lucide-react'

export default function Home() {
  const stats = [
    {
      value: '42',
      label: 'PATENTS',
      icon: <Lightbulb size={20} />,
    },
    {
      value: '1.2k',
      label: 'PAPERS',
      icon: <BookOpen size={20} />,
    },
    {
      value: '$4.5M',
      label: 'FUNDING',
      icon: <Award size={20} />,
    },
    {
      value: '18',
      label: 'PARTNERS',
      icon: <Globe size={20} />,
    },
  ]

  const committee = [
    {
      initials: 'VH',
      name: 'Dr. Elena Vance',
      role: 'Director of Research',
      specialization: 'Quantum Computing',
    },
    {
      initials: 'MT',
      name: 'Dr. Marcus Thorne',
      role: 'Dean(R&D)',
      specialization: 'Nanotechnology',
    },
    {
      initials: 'SJ',
      name: 'Prof. Sarah Jenkins',
      role: 'Ethical Lead',
      specialization: 'Bio-Ethics',
    },
  ]

  const resources = [
    {
      name: 'Research Policy 2026',
      description: 'PDF • 2.4MB',
    },
    {
      name: 'Grant Proposal Template',
      description: 'DOCX • 1.1MB',
    },
    {
      name: 'IPR & Patenting Guidelines',
      description: 'PDF • 3.2MB',
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--theme-bg-light)] px-4 py-8 sm:px-6 md:px-10 lg:px-16 lg:py-10">
      <div className="mx-auto max-w-8xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--theme-color2)]/50 bg-[var(--theme-color2)]/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--theme-color2)]">
         <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-color2)] animate-pulse" />
          ADVANCING HUMAN KNOWLEDGE
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[var(--theme-color)] sm:text-4xl lg:text-5xl">
              Research <span className="italic text-[var(--body-text-color)] font-semibold">& Development</span>
            </h1>

            <p className="mt-4 max-w-xl text-medium leading-6 text-[var(--body-text-color)]">
              Bridging the gap between theoretical exploration and real-world
              impact through interdisciplinary excellence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="min-h-[140px] w-full rounded-2xl border border-[var(--body-text-color)]/10 bg-[var(--background)] px-4 py-5 shadow-[0_6px_20px_rgba(15,23,42,0.05)] transition-colors duration-200 hover:border-[var(--theme-color2)]/30 sm:min-h-[160px] sm:px-5 sm:py-6 md:min-h-[168px]"
                >
                  <div className="text-sm text-[var(--theme-color2)]">{item.icon}</div>

                  <div className="mt-3 text-3xl font-bold tracking-tight text-[var(--theme-color)]">
                    {item.value}
                  </div>

                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--body-text-color)]/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 min-h-0 rounded-[26px] border border-[var(--body-text-color)]/10 bg-[var(--background)] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6 md:p-7 md:pl-10 lg:pl-12">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-[var(--theme-color)]">
                    Advisory Committee
                  </h2>

                  <p className="mt-2 text-medium text-[var(--body-text-color)]">
                    The strategic minds behind our innovation pipeline.
                  </p>
                </div>

                <Users className="text-[var(--theme-color2)]/30" size={32} />
              </div>

              <div className="mt-8 space-y-7">
                {committee.map((person, index) => (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 rounded-2xl border border-transparent px-3 py-3 transition-colors duration-200 hover:border-[var(--theme-color2)]/20 hover:bg-[var(--theme-bg-light)]/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4self-start"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--theme-color2)] text-sm font-bold text-[var(--background)] transition-transform duration-200 sm:h-12 sm:w-12">
                        {person.initials}
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[var(--theme-color)]">
                          {person.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-[var(--body-text-color)]">
                          {person.role} • <span className="text-[var(--theme-color2)]">{person.specialization}</span>
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="hidden self-end text-[var(--theme-color2)] group-hover:block sm:self-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

            <div className="flex min-w-0 flex-col gap-5 lg:pt-20">
            <div className="w-full rounded-[26px] border border-[var(--body-text-color)]/10 bg-[var(--background)] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6 md:p-7">
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--theme-color2)]">
                <div className="bg-[var(--theme-color2)]/10 p-2 rounded-lg">
                  <FileText size={20}/>
                </div>
                <span className="text-lg text-[var(--theme-color)]">Resources</span>
              </div>

              <div className="mt-8 space-y-4 sm:mt-10">
                {resources.map((item, index) => (
                  <div
                    key={index}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-[var(--body-text-color)]/5 bg-[var(--body-text-color)]/5 px-4 py-4 transition-colors duration-200 hover:border-[var(--theme-color2)]/40"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-[var(--theme-color)] sm:text-base">
                        {item.name}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-[var(--body-text-color)]/50 sm:text-sm">
                        {item.description}
                      </div>
                    </div>

                    <Download size={16} className="text-[var(--body-text-color)]/50 transition-colors duration-200 group-hover:text-[var(--theme-color2)]" />
                  </div>
                ))}
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--theme-color2)] py-4 text-sm font-bold text-[var(--background)] transition hover:opacity-90 sm:mt-10">
                Portal Access
                <Fingerprint size={16} />
              </button>
            </div>

            <div className="relative w-full overflow-hidden rounded-[26px] bg-[var(--theme-color)] p-6 text-[var(--background)] shadow-[0_12px_35px_rgba(12,21,52,0.35)] sm:p-8">
              
              <div className="relative z-10 max-w-xl">
                <div className="flex h-9 w-9 items-center justify-center text-[var(--theme-color2)]">
                  <ShieldCheck size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold">Ethics Clearance</h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[var(--background)]/60">
                  Required for all projects involving human metrics.
                </p>

                <button className="mt-6 rounded-lg bg-[var(--theme-color2)] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--background)] transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}