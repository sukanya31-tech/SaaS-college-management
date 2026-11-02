"use client";

import { Search, Download, List, Calendar } from "lucide-react";
import { useState } from "react";

const notifications = [
  {
    date: "Oct 24, 2025",
    department: "B.TECH",
    description:
      "Semester End Examination Results - Regular/Supplementary",
    fileType: "PDF",
  },
  {
    date: "Oct 20, 2025",
    department: "MBA",
    description: "Time Table for Mid-Term Examinations November 2025",
    fileType: "DOCX",
  },
  {
    date: "Oct 15, 2025",
    department: "GENERAL",
    description:
      "Fee Payment Deadline Extension for Autonomous Students",
    fileType: "PDF",
  },
  {
    date: "Oct 10, 2025",
    department: "PHARMACY",
    description: "Practical Examination Schedule - Year III",
    fileType: "PDF",
  },
];

export default function ExamNotifications() {
  const [search, setSearch] = useState("");

  const filtered = notifications.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[var(--background)] py-16 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[var(--theme-color)]">
          Exam Notifications
        </h1>
        <p className="text-medium text-[var(--body-text-color)] mt-1">
          Official Autonomous Examination Portal
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        
        {/* Left */}
        <div className="flex items-center gap-2 text-3xl font-bold text-[var(--theme-color)] whitespace-nowrap">
          <List size={28} className="text-[var(--theme-color2)]" />
          LIVE NOTIFICATIONS
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search notifications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-[var(--theme-color2)] rounded-md py-2 pl-10 pr-3 text-sm focus:outline-none"
          />
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--theme-color2)]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="mt-12 border-2 border-[var(--theme-color)] rounded-md bg-[var(--background)]">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full table-fixed text-sm">
          
          {/* Header */}
          <thead className="bg-[var(--theme-bg-light)] text-[var(--body-text-color)] uppercase text-xs">
            <tr>
              <th className="text-left px-6 py-4 w-[18%]">Date</th>
              <th className="text-left px-6 py-4 w-[16%]">Department</th>
              <th className="text-left px-6 py-4 w-[48%]">Description</th>
              <th className="text-right px-6 py-4 w-[18%]">Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filtered.map((item, index) => (
              <tr
                key={index}
                className="border-t border-[var(--body-text-color)]/10 transition min-h-20 hover:bg-[var(--theme-color2)]/3"
              >
                {/* Date */}
                <td className="px-6 py-6 text-[var(--body-text-color)] align-middle">
                  <span className="flex items-center gap-3">
                    <Calendar size={18} className="text-[var(--theme-color2)]" />
                    {item.date}
                  </span>
                </td>

                {/* Department */}
                <td className="px-6 py-6 align-middle">
                  <span className="text-[10px] font-semibold bg-[var(--theme-color2)]/5 text-[var(--theme-color2)] px-2.5 py-1.5 rounded">
                    {item.department}
                  </span>
                </td>

                {/* Description */}
                <td className="px-6 py-6 font-semibold text-[var(--theme-color)] align-middle">
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--theme-color)]">
                      {item.description}
                    </span>
                    <span className="inline-block text-[10px] font-semibold text-[var(--body-text-color)] px-2 py-1 rounded">
                      {item.fileType}
                    </span>
                  </div>
                </td>

                {/* Action */}
                <td className="px-6 py-6 text-right align-middle">
                  <button className="inline-flex items-center gap-1.5 bg-[var(--theme-color2)] hover:bg-[var(--theme-color)] text-[var(--background)] font-semibold text-xs px-4 py-2">
                    <Download size={14} />
                    Download
                  </button>
                </td>
              </tr>
            ))}

            {/* Empty State */}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-6 text-[var(--body-text-color)]"
                >
                  No notifications found
                </td>
              </tr>
            )}
          </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}