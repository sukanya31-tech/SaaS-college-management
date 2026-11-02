"use client";

import { Download, Scale, Ban, OctagonAlert, UserX, TriangleAlert, LifeBuoy, LandPlot, FileWarning, Gavel } from "lucide-react";

export default function AntiRaggingSection() {
  return (
    <section className="bg-[var(--theme-bg-light)] px-6 md:px-16 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-2 text-xs tracking-widest px-3 py-1 rounded-full border border-[var(--theme-color2)]/20 bg-[var(--theme-color2)]/10 text-[var(--theme-color2)] font-medium">
            <TriangleAlert size={14} />
            JUDICIAL COMPLIANCE DIVISION
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--theme-color)]">
            ANTI <span className="text-[var(--body-text-color)] italic font-medium">RAGGING</span>
          </h1>

          <p className="mt-3 text-sm text-[var(--body-text-color)] max-w-md">
            Ragging is a <span className="font-semibold text-[var(--theme-color)]">CRIMINAL OFFENSE</span>. 
            The institution operates under a strict zero-tolerance mandate.
          </p>
        </div>

        <div className="text-left md:text-right mt-20">
          <p className="text-xs tracking-widest text-[var(--body-text-color)]">
            24/7 HELPLINE ACCESS
          </p>
          <h2 className="text-2xl font-bold text-[var(--theme-color2)] mt-1 md:whitespace-nowrap">
            {"1800\u2011180\u20115522"}
          </h2>
        </div>
      </div>

      <div className="mt-8 mb-8 border-t border-[var(--body-text-color)]/10" />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          Icon={UserX}
          title="Expulsion"
          desc="Immediate removal from records."
        />
        <Card
          Icon={Ban}
          title="Rustication"
          desc="Suspension for 2+ years."
        />
        <Card
          Icon={Scale}
          title="Legal Action"
          desc="FIR under Anti-Ragging Acts."
        />
        <Card
          Icon={OctagonAlert}
          title="Monetary Fine"
          desc="Penalties up to ₹2.5 Lakhs."
        />
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Documents */}
        <div>
          <p className="inline-flex items-center gap-2 text-xs tracking-widest font-bold text-[var(--body-text-color)] mb-4">
            <Gavel size={20} className="text-[var(--theme-color2)]" />
            STATUTORY DOCUMENTATION
          </p>

          <DocItem
            icon={<FileWarning size={18} className="text-[var(--body-text-color)] transition-colors duration-200 group-hover:text-[var(--theme-color2)]" />}
            title="UGC Regulations 2026"
            desc="Standard procedures for compliance."
          />
          <DocItem
          icon={<FileWarning size={18} className="text-[var(--body-text-color)] transition-colors duration-200 group-hover:text-[var(--theme-color2)]" />} 
          title="Campus Safety Bylaws" desc="Internal conduct rules for campus." />
          <DocItem 
          icon={<FileWarning size={18} className="text-[var(--body-text-color)] transition-colors duration-200 group-hover:text-[var(--theme-color2)]" />}
          title="Affidavit Template" desc="Mandatory undertaking form." />
        </div>

        {/* Enforcement Box */}
        <div className="bg-[var(--background)] rounded-2xl p-6 shadow-sm border border-[var(--theme-bg-light)]  flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--theme-color2)] text-[var(--background)]  mb-4">
              <LandPlot size={16} />
            </div>

            <h3 className="text-lg font-bold text-[var(--theme-color)]">
              INSTITUTIONAL <br /> ENFORCEMENT
            </h3>

            <p className="text-sm text-[var(--body-text-color)] mt-4">
              University Proctorial Board conducts midnight raids.
            </p>
          </div>

          <button className="group mt-6 bg-[var(--theme-color)] text-[var(--background)] text-sm font-medium py-3 rounded-lg hover:bg-[var(--theme-color2)] transition-colors duration-300 inline-flex items-center justify-center gap-2">
            <LifeBuoy size={18} className="transition-transform duration-300 group-hover:rotate-180" />
            EMERGENCY INCIDENT REPORT
          </button>
        </div>
      </div>
    </section>
  );
}

/* Reusable Card */
function Card({
  Icon,
  title,
  desc,
}: {
  Icon: React.ElementType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden bg-[var(--background)] rounded-xl p-5 shadow-sm border border-[var(--theme-bg-light)] hover:shadow-lg transition min-h-[160px]">
      <div className="relative z-10">
        <div className="text-[var(--theme-color2)] mb-3">
          <Icon size={22} className="transition-transform duration-300 group-hover:scale-125" />
        </div>
        <h4
          className="font-semibold text-[var(--theme-color)] transition-colors duration-300 group-hover:text-[var(--theme-color2)]"
        >
          {title}
        </h4>
        <p className="text-xs text-[var(--body-text-color)] mt-1">{desc}</p>
      </div>

      <div className="pointer-events-none absolute -right-2 -bottom-3 text-[var(--theme-bg-light)]/50 opacity-80">
        <Icon size={84} className="transition-transform duration-300 group-hover:rotate-12 group-hover:text-[var(--theme-bg-light)]" />
      </div>
    </div>
  );
}

/* Document Item */
function DocItem({
  icon,
  title,
  desc,
}: {
  icon?: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex items-center justify-between bg-[var(--background)] border border-[var(--theme-bg-light)] rounded-xl px-4 py-4 min-h-[88px] mb-3 hover:border-[var(--theme-color2)]/20 hover:bg-[var(--theme-color2)]/5 hover:shadow-sm transition-all duration-300">
      <div className="flex items-center gap-3">
        {icon ? <div className="text-[var(--theme-color2)]">{icon}</div> : null}
        <div>
        <p className="text-sm font-medium text-[ var(--theme-color)]">{title}</p>
        <p className="text-xs text-[var(--body-text-color)]">{desc}</p>
        </div>
      </div>

      <button className="p-2 rounded-md bg-[var(--theme-bg-light)] hover:bg-[var(--theme-color2)] transition-colors duration-200">
        <Download size={16} />
      </button>
    </div>
  );
}