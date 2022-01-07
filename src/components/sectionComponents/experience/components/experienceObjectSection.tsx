import React from "react";
import appSettings from "../../../../appSettings.json";
import { ExperienceObject } from "../../../../types/globalTypes";
import ExperienceBullets from "./experienceBullets";

const ExperienceObjectSection = ({
  title,
  organization,
  date,
  bullets,
  location,
}: ExperienceObject) => {
  return (
    <section className={`experience-section`}>
      <img
        src={`${appSettings.publicFilePaths.image}/${appSettings.publicFilePaths.experience}/${organization.image}`}
        alt={organization.name}
      />
      <h2>{organization.name}</h2>
      <h3>{title}</h3>
      <p className={`experience-date`}>
        {date.start} - {date.end}
      </p>
      <p className={`experience-location`}>{location}</p>
      <ExperienceBullets bullets={bullets} />
    </section>
  );
};

export default ExperienceObjectSection;
