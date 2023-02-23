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

  console.log('In pinia store bundle plugin')

  // if react query is enabled
  // generate hooks.ts based on query hooks generated in each package.
  // eg: __fixtures__/output1/hooks.ts
  if (!builder.options.reactQuery.enabled) {
    return;
  }


}
