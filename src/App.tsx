import React from "react";
import "./App.css";
import { AppContext } from "./appContext";
import LoadingScreen from "./components/basicComponents/loadingScreen";
import AboutSection from "./components/sectionComponents/aboutSection";
import AchievementSection from "./components/sectionComponents/achievementSection";
import ExperienceSection from "./components/sectionComponents/experience/experienceSection";
import PortfolioSection from "./components/sectionComponents/portfolio/portfolioSection";
import SkillsSection from "./components/sectionComponents/skills/skillsSection";
import { useRetrieveResume } from "./hooks/useRetrieveResume";

const App = () => {
  const { loading, error, resume } = useRetrieveResume();

  return (
    <LoadingScreen loading={loading}>
      <AppContext.Provider value={{ resume }}>
        <main>
          {error && error}
          {resume && (
            <>
              <AboutSection />
              {resume.experience.length > 0 && (
                <ExperienceSection title="experience" />
              )}

              {resume.education.length > 0 && (
                <ExperienceSection title="education" />
              )}

              {resume.leadershipService.length > 0 && (
                <ExperienceSection title="leadership & Service" />
              )}

              {resume.achievements.length > 0 && <AchievementSection />}
              {resume.skills.length > 0 && <SkillsSection />}

              {resume.portfolio.length > 0 && <PortfolioSection />}
            </>
          )}
        </main>
      </AppContext.Provider>
    </LoadingScreen>
  );
};

export default App;
