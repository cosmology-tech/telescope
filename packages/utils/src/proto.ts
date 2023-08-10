import { camel, variableSlug } from ".";
import { pascal } from "case";
import minimatch from "minimatch";

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

export const makeUsePkgHookName = (packageName: string, name: string) => {
  return variableSlug(`use_${packageName.replace(/\./g, "_")}_${name}`);
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
  patterns?: string[]
) => {
  return methodKeys
    .map((key) => {
      const useHookName = makeUseHookName(camel(key));
      const hookNameWithPkg = `${packagePath}.${useHookName}`;

      const isMatching =
        patterns &&
        patterns.some((pattern) => {
          if (!globPattern.test(pattern)) {
            return hookNameWithPkg === pattern;
          }
          return minimatch(hookNameWithPkg, pattern);
        });

      if (isMatching) {
        return key;
      } else {
        return null;
      }
    })
    .filter(Boolean);
};

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
