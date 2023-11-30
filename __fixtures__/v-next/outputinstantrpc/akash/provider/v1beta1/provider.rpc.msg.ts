import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider(request: BroadcastTxRequest<MsgCreateProvider>): Promise<BroadcastTxResponse<MsgCreateProviderResponse>>;
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider(request: BroadcastTxRequest<MsgUpdateProvider>): Promise<BroadcastTxResponse<MsgUpdateProviderResponse>>;
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider(request: BroadcastTxRequest<MsgDeleteProvider>): Promise<BroadcastTxResponse<MsgDeleteProviderResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider = async (request: BroadcastTxRequest<MsgCreateProvider>): Promise<BroadcastTxResponse<MsgCreateProviderResponse>> => {
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
  updateProvider = async (request: BroadcastTxRequest<MsgUpdateProvider>): Promise<BroadcastTxResponse<MsgUpdateProviderResponse>> => {
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
  deleteProvider = async (request: BroadcastTxRequest<MsgDeleteProvider>): Promise<BroadcastTxResponse<MsgDeleteProviderResponse>> => {
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