import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ais.jpeg"
								alt="ais"
								className="work-image"
							/>
							<div className="work-title">
								AIS
							</div>
							<div className="work-subtitle">
								Mobile Developer ( Contract )
							</div>
							<div className="work-duration">2025- Present</div>
						</div>
						<div className="work">
							<img
								src="./futureskill_logo.jpeg"
								alt="futureskill"
								className="work-image"
							/>
							<div className="work-title">
								Likeme X Enterprise ( FutureSkill )
							</div>
							<div className="work-subtitle">
								Mobile Developer ( Full-time )
							</div>
							<div className="work-duration">2024- 2025</div>
						</div>

						<div className="work">
							<img
								src="./wisdomage.png"
								alt="wisdomage"
								className="work-image"
							/>
							<div className="work-title">
								Wisdomage Enterprise
							</div>
							<div className="work-subtitle">
								Mobile Developer ( Part-time )
							</div>
							<div className="work-duration">2023 - 2025</div>
						</div>
						<div className="work">
							<img
								src="./chiang_mai.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Chaing Mai University
							</div>
							<div className="work-subtitle">
								Research Assistant ( Software Engineer )
							</div>
							<div className="work-duration">2021 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
