import * as t from '@babel/types';
import { EncodeMethod } from './index';
import { getTagNumber } from '../types';
import { getKeyTypeEntryName } from '..';
import { ProtoParseContext } from '../../context';
import { getDefaultTSTypeFromProtoType } from '../../types';
import { ProtoField } from '@cosmology/types';
import { TypeLong } from '../../../utils';

const notUndefined = (prop: string): t.Expression => {
    return t.binaryExpression(
        '!==',
        t.memberExpression(
            t.identifier('message'),
            t.identifier(prop)
        ),
        t.identifier('undefined')
    );
};

const ifNotUndefined = (prop: string, stmt: t.Statement): t.Statement => {
    return t.ifStatement(
        notUndefined(prop),
        t.blockStatement([
            stmt
        ])
    );
};

const notEmptyString = (prop: string): t.Expression => {
    return t.binaryExpression('!==',
        t.memberExpression(
            t.identifier('message'),
            t.identifier(prop)
        ),
        t.stringLiteral('')
    )
};

const nullCheckAndCondition = (inputProp: string, inputExpression: t.Expression): t.Expression => {
    return t.logicalExpression('&&',
        t.memberExpression(
            t.identifier('message'),
            t.identifier(inputProp)
        ),
        inputExpression
    );
};

const lengthNotZero = (prop: string): t.Expression => {
    return t.binaryExpression(
        '!==',
        t.memberExpression(
            t.memberExpression(
                t.identifier('message'),
                t.identifier(prop)
            ),
            t.identifier('length')
        ),
        t.numericLiteral(0)
    );
}

const ifTrue = (prop: string): t.Expression => {
    return t.binaryExpression('===',
        t.memberExpression(
            t.identifier('message'),
            t.identifier(prop)
        ),
        t.booleanLiteral(true)
    );
};

const notZero = (prop: string): t.Expression => {
    return t.binaryExpression('!==',
        t.memberExpression(
            t.identifier('message'),
            t.identifier(prop)
        ),
        t.numericLiteral(0)
    )
};

// TODO research, shouldn't we AND these two tests?
const wrapOptional = (prop: string, test: t.Expression, isOptional: boolean, args?: EncodeMethod) => {
    if (isOptional || args?.context?.options?.prototypes?.allowEncodeDefaultScalars) {
        return notUndefined(prop);
    }
    return test;
}

const scalarType = (num: number, prop: string, type: string, args?: EncodeMethod) => {
    let valueExpression: t.Expression = t.memberExpression(
        t.identifier('message'),
        t.identifier(prop)
    );

    switch (type) {
        case 'int64':
        case 'sint64':
        case 'uint64':
        case 'fixed64':
        case 'sfixed64':
            TypeLong.addUtil(args.context);

            break;
    }

    return t.blockStatement([
        t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('writer'),
                            t.identifier('uint32')
                        ),
                        [
                            t.numericLiteral(num)
                        ]
                    ),
                    t.identifier(type)
                ),
                [
                    valueExpression
                ]
            )
        )
    ]);
};

const customType = (num: number, prop: string, type: string, customType: string, args: EncodeMethod) => {
    switch (customType) {
        case "github.com/cosmos/cosmos-sdk/types.Dec":
        case "cosmossdk.io/math.LegacyDec":
        default:
            args.context.addUtil("Decimal");

            return t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier(type)
                        ),
                        [
                            t.memberExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Decimal'),
                                        t.identifier('fromUserInput'),
                                    ),
                                    [
                                        t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier(prop)
                                        ),
                                        t.numericLiteral(18)
                                    ]
                                ),
                                t.identifier('atomics'),
                            )
                        ]
                    )
                )
            ]);
    }
};

export const encode = {

    string(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.string(num, prop, args.isOptional, args);
    },

    double(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.double(num, prop, args.isOptional, args);
    },

    float(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.float(num, prop, args.isOptional, args);
    },

    int32(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.int32(num, prop, args.isOptional, args);
    },

    sint32(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.sint32(num, prop, args.isOptional, args);
    },

    uint32(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.uint32(num, prop, args.isOptional, args);
    },

    fixed32(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.fixed32(num, prop, args.isOptional, args);
    },

    sfixed32(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.sfixed32(num, prop, args.isOptional, args);
    },

    int64(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.int64(num, prop, args.isOptional, args);
    },

    sint64(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.sint64(num, prop, args.isOptional, args);
    },

    uint64(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.uint64(num, prop, args.isOptional, args);
    },

    fixed64(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.fixed64(num, prop, args.isOptional, args);
    },

    sfixed64(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.sfixed64(num, prop, args.isOptional, args);
    },

    bool(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.bool(num, prop, args.isOptional, args);
    },

    type(args: EncodeMethod) {
        const prop = args.field.name;
        const name = args.context.getTypeName(args.field);
        const num = getTagNumber(args.field);

        let isAnyType = false;
        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            isAnyType = true;
        }

        const isGlobalRegistry = args.context.options.interfaces?.enabled && args.context.options.interfaces?.useGlobalDecoderRegistry;

        return types.type(num, prop, name, isAnyType, isGlobalRegistry);
    },

    enum(args: EncodeMethod) {
        const num = getTagNumber(args.field);
        return types.enum(args.context, num, args.field, args.isOptional, args.isOneOf);
    },

    bytes(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.bytes(num, prop, args.isOptional);
    },

    timestamp(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        const timestampFormat = args.context.pluginValue('prototypes.typingsFormat.timestamp')
        switch (timestampFormat) {
            case 'timestamp':
                return types.timestamp(num, prop);
            case 'date':
            default:
                args.context.addUtil('toTimestamp');
                return types.timestampDate(num, prop);
        }
    },

    duration(args: EncodeMethod) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        const durationFormat = args.context.pluginValue('prototypes.typingsFormat.duration');
        switch (durationFormat) {
            case 'string':
                args.context.addUtil('toDuration');
                return types.duration(num, prop);
            case 'duration':
            default:
                return encode.type(args);
        }
    },

    forkDelimArray(args: EncodeMethod, expr: t.Statement) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.forkDelimArray(num, prop, expr);
    },

    array(args: EncodeMethod, expr: t.Statement) {
        const prop = args.field.name;
        const num = getTagNumber(args.field);
        return types.array(num, prop, expr);
    },

    typeArray(args: EncodeMethod) {
        const prop = args.field.name;
        const name = args.context.getTypeName(args.field);
        const num = getTagNumber(args.field);

        let isAnyType = false;
        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            isAnyType = true;
        }

        const isGlobalRegistry = args.context.options.interfaces?.enabled && args.context.options.interfaces?.useGlobalDecoderRegistry;

        return types.typeArray(num, prop, name, isAnyType, isGlobalRegistry);
    },

    keyHash(args: EncodeMethod) {
        const prop = args.field.name;
        const name = args.typeName;
        const num = getTagNumber(args.field);
        return types.keyHash(num, prop, name);
    }
};

export const types = {

    /*
        if (message.sender && message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
    */
    string(num: number, prop: string, isOptional: boolean, args: EncodeMethod) {
        const useCosmosSDKDec = args.context.pluginValue(
            'prototypes.typingsFormat.customTypes.useCosmosSDKDec'
        );
        const isCosmosSDKDec =
            (args.field.options?.['(gogoproto.customtype)'] ==
                'github.com/cosmos/cosmos-sdk/types.Dec') ||
            (args.field.options?.['(gogoproto.customtype)'] ==
                'cosmossdk.io/math.LegacyDec');

        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notEmptyString(prop)) : notEmptyString(prop),
                isOptional,
                args
            ),
            useCosmosSDKDec && isCosmosSDKDec
                ? customType(num, prop, 'string', args.field.options?.['(gogoproto.customtype)'], args)
                : scalarType(num, prop, 'string')
        );
    },

    /*
        if (message.doubleValue && message.doubleValue !== 0) {
          writer.uint32(41).double(message.doubleValue);
        }
    */

    double(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notZero(prop)) : notZero(prop),
                isOptional,
                args
            ),
            scalarType(num, prop, 'double')
        )
    },

    /*
        if (message.floatValue && message.floatValue !== 0) {
          writer.uint32(41).float(message.floatValue);
        }
    */

    float(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notZero(prop)) : notZero(prop),
                isOptional,
                args
            ),
            scalarType(num, prop, 'float')
        )
    },


    //   if (message.int32Value && message.int32Value !== 0) {
    //     writer.uint32(24).int32(message.int32Value);
    //   }

    int32(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notZero(prop)) : notZero(prop),
                isOptional,
                args
            ),
            scalarType(num, prop, 'int32')
        );
    },

    //   if (message.sint32Value && message.sint32Value !== 0) {
    //     writer.uint32(24).sint32(message.sint32Value);
    //   }

    sint32(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notZero(prop)) : notZero(prop),
                isOptional,
                args
            ),
            scalarType(num, prop, 'sint32')
        );
    },

    //   if (message.int32Value && message.int32Value !== 0) {
    //     writer.uint32(24).uint32(message.int32Value);
    //   }

    uint32(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notZero(prop)) : notZero(prop),
                isOptional,
                args
            ),
            scalarType(num, prop, 'uint32')
        );
    },

    fixed32(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notZero(prop)) : notZero(prop),
                isOptional,
                args
            ),
            scalarType(num, prop, 'fixed32')
        );
    },

    sfixed32(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, notZero(prop)) : notZero(prop),
                isOptional,
                args
            ),
            scalarType(num, prop, 'sfixed32')
        );
    },


    //   if (message.int64Value && !message.int64Value.isZero()) {
    //     writer.uint32(24).int64(message.int64Value);
    //   }

    int64(num: number, prop: string, isOptional: boolean, args: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, TypeLong.getLongNotZero(prop, args.context)) : TypeLong.getLongNotZero(prop, args.context),
                isOptional,
                args
            ),
            scalarType(num, prop, 'int64', args)
        )
    },

    //   if (message.sint64Value && !message.sint64Value.isZero()) {
    //     writer.uint32(24).sint64(message.sint64Value);
    //   }

    sint64(num: number, prop: string, isOptional: boolean, args: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, TypeLong.getLongNotZero(prop, args.context)) : TypeLong.getLongNotZero(prop, args.context),
                isOptional,
                args
            ),
            scalarType(num, prop, 'sint64', args)
        )
    },

    //   if (message.int64Value && !message.int64Value.isZero()) {
    //     writer.uint32(24).uint64(message.int64Value);
    //   }

    uint64(num: number, prop: string, isOptional: boolean, args: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, TypeLong.getLongNotZero(prop, args.context)) : TypeLong.getLongNotZero(prop, args.context),
                isOptional,
                args
            ),
            scalarType(num, prop, 'uint64', args)
        )
    },

    fixed64(num: number, prop: string, isOptional: boolean, args: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, TypeLong.getLongNotZero(prop, args.context)) : TypeLong.getLongNotZero(prop, args.context),
                isOptional,
                args
            ),
            scalarType(num, prop, 'fixed64', args)
        )
    },

    sfixed64(num: number, prop: string, isOptional: boolean, args: EncodeMethod) {
        return t.ifStatement(
            wrapOptional(
                prop,
                args.context.pluginValue('prototypes.enforceNullCheck')? nullCheckAndCondition(prop, TypeLong.getLongNotZero(prop, args.context)) : TypeLong.getLongNotZero(prop, args.context),
                isOptional,
                args
            ),
            scalarType(num, prop, 'sfixed64', args)
        )
    },

    //   if (message.disableMacros === true) {
    //     writer.uint32(32).bool(message.disableMacros);
    //   }

    bool(num: number, prop: string, isOptional: boolean, args?: EncodeMethod) {

        return t.ifStatement(
            wrapOptional(prop, ifTrue(prop), isOptional, args),
            scalarType(num, prop, 'bool')
        )
    },

    type(num: number, prop: string, name: string, isAnyType: boolean, isGlobalRegistry: boolean) {

        let messageProp: t.MemberExpression | t.TSAsExpression | t.CallExpression = t.memberExpression(
            t.identifier('message'),
            t.identifier(prop)
        );

        if (isAnyType) {
          if(isGlobalRegistry){
            messageProp = t.callExpression(t.memberExpression(t.identifier("GlobalDecoderRegistry"), t.identifier("wrapAny")),[
              messageProp
            ])
          } else {
            messageProp = t.tsAsExpression(
                messageProp,
                t.tsTypeReference(
                    t.identifier('Any')
                )
            )
          }
        }

        return t.ifStatement(
            notUndefined(prop),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier(name),
                                    t.identifier('encode')
                                ),
                                [
                                    messageProp,
                                    t.callExpression(
                                        t.memberExpression(
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('writer'),
                                                    t.identifier('uint32')
                                                ),
                                                [
                                                    t.numericLiteral(num)
                                                ]
                                            ),
                                            t.identifier('fork')
                                        ),
                                        []
                                    )

                                ]
                            ),
                            t.identifier('ldelim')
                        ),
                        []
                    )
                )
            ])
        );
    },

    //   if (message.singleField !== 0) {
    //     writer.uint32(24).int32(message.singleField);
    //   }

    enum(context: ProtoParseContext, num: number, field: ProtoField, isOptional: boolean, isOneOf: boolean) {
        const prop = field.name;
        return t.ifStatement(
            wrapOptional(prop,
                t.binaryExpression('!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(field.name)
                    ),
                    getDefaultTSTypeFromProtoType(context, field, isOneOf)
                )
                , isOptional),
            scalarType(num, prop, 'int32')
        )
    },

    /*
    if (message.queryData.length !== 0) {
    writer.uint32(18).bytes(message.queryData);
    }
    */


    bytes(num: number, prop: string, isOptional: boolean) {
        return t.ifStatement(
            wrapOptional(prop, lengthNotZero(prop), isOptional),
            scalarType(num, prop, 'bytes')
        );
    },

    // if (message.periodReset !== undefined) {
    //     Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(18).fork()).ldelim();
    //   }

    timestamp(num: number, prop: string) {
        return ifNotUndefined(
            prop,
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Timestamp'),
                                t.identifier('encode')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier('writer'),
                                                t.identifier('uint32')
                                            ),
                                            [
                                                t.numericLiteral(num)
                                            ]
                                        ),
                                        t.identifier('fork')
                                    ),
                                    []
                                )
                            ]
                        ),
                        t.identifier('ldelim')
                    ),
                    []
                )
            )
        );
    },

    timestampDate(num: number, prop: string) {
        return ifNotUndefined(prop, t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Timestamp'),
                            t.identifier('encode')
                        ),
                        [
                            t.callExpression(
                                t.identifier('toTimestamp'),
                                [
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier(prop)
                                    )
                                ]
                            ),
                            t.callExpression(
                                t.memberExpression(
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('writer'),
                                            t.identifier('uint32')
                                        ),
                                        [
                                            t.numericLiteral(num)
                                        ]
                                    ),
                                    t.identifier('fork')
                                ),
                                []
                            )
                        ]
                    ),
                    t.identifier('ldelim')
                ),
                []
            )
        ));
    },

    // if (message.period !== undefined) {
    //     Duration.encode(toDuration(message.period), writer.uint32(18).fork()).ldelim();
    //   }

    duration(num: number, prop: string) {
        return t.ifStatement(
            notUndefined(prop),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('Duration'),
                                    t.identifier('encode')
                                ),
                                [
                                    t.callExpression(
                                        t.identifier('toDuration'),
                                        [
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier(prop)
                                            )
                                        ]
                                    ),
                                    t.callExpression(
                                        t.memberExpression(
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('writer'),
                                                    t.identifier('uint32')
                                                ),
                                                [
                                                    t.numericLiteral(num)
                                                ]
                                            ),
                                            t.identifier('fork')
                                        ),
                                        []
                                    )
                                ]
                            ),
                            t.identifier('ldelim')
                        ),
                        []
                    )
                )
            ])
        );
    },

    /*
    writer.uint32(10).fork();

    for (const v of message.codeIds) {
        writer.uint64(v);
    }

    writer.ldelim();
    */

    forkDelimArray(num: number, prop: string, expr: t.Statement) {
        return [
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('writer'),
                                t.identifier('uint32')
                            ),
                            [
                                t.numericLiteral(num)
                            ]
                        ),
                        t.identifier('fork')
                    ),
                    []
                )
            ),
            t.forOfStatement(
                t.variableDeclaration(
                    'const',
                    [
                        t.variableDeclarator(
                            t.identifier('v'),
                            null
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.blockStatement([
                    expr
                ])
            ),
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('writer'),
                        t.identifier('ldelim')
                    ),
                    []
                )
            )
        ];
    },

    array(num: number, prop: string, expr: t.Statement) {
        return [
            t.forOfStatement(
                t.variableDeclaration(
                    'const',
                    [
                        t.variableDeclarator(
                            t.identifier('v'),
                            null
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.blockStatement([
                    expr
                ])
            )
        ];
    },

    typeArray(num: number, prop: string, name: string, isAnyType: boolean, isGlobalRegistry: boolean) {
        // "v!" just means it's NOT NULLABLE
        let nestedProp: t.TSNonNullExpression | t.TSAsExpression | t.CallExpression = t.tsNonNullExpression(
            t.identifier('v')
        );

        if (isAnyType) {
            if(isGlobalRegistry){
              nestedProp = t.callExpression(t.memberExpression(t.identifier("GlobalDecoderRegistry"), t.identifier("wrapAny")),[
                nestedProp
              ])
            } else {
              nestedProp = t.tsAsExpression(
                  nestedProp,
                  t.tsTypeReference(
                      t.identifier('Any')
                  )
              )
            }
        }


        return [
            t.forOfStatement(
                t.variableDeclaration('const',
                    [
                        t.variableDeclarator(
                            t.identifier('v'),
                            null
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.blockStatement(
                    [
                        t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier(name),
                                            t.identifier('encode')
                                        ),
                                        [
                                            nestedProp,
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.callExpression(
                                                        t.memberExpression(
                                                            t.identifier('writer'),
                                                            t.identifier('uint32')
                                                        ),
                                                        [
                                                            t.numericLiteral(num)
                                                        ]
                                                    ),
                                                    t.identifier('fork')
                                                ),
                                                []
                                            )
                                        ]
                                    ),
                                    t.identifier('ldelim')
                                ),
                                []
                            )
                        )
                    ]
                )
            )];
    },

    // Object.entries(message.labels).forEach(([key, value]) => {
    //     LogEntry_LabelsEntry.encode({
    //       key: (key as any),
    //       value
    //     }, writer.uint32(106).fork()).ldelim();
    //   });

    keyHash(num: number, prop: string, name: string) {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Object'),
                            t.identifier('entries')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    ),
                    t.identifier('forEach')
                ),
                [
                    t.arrowFunctionExpression(
                        [
                            t.arrayPattern([
                                t.identifier('key'),
                                t.identifier('value')
                            ]
                            ),
                        ],
                        t.blockStatement([
                            t.expressionStatement(
                                t.callExpression(
                                    t.memberExpression(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier(getKeyTypeEntryName(name, prop)),
                                                t.identifier('encode')
                                            ),
                                            [
                                                t.objectExpression(
                                                    [
                                                        t.objectProperty(
                                                            t.identifier('key'),
                                                            t.tsAsExpression(
                                                                t.identifier('key'),
                                                                t.tsAnyKeyword()
                                                            )
                                                        ),
                                                        t.objectProperty(
                                                            t.identifier('value'),
                                                            t.identifier('value'),
                                                            false,
                                                            true
                                                        )
                                                    ]
                                                ),
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.callExpression(
                                                            t.memberExpression(
                                                                t.identifier('writer'),
                                                                t.identifier('uint32')
                                                            ),
                                                            [
                                                                t.numericLiteral(num)
                                                            ]
                                                        ),
                                                        t.identifier('fork')
                                                    ),
                                                    []
                                                )
                                            ]
                                        ),
                                        t.identifier('ldelim')
                                    ),
                                    []
                                )
                            )
                        ])
                    )
                ]
            )
        )
    }
};

export const arrayTypes = {
    double() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('double')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    bool() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('bool')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    float() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('float')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    int32() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('int32')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    sint32() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('sint32')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    uint32() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('uint32')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    fixed32() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('fixed32')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    sfixed32() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('sfixed32')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    },
    long(type: string, args: EncodeMethod) {
        let valueExpression: t.Expression = t.identifier('v');

        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier(type)
                ),
                [
                    valueExpression
                ]
            )
        );
    },
    int64(args: EncodeMethod) {
        return arrayTypes.long('int64', args);
    },
    sint64(args: EncodeMethod) {
        return arrayTypes.long('sint64', args);
    },
    uint64(args: EncodeMethod) {
        return arrayTypes.long('uint64', args);
    },
    fixed64(args: EncodeMethod) {
        return arrayTypes.long('fixed64', args);
    },
    sfixed64(args: EncodeMethod) {
        return arrayTypes.long('sfixed64', args);
    },
    string(args: EncodeMethod) {
        const useCosmosSDKDec = args.context.pluginValue(
            'prototypes.typingsFormat.customTypes.useCosmosSDKDec'
        );
        const isCosmosSDKDec =
            (args.field.options?.['(gogoproto.customtype)'] ==
                'github.com/cosmos/cosmos-sdk/types.Dec') ||
            (args.field.options?.['(gogoproto.customtype)'] ==
                'cosmossdk.io/math.LegacyDec');

        const num = getTagNumber(args.field);

        let valueExpression: t.Expression = t.tsNonNullExpression(t.identifier('v'));

        if (useCosmosSDKDec && isCosmosSDKDec) {
            args.context.addUtil("Decimal");

            valueExpression = t.memberExpression(t.callExpression(
                t.memberExpression(
                    t.identifier('Decimal'),
                    t.identifier('fromUserInput'),
                ),
                [
                    valueExpression,
                    t.numericLiteral(18)
                ]
            ),
                t.identifier('atomics'),
            )
        }

        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('writer'),
                            t.identifier('uint32')
                        ),
                        [
                            t.numericLiteral(num)
                        ]
                    ),
                    t.identifier('string')
                ),
                [
                    valueExpression
                ]
            )
        );
    },
    bytes(args: EncodeMethod) {
        const num = getTagNumber(args.field);

        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('writer'),
                            t.identifier('uint32')
                        ),
                        [
                            t.numericLiteral(num)
                        ]
                    ),
                    t.identifier('bytes')
                ),
                [
                    t.tsNonNullExpression(t.identifier('v'))
                ]
            )
        );
    },
    enum() {
        return arrayTypes.int32();
    }

};

