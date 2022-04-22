export * from './classes';
export * from './plugin';

import {
    AminoExceptions
} from '@osmonauts/ast-gen';

import { TelescopePlugin, TSProtoStore } from './classes';

interface TelescopeInput {
    protoPath: string;
    outPath: string;
    exceptions?: AminoExceptions;
    plugins?: TelescopePlugin[]
}

export default (input: TelescopeInput) => {
    const protoStore = new TSProtoStore(input);
    protoStore.write();
    protoStore.bundleRootPackage();
    protoStore.bundlePackages();
    protoStore.buildClients();
};