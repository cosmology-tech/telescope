import * as t from '@babel/types';
import { GenericParseContext } from '../../encoding';
import { objectPattern } from '../../utils';
import { variableSlug } from '@osmonauts/utils';

export const rpcHookFuncArguments = (): t.ObjectPattern[] => {
  return [
    objectPattern(
      [t.objectProperty(t.identifier('rpc'), t.identifier('rpc'), false, true)],
      t.tsTypeAnnotation(
        t.tsTypeLiteral([
          t.tsPropertySignature(
            t.identifier('rpc'),
            t.tsTypeAnnotation(t.tsTypeReference(t.identifier('Rpc')))
          )
        ])
      )
    )
  ];
};

export const rpcHookClassArguments = (): t.ObjectExpression[] => {
  return [
    t.objectExpression([
      t.objectProperty(t.identifier('rpc'), t.identifier('rpc'), false, true)
    ])
  ];
};

/**
 * Create an AST for a certain key and hook.
 * eg: __fixtures__/output1/hooks.ts
 * v1beta2: _AkashAuditV1beta2Queryrpc.createRpcQueryHooks(rpc)
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} path - filename of a package.
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export const rpcHookNewTmRequire = (
  imports: HookImport[],
  path: string,
  methodName: string
) => {
  // push path for imports of packages.
  imports.push({
    as: variableSlug(path),
    path
  });

  return t.callExpression(
    t.memberExpression(
      t.identifier(variableSlug(path)),
      t.identifier(methodName)
    ),
    [t.identifier('rpc')]
  );
};

export const rpcHookRecursiveObjectProps = (names: string[], leaf?: any) => {
  const [name, ...rest] = names;

  let baseComponent;
  if (names.length === 1) {
    baseComponent = leaf ? leaf : t.identifier(name);
  } else {
    baseComponent = rpcHookRecursiveObjectProps(rest, leaf);
  }

  return t.objectExpression([
    t.objectProperty(t.identifier(name), baseComponent)
  ]);
};

/**
 * Create an ASTs for hooks of packages recursively, and get imports of packages.
 * eg: __fixtures__/output1/hooks.ts
 * export const createRpcQueryHooks = ...
 * @param {Object=} imports - imports array reference for generating imports.
 * @param {Object=} obj - mapping of packages and rpc query filenames
 * @param {string} methodName - hook method name of packages
 * @returns {ParseResult} created AST
 */
export const rpcHookTmNestedImportObject = (
  imports: HookImport[],
  obj: object,
  methodName: string
) => {
  //if obj is a path, end recursion and get the mapping.
  if (typeof obj === 'string') {
    return rpcHookNewTmRequire(imports, obj, methodName);
  }

  const keys = Object.keys(obj);

  // get hooks for keys of the obj.
  return t.objectExpression(
    keys.map((name) => {
      return t.objectProperty(
        t.identifier(name),
        rpcHookTmNestedImportObject(imports, obj[name], methodName)
      );
    })
  );
};

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
export const createScopedRpcHookFactory = (
  context: GenericParseContext,
  obj: object,
  identifier: string
) => {
  // add imports
  context.addUtil('ProtobufRpcClient');

  const hookImports: HookImport[] = [];

  const ast = t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        // createRPCQueryHooks
        t.identifier(identifier),
        t.arrowFunctionExpression(
          [
            objectPattern(
              [
                t.objectProperty(
                  t.identifier('rpc'),
                  t.identifier('rpc'),
                  false,
                  true
                )
              ],
              t.tsTypeAnnotation(
                t.tsTypeLiteral([
                  t.tsPropertySignature(
                    t.identifier('rpc'),
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
            t.returnStatement(
              rpcHookTmNestedImportObject(
                hookImports,
                obj,
                'createRpcQueryHooks'
              )
            )
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
