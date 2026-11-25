import { journey } from "../content/journey";
import Section from "./Section";
import "./Journey.css";

// Timeline of how you became a researcher, from content/journey.js
function Journey() {
	return (
		<Section id="journey" title="How I became a researcher">
			<ol className="journey">
				{journey.map((chapter) => (
					<li key={chapter.title} className={chapter.isNext ? "journey__item journey__item--next" : "journey__item"}>
						<span className="journey__dot" aria-hidden="true" />
						<p className="journey__label">
							{chapter.label}
							<span className="journey__when">{chapter.when}</span>
						</p>
						<h3 className="journey__title">{chapter.title}</h3>
						<p className="journey__text">{chapter.text}</p>
					</li>
				))}
			</ol>
		</Section>
	);
}

export default Journey;