import { ResumeObject } from "../types/globalTypes";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
export type HTTTPBodyType = "JSON" | "File";

export interface APIResponse {
  error?: string;
}
