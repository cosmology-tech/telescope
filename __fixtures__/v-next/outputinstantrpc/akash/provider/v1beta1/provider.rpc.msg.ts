import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider(request: BroadcastTxReq<MsgCreateProvider>): Promise<BroadcastTxRes<MsgCreateProviderResponse>>;
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider(request: BroadcastTxReq<MsgUpdateProvider>): Promise<BroadcastTxRes<MsgUpdateProviderResponse>>;
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider(request: BroadcastTxReq<MsgDeleteProvider>): Promise<BroadcastTxRes<MsgDeleteProviderResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider = async (request: BroadcastTxReq<MsgCreateProvider>): Promise<BroadcastTxRes<MsgCreateProviderResponse>> => {
    const data = [{
      typeUrl: MsgCreateProvider.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateProviderResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider = async (request: BroadcastTxReq<MsgUpdateProvider>): Promise<BroadcastTxRes<MsgUpdateProviderResponse>> => {
    const data = [{
      typeUrl: MsgUpdateProvider.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgUpdateProviderResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider = async (request: BroadcastTxReq<MsgDeleteProvider>): Promise<BroadcastTxRes<MsgDeleteProviderResponse>> => {
    const data = [{
      typeUrl: MsgDeleteProvider.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgDeleteProviderResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createMsgClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};