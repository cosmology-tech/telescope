import { aggregateImports, getImportStatements } from '../imports';
import { join, dirname, extname, basename } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcHookFactory } from '@cosmology/ast';
import { ProtoRef } from '@cosmology/types';
import { TelescopeParseContext } from '../build';
import { writeAstToFile } from '../utils/files';
import { fixlocalpaths } from '../utils';
import * as dotty from 'dotty';
import { createEmptyProtoRef } from '@cosmology/proto-parser';
import { camel, makeUseHookName, makeUsePkgHookName } from '@cosmology/utils';
import { variableSlug } from '@cosmology/utils';
import { swapKeyValue } from '@cosmology/utils';

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
    const instantHooksMapping = {}
    const methodSet = new Set()
    const bundlerFiles = builder.stateManagers["reactQuery"];

    if (!bundlerFiles || !bundlerFiles.length) {
        return;
    }

    let nameMapping = builder.options.reactQuery?.instantExport?.nameMapping;

    nameMapping = swapKeyValue(nameMapping ?? {});

    bundlerFiles.map(bundlerFile => {
        const path = `./${bundlerFile.localname.replace(/\.ts$/, '')}`;
        dotty.put(obj, bundlerFile.package, path);

        // build instantHooksMapping
        bundlerFile.instantExportedMethods?.forEach((method)=>{
          const methodName = method.name;

          const useHookName = makeUseHookName(camel(methodName));
          const hookNameWithPkg = `${bundlerFile.package}.${useHookName}`;
          let instantHookName = null;

          if(nameMapping[hookNameWithPkg]){
            instantHookName = nameMapping[hookNameWithPkg]
          } else {
            if(methodSet.has(useHookName)){
              instantHookName = makeUsePkgHookName(bundlerFile.package, methodName);
            } else {
              instantHookName = useHookName
            }
          }

          dotty.put(instantHooksMapping, instantHookName, {
            useHookName,
            importedVarName: variableSlug(path),
            comment: `${bundlerFile.package}.${useHookName}\n${method.comment ?? methodName}`
          });

          methodSet.add(instantHookName);
        });
    });

    // create proto ref for context
    const pkg = '@root';
    const ref: ProtoRef = createEmptyProtoRef(pkg, localname)

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
        'createRpcQueryHooks',
        instantHooksMapping
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