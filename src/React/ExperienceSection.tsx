import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import {workExperiencePerso, workExperiencePro} from "@/lib/data-text.ts";

export default function ExperienceSection() {

	function workExperiences(workExperience: any[]) {
		return <>
			{workExperience.map((job, index) => (
				<TimelineItem
						key={job.company + job.period}
						title={job.position ? `${job.position} | ${job.company}` : job.company}
						subtitle={job.location}
						date={job.period}
						isLast={index === workExperience.length - 1}
						index={index}
				>
					<motion.div
							className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: 0.2}}
							viewport={{once: true}}
					>
						<div className="flex items-center mb-3">
							<div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
								<Briefcase className="h-4 w-4 text-[var(--sec)] opacity-70"/>
							</div>
							<h4 className="text-sm font-medium text-gray-300">Contexte</h4>
						</div>
						<ul className="list-none ml-4 space-y-2 text-sm">
							{job.achievements.map((achievement, i) => (
									<motion.li
											key={i}
											className="text-gray-400 text-muted-foreground relative pl-6"
											initial={{opacity: 0, x: -10}}
											whileInView={{opacity: 1, x: 0}}
											transition={{duration: 0.3, delay: 0.1 * i}}
											viewport={{once: true}}
									>
										{achievement}
									</motion.li>
							))}
						</ul>
					</motion.div>
				</TimelineItem>
			))}
		</>;
	}

	return (
		<div className="py-12 container max-w-4xl mx-auto px-20 md:px-4">
			<div className="mb-8">
				<h3 className="text-4xl md:text-5xl font-medium mb-8">Pro</h3>
				{workExperiences(workExperiencePro)}
			</div>
			<div className="mb-8">
				<h3 className="text-4xl md:text-5xl font-medium mb-8">Perso</h3>
				{workExperiences(workExperiencePerso)}
			</div>
		</div>
	);
}
