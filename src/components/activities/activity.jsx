import React from "react";
import "./styles/activity.css";

const Activity = (props) => {
	const { img, title } = props;

	return (
		<div className="activity">
			<div className="activity-container">
				<div className="activity-image">
					<img src={img} alt={title} />
				</div>
			</div>
		</div>
	);
};

export default Activity;
