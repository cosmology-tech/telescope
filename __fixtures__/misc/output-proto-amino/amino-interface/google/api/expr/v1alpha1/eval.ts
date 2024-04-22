import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet, formatNumberWithThousandSeparator } from "../../../../helpers";
import { DenomMetadata, ITextualSigLine, TextualSigLine } from "../../../../types";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "google.api.expr.v1alpha1";
export interface ExprValue {
  /** The ids of the expressions with unknown values. */
  exprs: IdRef[];
}
export interface ExprValueProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ExprValue";
  value: Uint8Array;
}
export interface ExprValueAmino {
  /** The ids of the expressions with unknown values. */
  exprs?: IdRefAmino[];
}
export interface ExprValueAminoMsg {
  type: "/google.api.expr.v1alpha1.ExprValue";
  value: ExprValueAmino;
}
export interface ExprValueSDKType {
  exprs: IdRefSDKType[];
}
export interface IdRef {
  /** The expression id. */
  id: number;
}
export interface IdRefProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.IdRef";
  value: Uint8Array;
}
export interface IdRefAmino {
  /** The expression id. */
  id?: number;
}
export interface IdRefAminoMsg {
  type: "/google.api.expr.v1alpha1.IdRef";
  value: IdRefAmino;
}
export interface IdRefSDKType {
  id: number;
}
function createBaseExprValue(): ExprValue {
  return {
    exprs: []
  };
}
export const ExprValue = {
  typeUrl: "/google.api.expr.v1alpha1.ExprValue",
  is(o: any): o is ExprValue {
    return o && (o.$typeUrl === ExprValue.typeUrl || Array.isArray(o.exprs) && (!o.exprs.length || IdRef.is(o.exprs[0])));
  },
  isSDK(o: any): o is ExprValueSDKType {
    return o && (o.$typeUrl === ExprValue.typeUrl || Array.isArray(o.exprs) && (!o.exprs.length || IdRef.isSDK(o.exprs[0])));
  },
  isAmino(o: any): o is ExprValueAmino {
    return o && (o.$typeUrl === ExprValue.typeUrl || Array.isArray(o.exprs) && (!o.exprs.length || IdRef.isAmino(o.exprs[0])));
  },
  encode(message: ExprValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exprs) {
      IdRef.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExprValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExprValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exprs.push(IdRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExprValue {
    const obj = createBaseExprValue();
    if (Array.isArray(object?.exprs)) obj.exprs = object.exprs.map((e: any) => IdRef.fromJSON(e));
    return obj;
  },
  toJSON(message: ExprValue): unknown {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e ? IdRef.toJSON(e) : undefined);
    } else {
      obj.exprs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ExprValue>): ExprValue {
    const message = createBaseExprValue();
    message.exprs = object.exprs?.map(e => IdRef.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ExprValueSDKType): ExprValue {
    return {
      exprs: Array.isArray(object?.exprs) ? object.exprs.map((e: any) => IdRef.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ExprValueSDKType {
    return {
      exprs: Array.isArray(object?.exprs) ? object.exprs.map((e: any) => IdRef.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ExprValue): ExprValueSDKType {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e ? IdRef.toSDK(e) : undefined);
    } else {
      obj.exprs = [];
    }
    return obj;
  },
  fromAmino(object: ExprValueAmino): ExprValue {
    const message = createBaseExprValue();
    message.exprs = object.exprs?.map(e => IdRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExprValue): ExprValueAmino {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e ? IdRef.toAmino(e) : undefined);
    } else {
      obj.exprs = message.exprs;
    }
    return obj;
  },
  fromAminoMsg(object: ExprValueAminoMsg): ExprValue {
    return ExprValue.fromAmino(object.value);
  },
  fromProtoMsg(message: ExprValueProtoMsg): ExprValue {
    return ExprValue.decode(message.value);
  },
  toProto(message: ExprValue): Uint8Array {
    return ExprValue.encode(message).finish();
  },
  toProtoMsg(message: ExprValue): ExprValueProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.ExprValue",
      value: ExprValue.encode(message).finish()
    };
  },
  toTextualSig(message: ExprValue, results?: ITextualSigLine[], indent?: number, expert?: boolean, metadata?: DenomMetadata[]): ITextualSigLine[] {
    results = results ?? [];
    results.push(new TextualSigLine("ExprValue object", indent, expert));
    message.exprs = object.exprs?.map(e => IdRef.toTextualSig(e)) || [];
    return results;
  }
};
GlobalDecoderRegistry.register(ExprValue.typeUrl, ExprValue);
function createBaseIdRef(): IdRef {
  return {
    id: 0
  };
}
export const IdRef = {
  typeUrl: "/google.api.expr.v1alpha1.IdRef",
  is(o: any): o is IdRef {
    return o && (o.$typeUrl === IdRef.typeUrl || typeof o.id === "number");
  },
  isSDK(o: any): o is IdRefSDKType {
    return o && (o.$typeUrl === IdRef.typeUrl || typeof o.id === "number");
  },
  isAmino(o: any): o is IdRefAmino {
    return o && (o.$typeUrl === IdRef.typeUrl || typeof o.id === "number");
  },
  encode(message: IdRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdRef {
    const obj = createBaseIdRef();
    if (isSet(object.id)) obj.id = Number(object.id);
    return obj;
  },
  toJSON(message: IdRef): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object: DeepPartial<IdRef>): IdRef {
    const message = createBaseIdRef();
    message.id = object.id ?? 0;
    return message;
  },
  fromSDK(object: IdRefSDKType): IdRef {
    return {
      id: object?.id
    };
  },
  fromSDKJSON(object: any): IdRefSDKType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  toSDK(message: IdRef): IdRefSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: IdRefAmino): IdRef {
    const message = createBaseIdRef();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: IdRef): IdRefAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: IdRefAminoMsg): IdRef {
    return IdRef.fromAmino(object.value);
  },
  fromProtoMsg(message: IdRefProtoMsg): IdRef {
    return IdRef.decode(message.value);
  },
  toProto(message: IdRef): Uint8Array {
    return IdRef.encode(message).finish();
  },
  toProtoMsg(message: IdRef): IdRefProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.IdRef",
      value: IdRef.encode(message).finish()
    };
  },
  toTextualSig(message: IdRef, results?: ITextualSigLine[], indent?: number, expert?: boolean, metadata?: DenomMetadata[]): ITextualSigLine[] {
    results = results ?? [];
    results.push(new TextualSigLine("IdRef object", indent, expert));
    if (message.id !== undefined && message.id !== null) {
      results.push(new TextualSigLine(`Id: ${formatNumberWithThousandSeparator(message.id)}`, indent, expert).indentAdd(1));
    }
    return results;
  }
};
GlobalDecoderRegistry.register(IdRef.typeUrl, IdRef);