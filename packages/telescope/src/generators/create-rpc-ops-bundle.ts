import { aggregateImports, getImportStatements } from "../imports";
import { join, dirname, extname, basename } from "path";
import { TelescopeBuilder } from "../builder";
import { createScopedRpcHookFactory } from "@cosmology/ast";
import { ImportUsage, ProtoRef } from "@cosmology/types";
import { TelescopeParseContext } from "../build";
import { writeAstToFile } from "../utils/files";
import { fixlocalpaths } from "../utils";
import * as dotty from "dotty";
import { createEmptyProtoRef } from "@cosmology/proto-parser";
import { camel, makeUseHookName, makeUsePkgHookName } from "@cosmology/utils";
import { variableSlug } from "@cosmology/utils";
import { swapKeyValue } from "@cosmology/utils";
import { BundlerFile } from "src/types";

export const plugin = (builder: TelescopeBuilder) => {
  if (
    !builder.options.rpcClients?.enabled ||
    !builder.options.rpcClients?.instantOps?.length
  ) {
    return;
  }

  const localname = "service-ops.ts";

  // get mapping of packages and rpc query filenames.
  const instantOpsMapping = {};
  const methodSet = new Set();
  const bundlerFiles = builder.stateManagers["instantRpc"];

  if (!bundlerFiles || !bundlerFiles.length) {
    return;
  }

  // create proto ref for context
  const pkg = "@root";
  const ref: ProtoRef = createEmptyProtoRef(pkg, localname);

  // create context
  const context = new TelescopeParseContext(
    ref,
    builder.store,
    builder.options
  );

  const pkgImports = [];

  const ast = builder.options.rpcClients!.instantOps!.reduce(
    (ast, instantOpsConfig) => {
      let nameMapping = instantOpsConfig.nameMapping;

      nameMapping = swapKeyValue(nameMapping ?? {});

      return ast.concat(
        createRpcOpsAst(
          context,
          instantOpsConfig.className,
          pkgImports,
          nameMapping,
          bundlerFiles,
          methodSet,
          instantOpsMapping
        )
      );
    },
    []
  );

  // generate imports added by context.addUtil
  const imports = fixlocalpaths(aggregateImports(context, {}, localname));
  const importStmts = getImportStatements(localname, imports);

  // construct the AST
  const prog = [].concat(importStmts).concat([]).concat(ast);

  // write the file.
  const filename = join(builder.outPath, localname);
  builder.files.push(localname);

  writeAstToFile(builder.outPath, builder.options, prog, filename);
};

function createRpcOpsAst(
  context: TelescopeParseContext,
  className: string,
  pkgImports: ImportUsage[],
  nameMapping,
  bundlerFiles: BundlerFile[],
  methodSet: Set<unknown>,
  instantOpsMapping,
) {
  const extendInterfaces = [];

  bundlerFiles.forEach((bundlerFile) => {
    const path = `./${bundlerFile.localname.replace(/\.ts$/, '')}`;
    const importedVarName = variableSlug(path)

    // // build instantOpsMapping
    // bundlerFile.instantExportedMethods?.forEach((method) => {
    //   const methodName = method.name;

    //   const useHookName = makeUseHookName(camel(methodName));
    //   const hookNameWithPkg = `${bundlerFile.package}.${useHookName}`;
    //   let instantHookName = null;

    //   if (nameMapping[hookNameWithPkg]) {
    //     instantHookName = nameMapping[hookNameWithPkg];
    //   } else {
    //     if (methodSet.has(useHookName)) {
    //       instantHookName = makeUsePkgHookName(bundlerFile.package, methodName);
    //     } else {
    //       instantHookName = useHookName;
    //     }
    //   }

    //   dotty.put(instantOpsMapping, instantHookName, {
    //     useHookName,
    //     importedVarName: variableSlug(path),
    //     comment: `${bundlerFile.package}.${useHookName}\n${
    //       method.comment ?? methodName
    //     }`,
    //   });

    //   methodSet.add(instantHookName);
    // });
  });

  return [];
}
