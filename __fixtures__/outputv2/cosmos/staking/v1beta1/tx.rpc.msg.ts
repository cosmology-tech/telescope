import { Description, DescriptionSDKType, CommissionRates, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateValidator, MsgCreateValidatorSDKType, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorSDKType, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateSDKType, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateSDKType, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateSDKType, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
export class Msg {
  static CreateValidator(request: MsgCreateValidator, initRequest?: fm.initReq): Promise<MsgCreateValidatorResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1.Msg/CreateValidator`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static EditValidator(request: MsgEditValidator, initRequest?: fm.initReq): Promise<MsgEditValidatorResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1.Msg/EditValidator`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Delegate(request: MsgDelegate, initRequest?: fm.initReq): Promise<MsgDelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1.Msg/Delegate`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static BeginRedelegate(request: MsgBeginRedelegate, initRequest?: fm.initReq): Promise<MsgBeginRedelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1.Msg/BeginRedelegate`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Undelegate(request: MsgUndelegate, initRequest?: fm.initReq): Promise<MsgUndelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1.Msg/Undelegate`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}