import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  getPostmanRequestURL,
  getPostmanXAPIKey,
  getRequestConfiguration,
} from '../config';

/**
 * Fetch collection data from Postman prod account
 * @param {String} collectionId
 */
export const getPostmanSchema = async (): Promise<AxiosResponse> => {
  const requestConfig: AxiosRequestConfig = getRequestConfiguration(
    'GET',
    getPostmanRequestURL('api'),
    getPostmanXAPIKey()
  );

  try {
    const res: AxiosResponse = await axios(requestConfig);
    return res.data.schema;
  } catch (e) {
    throw new Error(e);
  }
};
