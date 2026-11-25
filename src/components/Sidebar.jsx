import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { profile } from "../content/profile";
import CopyEmail from "./CopyEmail";
import NetworkBackground from "./NetworkBackground";
import "./Sidebar.css";

const LINKS = [
	{ label: "Google Scholar", href: profile.links.scholar, icon: faGraduationCap },
	{ label: "LinkedIn", href: profile.links.linkedin, icon: faLinkedin },
	{ label: "GitHub", href: profile.links.github, icon: faGithub },
];

// Navy sidebar: photo, name, links, email, and research areas.
// On phones it becomes a compact header at the top of the page.
function Sidebar() {
	return (
		<aside className="sidebar">
			<NetworkBackground />

			<div className="sidebar__inner">
				<div className="sidebar__identity">
					<img className="sidebar__photo" src={profile.photo} alt={profile.name} />
					<div>
						<h1 className="sidebar__name">{profile.name}</h1>
						<p className="sidebar__role">
							{profile.role} @ {profile.affiliation}
						</p>
					</div>
				</div>

				<ul className="sidebar__links">
					<li>
						<a className="sidebar__icon sidebar__icon--cv" href={profile.cv} target="_blank" rel="noreferrer">
							CV
						</a>
					</li>
					{LINKS.map((link) => (
						<li key={link.label}>
							<a className="sidebar__icon" href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
								<FontAwesomeIcon icon={link.icon} />
							</a>
						</li>
					))}
					<li>
						<a className="sidebar__icon" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</li>
				</ul>

				<CopyEmail email={profile.email} />

				<h2 className="sidebar__label">Areas of research</h2>
				<ul className="sidebar__interests">
					{profile.interests.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>

				<p className="sidebar__footer">© 2026 {profile.fullName}</p>
			</div>
		</aside>
	);
}

export default Sidebar;