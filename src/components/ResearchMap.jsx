import { useState } from "react";

import { projects, themes } from "../content/projects";
import "./ResearchMap.css";

// Only projects linked to at least one theme appear on the map
const mapped = projects.filter((project) => project.themes.length > 0);
const links = mapped.flatMap((project) => project.themes.map((theme) => [project.title, theme]));

// Diagram sizes
const WIDTH = 700;
const BOX_WIDTH = 290;
const BOX_HEIGHT = 58;
const PILL_X = 480;
const PILL_WIDTH = 220;
const PILL_HEIGHT = 46;
const boxY = (i) => 10 + i * 78;
const pillY = (i) => 30 + i * 92;

// Interactive diagram showing which themes each project speaks to.
// Hover over or select a project or theme to highlight its links.
// On phones it becomes a plain list grouped by theme.
function ResearchMap() {
	const [pinned, setPinned] = useState(null);
	const [hovered, setHovered] = useState(null);
	const selected = hovered || pinned;

	const isLinked = ([project, theme]) => selected === project || selected === theme;
	const related = new Set(selected ? links.filter(isLinked).flat() : []);
	const stateOf = (id) => {
		if (!selected) return "";
		return related.has(id) ? " is-on" : " is-dim";
	};

	const nodeProps = (id, label) => ({
		tabIndex: 0,
		role: "button",
		"aria-label": label,
		"aria-pressed": pinned === id,
		onClick: () => setPinned((current) => (current === id ? null : id)),
		onKeyDown: (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				setPinned((current) => (current === id ? null : id));
			}
		},
		onMouseEnter: () => setHovered(id),
		onMouseLeave: () => setHovered(null),
	});

	const height = Math.max(boxY(mapped.length), pillY(themes.length));

	return (
		<figure className="research-map">
			<figcaption className="research-map__caption">
				Four threads run through my work.
				<span className="research-map__hint"> Hover over or select a project or theme to see how they connect.</span>
			</figcaption>

			<svg className="research-map__diagram" viewBox={`0 0 ${WIDTH} ${height}`} role="group" aria-label="Diagram linking my projects to research themes">
				{links.map(([project, theme]) => {
					const y1 = boxY(mapped.findIndex((p) => p.title === project)) + BOX_HEIGHT / 2;
					const y2 = pillY(themes.findIndex((t) => t.id === theme)) + PILL_HEIGHT / 2;
					const middle = (BOX_WIDTH + PILL_X) / 2;
					const state = selected ? (isLinked([project, theme]) ? " is-on" : " is-dim") : "";
					return (
						<path
							key={project + theme}
							className={"research-map__link" + state}
							d={`M${BOX_WIDTH} ${y1} C${middle} ${y1}, ${middle} ${y2}, ${PILL_X} ${y2}`}
						/>
					);
				})}

				{mapped.map((project, i) => (
					<g
						key={project.title}
						className={"research-map__project" + stateOf(project.title)}
						transform={`translate(0 ${boxY(i)})`}
						{...nodeProps(project.title, `${project.title}, ${project.when}`)}
					>
						<rect width={BOX_WIDTH} height={BOX_HEIGHT} rx="8" />
						<text x="16" y="25" className="research-map__name">
							{project.short}
						</text>
						<text x="16" y="45" className="research-map__meta">
							{project.when}, {project.where.split(",").pop().trim()}
						</text>
					</g>
				))}

				{themes.map((theme, i) => (
					<g
						key={theme.id}
						className={"research-map__theme" + stateOf(theme.id)}
						transform={`translate(${PILL_X} ${pillY(i)})`}
						{...nodeProps(theme.id, theme.label)}
					>
						<rect width={PILL_WIDTH} height={PILL_HEIGHT} rx={PILL_HEIGHT / 2} />
						<text x={PILL_WIDTH / 2} y="29" textAnchor="middle">
							{theme.label}
						</text>
					</g>
				))}
			</svg>

			<div className="research-map__list">
				{themes.map((theme) => (
					<div key={theme.id} className="research-map__group">
						<h4>{theme.label}</h4>
						<ul>
							{mapped
								.filter((project) => project.themes.includes(theme.id))
								.map((project) => (
									<li key={project.title}>
										{project.short}
										<span>{project.when}</span>
									</li>
								))}
						</ul>
					</div>
				))}
			</div>
		</figure>
	);
}

export default ResearchMap;