interface PostmanOperations {
  method: string;
  path: string;
}

const walkCollection = (
  collection: Object,
  mainKey: string = 'request',
  placeholder: PostmanOperations[] = []
): PostmanOperations[] => {
  Object.keys(collection).some((item) => {
    if (item === mainKey) {
      const method = collection[item].method;
      const path = collection[item].url.path.join('/');
      placeholder?.push({
        method,
        path,
      });
      return collection[item] === undefined;
    }
    if (collection[item] && collection[item] instanceof Object) {
      walkCollection(collection[item], mainKey, placeholder);
    }
  });
  return [...new Set(placeholder)];
};

export const getPostmanOperations = (collection): PostmanOperations[] =>
  walkCollection(collection) as PostmanOperations[];
