import axios from "axios";
import VARIABLES from "~/utils/envVariables";

const axiosInstance = axios.create({
  baseURL: `${VARIABLES.STRAPI_URL_BASE}/api`,
  headers: {
    Authorization: `Bearer ${VARIABLES.STRAPI_TOKEN}`,
  },
});

export default axiosInstance;
