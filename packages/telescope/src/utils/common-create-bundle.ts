import { aggregateImports, getImportStatements } from '../imports';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { GenericParseContext } from '@cosmology/ast';
import { ProtoRef } from '@cosmology/types';
import { TelescopeParseContext } from '../build';
import { writeAstToFile } from '../utils/files';
import { fixlocalpaths } from '../utils';
import * as t from '@babel/types';
import { createEmptyProtoRef } from '@cosmology/proto-parser';

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
  const ref: ProtoRef = createEmptyProtoRef(pkg, localname);

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
