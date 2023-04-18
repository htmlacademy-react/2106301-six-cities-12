import axios from "axios";

const BACKAND_URL = 'https://12.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKAND_URL,
    timeout: REQUEST_TIMEOUT
  });

  return api;
}



