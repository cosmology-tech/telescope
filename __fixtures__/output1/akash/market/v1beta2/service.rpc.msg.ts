import { OrderID } from "./order";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import { BidID, MsgCreateBid, MsgCreateBidResponse, MsgCloseBid, MsgCloseBidResponse } from "./bid";
import { LeaseID, MsgWithdrawLease, MsgWithdrawLeaseResponse, MsgCreateLease, MsgCreateLeaseResponse, MsgCloseLease, MsgCloseLeaseResponse } from "./lease";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";

/** Msg defines the RPC service */
export interface Msg {
  createBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
  /*CreateBid defines a method to create a bid given proper inputs.*/

  closeBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
  /*CloseBid defines a method to close a bid given proper inputs.*/

  withdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
  /*WithdrawLease withdraws accrued funds from the lease payment*/

  createLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
  /*CreateLease creates a new lease*/

  closeLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
  /*CloseLease defines a method to close an order given proper inputs.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBid = this.createBid.bind(this);
    this.closeBid = this.closeBid.bind(this);
    this.withdrawLease = this.withdrawLease.bind(this);
    this.createLease = this.createLease.bind(this);
    this.closeLease = this.closeLease.bind(this);
  }

  createBid(request: MsgCreateBid): Promise<MsgCreateBidResponse> {
    const data = MsgCreateBid.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateBid", data);
    return promise.then(data => MsgCreateBidResponse.decode(new _m0.Reader(data)));
  }

  closeBid(request: MsgCloseBid): Promise<MsgCloseBidResponse> {
    const data = MsgCloseBid.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseBid", data);
    return promise.then(data => MsgCloseBidResponse.decode(new _m0.Reader(data)));
  }

  withdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse> {
    const data = MsgWithdrawLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "WithdrawLease", data);
    return promise.then(data => MsgWithdrawLeaseResponse.decode(new _m0.Reader(data)));
  }

  createLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse> {
    const data = MsgCreateLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateLease", data);
    return promise.then(data => MsgCreateLeaseResponse.decode(new _m0.Reader(data)));
  }

  closeLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse> {
    const data = MsgCloseLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseLease", data);
    return promise.then(data => MsgCloseLeaseResponse.decode(new _m0.Reader(data)));
  }

}