import React, { useEffect, useState } from "react";
import appSettings from "../../appSettings.json";
import { useAppContext } from "../../appContext";

const AboutSection = () => {
  const { resume } = useAppContext();
  const [words, setWords] = useState<string[]>([]);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [blinkEnd, setBlinkEnd] = useState(false);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (resume) {
      setWords([
        `Hi I'm ${resume.personal.name}`,
        ...resume.personal.adjectives.map((x) => `I'm a ${x.adjective}`),
        `Hi I'm ${resume.personal.name}`,
      ]);
    }
  }, [resume]);

  useEffect(() => {
    if (index === words.length) {
      setBlinkEnd(true);
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words.length]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      if (!blinkEnd) {
        setBlink((prev) => !prev);
      }
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink, blinkEnd]);

  return (
    <article className={`about-section-container`}>
      <section>
        <h1>
          {words.length <= 0
            ? `Hi I'm ${resume?.personal.name}`
            : `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
        <h2>{resume?.personal.title}</h2>
        <p>{resume?.personal.about}</p>
      </section>
      <section>
        <img
          src={`${appSettings.publicFilePaths.image}/${appSettings.publicFilePaths.about}/${resume?.personal.aboutMeImage}`}
          alt={resume?.personal.name}
        ></img>
      </section>
    </article>
  );
};

export default AboutSection;
