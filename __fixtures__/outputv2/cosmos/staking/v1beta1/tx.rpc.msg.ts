import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
export class Msg {
  static CreateValidator(request: MsgCreateValidator, initRequest?: fm.initReq): Promise<MsgCreateValidatorResponse> {
    return fm.fetchReq(`/CreateValidator/CreateValidator`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static EditValidator(request: MsgEditValidator, initRequest?: fm.initReq): Promise<MsgEditValidatorResponse> {
    return fm.fetchReq(`/EditValidator/EditValidator`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Delegate(request: MsgDelegate, initRequest?: fm.initReq): Promise<MsgDelegateResponse> {
    return fm.fetchReq(`/Delegate/Delegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static BeginRedelegate(request: MsgBeginRedelegate, initRequest?: fm.initReq): Promise<MsgBeginRedelegateResponse> {
    return fm.fetchReq(`/BeginRedelegate/BeginRedelegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Undelegate(request: MsgUndelegate, initRequest?: fm.initReq): Promise<MsgUndelegateResponse> {
    return fm.fetchReq(`/Undelegate/Undelegate`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}