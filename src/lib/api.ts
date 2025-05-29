import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const problemDetails = error.response?.data;

    if (problemDetails?.title && problemDetails?.status) {
      error.problemDetails = problemDetails;
    }

    return Promise.reject(error);
  }
);