import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export class Msg {
  static SignProviderAttributes(request: MsgSignProviderAttributes, initRequest?: fm.initReq): Promise<MsgSignProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta2.Msg/SignProviderAttributes`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static DeleteProviderAttributes(request: MsgDeleteProviderAttributes, initRequest?: fm.initReq): Promise<MsgDeleteProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta2.Msg/DeleteProviderAttributes`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}