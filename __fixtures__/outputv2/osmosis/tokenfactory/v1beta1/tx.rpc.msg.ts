import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
export class Msg {
  static CreateDenom(request: MsgCreateDenom, initRequest?: fm.initReq): Promise<MsgCreateDenomResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Mint(request: MsgMint, initRequest?: fm.initReq): Promise<MsgMintResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Burn(request: MsgBurn, initRequest?: fm.initReq): Promise<MsgBurnResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChangeAdmin(request: MsgChangeAdmin, initRequest?: fm.initReq): Promise<MsgChangeAdminResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static SetDenomMetadata(request: MsgSetDenomMetadata, initRequest?: fm.initReq): Promise<MsgSetDenomMetadataResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}