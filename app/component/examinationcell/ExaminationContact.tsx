import React from "react";
import { Phone, Mail, User, ShieldCheck } from "lucide-react";

const contacts = [
  {
    name: "Dr. Prabhakara Rao Kapula",
    role: "Controller of Examinations",
    dept: "PROFESSOR, DEPT. OF ECE",
    phone: "+91 9949433569",
    email: "ce@digit.ac.in",
  },
  {
    name: "Dr. B. Venkata Swamy",
    role: "Additional Controller of Examinations",
    dept: "ASSOC. PROFESSOR, BS&H",
    phone: "+91 9948700314",
    email: "venkataswamy.boya@digit.ac.in",
  },
  {
    name: "Mr. Akshay Kulakarni",
    role: "Additional Controller of Examinations",
    dept: "ASST. PROFESSOR, DEPT. OF MECH",
    phone: "+91 9972032265",
    email: "akshay.k@digit.ac.in",
  },
  {
    name: "Mr. V. Chaithanya Kumar",
    role: "Additional Controller of Examinations",
    dept: "ASST. PROFESSOR, DEPT. OF CIVIL",
    phone: "+91 9555541646",
    email: "chaithanya.v@digit.ac.in",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--theme-bg-light)] px-5 md:px-10 lg:px-16 py-12 md:py-14">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12 items-start justify-items-center xl:justify-items-stretch">
        
        {/* LEFT SECTION */}
        <div className="w-full max-w-2xl text-center xl:text-left">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[var(--theme-color2)]/8 text-[var(--theme-color2)] px-4 py-1 rounded-full text-xs font-semibold tracking-wide mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--theme-color2)]" />
            ACADEMIC ADMINISTRATION
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--theme-color)] leading-tight">
            Examination <br />
            <span className="italic font-medium text-[var(--body-text-color)]">
              Branch Contacts
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-[var(--body-text-color)] max-w-md xl:max-w-lg text-base leading-relaxed mx-auto xl:mx-0">
            Official gateway for student evaluations, result processing, and
            academic certifications.
          </p>
        </div>

        {/* RIGHT SECTION - CARDS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7 justify-items-center lg:justify-items-stretch">
          {contacts.map((person, index) => (
            <div
              key={index}
              className="group relative w-full md:max-w-lg lg:max-w-none overflow-hidden bg-[var(--background)] rounded-2xl p-5 md:p-6 border border-[var(--theme-color2)]/50 shadow-sm hover:shadow-xl hover:border-[var(--theme-color2)]/80 transition transform hover:-translate-y-2 hover:z-10 duration-300 flex flex-col items-start"
            >
              <ShieldCheck className="pointer-events-none absolute -top-1 -right-1 h-24 w-24 text-[var(--body-text-color)]/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              {/* Avatar */}
              <div className="w-10 h-10 rounded-lg bg-[var(--theme-bg-light)] flex items-center justify-center mb-3 transition-colors duration-200 group-hover:bg-[var(--theme-color2)] self-start">
                <User className="w-5 h-5 text-[var(--theme-color)] transition-colors duration-200 group-hover:text-[var(--background)]" />
              </div>

              {/* Name */}
              <h3 className="text-[var(--theme-color2)] font-semibold text-lg md:text-xl leading-snug">
                {person.name}
              </h3>

              {/* Role */}
              <p className="text-[var(--theme-color)] text-sm mt-1">
                {person.role}
              </p>

              {/* Dept */}
              <p className="text-[var(--body-text-color)]/50 text-xs font-semibold mt-1 uppercase tracking-wide">
                {person.dept}
              </p>

              {/* Contact */}
              <div className="mt-4 space-y-2.5 overflow-hidden">
                
                <div className="flex items-center gap-3 text-sm text-[var(--theme-color)] min-w-0 overflow-hidden justify-start">
                  <div className="bg-[var(--body-text-color)]/20 p-2 rounded-md">
                    <Phone className="w-4 h-4 text-[var(--theme-color2)]" />
                  </div>
                  {person.phone}
                </div>

                <div className="flex items-center gap-3 text-sm text-[var(--theme-color)] min-w-0 overflow-hidden justify-start">
                  <div className="bg-[var(--body-text-color)]/20 p-2 rounded-md">
                    <Mail className="w-4 h-4 text-[var(--theme-color2)]" />
                  </div>
                  <span className="truncate">{person.email}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}