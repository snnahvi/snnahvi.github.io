import ProjectCarousel from "./ProjectCarousel";
import ResearchMap from "./ResearchMap";
import Section from "./Section";

// Project cards, then the map of how they connect
function Projects() {
	return (
		<Section id="projects" title="Recent projects">
			<ProjectCarousel />
			<ResearchMap />
		</Section>
	);
}

export default Projects;