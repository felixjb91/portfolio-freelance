import ExperienceCarousel from "./ExperienceCarousel";
import {workExperiencePerso, workExperiencePro} from "@/lib/data-text.ts";

export default function ExperienceSection() {
	return (
		<div className="py-12 container max-w-6xl mx-auto px-4 md:px-8">
			<div className="mb-16">
				<h3 className="text-4xl md:text-5xl font-medium mb-4 px-4">Pro</h3>
				<ExperienceCarousel experiences={workExperiencePro} />
			</div>
			<div className="mb-8">
				<h3 className="text-4xl md:text-5xl font-medium mb-4 px-4">Perso</h3>
				<ExperienceCarousel experiences={workExperiencePerso} />
			</div>
		</div>
	);
}
