import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  createDenom(request: BroadcastTxReq<MsgCreateDenom>): Promise<DeliverTxResponse>;
  mint(request: BroadcastTxReq<MsgMint>): Promise<DeliverTxResponse>;
  burn(request: BroadcastTxReq<MsgBurn>): Promise<DeliverTxResponse>;
  changeAdmin(request: BroadcastTxReq<MsgChangeAdmin>): Promise<DeliverTxResponse>;
  setDenomMetadata(request: BroadcastTxReq<MsgSetDenomMetadata>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDenom */
  createDenom = async (request: BroadcastTxReq<MsgCreateDenom>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDenom.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Mint */
  mint = async (request: BroadcastTxReq<MsgMint>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgMint.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Burn */
  burn = async (request: BroadcastTxReq<MsgBurn>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBurn.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ChangeAdmin */
  changeAdmin = async (request: BroadcastTxReq<MsgChangeAdmin>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChangeAdmin.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* SetDenomMetadata */
  setDenomMetadata = async (request: BroadcastTxReq<MsgSetDenomMetadata>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSetDenomMetadata.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};