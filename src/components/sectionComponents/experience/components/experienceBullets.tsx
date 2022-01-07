import React from "react";

interface ExperienceBulletsProps {
  bullets: string[];
}

const ExperienceBullets = ({ bullets }: ExperienceBulletsProps) => {
  return (
    <ul>
      {bullets.map((bullet, bIndex) => (
        <li key={bIndex}>{bullet}</li>
      ))}
    </ul>
  );
};

export default ExperienceBullets;
