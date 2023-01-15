import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { fetchReq } from "../../../grpc-gateway";
export class Msg {
  static CreateBid(request: MsgCreateBid, initRequest?: fm.initReq): Promise<MsgCreateBidResponse> {
    return fm.fetchReq(`/akash.market.v1beta2.Msg/CreateBid`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CloseBid(request: MsgCloseBid, initRequest?: fm.initReq): Promise<MsgCloseBidResponse> {
    return fm.fetchReq(`/akash.market.v1beta2.Msg/CloseBid`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static WithdrawLease(request: MsgWithdrawLease, initRequest?: fm.initReq): Promise<MsgWithdrawLeaseResponse> {
    return fm.fetchReq(`/akash.market.v1beta2.Msg/WithdrawLease`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CreateLease(request: MsgCreateLease, initRequest?: fm.initReq): Promise<MsgCreateLeaseResponse> {
    return fm.fetchReq(`/akash.market.v1beta2.Msg/CreateLease`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CloseLease(request: MsgCloseLease, initRequest?: fm.initReq): Promise<MsgCloseLeaseResponse> {
    return fm.fetchReq(`/akash.market.v1beta2.Msg/CloseLease`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}