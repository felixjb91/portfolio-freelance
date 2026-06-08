import { useState, useRef, useEffect } from "react";
import { Code, TrendingUp, Users, MapPin, Calendar } from "lucide-react";

interface Achievement {
	category: string;
	text: string;
}

interface Experience {
	company: string;
	location: string;
	position: string;
	period: string;
	techStack?: string[];
	achievements: Achievement[];
}

interface ExperienceCarouselProps {
	experiences: Experience[];
}

export default function ExperienceCarouselMobile({ experiences }: ExperienceCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	const getCategoryIcon = (category: string) => {
		switch (category) {
			case "tech":
				return Code;
			case "impact":
				return TrendingUp;
			case "humain":
				return Users;
			default:
				return Code;
		}
	};

	// Sync dots with scroll position
	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;

		const handleScroll = () => {
			const scrollLeft = container.scrollLeft;
			const cardWidth = container.clientWidth;
			const newIndex = Math.round(scrollLeft / cardWidth);
			setCurrentIndex(newIndex);
		};

		container.addEventListener("scroll", handleScroll);
		return () => container.removeEventListener("scroll", handleScroll);
	}, []);

	// Scroll to card when dot is clicked
	const scrollToCard = (index: number) => {
		const container = scrollRef.current;
		if (!container) return;

		container.scrollTo({
			left: index * container.clientWidth,
			behavior: "smooth"
		});
	};

	return (
		<div className="relative w-full py-6">
			{/* Scroll container */}
			<div
				ref={scrollRef}
				className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{experiences.map((exp, index) => (
					<div
						key={index}
						className="w-full flex-shrink-0 snap-start px-1"
					>
						<div className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl h-full">
							{/* Card header */}
							<h3 className="font-serif text-lg text-[var(--text)] break-words whitespace-normal">
								{exp.position ? `${exp.position} · ${exp.company}` : exp.company}
							</h3>

							<div className="flex flex-col gap-1 mt-3 font-mono text-xs text-[var(--muted)]">
								<span className="flex items-center gap-1.5">
									<MapPin className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
									<span className="break-words whitespace-normal">{exp.location}</span>
								</span>
								<span className="flex items-center gap-1.5">
									<Calendar className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
									<span className="break-words whitespace-normal">{exp.period}</span>
								</span>
							</div>

							{/* Tech Stack */}
							{exp.techStack && exp.techStack.length > 0 && (
								<div className="flex flex-wrap gap-1.5 mt-4">
									{exp.techStack.map((tech, i) => (
										<span
											key={i}
											className="font-mono text-[0.65rem] uppercase tracking-wide px-1.5 py-0.5 border border-[var(--border)] text-[var(--muted)] rounded"
										>
											{tech}
										</span>
									))}
								</div>
							)}

							{/* Achievements */}
							<ul className="mt-5 pt-4 border-t border-[var(--border)] space-y-2.5">
								{exp.achievements.map((achievement, i) => {
									const Icon = getCategoryIcon(achievement.category);
									return (
										<li
											key={i}
											className="flex items-start gap-2 text-xs text-[var(--muted)]"
										>
											<Icon className="w-3.5 h-3.5 mt-0.5 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
											<span className="leading-relaxed break-words whitespace-normal">{achievement.text}</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				))}
			</div>

			{/* Pagination dots */}
			<div className="flex gap-2 justify-center mt-7">
				{experiences.map((_, index) => (
					<button
						key={index}
						onClick={() => scrollToCard(index)}
						className={`h-1.5 rounded-full transition-all ${
							index === currentIndex
								? "bg-[var(--accent)] w-8"
								: "bg-[var(--border)] hover:bg-[var(--muted)] w-1.5"
						}`}
						aria-label={`Aller à l'expérience ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
