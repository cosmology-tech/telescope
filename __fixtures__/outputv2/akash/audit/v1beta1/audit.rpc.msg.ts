import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import * as fm from "../../../grpc-gateway";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export class Msg {
  static SignProviderAttributes(request: MsgSignProviderAttributes, initRequest?: fm.InitReq): Promise<MsgSignProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta1/SignProviderAttributes`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static DeleteProviderAttributes(request: MsgDeleteProviderAttributes, initRequest?: fm.InitReq): Promise<MsgDeleteProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta1/DeleteProviderAttributes`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}