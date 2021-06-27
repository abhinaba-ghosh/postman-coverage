interface APIConfig {
  id: string;
  version: string;
  schema: string;
}

interface CollectionConfig {
  id: string;
}

export interface PostmanCoverageConfig {
  path?: string;
  config?: {
    key: string;
    collection: CollectionConfig;
    api: APIConfig;
  };
}
