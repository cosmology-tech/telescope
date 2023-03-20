import * as t from '@babel/types';
import { FromSDKMethod } from './index';
import { callExpression, identifier } from '../../../utils';
import { getFieldNames } from '../../types';

export const fromSDK = {
  scalar(args: FromSDKMethod) {
    const { propName, origName } = getFieldNames(args.field);

    return t.objectProperty(
      t.identifier(propName),
      t.optionalMemberExpression(
        t.identifier('object'),
        t.identifier(origName),
        false,
        true
      )
    );
  },

  string(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  number(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  double(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  float(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  int32(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  sint32(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  uint32(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  fixed32(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  sfixed32(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  bool(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  long(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  int64(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  uint64(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  sint64(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  fixed64(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },
  sfixed64(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },

  type(args: FromSDKMethod) {
    const { propName, origName } = getFieldNames(args.field);
    const name = args.context.getTypeName(args.field);

    return t.objectProperty(
      t.identifier(propName),
      t.conditionalExpression(
        t.memberExpression(t.identifier('object'), t.identifier(origName)),
        t.callExpression(
          t.memberExpression(t.identifier(name), t.identifier('fromSDK')),
          [t.memberExpression(t.identifier('object'), t.identifier(origName))]
        ),
        t.identifier('undefined')
      )
    );
  },

  enum(args: FromSDKMethod) {
    const { propName, origName } = getFieldNames(args.field);

    args.context.addUtil('isSet');
    const fromSDKFuncName = args.context.getFromEnum(args.field);

    return t.objectProperty(
      t.identifier(propName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier(fromSDKFuncName), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        args.isOptional ? t.identifier('undefined') : t.numericLiteral(0)
      )
    );
  },

  bytes(args: FromSDKMethod) {
    return fromSDK.scalar(args);
  },

  duration(args: FromSDKMethod) {
    return fromSDK.type(args);
  },

  timestamp(args: FromSDKMethod) {
    const { propName, origName } = getFieldNames(args.field);

    return t.objectProperty(
      t.identifier(propName),
      t.logicalExpression(
        '??',
        t.memberExpression(t.identifier('object'), t.identifier(origName)),
        t.identifier('undefined')
      )
    );
  },

  //  labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
  //     [key: string]: string;
  //   }>((acc, [key, value]) => {
  //     acc[key] = String(value);
  //     return acc;
  //   }, {}) : {},

  //   referenceMap: isObject(object.referenceMap) ? Object.entries(object.referenceMap).reduce<{
  //     [key: Long]: Reference;
  //   }>((acc, [key, value]) => {
  //     acc[Number(key)] = Reference.fromSDK(value);
  //     return acc;
  //   }, {}) : {},

  keyHash(args: FromSDKMethod) {
    const { propName, origName } = getFieldNames(args.field);

    const keyType = args.field.keyType;
    const valueType = args.field.parsedType.name;

    args.context.addUtil('isObject');

    let fromSDK = null;
    // valueTypeType: string for identifier
    let valueTypeType = valueType;
    switch (valueType) {
      case 'string':
        fromSDK = t.callExpression(t.identifier('String'), [
          t.identifier('value')
        ]);

        break;
      case 'int32':
      case 'uint32':
        valueTypeType = 'number';
        fromSDK = t.callExpression(t.identifier('Number'), [
          t.identifier('value')
        ]);

        break;
      case 'int64':
      case 'uint64':
        valueTypeType = 'Long';
        fromSDK = t.callExpression(
          t.memberExpression(t.identifier('Long'), t.identifier('fromValue')),
          [
            t.tsAsExpression(
              t.identifier('value'),
              t.tsUnionType([
                t.tsTypeReference(t.identifier('Long')),
                t.tsStringKeyword()
              ])
            )
          ]
        );
        break;
      default:
        fromSDK = t.callExpression(
          t.memberExpression(t.identifier(valueType), t.identifier('fromSDK')),
          [t.identifier('value')]
        );
    }

    let wrapKey = null;
    let keyTypeType = null;
    switch (keyType) {
      case 'string':
        wrapKey = (a) => a;
        keyTypeType = t.tsStringKeyword();
        break;
      case 'int64':
      case 'uint64':
        wrapKey = (a) => t.callExpression(t.identifier('Number'), [a]);
        keyTypeType = t.tsTypeReference(t.identifier('Long'));
        break;
      case 'uint32':
      case 'int32':
        wrapKey = (a) => t.callExpression(t.identifier('Number'), [a]);
        keyTypeType = t.tsTypeReference(t.identifier('number'));
        break;
      default:
        throw new Error('keyHash requires new type. Ask maintainers.');
    }

    return t.objectProperty(
      t.identifier(propName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isObject'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        callExpression(
          t.memberExpression(
            t.callExpression(
              t.memberExpression(
                t.identifier('Object'),
                t.identifier('entries')
              ),
              [
                t.memberExpression(
                  t.identifier('object'),
                  t.identifier(origName)
                )
              ]
            ),
            t.identifier('reduce')
          ),
          [
            t.arrowFunctionExpression(
              [
                t.identifier('acc'),
                t.arrayPattern([t.identifier('key'), t.identifier('value')])
              ],
              t.blockStatement([
                t.expressionStatement(
                  t.assignmentExpression(
                    '=',
                    t.memberExpression(
                      t.identifier('acc'),
                      wrapKey(t.identifier('key')),
                      true
                    ),
                    fromSDK
                  )
                ),
                t.returnStatement(t.identifier('acc'))
              ])
            ),
            t.objectExpression([])
          ],
          t.tsTypeParameterInstantiation([
            t.tsTypeLiteral([
              t.tsIndexSignature(
                [identifier('key', t.tsTypeAnnotation(keyTypeType))],
                t.tsTypeAnnotation(
                  t.tsTypeReference(t.identifier(valueTypeType))
                )
              )
            ])
          ])
        ),
        t.objectExpression([])
      )
    );
  },

  // codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],
  array(args: FromSDKMethod, expr: t.Expression) {
    const { propName, origName } = getFieldNames(args.field);

    return t.objectProperty(
      t.identifier(propName),
      t.conditionalExpression(
        t.callExpression(
          t.memberExpression(t.identifier('Array'), t.identifier('isArray')),
          [
            t.optionalMemberExpression(
              t.identifier('object'),
              t.identifier(origName),
              false,
              true
            )
          ]
        ),
        t.callExpression(
          t.memberExpression(
            t.memberExpression(t.identifier('object'), t.identifier(origName)),
            t.identifier('map')
          ),
          [
            t.arrowFunctionExpression(
              [identifier('e', t.tsTypeAnnotation(t.tsAnyKeyword()))],
              expr,
              false
            )
          ]
        ),
        t.arrayExpression([])
      )
    );
  }
};

export const arrayTypes = {
  scalar() {
    return t.identifier('e');
  },

  string() {
    return arrayTypes.scalar();
  },

  bool() {
    return arrayTypes.scalar();
  },

  bytes(args: FromSDKMethod) {
    return arrayTypes.scalar();
  },

  long() {
    return arrayTypes.scalar();
  },
  uint64() {
    return arrayTypes.scalar();
  },
  int64() {
    return arrayTypes.scalar();
  },
  sint64() {
    return arrayTypes.scalar();
  },
  fixed64() {
    return arrayTypes.scalar();
  },
  sfixed64() {
    return arrayTypes.scalar();
  },
  number() {
    return arrayTypes.scalar();
  },

  uint32() {
    return arrayTypes.scalar();
  },
  int32() {
    return arrayTypes.scalar();
  },
  sint32() {
    return arrayTypes.scalar();
  },
  fixed32() {
    return arrayTypes.scalar();
  },
  sfixed32() {
    return arrayTypes.scalar();
  },
  double() {
    return arrayTypes.scalar();
  },
  float() {
    return arrayTypes.scalar();
  },

  enum(args: FromSDKMethod) {
    const fromSDKFuncName = args.context.getFromEnum(args.field);
    return t.callExpression(t.identifier(fromSDKFuncName), [t.identifier('e')]);
  },

  // tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromSDK(e)) : []
  type(args: FromSDKMethod) {
    const name = args.context.getTypeName(args.field);
    return t.callExpression(
      t.memberExpression(t.identifier(name), t.identifier('fromSDK')),
      [t.identifier('e')]
    );
  }
};
