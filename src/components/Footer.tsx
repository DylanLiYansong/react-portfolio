import React from "react";
import styles from "../css/footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSocial}>
        <a
          href="https://github.com/DylanLiYansong?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={styles.footerIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/dylan-li-111023226/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={styles.footerIcon} />
        </a>
      </div>
      <p>Copyright © Dylan Li</p>
    </div>
  );
};

export default Footer;
