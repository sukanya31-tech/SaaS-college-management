import { Gift } from "lucide-react";

export default function Home() {
  const companies = [
    { name: "ARCOT", logo: "/placements/newlogos/arcot.png" },
    { name: "Submit Tech", logo: "/placements/newlogos/submit-tech-logo.png" },
    { name: "Accenture", logo: "/placements/newlogos/accenture.png" },
    { name: "TCS", logo: "/placements/newlogos/tcs.png" },
    { name: "Kiyo Solution", logo: "/placements/newlogos/kiyo.png" },
    { name: "CGI", logo: "/placements/newlogos/cgi.png" },
    { name: "DXC", logo: "/placements/newlogos/dxc.png" },
    { name: "Solix", logo: "/placements/newlogos/solix-logo.svg" },
    { name: "Infosys", logo: "/placements/newlogos/infosys.png" },
    { name: "Cognizant", logo: "/placements/newlogos/cognizant-logo.svg" },
    { name: "EPAM", logo: "/placements/newlogos/epam.svg" },
    { name: "ECONOMY", logo: "/placements/newlogos/dataeconomy.png" },
    { name: "NEWGEN", logo: "/placements/newlogos/newgen.png" },
    { name: "CODEBEE", logo: "/placements/newlogos/codebee.png" },
    { name: "DIGITAL", logo: "/placements/newlogos/digital.png" },
    { name: "DBS", logo: "/placements/newlogos/dbs-logo.svg" },
  ];

  const midpoint = Math.ceil(companies.length / 2);
  const firstRowCompanies = companies.slice(0, midpoint);
  const secondRowCompanies = companies.slice(midpoint);

  const renderLogoRow = (
    items: { name: string; logo: string }[],
    direction: "left" | "right"
  ) => (
    <div className="overflow-hidden border-b border-[var(--body-text-color)]">
      <div
        className={`flex w-max ${
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {[...items, ...items].map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="relative overflow-hidden group flex w-44 sm:w-48 md:w-52 items-center justify-center h-[120px] border-r border-[var(--body-text-color)] transition duration-300"
          >
            <div className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--theme-color2)] transition-all duration-300 group-hover:w-full"></div>
            <img
              src={company.logo}
              alt={company.name}
              className={`${
                company.name === "Submit Tech" ? "max-h-16" : "max-h-12"
              } object-contain opacity-85 saturate-90 contrast-95 hover:opacity-100 hover:saturate-150 hover:contrast-125 hover:scale-105 transition-all duration-300`}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[var(--footer-bg)] py-28">
      <div className="max-w-8xl mx-auto px-6 md:px-16 text-center">

        {/* Label */}
        <div className="flex items-center justify-center gap-2 text-[var(--theme-color2)] text-xl font-semibold tracking-[0.2em] mb-6">
          <Gift size={16} />
          CAREER OPPORTUNITIES
        </div>

        {/* Heading */}
        <h2 className="text-[var(--background)] text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Our Students Placed In Leading Companies
        </h2>

        {/* Description */}
        <p className="text-[var(--theme-bg-light)] max-w-3xl mx-auto text-xl leading-relaxed">
          We take pride in our strong placement record. Our students are recruited
          by top multinational companies and industry leaders across various
          sectors.
        </p>

        {/* Auto-scrolling logo rows */}
        <div className="mt-16 w-full">
          <div className="border-t border-[var(--body-text-color)]/60"></div>
          {renderLogoRow(firstRowCompanies, "right")}
          {renderLogoRow(secondRowCompanies, "left")}
        </div>
      </div>
    </section>
  );
}