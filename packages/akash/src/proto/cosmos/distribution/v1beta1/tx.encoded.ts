import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgSetWithdrawAddressResponse, MsgFundCommunityPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const encoded = {
  setWithdrawAddress(value: MsgSetWithdrawAddress) {
    return {
      type_url: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(value).finish()
    };
  },

  withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
    return {
      type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(value).finish()
    };
  },

  withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
    return {
      type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.encode(value).finish()
    };
  },

  fundCommunityPool(value: MsgFundCommunityPool) {
    return {
      type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.encode(value).finish()
    };
  }

};