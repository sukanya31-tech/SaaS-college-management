type EvaluationStep = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
};

const steps: EvaluationStep[] = [
	{
		id: "STEP 01",
		title: "Digital Script Ingestion",
		subtitle: "BARCODE VERIFICATION & SCANNING",
		description:
			"Post-examination, all answer scripts are collected, bundled, and unsealed. Each booklet is scanned via high-speed OMR/OCR scanners to ensure anonymity by masking the student’s personal details with unique encrypted barcodes.",
	},
	{
		id: "STEP 02",
		title: "On-Screen Marking (OSM)",
		subtitle: "REMOTE & SECURE EVALUATION",
		description:
			"Digitized scripts are uploaded to a secure cloud server. Subject Matter Experts (SMEs) evaluate the scripts on-screen. The system prevents skipping pages and ensures every question is awarded marks before final submission.",
	},
	{
		id: "STEP 03",
		title: "Chief Examiner Audit",
		subtitle: "MODERATION & QUALITY CHECK",
		description:
			"To maintain 100% accuracy, 10% of the evaluated scripts are randomly pulled for a secondary review by the Chief Examiner. This ensures consistency in grading and adherence to the marking scheme provided by Digi College.",
	},
];

export default function ExaminationEvaluation() {
	return (
		<section className="relative overflow-hidden bg-[var(--theme-color)] px-4 py-20 text-[var(--background)] sm:px-6 md:px-10 lg:px-16">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full" />
			</div>

			<div className="relative mx-auto max-w-8xl">
				<div className="mx-auto max-w-3xl text-center">
					<span className="inline-flex items-center rounded-full border border-[var(--theme-color2)]/50 bg-[var(--theme-color2)]/10 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--theme-color2)]">
						Exam Valuation Steps
					</span>
					<h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--background)] sm:text-5xl">
						Valuation <span className="italic text-[var(--background)]">Procedure</span>
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--background)] sm:text-base">
						A transparent, tech-driven evaluation system designed to ensure unbiased results
						and academic excellence for every student.
					</p>
				</div>

				<div className="relative mt-14 md:mt-12 grid gap-12 md:gap-10 lg:grid-cols-3 lg:gap-14">
					{steps.map((step, index) => (
						<article
							key={step.id}
							className="group relative min-h-[500px] md:min-h-[500px] w-full max-w-[30rem] mx-auto rounded-[39px] border border-[var(--theme-color2)]/25 bg-[var(--body-text-color)]/10 px-8 md:px-6 py-11 md:py-9 transform transition-all duration-300 ease-in-out hover:-translate-y-4 hover:bg-gradient-to-r hover:from-[var(--theme-color2)]/10 hover:to-transparent hover:shadow-[0_5px_10px_0_var(--theme-color2)]/15 before:absolute before:left-0 before:top-12 before:-translate-x-6 before:w-1 before:h-16 before:bg-[var(--body-text-color)]/50 before:rounded-full before:opacity-100 before:transition-opacity hover:before:opacity-0"
						>
							<span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
									<circle cx="12" cy="12" r="12" fill="var(--theme-color2)" />
										<path d="M7 12l3 3 7-7" stroke="var(--theme-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--theme-color2)]">{step.id}</p>
							<h3 className="mt-7 whitespace-nowrap md:whitespace-normal text-2xl md:text-xl font-semibold leading-none text-[var(--background)]">{step.title}</h3>
							<p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--background)]/60">
								{step.subtitle}
							</p>
							<p className="mt-12 text-lg leading-7 text-[var(--background)]/60">{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
