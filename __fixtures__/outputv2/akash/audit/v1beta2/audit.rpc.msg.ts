import { Attribute, AttributeAmino, AttributeSDKType } from "../../base/v1beta2/attribute";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSignProviderAttributes, MsgSignProviderAttributesAmino, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseAmino, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesAmino, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseAmino, MsgDeleteProviderAttributesResponseSDKType } from "./audit";

/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  signProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;

  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  deleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.signProviderAttributes = this.signProviderAttributes.bind(this);
    this.deleteProviderAttributes = this.deleteProviderAttributes.bind(this);
  }

  signProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse> {
    const data = MsgSignProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Msg", "SignProviderAttributes", data);
    return promise.then(data => MsgSignProviderAttributesResponse.decode(new _m0.Reader(data)));
  }

  deleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse> {
    const data = MsgDeleteProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Msg", "DeleteProviderAttributes", data);
    return promise.then(data => MsgDeleteProviderAttributesResponse.decode(new _m0.Reader(data)));
  }

}