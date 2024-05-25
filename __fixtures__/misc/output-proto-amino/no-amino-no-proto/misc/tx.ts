import { EncodingTestForDontOmit, EncodingTestForDontOmitSDKType, EncodingTestForOmit, EncodingTestForOmitSDKType } from "./all_fields";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, DeepPartial } from "../helpers";
import { JsonSafe } from "../json-safe";
export const protobufPackage = "misc";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface InputMsg {
  dOTests: EncodingTestForDontOmit;
  oTests: EncodingTestForOmit;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface InputMsgSDKType {
  d_o_tests: EncodingTestForDontOmitSDKType;
  o_tests: EncodingTestForOmitSDKType;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgResponse {}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgResponseSDKType {}
function createBaseInputMsg(): InputMsg {
  return {
    dOTests: EncodingTestForDontOmit.fromPartial({}),
    oTests: EncodingTestForOmit.fromPartial({})
  };
}
export const InputMsg = {
  typeUrl: "/misc.InputMsg",
  encode(message: InputMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dOTests !== undefined) {
      EncodingTestForDontOmit.encode(message.dOTests, writer.uint32(10).fork()).ldelim();
    }
    if (message.oTests !== undefined) {
      EncodingTestForOmit.encode(message.oTests, writer.uint32(18).fork()).ldelim();
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
          message.dOTests = EncodingTestForDontOmit.decode(reader, reader.uint32());
          break;
        case 2:
          message.oTests = EncodingTestForOmit.decode(reader, reader.uint32());
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
    if (isSet(object.dOTests)) obj.dOTests = EncodingTestForDontOmit.fromJSON(object.dOTests);
    if (isSet(object.oTests)) obj.oTests = EncodingTestForOmit.fromJSON(object.oTests);
    return obj;
  },
  toJSON(message: InputMsg): JsonSafe<InputMsg> {
    const obj: any = {};
    message.dOTests !== undefined && (obj.dOTests = message.dOTests ? EncodingTestForDontOmit.toJSON(message.dOTests) : undefined);
    message.oTests !== undefined && (obj.oTests = message.oTests ? EncodingTestForOmit.toJSON(message.oTests) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<InputMsg>): InputMsg {
    const message = createBaseInputMsg();
    if (object.dOTests !== undefined && object.dOTests !== null) {
      message.dOTests = EncodingTestForDontOmit.fromPartial(object.dOTests);
    }
    if (object.oTests !== undefined && object.oTests !== null) {
      message.oTests = EncodingTestForOmit.fromPartial(object.oTests);
    }
    return message;
  },
  fromSDK(object: InputMsgSDKType): InputMsg {
    return {
      dOTests: object.d_o_tests ? EncodingTestForDontOmit.fromSDK(object.d_o_tests) : undefined,
      oTests: object.o_tests ? EncodingTestForOmit.fromSDK(object.o_tests) : undefined
    };
  },
  fromSDKJSON(object: any): InputMsgSDKType {
    return {
      d_o_tests: isSet(object.d_o_tests) ? EncodingTestForDontOmit.fromSDKJSON(object.d_o_tests) : undefined,
      o_tests: isSet(object.o_tests) ? EncodingTestForOmit.fromSDKJSON(object.o_tests) : undefined
    };
  },
  toSDK(message: InputMsg): InputMsgSDKType {
    const obj: any = {};
    message.dOTests !== undefined && (obj.d_o_tests = message.dOTests ? EncodingTestForDontOmit.toSDK(message.dOTests) : undefined);
    message.oTests !== undefined && (obj.o_tests = message.oTests ? EncodingTestForOmit.toSDK(message.oTests) : undefined);
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
  toJSON(_: MsgResponse): JsonSafe<MsgResponse> {
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