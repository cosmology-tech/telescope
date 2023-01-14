import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
export class Msg {
  static CreateProvider(): Promise<MsgCreateProviderResponse> {}

  static UpdateProvider(): Promise<MsgUpdateProviderResponse> {}

  static DeleteProvider(): Promise<MsgDeleteProviderResponse> {}

}