import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgStoreCode, MsgStoreCodeSDKType, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractSDKType, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractSDKType, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminSDKType, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminSDKType, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
export class Msg {
  static StoreCode(): Promise<MsgStoreCodeResponse> {}

  static InstantiateContract(): Promise<MsgInstantiateContractResponse> {}

  static ExecuteContract(): Promise<MsgExecuteContractResponse> {}

  static MigrateContract(): Promise<MsgMigrateContractResponse> {}

  static UpdateAdmin(): Promise<MsgUpdateAdminResponse> {}

  static ClearAdmin(): Promise<MsgClearAdminResponse> {}

}