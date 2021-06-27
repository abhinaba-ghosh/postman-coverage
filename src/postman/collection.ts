import axios from 'axios';
import {
  getPostmanRequestURL,
  getPostmanXAPIKey,
  getRequestConfiguration,
} from '../utils';

/**
 * Fetch collection data from Postman prod account
 * @param {String} collectionId
 */
export const getCollection = async (collectionId) => {
  const requestConfig = getRequestConfiguration(
    'GET',
    getPostmanRequestURL('collections', collectionId),
    await getPostmanXAPIKey()
  );

  try {
    const res = await axios(requestConfig);
    return res.data.collection;
  } catch (e) {
    throw new Error(e);
  }
};
