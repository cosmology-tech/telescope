import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgSetWithdrawAddressResponse, MsgFundCommunityPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": MsgSetWithdrawAddress,
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": MsgWithdrawDelegatorReward,
  "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": MsgWithdrawValidatorCommission,
  "/cosmos.distribution.v1beta1.MsgFundCommunityPool": MsgFundCommunityPool
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};