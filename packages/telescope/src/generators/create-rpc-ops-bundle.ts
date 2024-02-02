import { aggregateImports, getImportStatements } from "../imports";
import { join, dirname, extname, basename } from "path";
import { TelescopeBuilder } from "../builder";
import {
  createInstantRpcInterface,
  createInstantRpcClass,
} from "@subql/x-cosmology-ast";
import { ImportUsage, ProtoRef } from "@subql/x-cosmology-types";
import { TelescopeParseContext } from "../build";
import { writeAstToFile } from "../utils/files";
import { fixlocalpaths } from "../utils";
import * as dotty from "dotty";
import { createEmptyProtoRef } from "@subql/x-cosmology-proto-parser";
import { camel, makeUseHookName, makeUsePkgHookName } from "@subql/x-cosmology-utils";
import { variableSlug } from "@subql/x-cosmology-utils";
import { swapKeyValue } from "@subql/x-cosmology-utils";
import { buildImports } from "@subql/x-cosmology-utils";
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
      const bundlerFiles =
        builder.stateManagers[`instantRpc_${instantOpsConfig.className}`];

      if (!bundlerFiles || !bundlerFiles.length) {
        return ast;
      }
      let nameMapping = instantOpsConfig.nameMapping;

      return ast.concat(
        createRpcOpsAst(
          context,
          instantOpsConfig.className,
          pkgImports,
          nameMapping,
          bundlerFiles
        )
      );
    },
    []
  );

  // generate imports added by context.addUtil
  const imports = fixlocalpaths(aggregateImports(context, {}, localname));
  const importStmts = getImportStatements(localname, imports);

  // construct the AST
  const prog = [].concat(importStmts).concat(buildImports(pkgImports)).concat(ast);

  // write the file.
  const filename = join(builder.outPath, localname);
  builder.files.push(localname);

  writeAstToFile(builder.outPath, builder.options, prog, filename);
};

// bundlerFiles.filter(file => file.localname.indexOf("rpc.msg") !== -1)

function createRpcOpsAst(
  context: TelescopeParseContext,
  className: string,
  pkgImports: ImportUsage[],
  nameMapping,
  bundlerFiles: BundlerFile[]
) {
  const extendInterfaces = [];
  const instantMapping: {
    [key: string]: {
      methodName: string;
      importedVarName: string;
      comment?: string | undefined;
    };
  } = {};
  const camelRpcMethods = context.generic.pluginValue("rpcClients.camelCase");


  let txNameMapping = {
    ...swapKeyValue(nameMapping?.All ?? {}),
    ...swapKeyValue(nameMapping?.Msg ?? {})
  };

  let queryNameMapping = {
    ...swapKeyValue(nameMapping?.All ?? {}),
    ...swapKeyValue(nameMapping?.Query ?? {})
  };

  bundlerFiles.forEach((bundlerFile) => {
    const isMsg = bundlerFile.isMsg;
    const currentNameMapping = isMsg ? txNameMapping : queryNameMapping;

    const path = `./${bundlerFile.localname.replace(/\.ts$/, "")}`;
    const importedVarName = variableSlug(path);

    if (
      pkgImports &&
      !pkgImports.some((item) => item.importedAs === importedVarName)
    ) {
      pkgImports.push({
        type: "typeImport",
        name: importedVarName,
        import: path,
        importedAs: importedVarName,
      });
    }

    extendInterfaces.push({
      importedVarName: importedVarName,
      interfaceName: className,
    });

    bundlerFile.instantExportedMethods?.forEach((method) => {
      const methodName = camelRpcMethods ? camel(method.name) : method.name;
      const nameWithPkg = `${bundlerFile.package}.${methodName}`;
      const methodAlias =
        currentNameMapping && currentNameMapping[nameWithPkg]
          ? currentNameMapping[nameWithPkg]
          : methodName;

      dotty.put(instantMapping, methodAlias, {
        methodName,
        importedVarName,
        isMsg
      });
    });
  });

  return [
    createInstantRpcInterface(className, extendInterfaces),
    createInstantRpcClass(context.generic, className, instantMapping),
  ];
}
