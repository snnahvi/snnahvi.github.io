import { useEffect, useState } from "react";

import { sections } from "../content/sections";
import "./SectionNav.css";

// Menu that stays at the top of the page and highlights the section in view
function SectionNav({ children }) {
	const [active, setActive] = useState(sections[0].id);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
				if (visible.length) setActive(visible[0].target.id);
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