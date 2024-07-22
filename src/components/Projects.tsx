import React from "react";
import ProjectCards from "./ProjectCards";
import styles from "../css/projects.module.css";
import FFP from "../assets/images/FFP.png";
import aupairs from "../assets/images/99aupairs.png";
import calculator from "../assets/images/calculator.png";
import furnitureApp from "../assets/images/furniture-app.jpg";
import eShop from "../assets/images/e-shop.jpg";

import weather from "../assets/images/weather-app.png";
import { appState } from "../App";
const projectList = [
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
    image: aupairs,
    title: "99Aupairs",
    link: "https://99aupairs.au/",
  },
  {
    image: furnitureApp,
    title: "Furniture-E-commerce-app (React Native + backend + unit tests)",
    link: "https://github.com/yuntianhe2abc/Funiture-app-React-Native",
  },
  {
    image: eShop,
    title: "E-Shop (React Native)",
    link: "https://github.com/yuntianhe2abc/E-Shop-Mobile",
  },
  {
    image: calculator,
    title: "Serviceability Calculator (CI/CD - In progress)",
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
