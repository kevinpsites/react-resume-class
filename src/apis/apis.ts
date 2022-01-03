import appSettings from "../appSettings.json";
import { ResumeObject } from "../types/globalTypes";
import { APIResponse, HTTPMethod, HTTTPBodyType } from "./apiTypes";

export const fetchRequest = async <T>(
  endpoint: string,
  method: HTTPMethod,
  body?: any,
  bodyType: HTTTPBodyType = "JSON"
): Promise<T & APIResponse> => {
  return await fetch(
    `${appSettings.fetchRequestSettings.endpointURL}/${endpoint}`,
    {
      method: method,
      body: bodyType === "JSON" ? JSON.stringify(body) : body,
    }
  )
    .then((res) => res.json())
    .catch((error) => {
      return { error };
    });
};

export const retrieveResume_API = async () => {
  let resumeResponse = await fetchRequest<ResumeObject>(
    appSettings.fetchRequestSettings.endpoints.resume,
    "GET"
  );

  return { error: resumeResponse.error, resume: { ...resumeResponse } };
};
