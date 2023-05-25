import { aggregateImports, getImportStatements } from '../imports';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { ProtoRef } from '@osmonauts/types';
import { TelescopeParseContext } from '../build';
import { writeAstToFile } from '../utils/files';
import { fixlocalpaths } from '../utils';
import { createEmptyProtoRef } from '@osmonauts/proto-parser';
import { GenericParseContext, createWebSocketClient } from '@osmonauts/ast';
import { buildAllImportsFromGenericContext } from '../imports';

export const plugin = (builder: TelescopeBuilder) => {
  // if websocket is enabled
  if (!builder.options.websocket.enabled) {
    return;
  }

  const localname = 'websocket.ts';

  // create proto ref for context
  const pkg = '@root';
  const ref: ProtoRef = createEmptyProtoRef(pkg, localname);

  // create context
  const context = new GenericParseContext(ref, builder.store, builder.options);

  // generate code for createRpcQueryHooks and imports of related packages.
  const ast = createWebSocketClient(context);

  // generate imports added by context.addUtil
  const imports = buildAllImportsFromGenericContext(context, localname);

  // construct the AST
  const prog = [].concat(imports).concat(ast);

  // write the file.
  const filename = join(builder.outPath, localname);
  builder.files.push(localname);

  writeAstToFile(builder.outPath, builder.options, prog, filename);
};
