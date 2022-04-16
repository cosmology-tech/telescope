export * from './classes';
export * from './plugin';

import { TSProtoStore } from './classes';

export default (protoPath: string, outPath: string) => {
    const protoStore = new TSProtoStore(protoPath, outPath);
    protoStore.write();
    protoStore.bundleRootPackage();
    protoStore.bundlePackages();
};