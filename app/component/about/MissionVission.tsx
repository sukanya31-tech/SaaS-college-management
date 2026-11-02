"use client";

import { useState } from "react";
import { Eye, Target, ArrowRight, Sparkles } from "lucide-react";

export default function AboutCollege() {
  const [active, setActive] = useState<"mission" | "vision">("mission");

  const missionText =
    "To ignite a passion for lifelong learning and\nequip students with technical mastery and\n creative confidence to lead in an evolving \nworld.";

  const visionText =
    "To be a world-leading hub \n of interdisciplinary excellence, bridging the gap \nbetween theory and real-world impact for a \n sustainable future.";

  return (
    <section className="w-full bg-[var(--background)] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs tracking-widest bg-[var(--theme-bg-light)] border border-[var(--body-text-color)]/10 text-[var(--theme-color2)] px-3 py-1 rounded-md font-bold">
            <Sparkles size={14} strokeWidth={2.2} />
            INSTITUTIONAL DNA
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[var(--theme-color)] leading-tight">
            Architecting{" "}
            <span className="text-[var(--body-text-color)]/80">Global Leaders.</span>
          </h1>

          <div className="mt-6 flex items-start gap-4 max-w-xl">
            <div className="w-[3px] h-16 bg-[var(--theme-color2)] rounded-full mt-1"></div>
            <p className="text-[var(--body-text-color)] text-lg ml-4">
              We empower the next generation through a balanced focus on
              academic excellence and real-world transformative impact.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex gap-6 mt-10">
            <button
              onClick={() => setActive("mission")}
              className={`flex items-center gap-3 rounded-xl transition-all duration-300 ${
                active === "mission"
                  ? "bg-[var(--theme-bg-light)] border border-[var(--body-text-color)]/20 px-7 py-5 shadow-md"
                  : "text-[var(--body-text-color)] border border-transparent px-6 py-4"
              }`}
            >
              <span
                className={
                  active === "mission"
                    ? "inline-flex items-center justify-center rounded-lg bg-[var(--theme-color2)]/10 p-1.5"
                    : "inline-flex items-center justify-center"
                }
              >
                <Target
                  size={18}
                  className={active === "mission" ? "text-[var(--theme-color2)]" : "text-[var(--body-text-color)]"}
                />
              </span>
              <span className={`font-medium ${active === "mission" ? "whitespace-nowrap" : "leading-tight"}`}>
                {active === "mission" ? "The Mission" : <><span>The</span><br /><span>Mission</span></>}
              </span>
              {active === "mission" && <ArrowRight size={16} className="text-[var(--theme-color2)]" />}
            </button>

            <button
              onClick={() => setActive("vision")}
              className={`flex items-center gap-3 rounded-xl transition-all duration-300 ${
                active === "vision"
                  ? "bg-[var(--theme-bg-light)] border border-[var(--body-text-color)]/20 px-7 py-5 shadow-md"
                  : "text-[var(--body-text-color)]  border border-transparent px-6 py-4"
              }`}
            >
              <span
                className={
                  active === "vision"
                    ? "inline-flex items-center justify-center rounded-lg bg-[var(--body-text-color)]/10 p-1.5"
                    : "inline-flex items-center justify-center"
                }
              >
                <Eye
                  size={18}
                  className={active === "vision" ? "text-[var(--theme-color2)]" : "text-[var(--body-text-color)]"}
                />
              </span>
              <span className={`font-medium ${active === "vision" ? "whitespace-nowrap" : "leading-tight"}`}>
                {active === "vision" ? "The Vision" : <><span>The</span><br /><span>Vision</span></>}
              </span>
              {active === "vision" && <ArrowRight size={16} className="text-[var(--theme-color2)]" />}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="relative">
          <div className="relative overflow-hidden bg-[var(--theme-color)] text-[var(--background)] rounded-3xl p-10 shadow-xl min-h-[400px]">
            {active === "mission" && (
              <div className="absolute top-6 right-6 text-[var(--background)]/10 pointer-events-none">
                <Target size={120} strokeWidth={1.5} />
              </div>
            )}
            {active === "vision" && (
              <div className="absolute top-6 right-6 text-[var(--background)]/10 pointer-events-none">
                <Eye size={120} strokeWidth={1.5} />
              </div>
            )}
            <p className="text-xs tracking-[0.35em] text-[var(--background)]/70 mb-6 font-bold">
              CORE PHILOSOPHY
            </p>

            <p className="text-2xl md:text-2xl leading-relaxed italic text-[var(--background)] font-semibold whitespace-pre-line">
              "
              {active === "mission" ? missionText : visionText}
              "
            </p>

            <div className="mt-10 border-t border-[var(--theme-bg-light)]/20 pt-6 text-xs text-[var(--theme-bg-light)]/80 font-bold grid grid-cols-3 gap-4">
              {active === "mission" ? (
                <>
                  <span className="inline-flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color2)]"></span>
                    TECHNICAL EXCELLENCE
                  </span>
                  <span className="inline-flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color2)]"></span>
                    CREATIVE LEADERSHIP
                  </span>
                  <span className="inline-flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color2)]"></span>
                    GLOBAL IMPACT
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color2)]"></span>
                    RESEARCH FOCUS
                  </span>
                  <span className="inline-flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color2)]"></span>
                    SUSTAINABLE GROWTH
                  </span>
                  <span className="inline-flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color2)]"></span>
                    INDUSTRY BRIDGING
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}