import { useEffect, useState } from "react";

import { sections } from "../content/sections";
import "./SectionNav.css";

// Menu that stays at the top of the page and highlights the section in view
function SectionNav({ children }) {
	const [active, setActive] = useState(sections[0].id);

	useEffect(() => {
		// Sections currently inside the reading zone near the top of the screen
		const visible = new Set();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) visible.add(entry.target.id);
					else visible.delete(entry.target.id);
				});
				// The first visible section, in page order, is the active one
				const first = sections.find(({ id }) => visible.has(id));
				if (first) setActive(first.id);
			},
			{ rootMargin: "-80px 0px -60% 0px" },
		);

		sections.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<nav className="section-nav" aria-label="Sections">
			<ul className="section-nav__list">
				{sections.map(({ id, label }) => (
					<li key={id}>
						<a
							href={`#${id}`}
							className="section-nav__link"
							aria-current={active === id ? "true" : undefined}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
			{children}
		</nav>
	);
}

export default SectionNav;