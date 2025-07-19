import React from "react";
import { Link } from "react-router-dom";

import ThemeToggle from "./themeToggle";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const scrollToSection = (sectionId) => {
		// If not on home page, navigate to home first
		if (window.location.pathname !== '/') {
			window.location.href = `/#${sectionId}`;
			return;
		}
		
		// Find and scroll to the element
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ 
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

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
								<Link to="/" onClick={scrollToTop}>Home</Link>
							</li>

							<li
								className={
									active === "websites"
										? "nav-item active"
										: "nav-item"
								}
								onClick={() => scrollToSection('website-projects')}
							>
								<span style={{ cursor: 'pointer' }}>Websites</span>
							</li>

							<li
								className={
									active === "mobile"
										? "nav-item active"
										: "nav-item"
								}
								onClick={() => scrollToSection('mobile-projects')}
							>
								<span style={{ cursor: 'pointer' }}>Mobile Apps</span>
							</li>

							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
								onClick={() => scrollToSection('other-projects')}
							>
								<span style={{ cursor: 'pointer' }}>Other Projects</span>
							</li>

							<li
								className={
									active === "education"
										? "nav-item active"
										: "nav-item"
								}
								onClick={() => scrollToSection('education')}
							>
								<span style={{ cursor: 'pointer' }}>Education</span>
							</li>

						</ul>
						
					</div>
					<div className="spacer">

					</div>
					<div className="nav-theme-toggle">
							<ThemeToggle />
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
