import { aggregateImports, getImportStatements } from '../imports';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcHookFactory } from '@osmonauts/ast';
import { ProtoRef } from '@osmonauts/types';
import { TelescopeParseContext } from '../build';
import { writeAstToFile } from '../utils/files';
import { fixlocalpaths } from '../utils';
import * as dotty from 'dotty';

export const plugin = (
    builder: TelescopeBuilder
) => {
    // if react query is enabled
    // generate hooks.ts based on query hooks generated in each package.
    // eg: __fixtures__/output1/hooks.ts
    if (!builder.options.reactQuery.enabled) {
        return;
    }

    const localname = 'hooks.ts';

    // get mapping of packages and rpc query filenames.
    const obj = {};
    const bundlerFiles = builder.stateManagers["reactQuery"];

    if(!bundlerFiles || !bundlerFiles.length){
      return;
    }

    bundlerFiles.map(bundlerFile => {
        const path = `./${bundlerFile.localname.replace(/\.ts$/, '')}`;
        dotty.put(obj, bundlerFile.package, path);
    });

    // create proto ref for context
    const pkg = '@root';
    const ref: ProtoRef = {
        absolute: '',
        filename: localname,
        proto: {
            package: pkg,
            imports: null,
            root: {},
            importNames: null
        },
        traversed: {
            package: pkg,
            imports: null,
            root: {},
            importNames: null,
            acceptsInterface: {},
            implementsInterface: {},
            parsedExports: {},
            parsedImports: {},
            symbols: null
        }
    }

    // create context
    const pCtx = new TelescopeParseContext(
        ref,
        builder.store,
        builder.options
    );

    // generate code for createRpcQueryHooks and imports of related packages.
    const ast = createScopedRpcHookFactory(
        pCtx.proto,
        obj,
        'createRpcQueryHooks'
    )

    // generate imports added by context.addUtil
    const imports = fixlocalpaths(aggregateImports(pCtx, {}, localname));
    const importStmts = getImportStatements(
        localname,
        imports
    );

    // construct the AST
    const prog = []
        .concat(importStmts)
        .concat(ast);

    // write the file.
    const filename = join(builder.outPath, localname);
    builder.files.push(localname);

    writeAstToFile(builder.outPath, builder.options, prog, filename);

};