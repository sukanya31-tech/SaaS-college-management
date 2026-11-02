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
            ● DATA SCIENCE
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--theme-color)] leading-tight">
            Beyond the Notebook: <br />
            Taking {" "}
            <span className="italic font-medium text-[var(--body-text-color)]">
              Data Science into <br /> Production
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[var(--body-text-color)] text-lg leading-relaxed max-w-3xl ml-4 md:ml-8">
           Welcome to the department of Data Science Malla Reddy University, on behalf of the faculty members, 
           staff, and students the field of Data Science is a diverse field which has a significant role in the
           development of cutting edge technology. The curriculum at the Department of Data Science is meticulously 
           planned and continuously updated in way to incorporate the various demands of the IT industry trends. 
           An exposure to real world problems in this era of technology is a must and every student is provided 
           with the right environment to shape into a confident individual having the necessary skill set to fit 
           in any role at the industrial market.
          </p>

          <div className="max-w-4xl w-full ml-0 md:ml-4">
            <div className="relative mt-10 ml-4 md:ml-8 w-[92%] md:w-[85%] h-[260px] md:h-[360px] rounded-2xl border border-[var(--theme-color)] overflow-hidden shadow-lg">
              <img
                src="/departments/ds.png"
                alt="Data Science lab"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--theme-color)] via-[var(--theme-color)]/5 to-transparent" />
            </div>
            <p className="text-[var(--body-text-color)] text-lg leading-relaxed max-w-3xl mt-12 ml-4 md:ml-8">
             he excellent infrastructure and the highly qualified faculty with huge expertise in the department lay the foundation for a professional learning experience,
             and the department ensures a career-oriented future through Industry internships, certification courses, and workshops.
             Higher Studies is a strongly recommended option for students with research aptitude and the department makes every effort 
             to nurture this by grooming them for a research-oriented career. The members of the department are known for their unmatched determination and academic excellence.
            </p>
          </div>
        </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-[var(--theme-color)] text-[var(--background)] rounded-2xl p-8 flex flex-col justify-between lg:h-[640px] shadow-xl min-h-[420px] lg:sticky lg:top-24 lg:self-start">

          {/* Top Section */}
          <div>
            <h2 className="text-lg font-bold tracking-widest mb-10">
              COMPUTER SCIENCE AND ENGINEERING
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[01]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Artificial Intellegence</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[02]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Cyber Security</span>
                <ArrowRight className="h-5 w-5 text-[var(--theme-color2)] opacity-0 group-hover:opacity-100 transition-all ml-auto" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-[var(--theme-blue))]/10 rounded-lg px-4 py-3">
                <span className="text-[var(--background)] text-3xl group-hover:text-[var(--theme-color2)] transition-colors">[03]</span>
                <span className="font-medium group-hover:text-[var(--theme-color2)] transition-colors">Internet of Things</span>
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