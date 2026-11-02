// app/components/FacultySection.tsx

import Image from "next/image";

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Head of Department",
    category: "Machine Learning",
    image: "/faculty/lecture1.png",
    tag: "PH.D. IN AI",
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    role: "Senior Professor",
    category: "Cloud Computing",
    image: "/faculty/lecture2.png",
    tag: "M.TECH, PH.D.",
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    role: "Associate Professor",
    category: "Data Structures",
    image: "/faculty/lecture3.png",
    tag: "PH.D. IN CS",
  },
  {
    id: 4,
    name: "Mr. David Chen",
    role: "Assistant Professor",
    category: "Web Technologies",
    image: "/faculty/lecture4.png",   
    tag: "M.TECH",
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    role: "Professor",
    category: "Cyber Security",
    image: "/faculty/lecture5.png",
    tag: "PH.D.",
  },
  {
    id: 6,
    name: "Prof. Robert Taylor",
    role: "Lab Instructor",
    category: "Network Admin",
    image: "/faculty/lecture6.png",
    tag: "M.TECH",
  },
];

export default function FacultySection() {
  return (
    <section className="w-full bg-[var(--theme-bg-light)] py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-16">
        {/* Top Badge */}
        <div className="mb-6 inline-flex rounded-full border border-[var(--theme-color2)]/40 bg-[var(--theme-color2)]/5 px-4 py-1">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--theme-color2)]">
              ACADEMIC EXCELLENCE
            </span>
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mt-4 leading-[1.1] tracking-tight text-[var(--theme-color)]">
            Meet Our Distinguished
            <br />
            <span className="italic font-medium text-[var(--body-text-color)]">
              Faculty Members
            </span>
          </h2>

          <p className="mt-5 text-medium leading-7 text-[var(--body-text-color)]">
            Our department is home to world-class educators and researchers
            dedicated to shaping the next generation of technology leaders
            through innovation and hands-on mentorship.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="max-w-8xl mx-auto mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.map((faculty) => (
            <div
              key={faculty.id}
              className="group overflow-hidden rounded-sm bg-[var(--background)] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="relative h-[320px] w-full overflow-hidden">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--theme-color)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="px-6 py-14 text-center">
                <div className="mx-auto mb-4 -mt-8 relative z-10 flex h-6 w-20 items-center justify-center rounded-full bg-[var(--theme-color2)]/5">
                  <span className="text-[10px] font-bold text-[var(--theme-color2)]">
                    {faculty.tag}
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold text-[var(--theme-color)] transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
                  {faculty.name}
                </h3>

                <p className="mt-1 text-[13px] text-[var(--body-text-color)]">
                  {faculty.role}
                </p>

                <p className="text-[12px] mt-8 text-[var(--body-text-color)]/50 font-medium uppercase tracking-wide">
                  Specialization
                </p>

                <p className="text-[14px] mt-2 font-medium tracking-wide text-[var(--theme-color)]">
                  {faculty.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}