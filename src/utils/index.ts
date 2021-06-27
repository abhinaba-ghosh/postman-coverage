import axios from 'axios';

export const getRequestConfiguration = (method, url, key) => {
  return {
    method,
    url,
    headers: {
      'X-Api-Key': key,
    },
  };
};

/**
 *
 * @param entity \
 * @param entityID
 * @returns
 */
export const getPostmanRequestURL = (
  entity: string,
  entityID: string,
  versionID?: string,
  schemaID?: string
): string => {
  if (versionID && schemaID) {
    return `https://api.getpostman.com/${entity}/${entityID}/versions/${versionID}/schema/${schemaID}`;
  }
  return `https://api.getpostman.com/${entity}/${entityID}`;
};

export const getPostmanXAPIKey = async () => {
  return process.env.API_POSTMAN_XAPI_KEY;
};
