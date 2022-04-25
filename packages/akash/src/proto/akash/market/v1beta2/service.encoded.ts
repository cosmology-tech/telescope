import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBidResponse, MsgCloseBidResponse, MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLeaseResponse, MsgCreateLeaseResponse, MsgCloseLeaseResponse, MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
export const encoded = {
  createBid(value: MsgCreateBid) {
    return {
      type_url: "/akash.market.v1beta2.MsgCreateBid",
      value: MsgCreateBid.encode(value).finish()
    };
  },

  closeBid(value: MsgCloseBid) {
    return {
      type_url: "/akash.market.v1beta2.MsgCloseBid",
      value: MsgCloseBid.encode(value).finish()
    };
  },

  withdrawLease(value: MsgWithdrawLease) {
    return {
      type_url: "/akash.market.v1beta2.MsgWithdrawLease",
      value: MsgWithdrawLease.encode(value).finish()
    };
  },

  createLease(value: MsgCreateLease) {
    return {
      type_url: "/akash.market.v1beta2.MsgCreateLease",
      value: MsgCreateLease.encode(value).finish()
    };
  },

  closeLease(value: MsgCloseLease) {
    return {
      type_url: "/akash.market.v1beta2.MsgCloseLease",
      value: MsgCloseLease.encode(value).finish()
    };
  }

};