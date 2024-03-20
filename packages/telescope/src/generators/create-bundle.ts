import { Bundler } from '../bundler';
import { TelescopeBuilder } from '../builder';
import {
    recursiveModuleBundle
} from '@cosmology/ast';
import { duplicateImportPathsWithExt } from '@cosmology/utils';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.bundle.enabled) {
        return;
    }

    const importPaths = duplicateImportPathsWithExt(bundler.bundle.importPaths, builder.options.restoreImportExtension);

    // [x] bundle
    const body = recursiveModuleBundle(builder.options, bundler.bundle.bundleVariables);
    const prog = []
        .concat(importPaths)
        .concat(body);

    const localname = bundler.bundle.bundleFile;
    const filename = bundler.getFilename(localname);

    bundler.writeAst(prog, filename);

    // [x] write an index file for each base
    bundler.files.forEach(file => builder.files.push(file));
};