import minimatch from "minimatch";
import {
  TelescopeOptions,
  TelescopeOption,
  ProtoRef,
  ImportUsage,
  ProtoEnum,
} from "@cosmology/types";
import { ImportDeclaration } from "@babel/types";
import * as dotty from "dotty";
import { sync as globSync } from 'glob';

const posixPath = require('path').posix;

/**
 * swap the key and value of the input object
 * @param input obj needs to swap
 * @returns swapped obj
 */
export const swapKeyValue = (input: {
  [key: string]: string;
}): {
  [key: string]: string;
} => {
  const output: { [key: string]: string } = {};

  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      output[input[key]] = key;
    }
  }

  return output;
};

const getAllPackageParts = (name: string, list?: string[]) => {
  if (!list) list = [name];
  const newParts = name.split(".");
  newParts.pop();
  if (!newParts.length) return [...list];
  const newName = newParts.join(".");
  return getAllPackageParts(newName, [...list, newName]);
};

export const getPluginValue = (
  optionName: TelescopeOption | string,
  currentPkg: string,
  options: TelescopeOptions
) => {
  const pkgOpts = options.packages;
  let value;
  if (currentPkg) {
    getAllPackageParts(currentPkg).some((pkg, i) => {
      if (dotty.exists(pkgOpts, pkg)) {
        const obj = dotty.get(pkgOpts, pkg);
        if (dotty.exists(obj, optionName)) {
          value = dotty.get(obj, optionName);
          return true;
        }
      }
    });
  }
  if (value === undefined) {
    const defaultValue = dotty.exists(options, optionName)
      ? dotty.get(options, optionName)
      : undefined;
    value = defaultValue;
  }
  return value;
};

export const buildImports = (imports: ImportUsage[]) => {
  return imports.map((item) => {
    return {
      type: "ImportDeclaration",
      importKind: "value",
      specifiers: [
        {
          type: "ImportNamespaceSpecifier",
          local: {
            type: "Identifier",
            name: item.importedAs,
          },
        },
      ],
      source: {
        type: "StringLiteral",
        value: item.import,
      },
    };
  });
};

// https://github.com/isaacs/minimatch/blob/main/src/index.ts#L61
// Optimized checking for the most common glob patterns.
const globPattern = /\*+([^+@!?\*\[\(]*)/;

export const getServiceImplement = (
  serviceName:
    | "Msg"
    | "Query"
    | "Service"
    | "ReflectionService"
    | "ABCIApplication"
    | string,
  packagePath: string,
  methodName: string,
  serviceImplement?: {
    [
    key:
      | "Msg"
      | "Query"
      | "Service"
      | "ReflectionService"
      | "ABCIApplication"
      | string
    ]: {
      include?: {
        patterns?: string[];
      };
      type: "Query" | "Tx" | string;
    };
  }
) => {
  if (serviceImplement) {
    const implement = serviceImplement[serviceName];
    if (implement) {
      const methodNameWithPkg = `${packagePath}.${methodName}`;

      const isMatching =
        !implement.include?.patterns?.length ||
        implement.include.patterns.some((pattern) => {
          if (!globPattern.test(pattern)) {
            return methodNameWithPkg === pattern;
          }
          return minimatch(methodNameWithPkg, pattern);
        });

      if (isMatching) {
        return implement.type;
      } else {
        return undefined;
      }
    }
  }

  return undefined;
};

/**
 * Add extension to path
 */
export const restoreExtension = (path: string, ext?: string) => {
  if (!ext) {
    return path;
  }

  const fixedExt = ext.startsWith(".") ? ext : `.${ext}`;

  if (
    path.startsWith(".") &&
    !path.endsWith(".js") &&
    !path.endsWith(fixedExt)
  ) {
    return `${path}${fixedExt}`;
  }

  return path;
};

/**
 * To duplicate the import paths with the extension.
 * @param paths ImportDeclarations
 * @param ext extension
 * @returns duplicated import paths with the extension
 */
export const duplicateImportPathsWithExt = (paths: ImportDeclaration[], ext?: string) => {
  if (!ext) {
    return paths;
  }

  return paths.map(path => {
    return {
      ...path,
      source: {
        ...path.source,
        value: restoreExtension(path.source.value, ext)
      }
    }
  })
};

export interface EnumValue {
  name: string;
  comment?: string | null;
  value: number;
}

export const getEnumValues = (proto: ProtoEnum): EnumValue[] => {
  const enums = Object.keys(proto.values).map(key => {
    const e = {
      name: key,
      comment: null,
      value: null
    };
    e.value = proto.values[key];
    if (proto.comments[key]) {
      e.comment = proto.comments[key];
    }
    return e;
  });
  return enums;
}

/**
 * get the type name by enum object while traversing the nested enum
 * @param field
 * @param pkg name space
 * @param traversal traversed name spaces and nested enum names
 * @param isNested whether the enum is nested
 * @returns
 */
export const getTypeNameByEnumObj = (field: any, pkg: string, traversal: string[], isNested: boolean) => {
  return !isNested ? field.name : excludePackageFromTraversal(pkg, traversal);
}

function excludePackageFromTraversal(pkg: string, traversal: string[]) {
  const connectedPkg = pkg.split('.').join('_') + '_';

  return traversal.join('_').replace(connectedPkg, '');
}

/**
 * Converts a dot-separated package name into a deeply nested JSON path format suitable for
 * hierarchical representations. This function is ideal for adapting package names like those
 * used in Protobuf or similar systems to structured configurations or mappings in JSON.
 *
 * @param packageName The dot-separated package name as a string, typically formatted as
 *                    a namespace structure such as "cosmwasm.wasm.v1".
 *
 *                    Example input:
 *                    - "cosmwasm.wasm.v1"
 *
 * @returns A string representing the deeply nested JSON path. The function constructs this
 *          by starting with "/root/nested" and appending "/nested/{part}" for each segment
 *          of the package name. This mimics a directory path structure in a JSON tree, where
 *          each package level is further nested within its parent.
 *
 *          Example output for "cosmwasm.wasm.v1":
 *          - "/root/nested/cosmwasm/nested/wasm/nested/v1"
 *
 * Usage:
 * const jsonNestedPath = convertPackageNameToNestedJSONPath("cosmwasm.wasm.v1");
 * console.log(jsonNestedPath);  // Outputs: "/root/nested/cosmwasm/nested/wasm/nested/v1/nested"
 */
export function convertPackageNameToNestedJSONPath(packageName: string): string {
  const parts = packageName.split('.');

  let jsonPath = '/root/nested';
  parts.forEach(part => {
    jsonPath += `/${part}/nested`;
  });

  return jsonPath;
}

// Replace all \\ to / for windows support purpose
export const crossGlob = (input:string, options?:object) => {
    return globSync(toPosixPath(input), options);
}

// Unify all the path to posixPath for windows support purpose
export const toPosixPath = (mixedPath): string => {
  return mixedPath.replace(/\\/g, posixPath.sep);
}

