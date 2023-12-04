import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  signProviderAttributes(request: BroadcastTxReq<MsgSignProviderAttributes>): Promise<DeliverTxResponse>;
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  deleteProviderAttributes(request: BroadcastTxReq<MsgDeleteProviderAttributes>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SignProviderAttributes defines a method that signs provider attributes */
  signProviderAttributes = async (request: BroadcastTxReq<MsgSignProviderAttributes>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSignProviderAttributes.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* DeleteProviderAttributes defines a method that deletes provider attributes */
  deleteProviderAttributes = async (request: BroadcastTxReq<MsgDeleteProviderAttributes>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgDeleteProviderAttributes.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};