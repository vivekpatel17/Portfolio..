import React from "react";

import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <div className="projectcard">
            {/* <div className= "projectcard__img">
            <img src={props.project.image} alt="project image" />
          </div> */}

            <div className="projectcard__content">
                <div className="content__about">
                    <h3>{props.project.title}</h3>
                    <p>{props.project.description}</p>

                    <div className="about__tags">
                        {props.project.tags.map((tag) => {
                            return <div>{tag}</div>;
                        })}
                    </div>
                </div>

                <div className="content__links">
                    <a href={props.project.links.source}>Source Code</a>
                    <a href={props.project.links.live}>Live Demo</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
