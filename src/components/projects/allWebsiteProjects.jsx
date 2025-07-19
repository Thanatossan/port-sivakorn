import React from "react";
import WebsiteProject from "./websiteProject";
import INFO from "../../data/user";
import "./styles/allWebsiteProjects.css";

const AllWebsiteProjects = () => {
	return (
		<div className="all-website-projects-container">
			{INFO.websiteProjects.map((project, index) => (
				<div className="all-website-projects-project" key={index}>
					<WebsiteProject
						img={project.img}
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
                        facebook={project?.facebookLink}
					/>
				</div>
			))}
		</div>
	);
};

export default AllWebsiteProjects;
