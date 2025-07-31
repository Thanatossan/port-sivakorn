import React, { useState } from "react";
import { Link } from "react-router-dom";

import ThemeToggle from "./themeToggle";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

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
		
		// Close mobile menu after navigation
		closeMobileMenu();
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		
		// Close mobile menu after navigation
		closeMobileMenu();
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						{/* Desktop Navigation */}
						<ul className="nav-list desktop-nav">
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
								<span style={{ cursor: 'pointer' }}>Project</span>
							</li>

							<li
								className={
									active === "activities"
										? "nav-item active"
										: "nav-item"
								}
								onClick={() => scrollToSection('activities')}
							>
								<span style={{ cursor: 'pointer' }}>Activities</span>
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

							<li
								className={
									active === "resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/resume">Resume</Link>
							</li>
						</ul>

						{/* Mobile Hamburger Button */}
						<button 
							className="mobile-menu-toggle"
							onClick={toggleMobileMenu}
							aria-label="Toggle mobile menu"
						>
							<span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
							<span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
							<span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
						</button>
					</div>
					
					<div className="spacer">
					</div>
					
					<div className="nav-theme-toggle">
						<ThemeToggle />
					</div>
				</nav>

				{/* Mobile Navigation Menu */}
				<div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
					<div className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
						<ul className="mobile-nav-list">
							<li
								className={
									active === "home"
										? "mobile-nav-item active"
										: "mobile-nav-item"
								}
							>
								<Link to="/" onClick={scrollToTop}>Home</Link>
							</li>

							<li
								className={
									active === "websites"
										? "mobile-nav-item active"
										: "mobile-nav-item"
								}
								onClick={() => scrollToSection('website-projects')}
							>
								<span style={{ cursor: 'pointer' }}>Project</span>
							</li>

							<li
								className={
									active === "activities"
										? "mobile-nav-item active"
										: "mobile-nav-item"
								}
								onClick={() => scrollToSection('activities')}
							>
								<span style={{ cursor: 'pointer' }}>Activities</span>
							</li>

							<li
								className={
									active === "education"
										? "mobile-nav-item active"
										: "mobile-nav-item"
								}
								onClick={() => scrollToSection('education')}
							>
								<span style={{ cursor: 'pointer' }}>Education</span>
							</li>

							<li
								className={
									active === "resume"
										? "mobile-nav-item active"
										: "mobile-nav-item"
								}
							>
								<Link to="/resume" onClick={closeMobileMenu}>Resume</Link>
							</li>

							<li className="mobile-nav-item mobile-theme-toggle">
								<ThemeToggle />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
