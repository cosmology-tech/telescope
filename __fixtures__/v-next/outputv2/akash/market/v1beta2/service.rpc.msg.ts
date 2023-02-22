import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";

/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  CreateBid(request: DeepPartial<MsgCreateBid>, metadata?: grpc.Metadata): Promise<MsgCreateBidResponse>;

  /** CloseBid defines a method to close a bid given proper inputs. */
  CloseBid(request: DeepPartial<MsgCloseBid>, metadata?: grpc.Metadata): Promise<MsgCloseBidResponse>;

  /** WithdrawLease withdraws accrued funds from the lease payment */
  WithdrawLease(request: DeepPartial<MsgWithdrawLease>, metadata?: grpc.Metadata): Promise<MsgWithdrawLeaseResponse>;

  /** CreateLease creates a new lease */
  CreateLease(request: DeepPartial<MsgCreateLease>, metadata?: grpc.Metadata): Promise<MsgCreateLeaseResponse>;

  /** CloseLease defines a method to close an order given proper inputs. */
  CloseLease(request: DeepPartial<MsgCloseLease>, metadata?: grpc.Metadata): Promise<MsgCloseLeaseResponse>;
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

  createBid(request: DeepPartial<MsgCreateBid>, metadata?: grpc.Metadata): Promise<MsgCreateBidResponse> {
    return this.rpc.unary(MsgCreateBid, MsgCreateBid.fromPartial(request), metadata);
  }

  closeBid(request: DeepPartial<MsgCloseBid>, metadata?: grpc.Metadata): Promise<MsgCloseBidResponse> {
    return this.rpc.unary(MsgCloseBid, MsgCloseBid.fromPartial(request), metadata);
  }

  withdrawLease(request: DeepPartial<MsgWithdrawLease>, metadata?: grpc.Metadata): Promise<MsgWithdrawLeaseResponse> {
    return this.rpc.unary(MsgWithdrawLease, MsgWithdrawLease.fromPartial(request), metadata);
  }

  createLease(request: DeepPartial<MsgCreateLease>, metadata?: grpc.Metadata): Promise<MsgCreateLeaseResponse> {
    return this.rpc.unary(MsgCreateLease, MsgCreateLease.fromPartial(request), metadata);
  }

  closeLease(request: DeepPartial<MsgCloseLease>, metadata?: grpc.Metadata): Promise<MsgCloseLeaseResponse> {
    return this.rpc.unary(MsgCloseLease, MsgCloseLease.fromPartial(request), metadata);
  }

}