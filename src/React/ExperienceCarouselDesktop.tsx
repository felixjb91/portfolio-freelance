import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code, TrendingUp, Users, MapPin, Calendar } from "lucide-react";

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

export default function ExperienceCarouselDesktop({ experiences }: ExperienceCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(68);
	const dragX = useMotionValue(0);

	useEffect(() => {
		const updateWidth = () => {
			setCardWidth(window.innerWidth < 1024 ? 75 : 68);
		};
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

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

	const next = () => {
		if (currentIndex < experiences.length - 1) {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const prev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	const onDragEnd = () => {
		const x = dragX.get();
		if (x < -50 && currentIndex < experiences.length - 1) {
			next();
		} else if (x > 50 && currentIndex > 0) {
			prev();
		}
	};

	return (
		<div className="relative w-full py-6">
			{/* Carousel container */}
			<div className="overflow-hidden px-1">
				<motion.div
					className="flex gap-5 cursor-grab active:cursor-grabbing"
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={0.2}
					onDragEnd={onDragEnd}
					animate={{
						x: `-${currentIndex * cardWidth}%`,
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 30,
					}}
					style={{ x: dragX }}
				>
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							className="min-w-[70%] lg:min-w-[65%] flex-shrink-0"
							initial={{ opacity: 0 }}
							animate={{
								opacity: index === currentIndex ? 1 : 0.4,
							}}
							transition={{ duration: 0.3 }}
						>
							<div className="p-7 bg-[var(--surface)] border border-[var(--border)] rounded-xl h-full">
								{/* Card header */}
								<h3 className="font-serif text-xl md:text-2xl text-[var(--text)] break-words">
									{exp.position ? `${exp.position} · ${exp.company}` : exp.company}
								</h3>

								<div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 font-mono text-xs text-[var(--muted)]">
									<span className="flex items-center gap-1.5">
										<MapPin className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
										<span className="break-words">{exp.location}</span>
									</span>
									<span className="flex items-center gap-1.5">
										<Calendar className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
										<span className="break-words">{exp.period}</span>
									</span>
								</div>

								{/* Tech Stack */}
								{exp.techStack && exp.techStack.length > 0 && (
									<div className="flex flex-wrap gap-2 mt-5">
										{exp.techStack.map((tech, i) => (
											<span
												key={i}
												className="font-mono text-[0.7rem] uppercase tracking-wide px-2 py-1 border border-[var(--border)] text-[var(--muted)] rounded"
											>
												{tech}
											</span>
										))}
									</div>
								)}

								{/* Achievements */}
								<ul className="mt-6 pt-5 border-t border-[var(--border)] space-y-3">
									{exp.achievements.map((achievement, i) => {
										const Icon = getCategoryIcon(achievement.category);
										return (
											<li
												key={i}
												className="flex items-start gap-3 text-sm text-[var(--muted)]"
											>
												<Icon className="w-4 h-4 mt-0.5 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
												<span className="leading-relaxed break-words">{achievement.text}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Navigation arrows */}
			{currentIndex > 0 && (
				<button
					onClick={prev}
					className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface)] hover:bg-[var(--bg)] border border-[var(--border)] transition-colors"
					aria-label="Expérience précédente"
				>
					<ChevronLeft className="w-5 h-5 text-[var(--text)]" />
				</button>
			)}

			{currentIndex < experiences.length - 1 && (
				<button
					onClick={next}
					className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface)] hover:bg-[var(--bg)] border border-[var(--border)] transition-colors"
					aria-label="Expérience suivante"
				>
					<ChevronRight className="w-5 h-5 text-[var(--text)]" />
				</button>
			)}

			{/* Pagination dots */}
			<div className="flex gap-2 justify-center mt-7">
				{experiences.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
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
