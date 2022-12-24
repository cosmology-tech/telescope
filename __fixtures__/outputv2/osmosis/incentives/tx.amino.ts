//@ts-nocheck
import { QueryCondition, QueryConditionAmino, QueryConditionAminoType, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampAminoType, TimestampSDKType } from "../../google/protobuf/timestamp";
import { MsgCreateGauge, MsgCreateGaugeAmino, MsgCreateGaugeAminoType, MsgCreateGaugeSDKType, MsgAddToGauge, MsgAddToGaugeAmino, MsgAddToGaugeAminoType, MsgAddToGaugeSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.incentives.MsgCreateGauge": {
    aminoType: "osmosis/incentives/create-gauge",
    toAmino: MsgCreateGauge.toAmino,
    fromAmino: MsgCreateGauge.fromAmino
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: MsgAddToGauge.toAmino,
    fromAmino: MsgAddToGauge.fromAmino
  }
};