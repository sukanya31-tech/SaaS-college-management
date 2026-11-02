import React from "react";
import { Check } from "lucide-react";

const instructions = [
  {
    title: "Unauthorized Materials:",
    text: "Bringing in any printed or written matter, bits of paper, or unauthorized notes. This includes writing on hands, clothing, or desk surfaces.",
  },
  {
    title: "Electronic Gadgets:",
    text: "Possession of smartphones, smartwatches, programmable calculators, or Bluetooth devices—even if they are switched off.",
  },
  {
    title: "Impersonation:",
    text: "Having someone else sit for your exam or appearing in place of another candidate.",
  },
  {
    title: "Communication:",
    text: "Any form of talking, signaling, or exchanging materials (pens, erasers, etc.) with other students once the session has started.",
  },
  {
    title: "Disruption:",
    text: "Shouting, creating a disturbance, or refusing to follow the instructions of the invigilator.",
  },
];

export default function MalpracticePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center px-4 py-16">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-color)] mb-4 text-center">
        Malpractice Instructions
      </h1>

      {/* Subtitle */}
      <p className="text-[var(--body-text-color)] text-center max-w-full mb-10 text-sm md:text-lg">
        <em>
        Malpractice isn't just about cheating; it covers any action that compromises the fairness of the assessment.
        </em>
      </p>

      {/* Card Container */}
        <div className="bg-[var(--background)] rounded-xl shadow-md w-full max-w-5xl p-8 md:p-10 min-h-[30rem] md:min-h-[30rem]">
        
        <ul className="space-y-6">
          {instructions.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="mt-2">
                <Check className="text-[var(--theme-green)] w-5 h-5" strokeWidth={3} />
              </div>

              {/* Text */}
              <p className="text-[var(--body-text-color)] text-sm md:text-lg leading-relaxed">
                <span className="font-semibold text-[var(--theme-color)]">
                  {item.title}{" "}
                </span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}