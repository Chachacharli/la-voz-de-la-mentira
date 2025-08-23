import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL_BASE,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
  },
});

export default axiosInstance;
