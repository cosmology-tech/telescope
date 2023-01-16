import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { fetchReq } from "../../../grpc-gateway";
export class Msg {
  static CreateBid(request: MsgCreateBid, initRequest?: fm.initReq): Promise<MsgCreateBidResponse> {
    return fm.fetchReq(`/CreateBid/CreateBid`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CloseBid(request: MsgCloseBid, initRequest?: fm.initReq): Promise<MsgCloseBidResponse> {
    return fm.fetchReq(`/CloseBid/CloseBid`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static WithdrawLease(request: MsgWithdrawLease, initRequest?: fm.initReq): Promise<MsgWithdrawLeaseResponse> {
    return fm.fetchReq(`/WithdrawLease/WithdrawLease`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CreateLease(request: MsgCreateLease, initRequest?: fm.initReq): Promise<MsgCreateLeaseResponse> {
    return fm.fetchReq(`/CreateLease/CreateLease`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static CloseLease(request: MsgCloseLease, initRequest?: fm.initReq): Promise<MsgCloseLeaseResponse> {
    return fm.fetchReq(`/CloseLease/CloseLease`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}