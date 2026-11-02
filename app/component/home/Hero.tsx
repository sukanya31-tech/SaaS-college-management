"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  primaryBtn: string;
  secondaryBtn: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/homelogos/slider1.png",
    subtitle: "DIGIT COLLEGE OF ENGINEERING",
    title: "Top Placements & Career Success",
    description:
      "Our dedicated placement cell connects students with leading companies, ensuring outstanding career opportunities and industry exposure.",
    primaryBtn: "Placement Stats",
    secondaryBtn: "Our Recruiters",
  },
  {
    id: 2,
    image: "/homelogos/slider2.png",
    subtitle: "DIGIT COLLEGE OF ENGINEERING",
    title: "Examinations & Academic Excellence",
    description:
      "Transparent evaluation, structured assessments, and continuous academic monitoring to help students achieve consistent performance.",
    primaryBtn: "Exam Schedule",
    secondaryBtn: "Results",
  },
  {
    id: 3,
    image: "/homelogos/slider3.png",
    subtitle: "DIGIT COLLEGE OF ENGINEERING",
    title: "Admissions Open 2026",
    description:
      "Begin your journey towards academic excellence. Explore our undergraduate and postgraduate programs designed to shape future innovators and leaders.,",
    primaryBtn: "Apply Now",
    secondaryBtn: "New Courses",
  },
];

export default function HeroSlider() {                                                  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[68vh] min-h-[420px] sm:h-[72vh] md:h-[78vh] lg:h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-30 h-full flex items-center">
            <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-[var(--background)]">
            
            {/* Subtitle */}
            <p className="uppercase tracking-[0.15em] text-xs sm:text-sm md:text-base lg:text-lg font-semibold relative inline-block mb-4 sm:mb-5 md:mb-7">
              {slide.subtitle}
              <span className="absolute -bottom-2 left-0 w-14 sm:w-16 md:w-20 h-1 bg-[var(--theme-color2)]"></span>
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl mb-4 sm:mb-5 md:mb-7">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[var(--theme-bg-light)] mb-6 sm:mb-8 md:mb-10 leading-relaxed sm:leading-7 md:leading-8">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-7 w-full sm:w-auto">
              <button className="bg-[var(--theme-color2)] hover:bg-[var(--theme-color2)] px-6 sm:px-7 md:px-8 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition w-full sm:w-auto">
                {slide.primaryBtn}
              </button>

              <button className="border-2 border-[var(--background)] px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[var(--background)] hover:text-[var(--theme-color)] transition w-full sm:w-auto">
                {slide.secondaryBtn}
              </button>
            </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}