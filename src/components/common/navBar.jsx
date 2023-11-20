import React from "react";
import { HashLink } from 'react-router-hash-link';

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<HashLink smooth to="/#about" activeClassName="selected" activeClass="active">About</HashLink>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<HashLink smooth to="/#projects" activeClassName="selected" activeClass="active">Projects</HashLink>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<HashLink smooth to="/#publications" activeClassName="selected" activeClass="active">Publications</HashLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
