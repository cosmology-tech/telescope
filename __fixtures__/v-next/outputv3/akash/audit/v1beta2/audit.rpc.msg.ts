import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import * as fm from "../../../grpc-gateway";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export class Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  static SignProviderAttributes(request: MsgSignProviderAttributes, initRequest?: fm.InitReq): Promise<MsgSignProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta2/SignProviderAttributes`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  static DeleteProviderAttributes(request: MsgDeleteProviderAttributes, initRequest?: fm.InitReq): Promise<MsgDeleteProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta2/DeleteProviderAttributes`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}