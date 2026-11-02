"use client";

import Image from "next/image";

const features = [
  {
    title: "Book Lending Services",
    desc: "Access our vast collection of physical and digital resources with a seamless, user-friendly checkout process.",
    img: "/facilities/book lending services.png",
  },
  {
    title: "Organized Archive & Racks",
    desc: "Browse through systematically categorized stacks, ensuring you find the exact materials you need.",
    img: "/facilities/organized racks.png",
  },
  {
    title: "Dedicated Study Spaces",
    desc: "Immerse yourself in a quiet, ergonomic environment designed to foster deep focus and academic excellence.",
    img: "/facilities/studyspaces.png",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-16 px-6 md:px-12 lg:px-20">
      
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--theme-color2)] border border-[var(--theme-color2)]/20 bg-[var(--theme-color2)]/5 px-4 py-1 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-color2)] animate-pulse" />
          CENTER FOR EXCELLENCE
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-color)]">
        Knowledge Hub: Library &{" "}
        <br />
        <span className="italic font-medium text-[var(--body-text-color)]">
          Academic Support
        </span>
      </h2>

      {/* Cards */}
      <div className="grid gap-6 mt-10 md:grid-cols-1 lg:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg group-hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[var(--theme-color)] mb-2 transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--body-text-color)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}