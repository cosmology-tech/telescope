import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
export class Msg {
  static CreateDenom(): Promise<MsgCreateDenomResponse> {}

  static Mint(): Promise<MsgMintResponse> {}

  static Burn(): Promise<MsgBurnResponse> {}

  static ChangeAdmin(): Promise<MsgChangeAdminResponse> {}

  static SetDenomMetadata(): Promise<MsgSetDenomMetadataResponse> {}

}