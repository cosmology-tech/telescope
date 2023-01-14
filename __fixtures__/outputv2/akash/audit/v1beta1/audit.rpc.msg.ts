import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
export class Msg {
  static SignProviderAttributes(): Promise<MsgSignProviderAttributesResponse> {}

  static DeleteProviderAttributes(): Promise<MsgDeleteProviderAttributesResponse> {}

}