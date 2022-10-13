import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSignProviderAttributes, MsgSignProviderAttributesResponse, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesResponse } from "./audit";
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
  }
  /* SignProviderAttributes defines a method that signs provider attributes */


  signProviderAttributes = async (request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse> => {
    const data = MsgSignProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta1.Msg", "SignProviderAttributes", data);
    return promise.then(data => MsgSignProviderAttributesResponse.decode(new _m0.Reader(data)));
  };
  /* DeleteProviderAttributes defines a method that deletes provider attributes */

  deleteProviderAttributes = async (request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse> => {
    const data = MsgDeleteProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta1.Msg", "DeleteProviderAttributes", data);
    return promise.then(data => MsgDeleteProviderAttributesResponse.decode(new _m0.Reader(data)));
  };
}