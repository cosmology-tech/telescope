//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.claim.v1beta1";
export enum Action {
  ActionAddLiquidity = 0,
  ActionSwap = 1,
  ActionVote = 2,
  ActionDelegateStake = 3,
  UNRECOGNIZED = -1,
}
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionAddLiquidity":
      return Action.ActionAddLiquidity;

    case 1:
    case "ActionSwap":
      return Action.ActionSwap;

    case 2:
    case "ActionVote":
      return Action.ActionVote;

    case 3:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionAddLiquidity:
      return "ActionAddLiquidity";

    case Action.ActionSwap:
      return "ActionSwap";

    case Action.ActionVote:
      return "ActionVote";

    case Action.ActionDelegateStake:
      return "ActionDelegateStake";

    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** address of claim user */
  address: string;

  /** total initial claimable amount for the user */
  initialClaimableAmount: Coin[];

  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}

function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    initialClaimableAmount: [],
    actionCompleted: []
  };
}

export const ClaimRecord = {
  encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.initialClaimableAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    writer.uint32(26).fork();

    for (const v of message.actionCompleted) {
      writer.bool(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.actionCompleted.push(reader.bool());
            }
          } else {
            message.actionCompleted.push(reader.bool());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClaimRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      initialClaimableAmount: Array.isArray(object?.initialClaimableAmount) ? object.initialClaimableAmount.map((e: any) => Coin.fromJSON(e)) : [],
      actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e: any) => Boolean(e)) : []
    };
  },

  toJSON(message: ClaimRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.initialClaimableAmount) {
      obj.initialClaimableAmount = message.initialClaimableAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialClaimableAmount = [];
    }

    if (message.actionCompleted) {
      obj.actionCompleted = message.actionCompleted.map(e => e);
    } else {
      obj.actionCompleted = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.actionCompleted = object.actionCompleted?.map(e => e) || [];
    return message;
  }

};