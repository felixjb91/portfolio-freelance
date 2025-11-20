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
				return { icon: Code, color: "text-purple-400" };
			case "impact":
				return { icon: TrendingUp, color: "text-blue-400" };
			case "humain":
				return { icon: Users, color: "text-orange-400" };
			default:
				return { icon: Code, color: "text-gray-400" };
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
		<div className="relative w-full py-8">
			{/* Carousel container */}
			<div className="overflow-hidden px-4">
				<motion.div
					className="flex gap-4 cursor-grab active:cursor-grabbing"
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
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{
								opacity: index === currentIndex ? 1 : 0.5,
								scale: index === currentIndex ? 1 : 0.95,
							}}
							transition={{ duration: 0.3 }}
						>
							<div className="p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-purple-500/20 shadow-lg h-full">
								{/* Card header */}
								<h3 className="font-medium text-xl text-white break-words">
									{exp.position ? `${exp.position} | ${exp.company}` : exp.company}
								</h3>

								<div className="flex items-center gap-2 text-sm text-gray-300 mt-3">
									<MapPin className="w-4 h-4 opacity-70 text-[var(--sec)] flex-shrink-0" />
									<span className="break-words">{exp.location}</span>
								</div>

								<div className="flex items-center gap-2 text-xs text-gray-300 mt-1 mb-4">
									<Calendar className="w-4 h-4 opacity-70 text-[var(--sec)] flex-shrink-0" />
									<span className="break-words">{exp.period}</span>
								</div>

								{/* Tech Stack */}
								{exp.techStack && exp.techStack.length > 0 && (
									<div className="flex flex-wrap gap-2 mb-4">
										{exp.techStack.map((tech, i) => (
											<img
												key={i}
												src={`/svg/${tech}.svg`}
												alt={tech}
												className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
												title={tech}
											/>
										))}
									</div>
								)}

								{/* Achievements */}
								<div className="mt-4 p-4 bg-background/40 rounded-lg border border-purple-500/10">
									<ul className="space-y-2">
										{exp.achievements.map((achievement, i) => {
											const { icon: Icon, color } = getCategoryIcon(achievement.category);
											return (
												<li
													key={i}
													className="flex items-start gap-3 text-sm text-gray-400"
												>
													<Icon className={`w-4 h-4 mt-0.5 ${color} flex-shrink-0`} />
													<span className="leading-relaxed break-words">{achievement.text}</span>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Navigation arrows */}
			{currentIndex > 0 && (
				<button
					onClick={prev}
					className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/30 hover:bg-purple-500/50 backdrop-blur-sm border border-purple-500/40 transition-all"
					aria-label="Previous experience"
				>
					<ChevronLeft className="w-6 h-6 text-white" />
				</button>
			)}

			{currentIndex < experiences.length - 1 && (
				<button
					onClick={next}
					className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/30 hover:bg-purple-500/50 backdrop-blur-sm border border-purple-500/40 transition-all"
					aria-label="Next experience"
				>
					<ChevronRight className="w-6 h-6 text-white" />
				</button>
			)}

			{/* Pagination dots */}
			<div className="flex gap-2 justify-center mt-6">
				{experiences.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
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
