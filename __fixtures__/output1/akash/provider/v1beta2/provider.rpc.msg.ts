import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";

/** Msg defines the RPC service */
export interface Msg {
  createProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponseSDKType>;
  /*CreateProvider defines a method that creates a provider given the proper inputs*/

  updateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponseSDKType>;
  /*UpdateProvider defines a method that updates a provider given the proper inputs*/

  deleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponseSDKType>;
  /*DeleteProvider defines a method that deletes a provider given the proper inputs*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createProvider = this.createProvider.bind(this);
    this.updateProvider = this.updateProvider.bind(this);
    this.deleteProvider = this.deleteProvider.bind(this);
  }

  createProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponseSDKType> {
    const data = MsgCreateProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Msg", "CreateProvider", data);
    return promise.then(data => MsgCreateProviderResponse.decode(new _m0.Reader(data)));
  }

  updateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponseSDKType> {
    const data = MsgUpdateProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Msg", "UpdateProvider", data);
    return promise.then(data => MsgUpdateProviderResponse.decode(new _m0.Reader(data)));
  }

  deleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponseSDKType> {
    const data = MsgDeleteProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Msg", "DeleteProvider", data);
    return promise.then(data => MsgDeleteProviderResponse.decode(new _m0.Reader(data)));
  }

}