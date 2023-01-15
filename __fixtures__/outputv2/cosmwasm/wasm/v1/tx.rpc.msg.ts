import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
export class Msg {
  static StoreCode(request: MsgStoreCode, initRequest?: fm.initReq): Promise<MsgStoreCodeResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1.Msg/StoreCode`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static InstantiateContract(request: MsgInstantiateContract, initRequest?: fm.initReq): Promise<MsgInstantiateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1.Msg/InstantiateContract`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ExecuteContract(request: MsgExecuteContract, initRequest?: fm.initReq): Promise<MsgExecuteContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1.Msg/ExecuteContract`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static MigrateContract(request: MsgMigrateContract, initRequest?: fm.initReq): Promise<MsgMigrateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1.Msg/MigrateContract`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static UpdateAdmin(request: MsgUpdateAdmin, initRequest?: fm.initReq): Promise<MsgUpdateAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1.Msg/UpdateAdmin`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ClearAdmin(request: MsgClearAdmin, initRequest?: fm.initReq): Promise<MsgClearAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1.Msg/ClearAdmin`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}