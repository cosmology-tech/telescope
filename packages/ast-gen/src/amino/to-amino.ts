import * as t from '@babel/types';
import { snake } from 'case';
import { BILLION, getFieldDimensionality, memberExpressionOrIdentifier, shorthandProperty } from '../utils';
import { Enum, Field, Interface, MessageSchema } from '../types';

export const toAminoDuration = (prop: string, scope: string[]) => {
  const exp = t.binaryExpression(
    '*',
    memberExpressionOrIdentifier(scope),
    BILLION
  );
  exp.extra = { parenthesized: true };
  const value = t.callExpression(
    t.memberExpression(
      exp,
      t.identifier('toString')
    ),
    []
  )
  return t.objectProperty(t.identifier(snake(prop)), value);
};

export const toAminoSnakeToCamel = (prop: string, scope: string[]) => {
  if (prop === snake(prop) && scope.length === 1) {
    return shorthandProperty(prop);
  }
  return t.objectProperty(t.identifier(snake(prop)), memberExpressionOrIdentifier(scope))
};

export const toAminoInterface = (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number) => {
  const properties = ival.fields.map(field => {
    return toAminoParseField(field, enums, interfaces, scope, nested)
  });
  return t.objectProperty(t.identifier(snake(field.name)),
    t.objectExpression(
      properties
    )
  );
};

export const toAminoInterfaceArray = (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number) => {
  const variable = 'el' + nested;
  const properties = ival.fields.map(field => {
    return toAminoParseField(field, enums, interfaces, [variable], nested + 1)
  });

  const expr = t.callExpression(
    t.memberExpression(
      memberExpressionOrIdentifier(scope),
      t.identifier('map')
    ),
    [
      t.arrowFunctionExpression(
        [
          t.identifier(variable)
        ],
        t.objectExpression(
          properties
        )
      )
    ]
  );

  return t.objectProperty(t.identifier(snake(field.name)),
    expr
  );
}

export const toAminoLongToString = (prop: string, scope: string[]) => {
  return t.objectProperty(t.identifier(snake(prop)),
    t.callExpression(
      t.memberExpression(memberExpressionOrIdentifier(scope), t.identifier('toString')),
      [])
  )
};

export const toAminoCoin = (prop: string, scope: string[]) => {
  const value = t.objectExpression([
    t.objectProperty(t.identifier('denom'), t.memberExpression(
      memberExpressionOrIdentifier(scope),
      t.identifier('denom'),
    )),
    t.objectProperty(
      t.identifier('amount'),
      t.callExpression(
        t.memberExpression(
          t.callExpression(
            t.memberExpression(
              t.identifier('Long'),
              t.identifier('fromNumber')
            ),
            [
              t.memberExpression(
                memberExpressionOrIdentifier(scope),
                t.identifier('amount')
              )
            ]
          ),
          t.identifier('toString')
        ),
        []
      )
    )
  ]);
  return t.objectProperty(t.identifier(snake(prop)), value);
};

export const toAminoHeight = (prop: string, scope: string[]) => {
  const value = t.objectExpression(
    [
      t.objectProperty(
        t.identifier('revision_height'),
        t.optionalCallExpression(
          t.optionalMemberExpression(
            t.callExpression(
              t.identifier('omitDefault'),
              [
                t.memberExpression(
                  memberExpressionOrIdentifier(scope),
                  t.identifier('revisionHeight')
                )
              ]
            ),
            t.identifier('toString'),
            false,
            true
          ),
          [],
          false
        )
      ),
      //
      t.objectProperty(
        t.identifier('revision_number'),
        t.optionalCallExpression(
          t.optionalMemberExpression(
            t.callExpression(
              t.identifier('omitDefault'),
              [
                t.memberExpression(
                  memberExpressionOrIdentifier(scope),
                  t.identifier('revisionNumber')
                )
              ]
            ),
            t.identifier('toString'),
            false,
            true
          ),
          [],
          false
        )
      )
    ]
  );

  const cond = t.conditionalExpression(
    memberExpressionOrIdentifier(scope),
    value,
    t.objectExpression([])
  );

  return t.objectProperty(t.identifier(snake(prop)), cond);
};

export const toAminoParseField = (field: Field, enums: Enum[], interfaces: Interface[], scope = [], nested = 0) => {

  const newScope = [field.name, ...scope];
  const { typeName, dimensions, isArray } = getFieldDimensionality(field);

  // special cases
  switch (field.type) {
    case 'Coin':
      return toAminoCoin(field.name, newScope);
    case 'Duration':
      return toAminoDuration(field.name, newScope);
    case 'Height':
      return toAminoHeight(field.name, newScope);
    default:
  }

  // TODO QUESTION do we need to handle enums?

  // definitions/interfaces
  const ival: Interface = interfaces.find(e => e.name === typeName);
  if (ival) {
    if (!isArray) {
      return toAminoInterface(field, ival, enums, interfaces, newScope, nested);
    } else if (dimensions === 0) {
      return toAminoInterfaceArray(field, ival, enums, interfaces, newScope, nested);
    }
  }

  switch (field.type) {
    case 'Long':
      return toAminoLongToString(field.name, newScope);
    default:
      return toAminoSnakeToCamel(field.name, newScope);
  }
};

export const toAmino = (schema: MessageSchema, enums: Enum[], interfaces: Interface[]) => {

  const TypeName = schema.name;

  const toAminoParams = t.objectPattern(
    schema.fields.map((field) => t.objectProperty(t.identifier(field.name), t.identifier(field.name), false, true))
  );
  toAminoParams.typeAnnotation = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(TypeName)))

  const toAmino = t.arrowFunctionExpression(
    [
      toAminoParams
    ],
    t.blockStatement([
      t.returnStatement(
        t.objectExpression(
          schema.fields.map((field) => toAminoParseField(field, enums, interfaces))
        )
      )
    ])
  );

  toAmino.returnType = t.tsTypeAnnotation(t.tsIndexedAccessType(
    t.tsTypeReference(t.identifier('Amino' + TypeName)),
    t.tsLiteralType(t.stringLiteral('value'))
  ));

  return toAmino;
}
