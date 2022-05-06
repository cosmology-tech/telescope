import * as t from '@babel/types';
import { identifier } from '../../utils';

export interface Mutation {
  methodName: string;
  typeUrl: string;
  TypeName: string;
}

export const addMsgMethod = ({ methodName, typeUrl, TypeName, methodToCall }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    identifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier(TypeName)
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([
        t.objectProperty(
          t.identifier('typeUrl'),
          t.stringLiteral(typeUrl)
        ),
        t.objectProperty(
          t.identifier('value'),
          t.callExpression(
            t.memberExpression(
              t.identifier(TypeName),
              t.identifier(methodToCall)
            ),
            [t.identifier('value')]
          )
        )
      ])
    )]));
};

export const addFromJSONMethod = ({ methodName, typeUrl, TypeName }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    identifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier('any')
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([
        t.objectProperty(
          t.identifier('typeUrl'),
          t.stringLiteral(typeUrl)
        ),
        t.objectProperty(
          t.identifier('value'),
          t.callExpression(
            t.memberExpression(
              t.identifier(TypeName),
              t.identifier('fromJSON')
            ),
            [t.identifier('value')]
          )
        )
      ])
    )]));
};

export const addFromPartialMethod = ({ methodName, typeUrl, TypeName }) => {
  return addMsgMethod({ methodName, typeUrl, TypeName, methodToCall: 'fromPartial' });
};

export const addToJSONMethod = ({ methodName, typeUrl, TypeName }) => {
  return addMsgMethod({ methodName, typeUrl, TypeName, methodToCall: 'toJSON' });
};


export const addJsonMethod = ({ methodName, typeUrl, TypeName }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    identifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier(TypeName)
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([
        t.objectProperty(
          t.identifier('typeUrl'),
          t.stringLiteral(typeUrl)
        ),
        t.objectProperty(
          t.identifier('value'),
          t.identifier('value'),
          false,
          true
        )
      ])
    )]));
};

export const addEncodedMethod = ({ methodName, typeUrl, TypeName }) => {
  return t.objectMethod('method', t.identifier(methodName), [
    identifier('value', t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier(TypeName)
      )
    ))
  ], t.blockStatement([
    t.returnStatement(
      t.objectExpression([

        t.objectProperty(
          t.identifier('type_url'),
          t.stringLiteral(typeUrl)
        ),

        t.objectProperty(
          t.identifier('value'),
          t.callExpression(
            t.memberExpression(
              t.callExpression(
                t.memberExpression(
                  t.identifier(TypeName),
                  t.identifier('encode')
                ),
                [
                  t.identifier('value')
                ]
              ),
              t.identifier('finish')
            ),
            []
          )
        )
      ])
    )]));
};


export const toObjectWithPartialMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('messages'), t.objectExpression(
    mutations.map(mutation => addFromPartialMethod(mutation))
  ))]));

export const toObjectWithEncodedMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('encoded'), t.objectExpression(
    mutations.map(mutation => addEncodedMethod(mutation))
  ))]));

export const toObjectWithJsonMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('json'), t.objectExpression(
    mutations.map(mutation => addJsonMethod(mutation))
  ))]));

export const toObjectWithToJSONMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('toJSON'), t.objectExpression(
    mutations.map(mutation => addToJSONMethod(mutation))
  ))]));

export const toObjectWithFromJSONMethods = (mutations: Mutation[]) => t.exportNamedDeclaration(t.variableDeclaration('const', [
  t.variableDeclarator(t.identifier('fromJSON'), t.objectExpression(
    mutations.map(mutation => addFromJSONMethod(mutation))
  ))]));

