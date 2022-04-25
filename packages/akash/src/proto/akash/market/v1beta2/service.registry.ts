import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { Msg, Rpc } from "./service";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBidResponse, MsgCloseBidResponse, MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLeaseResponse, MsgCreateLeaseResponse, MsgCloseLeaseResponse, MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.market.v1beta2.MsgCreateBid", MsgCreateBid], ["/akash.market.v1beta2.MsgCloseBid", MsgCloseBid], ["/akash.market.v1beta2.MsgWithdrawLease", MsgWithdrawLease], ["/akash.market.v1beta2.MsgCreateLease", MsgCreateLease], ["/akash.market.v1beta2.MsgCloseLease", MsgCloseLease]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};