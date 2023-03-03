import { TelescopeBuilder } from '../builder';
import { createMobxQueryFactory } from '@osmonauts/ast';
import * as dotty from 'dotty';
import { commonBundlePlugin } from '../utils';

export const plugin = (builder: TelescopeBuilder) => {
  // if mobx is enabled
  // generate stores.ts based on query hooks generated in each package.
  // eg: __fixtures__/output1/stores.ts
  if (!builder.options.mobx?.enabled) {
    return;
  }

  // get mapping of packages and rpc query filenames.
  const obj = {};
  const bundlerFiles = builder.stateManagers["mobx"];

  if(!bundlerFiles || !bundlerFiles.length){
    return;
  }

  bundlerFiles.map((queryClient) => {
    const path = `./${queryClient.localname.replace(/\.ts$/, '')}`;
    dotty.put(obj, queryClient.package, path);
  });

  commonBundlePlugin(builder, 'stores.ts', obj, (context, obj) => {
    // generate code for createRpcQueryHooks and imports of related packages.
    return createMobxQueryFactory(context, obj);
  });
};
