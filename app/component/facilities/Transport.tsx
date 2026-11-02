"use client";

export default function SupportSection() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase font-semibold text-[var(--theme-color2)] border border-[var(--theme-color2)]/10 rounded-full px-4 py-1 bg-[var(--theme-color2)]/5">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            Network & Logistics
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--theme-color)]">
          Institutional Support
        </h2>

        <p className="text-2xl md:text-4xl italic text-[var(--body-text-color)] mt-2 mb-10">
          Information
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="group bg-[var(--theme-color)] border-2 border-[var(--theme-color2)]/30 rounded-2xl p-8 shadow-md min-h-96 transition-transform duration-300 ease-out hover:scale-[1.02]">

            <h3 className="text-[var(--theme-color2)] text-lg tracking-widest font-semibold mb-6">
              CONTACT AUTHORITY
            </h3>

            <div className="space-y-6">

              <div className="border-l-2 border-transparent group-hover:border-[var(--theme-color2)] pl-2 transition-colors duration-300">
                <p className="text-[var(--background)] font-semibold mt-8 ml-4">
                  A. Vijay Kumar
                </p>
                <p className="text-[var(--body-text-color)] font-semibold text-xs mt-1 ml-4">
                  TRANSPORT COORDINATOR
                </p>
                <p className="text-[var(--theme-color2)] font-semibold text-sm mt-4 ml-4">
                  +91 9871177040
                </p>
              </div>

              <div className="border-l-2 border-transparent group-hover:border-[var(--theme-color2)] pl-2 transition-colors duration-300">
                <p className="text-[var(--background)] font-semibold mt-12 ml-4">
                  Mr. K. Thimmal Reddy
                </p>
                <p className="text-[var(--body-text-color)] font-semibold text-xs mt-1 ml-4">
                  TRANSPORT ASSOCIATE
                </p>
                <p className="text-[var(--theme-color2)] font-semibold text-sm mt-4 ml-4">
                  +91 7704564000
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="group bg-[var(--theme-color)] border-2 border-[var(--theme-color2)]/30 rounded-2xl p-8 shadow-md transition-transform duration-300 ease-out hover:scale-[1.02]">

            <h3 className="text-[var(--theme-color2)] text-lg tracking-widest ml-4 font-semibold mb-4">
              ROUTE LOGISTICS
            </h3>

            <p className="text-[var(--background)]/70 text-md ml-4 leading-relaxed mb-6 mt-8">
              Our campus transit system serves major routes across the Hyderabad <br />
              and Sangareddy regions, ensuring synchronized arrivals for all
              faculty and <br />students.
            </p>

            {/* Inner Box */}
            <div className="bg-[var(--body-text-color)]/8 border ml-4 border-[var(--body-text-color)]/10 rounded-xl p-4 min-h-25 mt-12 shadow-lg">
              <p className="text-[var(--background)] text-md font-medium">
                Public Transit Connection
              </p>
              <p className="text-[var(--body-text-color)] font-semibold text-md mt-3">
                Board at Jubilee Bus Station (JBS) for Narasapur, Medak, or
                Ordnance lines.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}