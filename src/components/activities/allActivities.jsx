import React from "react";
import Activity from "./activity";
import INFO from "../../data/user";
import "./styles/allActivities.css";

const AllActivities = () => {
	return (
		<div className="all-activities-container">
			{INFO.activities.map((activity, index) => (
				<div className="all-activities-activity" key={index}>
					<Activity
						img={activity.img}
						title={activity.title}
					/>
				</div>
			))}
		</div>
	);
};

export default AllActivities;
