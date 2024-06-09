import React from 'react';
import styles from '../css/skills.module.css'

interface SkillProps {
	imgSrc: string;
	name: string;
}

const SkillCard: React.FC<SkillProps> = ({imgSrc, name}) => {
	return (
		<div className={styles.skillCard}>
			<img className={styles.imgCardImg} src={imgSrc} alt={name} />
			<p>{name}</p>
		</div>
	)
}

export default SkillCard