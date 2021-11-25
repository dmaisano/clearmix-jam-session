export { extractVideoID } from "./extract-video-id";

export const isServer = () => typeof window === "undefined";

export const API_BASE_URL = `http://localhost:3001/api`;

export const PAGE_NOT_FOUND = {
  notFound: true,
} as const;

export const truncateStr = (str = "", maxLen = 55) => {
  return str.length > maxLen ? `${str.substr(0, maxLen)}...` : str;
};
