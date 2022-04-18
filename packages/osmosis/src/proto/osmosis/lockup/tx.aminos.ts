import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "../../osmosis/lockup/lock";
export interface AminoMsgLockTokens extends AminoMsg {
  type: "osmosis/lockup/lock-tokens";
  value: {
    owner: string;
    duration: string;
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgBeginUnlockingAll extends AminoMsg {
  type: "osmosis/lockup/begin-unlocking-all";
  value: {
    owner: string;
  };
}
export interface AminoMsgBeginUnlocking extends AminoMsg {
  type: "osmosis/lockup/begin-unlocking";
  value: {
    owner: string;
    id: string;
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.lockup.MsgLockTokens": {
    aminoType: "osmosis/lockup/lock-tokens",
    toAmino: ({
      owner,
      duration,
      coins
    }: MsgLockTokens): AminoMsgLockTokens["value"] => {
      return {
        owner,
        duration,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      duration,
      coins
    }: AminoMsgLockTokens["value"]): MsgLockTokens => {
      return {
        owner,
        duration,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlockingAll": {
    aminoType: "osmosis/lockup/begin-unlocking-all",
    toAmino: ({
      owner
    }: MsgBeginUnlockingAll): AminoMsgBeginUnlockingAll["value"] => {
      return {
        owner
      };
    },
    fromAmino: ({
      owner
    }: AminoMsgBeginUnlockingAll["value"]): MsgBeginUnlockingAll => {
      return {
        owner
      };
    }
  },
  "/osmosis.lockup.MsgBeginUnlocking": {
    aminoType: "osmosis/lockup/begin-unlocking",
    toAmino: ({
      owner,
      ID,
      coins
    }: MsgBeginUnlocking): AminoMsgBeginUnlocking["value"] => {
      return {
        owner,
        id: ID,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      id,
      coins
    }: AminoMsgBeginUnlocking["value"]): MsgBeginUnlocking => {
      return {
        owner,
        ID: id,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};