import * as t from "@babel/types";
import { getFieldOptionality, getOneOfs } from "..";
import { identifier, objectMethod } from "../../../utils";
import { ProtoParseContext } from "../../context";
import { ProtoType, ProtoField } from "@cosmology/types";
import { getBaseCreateTypeFuncName } from "../types";
import {
  arrayTypes,
  fromAmino as fromAminoJSON,
  fromAminoMessages,
} from "./utils";
import { SymbolNames } from "../../types";

const needsImplementation = (name: string, field: ProtoField) => {
  throw new Error(
    `need to implement fromAmino (${field.type} rules[${field.rule}] name[${name}])`
  );
};
export interface fromAminoMethod {
  context: ProtoParseContext;
  field: ProtoField;
  isOneOf: boolean;
  isOptional: boolean;
}

export const fromAminoMethodFields = (
  context: ProtoParseContext,
  name: string,
  proto: ProtoType
) => {
  const oneOfs = getOneOfs(proto);
  const fields = Object.keys(proto.fields ?? {}).map((fieldName) => {
    const field = {
      name: fieldName,
      ...proto.fields[fieldName],
    };

    const isOneOf = oneOfs.includes(fieldName);
    const isOptional = getFieldOptionality(context, field, isOneOf);

    const args: fromAminoMethod = {
      context,
      field,
      isOneOf,
      isOptional,
    };

    if (field.rule === "repeated") {
      switch (field.type) {
        case "string":
          return fromAminoJSON.array(args, arrayTypes.string());
        case "bytes":
          return fromAminoJSON.array(args, arrayTypes.bytes(args));
        case "bool":
          return fromAminoJSON.array(args, arrayTypes.bool());
        case "float":
          return fromAminoJSON.array(args, arrayTypes.float());
        case "double":
          return fromAminoJSON.array(args, arrayTypes.double());
        case "int32":
          return fromAminoJSON.array(args, arrayTypes.int32());
        case "sint32":
          return fromAminoJSON.array(args, arrayTypes.sint32());
        case "uint32":
          return fromAminoJSON.array(args, arrayTypes.uint32());
        case "fixed32":
          return fromAminoJSON.array(args, arrayTypes.fixed32());
        case "sfixed32":
          return fromAminoJSON.array(args, arrayTypes.sfixed32());
        case "int64":
          return fromAminoJSON.array(args, arrayTypes.int64(args));
        case "sint64":
          return fromAminoJSON.array(args, arrayTypes.sint64(args));
        case "uint64":
          return fromAminoJSON.array(args, arrayTypes.uint64(args));
        case "fixed64":
          return fromAminoJSON.array(args, arrayTypes.fixed64(args));
        case "sfixed64":
          return fromAminoJSON.array(args, arrayTypes.sfixed64(args));
        default:
          switch (field.parsedType.type) {
            case "Enum":
              return fromAminoJSON.array(args, arrayTypes.enum());
            case "Type":
              return fromAminoJSON.array(args, arrayTypes.type(args));
          }
          return needsImplementation(fieldName, field);
      }
    }

    if (field.keyType) {
      switch (field.keyType) {
        case "string":
        case "int32":
        case "sint32":
        case "uint32":
        case "fixed32":
        case "sfixed32":
        case "int64":
        case "sint64":
        case "uint64":
        case "fixed64":
        case "sfixed64":
          return fromAminoJSON.keyHash(args);
        default:
          return needsImplementation(fieldName, field);
      }
    }

    // casting special types
    if (field.type === "google.protobuf.Any") {
      switch (field.options?.["(cosmos_proto.accepts_interface)"]) {
        case "cosmos.crypto.PubKey":
          return fromAminoJSON.pubkey(args);
      }
    }

    if (field.type === "bytes") {
      // bytes [RawContractMessage]
      if (field.options?.["(gogoproto.casttype)"] === "RawContractMessage") {
        return fromAminoJSON.rawBytes(args);
      }
      // bytes [WASMByteCode]
      // TODO use a better option for this in proto source
      if (field.options?.["(gogoproto.customname)"] === "WASMByteCode") {
        return fromAminoJSON.wasmByteCode(args);
      }
    }

    // default types
    switch (field.type) {
      case "string":
        return fromAminoJSON.string(args);
      case "bytes":
        return fromAminoJSON.bytes(args);
      case "bool":
        return fromAminoJSON.bool(args);
      case "double":
        return fromAminoJSON.double(args);
      case "float":
        return fromAminoJSON.float(args);
      case "int32":
        return fromAminoJSON.int32(args);
      case "sint32":
        return fromAminoJSON.sint32(args);
      case "uint32":
        return fromAminoJSON.uint32(args);
      case "fixed32":
        return fromAminoJSON.fixed32(args);
      case "sfixed32":
        return fromAminoJSON.sfixed32(args);
      case "int64":
        return fromAminoJSON.int64(args);
      case "sint64":
        return fromAminoJSON.sint64(args);
      case "uint64":
        return fromAminoJSON.uint64(args);
      case "fixed64":
        return fromAminoJSON.fixed64(args);
      case "sfixed64":
        return fromAminoJSON.sfixed64(args);
      case "Duration":
      case "google.protobuf.Duration":
        return fromAminoJSON.duration(args);
      case "Timestamp":
      case "google.protobuf.Timestamp":
        return fromAminoJSON.timestamp(args);
      default:
        switch (field.parsedType.type) {
          case "Enum":
            return fromAminoJSON.enum(args);
          case "Type":
            return fromAminoJSON.type(args);
        }
        return needsImplementation(fieldName, field);
    }
  });
  return fields;
};

export const fromAminoJSONMethod = (
  context: ProtoParseContext,
  name: string,
  proto: ProtoType
) => {
  const fields = fromAminoMethodFields(context, name, proto);
  let varName = "object";
  if (!fields.length) {
    varName = "_";
  }

  const aminoTypeName = SymbolNames.Amino(name);

  const param = identifier(
    varName,
    t.tsTypeAnnotation(t.tsTypeReference(t.identifier(aminoTypeName)))
  );

  let body: t.Statement[] = [];

  if (proto.type === "Type") {
    switch (proto.name) {
      case "Duration": {
        if (proto.package === "google.protobuf") {
          [].push.apply(body, fromAminoMessages.duration(context, name, proto));
        }
        break;
      }
      case "Height": {
        if (proto.package === "ibc.core.client.v1") {
          [].push.apply(body, fromAminoMessages.height(context, name, proto));
        }
        break;
      }
      case "Timestamp":
      case "google.protobuf.Timestamp":
        [].push.apply(body, fromAminoMessages.timestamp(context, name, proto));
        break;
      case "google.protobuf.Any":
      case "Any":
        [].push.apply(body, fromAminoMessages.anyType());
        break;

      default:
    }
  }

  if (!body.length) {
    // 2. default to field-level parsing
    body = [
      // init
      t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier("message"),
          t.callExpression(t.identifier(getBaseCreateTypeFuncName(name)), [])
        ),
      ]),

      ...fields,

      // RETURN
      t.returnStatement(t.identifier("message")),
    ];
  }

  return objectMethod(
    "method",
    t.identifier("fromAmino"),
    [param],
    t.blockStatement(body),
    false,
    false,
    false,
    t.tsTypeAnnotation(t.tsTypeReference(t.identifier(name)))
  );
};

export const fromAminoMsgMethod = (
  context: ProtoParseContext,
  name: string,
  proto: ProtoType
) => {
  const varName = "object";

  const TypeName = SymbolNames.Msg(name);
  const AminoMsgName = SymbolNames.AminoMsg(name);
  const ReturnType = SymbolNames.Msg(name);

  const body: t.Statement[] = [];

  body.push(
    t.returnStatement(
      t.callExpression(
        t.memberExpression(t.identifier(TypeName), t.identifier("fromAmino")),
        [t.memberExpression(t.identifier(varName), t.identifier("value"))]
      )
    )
  );

  return objectMethod(
    "method",
    t.identifier("fromAminoMsg"),
    [
      identifier(
        varName,
        t.tsTypeAnnotation(t.tsTypeReference(t.identifier(AminoMsgName))),
        false
      ),
    ],
    t.blockStatement(body),
    false,
    false,
    false,
    t.tsTypeAnnotation(t.tsTypeReference(t.identifier(ReturnType)))
  );
};
