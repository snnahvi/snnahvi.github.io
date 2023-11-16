import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import PROJECTS from "../data/projects";
import ProjectBodies from "../data/projectsBodies";

import "./styles/readArticle.css";

let ProjectStyle = styled.div``;

const ReadProject = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const project = PROJECTS.find((item) => item.link === slug);


	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
				<meta name="keywords" content={project.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						{/*<div className="read-article-logo">*/}
						{/*	<Logo width={46} />*/}
						{/*</div>*/}
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{project.date}
								</div>
							</div>

							<div className="title read-article-title">
								{project.title}
							</div>

							<div className="read-article-body">
								<ProjectStyle>{ProjectBodies[project.order]()}</ProjectStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadProject;
