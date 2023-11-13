import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const nameElement = (
		<div className="logo">
			{INFO.main.name}
		</div>
	);

	return (
		<React.Fragment>
			{link ? <Link to="/" className="logo-link">{nameElement}</Link> : nameElement}
		</React.Fragment>
	);
};

export default Logo;
