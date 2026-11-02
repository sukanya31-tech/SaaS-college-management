"use client";

import {
  BookOpen,
  MonitorSmartphone,
  FlaskConical,
  Wifi,
  Bus,
  Building2,
} from "lucide-react";

export default function CampusFacilities() {
  const facilities = [
    {
      icon: BookOpen,
      title: "Central Library",
      description:
        "Extensive collection of books, journals and digital resources supporting academic excellence and research development.",
    },
    {
      icon: MonitorSmartphone,
      title: "Smart Classrooms",
      description:
        "Digitally enabled classrooms equipped with interactive teaching systems and modern presentation tools.",
    },
    {
      icon: FlaskConical,
      title: "Advanced Laboratories",
      description:
        "Fully equipped laboratories providing hands-on practical exposure for science and technology programs.",
    },
    {
      icon: Wifi,
      title: "Campus Wi-Fi",
      description:
        "High-speed internet connectivity available across the entire campus for students and faculty.",
    },
    {
      icon: Bus,
      title: "Transportation",
      description:
        "Safe and reliable transportation facilities connecting major city locations.",
    },
    {
      icon: Building2,
      title: "Hostel & Infrastructure",
      description:
        "Comfortable hostel accommodations with modern infrastructure ensuring a safe living environment.",
    },
  ];

  return (
    <main className="w-full bg-[var(--theme-bg-light)] py-28">
      <div className="max-w-8xl mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-20">
        
        {/* LEFT SIDE */}
        <div className="md:sticky md:top-28 self-start">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--footer-bg)] leading-tight mb-8">
            Campus <br /> Facilities
          </h2>

          <p className="text-[var(--body-text-color)] text-xl md:text-2xl leading-relaxed max-w-sm">
            We provide a modern campus environment designed to enhance learning,
            innovation, and student well-being.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-12">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            const serialNumber = String(index + 1).padStart(2, "0");

            return (
              <div key={index} className="border-b border-[var(--body-text-color)]/20 pb-10">
                <div className="group flex items-start justify-between gap-8">

                  {/* LEFT CONTENT */}
                  <div className="flex gap-8">
                    
                    {/* Icon */}
                    <div className="relative rounded-xl p-5">
                      <span className="pointer-events-none absolute top-2 -right-12 select-none text-8xl md:text-9xl font-bold leading-none text-[var(--theme-color)]/15 opacity-20 transition-transform transition-opacity duration-300 group-hover:translate-x-3 group-hover:opacity-100">
                        {serialNumber}
                      </span>
                      <Icon
                        size={40}
                        className="text-[var(--theme-color2)] transition-transform duration-300 group-hover:-rotate-8"
                      />
                    </div>

                    {/* Text */}
                    <div className="relative cursor-pointer transition-transform duration-300 hover:translate-x-3">
                      <h3 className="text-2xl md:text-3xl font-semibold text-[var(--theme-color)] mb-3 transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
                        {facility.title}
                      </h3>

                      <p className="text-[var(--body-text-color)] text-xl md:text-2xl leading-relaxed max-w-2xl transition-colors duration-300 group-hover:text-[var(--body-text-color)]">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Pink Line */}
                  <div className="hidden md:block w-16 h-[3px] bg-[var(--theme-color2)] mt-4 origin-center scale-x-100 transition-transform duration-300 group-hover:scale-x-150"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}