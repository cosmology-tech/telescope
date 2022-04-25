import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgSetWithdrawAddressResponse, MsgFundCommunityPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const messages = {
  setWithdrawAddress(value: MsgSetWithdrawAddress) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.fromPartial(value)
    };
  },

  withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.fromPartial(value)
    };
  },

  withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.fromPartial(value)
    };
  },

  fundCommunityPool(value: MsgFundCommunityPool) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.fromPartial(value)
    };
  }

};