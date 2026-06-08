import { workExperiencePerso, workExperiencePro } from "@/lib/data-text.ts";
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

const iconFor = (category: string) =>
	category === "impact" ? TrendingUp : category === "humain" ? Users : Code;

function ExperienceCard({ exp }: { exp: Experience }) {
	const [name, link] = exp.company.split(" | ");
	const title = exp.position ? `${exp.position} · ${name}` : name;
	return (
		<article className="p-6 md:p-7 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
			<h4 className="font-serif text-xl md:text-2xl text-[var(--text)] break-words">
				{title}
			</h4>
			{link && (
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-1.5 font-mono text-xs text-[var(--accent)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--accent)] transition-colors"
				>
					{link.replace(/^https?:\/\//, "")} ↗
				</a>
			)}

			<div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 font-mono text-xs text-[var(--muted)]">
				<span className="flex items-center gap-1.5">
					<MapPin className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
					{exp.location}
				</span>
				<span className="flex items-center gap-1.5">
					<Calendar className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
					{exp.period}
				</span>
			</div>

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

			<ul className="mt-6 pt-5 border-t border-[var(--border)] space-y-3">
				{exp.achievements.map((a, i) => {
					const Icon = iconFor(a.category);
					return (
						<li
							key={i}
							className="flex items-start gap-3 text-sm text-[var(--muted)]"
						>
							<Icon
								className="w-4 h-4 mt-0.5 text-[var(--accent)] flex-shrink-0"
								aria-hidden="true"
							/>
							<span className="leading-relaxed break-words">{a.text}</span>
						</li>
					);
				})}
			</ul>
		</article>
	);
}

export default function ExperienceSection() {
	return (
		<div className="pt-10">
			<div className="mb-16">
				<h3 className="font-serif text-2xl md:text-3xl text-[var(--text)] mb-1">
					Expériences professionnelles
				</h3>
				<p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] mb-6">
					Sacem · Ippon Technologies · Tiime
				</p>
				<div className="grid md:grid-cols-2 gap-5">
					{workExperiencePro.map((exp, i) => (
						<ExperienceCard key={i} exp={exp} />
					))}
				</div>
			</div>
			<div>
				<h3 className="font-serif text-2xl md:text-3xl text-[var(--text)] mb-1">
					Projets personnels
				</h3>
				<p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] mb-6">
					Backend & IA · LLM, RAG, agents
				</p>
				<div className="grid md:grid-cols-2 gap-5">
					{workExperiencePerso.map((exp, i) => (
						<ExperienceCard key={i} exp={exp} />
					))}
				</div>
			</div>
		</div>
	);
}
