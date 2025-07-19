import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles/websiteProject.css";

const WebsiteProject = (props) => {
	const { img, logo, title, description, linkText, link, facebook } = props;

	const handleClick = () => {
		window.open(link, '_blank');
	};

	return (
		<div className="website-project">
			<div className="website-project-container">
				<div className="website-project-image" onClick={handleClick}>
					<img src={img || logo} alt={title} />
					<div className="website-project-overlay">
						<div className="website-project-overlay-content">
							<FontAwesomeIcon icon={faExternalLinkAlt} />
							<span>View Website</span>
						</div>
					</div>
				</div>
				<div className="website-project-content">
					<div className="website-project-title">{title}</div>
					<div className="website-project-description">{description}</div>
					{linkText && (
						<div className="website-project-link" onClick={handleClick}>
							<FontAwesomeIcon icon={faExternalLinkAlt} />
							<span>{linkText}</span>
						</div>
					)}
                    <div style={{ marginTop: '10px' }}></div>
                        {facebook && (
                            <div className="website-project-link" onClick={() => window.open(facebook, '_blank')}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                <span>Facebook page</span>
                            </div>
                        )}
				</div>
			</div>
		</div>
	);
};

export default WebsiteProject;
