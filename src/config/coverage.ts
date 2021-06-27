import * as fs from 'fs';
import path from 'path';
import { PostmanCoverageConfig, PostmanCoverageConfigOptions } from '../types';

declare global {
  namespace NodeJS {
    interface Global {
      POSTMAN_COV_CONFIG: PostmanCoverageConfig | undefined;
    }
  }
}

/**
 * set the configuration file path for postman-user-manager
 * @param config
 */
export const setPostmanCovConfig = (
  config?: PostmanCoverageConfigOptions
): PostmanCoverageConfig | undefined => {
  let configuration: PostmanCoverageConfig | undefined;
  try {
    if (!config) {
      configuration = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'postman.cov.json'), 'utf8')
      );
    }

    if (config?.path) {
      configuration = JSON.parse(fs.readFileSync(config.path, 'utf8'));
    }

    if (config?.config) {
      configuration = config.config;
    }
  } catch (e) {
    console.error(e);
    console.info(`exiting the process....`);
    process.exit(1);
  }

  global.POSTMAN_COV_CONFIG = configuration;
  console.log('configuration:', configuration);

  return configuration;
};

export const getPostmanCovConfig = (): PostmanCoverageConfig | undefined =>
  global.POSTMAN_COV_CONFIG;
