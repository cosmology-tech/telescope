import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  createDenom(request: BroadcastTxRequest<MsgCreateDenom>): Promise<BroadcastTxResponse<MsgCreateDenomResponse>>;
  mint(request: BroadcastTxRequest<MsgMint>): Promise<BroadcastTxResponse<MsgMintResponse>>;
  burn(request: BroadcastTxRequest<MsgBurn>): Promise<BroadcastTxResponse<MsgBurnResponse>>;
  changeAdmin(request: BroadcastTxRequest<MsgChangeAdmin>): Promise<BroadcastTxResponse<MsgChangeAdminResponse>>;
  setDenomMetadata(request: BroadcastTxRequest<MsgSetDenomMetadata>): Promise<BroadcastTxResponse<MsgSetDenomMetadataResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDenom */
  createDenom = async (request: BroadcastTxRequest<MsgCreateDenom>): Promise<BroadcastTxResponse<MsgCreateDenomResponse>> => {
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
  mint = async (request: BroadcastTxRequest<MsgMint>): Promise<BroadcastTxResponse<MsgMintResponse>> => {
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
  burn = async (request: BroadcastTxRequest<MsgBurn>): Promise<BroadcastTxResponse<MsgBurnResponse>> => {
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
  changeAdmin = async (request: BroadcastTxRequest<MsgChangeAdmin>): Promise<BroadcastTxResponse<MsgChangeAdminResponse>> => {
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
  setDenomMetadata = async (request: BroadcastTxRequest<MsgSetDenomMetadata>): Promise<BroadcastTxResponse<MsgSetDenomMetadataResponse>> => {
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