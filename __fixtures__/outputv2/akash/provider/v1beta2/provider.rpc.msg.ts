import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
export class Msg {
  static CreateProvider(request: MsgCreateProvider, initRequest?: fm.initReq): Promise<MsgCreateProviderResponse> {
    return fm.fetchReq(`/CreateProvider/CreateProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static UpdateProvider(request: MsgUpdateProvider, initRequest?: fm.initReq): Promise<MsgUpdateProviderResponse> {
    return fm.fetchReq(`/UpdateProvider/UpdateProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static DeleteProvider(request: MsgDeleteProvider, initRequest?: fm.initReq): Promise<MsgDeleteProviderResponse> {
    return fm.fetchReq(`/DeleteProvider/DeleteProvider`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}