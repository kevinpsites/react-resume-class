import { useEffect, useRef } from "react";
import appSettings from "../../../../appSettings.json";
import { PortfolioObject } from "../../../../types/globalTypes";
import Carousel from "../../../basicComponents/carousel";
import SkillBullet from "../../skills/skillBullet";

const PortfolioDetailDisplay = ({
  name,
  projectRole,
  url,
  skills,
  app,
  pictures,
  description,
}: PortfolioObject) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    headerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className={`portfolio-details`}>
      <div className={`portfolio-header`} ref={headerRef}>
        {pictures.length > 0 ? (
          <img
            src={`${appSettings.publicFilePaths.image}/${appSettings.publicFilePaths.portfolio}/${pictures[0]}`}
            alt={name}
            className={`header-img`}
          />
        ) : (
          <div className={`header-img`}></div>
        )}
        <span className={`header-role`}>{projectRole}</span>
      </div>

      <div className={`portfolio-title`}>
        {app ? (
          <img
            className={`app-img`}
            src={`${appSettings.publicFilePaths.image}/${appSettings.publicFilePaths.portfolio}/${app}`}
            alt={name}
          ></img>
        ) : (
          <div className={`app-img`}></div>
        )}
        <h1>{name}</h1>
        <div className={`url-link`}>
          <a href={url} target={`_blank`}>
            Visit
          </a>
        </div>
      </div>

      <hr />

      <p className={`portfolio-description`}>{description}</p>

      <div className={`portfolio-image-carousel`}>
        <Carousel imageList={pictures.slice(1)} />
      </div>

      <ul className={`portfolio-skills`}>
        {skills?.map((skill) => (
          <SkillBullet key={skill} skill={skill} rating={10} />
        ))}
      </ul>
    </section>
  );
};

export default PortfolioDetailDisplay;
