import React from "react";
import { SkillObject } from "../../../types/globalTypes";
import { ReactComponent as StarIcon } from "../../../icons/star.svg";

const SkillBullet = ({ skill, rating }: SkillObject) => {
  return (
    <li className={`skill-bullet`}>
      <span>{skill}</span>
      {/* <span>
        {[...Array(rating)].map((r, rIndex) => (
          <StarIcon key={rIndex} />
        ))}
      </span> */}
    </li>
  );
};

export default SkillBullet;
