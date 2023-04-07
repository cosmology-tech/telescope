import { Statement } from '@babel/types';
import { Bundler } from '../bundler';
import { TelescopeBuilder } from '../builder';
import {
  buildAllImports,
  getDepsFromQueries,
  getImportStatements
} from '../imports';
import { parse } from '../parse';
import { getNestedProto, isRefIncluded } from '@osmonauts/proto-parser';

import { createPiniaStore } from '@osmonauts/ast';

export const plugin = (builder: TelescopeBuilder, bundler: Bundler) => {
  if (!builder.options.pinia?.enabled) {
    return;
  }

  // get mapping of packages and rpc query filenames.

  if (!builder.options.lcdClients?.enabled) {
    return;
  }

  const queryContexts = bundler.contexts.filter(
    (context) => context.queries.length > 0 || context.services.length > 0
  );

  if (queryContexts.length > 0) {
    const piniaBundlerFiles = [];

    // [x] write out one registry helper for all contexts w/mutations
    queryContexts.forEach((c) => {
      const enabled = c.proto.pluginValue('lcdClients.enabled');
      if (!enabled) return;

      const includePinia =
        c.proto.pluginValue('pinia.enabled') &&
        isRefIncluded(c.ref, c.proto.pluginValue('pinia.include'));
      if (!includePinia) return;

      if (c.proto.isExcluded()) return;

      const ctx = bundler.getFreshContext(c);

      // get mutations, services
      parse(ctx);

      const proto = getNestedProto(c.ref.traversed);

      //// Anything except Msg Service OK...
      const allowedRpcServices =
        builder.options.rpcClients.enabledServices.filter((a) => a !== 'Msg');

      let name, getImportsFrom;

      // get imports
      allowedRpcServices.forEach((svcKey) => {
        if (proto[svcKey]) {
          if (svcKey === 'Query') {
            getImportsFrom = ctx.queries;
          } else {
            getImportsFrom = ctx.services;
          }
          name = svcKey;
        }
      });

      const localname = bundler.getLocalFilename(c.ref, 'pinia.store');
      const filename = bundler.getFilename(localname);

      const bundlerFile = {
        package: c.ref.proto.package,
        localname,
        filename
      };

      let ast = null;

      allowedRpcServices.forEach((svcKey) => {
        if (proto[svcKey]) {
          ast = createPiniaStore(ctx.generic, proto[svcKey]);
        }
      });

      if (!ast) {
        return;
      }

      piniaBundlerFiles.push(bundlerFile);

      const serviceImports = getDepsFromQueries(getImportsFrom, localname);

      const imports = buildAllImports(ctx, serviceImports, localname);

      const piniaImport = getImportStatements('pinia', [
        {
          type: 'import',
          name: 'defineStore',
          path: 'pinia'
        },
        {
          type: 'import',
          name: 'LCDQueryClient',
          path: './query.lcd'
        }
      ]);

      const prog = []
        .concat([...imports, ...piniaImport])
        .concat(ctx.body)
        .concat(ast);

      bundler.writeAst(prog, filename);
      bundler.addToBundle(c, localname);
    });

    bundler.addStateManagers('pinia', piniaBundlerFiles);
  }
};
