import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  createBid(signerAddress: string, message: MsgCreateBid, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** CloseBid defines a method to close a bid given proper inputs. */
  closeBid(signerAddress: string, message: MsgCloseBid, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease(signerAddress: string, message: MsgWithdrawLease, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** CreateLease creates a new lease */
  createLease(signerAddress: string, message: MsgCreateLease, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** CloseLease defines a method to close an order given proper inputs. */
  closeLease(signerAddress: string, message: MsgCloseLease, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateBid defines a method to create a bid given proper inputs. */
  createBid = async (signerAddress: string, message: MsgCreateBid, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateBid.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CloseBid defines a method to close a bid given proper inputs. */
  closeBid = async (signerAddress: string, message: MsgCloseBid, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseBid.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease = async (signerAddress: string, message: MsgWithdrawLease, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgWithdrawLease.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CreateLease creates a new lease */
  createLease = async (signerAddress: string, message: MsgCreateLease, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateLease.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* CloseLease defines a method to close an order given proper inputs. */
  closeLease = async (signerAddress: string, message: MsgCloseLease, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCloseLease.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};