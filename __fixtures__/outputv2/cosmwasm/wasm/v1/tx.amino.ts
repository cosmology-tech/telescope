import { AccessConfig, AccessConfigAmino, AccessConfigAminoType, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { MsgStoreCode, MsgStoreCodeAmino, MsgStoreCodeAminoType, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractAmino, MsgInstantiateContractAminoType, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractAmino, MsgExecuteContractAminoType, MsgExecuteContractSDKType, MsgMigrateContract, MsgMigrateContractAmino, MsgMigrateContractAminoType, MsgMigrateContractSDKType, MsgUpdateAdmin, MsgUpdateAdminAmino, MsgUpdateAdminAminoType, MsgUpdateAdminSDKType, MsgClearAdmin, MsgClearAdminAmino, MsgClearAdminAminoType, MsgClearAdminSDKType } from "./tx";
export const AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: MsgStoreCode.toAmino,
    fromAmino: MsgStoreCode.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: MsgInstantiateContract.toAmino,
    fromAmino: MsgInstantiateContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: MsgExecuteContract.toAmino,
    fromAmino: MsgExecuteContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: MsgMigrateContract.toAmino,
    fromAmino: MsgMigrateContract.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: MsgUpdateAdmin.toAmino,
    fromAmino: MsgUpdateAdmin.fromAmino
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: MsgClearAdmin.toAmino,
    fromAmino: MsgClearAdmin.fromAmino
  }
};