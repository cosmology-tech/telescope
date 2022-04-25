import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId, valAddr }: MsgSuperfluidDelegate) => AminoMsgSuperfluidDelegate["value"];
        fromAmino: ({ sender, lockId, valAddr }: AminoMsgSuperfluidDelegate["value"]) => MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: string;
        toAmino: ({ sender, lockId }: MsgSuperfluidUndelegate) => AminoMsgSuperfluidUndelegate["value"];
        fromAmino: ({ sender, lockId }: AminoMsgSuperfluidUndelegate["value"]) => MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: string;
        toAmino: ({ sender, lockId }: MsgSuperfluidUnbondLock) => AminoMsgSuperfluidUnbondLock["value"];
        fromAmino: ({ sender, lockId }: AminoMsgSuperfluidUnbondLock["value"]) => MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: ({ sender, coins, valAddr }: MsgLockAndSuperfluidDelegate) => AminoMsgLockAndSuperfluidDelegate["value"];
        fromAmino: ({ sender, coins, valAddr }: AminoMsgLockAndSuperfluidDelegate["value"]) => MsgLockAndSuperfluidDelegate;
    };
};
