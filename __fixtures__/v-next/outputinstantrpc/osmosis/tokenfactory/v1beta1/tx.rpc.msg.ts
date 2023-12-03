import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  createDenom(request: BroadcastTxReq<MsgCreateDenom>): Promise<BroadcastTxRes<MsgCreateDenomResponse>>;
  mint(request: BroadcastTxReq<MsgMint>): Promise<BroadcastTxRes<MsgMintResponse>>;
  burn(request: BroadcastTxReq<MsgBurn>): Promise<BroadcastTxRes<MsgBurnResponse>>;
  changeAdmin(request: BroadcastTxReq<MsgChangeAdmin>): Promise<BroadcastTxRes<MsgChangeAdminResponse>>;
  setDenomMetadata(request: BroadcastTxReq<MsgSetDenomMetadata>): Promise<BroadcastTxRes<MsgSetDenomMetadataResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDenom */
  createDenom = async (request: BroadcastTxReq<MsgCreateDenom>): Promise<BroadcastTxRes<MsgCreateDenomResponse>> => {
    const data = [{
      typeUrl: MsgCreateDenom.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateDenomResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Mint */
  mint = async (request: BroadcastTxReq<MsgMint>): Promise<BroadcastTxRes<MsgMintResponse>> => {
    const data = [{
      typeUrl: MsgMint.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgMintResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* Burn */
  burn = async (request: BroadcastTxReq<MsgBurn>): Promise<BroadcastTxRes<MsgBurnResponse>> => {
    const data = [{
      typeUrl: MsgBurn.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgBurnResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ChangeAdmin */
  changeAdmin = async (request: BroadcastTxReq<MsgChangeAdmin>): Promise<BroadcastTxRes<MsgChangeAdminResponse>> => {
    const data = [{
      typeUrl: MsgChangeAdmin.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgChangeAdminResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* SetDenomMetadata */
  setDenomMetadata = async (request: BroadcastTxReq<MsgSetDenomMetadata>): Promise<BroadcastTxRes<MsgSetDenomMetadataResponse>> => {
    const data = [{
      typeUrl: MsgSetDenomMetadata.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSetDenomMetadataResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};