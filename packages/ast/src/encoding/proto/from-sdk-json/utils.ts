import * as t from '@babel/types';
import { FromSDKJSONMethod } from './index';
import { callExpression, identifier, TypeLong } from '../../../utils';
import { getDefaultTSTypeFromProtoType } from '../../types';
import { ProtoField } from '@osmonauts/types';
import { getFieldNames } from '../../types';

export const fromSDKJSON = {
  // sender: isSet(object.sender) ? String(object.sender) : ""
  string(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier('String'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
      )
    );
  },

  number(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier('Number'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
      )
    );
  },

  double(args: FromSDKJSONMethod) {
    return fromSDKJSON.number(args);
  },
  float(args: FromSDKJSONMethod) {
    return fromSDKJSON.number(args);
  },
  int32(args: FromSDKJSONMethod) {
    return fromSDKJSON.number(args);
  },
  sint32(args: FromSDKJSONMethod) {
    return fromSDKJSON.number(args);
  },
  uint32(args: FromSDKJSONMethod) {
    return fromSDKJSON.number(args);
  },
  fixed32(args: FromSDKJSONMethod) {
    return fromSDKJSON.number(args);
  },
  sfixed32(args: FromSDKJSONMethod) {
    return fromSDKJSON.number(args);
  },

  // disableMacros: isSet(object.disableMacros) ? Boolean(object.disableMacros) : false
  bool(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier('Boolean'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
      )
    );
  },

  // int64Value: isSet(object.int64Value) ? Long.fromValue(object.int64Value) : Long.UZERO,
  long(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');
    TypeLong.addUtil(args.context);

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        TypeLong.getFromValueWithArgs(
          args.context,
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ),
        getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
      )
    );
  },

  int64(args: FromSDKJSONMethod) {
    return fromSDKJSON.long(args);
  },

  // uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : Long.ZERO,
  uint64(args: FromSDKJSONMethod) {
    return fromSDKJSON.long(args);
  },

  sint64(args: FromSDKJSONMethod) {
    return fromSDKJSON.long(args);
  },
  fixed64(args: FromSDKJSONMethod) {
    return fromSDKJSON.long(args);
  },
  sfixed64(args: FromSDKJSONMethod) {
    return fromSDKJSON.long(args);
  },

  // signDoc: isSet(object.signDoc) ? SignDocDirectAux.fromSDKJSON(object.signDoc) : undefined,
  type(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    const name = args.context.getTypeName(args.field);
    args.context.addUtil('isSet');

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(
          t.memberExpression(t.identifier(name), t.identifier('fromSDKJSON')),
          [t.memberExpression(t.identifier('object'), t.identifier(origName))]
        ),
        t.identifier('undefined')
      )
    );
  },

  // mode: isSet(object.mode) ? signModeFromSDKJSON(object.mode) : 0,
  enum(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');
    const fromSDKJSONFuncName = args.context.getFromEnum(args.field);

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier(fromSDKJSONFuncName), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        args.isOptional ? t.identifier('undefined') : t.numericLiteral(-1)
      )
    );
  },

  // queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
  bytes(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');
    args.context.addUtil('bytesFromBase64');

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier('bytesFromBase64'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
      )
    );
  },

  // period: isSet(object.period) ? Duration.fromSDKJSON(object.period) : undefined,

  duration(args: FromSDKJSONMethod) {
    const durationFormat = args.context.pluginValue(
      'prototypes.typingsFormat.duration'
    );
    switch (durationFormat) {
      case 'string':
        return fromSDKJSON.durationString(args);
      case 'duration':
      default:
        return fromSDKJSON.type(args);
    }
  },

  // period: isSet(object.period) ? String(object.period) : undefined,

  durationString(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');
    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier('String'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.identifier('undefined')
      )
    );
  },

  // periodReset: isSet(object.periodReset) ? fromJsonTimestamp(object.periodReset) : undefined

  timestamp(args: FromSDKJSONMethod) {
    const timestampFormat = args.context.pluginValue(
      'prototypes.typingsFormat.timestamp'
    );
    switch (timestampFormat) {
      case 'timestamp':
        return fromSDKJSON.timestampTimestamp(args);
      case 'date':
      default:
        args.context.addUtil('toTimestamp');
        return fromSDKJSON.timestampDate(args);
    }
  },

  timestampTimestamp(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');
    args.context.addUtil('fromJsonTimestamp');

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.callExpression(t.identifier('fromJsonTimestamp'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.identifier('undefined')
      )
    );
  },

  timestampDate(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    args.context.addUtil('isSet');

    return t.objectProperty(
      t.identifier(origName),
      t.conditionalExpression(
        t.callExpression(t.identifier('isSet'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.newExpression(t.identifier('Date'), [
          t.memberExpression(t.identifier('object'), t.identifier(origName))
        ]),
        t.identifier('undefined')
      )
    );
  },

  // timestampTimestamp(args: FromSDKJSONMethod) {
  //   const { messageProp, objProp } = getPropNames(args.field);
  //   args.context.addUtil('isSet');
  //   args.context.addUtil('fromJsonTimestamp');

  //   return t.objectProperty(
  //     t.identifier(messageProp),
  //     t.conditionalExpression(
  //       t.callExpression(t.identifier('isSet'), [
  //         t.memberExpression(t.identifier('object'), t.identifier(objProp))
  //       ]),
  //       t.callExpression(t.identifier('fromJsonTimestamp'), [
  //         t.memberExpression(t.identifier('object'), t.identifier(objProp))
  //       ]),
  //       t.identifier('undefined')
  //     )
  //   );
  // },

  // timestampDate(args: FromSDKJSONMethod) {
  //   const { origName } = getFieldNames(args.field);
  //   args.context.addUtil('isSet');
  //   args.context.addUtil('fromTimestamp');
  //   args.context.addUtil('fromJsonTimestamp');

  //   return t.objectProperty(
  //     t.identifier(origName),
  //     t.conditionalExpression(
  //       t.callExpression(t.identifier('isSet'), [
  //         t.memberExpression(t.identifier('object'), t.identifier(origName))
  //       ]),
  //       t.callExpression(t.identifier('fromTimestamp'), [
  //         t.callExpression(t.identifier('fromJsonTimestamp'), [
  //           t.memberExpression(t.identifier('object'), t.identifier(origName))
  //         ])
  //       ]),
  //       t.identifier('undefined')
  //     )
  //   );
  // },

  //  labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
  //     [key: string]: string;
  //   }>((acc, [key, value]) => {
  //     acc[key] = String(value);
  //     return acc;
  //   }, {}) : {},

  //   referenceMap: isObject(object.referenceMap) ? Object.entries(object.referenceMap).reduce<{
  //     [key: Long]: Reference;
  //   }>((acc, [key, value]) => {
  //     acc[Number(key)] = Reference.fromSDKJSON(value);
  //     return acc;
  //   }, {}) : {},

  keyHash(args: FromSDKJSONMethod) {
    const { origName } = getFieldNames(args.field);
    const keyType = args.field.keyType;
    const valueType = args.field.parsedType.name;

    args.context.addUtil('isObject');

    let fromSDKJSON = null;
    // valueTypeType: string for identifier
    let valueTypeType = valueType;
    switch (valueType) {
      case 'string':
        fromSDKJSON = t.callExpression(t.identifier('String'), [
          t.identifier('value')
        ]);

        break;
      case 'int32':
      case 'uint32':
        valueTypeType = 'number';
        fromSDKJSON = t.callExpression(t.identifier('Number'), [
          t.identifier('value')
        ]);

        break;
      case 'int64':
      case 'uint64':
      case 'sint64':
      case 'fixed64':
      case 'sfixed64':
        TypeLong.addUtil(args.context);

        valueTypeType = TypeLong.getPropType(args.context);
        fromSDKJSON = TypeLong.getFromValueWithArgs(
          args.context,
          t.tsAsExpression(
            t.identifier('value'),
            t.tsUnionType([
              t.tsTypeReference(TypeLong.getPropIdentifier(args.context)),
              t.tsStringKeyword()
            ])
          )
        );
        break;
      default:
        fromSDKJSON = t.callExpression(
          t.memberExpression(
            t.identifier(valueType),
            t.identifier('fromSDKJSON')
          ),
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
      case 'sint64':
      case 'fixed64':
      case 'sfixed64':
        TypeLong.addUtil(args.context);

        wrapKey = (a) => t.callExpression(t.identifier('Number'), [a]);
        keyTypeType = t.tsTypeReference(
          TypeLong.getPropIdentifier(args.context)
        );
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
      t.identifier(origName),
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
                    fromSDKJSON
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
  array(args: FromSDKJSONMethod, expr: t.Expression) {
    const { origName } = getFieldNames(args.field);

    return t.objectProperty(
      t.identifier(origName),
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
  string() {
    return t.callExpression(t.identifier('String'), [t.identifier('e')]);
  },

  bool() {
    return t.callExpression(t.identifier('Boolean'), [t.identifier('e')]);
  },

  // myBytesArray: Array.isArray(object?.myBytesArray) ? object.myBytesArray.map((e: any) => bytesFromBase64(e)) : [],
  bytes(args: FromSDKJSONMethod) {
    args.context.addUtil('bytesFromBase64');
    return t.callExpression(t.identifier('bytesFromBase64'), [
      t.identifier('e')
    ]);
  },
  // codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromValue(e)) : [],
  long(args: FromSDKJSONMethod) {
    TypeLong.addUtil(args.context);

    return TypeLong.getFromValueWithArgs(args.context, t.identifier('e'));
  },
  uint64(args: FromSDKJSONMethod) {
    return arrayTypes.long(args);
  },
  int64(args: FromSDKJSONMethod) {
    return arrayTypes.long(args);
  },
  sint64(args: FromSDKJSONMethod) {
    return arrayTypes.long(args);
  },
  fixed64(args: FromSDKJSONMethod) {
    return arrayTypes.long(args);
  },
  sfixed64(args: FromSDKJSONMethod) {
    return arrayTypes.long(args);
  },
  // myUint32Array: Array.isArray(object?.myUint32Array) ? object.myUint32Array.map((e: any) => Number(e)) : [],
  number() {
    return t.callExpression(t.identifier('Number'), [t.identifier('e')]);
  },

  // myDoubleArray: Array.isArray(object?.myDoubleArray) ? object.myDoubleArray.map((e: any) => Number(e)) : [],
  uint32() {
    return arrayTypes.number();
  },
  int32() {
    return arrayTypes.number();
  },
  sint32() {
    return arrayTypes.number();
  },
  fixed32() {
    return arrayTypes.number();
  },
  sfixed32() {
    return arrayTypes.number();
  },
  double() {
    return arrayTypes.number();
  },
  float() {
    return arrayTypes.number();
  },

  // arrayField: Array.isArray(object?.arrayField) ? object.arrayField.map((e: any) => scalarTypeFromSDKJSON(e)) : []
  enum(args: FromSDKJSONMethod) {
    const fromSDKJSONFuncName = args.context.getFromEnum(args.field);
    return t.callExpression(t.identifier(fromSDKJSONFuncName), [
      t.identifier('e')
    ]);
  },

  // tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromSDKJSON(e)) : []
  type(args: FromSDKJSONMethod) {
    const name = args.context.getTypeName(args.field);
    return t.callExpression(
      t.memberExpression(t.identifier(name), t.identifier('fromSDKJSON')),
      [t.identifier('e')]
    );
  }
};
