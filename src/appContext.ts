import { createContext, useContext } from "react";
import { ResumeObject } from "./types/globalTypes";

export interface MainAppContext {
  resume: ResumeObject | undefined;
}

export const AppContext = createContext<MainAppContext>({
  resume: {
    personal: {
      name: "",
      about: "",
      resume: "",
      title: "",
      aboutMeImage: "",
      adjectives: [],
    },
    education: [],
    experience: [],
    leadershipService: [],
    achievements: [],
    skills: [],
    portfolio: [],
  },
});
export const useAppContext = () => useContext(AppContext);
