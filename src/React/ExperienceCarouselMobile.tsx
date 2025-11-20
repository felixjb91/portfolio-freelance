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
				return { icon: Code, color: "text-purple-400" };
			case "impact":
				return { icon: TrendingUp, color: "text-blue-400" };
			case "humain":
				return { icon: Users, color: "text-orange-400" };
			default:
				return { icon: Code, color: "text-gray-400" };
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
		<div className="relative w-full py-8">
			{/* Scroll container */}
			<div
				ref={scrollRef}
				className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{experiences.map((exp, index) => (
					<div
						key={index}
						className="w-full flex-shrink-0 snap-start px-4"
					>
						<div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-purple-500/20 shadow-lg h-full">
							{/* Card header */}
							<h3 className="font-medium text-base text-white break-words whitespace-normal">
								{exp.position ? `${exp.position} | ${exp.company}` : exp.company}
							</h3>

							<div className="flex items-center gap-2 text-xs text-gray-300 mt-3">
								<MapPin className="w-4 h-4 opacity-70 text-[var(--sec)] flex-shrink-0" />
								<span className="break-words whitespace-normal">{exp.location}</span>
							</div>

							<div className="flex items-center gap-2 text-xs text-gray-300 mt-1 mb-4">
								<Calendar className="w-4 h-4 opacity-70 text-[var(--sec)] flex-shrink-0" />
								<span className="break-words whitespace-normal">{exp.period}</span>
							</div>

							{/* Tech Stack */}
							{exp.techStack && exp.techStack.length > 0 && (
								<div className="flex flex-wrap gap-1.5 mb-4">
									{exp.techStack.map((tech, i) => (
										<img
											key={i}
											src={`/svg/${tech}.svg`}
											alt={tech}
											className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
											title={tech}
										/>
									))}
								</div>
							)}

							{/* Achievements */}
							<div className="mt-3 p-3 bg-background/40 rounded-lg border border-purple-500/10">
								<ul className="space-y-2">
									{exp.achievements.map((achievement, i) => {
										const { icon: Icon, color } = getCategoryIcon(achievement.category);
										return (
											<li
												key={i}
												className="flex items-start gap-2 text-xs text-gray-400"
											>
												<Icon className={`w-3.5 h-3.5 mt-0.5 ${color} flex-shrink-0`} />
												<span className="leading-relaxed break-words whitespace-normal">{achievement.text}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Pagination dots */}
			<div className="flex gap-2 justify-center mt-6">
				{experiences.map((_, index) => (
					<button
						key={index}
						onClick={() => scrollToCard(index)}
						className={`w-2 h-2 rounded-full transition-all ${
							index === currentIndex
								? "bg-purple-500 w-8"
								: "bg-gray-600 hover:bg-gray-500"
						}`}
						aria-label={`Go to experience ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
