import React from "react";

import Project from "./project";

import PROJECTS from "../../data/projects";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{PROJECTS.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={"/project/" + project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
