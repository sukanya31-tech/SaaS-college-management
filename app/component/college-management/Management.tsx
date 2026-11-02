"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const roles = [
  "Principal",
  "President",
  "Councillor",
  "Pro Councillor",
  "Executive Member",
  "Board Member",
];

export default function LeadershipSection() {
  const [active, setActive] = useState("Principal");

  return (
    <section className="w-full bg-[var(--theme-bg-light)] py-10 px-2 sm:py-12 sm:px-4 md:py-16 md:px-16">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
        {/* LEFT */}
        <div className="md:col-span-2 mb-8 md:mb-0">
          <p className="text-xs tracking-widest text-[var(--theme-color2)] font-semibold mb-2">
            LEADERSHIP MESSAGES
          </p>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[var(--theme-color)] mb-6 sm:mb-8">
            Our <br />
            <span
              className="font-extrabold relative z-10"
              style={{
                background: "linear-gradient(90deg, var(--theme-color2) 0%, var(--theme-purple) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block"
              }}
            >
              Leadership Team
            </span>
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActive(role)}
                className={clsx(
                  "w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 rounded-xl border text-xs sm:text-sm font-medium transition",
                  active === role
                    ? "border-[var(--theme-color2)] text-[var(--theme-color)] bg-[var(--background)] shadow-sm"
                    : "border-[var(--body-text-color)]/10 text-[var(--body-text-color)]/60 bg-[var(--background)]"
                )}
              >
                <span>{role.toUpperCase()}</span>
                <span
                  className={clsx(
                    "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full",
                    active === role ? "bg-[var(--theme-color2)]" : "bg-[var(--body-text-color)]/60"
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[var(--background)] rounded-2xl sm:rounded-3xl shadow-md p-4 xs:p-6 sm:p-8 relative overflow-hidden md:col-span-3 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          {/* Dotted Circles Decoration */}
          <div className="hidden sm:block absolute right-[-30px] sm:right-[-50px] top-[-30px] sm:top-[-40px] z-0 pointer-events-none">
            <style>{`
              @keyframes rotateCircle {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .rotating-circle {
                animation: rotateCircle 10s linear infinite;
                border-radius: 50%;
                display: inline-block;
              }
            `}</style>
            <div className="rotating-circle">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none" className="sm:w-[300px] sm:h-[300px]">
                <circle cx="110" cy="110" r="100" stroke="var(--footer-text-color)" strokeWidth="3" strokeDasharray="6 10" />
                <circle cx="110" cy="110" r="60" stroke="var(--footer-text-color)" strokeWidth="3" strokeDasharray="6 10" />
              </svg>
            </div>
          </div>

          {/* president content */}
          {active === "President" ? (
            <>
              <div className="flex gap-6 items-start">
                <div className="w-30 h-42 relative rounded-xl overflow-hidden">
                  <Image
                    src="/management/President.png" // replace with your image
                    alt="leader"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest border border-[var(--theme-color2)]/15 bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-3 py-1 rounded-md">
                    PRESIDENT
                  </span>
                  <h3 className="text-2xl font-semibold mt-3 text-[var(--theme-color)]">
                    Dr. Arthur Sterling
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-[2px] bg-[var(--theme-color2)]" />
                    <p className="text-xs text-[var(--body-text-color)] tracking-wide">
                      INSTITUTIONAL AUTHORITY
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-t border-[var(--theme-bg-light)]" />
              <div className="mt-6 space-y-4 text-sm text-[var(--body-text-color)] leading-relaxed">
                <p>
                  As the President of GDigit, my vision is to redefine the traditional boundaries of technical education. We are not just building an institution; we are architecting an ecosystem where theoretical brilliance meets industrial grit. Our mission is to empower a generation that creates jobs through innovation.
                </p>
                <p>
                  We have invested heavily in sustainable infrastructure and global research labs, ensuring that our students are working on solutions for the next century. My door is always open to ideas that challenge the status quo and push GDigit toward becoming a global beacon of excellence.
                </p>
                <p>
                 The synergy between our board of governors and the student body is what makes us unique. We lead with empathy, transparency and a relentless pursuit of perfection in everything we do.
                </p>
              </div>
            </>

            /*councillor content*/
          ) : active === "Councillor" ? (
            <>
              <div className="flex gap-6 items-start">
                <div className="w-30 h-42 relative rounded-xl overflow-hidden">
                  <Image
                    src="/management/Councillor.png" // update with actual image path
                    alt="Councillor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest border border-[var(--theme-color2)]/15  bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-3 py-1 rounded-md">
                    COUNCILLOR
                  </span>
                  <h3 className="text-2xl font-semibold mt-3 text-[var(--theme-color)]">
                    Sarah Jenkins
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-[2px] bg-[var(--theme-color2)]" />
                    <p className="text-xs text-[var(--body-text-color)] tracking-wide">
                      INSTITUTIONAL AUTHORITY
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-t border-[var(--theme-bg-light)]" />
              <div className="mt-6 space-y-4 text-sm text-[var(--body-text-color)] leading-relaxed">
                <p>
                  In my capacity as Councillor, my primary focus is the holistic development and welfare of our student community. I believe that a student's success is not just measured by their GPA, but by their ability to lead, collaborate, and contribute ethically to society.
                </p>
                <p>
                  We are committed to maintaining a transparent bridge between the administration and the students. Every policy we draft and every initiative we launch is designed to ensure that the student voice acts as the primary driver of institutional change.
                </p>
                <p>
                  Our council works tirelessly to bring in diverse perspectives, fostering a campus culture where innovation is born out of inclusion and mutual respect.
                </p>
              </div>
            </>

            /*executive member content*/
             ) : active === "Executive Member" ? (
            <>
              <div className="flex gap-6 items-start">
                <div className="w-30 h-42 relative rounded-xl overflow-hidden">
                  <Image
                    src="/management/Executive Member.png" // replace with your image
                    alt="leader"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest border border-[var(--theme-color2)]/15  bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-3 py-1 rounded-md">
                    EXECUTIVE MEMBER
                  </span>
                  <h3 className="text-2xl font-semibold mt-3 text-[var(--theme-color)]">
                    Dr.Robert Hales
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-[2px] bg-[var(--theme-color2)]" />
                    <p className="text-xs text-[var(--body-text-color)] tracking-wide">
                      INSTITUTIONAL AUTHORITY
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-t border-[var(--theme-bg-light)]" />
              <div className="mt-6 space-y-4 text-sm text-[var(--body-text-color)] leading-relaxed">
                <p>
                 The Executive Committee is the strategic engine of GDigit. 
                 My role involves overseeing the long-term growth and global placement strategies of our institution.
                 We are constantly analyzing global tech trends to ensure our curriculum stays ahead.
                </p>
                <p>
                 We focus on 'Strategic Partnerships' - linking our labs with international research centers and tech giants. 
                 This gives our students access to high-stakes projects providing them with a massive competitive edge.
                </p>
                <p>
                 By maintaining a lean and forward-thinking executive structure, we ensure that GDigit remains agile and responsive to the needs of the modern technological era.
                </p>
              </div>
            </>

            /*pro councillor content*/
            ) : active === "Pro Councillor" ? (
            <>
              <div className="flex gap-6 items-start">
                <div className="w-30 h-42 relative rounded-xl overflow-hidden">
                  <Image
                    src="/management/Pro Councillor.png" // replace with your image
                    alt="leader"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest border border-[var(--theme-color2)]/15  bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-3 py-1 rounded-md">
                    PRO COUNCILLOR
                  </span>
                  <h3 className="text-2xl font-semibold mt-3 text-[var(--theme-color)]">
                    Marcus Chen
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-[2px] bg-[var(--theme-color2)]" />
                    <p className="text-xs text-[var(--body-text-color)] tracking-wide">
                      INSTITUTIONAL AUTHORITY
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-t border-[var(--theme-bg-light)]" />
              <div className="mt-6 space-y-4 text-sm text-[var(--body-text-color)] leading-relaxed">
                <p>
                  A dedicated and results-driven professional councillor committed to serving the community with integrity, transparency, and accountability. Skilled in addressing public concerns, implementing sustainable development initiatives, and ensuring effective governance at the local level.
                </p>
                <p>
                  Possesses strong leadership, communication, and problem-solving abilities, enabling collaboration with citizens, stakeholders, and government bodies to drive positive change. Focused on improving public infrastructure, enhancing safety, promoting social welfare, and fostering inclusive growth for all sections of society.
                </p>
                <p>
                  Passionate about building a responsive and progressive community by prioritizing the needs of the people and delivering practical, impactful solutions.
                </p>
              </div>
            </>

            /*board member content*/
          ) : active === "Board Member" ? (
            <>
              <div className="flex gap-6 items-start">
                <div className="w-30 h-42 relative rounded-xl overflow-hidden">
                  <Image
                    src="/management/Board Member.png" // update with actual image path
                    alt="Board Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest border border-[var(--theme-color2)]/15  bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-3 py-1 rounded-md">
                    BOARD MEMBER
                  </span>
                  <h3 className="text-2xl font-semibold mt-3 text-[var(--theme-color)]">
                    Prof. Linda Wu
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-[2px] bg-[var(--theme-color2)]" />
                    <p className="text-xs text-[var(--body-text-color)] tracking-wide">
                      INSTITUTIONAL AUTHORITY
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-t border-[var(--theme-bg-light)]" />
              <div className="mt-6 space-y-4 text-sm text-[var(--body-text-color)] leading-relaxed">
                <p>
                  As a member of the Board, I am tasked with upholding the academic sanctity and institutional integrity of GDigit. We serve as the guardians of the college’s mission, ensuring that every decision aligns with our core values of excellence.
                </p>
                <p>
                  Our board is comprised of thinkers and doers from diverse backgrounds, providing the oversight necessary to maintain our status as a premier engineering hub. We focus on faculty excellence and institutional growth.
                </p>
                <p>
                  We take pride in the legacy we are building here. Every course offered is a testament to our commitment to shaping the future of engineering education.
                </p>
              </div>
            </>

            /*principal content*/
          ) : (
            <>
              <div className="flex gap-6 items-start">
                <div className="w-30 h-42 relative rounded-xl overflow-hidden">
                  <Image
                    src="/management/Principal.png" // replace with your image
                    alt="leader"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest border border-[var(--theme-color2)]/15  bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-3 py-1 rounded-md">
                    {active.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-semibold mt-3 text-[var(--theme-color)]">
                    Dr. Elena Vance
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-[2px] bg-[var(--theme-color2)]" />
                    <p className="text-xs text-[var(--body-text-color)] tracking-wide">
                      INSTITUTIONAL AUTHORITY
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-t border-[var(--theme-bg-light)]" />
              <div className="mt-6 space-y-4 text-sm text-[var(--body-text-color)] leading-relaxed">
                <p>
                  At Digit Engineering College, our academic philosophy is built upon
                  the twin pillars of extreme rigor and relentless innovation. We have
                  carefully curated an environment where every student's latent
                  potential is not just recognized, but systematically nurtured through
                  personalized mentorship and access to global research standards.
                </p>
                <p>
                  Our commitment extends far beyond the traditional classroom walls.
                  We are dedicated to ensuring our graduates emerge as technically
                  proficient architects of change, equipped with the ethical grounding
                  required to navigate and lead within the complex, rapidly shifting
                  global technological landscape.
                </p>
                <p>
                  We believe in building not just engineers, but leaders who will define
                  the next century of progress. Through our interdisciplinary approach,
                  we ensure that every student is prepared for the challenges of
                  tomorrow.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}