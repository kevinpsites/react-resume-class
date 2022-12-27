import appSettings from "../../../../appSettings.json";
import { PortfolioObject } from "../../../../types/globalTypes";

const PortfolioObjectSection = ({
  name,
  projectRole,
  url,
  skills,
  app,
  pictures,
  description,
}: PortfolioObject) => {
  return (
    <section className={`portfolio-section`}>
      {app || pictures.length > 0 ? (
        <img
          src={`${appSettings.publicFilePaths.image}/${
            appSettings.publicFilePaths.portfolio
          }/${app ?? pictures[0]}`}
          alt={name}
          className={`header-img`}
        />
      ) : (
        <div className={`header-img`}></div>
      )}

      <span className="h5">{name}</span>
    </section>
  );
};

export default PortfolioObjectSection;
