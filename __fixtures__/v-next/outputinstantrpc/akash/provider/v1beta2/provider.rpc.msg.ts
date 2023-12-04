import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider(request: BroadcastTxReq<MsgCreateProvider>): Promise<DeliverTxResponse>;
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider(request: BroadcastTxReq<MsgUpdateProvider>): Promise<DeliverTxResponse>;
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider(request: BroadcastTxReq<MsgDeleteProvider>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider = async (request: BroadcastTxReq<MsgCreateProvider>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateProvider.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider = async (request: BroadcastTxReq<MsgUpdateProvider>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateProvider.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider = async (request: BroadcastTxReq<MsgDeleteProvider>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDeleteProvider.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};