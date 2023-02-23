import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";

/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  CreateDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse>;
  Mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse>;
  Burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse>;
  ChangeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse>;
  SetDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
    this.setDenomMetadata = this.setDenomMetadata.bind(this);
  }

  createDenom(request: DeepPartial<MsgCreateDenom>, metadata?: grpc.Metadata): Promise<MsgCreateDenomResponse> {
    return this.rpc.unary(MsgCreateDenom, MsgCreateDenom.fromPartial(request), metadata);
  }

  mint(request: DeepPartial<MsgMint>, metadata?: grpc.Metadata): Promise<MsgMintResponse> {
    return this.rpc.unary(MsgMint, MsgMint.fromPartial(request), metadata);
  }

  burn(request: DeepPartial<MsgBurn>, metadata?: grpc.Metadata): Promise<MsgBurnResponse> {
    return this.rpc.unary(MsgBurn, MsgBurn.fromPartial(request), metadata);
  }

  changeAdmin(request: DeepPartial<MsgChangeAdmin>, metadata?: grpc.Metadata): Promise<MsgChangeAdminResponse> {
    return this.rpc.unary(MsgChangeAdmin, MsgChangeAdmin.fromPartial(request), metadata);
  }

  setDenomMetadata(request: DeepPartial<MsgSetDenomMetadata>, metadata?: grpc.Metadata): Promise<MsgSetDenomMetadataResponse> {
    return this.rpc.unary(MsgSetDenomMetadata, MsgSetDenomMetadata.fromPartial(request), metadata);
  }

}