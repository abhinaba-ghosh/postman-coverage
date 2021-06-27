interface APIConfig {
  id: string;
  version: string;
  schema: string;
}

interface CollectionConfig {
  id: string;
}

export interface PostmanCoverageConfigOptions {
  path?: string;
  config?: {
    key: string;
    collection: CollectionConfig;
    api: APIConfig;
  };
}

export interface PostmanCoverageConfig {
  key: string;
  collection: CollectionConfig;
  api: APIConfig;
}

export interface GetRequestConfiguration {
  method: string;
  url: string;
  headers: {
    'X-Api-Key': string;
  };
}
