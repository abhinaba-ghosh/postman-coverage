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
export const getPostmanCollection = async () => {
  const requestConfig: AxiosRequestConfig = getRequestConfiguration(
    'GET',
    getPostmanRequestURL('collection'),
    getPostmanXAPIKey()
  );

  try {
    const res: AxiosResponse = await axios(requestConfig);
    return res.data.collection;
  } catch (e) {
    throw new Error(e);
  }
};
