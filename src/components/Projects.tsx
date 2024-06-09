import React from "react";
import ProjectCards from "./ProjectCards";
import styles from "../css/projects.module.css";
import FFP from "../assets/images/FFP.png";
import aupairs from "../assets/images/99aupairs.png";
import calculator from "../assets/images/calculator.png";
// import besttraveller from '../assets/images/besttraveller.png'
import weather from "../assets/images/weather-app.png";
import { appState } from "../App";
const projectList = [
  // { image: besttraveller, title: 'Best Traveller', link: 'http://bestravellers.net/' },
  {
    image: FFP,
    title: "Fresh Farm Picking (Cyberay)",
    link: "https://www.freshfarmpicking.com.au/",
  },
  {
    image: weather,
    title: "DL Weather",
    link: "https://dylanliyansong.github.io/Weather-Forest-App//",
  },
  {
    image: aupairs,
    title: "99Aupairs",
    link: "https://99aupairs.au/",
  },
  {
    image: calculator,
    title: "Serviceability Calculator (In progress)",
    link:
      "https://dylanliyansong.github.io/FreedomLend-home-lending-service-calculator/",
  },
];

const Projects: React.FC<appState> = ({ pageStatus }) => {
  return (
    <div className={pageStatus ? styles.projects_dark : styles.projects}>
      <h2
        className={
          pageStatus ? styles.projectsTitle_dark : styles.projectsTitle
        }
      >
        PROJECTS
      </h2>
      <div className={styles.projectList}>
        {projectList.map((d) => (
          <ProjectCards
            imgSrc={d.image}
            title={d.title}
            link={d.link}
            pageStatus={pageStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
