import React from "react";
import { useAppContext } from "../../appContext";
import { SocialMediaList } from "../../types/globalTypes";
import { ReactComponent as Github } from "../../icons/github.svg";
import { ReactComponent as Linkedin } from "../../icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../icons/twitter.svg";
import { ReactComponent as Vimeo } from "../../icons/vimeo.svg";
import { ReactComponent as Youtube } from "../../icons/youtube.svg";

const FooterSection = () => {
  const { resume } = useAppContext();
  const { phone, email, social } = resume?.contact ?? {
    phone: "",
    email: "",
    social: [],
  };

  const decideIcon = (icon: SocialMediaList) => {
    let newIcon = <div></div>;
    switch (icon) {
      case "Linkedin":
        newIcon = <Linkedin />;
        break;

      case "Github":
        newIcon = <Github />;
        break;

      case "Vimeo":
        newIcon = <Vimeo />;
        break;

      case "Youtube":
        newIcon = <Youtube />;
        break;

      case "Twitter":
        newIcon = <Twitter />;
        break;

      default:
        break;
    }

    return newIcon;
  };

  return (
    <footer className={`footer-section-container`}>
      <section className={`footer-section`}>
        <section className={`footer-title-container`}>
          <span className={`footer-title h3`}>{resume?.personal?.name}</span>

          {phone && (
            <div className={`footer-phone`}>
              <span>Phone:</span>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          )}
          {email && (
            <div className={`footer-email`}>
              <span>Email:</span>
              <a href={`mailto:${email}`} target={"_blank"} rel="noreferrer">
                {email}
              </a>
            </div>
          )}
        </section>
        <section className={`footer-social-container`}>
          <ul>
            {social?.map((item) => (
              <li key={item.type}>
                <a href={item.url} target={"_blank"} rel="noreferrer">
                  {decideIcon(item.type)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default FooterSection;
