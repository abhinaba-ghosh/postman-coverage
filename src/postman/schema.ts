import axios from 'axios';
import {
  getPostmanRequestURL,
  getPostmanXAPIKey,
  getRequestConfiguration,
} from '../utils';

/**
 * Fetch collection data from Postman prod account
 * @param {String} schemaId
 */
export const getSchema = async (schemaId) => {
  const requestConfig = getRequestConfiguration(
    'GET',
    getPostmanRequestURL('apis', schemaId),
    await getPostmanXAPIKey()
  );

  try {
    const res = await axios(requestConfig);
    return res.data.collection;
  } catch (e) {
    throw new Error(e);
  }
};
