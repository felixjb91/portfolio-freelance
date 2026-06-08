import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

interface TimelineItemProps {
	title: string;
	subtitle: string;
	date: string;
	isLast?: boolean;
	index?: number;
	children?: React.ReactNode;
}

export default function TimelineItem({
	                                     title,
	                                     subtitle,
	                                     date,
	                                     isLast = false,
	                                     index = 0,
	                                     children,
                                     }: TimelineItemProps) {
	return (
			<motion.div
					className="relative flex gap-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
					viewport={{ once: true, margin: "-50px" }}
			>
				<div className="flex flex-col items-center">
					<motion.div
							className="flex h-[14px] w-[14px] rounded-full border border-[var(--accent)] bg-[var(--surface)] z-10"
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 15,
								delay: index * 0.2 + 0.2,
							}}
							viewport={{ once: true, margin: "-50px" }}
					/>
					{!isLast && (
							<motion.div
									className="w-px grow bg-[var(--border)]"
									initial={{ height: 0 }}
									whileInView={{ height: "100%" }}
									transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
									viewport={{ once: true, margin: "-50px" }}
							/>
					)}
				</div>
				<div className={isLast ? "pb-0" : "pb-8"}>
					<motion.div
							className="flex flex-col gap-1"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
							viewport={{ once: true, margin: "-50px" }}
					>
						<h3 className="font-serif text-lg text-[var(--text)]">{title}</h3>
						<div className="flex flex-row items-center gap-1.5 text-sm text-[var(--muted)]">
							<MapPin className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
							<span>{subtitle}</span>
						</div>
						<div className="flex flex-row items-center gap-1.5 font-mono text-xs text-[var(--muted)]">
							<Calendar className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
							<span>{date}</span>
						</div>
					</motion.div>
					<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
							viewport={{ once: true, margin: "-50px" }}
					>
						{children}
					</motion.div>
				</div>
			</motion.div>
	);
}
