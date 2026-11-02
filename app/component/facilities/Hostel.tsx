"use client";

import React from "react";
import { MapPin, Users } from "lucide-react";

type Hostel = {
  location: string;
  hostel: string;
  capacity: number;
  amenities: string;
};

const hostels: Hostel[] = [
  {
    location: "DKIT Central Hub",
    hostel: "Girls Hostel – Kaveri Nivas",
    capacity: 418,
    amenities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room",
  },
  {
    location: "DKIT Central Hub",
    hostel: "Girls Hostel – Saraswati",
    capacity: 212,
    amenities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room",
  },
  {
    location: "DKIT Central Hub",
    hostel: "Girls Hostel – Gayathri",
    capacity: 280,
    amenities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room",
  },
  {
    location: "DKIT Regional A",
    hostel: "Boys Hostel",
    capacity: 540,
    amenities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room",
  },
  {
    location: "DKIT Regional B",
    hostel: "Boys Hostel",
    capacity: 480,
    amenities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room",
  },
  {
    location: "DKIT Regional C",
    hostel: "Boys Hostel",
    capacity: 270,
    amenities: "TV Hall, Dining Hall, Gymnasium, Computer Room, Reading Room",
  },
];

export default function HostelSection() {
  return (
    <section className="bg-[var(--theme-bg-light)] py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1 rounded-full bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] border border-[var(--theme-color2)]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-color2)] animate-pulse" />
            RESIDENTIAL FACILITIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-color)]">
          Student Living: Hostel &{" "}
          <br />
          <span className="italic font-medium text-[var(--body-text-color)]">
            Accommodation
          </span>
        </h2>

        {/* Table Container */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-[var(--theme-color)] overflow-x-auto">

          <div className="min-w-[760px] lg:min-w-0">

          {/* Header */}
          <div className="bg-[var(--theme-color2)] text-[var(--background)] grid grid-cols-4 text-xs sm:text-sm font-semibold px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            <span>LOCATION</span>
            <span>HOSTEL UNIT</span>
            <span>CAPACITY</span>
            <span className="-ml-6">AMENITIES</span>
          </div>

          {/* Rows */}
          <div className="bg-[var(--theme-color)] text-[var(--background)] text-sm font-semibold">
            {hostels.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-4 px-3 sm:px-4 md:px-6 py-4 sm:py-5 border-b border-[var(--theme-bg-light)]/10 items-center hover:bg-[var(--theme-purple)]/5 transition-colors duration-200"
              >
                {/* Location */}
                <div className="flex items-center gap-2 text-[var(--theme-color2)]">
                  <MapPin className="w-4 h-4 text-[var(--theme-color2)]" />
                  <span className="text-[var(--background)]">{item.location}</span>
                </div>

                {/* Hostel */}
                <div>{item.hostel}</div>

                {/* Capacity */}
                <div className="flex justify-start">
                  <span className="inline-flex items-center gap-1 bg-[var(--theme-color2)] pl-2 pr-6 sm:pr-10 lg:pr-14 py-2 rounded-lg text-xs font-semibold">
                    <Users className="w-3.5 h-3.5" />
                    {item.capacity}
                  </span>
                </div>

                {/* Amenities */}
                <div className="text-[var(--background)]/50 text-xs leading-relaxed lg:leading-none whitespace-normal lg:whitespace-nowrap -ml-3 sm:-ml-6 lg:-ml-10 pr-2">
                  {item.amenities}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}