export * from './classes';
export * from './plugin';

import { TelescopePlugin, TSProtoStore } from './classes';

export default (protoPath: string, outPath: string, plugins: TelescopePlugin[]) => {
    const protoStore = new TSProtoStore(protoPath, outPath, plugins);
    protoStore.write();
    protoStore.bundleRootPackage();
    protoStore.bundlePackages();
};