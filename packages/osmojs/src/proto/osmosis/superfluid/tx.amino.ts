import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate } from "./tx";
export interface AminoMsgSuperfluidDelegate extends AminoMsg {
  type: "osmosis/superfluid/superfluid-delegate";
  value: {
    sender: string;
    lockId: string;
    valAddr: string;
  };
}
export interface AminoMsgSuperfluidUndelegate extends AminoMsg {
  type: "osmosis/superfluid/superfluid-undelegate";
  value: {
    sender: string;
    lockId: string;
  };
}
export interface AminoMsgSuperfluidUnbondLock extends AminoMsg {
  type: "osmosis/superfluid/superfluid-unbond-lock";
  value: {
    sender: string;
    lockId: string;
  };
}
export interface AminoMsgLockAndSuperfluidDelegate extends AminoMsg {
  type: "osmosis/superfluid/lock-and-superfluid-delegate";
  value: {
    sender: string;
    coins: {
      denom: string;
      amount: string;
    }[];
    valAddr: string;
  };
}
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid/superfluid-delegate",
    toAmino: ({
      sender,
      lockId,
      valAddr
    }: MsgSuperfluidDelegate): AminoMsgSuperfluidDelegate["value"] => {
      return {
        sender,
        lockId: lockId.toString(),
        valAddr
      };
    },
    fromAmino: ({
      sender,
      lockId,
      valAddr
    }: AminoMsgSuperfluidDelegate["value"]): MsgSuperfluidDelegate => {
      return {
        sender,
        lockId: Long.fromString(lockId),
        valAddr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid/superfluid-undelegate",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUndelegate): AminoMsgSuperfluidUndelegate["value"] => {
      return {
        sender,
        lockId: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lockId
    }: AminoMsgSuperfluidUndelegate["value"]): MsgSuperfluidUndelegate => {
      return {
        sender,
        lockId: Long.fromString(lockId)
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid/superfluid-unbond-lock",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUnbondLock): AminoMsgSuperfluidUnbondLock["value"] => {
      return {
        sender,
        lockId: lockId.toString()
      };
    },
    fromAmino: ({
      sender,
      lockId
    }: AminoMsgSuperfluidUnbondLock["value"]): MsgSuperfluidUnbondLock => {
      return {
        sender,
        lockId: Long.fromString(lockId)
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/superfluid/lock-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      valAddr
    }: MsgLockAndSuperfluidDelegate): AminoMsgLockAndSuperfluidDelegate["value"] => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr
      };
    },
    fromAmino: ({
      sender,
      coins,
      valAddr
    }: AminoMsgLockAndSuperfluidDelegate["value"]): MsgLockAndSuperfluidDelegate => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr
      };
    }
  }
};