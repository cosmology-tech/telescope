import * as t from "@babel/types";
import { fromAminoMethod } from "./index";
import { identifier, callExpression, TypeLong, BILLION } from "../../../utils";
import { getFieldsTypeName } from "..";
import { getDefaultTSTypeFromProtoType, getFieldNames } from "../../types";
import { ProtoType } from "@cosmology/types";
import { ProtoParseContext } from "../../context";
import { camel } from "@cosmology/utils";

// message.sender = expr
const setField = (args: fromAminoMethod, expr: t.Expression): t.Statement => {
  const { propName } = getFieldNames(args.field);

  return t.expressionStatement(
    t.assignmentExpression(
      "=",
      t.memberExpression(t.identifier("message"), t.identifier(propName)),
      expr
    )
  );
};

const setNullishCoalescing = (
  args: fromAminoMethod,
  value: t.Expression
): t.Statement => {
  const { origName } = getFieldNames(args.field);
  return setField(
    args,
    t.logicalExpression(
      "??",
      t.memberExpression(t.identifier("object"), t.identifier(origName)),
      value
    )
  );
};

const setNotUndefinedAndNotNull = (
  value: t.Expression,
  defaultValue: t.Expression,
  args: fromAminoMethod
): t.Statement => {
  const { propName, origName } = getFieldNames(args.field);

  return t.ifStatement(
    t.logicalExpression(
      "&&",
      t.binaryExpression(
        "!==",
        t.memberExpression(t.identifier("object"), t.identifier(origName)),
        t.identifier("undefined")
      ),
      t.binaryExpression(
        "!==",
        t.memberExpression(t.identifier("object"), t.identifier(origName)),
        t.nullLiteral()
      )
    ),
    t.blockStatement([
      t.expressionStatement(
        t.assignmentExpression(
          "=",
          t.memberExpression(t.identifier("message"), t.identifier(propName)),
          value
        )
      ),
    ])
  );
};

export const fromAmino = {
  // message.sender = object.sender ?? "";
  string(args: fromAminoMethod) {
    return setNullishCoalescing(
      args,
      getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
    );
  },

  // message.disableMacros = object.disableMacros ?? false;
  bool(args: fromAminoMethod) {
    return setNullishCoalescing(
      args,
      getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
    );
  },

  // message.doubleValue = object.doubleValue ?? 0;

  number(args: fromAminoMethod) {
    return setNullishCoalescing(
      args,
      getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
    );
  },

  int32(args: fromAminoMethod) {
    return fromAmino.number(args);
  },
  uint32(args: fromAminoMethod) {
    return fromAmino.number(args);
  },
  sint32(args: fromAminoMethod) {
    return fromAmino.number(args);
  },
  fixed32(args: fromAminoMethod) {
    return fromAmino.number(args);
  },
  sfixed32(args: fromAminoMethod) {
    return fromAmino.number(args);
  },
  double(args: fromAminoMethod) {
    return fromAmino.number(args);
  },
  float(args: fromAminoMethod) {
    return fromAmino.number(args);
  },

  // OLD: message.myInt64Value = object.myInt64Value !== undefined && object.myInt64Value !== null ? Long.fromValue(object.myInt64Value) : Long.ZERO;
  // NEW: if( object.myInt64Value !== undefined && object.myInt64Value !== null ) { message.myInt64Value = Long.fromValue(object.myInt64Value) }
  long(args: fromAminoMethod) {
    const { origName } = getFieldNames(args.field);

    TypeLong.addUtil(args.context);

    return setNotUndefinedAndNotNull(
      TypeLong.getFromValueWithArgs(
        args.context,
        t.memberExpression(t.identifier("object"), t.identifier(origName))
      ),
      getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf),
      args
    );
  },

  int64(args: fromAminoMethod) {
    return fromAmino.long(args);
  },
  uint64(args: fromAminoMethod) {
    return fromAmino.long(args);
  },
  sint64(args: fromAminoMethod) {
    return fromAmino.long(args);
  },
  fixed64(args: fromAminoMethod) {
    return fromAmino.long(args);
  },
  sfixed64(args: fromAminoMethod) {
    return fromAmino.long(args);
  },

  // message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromAmino(object.signDoc) : SignDocDirectAux.fromAmino({});
  type(args: fromAminoMethod) {
    const { origName } = getFieldNames(args.field);
    let name = args.context.getTypeName(args.field);

    if (
      !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
      args.context.options.interfaces.enabled &&
      args.context.options.interfaces?.useGlobalDecoderRegistry &&
      args.field.type === "google.protobuf.Any" &&
      args.field.options["(cosmos_proto.accepts_interface)"]
    ) {
      name = "GlobalDecoderRegistry";
    }

    return setNotUndefinedAndNotNull(
      t.callExpression(
        t.memberExpression(t.identifier(name), t.identifier("fromAmino")),
        [t.memberExpression(t.identifier("object"), t.identifier(origName))]
      ),
      t.identifier("undefined"),
      args
    );
  },

  // message.mode = object.mode ?? 0;
  enum(args: fromAminoMethod) {
    return setNullishCoalescing(
      args,
      getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
    );
  },

  // message.queryData = object.queryData ?? new Uint8Array()
  bytes(args: fromAminoMethod) {
    return setNullishCoalescing(
      args,
      getDefaultTSTypeFromProtoType(args.context, args.field, args.isOneOf)
    );
  },

  // message.period = object.period ?? undefined;

  duration(args: fromAminoMethod) {
    const durationFormat = args.context.pluginValue(
      "prototypes.typingsFormat.duration"
    );
    switch (durationFormat) {
      case "string":
        return fromAmino.durationString(args);
      case "duration":
      default:
        return fromAmino.type(args);
    }
  },

  durationString(args: fromAminoMethod) {
    return setNullishCoalescing(args, t.identifier("undefined"));
  },

  timestamp(args: fromAminoMethod) {
    const timestampFormat = args.context.pluginValue(
      "prototypes.typingsFormat.timestamp"
    );
    switch (timestampFormat) {
      case "timestamp":
        return fromAmino.type(args);
      case "date":
      default:
        return fromAmino.timestampDate(args);
    }
  },

  // message.periodReset = object.periodReset ?? undefined;

  timestampDate(args: fromAminoMethod) {
    return setNullishCoalescing(args, t.identifier("undefined"));
  },

  // message.referenceMap = Object.entries(object.referenceMap ?? {}).reduce<{
  //     [key: Long]: Reference;
  //   }>((acc, [key, value]) => {
  //     if (value !== undefined) {
  //       acc[Number(key)] = Reference.fromAmino(value);
  //     }

  //     return acc;
  //   }, {});

  // message.labels = Object.entries(object.typeMap ?? {}).reduce<{
  //     [key: string]: string;
  // }>((acc, [key, value]) => {
  //     if (value !== undefined) {
  //         acc[key] = String(value);
  //     }

  //     return acc;
  // }, {});

  keyHash(args: fromAminoMethod) {
    const { propName, origName } = getFieldNames(args.field);
    const keyType = args.field.keyType;
    const valueType = args.field.parsedType.name;

    let fromAminoWithArgs = null;
    // valueTypeType: string for identifier
    let valueTypeType = valueType;
    switch (valueType) {
      case "string":
        fromAminoWithArgs = t.callExpression(t.identifier("String"), [
          t.identifier("value"),
        ]);
        break;
      case "int32":
      case "uint32":
        valueTypeType = "number";
        fromAminoWithArgs = t.callExpression(t.identifier("Number"), [
          t.identifier("value"),
        ]);
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        TypeLong.addUtil(args.context);

        valueTypeType = TypeLong.getPropType(args.context);
        fromAminoWithArgs = TypeLong.getFromValueWithArgs(
          args.context,
          t.identifier("value")
        );
        break;
      default:
        fromAminoWithArgs = t.callExpression(
          t.memberExpression(
            t.identifier(valueType),
            t.identifier("fromAmino")
          ),
          [t.identifier("value")]
        );
    }

    let wrapKey = null;
    let keyTypeType = null;
    switch (keyType) {
      case "string":
        wrapKey = (a) => a;
        keyTypeType = t.tsStringKeyword();
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        wrapKey = (a) => t.callExpression(t.identifier("Number"), [a]);

        TypeLong.addUtil(args.context);

        keyTypeType = t.tsTypeReference(
          TypeLong.getPropIdentifier(args.context)
        );
        break;
      case "int32":
      case "uint32":
        wrapKey = (a) => t.callExpression(t.identifier("Number"), [a]);
        keyTypeType = t.tsNumberKeyword();
        break;
      default:
        throw new Error("keyHash requires new type. Ask maintainers.");
    }

    return t.expressionStatement(
      t.assignmentExpression(
        "=",
        t.memberExpression(t.identifier("message"), t.identifier(propName)),
        callExpression(
          t.memberExpression(
            t.callExpression(
              t.memberExpression(
                t.identifier("Object"),
                t.identifier("entries")
              ),
              [
                t.logicalExpression(
                  "??",
                  t.memberExpression(
                    t.identifier("object"),
                    t.identifier(origName)
                  ),
                  t.objectExpression([])
                ),
              ]
            ),
            t.identifier("reduce")
          ),
          [
            t.arrowFunctionExpression(
              [
                t.identifier("acc"),
                t.arrayPattern([t.identifier("key"), t.identifier("value")]),
              ],
              t.blockStatement([
                t.ifStatement(
                  t.binaryExpression(
                    "!==",
                    t.identifier("value"),
                    t.identifier("undefined")
                  ),
                  t.blockStatement([
                    t.expressionStatement(
                      t.assignmentExpression(
                        "=",
                        t.memberExpression(
                          t.identifier("acc"),
                          wrapKey(t.identifier("key")),
                          true
                        ),
                        fromAminoWithArgs
                      )
                    ),
                  ])
                ),
                t.returnStatement(t.identifier("acc")),
              ])
            ),
            t.objectExpression([]),
          ],
          t.tsTypeParameterInstantiation([
            t.tsTypeLiteral([
              t.tsIndexSignature(
                [identifier("key", t.tsTypeAnnotation(keyTypeType))],
                t.tsTypeAnnotation(
                  t.tsTypeReference(t.identifier(valueTypeType))
                )
              ),
            ]),
          ])
        )
      )
    );
  },

  // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
  array(args: fromAminoMethod, expr: t.Expression) {
    const { origName, propName } = getFieldNames(args.field);
    return t.expressionStatement(
      t.assignmentExpression(
        "=",
        t.memberExpression(t.identifier("message"), t.identifier(propName)),
        t.logicalExpression(
          "||",
          t.optionalCallExpression(
            t.optionalMemberExpression(
              t.memberExpression(t.identifier("object"), t.identifier(origName)),
              t.identifier("map"),
              false,
              true
            ),
            [t.arrowFunctionExpression([t.identifier("e")], expr)],
            false
          ),
          t.arrayExpression([])
        )
      )
    );
  },
};

export const arrayTypes = {
  // message.overloadId = object.overloadId?.map(e => e) || [];
  identity() {
    return t.identifier("e");
  },
  string() {
    return arrayTypes.identity();
  },
  bool() {
    return arrayTypes.identity();
  },
  bytes() {
    return arrayTypes.identity();
  },
  double() {
    return arrayTypes.identity();
  },
  float() {
    return arrayTypes.identity();
  },
  int32() {
    return arrayTypes.identity();
  },
  uint32() {
    return arrayTypes.identity();
  },
  sint32() {
    return arrayTypes.identity();
  },
  fixed32() {
    return arrayTypes.identity();
  },
  sfixed32() {
    return arrayTypes.identity();
  },
  enum() {
    return arrayTypes.identity();
  },

  // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
  long(args: fromAminoMethod) {
    TypeLong.addUtil(args.context);

    return TypeLong.getFromValueWithArgs(args.context, t.identifier("e"));
  },
  int64(args: fromAminoMethod) {
    return arrayTypes.long(args);
  },
  uint64(args: fromAminoMethod) {
    return arrayTypes.long(args);
  },
  sint64(args: fromAminoMethod) {
    return arrayTypes.long(args);
  },
  fixed64(args: fromAminoMethod) {
    return arrayTypes.long(args);
  },
  sfixed64(args: fromAminoMethod) {
    return arrayTypes.long(args);
  },

  // message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromAmino(e)) || [];
  type(args: fromAminoMethod) {
    let name = args.context.getTypeName(args.field);

    if (
      !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
      args.context.options.interfaces.enabled &&
      args.context.options.interfaces?.useGlobalDecoderRegistry &&
      args.field.type === "google.protobuf.Any" &&
      args.field.options["(cosmos_proto.accepts_interface)"]
    ) {
      name = "GlobalDecoderRegistry";
    }

    return t.callExpression(
      t.memberExpression(t.identifier(name), t.identifier("fromAmino")),
      [t.identifier("e")]
    );
  },
};

export const fromAminoMessages = {
  anyType() {
    return [
      t.returnStatement(
        t.objectExpression([
          t.objectProperty(
            t.identifier("typeUrl"),
            t.memberExpression(t.identifier("object"), t.identifier("type"))
          ),
          t.objectProperty(
            t.identifier("value"),
            t.memberExpression(t.identifier("object"), t.identifier("value"))
          ),
        ])
      ),
    ];
  },
  timestamp(context: ProtoParseContext, name: string, proto: ProtoType) {
    context.addUtil("fromJsonTimestamp");

    return [
      t.returnStatement(
        t.callExpression(t.identifier("fromJsonTimestamp"), [
          t.identifier("object"),
        ])
      ),
    ];
  },
  height(context: ProtoParseContext, name: string, proto: ProtoType) {
    TypeLong.addUtil(context);

    const keepCase = context.options.prototypes.parser.keepCase;
    const casing = keepCase ? (str) => str : camel;

    const makeArgs = (fieldName: string) => {
      let args: t.Expression[] = [
        t.logicalExpression(
          "||",
          t.memberExpression(t.identifier("object"), t.identifier(fieldName)),
          t.stringLiteral("0")
        ),
      ];

      const longType = TypeLong.getType(context);

      if (longType == "Long") {
        args.push(t.booleanLiteral(true));
      }

      return args;
    };

    const makeField = (fieldName: string) =>
      t.objectProperty(
        t.identifier(casing(fieldName)),
        t.callExpression(TypeLong.getFromString(context), makeArgs(fieldName))
      );

    return [
      // return
      t.returnStatement(
        t.objectExpression([
          makeField("revision_number"),
          makeField("revision_height"),
        ])
      ),
    ];
  },
  duration(context: ProtoParseContext, name: string, proto: ProtoType) {
    TypeLong.addUtil(context);

    const longType = TypeLong.getType(context);

    switch (longType) {
      case "BigInt":
        return [
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier("value"),
              t.callExpression(t.identifier("BigInt"), [t.identifier("object")])
            ),
          ]),
          t.returnStatement(
            t.objectExpression([
              t.objectProperty(
                t.identifier("seconds"),
                t.binaryExpression(
                  "/",
                  t.identifier("value"),
                  t.callExpression(t.identifier("BigInt"), [
                    t.stringLiteral("1000000000"),
                  ])
                )
              ),
              t.objectProperty(
                t.identifier("nanos"),
                t.callExpression(t.identifier("Number"), [
                  t.binaryExpression(
                    "%",
                    t.identifier("value"),
                    t.callExpression(t.identifier("BigInt"), [
                      t.stringLiteral("1000000000"),
                    ])
                  ),
                ])
              ),
            ])
          ),
        ];

      case "Long":
      default:
        return [
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier("value"),
              t.callExpression(t.identifier("parseInt"), [
                t.identifier("object"),
              ])
            ),
          ]),
          // return
          t.returnStatement(
            t.objectExpression([
              // seconds
              t.objectProperty(
                t.identifier("seconds"),
                t.callExpression(TypeLong.getFromNumber(context), [
                  t.callExpression(
                    t.memberExpression(
                      t.identifier("Math"),
                      t.identifier("floor")
                    ),
                    [t.binaryExpression("/", t.identifier("value"), BILLION)]
                  ),
                ])
              ),

              // nanos
              t.objectProperty(
                t.identifier("nanos"),
                t.binaryExpression("%", t.identifier("value"), BILLION)
              ),
            ])
          ),
        ];
    }
  },
};
