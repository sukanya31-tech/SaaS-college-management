import Image from "next/image";

export default function ContactBanner() {
  return (
    <section className="relative w-full h-[40vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/contact/contacthero.png"
        alt="Campus"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-color)]/95 via-[var(--theme-color)]/85 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full">
          <div className="max-w-xl">
            {/* Pink Line */}
            <div className="w-10 h-[3px] bg-[var(--theme-color2)] mb-4" />

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--background)]">
              Get In <span className="text-[var(--theme-color2)]">Touch</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-[var(--body-text-color)] text-base md:text-lg leading-relaxed">
              Our team is online and ready to help. Reach out for 
              support or project collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}