import React from "react";

import Project from "./project";

import user from "../../data/user";

import "./styles/allProjects.css";

const SubProject = () => {
	return (
		<div className="all-projects-container">
			{user.sideProject.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						img={project.img}
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default SubProject;
