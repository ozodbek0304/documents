import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  withCredentials: true,
});

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
