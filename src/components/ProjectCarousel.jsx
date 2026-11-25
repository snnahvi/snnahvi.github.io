import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { projects } from "../content/projects";
import "./ProjectCarousel.css";

// Row of project cards that scrolls sideways.
// Cards with a "slug" link to that project's page.
function ProjectCarousel() {
	const trackRef = useRef(null);

	const scroll = (direction) => {
		const track = trackRef.current;
		track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
	};

	return (
		<div className="carousel">
			<div className="carousel__buttons">
				<button type="button" onClick={() => scroll(-1)} aria-label="Previous projects">
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<button type="button" onClick={() => scroll(1)} aria-label="Next projects">
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>

			<ul className="carousel__track" ref={trackRef}>
				{projects.map((project) => {
					const card = (
						<>
							<img className="carousel__image" src={project.image} alt={project.alt} />
							<span className="carousel__tag">{project.tag}</span>
							<h3 className="carousel__title">{project.title}</h3>
							<p className="carousel__meta">
								{project.where}, {project.when}
							</p>
						</>
					);

					return (
						<li key={project.title} className="carousel__card">
							{project.slug ? (
								<a className="carousel__link" href={`/projects/${project.slug}`}>
									{card}
								</a>
							) : (
								card
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ProjectCarousel;