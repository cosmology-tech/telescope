import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgCreateProviderResponse, MsgCreateProviderResponseSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgUpdateProviderResponse, MsgUpdateProviderResponseSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType, MsgDeleteProviderResponse, MsgDeleteProviderResponseSDKType } from "./provider";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider(signerAddress: string, message: MsgCreateProvider, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider(signerAddress: string, message: MsgUpdateProvider, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider(signerAddress: string, message: MsgDeleteProvider, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider = async (signerAddress: string, message: MsgCreateProvider, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateProvider.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider = async (signerAddress: string, message: MsgUpdateProvider, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateProvider.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider = async (signerAddress: string, message: MsgDeleteProvider, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
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