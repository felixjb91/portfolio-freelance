export const Tech = {
	ANGULAR: "angular",
	ASTRO: "astro",
	AWS: "aws",
	BASH: "bash",
	CSS3: "CSS3",
	DOCKER: "docker",
	GIT: "git",
	HTML5: "HTML5",
	JAVA: "java",
	JAVASCRIPT: "javaScript",
	LANGCHAIN4J: "langchain4j",
	MYSQL: "mysql",
	N8N: "n8n",
	NEXT: "next",
	NODEJS: "nodejs",
	POSTGRESQL: "postgresql",
	REACT: "react",
	SPRING_BOOT: "spring-boot",
	SUPABASE: "supabase",
	TAILWINDCSS: "tailwindcss",
	TYPESCRIPT: "typeScript",
	VERCEL: "vercel",
	VUE: "vue",
} as const;

export type TechType = typeof Tech[keyof typeof Tech];

export const skills = {
	"Conception & Conseil": [
		"Analyse des besoins et cadrage produit",
		"Conception d’architectures robustes (DDD)",
		"Accompagnement stratégique sur les choix techniques",
	],
	"Développement Backend": [
		"Systèmes fiables et évolutifs (TDD, Clean Architecture)",
		"APIs performantes et sécurisées",
		"Automatisation de processus métiers",
	],
	"Applications & Interfaces": [
		"Applications métiers sur mesure",
		"Tableaux de bord et outils internes",
		"Modernisation et migration d’applications existantes",
	],
	"Innovation & IA": [
		"Intégration LLM (LangChain, RAG)",
		"Automatisation de processus",
		"Conseil sur l’usage de l’IA dans vos outils",
	],
};

export const workExperiencePro = [
	{
		company: "Sacem",
		location: "Paris, France",
		position: "Ingénieur Logiciel – Lead dev",
		period: "Oct. 2023 – Aujourd'hui",
		techStack: [Tech.JAVA, Tech.SPRING_BOOT, Tech.AWS, Tech.DOCKER, Tech.POSTGRESQL],
		achievements: [
			{ category: "tech", text: "Architecture backend modulaire et robuste sur le coud" },
			{ category: "tech", text: "Mise en place TDD, Clean Code et Observabilité" },
			{ category: "impact", text: "Modernisation d'applications critiques d'ingestion des œuvres" },
			{ category: "impact", text: "Optimisation performances sur fortes volumétries" },
			{ category: "humain", text: "Lead technique et accompagnement des développeurs" },
			{ category: "humain", text: "Collaboration avec métiers pour cadrer les évolutions" },
		],
	},
	{
		company: "Ippon Technologies",
		location: "Paris, France",
		position: "Ingénieur Études & Développement",
		period: "Juil. 2019 – Oct. 2023",
		techStack: [Tech.JAVA, Tech.SPRING_BOOT, Tech.DOCKER, Tech.POSTGRESQL],
		achievements: [
			{ category: "tech", text: "Développement backend avec tests et clean code" },
			{ category: "impact", text: "Contribution à des solutions scalables et fiables" },
			{ category: "humain", text: "Projets clients en environnement agile" },
			{ category: "humain", text: "Appui conseil sur les choix techniques" },
		],
	},
	{
		company: "Tiime",
		location: "Paris, France",
		position: "Développeur Logiciel (Salesforce)",
		period: "Oct. 2018 – Août 2019",
		techStack: [Tech.JAVASCRIPT],
		achievements: [
			{ category: "tech", text: "Conception et intégration de workflows Salesforce" },
			{ category: "impact", text: "Automatisation de processus internes" },
			{ category: "humain", text: "Collaboration avec équipes métier pour cadrer les besoins" },
		],
	},
];

export const workExperiencePerso = [
	{
		company: "SayReps",
		location: "Paris / Remote",
		position: "",
		period: "Avr. 2025 – Aujourd'hui",
		techStack: [Tech.REACT, Tech.TYPESCRIPT, Tech.SUPABASE],
		achievements: [
			{ category: "tech", text: "Pilotage de l'application par la voix, interprété par l'IA" },
			{ category: "impact", text: "Application mobile de suivi d'entraînement sportif" },
			{ category: "impact", text: "Expérience, simple, fluide,  minimaliste adaptée à la salle de sport" },
			{ category: "impact", text: "Statistiques complètes par exercices et groupe musculaires" },
		],
	},
	{
		company: "NosDéputés ont du Talent | https://nosdeputes-talent.fr",
		location: "Paris / Remote",
		position: "",
		period: "Sep. 2024 – Avr. 2025",
		techStack: [Tech.NEXT, Tech.TYPESCRIPT, Tech.LANGCHAIN4J, Tech.POSTGRESQL, Tech.VERCEL],
		achievements: [
			{ category: "tech", text: "Synthèses de propositions et résumés de débats par IA" },
			{ category: "tech", text: "Chatbot RAG avec réponses sourcées et vérifiables" },
			{ category: "impact", text: "Plateforme citoyenne d'exploration des lois et débats" },
			{ category: "impact", text: "Analyse par groupe parlementaire" },
		],
	},
	{
		company: "Killer",
		location: "Paris / Remote",
		position: "",
		period: "Jan. 2024 – Juin 2024",
		techStack: [Tech.NEXT, Tech.TYPESCRIPT, Tech.SUPABASE, Tech.VERCEL],
		achievements: [
			{ category: "tech", text: "Digitalisation d'un jeu de société avec gestion des parties" },
			{ category: "tech", text: "Missions dynamiques générées par IA" },
			{ category: "impact", text: "Suivi en temps réel et orchestration automatisée" },
		],
	},
];
