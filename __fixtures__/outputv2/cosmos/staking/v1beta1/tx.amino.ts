import { Description, DescriptionAmino, DescriptionAminoType, DescriptionSDKType, CommissionRates, CommissionRatesAmino, CommissionRatesAminoType, CommissionRatesSDKType } from "./staking";
import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampAminoType, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { MsgCreateValidator, MsgCreateValidatorAmino, MsgCreateValidatorAminoType, MsgCreateValidatorSDKType, MsgEditValidator, MsgEditValidatorAmino, MsgEditValidatorAminoType, MsgEditValidatorSDKType, MsgDelegate, MsgDelegateAmino, MsgDelegateAminoType, MsgDelegateSDKType, MsgBeginRedelegate, MsgBeginRedelegateAmino, MsgBeginRedelegateAminoType, MsgBeginRedelegateSDKType, MsgUndelegate, MsgUndelegateAmino, MsgUndelegateAminoType, MsgUndelegateSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.staking.v1beta1.MsgCreateValidator": {
    aminoType: "cosmos-sdk/MsgCreateValidator",
    toAmino: MsgCreateValidator.toAmino,
    fromAmino: MsgCreateValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgEditValidator": {
    aminoType: "cosmos-sdk/MsgEditValidator",
    toAmino: MsgEditValidator.toAmino,
    fromAmino: MsgEditValidator.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgDelegate": {
    aminoType: "cosmos-sdk/MsgDelegate",
    toAmino: MsgDelegate.toAmino,
    fromAmino: MsgDelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    toAmino: MsgBeginRedelegate.toAmino,
    fromAmino: MsgBeginRedelegate.fromAmino
  },
  "/cosmos.staking.v1beta1.MsgUndelegate": {
    aminoType: "cosmos-sdk/MsgUndelegate",
    toAmino: MsgUndelegate.toAmino,
    fromAmino: MsgUndelegate.fromAmino
  }
};