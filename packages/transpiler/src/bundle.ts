import { ProtoStore } from "@osmonauts/proto-parser"
import * as dotty from 'dotty';

// TODO move to store
export const getPackages = (store: ProtoStore) => {
    return store.getProtos().reduce((m, proto) => {
        if (proto.proto.package) {
            m[proto.proto.package] = m[proto.proto.package] || []
            m[proto.proto.package].push(proto);
        }
        return m;
    }, {});
}

export const getPackagesBundled = (store: ProtoStore) => {
    const objectified = {};
    const pkgs = getPackages(store);
    Object.keys(pkgs).forEach(key => {
        const files = pkgs[key];
        dotty.put(objectified, key, {
            pkg: key,
            files
        });
    });
    return objectified;

}