import React, { MouseEvent, useEffect, useState } from "react";
import appSettings from "../../appSettings.json";

interface CarouselProps {
  imageList: string[];
}

const Carousel = ({ imageList }: CarouselProps) => {
  const [activeImage, setActiveImage] = useState("");

  const handleClickBullet = (e: MouseEvent<HTMLLIElement>) => {
    setActiveImage(e.currentTarget.id);
  };

  useEffect(() => {
    if (activeImage) {
      document
        .getElementById(`${activeImage}-img`)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeImage]);

  return (
    <section className={`carousel-container`}>
      <ul className={`carousel-imgs`}>
        {imageList.map((image) => (
          <li
            className={`carousel-img ${
              image === activeImage ? "active-img" : ""
            }`}
            id={`${image}-img`}
          >
            <img
              key={image}
              src={`${appSettings.publicFilePaths.image}/${appSettings.publicFilePaths.portfolio}/${image}`}
              alt={image}
            />
          </li>
        ))}
      </ul>
      <ul className={`carousel-bullets`}>
        {imageList.map((image) => (
          <li
            key={`${image}-bullet`}
            className={`carousel-bullet`}
            id={image}
            onClick={handleClickBullet}
          ></li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
