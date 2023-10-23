import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgClawback, MsgClawbackSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/evmos.vesting.v1.MsgCreateClawbackVestingAccount", MsgCreateClawbackVestingAccount], ["/evmos.vesting.v1.MsgClawback", MsgClawback]];