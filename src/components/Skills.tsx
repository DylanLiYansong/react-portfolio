import React from "react";
import styles from "../css/skills.module.css";
import SkillCard from "./SkillCard";
import sass from "../assets/images/sass.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import mongodb from "../assets/images/mongodb.png";
import ts from "../assets/images/ts.png";
import bootstrap from "../assets/images/bootstrap.png";
import aws from "../assets/images/aws.png";
import docker from "../assets/images/docker.png";
import { appState } from "../App";

const projectList = [
  { imgSrc: react, name: "React" },
  { imgSrc: node, name: "NodeJs" },
  { imgSrc: mongodb, name: "MongoDB" },
  { imgSrc: ts, name: "TypeScript" },
  // {imgSrc: js, name: 'JavaScript'},
  { imgSrc: aws, name: "AWS" },
  { imgSrc: docker, name: "Docker" },
  { imgSrc: sass, name: "Sass" },
  { imgSrc: bootstrap, name: "Bootstrap" },
];

const Skills: React.FC<appState> = ({ pageStatus }) => {
  return (
    <div className={pageStatus ? styles.skills_dark : styles.skills}>
      <h2 className={pageStatus ? styles.skillsTitle_dark : styles.skillsTitle}>
        SKILLS
      </h2>
      <div className={styles.skillIconList}>
        {projectList.map((d) => (
          <SkillCard imgSrc={d.imgSrc} name={d.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
