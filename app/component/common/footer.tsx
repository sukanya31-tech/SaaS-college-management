"use client";
import React from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, MessageCircle, ChevronUp } from "lucide-react";
import Image from "next/image";

type FooterLinksProps = {
  links: string[];
};

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-sm">
      {links.map((link) => (
  <li
    key={link}
    className="group relative pl-5 sm:pl-6 cursor-pointer"
  >
    {/* Static pink dot */}
    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--theme-color2)]" />

    {/* Hover sliding bar */}
    <span
      className="
        absolute left-0 top-1/2 -translate-y-1/2
        h-[7px] w-[14px] rounded-full
        bg-[var(--theme-color2)]
        opacity-0
        -translate-x-2
        group-hover:opacity-100
        group-hover:translate-x-0
        transition-all duration-200 ease-out
      "
    />

    {/* Text (moves right smoothly) */}
    <span
      className="
        block
        break-words
        text-[var(--theme-bg-light)]
        transition-all duration-200 ease-out
        group-hover:text-[var(--background)]
        group-hover:translate-x-2
      "
    >
      {link}
    </span>
  </li>
))}
    </ul>
  );
};

const Footer: React.FC = () => {
  const footerLinks: Record<string, string[]> = {
    INSTITUTION: ["About College", "Mission & Vision", "Management", "Faculty", "Alumni", "R & D Cell"],
    ACADEMICS: ["Admissions", "Academic Calendar", "Rules & Regulations", "Code of Conduct", "Anti Ragging", "Examination Cell",],
    RESOURCES: ["Digital Library", "Student Portal", "Research Labs", "Smart Classrooms", "E-Learning","Innovation Hub"],
    "CAMPUS & CAREER": ["Hostel", "Sports", "Transport", "Placements", "Blog", "Feedback", "Contact"]
  };


  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--body-text-color)] py-8 sm:py-10 md:py-12 font-sans relative">
      <div className="max-w-8xl mx-auto px-6 md:px-16">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-start items-center mb-8 sm:mb-10 md:mb-12 gap-6 sm:gap-8 text-center md:text-left">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logos/digit-college-footer.png"
                alt="College Logo"
                width={220}
                height={74}
                className="h-auto w-[150px] sm:w-[180px] md:w-[200px]"
              />
            </div>
            <p className="w-full max-w-md text-left text-[13px] sm:text-sm leading-relaxed text-[var(--theme-bg-light)] md:max-w-none">
              Empowering the next generation of engineers through innovation, hands-on specialization, and industry-leading excellence.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4 text-left md:text-right">
            <span className="text-[10px] font-bold text-[var(--body-text-color)] uppercase tracking-[0.2em]">
              FOLLOW US
            </span>
            <div className="w-full md:w-auto flex justify-start md:justify-end gap-2.5 sm:gap-3">
              {[Instagram, Linkedin, Youtube, MessageCircle].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-[var(--theme-color2)] flex items-center justify-center text-white cursor-pointer hover:bg-[var(--theme-color2)]/90 transition-colors"
                >
                  <Icon size={18} className="sm:size-[20px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-14 border-b pb-8 sm:pb-10 md:pb-12 border-t border-white/5 pt-8 sm:pt-10 md:pt-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-[var(--theme-color2)] rounded-full inline-block" />
                {title}
              </h3>

              <FooterLinks links={links} />
            </div>
          ))}
        </div>

        {/* Departments */}
          <div className="py-5 sm:py-6 bg-[#24254a] rounded-2xl px-4 sm:px-5">
            <h3 className="text-[var(--background)] text-sm sm:text-base font-semibold mb-3 sm:mb-4 tracking-wide flex items-center gap-2">
            <span className="w-1 h-5 bg-[var(--theme-color2)] rounded-full inline-block" />
            Departments
          </h3>

            <div className="space-y-3 text-[13px] sm:text-sm text-gray-400 leading-relaxed">
              <div className="break-words">
              <span className="text-[var(--background)] font-medium">
                CSE Specializations:
              </span>{" "}
              <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Computer Science & Engineering</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Artificial Intelligence & Machine Learning (AI&ML)</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Internet Of Things (IOT)</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Data Science</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Cyber Security</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Cloud Computing</span>
            </div>

              <div className="break-words">
              <span className="text-[var(--background)] font-medium">
                Core Engineering:
              </span>{" "}
              <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Information Technology</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Electrical & Electronics Engineering</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Electronics & Communication Engineering</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">CIVIL</span> | <span className="hover:text-[var(--background)] cursor-pointer transition-colors">Mechanical</span>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="mt-5 sm:mt-6 border-b pb-6 sm:pb-8 md:pb-10 border-[var(--body-text-color)]/20"></div>
        </div>


        {/* Contact */}
       {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 py-6 sm:py-8 border-b border-[var(--body-text-color)]/20">
          
          {/* Call Anytime */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--body-text-color)] mb-3">
             Call Anytime
            </p>

          <div className="flex items-center gap-2.5 group cursor-pointer flex-wrap sm:flex-nowrap">
    
          <div
           className="bg-[var(--body-text-color)]/20 p-2.5 rounded-xl
           transition-transform duration-300 ease-out
           group-hover:translate-x-1
           group-hover:border group-hover:border-[var(--theme-color2)]
           group-hover:bg-[var(--theme-color2)]/10"
          >
         <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--theme-color2)]" />
         </div>

          <p className="text-[var(--background)] text-[13px] sm:text-sm font-medium transition-transform duration-300 ease-out group-hover:translate-x-1 break-all sm:break-normal">
            +91 98765 43210
          </p>

         </div>
        </div>


          {/* SUPPORT DESK */}
         <div className="md:-ml-4">
            <p className="text-xs uppercase tracking-widest text-[var(--body-text-color)] mb-3">
              Support Desk
            </p>
            <div className="group flex items-center gap-2.5 cursor-pointer flex-wrap sm:flex-nowrap">

              {/* Icon */}
                <div className="bg-[var(--body-text-color)]/20 p-2.5 rounded-xl 
                transition-all duration-300 ease-out
                group-hover:translate-x-1
                group-hover:border group-hover:border-[var(--theme-color2)]
                group-hover:bg-[var(--theme-color2)]/10">

                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--theme-color2)] transition-colors duration-300" />

              </div>

              {/* Email text */}
              <p className="text-[var(--background)] text-[13px] sm:text-sm font-medium transition-transform duration-300 ease-out group-hover:translate-x-1 break-all sm:break-normal">
                info@digitcollege.edu
              </p>

              </div>
          </div>

          {/* ADDRESS CARD */}
          <div className="group col-span-1 md:col-span-2 xl:col-span-2 bg-[var(--body-text-color)]/20 border border-[var(--body-text-color)] rounded-2xl p-4 sm:p-5 flex items-start gap-3 hover:border-[var(--theme-color2)]/50 transition-all">
            <div className="w-9 h-9 rounded-xl bg-[var(--theme-color2)] flex items-center justify-center text-white flex-shrink-0 transform transition-transform duration-200 ease-in-out group-hover:rotate-35 cursor-pointer">
              <MapPin size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm sm:text-base font-semibold leading-tight">
                DIGIT College
              </p>
              <p className="text-xs sm:text-sm text-[var(--body-text-color)] mt-1 break-words">
                Engineering Road, Innovation City
              </p>
              <p className="text-[10px] text-[var(--theme-color2)] mt-1 font-bold tracking-widest cursor-pointer">
                GET DIRECTIONS →
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative flex items-center justify-center py-4 sm:py-5 text-[10px] text-center text-[var(--body-text-color)] tracking-wide px-10 sm:px-0">
          © 2026 DIGIT College of Engineering. All Rights Reserved.
        </div>

        {/* Scroll to Top */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
          absolute right-4 sm:right-5 md:right-6 bottom-4 sm:bottom-5 md:bottom-6
          w-8 h-8 sm:w-9 sm:h-9
          bg-white rounded-full 
          flex items-center justify-center 
          text-[#1a1b3a] shadow-lg 
          cursor-pointer
          hover:scale-110 hover:bg-[var(--theme-color2)] hover:text-[var(--background)]
          transition-all duration-300
         "
        >
          <ChevronUp size={18} />
        </div>

      </div>
    </footer>
  );
};

export default Footer;