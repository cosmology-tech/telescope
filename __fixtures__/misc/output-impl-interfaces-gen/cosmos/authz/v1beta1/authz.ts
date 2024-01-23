import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DepositDeploymentAuthorization, DepositDeploymentAuthorizationProtoMsg, DepositDeploymentAuthorizationSDKType } from "../../../akash/deployment/v1beta1/authz";
import { SendAuthorization, SendAuthorizationProtoMsg, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.authz.v1beta1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}
export interface GenericAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
  value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg?: string;
}
export interface GenericAuthorizationAminoMsg {
  type: "cosmos-sdk/GenericAuthorization";
  value: GenericAuthorizationAmino;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationSDKType {
  msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  authorization: GenericAuthorization | DepositDeploymentAuthorization | SendAuthorization | Any | undefined;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: Date;
  opt: VoteOption;
  singleMsg: Any;
  messages: Any[];
}
export interface GrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.Grant";
  value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "authorization"> & {
  authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorizationProtoMsg | SendAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
  authorization?: AnyAmino;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: string;
  opt?: VoteOption;
  single_msg?: AnyAmino;
  messages?: AnyAmino[];
}
export interface GrantAminoMsg {
  type: "cosmos-sdk/Grant";
  value: GrantAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantSDKType {
  authorization: GenericAuthorizationSDKType | DepositDeploymentAuthorizationSDKType | SendAuthorizationSDKType | AnySDKType | undefined;
  expiration?: Date;
  opt: VoteOption;
  single_msg: AnySDKType;
  messages: AnySDKType[];
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization?: GenericAuthorization | DepositDeploymentAuthorization | SendAuthorization | Any | undefined;
  expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
  value: Uint8Array;
}
export type GrantAuthorizationEncoded = Omit<GrantAuthorization, "authorization"> & {
  authorization?: GenericAuthorizationProtoMsg | DepositDeploymentAuthorizationProtoMsg | SendAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationAmino {
  granter?: string;
  grantee?: string;
  authorization?: AnyAmino;
  expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
  type: "cosmos-sdk/GrantAuthorization";
  value: GrantAuthorizationAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationSDKType {
  granter: string;
  grantee: string;
  authorization?: GenericAuthorizationSDKType | DepositDeploymentAuthorizationSDKType | SendAuthorizationSDKType | AnySDKType | undefined;
  expiration?: Date;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
  /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
  msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem";
  value: Uint8Array;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemAmino {
  /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
  msg_type_urls?: string[];
}
export interface GrantQueueItemAminoMsg {
  type: "cosmos-sdk/GrantQueueItem";
  value: GrantQueueItemAmino;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemSDKType {
  msg_type_urls: string[];
}
/** test Any array */
export interface Grants {
  authorization: (GenericAuthorization | DepositDeploymentAuthorization | SendAuthorization | Any)[] | Any[];
}
export interface GrantsProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.Grants";
  value: Uint8Array;
}
export type GrantsEncoded = Omit<Grants, "authorization"> & {
  authorization: (GenericAuthorizationProtoMsg | DepositDeploymentAuthorizationProtoMsg | SendAuthorizationProtoMsg | AnyProtoMsg)[];
};
/** test Any array */
export interface GrantsAmino {
  authorization?: AnyAmino[];
}
export interface GrantsAminoMsg {
  type: "cosmos-sdk/Grants";
  value: GrantsAmino;
}
/** test Any array */
export interface GrantsSDKType {
  authorization: (GenericAuthorizationSDKType | DepositDeploymentAuthorizationSDKType | SendAuthorizationSDKType | AnySDKType)[];
}
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    msg: ""
  };
}
export const GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  aminoType: "cosmos-sdk/GenericAuthorization",
  is(o: any): o is GenericAuthorization {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isSDK(o: any): o is GenericAuthorizationSDKType {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isAmino(o: any): o is GenericAuthorizationAmino {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  encode(message: GenericAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenericAuthorization {
    const obj = createBaseGenericAuthorization();
    if (isSet(object.msg)) obj.msg = String(object.msg);
    return obj;
  },
  toJSON(message: GenericAuthorization): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },
  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromSDK(object: GenericAuthorizationSDKType): GenericAuthorization {
    return {
      msg: object?.msg
    };
  },
  fromSDKJSON(object: any): GenericAuthorizationSDKType {
    return {
      msg: isSet(object.msg) ? String(object.msg) : ""
    };
  },
  toSDK(message: GenericAuthorization): GenericAuthorizationSDKType {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: GenericAuthorizationAmino): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    }
    return message;
  },
  toAmino(message: GenericAuthorization): GenericAuthorizationAmino {
    const obj: any = {};
    obj.msg = message.msg;
    return obj;
  },
  fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization {
    return GenericAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/GenericAuthorization",
      value: GenericAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message: GenericAuthorization): Uint8Array {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenericAuthorization.typeUrl, GenericAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(GenericAuthorization.aminoType, GenericAuthorization.typeUrl);
function createBaseGrant(): Grant {
  return {
    authorization: Any.fromPartial({}),
    expiration: undefined,
    opt: 0,
    singleMsg: Any.fromPartial({}),
    messages: []
  };
}
export const Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  aminoType: "cosmos-sdk/Grant",
  is(o: any): o is Grant {
    return o && (o.$typeUrl === Grant.typeUrl || (GenericAuthorization.is(o.authorization) || DepositDeploymentAuthorization.is(o.authorization) || SendAuthorization.is(o.authorization) || Any.is(o.authorization)) && isSet(o.opt) && Any.is(o.singleMsg) && Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])));
  },
  isSDK(o: any): o is GrantSDKType {
    return o && (o.$typeUrl === Grant.typeUrl || (GenericAuthorization.isSDK(o.authorization) || DepositDeploymentAuthorization.isSDK(o.authorization) || SendAuthorization.isSDK(o.authorization) || Any.isSDK(o.authorization)) && isSet(o.opt) && Any.isSDK(o.single_msg) && Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])));
  },
  isAmino(o: any): o is GrantAmino {
    return o && (o.$typeUrl === Grant.typeUrl || (GenericAuthorization.isAmino(o.authorization) || DepositDeploymentAuthorization.isAmino(o.authorization) || SendAuthorization.isAmino(o.authorization) || Any.isAmino(o.authorization)) && isSet(o.opt) && Any.isAmino(o.single_msg) && Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])));
  },
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    if (message.opt !== 0) {
      writer.uint32(24).int32(message.opt);
    }
    if (message.singleMsg !== undefined) {
      Any.encode(message.singleMsg, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.opt = (reader.int32() as any);
          break;
        case 4:
          message.singleMsg = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grant {
    const obj = createBaseGrant();
    if (isSet(object.authorization)) obj.authorization = GlobalDecoderRegistry.fromJSON(object.authorization);
    if (isSet(object.expiration)) obj.expiration = new Date(object.expiration);
    if (isSet(object.opt)) obj.opt = voteOptionFromJSON(object.opt);
    if (isSet(object.singleMsg)) obj.singleMsg = Any.fromJSON(object.singleMsg);
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.authorization !== undefined && (obj.authorization = message.authorization ? GlobalDecoderRegistry.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    message.opt !== undefined && (obj.opt = voteOptionToJSON(message.opt));
    message.singleMsg !== undefined && (obj.singleMsg = message.singleMsg ? Any.toJSON(message.singleMsg) : undefined);
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromPartial(object.authorization);
    }
    message.expiration = object.expiration ?? undefined;
    message.opt = object.opt ?? 0;
    if (object.singleMsg !== undefined && object.singleMsg !== null) {
      message.singleMsg = Any.fromPartial(object.singleMsg);
    }
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GrantSDKType): Grant {
    return {
      authorization: object.authorization ? GlobalDecoderRegistry.fromSDK(object.authorization) : undefined,
      expiration: object.expiration ?? undefined,
      opt: isSet(object.opt) ? voteOptionFromJSON(object.opt) : -1,
      singleMsg: object.single_msg ? Any.fromSDK(object.single_msg) : undefined,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GrantSDKType {
    return {
      authorization: isSet(object.authorization) ? GlobalDecoderRegistry.fromSDKJSON(object.authorization) : undefined,
      expiration: isSet(object.expiration) ? new Date(object.expiration) : undefined,
      opt: isSet(object.opt) ? voteOptionFromJSON(object.opt) : -1,
      single_msg: isSet(object.single_msg) ? Any.fromSDKJSON(object.single_msg) : undefined,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Grant): GrantSDKType {
    const obj: any = {};
    message.authorization !== undefined && (obj.authorization = message.authorization ? GlobalDecoderRegistry.toSDK(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
    message.opt !== undefined && (obj.opt = voteOptionToJSON(message.opt));
    message.singleMsg !== undefined && (obj.single_msg = message.singleMsg ? Any.toSDK(message.singleMsg) : undefined);
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromAmino(object: GrantAmino): Grant {
    const message = createBaseGrant();
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromAminoMsg(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    if (object.opt !== undefined && object.opt !== null) {
      message.opt = voteOptionFromJSON(object.opt);
    }
    if (object.single_msg !== undefined && object.single_msg !== null) {
      message.singleMsg = Any.fromAmino(object.single_msg);
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.authorization = message.authorization ? GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    obj.opt = message.opt;
    obj.single_msg = message.singleMsg ? Any.toAmino(message.singleMsg) : undefined;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromAminoMsg(object: GrantAminoMsg): Grant {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message: Grant): GrantAminoMsg {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Grant.typeUrl, Grant);
GlobalDecoderRegistry.registerAminoProtoMapping(Grant.aminoType, Grant.typeUrl);
function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    granter: "",
    grantee: "",
    authorization: undefined,
    expiration: undefined
  };
}
export const GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  aminoType: "cosmos-sdk/GrantAuthorization",
  is(o: any): o is GrantAuthorization {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isSDK(o: any): o is GrantAuthorizationSDKType {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is GrantAuthorizationAmino {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: GrantAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 4:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantAuthorization {
    const obj = createBaseGrantAuthorization();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.authorization)) obj.authorization = GlobalDecoderRegistry.fromJSON(object.authorization);
    if (isSet(object.expiration)) obj.expiration = new Date(object.expiration);
    return obj;
  },
  toJSON(message: GrantAuthorization): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined && (obj.authorization = message.authorization ? GlobalDecoderRegistry.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromPartial(object.authorization);
    }
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromSDK(object: GrantAuthorizationSDKType): GrantAuthorization {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      authorization: object.authorization ? GlobalDecoderRegistry.fromSDK(object.authorization) : undefined,
      expiration: object.expiration ?? undefined
    };
  },
  fromSDKJSON(object: any): GrantAuthorizationSDKType {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      authorization: isSet(object.authorization) ? GlobalDecoderRegistry.fromSDKJSON(object.authorization) : undefined,
      expiration: isSet(object.expiration) ? new Date(object.expiration) : undefined
    };
  },
  toSDK(message: GrantAuthorization): GrantAuthorizationSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.authorization !== undefined && (obj.authorization = message.authorization ? GlobalDecoderRegistry.toSDK(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
    return obj;
  },
  fromAmino(object: GrantAuthorizationAmino): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromAminoMsg(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: GrantAuthorization): GrantAuthorizationAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.authorization = message.authorization ? GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization {
    return GrantAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/GrantAuthorization",
      value: GrantAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization {
    return GrantAuthorization.decode(message.value);
  },
  toProto(message: GrantAuthorization): Uint8Array {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantAuthorization.typeUrl, GrantAuthorization);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantAuthorization.aminoType, GrantAuthorization.typeUrl);
function createBaseGrantQueueItem(): GrantQueueItem {
  return {
    msgTypeUrls: []
  };
}
export const GrantQueueItem = {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
  aminoType: "cosmos-sdk/GrantQueueItem",
  is(o: any): o is GrantQueueItem {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isSDK(o: any): o is GrantQueueItemSDKType {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  isAmino(o: any): o is GrantQueueItemAmino {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: GrantQueueItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantQueueItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantQueueItem {
    const obj = createBaseGrantQueueItem();
    if (Array.isArray(object?.msgTypeUrls)) obj.msgTypeUrls = object.msgTypeUrls.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: GrantQueueItem): unknown {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msgTypeUrls = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GrantQueueItem>): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromSDK(object: GrantQueueItemSDKType): GrantQueueItem {
    return {
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): GrantQueueItemSDKType {
    return {
      msg_type_urls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: GrantQueueItem): GrantQueueItemSDKType {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAmino(object: GrantQueueItemAmino): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantQueueItem): GrantQueueItemAmino {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }
    return obj;
  },
  fromAminoMsg(object: GrantQueueItemAminoMsg): GrantQueueItem {
    return GrantQueueItem.fromAmino(object.value);
  },
  toAminoMsg(message: GrantQueueItem): GrantQueueItemAminoMsg {
    return {
      type: "cosmos-sdk/GrantQueueItem",
      value: GrantQueueItem.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantQueueItemProtoMsg): GrantQueueItem {
    return GrantQueueItem.decode(message.value);
  },
  toProto(message: GrantQueueItem): Uint8Array {
    return GrantQueueItem.encode(message).finish();
  },
  toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
      value: GrantQueueItem.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantQueueItem.typeUrl, GrantQueueItem);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantQueueItem.aminoType, GrantQueueItem.typeUrl);
function createBaseGrants(): Grants {
  return {
    authorization: []
  };
}
export const Grants = {
  typeUrl: "/cosmos.authz.v1beta1.Grants",
  aminoType: "cosmos-sdk/Grants",
  is(o: any): o is Grants {
    return o && (o.$typeUrl === Grants.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || GenericAuthorization.is(o.authorization[0]) || DepositDeploymentAuthorization.is(o.authorization[0]) || SendAuthorization.is(o.authorization[0]) || Any.is(o.authorization[0])));
  },
  isSDK(o: any): o is GrantsSDKType {
    return o && (o.$typeUrl === Grants.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || GenericAuthorization.isSDK(o.authorization[0]) || DepositDeploymentAuthorization.isSDK(o.authorization[0]) || SendAuthorization.isSDK(o.authorization[0]) || Any.isSDK(o.authorization[0])));
  },
  isAmino(o: any): o is GrantsAmino {
    return o && (o.$typeUrl === Grants.typeUrl || Array.isArray(o.authorization) && (!o.authorization.length || GenericAuthorization.isAmino(o.authorization[0]) || DepositDeploymentAuthorization.isAmino(o.authorization[0]) || SendAuthorization.isAmino(o.authorization[0]) || Any.isAmino(o.authorization[0])));
  },
  encode(message: Grants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.authorization) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grants {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grants {
    const obj = createBaseGrants();
    if (Array.isArray(object?.authorization)) obj.authorization = object.authorization.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    return obj;
  },
  toJSON(message: Grants): unknown {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.authorization = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Grants>): Grants {
    const message = createBaseGrants();
    message.authorization = object.authorization?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    return message;
  },
  fromSDK(object: GrantsSDKType): Grants {
    return {
      authorization: Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GlobalDecoderRegistry.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GrantsSDKType {
    return {
      authorization: Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GlobalDecoderRegistry.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Grants): GrantsSDKType {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GlobalDecoderRegistry.toSDK(e) : undefined);
    } else {
      obj.authorization = [];
    }
    return obj;
  },
  fromAmino(object: GrantsAmino): Grants {
    const message = createBaseGrants();
    message.authorization = object.authorization?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: Grants): GrantsAmino {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.authorization = [];
    }
    return obj;
  },
  fromAminoMsg(object: GrantsAminoMsg): Grants {
    return Grants.fromAmino(object.value);
  },
  toAminoMsg(message: Grants): GrantsAminoMsg {
    return {
      type: "cosmos-sdk/Grants",
      value: Grants.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantsProtoMsg): Grants {
    return Grants.decode(message.value);
  },
  toProto(message: Grants): Uint8Array {
    return Grants.encode(message).finish();
  },
  toProtoMsg(message: Grants): GrantsProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grants",
      value: Grants.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Grants.typeUrl, Grants);
GlobalDecoderRegistry.registerAminoProtoMapping(Grants.aminoType, Grants.typeUrl);