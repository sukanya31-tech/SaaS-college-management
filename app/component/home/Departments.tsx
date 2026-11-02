import { Building2, CircuitBoard, Cog, Cpu, Monitor, Zap } from "lucide-react";

export default function AcademicDepartments() {
  const departments = [
    {
      icon: <Cpu size={20} />,
      bgIcon: <Cpu size={160} />,
      title: "Computer Science & Engineering",
      desc: "Focused on AI, Data Science, Cyber Security, Cloud Computing and emerging digital technologies.",
    },
    {
      icon: <Monitor size={20} />,
      bgIcon: <Monitor size={160} />,
      title: "Information Technology",
      desc: "Specializes in software systems, networking, enterprise applications and modern IT infrastructure.",
    },
    {
      icon: <CircuitBoard size={20} />,
      bgIcon: <CircuitBoard size={160} />,
      title: "Electronics & Communication Engineering",
      desc: "Covers embedded systems, communication technologies and signal processing.",
    },
    {
      icon: <Zap size={20} />,
      bgIcon: <Zap size={160} />,
      title: "Electrical & Electronics Engineering",
      desc: "Emphasizes electrical machines, renewable energy and power systems.",
    },
    {
      icon: <Building2 size={20} />,
      bgIcon: <Building2 size={160} />,
      title: "Civil Engineering",
      desc: "Focused on structural design, smart infrastructure and sustainable construction.",
    },
    {
      icon: <Cog size={20} />,
      bgIcon: <Cog size={160} />,
      title: "Mechanical Engineering",
      desc: "Includes robotics, manufacturing systems and thermal engineering.",
    },
  ];

  return (
    <main className="min-h-screen bg-(--color-theme-bg-light) py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-16">

        <div className="text-center">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-2">
          Our Academic Departments
        </h1>

        <p className="text-[var(--body-text-color)] mt-4 mb-12 text-2xl">
          Delivering academic excellence across core engineering disciplines
          and future-ready technologies.
        </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-full min-h-[380px] md:min-h-[420px] bg-[var(--background)] p-6 md:p-8 rounded-xl border border-[var(--theme-bg-light)] shadow-md text-left flex flex-col justify-between
              transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--theme-color2)] group"
            >

              {/* Top hover border */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--theme-color2)] transition-all duration-300 group-hover:w-full rounded-t-xl"></div>

              {/* Background Watermark Icon */}
              <div className="absolute bottom-[-20px] right-[-20px] text-[var(--theme-bg-light)] opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {dept.bgIcon}
              </div>

              {/* Icon */}
              <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-[var(--theme-bg-light)] text-[var(--theme-color2)] rounded-md text-lg mb-4">
                {dept.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold text-slate-800 mb-2">
                {dept.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-[var(--body-text-color)] text-xl mb-4 mt-4 leading-relaxed">
                {dept.desc}
              </p>

              {/* Link */}
              <a
                href="#"
                className="relative z-10 mt-auto text-[var(--theme-color2)] font-semibold text-lg md:text-xl"
              >
                Explore Department →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}