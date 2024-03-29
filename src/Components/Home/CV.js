import React, { Component } from "react";
import Slide from "react-reveal";

class CV extends Component {
  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>
            {education.description.reduce(
              (paragraph, line) => [paragraph, <br />, line])}
          </p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          {work.positions.map(function (position) {
            return (
              <div key={position.title}>
                <p className="info">
                  {position.title}
                  <span>&bull;</span> <em className="date">{position.years}</em>
                </p>
                <p>{position.description.reduce((paragraph, line) => [paragraph, <br />, line])}</p>
              </div>
            )
          })}
        </div>
      );
    });

    const skills = this.props.data.skills.map(function (skills) {
      return (
        <div key={skills.skill} className="six columns">
          <h3>{skills.skill}</h3>
          {skills.value.reduce((paragraph, line) => [paragraph, <br />, line])}
        </div>
      );
    });

    return (
      <section id="cv">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">{skills}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default CV;
