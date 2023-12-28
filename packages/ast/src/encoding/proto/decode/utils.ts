import * as t from '@babel/types';
import { DecodeMethod } from './index';
import { getInterfaceDecoderName, getKeyTypeEntryName } from '..';
import { TypeLong } from '../../../utils';

export const decode = {
    string(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.string(args));
    },
    bool(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.bool(args));
    },
    double(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.double(args));
    },
    float(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.float(args));
    },
    int32(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.int32(args));
    },
    sint32(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.sint32(args));
    },
    uint32(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.uint32(args));
    },
    fixed32(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.fixed32(args));
    },
    sfixed32(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.sfixed32(args));
    },
    int64(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.int64(args));
    },
    sint64(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.sint64(args));
    },
    uint64(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.uint64(args));
    },
    fixed64(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.fixed64(args));
    },
    sfixed64(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.sfixed64(args));
    },
    duration(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        const durationFormat = args.context.pluginValue('prototypes.typingsFormat.duration');

        switch (durationFormat) {
            case 'string':
                return switchOnTag(num, prop, baseTypes.durationString(args));
            case 'duration':
            default:
                return switchOnTag(num, prop, baseTypes.type(args));
        }
    },
    timestamp(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        const timestampFormat = args.context.pluginValue('prototypes.typingsFormat.timestamp')
        switch (timestampFormat) {
            case 'timestamp':
                return switchOnTag(num, prop, baseTypes.timestamp(args));
            case 'date':
            default:
                return switchOnTag(num, prop, baseTypes.timestampDate(args));
        }

    },
    type(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.type(args));
    },
    enum(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.enum(args));
    },
    bytes(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.bytes(args));
    },
    keyHash(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTagTakesArray(num, prop, baseTypes.keyHash(args));
    },
    tagDelimArray(args: DecodeMethod, expr: t.Expression) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchTagDelimArray(num,
            prop,
            expr
        )
    },
    array(args: DecodeMethod, expr: t.Expression) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchArray(num,
            prop,
            expr
        )
    },
    typeArray(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        const name = args.context.getTypeName(args.field);

        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            const isGlobalRegistry = args.context.options.interfaces?.enabled && args.context.options.interfaces?.useGlobalDecoderRegistry;

            if(isGlobalRegistry){
              return switchAnyTypeArrayUnwrap(
                num,
                prop,
                name,
              )
            }

            const interfaceName = args.field.options['(cosmos_proto.accepts_interface)'];
            const interfaceFnName = getInterfaceDecoderName(interfaceName)

            return args.context.options.interfaces.enabled && args.context.options.interfaces.useUseInterfacesParams ? switchAnyTypeArrayUseInterfaces(
                num,
                prop,
                name,
                interfaceFnName,
            ) : switchAnyTypeArray(
              num,
              prop,
              name,
            );
        }
        return switchProtoTypeArray(
            args,
            num,
            prop,
            name
        );
    }

};

export const baseTypes = {

    // reader.string();
    string(args: DecodeMethod) {
        const useCosmosSDKDec = args.context.pluginValue(
          'prototypes.typingsFormat.customTypes.useCosmosSDKDec'
        );
        const isCosmosSDKDec =
            (args.field.options?.['(gogoproto.customtype)'] ==
                'github.com/cosmos/cosmos-sdk/types.Dec') ||
            (args.field.options?.['(gogoproto.customtype)'] ==
                'cosmossdk.io/math.LegacyDec');

        let valueExpression = t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('string')
            ),
            []
        );

        if(useCosmosSDKDec && isCosmosSDKDec){
          args.context.addUtil("Decimal");

          valueExpression = t.callExpression(
            t.memberExpression(
              t.callExpression(
                t.memberExpression(
                  t.identifier('Decimal'),
                  t.identifier('fromAtomics'),
                ),
                [
                  valueExpression,
                  t.numericLiteral(18)
                ]
              ),
              t.identifier('toString'),
            ),
            []
          )
        }

        return valueExpression;
    },

    // reader.bool();
    bool(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('bool')
            ),
            []
        );
    },

    // reader.double();
    double(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('double')
            ),
            []
        );
    },

    // reader.float();
    float(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('float')
            ),
            []
        );
    },

    // reader.int32();
    int32(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('int32')
            ),
            []
        );
    },

    // reader.sint32();
    sint32(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('sint32')
            ),
            []
        );
    },

    // reader.uint32();
    uint32(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('uint32')
            ),
            []
        );
    },

    // reader.fixed32();
    fixed32(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('fixed32')
            ),
            []
        );
    },

    // reader.sfixed32();
    sfixed32(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('sfixed32')
            ),
            []
        );
    },

    long(type: string, args: DecodeMethod) {
      TypeLong.addUtil(args.context);

      switch (TypeLong.getType(args.context)) {
        case 'BigInt':
          return t.callExpression(
            t.memberExpression(t.identifier('reader'), t.identifier(type)),
            []
          );

        case 'Long':
        default:
          return t.tsAsExpression(
              t.callExpression(
                  t.memberExpression(
                      t.identifier('reader'),
                      t.identifier(type)
                  ),
                  []
              ),
              t.tsTypeReference(
                  TypeLong.getPropIdentifier(args.context)
              )
          );
      }
    },

    // (reader.int64() as Long);
    int64(args: DecodeMethod) {
      return baseTypes.long('int64', args)
    },

    // (reader.sint64() as Long);
    sint64(args: DecodeMethod) {
      return baseTypes.long('sint64', args)
    },

    // (reader.uint64() as Long);
    uint64(args: DecodeMethod) {
      return baseTypes.long('uint64', args)
    },

    // (reader.fixed64() as Long);
    fixed64(args: DecodeMethod) {
      return baseTypes.long('fixed64', args)
    },

    // (reader.sfixed64() as Long);
    sfixed64(args: DecodeMethod) {
      return baseTypes.long('sfixed64', args)
    },

    // SignDocDirectAux.decode(reader, reader.uint32());
    protoType(args: DecodeMethod) {
        const name = args.context.getTypeName(args.field);
        return t.callExpression(
            t.memberExpression(
                t.identifier(name),
                t.identifier('decode')
            ),
            [
                t.identifier('reader'),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('reader'),
                        t.identifier('uint32')
                    ),
                    []
                ),
                ...(args.context.options.interfaces.enabled && args.context.options.interfaces.useUseInterfacesParams ? [
                    t.identifier('useInterfaces'),
                ] : []),
            ]
        )
    },

    anyType(args: DecodeMethod) {
        const isGlobalRegistry = args.context.options.interfaces?.enabled && args.context.options.interfaces?.useGlobalDecoderRegistry;

        if(isGlobalRegistry) {
          return t.callExpression(
            t.memberExpression(t.identifier("GlobalDecoderRegistry"), t.identifier("unwrapAny")),
            [
                t.identifier('reader')
            ]
          );
        }

        const interfaceName = args.field.options['(cosmos_proto.accepts_interface)'];
        const interfaceFnName = getInterfaceDecoderName(interfaceName)
        const asAny = t.tsAsExpression(
          t.callExpression(
              t.identifier(interfaceFnName),
              [
                  t.identifier('reader')
              ]
          ),
          t.tsTypeReference(
              t.identifier('Any')
          )
        );

        return args.context.options.interfaces.enabled && args.context.options.interfaces.useUseInterfacesParams ? t.conditionalExpression(
            t.identifier('useInterfaces'),
            asAny,
            baseTypes.protoType(args)
        ) : asAny;
    },

    type(args: DecodeMethod) {
        if (
            !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
            args.context.options.interfaces.enabled &&
            args.field.type === 'google.protobuf.Any' &&
            args.field.options['(cosmos_proto.accepts_interface)']

        ) {
            return baseTypes.anyType(args);
        }
        return baseTypes.protoType(args);
    },

    // (reader.int32() as any);
    enum(args: DecodeMethod) {
        return t.tsAsExpression(
            t.callExpression(
                t.memberExpression(
                    t.identifier('reader'),
                    t.identifier('int32')
                ),
                []
            ),
            t.tsAnyKeyword()
        )
    },

    // reader.bytes()
    bytes(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('bytes')
            ),
            []
        );
    },

    // message.period = fromDuration(Duration.decode(reader, reader.uint32()));

    durationString(args: DecodeMethod) {
        args.context.addUtil('fromDuration');

        return t.callExpression(
            t.identifier('fromDuration'),
            [
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Duration'),
                        t.identifier('decode')
                    ),
                    [
                        t.identifier('reader'),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('reader'),
                                t.identifier('uint32')
                            ),
                            []
                        )
                    ]
                )
            ]
        )
    },

    // message.periodReset = Timestamp.decode(reader, reader.uint32());

    timestamp(args: DecodeMethod) {

        return t.callExpression(
            t.memberExpression(
                t.identifier('Timestamp'),
                t.identifier('decode')
            ),
            [
                t.identifier('reader'),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('reader'),
                        t.identifier('uint32')
                    ),
                    []
                )
            ]
        )
    },

    timestampDate(args: DecodeMethod) {

        args.context.addUtil('fromTimestamp');

        return t.callExpression(
            t.identifier('fromTimestamp'),
            [
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Timestamp'),
                        t.identifier('decode')
                    ),
                    [
                        t.identifier('reader'),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('reader'),
                                t.identifier('uint32')
                            ),
                            []
                        )
                    ]
                )
            ]
        )
    },

    // const entry1 = LogEntry_LabelsEntry.decode(reader, reader.uint32());

    // if (entry1.value !== undefined) {
    //     message.labels[entry13.key] = entry13.value;
    // }

    keyHash(args: DecodeMethod) {
        const prop = args.field.name;
        const name = args.typeName;
        const id = args.field.id;
        const entryVariable = `entry${id}`;
        return [
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier(entryVariable),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier(getKeyTypeEntryName(name, prop)),
                                t.identifier('decode')
                            ),
                            [
                                t.identifier('reader'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                )
                            ]
                        )
                    )
                ]
            ),
            t.ifStatement(
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier(entryVariable),
                        t.identifier('value')
                    ),
                    t.identifier('undefined')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.memberExpression(
                                    t.identifier(entryVariable),
                                    t.identifier('key')
                                ),
                                true
                            ),
                            t.memberExpression(
                                t.identifier(entryVariable),
                                t.identifier('value')
                            )
                        )
                    )
                ])
            )
        ]
    }

};


export const switchOnTag = (num: number, prop: string, expr: t.Expression) => {
    return t.switchCase(
        t.numericLiteral(num),
        [
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    expr
                )
            ),
            t.breakStatement()
        ]
    );
};

export const switchOnTagTakesArray = (num: number, prop: string, expr: t.Statement[]) => {
    return t.switchCase(
        t.numericLiteral(num),
        [
            ...expr,
            t.breakStatement()
        ]
    );
};

//    message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
export const switchProtoTypeArray = (
    args: DecodeMethod,
    num: number,
    prop: string,
    name: string
) => {
    return t.switchCase(
        t.numericLiteral(num),
        [
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(prop)
                        ),
                        t.identifier('push')
                    ),
                    [
                        t.callExpression(
                            t.memberExpression(
                                t.identifier(name),
                                t.identifier('decode')
                            ),
                            [
                                t.identifier('reader'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                ),
                                ...(args.context.options.interfaces.enabled && args.context.options.interfaces.useUseInterfacesParams ? [
                                    t.identifier('useInterfaces'),
                                ] : []),
                            ]
                        )
                    ]
                )
            ),
            t.breakStatement()
        ]
    )
};

export const switchAnyTypeArrayUnwrap = (num: number, prop: string, name: string) => {
  return t.switchCase(
      t.numericLiteral(num),
      [
          t.expressionStatement(
              t.callExpression(
                  t.memberExpression(
                      t.memberExpression(
                          t.identifier('message'),
                          t.identifier(prop)
                      ),
                      t.identifier('push')
                  ),
                  [
                    t.callExpression(
                      t.memberExpression(t.identifier("GlobalDecoderRegistry"), t.identifier("unwrapAny")),
                      [
                          t.identifier('reader')
                      ]
                    )
                  ]
              )
          ),
          t.breakStatement()
      ]
  )
};

export const switchAnyTypeArray = (num: number, prop: string, name: string) => {
  return t.switchCase(
      t.numericLiteral(num),
      [
          t.expressionStatement(
              t.callExpression(
                  t.memberExpression(
                      t.memberExpression(
                          t.identifier('message'),
                          t.identifier(prop)
                      ),
                      t.identifier('push')
                  ),
                  [
                      t.tsAsExpression(
                          t.callExpression(
                              t.identifier(name),
                              [
                                  t.identifier('reader')
                              ]
                          ),
                          t.tsTypeReference(
                              t.identifier('Any')
                          )
                      )

                  ]
              )
          ),
          t.breakStatement()
      ]
  )
};

export const switchAnyTypeArrayUseInterfaces = (num: number, prop: string, typeName: string, interfaceName: string) => {
    return switchArray(num, prop,
        t.conditionalExpression(
            t.identifier('useInterfaces'),
            t.tsAsExpression(
                t.callExpression(
                    t.identifier(interfaceName),
                    [
                        t.identifier('reader')
                    ]
                ),
                t.tsTypeReference(
                    t.identifier('Any')
                )
            ),
            t.callExpression(
                t.memberExpression(
                    t.identifier(typeName),
                    t.identifier('decode')
                ),
                [
                    t.identifier('reader'),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('reader'),
                            t.identifier('uint32')
                        ),
                        []
                    ),
                    t.identifier('useInterfaces'),
                ]
            )
        )
    );
};

// if ((tag & 7) === 2) {
//     const end2 = reader.uint32() + reader.pos;

//     while (reader.pos < end2) {
//         message.codeIds.push((reader.uint64() as Long));
//     }
// } else {
//     message.codeIds.push((reader.uint64() as Long));
// }

export const switchTagDelimArray = (num: number, prop: string, expr: t.Expression) => {
    const blockStmt = t.blockStatement([
        t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('push')
                ),
                [
                    expr
                ]
            )
        )
    ]);
    return t.switchCase(
        t.numericLiteral(num),
        [
            t.ifStatement(
                t.binaryExpression(
                    '===',
                    t.binaryExpression(
                        '&',
                        t.identifier('tag'),
                        t.numericLiteral(7)
                    ),
                    t.numericLiteral(2)
                ),
                t.blockStatement([
                    t.variableDeclaration('const', [
                        t.variableDeclarator(
                            t.identifier('end2'),
                            t.binaryExpression(
                                '+',
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                ),
                                t.memberExpression(
                                    t.identifier('reader'),
                                    t.identifier('pos')
                                )
                            )
                        )
                    ]),
                    // while loop

                    t.whileStatement(
                        t.binaryExpression(
                            '<',
                            t.memberExpression(
                                t.identifier('reader'),
                                t.identifier('pos')
                            ),
                            t.identifier('end2')
                        ),
                        blockStmt
                    )

                ]),
                blockStmt
            ),
            t.breakStatement()
        ]
    )
};

export const switchArray = (num: number, prop: string, expr: t.Expression) => {
    return t.switchCase(
        t.numericLiteral(num),
        [
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(prop)
                        ),
                        t.identifier('push')
                    ),
                    [
                        expr
                    ]
                )
            ),
            t.breakStatement()
        ]
    );
};

