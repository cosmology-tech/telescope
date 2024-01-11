import { AminoEncodingTestForDontOmit, AminoEncodingTestForDontOmitSDKType, AminoEncodingTestForOmit, AminoEncodingTestForOmitSDKType } from "./amino_fields";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial } from "../helpers";
export const protobufPackage = "misc";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface InputMsg {
  dOTests: AminoEncodingTestForDontOmit;
  oTests: AminoEncodingTestForOmit;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface InputMsgSDKType {
  d_o_tests: AminoEncodingTestForDontOmitSDKType;
  o_tests: AminoEncodingTestForOmitSDKType;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgResponse {}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgResponseSDKType {}
function createBaseInputMsg(): InputMsg {
  return {
    dOTests: AminoEncodingTestForDontOmit.fromPartial({}),
    oTests: AminoEncodingTestForOmit.fromPartial({})
  };
}
export const InputMsg = {
  typeUrl: "/misc.InputMsg",
  encode(message: InputMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dOTests !== undefined) {
      AminoEncodingTestForDontOmit.encode(message.dOTests, writer.uint32(10).fork()).ldelim();
    }
    if (message.oTests !== undefined) {
      AminoEncodingTestForOmit.encode(message.oTests, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InputMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInputMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dOTests = AminoEncodingTestForDontOmit.decode(reader, reader.uint32());
          break;
        case 2:
          message.oTests = AminoEncodingTestForOmit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InputMsg {
    const obj = createBaseInputMsg();
    if (isSet(object.dOTests)) obj.dOTests = AminoEncodingTestForDontOmit.fromJSON(object.dOTests);
    if (isSet(object.oTests)) obj.oTests = AminoEncodingTestForOmit.fromJSON(object.oTests);
    return obj;
  },
  toJSON(message: InputMsg): unknown {
    const obj: any = {};
    message.dOTests !== undefined && (obj.dOTests = message.dOTests ? AminoEncodingTestForDontOmit.toJSON(message.dOTests) : undefined);
    message.oTests !== undefined && (obj.oTests = message.oTests ? AminoEncodingTestForOmit.toJSON(message.oTests) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<InputMsg>): InputMsg {
    const message = createBaseInputMsg();
    if (object.dOTests !== undefined && object.dOTests !== null) {
      message.dOTests = AminoEncodingTestForDontOmit.fromPartial(object.dOTests);
    }
    if (object.oTests !== undefined && object.oTests !== null) {
      message.oTests = AminoEncodingTestForOmit.fromPartial(object.oTests);
    }
    return message;
  },
  fromSDK(object: InputMsgSDKType): InputMsg {
    return {
      dOTests: object.d_o_tests ? AminoEncodingTestForDontOmit.fromSDK(object.d_o_tests) : undefined,
      oTests: object.o_tests ? AminoEncodingTestForOmit.fromSDK(object.o_tests) : undefined
    };
  },
  fromSDKJSON(object: any): InputMsgSDKType {
    return {
      d_o_tests: isSet(object.d_o_tests) ? AminoEncodingTestForDontOmit.fromSDKJSON(object.d_o_tests) : undefined,
      o_tests: isSet(object.o_tests) ? AminoEncodingTestForOmit.fromSDKJSON(object.o_tests) : undefined
    };
  },
  toSDK(message: InputMsg): InputMsgSDKType {
    const obj: any = {};
    message.dOTests !== undefined && (obj.d_o_tests = message.dOTests ? AminoEncodingTestForDontOmit.toSDK(message.dOTests) : undefined);
    message.oTests !== undefined && (obj.o_tests = message.oTests ? AminoEncodingTestForOmit.toSDK(message.oTests) : undefined);
    return obj;
  }
};
function createBaseMsgResponse(): MsgResponse {
  return {};
}
export const MsgResponse = {
  typeUrl: "/misc.MsgResponse",
  encode(_: MsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgResponse {
    const obj = createBaseMsgResponse();
    return obj;
  },
  toJSON(_: MsgResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgResponse>): MsgResponse {
    const message = createBaseMsgResponse();
    return message;
  },
  fromSDK(_: MsgResponseSDKType): MsgResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgResponseSDKType {
    return {};
  },
  toSDK(_: MsgResponse): MsgResponseSDKType {
    const obj: any = {};
    return obj;
  }
};