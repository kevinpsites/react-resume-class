import React from "react";
import "./App.css";
import { AppContext } from "./appContext";
import LoadingScreen from "./basicComponents/loadingScreen";
import { useRetrieveResume } from "./hooks/useRetrieveResume";

const App = () => {
  const { loading, error, resume } = useRetrieveResume();

  return (
    <LoadingScreen loading={loading}>
      <AppContext.Provider value={{ resume }}>
        <main>
          {error && error}
          {resume && "Resume Loaded"}
        </main>
      </AppContext.Provider>
    </LoadingScreen>
  );
};

export default App;
