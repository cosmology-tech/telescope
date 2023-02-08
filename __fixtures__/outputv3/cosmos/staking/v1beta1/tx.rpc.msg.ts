import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as fm from "../../../grpc-gateway";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
export class Msg {
  static CreateValidator(request: MsgCreateValidator, initRequest?: fm.InitReq): Promise<MsgCreateValidatorResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/CreateValidator`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static EditValidator(request: MsgEditValidator, initRequest?: fm.InitReq): Promise<MsgEditValidatorResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/EditValidator`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Delegate(request: MsgDelegate, initRequest?: fm.InitReq): Promise<MsgDelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/Delegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static BeginRedelegate(request: MsgBeginRedelegate, initRequest?: fm.InitReq): Promise<MsgBeginRedelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/BeginRedelegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Undelegate(request: MsgUndelegate, initRequest?: fm.InitReq): Promise<MsgUndelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/Undelegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}