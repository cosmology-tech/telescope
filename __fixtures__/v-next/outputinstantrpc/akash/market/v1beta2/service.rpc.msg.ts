import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  createBid(request: BroadcastTxReq<MsgCreateBid>): Promise<DeliverTxResponse>;
  /** CloseBid defines a method to close a bid given proper inputs. */
  closeBid(request: BroadcastTxReq<MsgCloseBid>): Promise<DeliverTxResponse>;
  /** WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease(request: BroadcastTxReq<MsgWithdrawLease>): Promise<DeliverTxResponse>;
  /** CreateLease creates a new lease */
  createLease(request: BroadcastTxReq<MsgCreateLease>): Promise<DeliverTxResponse>;
  /** CloseLease defines a method to close an order given proper inputs. */
  closeLease(request: BroadcastTxReq<MsgCloseLease>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateBid defines a method to create a bid given proper inputs. */
  createBid = async (request: BroadcastTxReq<MsgCreateBid>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateBid.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CloseBid defines a method to close a bid given proper inputs. */
  closeBid = async (request: BroadcastTxReq<MsgCloseBid>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseBid.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease = async (request: BroadcastTxReq<MsgWithdrawLease>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawLease.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CreateLease creates a new lease */
  createLease = async (request: BroadcastTxReq<MsgCreateLease>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateLease.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* CloseLease defines a method to close an order given proper inputs. */
  closeLease = async (request: BroadcastTxReq<MsgCloseLease>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseLease.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};