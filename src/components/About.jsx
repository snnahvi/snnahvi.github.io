import { profile } from "../content/profile";
import Section from "./Section";

// Short introduction, from the "about" text in content/profile.js
function About() {
	return (
		<Section id="about" title="About me">
			<div className="section__quote">
				{profile.about.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</Section>
	);
}

export default About;