import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
export class Msg {
  /** StoreCode to submit Wasm code to the system */
  static StoreCode(request: MsgStoreCode, initRequest?: fm.InitReq): Promise<MsgStoreCodeResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/StoreCode`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Instantiate creates a new smart contract instance for the given code id. */
  static InstantiateContract(request: MsgInstantiateContract, initRequest?: fm.InitReq): Promise<MsgInstantiateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/InstantiateContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Execute submits the given message data to a smart contract */
  static ExecuteContract(request: MsgExecuteContract, initRequest?: fm.InitReq): Promise<MsgExecuteContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/ExecuteContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  static MigrateContract(request: MsgMigrateContract, initRequest?: fm.InitReq): Promise<MsgMigrateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/MigrateContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateAdmin sets a new   admin for a smart contract */
  static UpdateAdmin(request: MsgUpdateAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/UpdateAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** ClearAdmin removes any admin stored for a smart contract */
  static ClearAdmin(request: MsgClearAdmin, initRequest?: fm.InitReq): Promise<MsgClearAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/ClearAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}