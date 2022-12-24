import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodAmino, PeriodAminoType, PeriodSDKType } from "./vesting";
import { MsgCreateVestingAccount, MsgCreateVestingAccountAmino, MsgCreateVestingAccountAminoType, MsgCreateVestingAccountSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountAmino, MsgCreatePermanentLockedAccountAminoType, MsgCreatePermanentLockedAccountSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountAmino, MsgCreatePeriodicVestingAccountAminoType, MsgCreatePeriodicVestingAccountSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: MsgCreateVestingAccount.toAmino,
    fromAmino: MsgCreateVestingAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
    aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccount",
    toAmino: MsgCreatePermanentLockedAccount.toAmino,
    fromAmino: MsgCreatePermanentLockedAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: MsgCreatePeriodicVestingAccount.toAmino,
    fromAmino: MsgCreatePeriodicVestingAccount.fromAmino
  }
};