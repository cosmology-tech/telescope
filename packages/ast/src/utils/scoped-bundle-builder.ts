import * as t from '@babel/types';
import { GenericParseContext } from '../encoding';
import { objectPattern } from '.';
import { variableSlug } from '@osmonauts/utils';

const DEFAULT_RPC_PARAM_NAME = 'rpc';

/**
 * Create an AST for a certain key and method.
 * eg: __fixtures__/output1/hooks.ts
 * v1beta2: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc)
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} path - filename of a package.
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export const buildSingleCreator = (
  imports: HookImport[],
  path: string,
  methodName: string
) => {
  imports.push({
    as: variableSlug(path),
    path
  });

  return t.callExpression(
    t.memberExpression(
      t.identifier(variableSlug(path)),
      t.identifier(methodName)
    ),
    [t.identifier(DEFAULT_RPC_PARAM_NAME)]
  );
};

/**
 * Create an ASTs for method creators of packages recursively, and get imports of packages.
 * eg: __fixtures__/output1/hooks.ts
 * export const createRpcQueryHooks = ...
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} obj - mapping of packages and rpc query filenames
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export const buildNestedCreator = (
  imports: HookImport[],
  obj: object,
  methodName: string
) => {
  //if obj is a path, end recursion and get the mapping.
  if (typeof obj === 'string') {
    return buildSingleCreator(imports, obj, methodName);
  }

  const keys = Object.keys(obj);

  // get hooks for keys of the obj.
  return t.objectExpression(
    keys.map((name) => {
      return t.objectProperty(
        t.identifier(name),
        buildNestedCreator(imports, obj[name], methodName)
      );
    })
  );
};

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
export const buildExportCreators = (
  context: GenericParseContext,
  obj: object,
  identifier: string,
  utils: string[],
  methodName: string = 'createRpcQueryHooks'
) => {
  // add imports
  utils.forEach((util) => {
    context.addUtil(util);
  });

  const hookImports: HookImport[] = [];

  const ast = t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        // eg: createRPCQueryHooks
        t.identifier(identifier),
        t.arrowFunctionExpression(
          [
            objectPattern(
              [
                t.objectProperty(
                  t.identifier(DEFAULT_RPC_PARAM_NAME),
                  t.identifier(DEFAULT_RPC_PARAM_NAME),
                  false,
                  true
                )
              ],
              t.tsTypeAnnotation(
                t.tsTypeLiteral([
                  t.tsPropertySignature(
                    t.identifier(DEFAULT_RPC_PARAM_NAME),
                    t.tsTypeAnnotation(
                      t.tsUnionType([
                        t.tsTypeReference(t.identifier('ProtobufRpcClient')),
                        t.tsUndefinedKeyword()
                      ])
                    )
                  )
                ])
              )
            )
          ],
          t.blockStatement([
            t.returnStatement(buildNestedCreator(hookImports, obj, methodName))
          ]),
          false
        )
      )
    ])
  );

  // generate imports for packages.
  const imports = hookImports.map((hookport) => {
    return {
      type: 'ImportDeclaration',
      importKind: 'value',
      specifiers: [
        {
          type: 'ImportNamespaceSpecifier',
          local: {
            type: 'Identifier',
            name: hookport.as
          }
        }
      ],
      source: {
        type: 'StringLiteral',
        value: hookport.path
      }
    };
  });

  return [...imports, ast];
};
