import { aggregateImports, getImportStatements } from '../imports';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';

import { ProtoRef } from '@osmonauts/types';
import { TelescopeParseContext } from '../build';
import { writeAstToFile } from '../utils/files';
import { commonBundlePlugin, fixlocalpaths } from '../utils';
import * as dotty from 'dotty';
import { createPiniaStoreFactory } from '@osmonauts/ast';

export const plugin = (
  builder: TelescopeBuilder
) => {

  // if not enabled, exit
  if (!builder.options?.pinia?.enabled) {
    return;
  }

  // get mapping of packages and rpc query filenames.
  const obj = {};
  builder.rpcQueryClients.map((queryClient) => {
    const path = `./${queryClient.localname.replace(/rpc.(Query|Service).ts$/, 'pinia.store')}`;
    dotty.put(obj, queryClient.package, path);
  });

  commonBundlePlugin(builder, 'pinia.store.ts', obj, (context, obj) => {
    // generate code for createRpcQueryHooks and imports of related packages.
    return createPiniaStoreFactory(context, obj);
  });

}
