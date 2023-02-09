import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import * as fm from "../../../grpc-gateway";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export class Msg {
  static SignProviderAttributes(request: MsgSignProviderAttributes, initRequest?: fm.InitReq): Promise<MsgSignProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta1/SignProviderAttributes`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static DeleteProviderAttributes(request: MsgDeleteProviderAttributes, initRequest?: fm.InitReq): Promise<MsgDeleteProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta1/DeleteProviderAttributes`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}