import React from "react";
import { useAppContext } from "../../appContext";
import ExperienceBullets from "./experience/components/experienceBullets";

const AchievementSection = () => {
  const { resume } = useAppContext();

  return (
    <article className={`achievement-section-container`}>
      <h1>Achievements</h1>
      <section>
        <ExperienceBullets bullets={resume?.achievements ?? []} />
      </section>
    </article>
  );
};

export default AchievementSection;
