"use client";

import Image from "next/image";

const cards = [
  {
    title: "Surving Line",
    desc: "Serving at our peak hours.",
    img: "/facilities/survingline.png",
  },
  {
    title: "Communal Dining",
    desc: "Where students connect.",
    img: "/facilities/communaldining.png",
  },
  {
    title: "Service Excellence",
    desc: "Efficient, clean standards.",
    img: "/facilities/serviceexcellence.png",
  },
  {
    title: "Friendly Staff",
    desc: "Qualified team service.",
    img: "/facilities/friendlystaff.png",
  },
];

export default function CafeteriaSection() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-14">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase font-semibold text-[var(--theme-color2)] border border-[var(--theme-color2)]/10 rounded-full px-4 py-1 bg-[var(--theme-color2)]/5">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            Campus Moments
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--theme-color)]">
          Campus Cafeteria
        </h2>

        <p className="text-2xl md:text-4xl italic text-[var(--body-text-color)] mt-2 mb-10">
          Endless Memories
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-[var(--background)] rounded-2xl p-3 border-2 border-[var(--theme-color2)]/30 shadow-sm transition-all duration-300 ease-out min-h-[320px] hover:-translate-y-3 hover:bg-[var(--theme-color2)]/5 hover:border-[var(--theme-color2)] hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full max-w-[280px] h-[280px] mx-auto rounded-xl mt-2 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>    

              {/* Content */}
              <div className="mt-4 px-1">
                <h3 className="font-semibold text-sm text-[var(--theme-color)] transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
                  {card.title}
                </h3>
                <p className="text-xs text-[var(--body-text-color)] mt-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}