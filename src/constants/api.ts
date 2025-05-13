import { useAuthStore } from "@/store/auth-store";
import axios from "axios";
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;


export const api = axios.create({
    baseURL: baseURL,
    timeout: 30000,
});

export const getToken = () => {
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
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
            if (typeof window !== "undefined") {
                const { clearToken } = useAuthStore.getState();
                clearToken();
            }
        }

        return Promise.reject(error);
    }
);