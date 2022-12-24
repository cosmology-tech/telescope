import { Timestamp, TimestampAmino, TimestampAminoType, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodAmino, PeriodAminoType, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountAmino, MsgCreateClawbackVestingAccountAminoType, MsgCreateClawbackVestingAccountSDKType, MsgClawback, MsgClawbackAmino, MsgClawbackAminoType, MsgClawbackSDKType } from "./tx";
export const AminoConverter = {
  "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
    aminoType: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
    toAmino: MsgCreateClawbackVestingAccount.toAmino,
    fromAmino: MsgCreateClawbackVestingAccount.fromAmino
  },
  "/evmos.vesting.v1.MsgClawback": {
    aminoType: "/evmos.vesting.v1.MsgClawback",
    toAmino: MsgClawback.toAmino,
    fromAmino: MsgClawback.fromAmino
  }
};