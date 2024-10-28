import { buildAllImports, getDepsFromQueries } from "../imports";
import { Bundler } from "../bundler";
import { createQueryHelperCreator, createQueryHooks } from "@cosmology/ast";
import { getNestedProto, isRefIncluded } from "@cosmology/proto-parser";
import { parse } from "../parse";
import { TelescopeBuilder } from "../builder";
import { ProtoRoot, ProtoService, QUERY_SVC_TYPES } from "@cosmology/types";
import {
  camel,
  getHelperFuncName,
  getQueryMethodNames,
  swapKeyValue,
} from "@cosmology/utils";
import { BundlerFile } from "../types";

export const plugin = (builder: TelescopeBuilder, bundler: Bundler) => {
  const clients = bundler.contexts
    .map((c) => {
      const enabled = c.proto.pluginValue("helperFuncCreators.enabled");
      if (!enabled) return;

      const serviceTypes = c.proto.pluginValue(
        "helperFuncCreators.include.serviceTypes"
      );

      if (
        serviceTypes &&
        !serviceTypes.includes("Query") &&
        !serviceTypes.includes("All")
      ) {
        return;
      }

      if (c.proto.isExcluded()) return;

      const ctx = bundler.getFreshContext(c);

      // get mutations, services
      parse(ctx);

      const proto = getNestedProto(c.ref.traversed as ProtoRoot);

      //// Anything except Msg Service OK...
      if (proto?.Msg) {
        return;
      }

      let getImportsFrom;

      if (proto.Query) {
        getImportsFrom = ctx.queries;
      } else {
        getImportsFrom = ctx.services;
      }

      const localname = bundler.getLocalFilename(c.ref, `rpc.func`);
      const filename = bundler.getFilename(localname);

      const bundlerFile: BundlerFile = {
        proto: c.ref.filename,
        package: c.ref.proto.package,
        localname,
        filename,
      };

      const asts = [];

      QUERY_SVC_TYPES.forEach((svcKey) => {
        if (proto[svcKey]) {
          const svc: ProtoService = proto[svcKey];
          const patterns = c.proto.pluginValue(
            "helperFuncCreators.include.patterns"
          );
          const nameMappers = c.proto.pluginValue(
            "helperFuncCreators.nameMappers"
          );

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
              getHelperFuncName(
                bundlerFile.package,
                methodKey,
                [nameMappers?.Query, nameMappers?.All],
                "get"
              );

            // gen helper funcs
            asts.push(
              createQueryHelperCreator(
                ctx.generic,
                svc.methods[methodKey],
                svc.name,
                methodKey,
                helperCreatorName
              )
            );

            const genCustomHooks = c.proto.pluginValue(
              "helperFuncCreators.genCustomHooks"
            );

            if (genCustomHooks) {
              // gen custom hooks
              asts.push(
                createQueryHooks(
                  ctx.generic,
                  svc.methods[methodKey],
                  methodKey,
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

      const serviceImports = getDepsFromQueries(getImportsFrom, localname);

      // TODO we do NOT need all imports...
      const imports = buildAllImports(ctx, serviceImports, localname);
      const prog = [].concat(imports).concat(ctx.body).concat(asts);

      bundler.writeAst(prog, filename);
      bundler.addToBundle(c, localname);

      return bundlerFile;
    })
    .filter(Boolean);
};
