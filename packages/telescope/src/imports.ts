import * as t from "@babel/types";
import {
  GenericParseContext,
  SymbolNames,
  TelescopeBaseTypes,
  importStmt,
} from "@cosmology/ast";
import { ServiceMutation } from "@cosmology/types";

import { DerivedImportObj, ImportHash, ImportObj } from "./types";
import { UTILS, getRelativePath, UTIL_HELPERS } from "./utils";
import { TelescopeParseContext } from "./build";
import { restoreExtension } from "@cosmology/utils";

const importHashToArray = (hash: ImportHash): ImportObj[] => {
  return Object.entries(hash ?? {}).reduce((m, [path, names]) => {
    names.forEach((name) => {
      m.push({
        type: "import",
        name,
        path,
      });
    });
    return m;
  }, []);
};

const getProtoImports = (
  context: TelescopeParseContext,
  filename: string
): ImportObj[] => {
  return context.proto.imports
    .map((usage) => {
      if (filename === usage.import) return;
      const importPath = getRelativePath(filename, usage.import);
      return {
        type: "import",
        name: usage.name,
        importAs: usage.importedAs,
        path: importPath,
      };
    })
    .filter(Boolean);
};

const getAminoImports = (
  context: TelescopeParseContext,
  filename: string
): ImportObj[] => {
  return context.amino.imports
    .map((usage) => {
      if (filename === usage.import) return;
      const importPath = getRelativePath(filename, usage.import);
      return {
        type: "import",
        name: usage.name,
        importAs: usage.importedAs,
        path: importPath,
      };
    })
    .filter(Boolean);
};

const getGenericImports = (
  context: TelescopeParseContext,
  filename: string
): ImportObj[] => {
  return context.generic.imports
    .map((usage) => {
      if (filename === usage.import) return;
      const importPath = getRelativePath(filename, usage.import);
      return {
        type: "import",
        name: usage.name,
        importAs: usage.importedAs,
        path: importPath,
      };
    })
    .filter(Boolean);
};

const getParsedImports = (
  context: TelescopeParseContext,
  parsedImports: ImportHash,
  filename: string
): ImportObj[] => {
  const imports = [];
  Object.entries(parsedImports ?? {}).forEach(([path, names]) => {
    if (filename === path) return;
    const importPath = getRelativePath(filename, path);
    const aliases = context.ref?.traversed?.importNames?.[path];
    names.forEach((name) => {
      let importAs = name;
      if (aliases && aliases[name]) {
        importAs = aliases[name];
      }
      imports.push({
        type: "import",
        name,
        importAs,
        path: importPath,
      });
    });
  });
  return imports;
};

const importAs = (name: string, importAs: string, importPath: string) => {
  return t.importDeclaration(
    [t.importSpecifier(t.identifier(importAs), t.identifier(name))],
    t.stringLiteral(importPath)
  );
};

// __helpers__
export const getImportStatements = (
  filepath: string,
  list: ImportObj[],
  options?: {
    restoreImportExtension?: string;
  }
) => {
  const imports = list.reduce((m, obj) => {
    let editedPath = UTIL_HELPERS.includes(obj.path)
      ? getRelativePath(filepath, `./${obj.path.replace(/__/g, "")}`)
      : obj.path;

    editedPath = restoreExtension(editedPath, options?.restoreImportExtension);

    const clonedObj = { ...obj, path: editedPath };

    m[clonedObj.path] = m[clonedObj.path] || [];
    const exists = m[clonedObj.path].find(
      (el) =>
        el.type === clonedObj.type &&
        el.path === clonedObj.path &&
        el.name === clonedObj.name
    );

    // MARKED AS NOT DRY [google.protobuf names]
    // TODO some have google.protobuf.Any shows up... figure out the better way to handle this
    if (/\./.test(clonedObj.name)) {
      clonedObj.name =
        clonedObj.name.split(".")[clonedObj.name.split(".").length - 1];
    }

    if (!exists) {
      m[clonedObj.path].push(clonedObj);
    }
    return m;
  }, {});

  return Object.entries(imports).reduce(
    (m, [importPath, imports]: [string, ImportObj[]]) => {
      const defaultImports = imports.filter((a) => a.type === "default");
      if (defaultImports.length) {
        if (defaultImports.length > 1)
          throw new Error("more than one default name NOT allowed.");
        m.push(
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier(defaultImports[0].name))],
            t.stringLiteral(defaultImports[0].path)
          )
        );
      }
      const namedImports = imports.filter(
        (a) => a.type === "import" && (!a.importAs || a.name === a.importAs)
      );
      if (namedImports.length) {
        m.push(
          importStmt(
            namedImports.map((i) => i.name),
            namedImports[0].path
          )
        );
      }
      const aliasNamedImports = imports.filter(
        (a) => a.type === "import" && a.importAs && a.name !== a.importAs
      );
      aliasNamedImports.forEach((imp) => {
        m.push(importAs(imp.name, imp.importAs, imp.path));
      });

      const namespaced = imports.filter((a) => a.type === "namespace");
      if (namespaced.length) {
        if (namespaced.length > 1)
          throw new Error("more than one namespaced name NOT allowed.");
        m.push(
          t.importDeclaration(
            [t.importNamespaceSpecifier(t.identifier(namespaced[0].name))],
            t.stringLiteral(namespaced[0].path)
          )
        );
      }
      return m;
    },
    []
  );
};

const convertUtilsToImports = (context: TelescopeParseContext): ImportObj[] => {
  const list = [];
  const utils = Object.keys({
    ...context.amino.utils,
    ...context.proto.utils,
    ...context.generic.utils,
  });

  utils.forEach((util) => {
    if (!UTILS.hasOwnProperty(util)) throw new Error("missing Util! ::" + util);
    if (typeof UTILS[util] === "string") {
      list.push({
        type: "import",
        path: UTILS[util],
        name: util,
      });
    } else {
      list.push(UTILS[util]);
    }
  });
  return list;
};

const convertUtilsToImportsGenric = (
  context: GenericParseContext
): ImportObj[] => {
  const list = [];
  const utils = Object.keys({
    ...context.utils,
  });

  // MARKED AS NOT DRY - duplicate of above
  utils.forEach((util) => {
    if (!UTILS.hasOwnProperty(util)) throw new Error("missing Util! ::" + util);
    if (typeof UTILS[util] === "string") {
      list.push({
        type: "import",
        path: UTILS[util],
        name: util,
      });
    } else {
      list.push(UTILS[util]);
    }
  });
  return list;
};

export const buildAllImports = (
  context: TelescopeParseContext,
  allImports: ImportHash,
  filepath: string
) => {
  const imports = aggregateImports(context, allImports, filepath);
  const importStmts = getImportStatements(filepath, imports, {
    restoreImportExtension: context.options.restoreImportExtension,
  });
  return importStmts;
};

export const buildAllImportsFromGenericContext = (
  context: GenericParseContext,
  filepath: string
) => {
  const imports: ImportObj[] = convertUtilsToImportsGenric(context);
  const importStmts = getImportStatements(filepath, imports, {
    restoreImportExtension: context.options.restoreImportExtension,
  });
  return importStmts;
};

const addDerivativeTypesToImports = (
  context: TelescopeParseContext,
  imports: ImportObj[]
) => {
  const ref = context.ref;

  return imports.reduce((m, obj) => {
    // SDKType
    // probably wont need this until we start generating osmonauts/helpers inline
    if (obj.type === "import" && obj.path.startsWith(".")) {
      let lookup = null;
      try {
        lookup = context.store.getImportFromRef(ref, obj.name);
      } catch (e) {}

      const appendSuffix = (
        obj: ImportObj,
        baseType: TelescopeBaseTypes
      ): DerivedImportObj => {
        return {
          ...obj,
          orig: obj.name,
          name: SymbolNames[baseType](obj.name),
          importAs: SymbolNames[baseType](obj.importAs ?? obj.name),
        };
      };

      // MARKED AS NOT DRY [google.protobuf names]
      // TODO some have google.protobuf.Any shows up... figure out the better way to handle this
      const removeProtoPrefix = (obj: DerivedImportObj): DerivedImportObj => {
        if (/\./.test(obj.name)) {
          obj.name = obj.name.split(".")[obj.name.split(".").length - 1];
          obj.importAs =
            obj.importAs.split(".")[obj.importAs.split(".").length - 1];
        }
        return obj;
      };

      const SDKTypeObject = removeProtoPrefix(appendSuffix(obj, "SDKType"));
      const AminoTypeObject = removeProtoPrefix(appendSuffix(obj, "Amino"));
      const EncodedTypeObject = removeProtoPrefix(
        appendSuffix(obj, "ProtoMsg")
      );
      // const AminoTypeUrlObject = removeProtoPrefix(appendSuffix(obj, 'AminoType'));

      if (lookup && ["Type", "Enum"].includes(lookup.obj.type)) {
        const arr = [...m, obj];

        if (
          context.options.aminoEncoding?.enabled &&
          !context.options.aminoEncoding.useLegacyInlineEncoding
        ) {
          // check and see if this derived import has been required...
          const foundEnc = context.proto.derivedImports.find((a) => {
            if (a.type !== "ProtoMsg") return false;
            if (EncodedTypeObject.orig === a.symbol.symbolName) {
              // UNTIL you fix the ImportObjs to have ref...
              let rel = getRelativePath(a.symbol.ref, a.symbol.source);
              if (rel === EncodedTypeObject.path) {
                return true;
              }
            }
          });
          const foundAmino = context.proto.derivedImports.find((a) => {
            if (a.type !== "Amino") return false;
            if (
              AminoTypeObject.orig === a.symbol.symbolName &&
              a.symbol.ref &&
              a.symbol.source
            ) {
              // UNTIL you fix the ImportObjs to have ref...
              let rel = getRelativePath(a.symbol.ref, a.symbol.source);
              if (rel === AminoTypeObject.path) {
                return true;
              }
            }
          });

          // we need Any types as defaults...
          if (foundEnc || EncodedTypeObject.orig === "Any") {
            arr.push(EncodedTypeObject);
          }
          if (foundAmino || AminoTypeObject.orig === "Any") {
            arr.push(AminoTypeObject);
          }
        }
        if (context.options.useSDKTypes) {
          // issue in output1 (probably legacy v1 amino transpiler)
          // ProposalSDKType wasn't being found in QueryProposalResponseSDKType
          arr.push(SDKTypeObject);
          // const foundSDK = context.proto.derivedImports.find(a => {
          //     if (a.type !== 'SDKType') return false;

          //     if (SDKTypeObject.orig === a.symbol.symbolName) {
          //         // UNTIL you fix the ImportObjs to have ref...
          //         let rel = getRelativePath(a.symbol.ref, a.symbol.source);
          //         if (rel === SDKTypeObject.path) {
          //             return true;
          //         }
          //     }
          // });

          // if (foundSDK) {
          //     arr.push(SDKTypeObject);
          // }
        }

        return arr;
      }
    }
    return [...m, obj];
  }, []);
};

export const aggregateImports = (
  context: TelescopeParseContext,
  allImports: ImportHash,
  filepath: string
): ImportObj[] => {
  const protoImports: ImportObj[] = getProtoImports(context, filepath);
  const aminoImports: ImportObj[] = getAminoImports(context, filepath);
  const genericImports: ImportObj[] = getGenericImports(context, filepath);
  const parsedImports: ImportObj[] = getParsedImports(
    context,
    context.amino.ref.traversed.parsedImports,
    filepath
  );
  const additionalImports: ImportObj[] = importHashToArray(allImports);
  const utilities: ImportObj[] = convertUtilsToImports(context);

  const list = []
    .concat(parsedImports)
    .concat(utilities)
    .concat(protoImports)
    .concat(aminoImports)
    .concat(genericImports)
    .concat(additionalImports);

  if (
    context.options.useSDKTypes ||
    (context.options.aminoEncoding?.enabled &&
      !context.options.aminoEncoding?.useLegacyInlineEncoding)
  ) {
    return addDerivativeTypesToImports(context, list);
  } else {
    return list;
  }
};

export const getImportsFromMutations = (mutations: ServiceMutation[]) => {
  return mutations.map((mutation) => {
    return {
      import: mutation.messageImport,
      name: mutation.message,
    };
  });
};

// TODO implement ServiceQuery type (it is the same)
export const getImportsFromQueries = (queries: ServiceMutation[]) => {
  return queries.reduce((m, query) => {
    const req = {
      import: query.messageImport,
      name: query.message,
    };
    const res = {
      import: query.responseImport,
      name: query.response,
    };
    return [...m, req, res];
  }, []);
};

export const getDepsFromMutations = (
  mutations: ServiceMutation[],
  filename: string
) => {
  return getImportsFromMutations(mutations)
    .map((imp) => {
      const f = filename;
      const f2 = imp.import;
      if (f === f2) return;
      const importPath = getRelativePath(f, f2);
      return {
        ...imp,
        importPath,
      };
    })
    .filter(Boolean)
    .reduce((m, v) => {
      m[v.importPath] = m[v.importPath] ?? [];
      if (!m[v.importPath].includes(v.name)) {
        m[v.importPath].push(v.name);
      }
      return m;
    }, {});
};

export const getDepsFromQueries = (queries: any[], filename: string) => {
  return getImportsFromQueries(queries)
    .map((imp) => {
      const f = filename;
      const f2 = imp.import;
      if (f === f2) return;
      const importPath = getRelativePath(f, f2);
      return {
        ...imp,
        importPath,
      };
    })
    .filter(Boolean)
    .reduce((m, v) => {
      m[v.importPath] = m[v.importPath] ?? [];
      if (!m[v.importPath].includes(v.name)) {
        m[v.importPath].push(v.name);
      }
      return m;
    }, {});
};
