import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";

/** Msg defines the RPC service */
export interface Msg {
  signProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponseSDKType>;
  /*SignProviderAttributes defines a method that signs provider attributes*/

  deleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponseSDKType>;
  /*DeleteProviderAttributes defines a method that deletes provider attributes*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  signProviderAttributes = async (request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponseSDKType> => {
    const data = MsgSignProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Msg", "SignProviderAttributes", data);
    return promise.then(data => MsgSignProviderAttributesResponse.decode(new _m0.Reader(data)));
  };
  deleteProviderAttributes = async (request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponseSDKType> => {
    const data = MsgDeleteProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Msg", "DeleteProviderAttributes", data);
    return promise.then(data => MsgDeleteProviderAttributesResponse.decode(new _m0.Reader(data)));
  };
}