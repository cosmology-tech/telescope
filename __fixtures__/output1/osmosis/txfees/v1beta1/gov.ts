import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.txfees.v1beta1";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
  title: string;
  description: string;
  feetoken: FeeToken;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalSDKType {
  title: string;
  description: string;
  feetoken: FeeTokenSDKType;
}
function createBaseUpdateFeeTokenProposal(): UpdateFeeTokenProposal {
  return {
    title: "",
    description: "",
    feetoken: FeeToken.fromPartial({})
  };
}
export const UpdateFeeTokenProposal = {
  encode(message: UpdateFeeTokenProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.feetoken !== undefined) {
      FeeToken.encode(message.feetoken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeeTokenProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFeeTokenProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.feetoken = FeeToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateFeeTokenProposal {
    const obj = createBaseUpdateFeeTokenProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.feetoken)) obj.feetoken = FeeToken.fromJSON(object.feetoken);
    return obj;
  },
  toJSON(message: UpdateFeeTokenProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.feetoken !== undefined && (obj.feetoken = message.feetoken ? FeeToken.toJSON(message.feetoken) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateFeeTokenProposal>): UpdateFeeTokenProposal {
    const message = createBaseUpdateFeeTokenProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.feetoken !== undefined && object.feetoken !== null) {
      message.feetoken = FeeToken.fromPartial(object.feetoken);
    }
    return message;
  },
  fromSDK(object: UpdateFeeTokenProposalSDKType): UpdateFeeTokenProposal {
    return {
      title: object?.title,
      description: object?.description,
      feetoken: object.feetoken ? FeeToken.fromSDK(object.feetoken) : undefined
    };
  },
  toSDK(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    message.feetoken !== undefined && (obj.feetoken = message.feetoken ? FeeToken.toSDK(message.feetoken) : undefined);
    return obj;
  }
};