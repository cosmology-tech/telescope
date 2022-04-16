import * as t from '@babel/types';
import { snake } from 'case';
import { Enum, Field, Interface, MessageSchema } from '../types';
import {
  BILLION,
  getFieldDimensionality,
  memberExpressionOrIdentifierSnake,
  shorthandProperty
} from '../utils';

export const fromAminoStringToLong = (prop: string, scope: string[]) => {
  return t.objectProperty(t.identifier(prop),
    t.callExpression(
      t.memberExpression(
        t.identifier('Long'),
        t.identifier('fromString')
      ),
      [
        memberExpressionOrIdentifierSnake(scope)
      ]
    ))
}

export const fromAminoFromArrayCall = (prop: string, scope: string[]) => {
  return t.objectProperty(t.identifier(prop),
    t.callExpression(
      t.memberExpression(
        t.identifier('Array'),
        t.identifier('from')
      ),
      [
        memberExpressionOrIdentifierSnake(scope)
      ]
    ))
}

export const fromAminoSnakeToCamel = (prop: string, scope: string[]) => {
  if (prop === snake(prop) && scope.length === 1) {
    return shorthandProperty(prop);
  }
  return t.objectProperty(t.identifier(prop), memberExpressionOrIdentifierSnake(scope))
}

export const fromAminoHeight = (prop: string, scope: string[]) => {
  return t.objectProperty(
    t.identifier(prop),
    t.conditionalExpression(
      memberExpressionOrIdentifierSnake(scope),
      t.objectExpression([
        t.objectProperty(t.identifier('revisionHeight'),
          t.callExpression(
            t.memberExpression(t.identifier('Long'), t.identifier('fromString')),
            [
              t.logicalExpression(
                '||',
                t.memberExpression(
                  memberExpressionOrIdentifierSnake(scope),
                  t.identifier('revision_height')
                ),
                t.stringLiteral('0')
              ),
              t.booleanLiteral(true)
            ])
        ),
        //
        t.objectProperty(t.identifier('revisionNumber'),
          t.callExpression(
            t.memberExpression(t.identifier('Long'), t.identifier('fromString')),
            [
              t.logicalExpression(
                '||',
                t.memberExpression(
                  memberExpressionOrIdentifierSnake(scope),
                  t.identifier('revision_number')
                ),
                t.stringLiteral('0')
              ),
              t.booleanLiteral(true)
            ])
        )
      ]),
      t.identifier('undefined')
    )
  )
};

export const fromAminoDuration = (prop: string, scope: string[]) => {
  const value = t.objectExpression(
    [
      t.objectProperty(t.identifier('seconds'), t.callExpression(
        t.memberExpression(t.identifier('Long'), t.identifier('fromNumber')), [
        t.callExpression(
          t.memberExpression(
            t.identifier('Math'),
            t.identifier('floor')
          ),
          [
            t.binaryExpression('/',
              t.callExpression(
                t.identifier('parseInt'),
                [
                  memberExpressionOrIdentifierSnake(scope)
                ]
              ),
              BILLION
            )
          ]
        )
      ]
      )),
      t.objectProperty(
        t.identifier('nanos'),
        t.binaryExpression('%',
          t.callExpression(
            t.identifier('parseInt'),
            [
              memberExpressionOrIdentifierSnake(scope)
            ]
          ),
          BILLION
        )
      )
    ]
  );
  return t.objectProperty(t.identifier(prop), value);
};

export const fromAminoEnum = (val: Enum, field: Field, scope: string[]) => {
  const toFunc = val.to.funcName;
  const value = t.callExpression(
    t.identifier(toFunc), [
    memberExpressionOrIdentifierSnake(scope)
  ]);
  return t.objectProperty(t.identifier(field.name), value);
};

export const fromAminoEnumArray = (val: Enum, field: Field, scope: string[]) => {
  const toFunc = val.to.funcName;
  const value = t.callExpression(
    t.memberExpression(
      memberExpressionOrIdentifierSnake(scope),
      t.identifier('map')
    ),
    [
      t.arrowFunctionExpression(
        [
          t.identifier('el')
        ],
        t.callExpression(
          t.identifier(toFunc),
          [
            t.identifier('el')
          ]
        )
      )
    ]
  );
  return t.objectProperty(t.identifier(field.name), value);
};

export const fromAminoInterface = (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number) => {
  const properties = ival.fields.map(field => {
    return fromAminoParseField(field, enums, interfaces, scope, nested + 1)
  });
  return t.objectProperty(t.identifier(field.name),
    t.objectExpression(
      properties
    )
  );
};

export const fromAminoInterfaceArray = (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number) => {
  const variable = 'el' + nested;
  const properties = ival.fields.map(field => {
    return fromAminoParseField(field, enums, interfaces, [variable], nested + 1)
  });

  const expr = t.callExpression(
    t.memberExpression(
      memberExpressionOrIdentifierSnake(scope),
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

  return t.objectProperty(t.identifier(field.name),
    expr
  );
};

export const fromAminoParseField = (field: Field, enums: Enum[], interfaces: Interface[], scope = [], nested = 0) => {

  const newScope = [field.name, ...scope];
  const { typeName, dimensions, isArray } = getFieldDimensionality(field);

  // special cases
  switch (field.type) {
    case 'Duration':
      return fromAminoDuration(field.name, newScope);
    case 'Height':
      return fromAminoHeight(field.name, newScope);
    default:
  }

  // enums
  const val = enums.find(e => e.name === typeName);
  if (val) {
    if (!isArray) {
      return fromAminoEnum(val, field, newScope);
    } else if (dimensions === 0) {
      return fromAminoEnumArray(val, field, newScope);
    }
  }

  // definitions/interfaces
  const ival: Interface = interfaces.find(e => e.name === typeName);
  if (ival) {
    if (!isArray) {
      return fromAminoInterface(field, ival, enums, interfaces, newScope, nested);
    } else if (dimensions === 0) {
      return fromAminoInterfaceArray(field, ival, enums, interfaces, newScope, nested);
    }
  }

  switch (field.type) {
    case 'Long':
      return fromAminoStringToLong(field.name, newScope);
    case 'Coin[]':
      return fromAminoFromArrayCall(field.name, newScope);
    default:
      return fromAminoSnakeToCamel(field.name, newScope);
  }
};

export const fromAmino = (schema: MessageSchema, enums: Enum[], interfaces: Interface[]) => {

  const fromAminoParams = t.objectPattern(
    schema.fields.map((field) => t.objectProperty(t.identifier(snake(field.name)), t.identifier(snake(field.name)), false, true))
  );
  fromAminoParams.typeAnnotation = t.tsTypeAnnotation(t.tsIndexedAccessType(
    t.tsTypeReference(t.identifier('Amino' + schema.name)),
    t.tsLiteralType(t.stringLiteral('value'))
  ))

  const fromAmino = t.arrowFunctionExpression(
    [
      fromAminoParams
    ],
    t.blockStatement([
      t.returnStatement(
        t.objectExpression(
          schema.fields.map((field) => fromAminoParseField(field, enums, interfaces))
        )
      )
    ])
  );

  fromAmino.returnType = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(schema.name)));

  return fromAmino;
};
