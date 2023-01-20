import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import * as fm from "../../../grpc-gateway";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
export class Msg {
  static CreateProvider(request: MsgCreateProvider, initRequest?: fm.InitReq): Promise<MsgCreateProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta2/CreateProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateProvider(request: MsgUpdateProvider, initRequest?: fm.InitReq): Promise<MsgUpdateProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta2/UpdateProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static DeleteProvider(request: MsgDeleteProvider, initRequest?: fm.InitReq): Promise<MsgDeleteProviderResponse> {
    return fm.fetchReq(`/akash.provider.v1beta2/DeleteProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}