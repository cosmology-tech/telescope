import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBidResponse, MsgCloseBidResponse, MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLeaseResponse, MsgCreateLeaseResponse, MsgCloseLeaseResponse, MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export const toJSON = {
  createBid(value: MsgCreateBid) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateBid",
      value: MsgCreateBid.toJSON(value)
    };
  },

  closeBid(value: MsgCloseBid) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseBid",
      value: MsgCloseBid.toJSON(value)
    };
  },

  withdrawLease(value: MsgWithdrawLease) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
      value: MsgWithdrawLease.toJSON(value)
    };
  },

  createLease(value: MsgCreateLease) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateLease",
      value: MsgCreateLease.toJSON(value)
    };
  },

  closeLease(value: MsgCloseLease) {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseLease",
      value: MsgCloseLease.toJSON(value)
    };
  }

};