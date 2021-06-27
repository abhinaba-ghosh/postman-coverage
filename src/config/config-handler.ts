import * as fs from 'fs';
import { PostmanCoverageConfig } from '../types';

/**
 * set the configuration file path for postman-user-manager
 * @param config
 */
export const config = (config: PostmanCoverageConfig) => {
  try {
    if (config?.path) {
      let configFileData: string = fs.readFileSync(config['path'], 'utf8');
      process.env['covConfig'] = configFileData;
    } else if (config?.config) {
      process.env['covConfig'] = JSON.stringify(config['configObject']);
    } else {
      throw new Error(`configuration is not set properly for postman-coverage`);
    }
  } catch (e) {
    console.error(e);
    console.info(`exiting the process....`);
    process.exit(1);
  }
};

/**
 * get the postman-coverage config runtime
 */
export const getCovConfig = () =>
  JSON.parse(process.env.covConfig ? process.env.covConfig : '{}');
