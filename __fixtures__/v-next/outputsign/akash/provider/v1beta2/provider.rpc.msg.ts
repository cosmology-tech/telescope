import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider = async (request: MsgCreateProvider): Promise<MsgCreateProviderResponse> => {
    const data = MsgCreateProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Msg", "CreateProvider", data);
    return promise.then(data => MsgCreateProviderResponse.decode(new BinaryReader(data)));
  };
  /* UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider = async (request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse> => {
    const data = MsgUpdateProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Msg", "UpdateProvider", data);
    return promise.then(data => MsgUpdateProviderResponse.decode(new BinaryReader(data)));
  };
  /* DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider = async (request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse> => {
    const data = MsgDeleteProvider.encode(request).finish();
    const promise = this.rpc.request("akash.provider.v1beta2.Msg", "DeleteProvider", data);
    return promise.then(data => MsgDeleteProviderResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};