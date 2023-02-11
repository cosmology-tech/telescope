import * as t from '@babel/types';
import { GenericParseContext } from '../../encoding';
export declare const rpcHookFuncArguments: () => t.ObjectPattern[];
export declare const rpcHookClassArguments: () => t.ObjectExpression[];
/**
 * Create an AST for a certain key and hook.
 * eg: __fixtures__/output1/hooks.ts
 * v1beta2: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc)
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} path - filename of a package.
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export declare const rpcHookNewTmRequire: (imports: HookImport[], path: string, methodName: string) => t.CallExpression;
export declare const rpcHookRecursiveObjectProps: (names: string[], leaf?: any) => t.ObjectExpression;
/**
 * Create an ASTs for hooks of packages recursively, and get imports of packages.
 * eg: __fixtures__/output1/hooks.ts
 * export const createRpcQueryHooks = ...
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} obj - mapping of packages and rpc query filenames
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export declare const rpcHookTmNestedImportObject: (imports: HookImport[], obj: object, methodName: string) => any;
interface HookImport {
    as: string;
    path: string;
}
/**
 * Create an ASTs for createRpcQueryHooks and imports of related packages.
 * eg: __fixtures__/output1/hooks.ts
 * import * as _AkashAuditV1beta2Queryrpc from ...
 * export const createRpcQueryHooks = ...
 * @param {Object=} context - context of generating the file
 * @param {Object=} obj - mapping of packages and rpc query filenames
 * @param {string} identifier - name of function creating hooks. eg: createRpcQueryHooks
 * @returns {ParseResult} created AST
 */
export declare const createScopedRpcHookFactory: (context: GenericParseContext, obj: object, identifier: string) => (t.ExportNamedDeclaration | {
    type: string;
    importKind: string;
    specifiers: {
        type: string;
        local: {
            type: string;
            name: string;
        };
    }[];
    source: {
        type: string;
        value: string;
    };
})[];
export {};
