"use client";

import { useEffect, useState } from "react";
import {
	Award,
	Briefcase,
	Calendar,
	FileDown,
	GraduationCap,
	Pill,
	Sprout,
} from "lucide-react";

type Category = {
	label: string;
	icon: React.ReactNode;
};

type ScheduleRow = {
	batchRef: string;
	courseContext: string;
	badge: string;
	updateLog: string;
};

type ScheduleContent = {
	title: string;
	subtitle: string;
	years: string[];
	rowsByYear: Record<string, ScheduleRow[]>;
};

const categories: Category[] = [
	{ label: "B.Tech Programs", icon: <GraduationCap className="h-5 w-5" /> },
	{ label: "Pharmacy", icon: <Pill className="h-5 w-5" /> },
	{ label: "Degree (B.Sc/B.Com)", icon: <Award className="h-5 w-5" /> },
	{ label: "Agricultural", icon: <Sprout className="h-5 w-5" /> },
	{ label: "Post Graduate (MBA/M.Sc)", icon: <Briefcase className="h-5 w-5" /> },
];

const scheduleContentByCategory: Record<string, ScheduleContent> = {
	"B.Tech Programs": {
		title: "B.Tech Programs",
		subtitle: "Academic Year 2026-27 Schedules",
		years: ["I YEAR", "II YEAR", "III YEAR", "IV YEAR"],
		rowsByYear: {
			"I YEAR": [
				{
					batchRef: "2025-29",
					courseContext: "Sem I & II",
					badge: "Regular",
					updateLog: "Mar 01, 2026",
				},
			],
			"II YEAR": [
				{
					batchRef: "2024-28",
					courseContext: "Sem III & IV",
					badge: "Revised",
					updateLog: "Feb 15, 2026",
				},
			],
			"III YEAR": [
				{
					batchRef: "2023-27",
					courseContext: "Sem V & VI",
					badge: "Regular",
					updateLog: "June 10, 2026",
				},
			],
			"IV YEAR": [
				{
					batchRef: "2022-26",
					courseContext: "Project Work",
					badge: "Regular",
					updateLog: "Dec 05, 2025",
				},
			],
		},
	},
	Pharmacy: {
		title: "Pharmacy",
		subtitle: "Academic Year 2026-27 Schedules",
		years: ["I YEAR", "II YEAR", "III YEAR", "IV YEAR"],
		rowsByYear: {
			"I YEAR": [
				{
					batchRef: "2025-29",
					courseContext: "Basics of Pharma",
					badge: "Regular",
					updateLog: "Feb 20, 2026",
				},
			],
			"II YEAR": [
				{
					batchRef: "2024-28",
					courseContext: "Pharmaceutical Chemistry",
					badge: "Regular",
					updateLog: "Mar 04, 2026",
				},
			],
			"III YEAR": [
				{
					batchRef: "2023-27",
					courseContext: "Pharmacology",
					badge: "Updated",
					updateLog: "Mar 18, 2026",
				},
			],
			"IV YEAR": [
				{
					batchRef: "2022-26",
					courseContext: "Clinical Pharmacy",
					badge: "Updated",
					updateLog: "Apr 08, 2026",
				},
			],
		},
	},
	"Degree (B.Sc/B.Com)": {
		title: "Degree (B.Sc/B.Com)",
		subtitle: "Academic Year 2026-27 Schedules",
		years: ["I YEAR", "II YEAR", "III YEAR"],
		rowsByYear: {
			"I YEAR": [
				{
					batchRef: "2025-28",
					courseContext: "Core Sem I",
					badge: "Regular",
					updateLog: "Mar 01, 2026",
				},
			],
			"II YEAR": [
				{
					batchRef: "2024-27",
					courseContext: "Core Sem III",
					badge: "Regular",
					updateLog: "Feb 10, 2026",
				},
			],
			"III YEAR": [
				{
					batchRef: "2023-26",
					courseContext: "Specialization",
					badge: "Updated",
					updateLog: "Jan 05, 2026",
				},
			],
		},
	},
	Agricultural: {
		title: "Agricultural",
		subtitle: "Academic Year 2026-27 Schedules",
		years: ["I YEAR", "II YEAR", "III YEAR", "IV YEAR"],
		rowsByYear: {
			"I YEAR": [
				{
					batchRef: "2025-29",
					courseContext: "Soil Science",
					badge: "Regular",
					updateLog: "Feb 20, 2026",
				},
			],
			"II YEAR": [
				{
					batchRef: "2024-28",
					courseContext: "Entomology",
					badge: "Regular",
					updateLog: "Jan 12, 2026",
				},
			],
			"III YEAR": [
				{
					batchRef: "2023-27",
					courseContext: "Plant Pathology",
					badge: "Updated",
					updateLog: "Nov 30, 2025",
				},
			],
			"IV YEAR": [
				{
					batchRef: "2022-26",
					courseContext: "RAWE Program",
					badge: "Regular",
					updateLog: "Oct 15, 2025",
				},
			],
		},
	},
	"Post Graduate (MBA/M.Sc)": {
		title: "Post Graduate (MBA/M.Sc)",
		subtitle: "Academic Year 2026-27 Schedules",
		years: ["I YEAR", "II YEAR"],
		rowsByYear: {
			"I YEAR": [
				{
					batchRef: "2025-27",
					courseContext: "Trimester I ",
					badge: "Regular",
					updateLog: "Mar 02, 2026",
				},
			],
			"II YEAR": [
				{
					batchRef: "2024-26",
					courseContext: "Thesis/Intern",
					badge: "Regular",
					updateLog: "Feb 14, 2026",
				},
			],
		},
	},
};

export default function Academic() {
	const [activeCategory, setActiveCategory] = useState(categories[0].label);
	const scheduleContent = scheduleContentByCategory[activeCategory] ?? scheduleContentByCategory["B.Tech Programs"];
	const [activeYear, setActiveYear] = useState(scheduleContent.years[0]);

	useEffect(() => {
		setActiveYear(scheduleContent.years[0]);
	}, [activeCategory, scheduleContent.years]);

	const visibleRows = scheduleContent.rowsByYear[activeYear] ?? [];

	return (
		<main className="min-h-screen bg-[var(--theme-bg-light)] px-4 py-4 sm:px-6 md:px-10 lg:px-16 lg:py-6">
			<div className="mx-auto grid max-w-8xl gap-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6">
				<aside className="rounded-[24px] bg-[var(--theme-bg-light)] p-4 lg:p-5">
					<div className="mb-6 flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--theme-color2)] text-[var(--background)] shadow-sm">
							<Calendar className="h-5 w-5" />
						</div>
						<div>
							<p className="text-lg font-bold text-[var(--theme-color)]">
								Academic <span className="font-semibold italic text-[var(--body-text-color)]">CALENDAR</span>
							</p>
						</div>
					</div>

					<nav className="space-y-4">
						{categories.map((category) => {
							const active = activeCategory === category.label;

							return (
								<button
									key={category.label}
									type="button"
									onClick={() => setActiveCategory(category.label)}
									className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-200 ${
										active
											? "border-[var(--body-text-color)]/30 bg-[var(--background)] text-[var(--theme-color)] shadow-[0_8px_20px_rgba(27,31,59,0.08)]"
											: "border-transparent bg-transparent text-[var(--theme-color)] hover:border-[var(--theme-bg-light)] hover:bg-[var(--background)]"
									}`}
								>
									<span
										className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 ${
											active ? "bg-[var(--theme-color2)] text-[var(--background)]" : "bg-[var(--body-text-color)]/10 text-[var(--theme-color)]"
										}`}
									>
										{category.icon}
									</span>
									<span className={`text-sm font-semibold ${active ? "text-[var(--theme-color)]" : "text-[var(--body-text-color)]"}`}>
										{category.label}
									</span>
								</button>
							);
						})}
					</nav>
				</aside>

				<section className="rounded-[36px] border border-[var(--body-text-color)]/30 bg-[var(--background)] p-4 shadow-[0_10px_30px_rgba(27,31,59,0.06)] sm:p-6 lg:ml-4 lg:p-8">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
						<div>
							<h1 className="text-3xl font-extrabold tracking-tight text-[var(--theme-color)] sm:text-4xl lg:text-5xl">
								{scheduleContent.title}
							</h1>
							<div className="mt-2 flex items-center gap-3">
								<span className="h-1 w-7 rounded-full bg-[var(--theme-color2)]" />
								<p className="text-sm text-[var(--body-text-color)] sm:text-base">{scheduleContent.subtitle}</p>
							</div>
						</div>

						<div className="rounded-2xl border border-[var(--body-text-color)]/20 bg-[var(--theme-bg-light)] p-1 shadow-[0_8px_24px_rgba(27,31,59,0.05)]">
							<div
								className="grid gap-1"
								style={{ gridTemplateColumns: `repeat(${scheduleContent.years.length}, minmax(0, 1fr))` }}
							>
								{scheduleContent.years.map((year) => {
									const active = activeYear === year;

									return (
										<button
											key={year}
											type="button"
											onClick={() => setActiveYear(year)}
											className={`rounded-xl px-4 py-2 text-xs font-extrabold tracking-[0.2em] transition-colors duration-200 sm:text-sm ${
												active
													? "bg-[var(--theme-color2)] text-[var(--background)] shadow-md"
													: "text-[var(--body-text-color)] hover:bg-[var(--theme-bg-light)] "
											}`}
										>
											{year}
										</button>
									);
								})}
							</div>
						</div>
					</div>

					<div className="mt-8 overflow-hidden rounded-[28px] border border-[var(--body-text-color)]/30">
						<div className="grid grid-cols-12 gap-3 border-b border-[var(--body-text-color)]/20 bg-[var(--theme-bg-light)] px-4 py-4 text-[11px] font-bold uppercase tracking-[0.4em] text-[#8a90a6] sm:px-6">
							<div className="col-span-3">Batch Ref</div>
							<div className="col-span-5">Course Context</div>
							<div className="col-span-2 text-center">Update Log</div>
							<div className="col-span-2 text-center">Brochure</div>
						</div>

						<div className="px-4 py-6 sm:px-6">
							{visibleRows.map((row) => (
								<div key={`${row.batchRef}-${row.courseContext}`} className="grid grid-cols-12 items-center gap-3 px-4 py-4">
									<div className="col-span-3 text-lg font-extrabold text-[var(--theme-color)] sm:text-xl">{row.batchRef}</div>

									<div className="col-span-5">
										<p className="text-lg font-bold text-[var(--theme-color)]">{row.courseContext}</p>
										<span className="mt-3 inline-flex rounded-md border border-[var(--body-text-color)]/20 bg-[var(--theme-bg-light)] px-3 py-1 text-xs font-semibold text-[var(--body-text-color)] shadow-sm">
											{row.badge}
										</span>
									</div>

									<div className="col-span-2 text-center text-sm text-[var(--body-text-color)]">{row.updateLog}</div>

									<div className="col-span-2 flex justify-center">
										<button
											type="button"
											className="flex h-12 w-12 items-center justify-center rounded-2xl  bg-[var(--theme-bg-light)] text-[var(--theme-color)] transition-colors duration-200 hover:bg-[var(--theme-color2)] hover:text-[var(--background)]"
											aria-label="Download brochure"
										>
											<FileDown className="h-5 w-5" />
										</button>
									</div>
								</div>
							))}

				
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
