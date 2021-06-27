import axios from 'axios'
import {
  getRequestConfiguration,
  getPostmanRequestURL,
  getPostmanXAPIKey,
} from '../utils'

/**
 * Fetch environment data from Postman production account
 * @param {String} environmentId
 */
export const getEnvironment = async (environmentId) => {
  const requestConfig = getRequestConfiguration(
    'GET',
    getPostmanRequestURL('environments', environmentId),
    await getPostmanXAPIKey(),
  )
  try {
    const res = await axios(requestConfig)
    return res.data.environment
  } catch (e) {
    throw new Error(e)
  }
}
