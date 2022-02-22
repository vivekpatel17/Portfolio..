import React from 'react'
import ProjectCard from './ProjectCard';

import './Project.css';

function Project() {
    const projectsData = [
        {
          title: "Portfolio",
          description: "Portfolio Website",
          // image: potfolioImg,
          tags: ["javascript", "html", "css", "react"],
          links: {
            source: "https://github.com/vivekpatel17/Portfolio",
            live: "https://vivekpatel17.github.io/Portfolio/",
          },
        },
        {
          title: "Weathe-ek",
          description: "Website to check weather via API",
          // image: weatheekImg,
          tags: ["react", "html", "css", "javascript"],
          links: {
            source: "https://github.com/vivekpatel17/Weathe-ek/",
            live: "https://vivekpatel17.github.io/Weathe-ek/",
          },
        },
        {
          title: "T-Notes",
          description: "Frontend app to keep Notes",
          // image: notesImg,
          tags: ["javascript", "html", "css", "react"],
          links: {
            source: "https://github.com/vivekpatel17/T-Notes",
            live: "https://vivekpatel17.github.io/T-Notes/",
          },
        },
        {
          title: "Drum-Kit",
          description: "Frontend page plays sounds of drums while cliking keys or by mouse",
          // image: drumsetImg,
          tags: ["html", "css", "bootstrap"],
          links: {
            source: "https://github.com/vivekpatel17/Drum-kit",
            live: "https://vivekpatel17.github.io/Drum-kit/",
          },
        },
        // {
        //   title: "Simon Game",
        //   description: "Game where player has to remember last color patten",
        //   // image: galleryImage,
        //   tags: ["html", "css", "bootstrap", "javascript"],
        //   links: {
        //     source: "https://github.com/vivekpatel17/Simon-game",
        //     live: "https://vivekpatel17.github.io/Simon-game/",
        //   },
        // },
      ];
      return (
        <div className= "projectpage">
          {projectsData.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      );
}

export default Project