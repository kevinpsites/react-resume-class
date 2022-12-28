import { useState } from "react";
import { useAppContext } from "../../../appContext";
import { PortfolioObject } from "../../../types/globalTypes";
import Modal from "../../basicComponents/modal";
import PortfolioDetailDisplay from "./components/portfolioDetailDisplay";
import PortfolioObjectSection from "./components/portfolioObjectSection";

const PortfolioSection = () => {
  const { resume } = useAppContext();

  const [modalItem, setModalItem] = useState<PortfolioObject | null>(null);

  const handleCloseModal = () => {
    setModalItem(null);
  };

  const handleOpenModal = (entry: PortfolioObject) => {
    setModalItem(entry);
  };

  return (
    <section className={`portfolio-section-container`}>
      <h1>Portfolio</h1>

      <article className={`portfolio-section-list`}>
        {resume?.portfolio?.map((entry) => (
          <PortfolioObjectSection
            key={`${entry.name}-${entry.url}`}
            {...{ entry }}
            onClick={() => handleOpenModal(entry)}
          />
        ))}
      </article>

      <Modal
        open={modalItem !== null ? true : false}
        onClose={handleCloseModal}
      >
        {modalItem && <PortfolioDetailDisplay {...modalItem} />}
      </Modal>
    </section>
  );
};

export default PortfolioSection;
