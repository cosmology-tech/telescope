import { buildAllImports, getDepsFromQueries } from '../imports';
import { Bundler } from '../bundler';
import { createMsgHelperCreator, createMsgHooks } from '@cosmology/ast';
import { getNestedProto } from '@cosmology/proto-parser';
import { parse } from '../parse';
import { TelescopeBuilder } from '../builder';
import { camel, getHelperFuncName, getQueryMethodNames, swapKeyValue } from '@cosmology/utils';
import { BundlerFile } from 'src/types';
import { ProtoService, TX_SVC_TYPES } from '@cosmology/types';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    const mutationContexts = bundler
        .contexts
        .filter(context => context.mutations.length > 0);

    const clients = mutationContexts.map(c => {

        const enabled = c.proto.pluginValue('helperFuncCreators.enabled');
        if (!enabled) return;

        const serviceTypes = c.proto.pluginValue(
          "helperFuncCreators.include.serviceTypes"
        );

        if (
          serviceTypes &&
          !serviceTypes.includes("Msg") &&
          !serviceTypes.includes("All")
        ) {
          return;
        }

        if (c.proto.isExcluded()) return;

        const localname = bundler.getLocalFilename(c.ref, 'rpc.func');
        const filename = bundler.getFilename(localname);
        const ctx = bundler.getFreshContext(c);

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed);
        // hard-coding, for now, only Msg service
        if (!proto?.Msg || proto.Msg?.type !== 'Service') {
            return;
        }


        const asts = [];
        const bundlerFile: BundlerFile = {
          proto: c.ref.filename,
          package: c.ref.proto.package,
          localname,
          filename,
          isMsg: true
        };

        // // TODO:: see if the function is excluded.

        // // TODO:: gen helper funcs
        // const genCustomHooks = c.proto.pluginValue('helperFuncCreators.genCustomHooks');

        // if(genCustomHooks) {
        //   // TODO:: gen custom hooks
        // }

        TX_SVC_TYPES.forEach((svcKey) => {
          if (proto[svcKey]) {
            const svc: ProtoService = proto[svcKey];
            const patterns = c.proto.pluginValue(
              "helperFuncCreators.include.patterns"
            );
            const nameMappers = c.proto.pluginValue(
              "helperFuncCreators.nameMappers"
            );

            const mapper = nameMappers?.Msg || nameMappers?.All || {};

            const methodKeys = getQueryMethodNames(
              bundlerFile.package,
              Object.keys(proto[svcKey].methods ?? {}),
              patterns || ["**"],
              String
            );

            // see if the function is excluded.
            if (!methodKeys || !methodKeys.length) {
              return;
            }

            // for each method key, create creators, hooks.
            methodKeys.forEach((methodKey) => {
              // get helperCreatorName
              // get hookName
              const { creator: helperCreatorName, hook: hookName } =
                getHelperFuncName(bundlerFile.package, methodKey, mapper, "unchanged");

              // gen helper funcs
              asts.push(
                createMsgHelperCreator(
                  ctx.generic,
                  svc.methods[methodKey],
                  helperCreatorName
                )
              );

              const genCustomHooks = c.proto.pluginValue(
                "helperFuncCreators.genCustomHooks"
              );

              if (genCustomHooks) {
                // gen custom hooks
                asts.push(
                  createMsgHooks(
                    ctx.generic,
                    svc.methods[methodKey],
                    helperCreatorName,
                    hookName
                  )
                );
              }
            });
          }
        });

        if (!asts.length) {
          return;
        }

        const serviceImports = getDepsFromQueries(
            ctx.mutations,
            localname
        );

        const imports = buildAllImports(ctx, serviceImports, localname);
        const prog = []
            .concat(imports)
            .concat(ctx.body)
            .concat(asts);


        bundler.writeAst(prog, filename);
        bundler.addToBundle(c, localname);

        return {
            package: c.ref.proto.package,
            localname,
            filename
        };

    }).filter(Boolean);
};
