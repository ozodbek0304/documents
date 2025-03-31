import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;


export const api = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);