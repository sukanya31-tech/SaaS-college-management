"use client";

import { User, Phone, Mail, MessageSquare, Send, MapPin, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full">
        <div className="grid md:grid-cols-2 bg-[var(--theme-bg-light)] rounded-[30px] overflow-hidden shadow-sm border border-[var(--body-text-color)]/10">

          {/* MAP SIDE */}
          <div className="relative h-[380px] sm:h-[500px] lg:h-[620px] w-full">
            <iframe
              src="https://maps.google.com/maps?q=madhapur%20hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full grayscale transition duration-300 hover:grayscale-0"
              loading="lazy"
            />

            {/* Address Card */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 lg:bottom-6 lg:left-6 lg:right-auto bg-[var(--background)] rounded-3xl lg:rounded-4xl shadow-md px-4 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-3 flex items-start gap-3 sm:gap-4 w-auto lg:max-w-xl">
              <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 self-start sm:self-center bg-[var(--theme-color2)] text-[var(--background)] flex items-center justify-center rounded-xl">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] font-semibold text-[var(--theme-color)] mb-1">
                  MADHAPUR HQ
                </p>
                <p className="text-xs sm:text-sm text-[var(--body-text-color)] leading-relaxed break-words">
                  #14, 2nd Floor, behind Capital Park, Arunodaya Colony, Silicon Valley, Madhapur,
                  Hyderabad, Telangana 500081
                </p>
              </div>
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="p-10 md:p-14 bg-[var(--background)]">

            {/* Label */}
            <div className="inline-flex items-center gap-2 border border-[var(--body-text-color)]/20 shadow-md rounded-2xl px-4 py-3 text-xs tracking-[3px] font-semibold text-[var(--theme-color)] mb-6 bg-[var(--background)] relative overflow-hidden group cursor-default">
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[var(--theme-color2)]/40 to-transparent"></span>
              <Sparkles size={14} className="text-[var(--theme-color2)]" /> CONTACT FORM
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-[var(--theme-color)] mb-8">
              Lets talk.
            </h2>

            <form className="space-y-5">

              {/* Name */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--theme-color)] transition-colors duration-300 group-focus-within:text-[var(--theme-color2)]" size={18}/>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[var(--body-text-color)]/20 bg-[var(--theme-bg-light)] placeholder:text-[var(--theme-color)] focus:outline-none focus:bg-[var(--background)] focus:border-[var(--theme-color)] focus:shadow-[0_0_0_1px_var(--theme-color)] transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--theme-color)] transition-colors duration-300 group-focus-within:text-[var(--theme-color2)]" size={18}/>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[var(--body-text-color)]/20 bg-[var(--theme-bg-light)] placeholder:text-[var(--theme-color)] focus:outline-none focus:bg-[var(--background)] focus:border-[var(--theme-color)] focus:shadow-[0_0_0_1px_var(--theme-color)] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--theme-color)] transition-colors duration-300 group-focus-within:text-[var(--theme-color2)]" size={18}/>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[var(--body-text-color)]/20 bg-[var(--theme-bg-light)] placeholder:text-[var(--theme-color)] focus:outline-none focus:bg-[var(--background)] focus:border-[var(--theme-color)] focus:shadow-[0_0_0_1px_var(--theme-color)] transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-5 text-[var(--theme-color)] transition-colors duration-300 group-focus-within:text-[var(--theme-color2)]" size={18}/>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[var(--body-text-color)]/20 bg-[var(--theme-bg-light)] placeholder:text-[var(--theme-color)] focus:outline-none focus:bg-[var(--background)] focus:border-[var(--theme-color)] focus:shadow-[0_0_0_1px_var(--theme-color)] transition-all duration-300 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[var(--theme-color)] text-[var(--background)] py-4 rounded-xl font-semibold tracking-[3px] hover:bg-[var(--theme-color2)] transition duration-300"
              >
                SUBMIT <Send size={16}/>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}