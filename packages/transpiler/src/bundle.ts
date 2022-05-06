import { ProtoStore } from '@osmonauts/proto-parser';
import { recursiveModuleBundle, importNamespace } from '@osmonauts/ast';
import * as dotty from 'dotty';
import { TelescopeInput } from './index';
import { join, relative, dirname } from 'path';

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

export const bundlePackages = (store: ProtoStore, input: TelescopeInput) => {
    const allPackages = getPackagesBundled(store);
    return Object.keys(allPackages).map(base => {
        const pkgs = allPackages[base];
        const bundleVariables = {};
        const bundleFile = join(input.protoDir, base, 'bundle.ts');
        const importPaths = [];
        parsePackage(pkgs, bundleFile, importPaths, bundleVariables);
        const body = recursiveModuleBundle(bundleVariables);
        return {
            bundleFile,
            importPaths,
            base,
            body
        };
    });
}

export const parsePackage = (obj, bundleFile, importPaths, bundleVariables) => {
    if (!obj) return;
    if (obj.pkg && obj.files) {
        obj.files.forEach(file => {
            createFileBundle(obj, file.filename, bundleFile, importPaths, bundleVariables);
            // TODO better namespacing for aminos/messages/encoding:
            // file.outFiles.forEach(outFile =>
            //     createFileBundle(obj, outFile.filename, bundleFile, importPaths, bundleVariables)
            // );
        });
        return;
    }
    Object.keys(obj).forEach(mini => {
        parsePackage(obj[mini], bundleFile, importPaths, bundleVariables);
    })
}


let counter = 0;
const createFileBundle = (obj, filename, bundleFile, importPaths, bundleVariables) => {
    let rel = relative(dirname(bundleFile), filename);
    if (!rel.startsWith('.')) rel = `./${rel}`;
    const variable = `_${counter++}`;
    importPaths.push(importNamespace(variable, rel));
    dotty.put(bundleVariables, obj.pkg + '.__export', true);
    dotty.put(bundleVariables, obj.pkg + '.' + variable, true);
}