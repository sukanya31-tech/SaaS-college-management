import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[var(--theme-bg-light)] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-widest text-[var(--theme-color2)] font-bold border border-[var(--theme-color2)]/50 bg-[var(--theme-color2)]/5  px-3 py-1 rounded-sm uppercase">
            The Placement Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-color)] mt-4">
            Architects of
          </h1>
          <h2 className="text-4xl md:text-5xl italic font-semibold mt-4 text-[var(--body-text-color)]">
            Future Careers.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
          {/* Card 1 */}
          <div className="relative group overflow-hidden">
            <Image
              src="/placements1/director.png"
              alt="Dr. Aris Thorne"
              width={380}
              height={600}
              className="object-cover w-full h-[500px] grayscale transition duration-300 ease-out group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-color)]/70 to-transparent" />
            <div className="absolute top-0 right-0 h-16 w-16 bg-[var(--theme-color2)]/5 [clip-path:polygon(100%_0,0_0,100%_100%)] pointer-events-none" />

            <div className="absolute bottom-20 left-12 transition-transform duration-300 group-hover:-translate-y-4">
              <span className="text-xs bg-[var(--theme-color2)]/5 border border-[var(--theme-color2)]/50 text-[var(--theme-color2)] px-3 py-1 rounded-full">
                150+ CORPORATE PARTNERS
              </span>
              <h3 className="text-white text-lg font-bold mt-6">
                Dr. Aris Thorne
              </h3>
              <p className="text-[var(--theme-color2)] text-sm mt-2">Director of Placements</p>
              <p className="text-[var(--background)] text-sm mt-3 max-w-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border-l-2 border-[var(--theme-color2)] pl-3">
                A veteran in corporate relations, Dr. Thorne bridges the gap between academia and Fortune 500 companies.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden">
            <Image
              src="/placements1/coach.png"
              alt="Sarah Valerius"
              width={380}
              height={600}
              className="object-cover w-full h-[500px] grayscale transition duration-300 ease-out group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-color)]/70 to-transparent" />
            <div className="absolute top-0 right-0 h-16 w-16 bg-[var(--theme-color2)]/5 [clip-path:polygon(100%_0,0_0,100%_100%)] pointer-events-none" />


            <div className="absolute bottom-20 left-12 transition-transform duration-300 group-hover:-translate-y-4">
              <span className="text-xs bg-[var(--theme-color2)]/5 border border-[var(--theme-color2)]/50 text-[var(--theme-color2)] px-3 py-1 rounded-full">
                FAANG SPECIALIST
              </span>
              <h3 className="text-[var(--background)] text-lg font-bold mt-6">
                Sarah Valerius
              </h3>
              <p className="text-[var(--theme-color2)] text-sm mt-2">Lead Technical Coach</p>
              <p className="text-[var(--background)] text-sm mt-3 max-w-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border-l-2 border-[var(--theme-color2)] pl-3">
                Oversees technical bootcamp tracks, specializing in System <br /> 
                Design and Competitive Programming preparation.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden">
            <Image
              src="/placements1/head.png"
              alt="Jameson Kross"
              width={380}
              height={600}
              className="object-cover w-full h-[500px] grayscale transition duration-300 ease-out group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-color)]/70 to-transparent" />
            <div className="absolute top-0 right-0 h-16 w-16 bg-[var(--theme-color2)]/5 [clip-path:polygon(100%_0,0_0,100%_100%)] pointer-events-none" />


            <div className="absolute bottom-20 left-12 transition-transform duration-300 group-hover:-translate-y-4">
              <span className="text-xs bg-[var(--theme-color2)]/5 border border-[var(--theme-color2)]/50 text-[var(--theme-color2)] px-3 py-1 rounded-full">
                INTL PLACEMENTS
              </span>
              <h3 className="text-[var(--background)] text-lg font-bold mt-6">
                Jameson Kross
              </h3>
              <p className="text-[var(--theme-color2)] text-sm mt-2">Global Outreach Head</p>
              <p className="text-[var(--background)] text-sm mt-3 max-w-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border-l-2 border-[var(--theme-color2)] pl-3">
                Focus on securing intenational opportunities in tech hubs <br />
                like Singapore, Berline, and San Franscisco.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="border-t border-[var(--body-text-color)]/10 pt-8 mt-10"></div>
        <p className="text-[var(--body-text-color)] text-medium mt-2 max-w-2xl">
          Our team works 24/7 to ensure every student finds their place in <br /> the global tech ecosystem through rigorous training and mentorship.
        </p>
      </div>
    </main>
  );
}
