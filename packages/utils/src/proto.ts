import { camel, variableSlug } from ".";
import { pascal, snake } from "case";
import minimatch from "minimatch";
import { ProtoRef, ProtoRoot } from "@subql/x-cosmology-types";
import dotty from "dotty";

export const getNestedProto = (root: ProtoRoot) => {
  const nestedPath =
    "root.nested." + root.package.split(".").join(".nested.") + ".nested";
  return dotty.get(root, nestedPath);
};

export const getNestedProtoGeneric = (root: ProtoRoot, path: string[]) => {
  path = root.package.split(".").concat(path);
  const nestedPath = "root.nested." + path.join(".nested.") + ".nested";
  return dotty.get(root, nestedPath);
};

export const getNested = (root: ProtoRoot, path: string[]) => {
  const nestedPath = "root.nested." + path.join(".nested.") + ".nested";
  return dotty.get(root, nestedPath);
};

/**
 * to make a customized hook name.
 * e.g. snake_case -> useSnakeCase.
 *      Snake -> use_Snake (be more careful on this case)
 *      snake_Case -> useSnake_Case (be more careful on this case)
 * There're some wierd cases because of the camel function only replaces lower case letters leading with '_' to upper case.
 * @param name base name without the word 'use'
 * @returns customized hook name like 'useSth'
 */
export const makeUseHookName = (name: string) => {
  return camel("use_" + name);
};

export const makeUseHookNameWithCamel = (name: string) => {
  return camel("use_" + camel(name));
};

export const makeUsePkgHookName = (packageName: string, name: string) => {
  return variableSlug(`use_${packageName.replace(/\./g, "_")}_${snake(name)}`);
};

export const makePkgMethodName = (packageName: string, name: string) => {
  return variableSlug(`pkg_${packageName.replace(/\./g, "_")}_${snake(name)}`);
};

export const makeUseHookTypeName = (name: string) => {
  return pascal("Use_" + name + "Query");
};

export const makeHookKeyName = (name: string) => {
  return camel(name + "Query");
};


// https://github.com/isaacs/minimatch/blob/main/src/index.ts#L61
// Optimized checking for the most common glob patterns.
const globPattern = /\*+([^+@!?\*\[\(]*)/;

/**
 * Get a list of query method names that matches the given patterns.
 * @param packagePath package path like 'cosmos.bank.v1beta1'
 * @param methodKeys query method names
 * @param patterns minimatch pattern like 'cosmos.auth.**'
 * @returns Array of query method names match the given pattern.
 */
export const getQueryMethodNames = (
  packagePath: string,
  methodKeys: string[],
  patterns?: string[],
  makeMethodName?: Function
) => {
  const make = makeMethodName ?? makeUseHookNameWithCamel;

  return methodKeys
    .map((key) => {

      const methodName = make(key);
      const methodNameWithPkg = `${packagePath}.${methodName}`;

      const isMatching =
        patterns &&
        patterns.some((pattern) => {
          if (!globPattern.test(pattern)) {
            return methodNameWithPkg === pattern;
          }
          return minimatch(methodNameWithPkg, pattern);
        });

      if (isMatching) {
        return key;
      } else {
        return null;
      }
    })
    .filter(Boolean);
};

/**
 * test if a proto ref is included by the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param include patterns(will be deprecated soon), packages, proto files to include
 * @returns
 */
export const isRefIncluded = (
    ref: ProtoRef,
    include?: {
        patterns?: string[];
        packages?: string[];
        protos?: string[];
    }
) => {
    // if no include object, no filter
    if (!include) return true;
    // if no arrays are populated, no filter
    if (
        !include.patterns?.length &&
        !include.packages?.length &&
        !include.protos?.length
    ) {
        return true;
    }

    // TODO consider deprecating `patterns` in favor of packages and protos supporting minimatch
    if (Boolean(ref.filename) && include?.patterns?.some(pattern => minimatch(ref.filename, pattern))) {
        return true;
    }

    const pkgMatched = Boolean(ref.proto?.package) && include?.packages?.some(pkgName => {
        if (!globPattern.test(pkgName)) {
            return ref.proto.package === pkgName;
        }
        return minimatch(ref.proto.package, pkgName)
    });

    if (pkgMatched) {
        return true;
    }

    const protoMatched = Boolean(ref.filename) && include?.protos?.some(protoName => {
        if (!globPattern.test(protoName)) {
            return ref.filename === protoName;
        }
        return minimatch(ref.filename, protoName)
    });

    if (protoMatched) {
        return true;
    }

    return false;

};

/**
 * test if a proto ref is excluded from the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param exclude patterns(will be deprecated soon), packages, proto files to exclude
 * @returns
 */
export const isRefExcluded = (
    ref: ProtoRef,
    exclude?: {
        packages?: string[];
        protos?: string[];
    }
) => {
    // if no include object, no filter
    if (!exclude) return false;
    // if no arrays are populated, no filter
    if (
        !exclude.packages?.length &&
        !exclude.protos?.length
    ) {
        return false;
    }

    return isRefIncluded(ref, exclude);
};

/*
    nested objects get a slightly different naming convention
    e.g. SignatureDescriptor_Data or SignatureDescriptor_Data_Multi
*/

export const getObjectName = (name: string, scope: string[] = []) => {
    if (!scope.length || scope.length === 1) return name;
    const [_pkg, ...scopes] = scope;
    return [...scopes, name].join('_')
};
