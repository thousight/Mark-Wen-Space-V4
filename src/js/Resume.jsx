import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { Timeline, ProgressBar } from './components';

import suitcase from '../img/icons/suitcase.svg';
import graduationCap from '../img/icons/graduationCap.svg';
import code from '../img/icons/code.svg';


/**
* Resume page rendering data dynamically
*/
class Resume extends Component {
	render() {
		return (
			<div className="resume">
				<div className="resume-title banner-title">
					<h1>Resume</h1>
				</div>

				{/* Experience */}
				<div className="resume-content container">
					<div className="resume-subtitle">
						<img className="resume-subtitle-img" alt="Experience" src={suitcase} />
						<h3>Experience</h3>
					</div>
					<Timeline data={this.props.expContent} />

					{/* Education */}
					<div className="resume-subtitle">
						<img className="resume-subtitle-img" alt="Experience" src={graduationCap} />
						<h3>Education</h3>
					</div>
					<Timeline data={this.props.eduContent} />

					{/* Skills */}
					<div className="resume-subtitle">
						<img className="resume-subtitle-img" alt="Experience" src={code} />
						<h3>Skills</h3>
					</div>
					<Row>
						<Col xs={12} md={10} mdOffset={1}>
							<div className="card resume-skills-card">
								{this.props.skillsContent.sort((a, b) => {return a.order - b.order}).map(category => {
									return (
										<div key={category._id}>
											<h4 className="resume-skill-category-title">
												{category.skillsCat}
											</h4>
											<Row>
												{category.skill.map(skill => {
													return (
														<Col key={skill.skillName} xs={12} sm={4}>
															<h5>{skill.skillName}</h5>
															<ProgressBar percentage={skill.percent} color={category.color} />
														</Col>
													)
												})}

											</Row>
										</div>
									)
								})}
							</div>
						</Col>
					</Row>

				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		eduContent: state.staticContent.eduContent,
		expContent: state.staticContent.expContent,
		skillsContent: state.staticContent.skillsContent
	}
}

export default connect(mapStateToProps)(Resume);