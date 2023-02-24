import * as t from '@babel/types';
import { ProtoService, ProtoServiceMethod } from '@osmonauts/types';
import { GenericParseContext } from '../../encoding';

import { camel } from '@osmonauts/utils';

const firstLower = (s: string) => s = s.charAt(0).toLowerCase() + s.slice(1);
const firstUpper = (s: string) => s = s.charAt(0).toUpperCase() + s.slice(1);

interface Method {
  name: string,
  method: any,
}

function buildState(methods: Method[]) {
  const fields = methods.map(x => t.objectProperty(
    t.identifier(x.name),
    t.tsAsExpression(
      t.identifier("{}"),
      t.tsUnionType([
        t.tsTypeReference(t.identifier(`${x.method.responseType}SDKType`)),
      ]),
    )))
  return t.arrowFunctionExpression([], t.blockStatement([
    t.returnStatement(t.objectExpression(fields))
  ]))
}

function buildAction(methods: Method[]) {
  const fields = methods.map(x => t.objectMethod(
    'method',
    t.identifier(`fetch${firstUpper(x.name)}`),
    [t.identifier(`param : ${x.method.requestType}SDKType`)],
    t.blockStatement([
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(t.thisExpression(), t.identifier(x.name)),
          t.awaitExpression(
            t.callExpression(
              t.memberExpression(t.memberExpression(t.thisExpression(), t.identifier('lcdClient')), t.identifier(x.name)),
              [t.identifier('param')]
            )
          )
        )
      ),
      t.returnStatement(t.memberExpression(t.thisExpression(), t.identifier(x.name)))
    ]),
    false, false, true
  ))
  return t.objectExpression(fields)
}

function buildGetter(method: Method[]) {
  return t.objectExpression([t.objectMethod(
    'method',
    t.identifier('lcdClient'),
    [],
    t.blockStatement([
      t.variableDeclaration(
        'const',
        [
          t.variableDeclarator(
            t.identifier('requestClient'),
            t.memberExpression(
              t.callExpression(t.identifier('useEndpoint'), []),
              t.identifier('restClient')
            )
          ),
        ]
      ),
      t.returnStatement(t.newExpression(t.identifier('LCDQueryClient'),
        [
          t.identifier('{ requestClient }')
        ]))
    ])
  )])
}

function getStoreName(key: string): string {
  const names = key.split('/')
  return `use${firstUpper(names[0])}${firstUpper(names[1])}`
}

export const createPiniaStore = (
  context: GenericParseContext,
  service: ProtoService
) => {

  context.addUtil('LCDClient');
  context.addUtil('useEndpoint');

  const key = context.ref.filename
  const storeName = 'usePiniaStore'
  // const storeName = getStoreName(key)

  const methods: Method[] = Object.keys(service.methods ?? {})
    .map(key => {
      const method = service.methods[key];
      // console.log('method:', method)
      const name = camel(key)
      return { name, method }
    });

  return t.exportNamedDeclaration(
    t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(storeName),
        t.callExpression(
          t.identifier('defineStore'),
          [
            t.identifier(`'${key}'`),
            t.objectExpression([
              t.objectProperty(t.identifier('state'), buildState(methods)),
              t.objectProperty(t.identifier('getters'), buildGetter(methods)),
              t.objectProperty(t.identifier('actions'), buildAction(methods)),
            ]),
          ]))
    ])
  )
};

