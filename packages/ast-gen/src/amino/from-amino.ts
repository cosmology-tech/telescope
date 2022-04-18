import * as t from '@babel/types';
import { Enum, Field, Interface, MessageSchema } from '../types';
import {
  BILLION,
  getFieldDimensionality,
  memberExpressionOrIdentifierAminoCasing,
  shorthandProperty
} from '../utils';

export const fromAminoStringToLong = (prop: string, scope: string[], aminoCasingFn: Function) => {
  return t.objectProperty(t.identifier(prop),
    t.callExpression(
      t.memberExpression(
        t.identifier('Long'),
        t.identifier('fromString')
      ),
      [
        memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn)
      ]
    ))
}

export const fromAminoFromArrayCall = (prop: string, scope: string[], aminoCasingFn: Function) => {
  return t.objectProperty(t.identifier(prop),
    t.callExpression(
      t.memberExpression(
        t.identifier('Array'),
        t.identifier('from')
      ),
      [
        memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn)
      ]
    ))
}

export const fromAminoCaseToCamel = (prop: string, scope: string[], aminoCasingFn: Function) => {
  if (prop === aminoCasingFn(prop) && scope.length === 1) {
    return shorthandProperty(prop);
  }
  return t.objectProperty(t.identifier(prop), memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn))
}

export const fromAminoHeight = (prop: string, scope: string[], aminoCasingFn: Function) => {
  return t.objectProperty(
    t.identifier(prop),
    t.conditionalExpression(
      memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn),
      t.objectExpression([
        t.objectProperty(t.identifier('revisionHeight'),
          t.callExpression(
            t.memberExpression(t.identifier('Long'), t.identifier('fromString')),
            [
              t.logicalExpression(
                '||',
                t.memberExpression(
                  memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn),
                  t.identifier(aminoCasingFn('revision_height'))
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
                  memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn),
                  t.identifier(aminoCasingFn('revision_number'))
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

export const fromAminoDuration = (prop: string, scope: string[], aminoCasingFn: Function) => {
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
                  memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn)
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
              memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn)
            ]
          ),
          BILLION
        )
      )
    ]
  );
  return t.objectProperty(t.identifier(prop), value);
};

export const fromAminoEnum = (val: Enum, field: Field, scope: string[], aminoCasingFn: Function) => {
  const toFunc = val.to.funcName;
  const value = t.callExpression(
    t.identifier(toFunc), [
    memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn)
  ]);
  return t.objectProperty(t.identifier(field.name), value);
};

export const fromAminoEnumArray = (val: Enum, field: Field, scope: string[], aminoCasingFn: Function) => {
  const toFunc = val.to.funcName;
  const value = t.callExpression(
    t.memberExpression(
      memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn),
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

export const fromAminoInterface = (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number, aminoCasingFn: Function) => {
  const properties = ival.fields.map(field => {
    return fromAminoParseField(field, enums, interfaces, scope, nested + 1, aminoCasingFn)
  });
  return t.objectProperty(t.identifier(field.name),
    t.objectExpression(
      properties
    )
  );
};

export const fromAminoInterfaceArray = (field: Field, ival: Interface, enums: Enum[], interfaces: Interface[], scope: string[], nested: number, aminoCasingFn: Function) => {
  const variable = 'el' + nested;
  const properties = ival.fields.map(field => {
    return fromAminoParseField(field, enums, interfaces, [variable], nested + 1, aminoCasingFn)
  });

  const expr = t.callExpression(
    t.memberExpression(
      memberExpressionOrIdentifierAminoCasing(scope, aminoCasingFn),
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

export const fromAminoParseField = (field: Field, enums: Enum[], interfaces: Interface[], scope = [], nested = 0, aminoCasingFn: Function) => {

  const newScope = [field.name, ...scope];
  const { typeName, dimensions, isArray } = getFieldDimensionality(field);

  // special cases
  switch (field.type) {
    case 'Duration':
      return fromAminoDuration(field.name, newScope, aminoCasingFn);
    case 'Height':
      return fromAminoHeight(field.name, newScope, aminoCasingFn);
    default:
  }

  // enums
  const val = enums.find(e => e.name === typeName);
  if (val) {
    if (!isArray) {
      return fromAminoEnum(val, field, newScope, aminoCasingFn);
    } else if (dimensions === 0) {
      return fromAminoEnumArray(val, field, newScope, aminoCasingFn);
    }
  }

  // definitions/interfaces
  const ival: Interface = interfaces.find(e => e.name === typeName);
  if (ival) {
    if (!isArray) {
      return fromAminoInterface(field, ival, enums, interfaces, newScope, nested, aminoCasingFn);
    } else if (dimensions === 0) {
      return fromAminoInterfaceArray(field, ival, enums, interfaces, newScope, nested, aminoCasingFn);
    }
  }

  switch (field.type) {
    case 'Long':
      return fromAminoStringToLong(field.name, newScope, aminoCasingFn);
    case 'Coin[]':
      return fromAminoFromArrayCall(field.name, newScope, aminoCasingFn);
    default:
      return fromAminoCaseToCamel(field.name, newScope, aminoCasingFn);
  }
};

export const fromAmino = (schema: MessageSchema, enums: Enum[], interfaces: Interface[], aminoCasingFn: Function) => {

  const fromAminoParams = t.objectPattern(
    schema.fields.map((field) => t.objectProperty(t.identifier(aminoCasingFn(field.name)), t.identifier(aminoCasingFn(field.name)), false, true))
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
          schema.fields.map((field) => fromAminoParseField(field, enums, interfaces, undefined, undefined, aminoCasingFn))
        )
      )
    ])
  );

  fromAmino.returnType = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(schema.name)));

  return fromAmino;
};
