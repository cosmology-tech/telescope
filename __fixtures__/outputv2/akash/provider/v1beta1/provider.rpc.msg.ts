import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import * as fm from "../../../grpc-gateway";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
export class Msg {
  static CreateProvider(request: MsgCreateProvider, initRequest?: fm.InitReq): Promise<MsgCreateProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta1/CreateProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateProvider(request: MsgUpdateProvider, initRequest?: fm.InitReq): Promise<MsgUpdateProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta1/UpdateProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static DeleteProvider(request: MsgDeleteProvider, initRequest?: fm.InitReq): Promise<MsgDeleteProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta1/DeleteProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}