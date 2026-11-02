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
            ● INTERNET OF THINGS
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--theme-color)] leading-tight">
            Efficiency Redefined: 
            <span className="italic font-medium text-[var(--body-text-color)]">
               The <br />Impact of Industrial IoT on Modern Business
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[var(--body-text-color)] text-lg leading-relaxed max-w-3xl ml-4 md:ml-8">
            The Internet of Things (IoT) represents a massive shift in how we interact with the physical world,
            moving beyond computers and smartphones to a reality where everyday objects are "awake" and communicating.
            At its core, IoT is a network of physical objects embedded with sensors, software, and processing power that
            allows them to connect and exchange data with other devices over the internet.
          </p>

          <div className="max-w-4xl w-full ml-0 md:ml-4">
            <div className="relative mt-10 ml-4 md:ml-8 w-[92%] md:w-[85%] h-[260px] md:h-[360px] rounded-2xl border border-[var(--theme-color)] overflow-hidden shadow-lg">
              <img
                src="/departments/internetofthings.png"
                alt="Internet of Things innovation lab"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--theme-color)] via-[var(--theme-color)]/5 to-transparent" />
            </div>
            <p className="text-[var(--body-text-color)] text-lg leading-relaxed max-w-3xl mt-12 ml-4 md:ml-8">
              This connectivity transforms a standard object—like a city streetlight or a residential thermostat—into an intelligent tool capable of gathering real-time information.
              By analyzing this data, systems can automate tasks, such as adjusting a building's temperature based on occupancy or alerting a factory manager to a failing part before
              a breakdown occurs. Ultimately, loT isn't just about "smart gadgets"; it is about creating a seamless bridge between the digital and physical realms to improve efficiency,
              safety, and sustainability on a global scale.
            </p>
          </div>
        </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-[var(--theme-color)] text-[var(--background)] rounded-2xl p-8 flex flex-col justify-between shadow-xl lg:h-[640px] min-h-[420px] lg:sticky lg:top-24 lg:self-start">

          {/* Top Section */}
          <div>
            <h2 className="text-lg font-bold tracking-widest mb-10">
              COMPUTER SCIENCE AND ENGINEERING
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[01]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Artificial Intelligence</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[02]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Data Science</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[03]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Cyber Security</span>
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