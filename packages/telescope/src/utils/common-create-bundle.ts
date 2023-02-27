import { aggregateImports, getImportStatements } from '../imports';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { GenericParseContext } from '@osmonauts/ast';
import { ProtoRef } from '@osmonauts/types';
import { TelescopeParseContext } from '../build';
import { writeAstToFile } from '../utils/files';
import { fixlocalpaths } from '../utils';
import * as t from '@babel/types';

export const commonBundlePlugin = (
  builder: TelescopeBuilder,
  bundleFilename: string,
  packageMappings: object,
  astFn: (
    context: GenericParseContext,
    obj: object
  ) => (
    | t.ExportNamedDeclaration
    | {
        type: string;
        importKind: string;
        specifiers: {
          type: string;
          local: {
            type: string;
            name: string;
          };
        }[];
        source: {
          type: string;
          value: string;
        };
      }
  )[]
) => {
  const localname = bundleFilename;

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
  };

  // create context
  const pCtx = new TelescopeParseContext(ref, builder.store, builder.options);

  // generate code for createRpcQueryHooks and imports of related packages.
  const ast = astFn(pCtx.proto, packageMappings);

  // generate imports added by context.addUtil
  const imports = fixlocalpaths(aggregateImports(pCtx, {}, localname));
  const importStmts = getImportStatements(localname, imports);

  // construct the AST
  const prog = [].concat(importStmts).concat(ast);

  // write the file.
  const filename = join(builder.outPath, localname);
  builder.files.push(localname);

  writeAstToFile(builder.outPath, builder.options, prog, filename);
};
