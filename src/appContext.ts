import { createContext, useContext } from "react";
import { ResumeObject } from "./types/globalTypes";

export interface MainAppContext {
  resume: ResumeObject | undefined;
}

export const AppContext = createContext<MainAppContext>({
  resume: {
    personal: { name: "", about: "", resume: "", title: "", aboutMeImage: "" },
  },
});
export const useAppContext = () => useContext(AppContext);
