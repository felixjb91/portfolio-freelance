import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {

	const workExperiencePerso = [
		{
			company: "Sacem",
			location: "Paris, France",
			position: "Ingénieur Logiciel Fullstack",
			period: "Oct. 2023 – Aujourd’hui",
			achievements: [
				"Modernisation d’applications critiques pour la gestion des œuvres musicales",
				"Conception de services backend robustes et modulaires (fiabilité & maintenabilité)",
				"Amélioration des performances sur des volumes de données importants",
				"Mise en place de pratiques de qualité (tests, clean code, revues, observabilité)",
				"Collaboration avec métiers et équipes projet pour cadrer les évolutions",
			],
		},
		{
			company: "Ippon Technologies",
			location: "Paris, France",
			position: "Ingénieur Études & Développement",
			period: "Juil. 2019 – Oct. 2023",
			achievements: [
				"Réalisation de projets clients en environnement agile",
				"Développement backend et mise en place de bonnes pratiques (clean code, tests)",
				"Contribution à des solutions scalables et fiables dans différents secteurs",
				"Appui conseil auprès des équipes pour les choix techniques",
			],
		},
		{
			company: "Tiime",
			location: "Paris, France",
			position: "Développeur Logiciel (Salesforce)",
			period: "Oct. 2018 – Août 2019",
			achievements: [
				"Conception et intégration de workflows métiers sur Salesforce",
				"Automatisation de processus internes et gains de productivité",
				"Collaboration avec les équipes métier pour cadrer les besoins",
			],
		},
	];

	const workExperiencePro = [
		{
			company: "SayReps (Projet personnel)",
			location: "Paris / Remote",
			position: "Fondateur & Développeur",
			period: "Avr. 2025 – Aujourd’hui",
			achievements: [
				"Application mobile de suivi d’entraînement à la voix avec IA",
				"Transcription, interprétation et génération automatique du carnet d’entraînement",
				"Statistiques par exercice et groupes musculaires, historique automatisé",
				"Expérience minimaliste pensée pour un usage en situation réelle (en salle)",
			],
		},
		{
			company: "NosDéputés — Talent (Projet personnel)",
			location: "Paris / Remote",
			position: "Créateur & Développeur",
			period: "Sep. 2024 – Avr. 2025",
			achievements: [
				"Plateforme citoyenne d’exploration des textes de loi et débats de l’Assemblée",
				"Synthèses des propositions de loi et résumés de débats par séance",
				"Analyse par groupe parlementaire pour comparer les positions",
				"Chatbot RAG offrant des réponses sourcées et vérifiables",
			],
		},
		{
			company: "Killer (Projet personnel)",
			location: "Paris / Remote",
			position: "Concepteur & Développeur",
			period: "Jan. 2024 – Juin 2024",
			achievements: [
				"Digitalisation d’un jeu de société avec gestion complète des parties",
				"Génération de missions dynamiques par IA pour renouveler l’expérience",
				"Suivi en temps réel et automatisation de l’orchestration de jeu",
			],
		}
	];


	function workExperiences(workExperience: any[]) {
		return <>
			{workExperiencePro.map((job, index) => (
				<TimelineItem
						key={job.company + job.period}
						title={`👨‍💻 ${job.position} | ${job.company}`}
						subtitle={`🌍 ${job.location}`}
						date={`📅 ${job.period}`}
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
								<Briefcase className="h-4 w-4 text-purple-500"/>
							</div>
							<h4 className="text-sm font-medium text-white">Key Achievements</h4>
						</div>
						<ul className="list-none ml-4 space-y-2 text-sm">
							{job.achievements.map((achievement, i) => (
									<motion.li
											key={i}
											className="text-white text-muted-foreground relative pl-6"
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
			<section id="experience" className="py-12 bg-gradient-to-b from-muted/20 to-background">
				<div className="container max-w-4xl mx-auto px-6 md:px-4">
					<div className="mb-8">
						<h3 className="text-4xl md:text-5xl font-medium mb-8">Pro</h3>
						{workExperiences(workExperiencePro)}
					</div>
					<div className="mb-8">
						<h3 className="text-4xl md:text-5xl font-medium mb-8">Perso</h3>
						{workExperiences(workExperiencePerso)}
					</div>
				</div>
			</section>
	);
}
