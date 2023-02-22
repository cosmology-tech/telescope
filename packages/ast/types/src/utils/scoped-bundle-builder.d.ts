import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';
/**
 * Create an AST for a certain key and method.
 * eg: __fixtures__/output1/hooks.ts
 * v1beta2: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc)
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} path - filename of a package.
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export declare const buildSingleCreator: (imports: HookImport[], path: string, methodName: string) => t.CallExpression;
/**
 * Create an ASTs for method creators of packages recursively, and get imports of packages.
 * eg: __fixtures__/output1/hooks.ts
 * export const createRpcQueryHooks = ...
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} obj - mapping of packages and rpc query filenames
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export declare const buildNestedCreator: (imports: HookImport[], obj: object, methodName: string) => any;
interface HookImport {
    as: string;
    path: string;
}
/**
 * Create an ASTs for export creators.
 * Generating files like:
 * __fixtures__/output1/hooks.ts
 * @param {Object=} context - context of generating the file
 * @param {Object=} obj - mapping of packages and rpc query filenames
 * @param {string} identifier - name of function creating hooks. eg: createRpcQueryHooks
 * @param {string[]} utils - name of imported utils.
 * @param {string} methodName - name of a certain method that creates a store or hook. eg: createRpcQueryHooks
 * @returns {ParseResult} created AST
 */
export declare const buildExportCreators: (context: GenericParseContext, obj: object, identifier: string, utils: string[], methodName?: string) => (t.ExportNamedDeclaration | {
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
