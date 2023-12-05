import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgSignProviderAttributes, MsgSignProviderAttributesSDKType, MsgSignProviderAttributesResponse, MsgSignProviderAttributesResponseSDKType, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesSDKType, MsgDeleteProviderAttributesResponse, MsgDeleteProviderAttributesResponseSDKType } from "./audit";
/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  signProviderAttributes(signerAddress: string, message: MsgSignProviderAttributes, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  deleteProviderAttributes(signerAddress: string, message: MsgDeleteProviderAttributes, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SignProviderAttributes defines a method that signs provider attributes */
  signProviderAttributes = async (signerAddress: string, message: MsgSignProviderAttributes, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSignProviderAttributes.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* DeleteProviderAttributes defines a method that deletes provider attributes */
  deleteProviderAttributes = async (signerAddress: string, message: MsgDeleteProviderAttributes, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
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