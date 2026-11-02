"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfoCards() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-14">
      <div className="max-w-8xl mx-auto px-6 md:px-16 grid lg:grid-cols-3 gap-8 justify-center">

        {/* CALL US */}
        <div className="group relative w-full md:max-w-2xl lg:max-w-full bg-[var(--background)] rounded-2xl border border-[var(--body-text-color)]/15 p-6 md:p-7 flex gap-5 items-start overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-b-[var(--theme-color2)]">
          
          <div className="w-12 h-12 rounded-xl bg-[var(--theme-bg-light)] flex items-center justify-center text-[var(--theme-color2)] transition-all duration-300 group-hover:bg-[var(--theme-color2)] group-hover:text-[var(--background)] group-hover:shadow-lg group-hover:shadow-[var(--theme-color2)]">
            <Phone size={20} />
          </div>

          <div>
            <p className="text-xs tracking-[4px] text-[var(--body-text-color)] font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
              CALL US
            </p>
            <p className="text-[var(--theme-color)] font-medium">+91 999 000 0000</p>
            <p className="text-[var(--theme-color)] font-medium">+91 888 000 0000</p>
          </div>

          {/* Pink Background Circle */}
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[var(--theme-color2)]/15 rounded-full opacity-30 transition-all duration-500 group-hover:bg-[var(--theme-color2)]/30 group-hover:opacity-40 group-hover:w-[240px] group-hover:h-[240px] group-hover:-bottom-20 group-hover:-right-20"></div>

          {/* Bottom Line */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[var(--theme-color2)] transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>

        {/* EMAIL US */}
        <div className="group relative w-full md:max-w-2xl lg:max-w-full bg-[var(--background)] rounded-2xl border border-[var(--body-text-color)]/15 p-6 md:p-7 flex gap-5 items-start overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-b-[var(--theme-color2)]">

          <div className="w-12 h-12 rounded-xl bg-[var(--theme-bg-light)] flex items-center justify-center text-[var(--theme-color2)] transition-all duration-300 group-hover:bg-[var(--theme-color2)] group-hover:text-[var(--background)] group-hover:shadow-lg group-hover:shadow-[var(--theme-color2)]">
            <Mail size={20} />
          </div>

          <div>
            <p className="text-xs tracking-[4px] text-[var(--body-text-color)] font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
              EMAIL US
            </p>
            <p className="text-[var(--theme-color)] font-medium">support@company.com</p>
            <p className="text-[var(--theme-color)] font-medium">info@company.com</p>
          </div>

          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[var(--theme-color2)]/15 rounded-full opacity-30 transition-all duration-500 group-hover:bg-[var(--theme-color2)]/30 group-hover:opacity-40 group-hover:w-[240px] group-hover:h-[240px] group-hover:-bottom-20 group-hover:-right-20"></div>

          <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[var(--theme-color2)] transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>

        {/* OUR OFFICE */}
        <div className="group relative w-full md:max-w-2xl lg:max-w-full bg-[var(--background)] rounded-2xl border border-gray-200 p-6 md:p-7 flex gap-5 items-start overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-b-[var(--theme-color2)]">

          <div className="w-12 h-12 rounded-xl bg-[var(--body-text-color)]/15 flex items-center justify-center text-[var(--theme-color2)] transition-all duration-300 group-hover:bg-[var(--theme-color2)] group-hover:text-[var(--background)] group-hover:shadow-lg group-hover:shadow-[var(--theme-color2)]">
            <MapPin size={20} />
          </div>

          <div>
            <p className="text-xs tracking-[4px] text-[var(--body-text-color)] font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--theme-color2)]">
              OUR OFFICE
            </p>
            <p className="text-gray-900 font-medium leading-relaxed">
              #1-90/2/G/1/21, 4th Floor, Hitech City <br /> Rd, near Metro Pillar
              1761, Madhapur,<br /> Hyderabad, 500081
            </p>
          </div>

          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[var(--theme-color2)]/15 rounded-full opacity-30 transition-all duration-500 group-hover:bg-[var(--theme-color2)]/30 group-hover:opacity-40 group-hover:w-[240px] group-hover:h-[240px] group-hover:-bottom-20 group-hover:-right-20"></div>

          <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[var(--theme-color2)] transition-transform duration-300 group-hover:scale-x-100"></div>
        </div>

      </div>
    </section>
  );
}