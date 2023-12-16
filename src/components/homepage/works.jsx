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
								src="sharif.png"
								alt="sharif"
								className="work-image"
							/>
							<div className="work-title">Sharif University of Technology</div>
							<div className="work-subtitle">
								MSc, Electrical Engineering, <b>CGPA 4.0</b>
								<div style={{paddingTop: "5px"}}>
									<FontAwesomeIcon icon={faTrophy}/> Honorary admission (Exceptional Talent)
								</div>
							</div>
							<div className="work-duration">2018 - 2021</div>
						</div>

						<div className="work">
							<img
								src="sharif.png"
								alt="sharif"
								className="work-image"
							/>
							<div className="work-title">Sharif University of Technology</div>
							<div className="work-subtitle">
								BSc, Electrical Engineering, <b>CGPA 3.96</b>
								<div style={{paddingTop: "5px"}}>
									<FontAwesomeIcon icon={faTrophy}/> 23<sup>rd</sup> place, national university exam (Konkur)
								</div>
							</div>
							<div className="work-duration">2014 - 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
