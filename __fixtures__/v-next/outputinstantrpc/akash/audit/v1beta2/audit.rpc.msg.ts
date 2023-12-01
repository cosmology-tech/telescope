import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  signProviderAttributes(request: BroadcastTxReq<MsgSignProviderAttributes>): Promise<BroadcastTxRes<MsgSignProviderAttributesResponse>>;
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  deleteProviderAttributes(request: BroadcastTxReq<MsgDeleteProviderAttributes>): Promise<BroadcastTxRes<MsgDeleteProviderAttributesResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SignProviderAttributes defines a method that signs provider attributes */
  signProviderAttributes = async (request: BroadcastTxReq<MsgSignProviderAttributes>): Promise<BroadcastTxRes<MsgSignProviderAttributesResponse>> => {
    const data = [{
      typeUrl: MsgSignProviderAttributes.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSignProviderAttributesResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* DeleteProviderAttributes defines a method that deletes provider attributes */
  deleteProviderAttributes = async (request: BroadcastTxReq<MsgDeleteProviderAttributes>): Promise<BroadcastTxRes<MsgDeleteProviderAttributesResponse>> => {
    const data = [{
      typeUrl: MsgDeleteProviderAttributes.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgDeleteProviderAttributesResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}