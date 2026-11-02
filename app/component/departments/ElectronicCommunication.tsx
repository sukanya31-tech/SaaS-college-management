import React from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--theme-bg-light)] pt-18 pb-6 md:pt-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-[var(--theme-color2)]/50 bg-[var(--theme-color2)]/10 text-[var(--theme-color2)] text-sm font-semibold tracking-wide">
            ● ELECTRONIC & COMMUNICATION ENGINEERING
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--theme-color)] leading-tight">
           Electronics and <br />
            Communication Engineering<br />
            <span className="italic font-medium text-[var(--body-text-color)]">
              (ECE)
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[var(--body-text-color)] text-lg leading-relaxed max-w-3xl ml-4 md:ml-8">
            The Electronics and Communication Engineering (ECE) curriculum at institutions like Digit 
            Engineering College has undergone a fundamental shift, moving from traditional circuit design 
            to the high-level orchestration of Physical AI and Edge Intelligence. The modern ECE professional 
            now operates at the intersection of "Hardware that Reasons," where silicon is no longer just a 
            platform for code but a biological-like substrate for autonomous decision-making.
          </p>

          <div className="max-w-4xl w-full ml-0 md:ml-4">
            <div className="relative mt-10 ml-4 md:ml-8 w-[92%] md:w-[85%] h-[260px] md:h-[360px] rounded-2xl border border-[var(--theme-color)] overflow-hidden shadow-lg">
              <img
                src="/departments/ece.png"
                alt="Electronic Communication innovation lab"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--theme-color)] via-[var(--theme-color)]/5 to-transparent" />
            </div>
            <p className="text-[var(--body-text-color)] text-lg leading-relaxed max-w-3xl mt-12 ml-4 md:ml-8">
              Engineers are now embedding lightweight machine learning models directly into microcontrollers (MCUs), 
              enabling "on-device intelligence" that works without cloud connectivity, reducing latency to near-zero 
              for critical applications.
            </p>
          </div>
        </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-[var(--theme-color)] text-[var(--background)] rounded-2xl p-8 flex flex-col justify-between shadow-xl min-h-[420px] lg:sticky lg:top-24 lg:self-start">

          {/* Top Section */}
          <div>
            <h2 className="text-lg font-bold tracking-widest mb-10">
              CORE ENGINEERING
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[01]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Information Technology</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[02]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Electrical & Electronics Engineering</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[03]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Civil Engineering</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[04]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Mechanical Engineering</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

            </div>
          </div>

            {/* Contact Box */}
            <div className="mt-12 border border-[var(--background)] bg-[var(--theme-blue))]/10 rounded-xl p-4 min-h-[150px]">
              <p className="text-sm font-bold text-[var(--background)] mb-3">CONTACT NODE</p>

              <div className="flex items-center gap-3 border border-[var(--background)] rounded-lg px-4 py-3">
                <Phone className="h-5 w-5 text-[var(--theme-color2)]" />
                <span className="font-medium">+919990000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}