import React from "react";
import "./App.css";
import { AppContext } from "./appContext";
import LoadingScreen from "./components/basicComponents/loadingScreen";
import AboutSection from "./components/sectionComponents/aboutSection";
import { useRetrieveResume } from "./hooks/useRetrieveResume";

const App = () => {
  const { loading, error, resume } = useRetrieveResume();

  return (
    <LoadingScreen loading={loading}>
      <AppContext.Provider value={{ resume }}>
        <main>
          {error && error}
          {resume && <AboutSection />}
        </main>
      </AppContext.Provider>
    </LoadingScreen>
  );
};

export default App;
