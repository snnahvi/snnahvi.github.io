import React from "react";
import {faUserGraduate, faTrophy, } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faUserGraduate}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="umbc_logo.png"
								alt="umbc"
								className="work-image"
							/>
							<div className="work-title">University of Maryland, Baltimore County (UMBC)</div>
							<div className="work-subtitle">
								MSc, Human-Centered Computing  
								{/* MSc, Human-Centered Computing, <b>CGPA 4.0</b> */}
								<div style={{paddingTop: "5px"}}>
									{/* <FontAwesomeIcon icon={faTrophy}/> Honorary admission (Exceptional Talent) */}
								</div>
							</div>
							<div className="work-duration">Aug.2025 - May. 2027</div>
						</div>

						<div className="work">
							<img
								src="Beheshti_logo.png"
								alt="beheshti"
								className="work-image"
							/>
							<div className="work-title">Shahid Beheshti University</div>
							<div className="work-subtitle">
								BSc, Computer Engineering
								<div style={{paddingTop: "5px"}}>
									{/* <FontAwesomeIcon icon={faTrophy}/> 23<sup>rd</sup> place, national university exam (Konkur) */}
								</div>
							</div>
							<div className="work-duration">Sep.2018 - Feb.2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
