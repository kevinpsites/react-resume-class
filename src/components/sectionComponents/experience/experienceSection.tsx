import React, { useEffect, useState } from "react";
import appSettings from "../../../appSettings.json";
import { useAppContext } from "../../../appContext";
import { sectionKeys } from "../../../types/globalTypes";
import { capitalizeLetter } from "../../../utils/commonFunctions";
import ExperienceObjectSection from "./components/experienceObjectSection";

interface ExperienceSectionProps {
  title: sectionKeys;
}

const ExperienceSection = ({ title }: ExperienceSectionProps) => {
  const { resume } = useAppContext();
  return (
    <article className={`experience-section-container`}>
      <h1>{capitalizeLetter(title)}</h1>

      {title === "experience" &&
        resume?.experience.map((entry, eIndex) => (
          <ExperienceObjectSection key={eIndex} {...entry} />
        ))}

      {title === "education" &&
        resume?.education.map((entry, eIndex) => (
          <ExperienceObjectSection key={eIndex} {...entry} />
        ))}
      {title === "leadership & Service" &&
        resume?.leadershipService.map((entry, eIndex) => (
          <ExperienceObjectSection key={eIndex} {...entry} />
        ))}
    </article>
  );
};

export default ExperienceSection;
