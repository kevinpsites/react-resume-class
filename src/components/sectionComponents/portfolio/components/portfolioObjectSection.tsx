import appSettings from "../../../../appSettings.json";
import { PortfolioObject } from "../../../../types/globalTypes";

const PortfolioObjectSection = ({
  entry: { name, app, pictures },
  onClick,
}: {
  entry: PortfolioObject;
  onClick: () => void;
}) => {
  return (
    <section className={`portfolio-section`} onClick={onClick}>
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
