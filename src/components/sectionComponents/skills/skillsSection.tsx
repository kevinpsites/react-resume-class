import React from "react";
import { useAppContext } from "../../../appContext";
import SkillBullet from "./skillBullet";

const SkillsSection = () => {
  const { resume } = useAppContext();

  return (
    <article className={`skills-section-container`}>
      <h1>Skills</h1>
      <ul>
        {resume?.skills.map((skill, sIndex) => (
          <SkillBullet key={sIndex} {...skill} />
        ))}
      </ul>
    </article>
  );
};

export default SkillsSection;
