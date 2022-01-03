import { useEffect, useState } from "react";
import { retrieveResume_API } from "../apis/apis";
import { ResumeObject } from "../types/globalTypes";

export const useRetrieveResume = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [resume, setResume] = useState<ResumeObject>();

  const Init = async () => {
    let resumeObject = await retrieveResume_API();
    if (resumeObject.error) {
      setError("Error Getting Resume.... Please Refresh the Page");
    } else {
      setResume(resumeObject.resume);
    }
    setLoading(false);
  };

  useEffect(() => {
    Init();
  }, []);

  return {
    loading,
    error,
    resume,
  };
};
