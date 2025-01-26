import { buildAllImports, getDepsFromQueries } from "../imports";
import { Bundler } from "../bundler";
import { createMsgHelperCreator, createMsgHooks, createVueMsgHooks } from "@cosmology/ast";
import { getNestedProto } from "@cosmology/proto-parser";
import { parse } from "../parse";
import { TelescopeBuilder } from "../builder";
import {
  camel,
  getHelperFuncName,
  getQueryMethodNames,
  swapKeyValue,
} from "@cosmology/utils";
import { BundlerFile } from "src/types";
import { ProtoService, TX_SVC_TYPES } from "@cosmology/types";

export const plugin = (builder: TelescopeBuilder, bundler: Bundler) => {
  const mutationContexts = bundler.contexts.filter(
    (context) => context.mutations.length > 0
  );

  const clients = mutationContexts
    .map((c) => {
      const enabled = c.proto.pluginValue("helperFunctions.enabled");
      if (!enabled) return;

      const serviceTypes = c.proto.pluginValue(
        "helperFunctions.include.serviceTypes"
      );

      if (serviceTypes && !serviceTypes.includes("Tx")) {
        return;
      }

      if (c.proto.isExcluded()) return;

      const localname = bundler.getLocalFilename(c.ref, "rpc.func");
      const localnameReact = bundler.getLocalFilename(c.ref, `rpc.react`);
      const localnameVue = bundler.getLocalFilename(c.ref, `rpc.vue`);
      const filename = bundler.getFilename(localname);
      const filenameReact = bundler.getFilename(localnameReact);
      const filenameVue = bundler.getFilename(localnameVue);

      const ctx = bundler.getFreshContext(c);


      // get mutations, services
      parse(ctx);

      const proto = getNestedProto(c.ref.traversed);
      // hard-coding, for now, only Msg service
      if (!proto?.Msg || proto.Msg?.type !== "Service") {
        return;
      }

      const asts = [];
      const reactAsts = [];
      const vueAsts = [];
      const helperCreatorNameList = [];

      const bundlerFile: BundlerFile = {
        proto: c.ref.filename,
        package: c.ref.proto.package,
        localname,
        filename,
        isMsg: true,
      };

      TX_SVC_TYPES.forEach((svcKey) => {
        if (proto[svcKey]) {
          const svc: ProtoService = proto[svcKey];
          const patterns = c.proto.pluginValue(
            "helperFunctions.include.patterns"
          );
          const nameMappers = c.proto.pluginValue(
            "helperFunctions.nameMappers"
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
                [nameMappers?.Msg, nameMappers?.All],
                "unchanged"
              );

            helperCreatorNameList.push(helperCreatorName);
            // gen helper funcs
            asts.push(
              createMsgHelperCreator(
                ctx.generic,
                svc.methods[methodKey],
                helperCreatorName
              )
            );

            const genCustomHooks = c.proto.pluginValue(
              "helperFunctions.hooks.react"
            );

            const genCustomHooksVue = c.proto.pluginValue(
              "helperFunctions.hooks.vue"
            );

            if (genCustomHooks) {
              // gen custom react hooks
              reactAsts.push(
                createMsgHooks(
                  ctx.generic,
                  svc.methods[methodKey],
                  helperCreatorName,
                  hookName
                )
              );
            }

            if (genCustomHooksVue) {
              // gen custom vue hooks
              vueAsts.push(
                createVueMsgHooks(
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

      const serviceImports = getDepsFromQueries(ctx.mutations, localname);
      const serviceImportsReact = getDepsFromQueries(ctx.mutations, localnameReact);
      const serviceImportsVue = getDepsFromQueries(ctx.mutations, localnameVue);

      const funcFileName = "./".concat(localname.substring(localname.lastIndexOf("/") + 1))
      serviceImportsReact[funcFileName] = helperCreatorNameList;
      serviceImportsVue[funcFileName] = helperCreatorNameList;

      const imports = buildAllImports(ctx, serviceImports, localname);
      const importsReact = buildAllImports(ctx, serviceImportsReact, localnameReact);
      const importsVue = buildAllImports(ctx, serviceImportsVue, localnameReact);

      const prog = [].concat(imports).concat(ctx.body).concat(asts);
      const progReact = [].concat(importsReact).concat(reactAsts);
      const progVue = [].concat(importsVue).concat(vueAsts);

      bundler.writeAst(prog, filename);
      if(reactAsts.length) {
        bundler.writeAst(progReact, filenameReact);
      }
      if(vueAsts.length) {
        bundler.writeAst(progVue, filenameVue);
      }
      bundler.addToBundle(c, localname);

      return {
        package: c.ref.proto.package,
        localname,
        filename,
      };
    })
    .filter(Boolean);
};
