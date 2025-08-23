import VARIABLES from "./envVariables";

export const addBasePath = (path: string) => {
  return `${VARIABLES.STRAPI_URL_BASE}${path}`;
};
