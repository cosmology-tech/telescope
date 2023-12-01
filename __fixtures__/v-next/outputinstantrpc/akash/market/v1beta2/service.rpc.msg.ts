import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  createBid(request: BroadcastTxReq<MsgCreateBid>): Promise<BroadcastTxRes<MsgCreateBidResponse>>;
  /** CloseBid defines a method to close a bid given proper inputs. */
  closeBid(request: BroadcastTxReq<MsgCloseBid>): Promise<BroadcastTxRes<MsgCloseBidResponse>>;
  /** WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease(request: BroadcastTxReq<MsgWithdrawLease>): Promise<BroadcastTxRes<MsgWithdrawLeaseResponse>>;
  /** CreateLease creates a new lease */
  createLease(request: BroadcastTxReq<MsgCreateLease>): Promise<BroadcastTxRes<MsgCreateLeaseResponse>>;
  /** CloseLease defines a method to close an order given proper inputs. */
  closeLease(request: BroadcastTxReq<MsgCloseLease>): Promise<BroadcastTxRes<MsgCloseLeaseResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateBid defines a method to create a bid given proper inputs. */
  createBid = async (request: BroadcastTxReq<MsgCreateBid>): Promise<BroadcastTxRes<MsgCreateBidResponse>> => {
    const data = [{
      typeUrl: MsgCreateBid.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateBidResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CloseBid defines a method to close a bid given proper inputs. */
  closeBid = async (request: BroadcastTxReq<MsgCloseBid>): Promise<BroadcastTxRes<MsgCloseBidResponse>> => {
    const data = [{
      typeUrl: MsgCloseBid.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCloseBidResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease = async (request: BroadcastTxReq<MsgWithdrawLease>): Promise<BroadcastTxRes<MsgWithdrawLeaseResponse>> => {
    const data = [{
      typeUrl: MsgWithdrawLease.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgWithdrawLeaseResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CreateLease creates a new lease */
  createLease = async (request: BroadcastTxReq<MsgCreateLease>): Promise<BroadcastTxRes<MsgCreateLeaseResponse>> => {
    const data = [{
      typeUrl: MsgCreateLease.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateLeaseResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* CloseLease defines a method to close an order given proper inputs. */
  closeLease = async (request: BroadcastTxReq<MsgCloseLease>): Promise<BroadcastTxRes<MsgCloseLeaseResponse>> => {
    const data = [{
      typeUrl: MsgCloseLease.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCloseLeaseResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}