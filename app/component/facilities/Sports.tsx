"use client";

import Image from "next/image";

export default function SportsSection() {
  return (
    <section className="bg-[var(--background)] py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-8">

        {/* Card 1 */}
        <div className="group bg-[var(--background)] rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 min-h-[780px] md:min-h-[560px]">

          {/* Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
            <Image
              src="/facilities/ground.png"
              alt="Volleyball Court"
              width={600}
              height={350}
              className="rounded-xl object-cover w-full h-[360px] md:h-[430px] transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 md:-mt-16 pl-1 md:pl-3">
            <h2 className="text-[var(--theme-color2)] font-bold text-2xl md:text-4xl mb-3">
              Volleyball & Outdoor Sports Arena
            </h2>
            <p className="text-[var(--body-text-color)] text-md leading-relaxed mb-3 mt-6">
              Our professionally designed courts feature international standard<br />
              synthetic surfaces and are fully floodlit, allowing for
              high-intensity<br />
               matches and practice sessions well into the
              evening.
            </p>
            <p className="text-[var(--body-text-color)] text-md leading-relaxed">
              Beyond volleyball, our expansive outdoor sports complex supports a<br />
              wide range of activities including athletics, football, and
              basketball. The <br /> infrastructure is meticulously maintained to
              provide optimal grip, safety,<br /> and performance for competitive
              inter-college tournaments and daily <br /> recreational play.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-[var(--background)] rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-6 min-h-[780px] md:min-h-[560px]">

          {/* Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
            <Image
              src="/facilities/indoor.png"
              alt="Indoor Games"
              width={600}
              height={350}
              className="rounded-xl object-cover w-full h-[360px] md:h-[430px] transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 md:-mt-20 pr-1 md:pr-3 md:translate-x-4">
            <h2 className="text-[var(--theme-color2)] font-bold text-2xl md:text-4xl mb-3">
              Indoor Games & Fitness Hub
            </h2>
            <p className="text-[var(--body-text-color)] text-md leading-relaxed mb-3 mt-6">
              Escape the elements and sharpen your strategic skills in our modern<br />
              Indoor Sports Complex. We offer dedicated arenas for table tennis,<br />
              badminton, and specialized zones for chess and carrom, providing a<br />
              perfect balance of leisure and professional training.
            </p>
            <p className="text-[var(--body-text-color)] text-md leading-relaxed">
              Equipped with the latest fitness technology, our indoor facilities
              cater to <br /> both team sports and individual conditioning. Whether you
              are aiming <br /> intramural championship or just looking to unwind after <br /> 
              lectures, our climate-controlled enviroment ensures year-round<br />
              comfort and access to premium gamming infrastructure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}