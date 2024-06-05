type pkg = {
  name: string;
  version: string;
  type: string;
  description: string;
  repository: string;
  homepage: string;
  author: string;
  license: string;
};
type plugin = {
  name: string;
  author: string;
  url: string;
  version: string;
};
export function mergePluginPackage(pkg: pkg, plugin: plugin) {
  return {
    ...pkg,
    version: pkg.version,
    name: pkg.name,
    url: pkg.repository,
    author: pkg.author,
  };
}
