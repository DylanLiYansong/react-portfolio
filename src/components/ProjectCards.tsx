import React from "react";
import styles from "../css/projectCard.module.css";

interface projectCardProps {
  imgSrc: string;
  title: string;
  link: string;
  pageStatus: boolean;
}

const ProjectCards: React.FC<projectCardProps> = ({
  imgSrc,
  title,
  link,
  pageStatus,
}) => {
  return (
    <div className={pageStatus ? styles.card_dark : styles.card}>
      <img className={styles.cardImg} src={imgSrc} alt={title} />
      <h3 className={pageStatus ? styles.cardTitle_dark : styles.cardTitle}>
        {title}
      </h3>
      <p className={styles.seeLive}>
        <a href={link} target="_blank" rel="noreferrer">
          SEE IT LIVE →
        </a>
      </p>
    </div>
  );
};

export default ProjectCards;
