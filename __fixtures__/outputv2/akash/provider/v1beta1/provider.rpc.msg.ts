import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
export class Msg {
  static CreateProvider(request: MsgCreateProvider, initRequest?: fm.initReq): Promise<MsgCreateProviderResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateProvider(request: MsgUpdateProvider, initRequest?: fm.initReq): Promise<MsgUpdateProviderResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static DeleteProvider(request: MsgDeleteProvider, initRequest?: fm.initReq): Promise<MsgDeleteProviderResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}