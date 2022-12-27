import { useAppContext } from "../../../appContext";
import PortfolioObjectSection from "./components/portfolioObjectSection";

const PortfolioSection = () => {
  const { resume } = useAppContext();

  return (
    <section className={`portfolio-section-container`}>
      <h1>Portfolio</h1>

      <article className={`portfolio-section-list`}>
        {resume?.portfolio?.map((entry) => (
          <PortfolioObjectSection key={entry.name} {...entry} />
        ))}
      </article>
    </section>
  );
};

export default PortfolioSection;
