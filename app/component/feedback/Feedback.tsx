// app/page.tsx

"use client"

import { useState } from "react"
import { GraduationCap, Quote } from "lucide-react"

const testimonials = [
  {
    image: "/feedback/feedback person1.png",
    quote:
      "The depth of the curriculum and the quality of the mentors exceeded all my expectations. I felt truly prepared for my first role at a FAANG company.",
    name: "Sarah Jenkins",
    role: "Computer Science Graduate",
  },

  {
    image: "/feedback/feedback person2.png",
    quote:
      "I never thought I could transition from finance to design, but step-by-step approach and the supportive community made it possible.",
    name: "David Chen",
    role: "UX DESIGN STUDENT",
  },

  {
    image: "/feedback/feedback person3.png",
    quote:
      "The capstone project was the highlight. Working on real-world data gave me the confidence to lead my own team just months after graduating.",
    name: "Amina Okoro",
    role: "Data Science Lead",
  },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonial = testimonials[activeTestimonial]

  return (
    <main className="min-h-screen bg-[var(--theme-bg-light)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[var(--theme-color2)]/50 bg-[var(--theme-color2)]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--theme-color2)]">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--theme-color2)] animate-pulse" aria-hidden="true"></span>
          Success Stories
        </div>

        {/* Heading */}
        <div className="mt-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-[-0.03em] text-[var(--theme-color)]">
            Our Graduates
          </h1>

          <h2 className="mt-2 sm:mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-semibold leading-none tracking-[-0.03em] text-[var(--body-text-color)]">
            Speak for Us
          </h2>

          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 max-w-[420px] text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-[var(--body-text-color)] sm:whitespace-normal lg:whitespace-nowrap">
            Join thousands of professionals who have transformed their careers<br /> through our specialized tracks and world-class mentorship.
          </p>
        </div>

        {/* Content */}
        <div className="mt-6 sm:mt-8 md:mt-10 grid items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 lg:grid-cols-[360px_1fr]">
          {/* Left Side */}
          <div className="relative w-full sm:w-80 md:w-96 lg:w-[440px] mx-auto lg:mx-0">
            {/* Gradient Shadow Background */}
            <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[28px] bg-gradient-to-br from-pink-200/30 via-purple-200/20 to-transparent blur-2xl sm:blur-3xl md:blur-3xl lg:blur-3xl transform translate-y-2 sm:translate-y-3 md:translate-y-4 lg:translate-y-6"></div>
            
            {/* Image Card */}
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[28px] bg-[var(--background)] border-[4px] sm:border-[6px] md:border-[8px] border-[var(--background)] shadow-[0_20px_40px_rgba(236,72,153,0.15)] sm:shadow-[0_25px_50px_rgba(236,72,153,0.12)] md:shadow-[0_30px_60px_rgba(236,72,153,0.1)] lg:shadow-[0_40px_80px_rgba(246,76,156,0.4)] group">
              {/* inner clipping wrapper keeps the border thickness fixed while the image scales */}
              <div className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]">
                <img
                  src={testimonial.image}
                  alt="Graduate"
                  className="h-64 sm:h-72 md:h-80 lg:h-[440px] w-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-[-6px] sm:bottom-[-4px] md:bottom-[-2px] lg:bottom-[-10px] right-1 sm:right-0 md:right-[-20px] lg:right-[-25px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-[var(--background)] px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 shadow-[0_12px_24px_rgba(236,72,153,0.15)] sm:shadow-[0_15px_30px_rgba(236,72,153,0.14)] md:shadow-[0_18px_36px_rgba(236,72,153,0.13)] lg:shadow-[0_20px_40px_rgba(236,72,153,0.12)]">
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                <span className="inline-flex h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 items-center justify-center rounded-lg bg-[var(--theme-color2)]/10 p-1">
                  <GraduationCap className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-[var(--theme-color2)]" aria-hidden="true" />
                </span>

                <p className="text-xs sm:text-sm md:text-medium font-semibold text-[var(--theme-color)]">
                  Verified Alumni
                </p>
              </div>

              <div className="mt-1 sm:mt-1.5 md:mt-2 flex items-center gap-1 text-[var(--theme-yellow)]">
                <span className="text-xs sm:text-sm">★</span>
                <span className="text-xs sm:text-sm">★</span>
                <span className="text-xs sm:text-sm">★</span>
                <span className="text-xs sm:text-sm">★</span>
                <span className="text-xs sm:text-sm">★</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="max-w-[560px]">
              <Quote className={`relative h-12 sm:h-16 md:h-20 lg:h-[82px] w-12 sm:w-16 md:w-20 lg:w-[82px] text-[var(--theme-color2)]/10 ml-4 sm:ml-6 md:ml-8 lg:ml-30 ${activeTestimonial === 0 ? "-top-4 sm:-top-6 md:-top-8 lg:-top-10" : "-top-2 sm:-top-3 md:-top-4 lg:-top-4"}`} aria-hidden="true" />

              <p className={`text-sm sm:text-lg md:text-2xl lg:text-[38px] font-bold leading-[1.4] tracking-[-0.03em] text-[var(--theme-color)] ml-4 sm:ml-6 md:ml-8 lg:ml-38 ${activeTestimonial === 0 ? "-mt-8 sm:-mt-12 md:-mt-14 lg:-mt-24" : "-mt-6 sm:-mt-8 md:-mt-14 lg:-mt-16"} whitespace-normal md:whitespace-normal lg:whitespace-nowrap`}>
                {activeTestimonial === 0 ? (
                  <>
                    "The depth of the curriculum and the quality of <br /> the mentors
                    exceeded all my expectations. I felt <br /> truly prepared for my first
                    role at a FAANG <br /> company."
                  </>
                ) : activeTestimonial === 1 ? (
                  <>
                    "I never thought I could transition from finance <br /> to design, but step-by-step approach and the <br /> supportive community made it possible."
                  </>
                ) : (
                  <>
                    "The capstone project was the highlight. Working <br /> on real-world data gave me the confidence to <br /> lead my own team just months after graduating."
                  </>
                )}
              </p>
              
              <div className={`${activeTestimonial === 0 ? "mt-2 sm:mt-3 md:mt-3 lg:mt-4" : "mt-3 sm:mt-4 md:mt-6 lg:mt-8"}`}>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl ml-4 sm:ml-6 md:ml-8 lg:ml-38 font-bold text-[var(--theme-color)]">
                  {testimonial.name}
                </h3>

                <p className={`mt-0.5 sm:mt-1 md:mt-1 lg:mt-1 ml-4 sm:ml-6 md:ml-8 lg:ml-38 text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] lg:tracking-[0.2em] ${activeTestimonial === 0 ? "text-[var(--theme-color2)]" : activeTestimonial === 1 ? "text-[var(--theme-color2)]" : "text-[var(--theme-teal)]"}`}>
                  {testimonial.role}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-[1px] w-full bg-[var(--body-text-color)]/10 ml-4 sm:ml-6 md:ml-8 lg:ml-38 ${activeTestimonial === 0 ? "mt-4 sm:mt-5 md:mt-6 lg:mt-8" : "mt-5 sm:mt-7 md:mt-9 lg:mt-12"}`} />


              {/* Controls */}
              <div className={`flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 ml-4 sm:ml-6 md:ml-8 lg:ml-38 ${activeTestimonial === 0 ? "mt-3 sm:mt-4 md:mt-5 lg:mt-6" : "mt-4 sm:mt-5 md:mt-6 lg:mt-8"}`}>
                <button
                  type="button"
                  onClick={() => setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length)}
                  className="flex h-8 sm:h-10 md:h-11 lg:h-12 w-8 sm:w-10 md:w-11 lg:w-12 items-center justify-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[var(--body-text-color)] hover:text-[var(--theme-color2)] transition border border-[var(--body-text-color)]/10 bg-[var(--background)]/30 rounded-lg hover:border-[var(--theme-color2)]"
                >
                  <span className="relative -top-0.5">‹</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTestimonial((current) => (current + 1) % testimonials.length)}
                  className="flex h-8 sm:h-10 md:h-11 lg:h-12 w-8 sm:w-10 md:w-11 lg:w-12 items-center justify-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[var(--body-text-color)] hover:text-[var(--theme-color2)] transition border border-[var(--body-text-color)]/10 bg-[var(--background)]/30 rounded-lg hover:border-[var(--theme-color2)]"
                >
                  <span className="relative -top-0.5">›</span>
                </button>

                {/* Progress */}
                <div className="ml-1 sm:ml-2 md:ml-2 lg:ml-3 flex items-center gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 sm:h-1 md:h-1.5 lg:h-[6px] rounded-full bg-[var(--theme-color2)] transition-all ${index === activeTestimonial ? "w-4 sm:w-5 md:w-6 lg:w-8" : "w-1 sm:w-1.5 md:w-1.5 lg:w-2 opacity-40"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}