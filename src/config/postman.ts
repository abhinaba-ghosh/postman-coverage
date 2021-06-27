import { AxiosRequestConfig } from 'axios';
import { PostmanCoverageConfig } from '../types';
import { getPostmanCovConfig } from './coverage';

export const getRequestConfiguration = (
  method,
  url,
  key
): AxiosRequestConfig => {
  return {
    method,
    url,
    headers: {
      'X-Api-Key': key,
    },
  };
};

export const getPostmanRequestURL = (entity: string): string => {
  const config: PostmanCoverageConfig =
    getPostmanCovConfig() as PostmanCoverageConfig;

  if (!entity) {
    throw new Error('Specify an entity - api/collection');
  }

  if (entity === 'api') {
    return `https://api.getpostman.com/apis/${config.api.id}/versions/${config.api.version}/schemas/${config.api.schema}`;
  }

  return `https://api.getpostman.com/collections/${config.collection.id}`;
};

export const getPostmanXAPIKey = (): string => {
  const config: PostmanCoverageConfig =
    getPostmanCovConfig() as PostmanCoverageConfig;

  return config.key;
};
