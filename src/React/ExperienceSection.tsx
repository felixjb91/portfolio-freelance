import ExperienceCarousel from "./ExperienceCarousel";
import { workExperiencePerso, workExperiencePro } from "@/lib/data-text.ts";

export default function ExperienceSection() {
	return (
		<div className="pt-10">
			<div className="mb-16">
				<h3 className="font-serif text-2xl md:text-3xl text-[var(--text)] mb-2">
					Expériences professionnelles
				</h3>
				<p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
					Sacem · Ippon Technologies · Tiime
				</p>
				<ExperienceCarousel experiences={workExperiencePro} />
			</div>
			<div className="mb-4">
				<h3 className="font-serif text-2xl md:text-3xl text-[var(--text)] mb-2">
					Projets personnels
				</h3>
				<p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
					Backend & IA · LLM, RAG, agents
				</p>
				<ExperienceCarousel experiences={workExperiencePerso} />
			</div>
		</div>
	);
}
