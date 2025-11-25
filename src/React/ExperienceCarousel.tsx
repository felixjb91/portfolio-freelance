import { useState, useEffect } from "react";
import ExperienceCarouselDesktop from "./ExperienceCarouselDesktop";
import ExperienceCarouselMobile from "./ExperienceCarouselMobile";

interface Achievement {
	category: string;
	text: string;
}

interface Experience {
	company: string;
	location: string;
	position: string;
	period: string;
	achievements: Achievement[];
}

interface ExperienceCarouselProps {
	experiences: Experience[];
}

export default function ExperienceCarousel({ experiences }: ExperienceCarouselProps) {
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		const updateIsMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		updateIsMobile();
		window.addEventListener("resize", updateIsMobile);
		return () => window.removeEventListener("resize", updateIsMobile);
	}, []);

	if (isMobile) {
		return <ExperienceCarouselMobile experiences={experiences} />;
	}

	return <ExperienceCarouselDesktop experiences={experiences} />;
}
