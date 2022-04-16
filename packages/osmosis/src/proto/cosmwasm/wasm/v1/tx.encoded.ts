import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateAdminResponse, MsgClearAdminResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const encoded = {
  storeCode(value: MsgStoreCode) {
    return {
      type_url: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.encode(value).finish()
    };
  },

  instantiateContract(value: MsgInstantiateContract) {
    return {
      type_url: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.encode(value).finish()
    };
  },

  executeContract(value: MsgExecuteContract) {
    return {
      type_url: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.encode(value).finish()
    };
  },

  migrateContract(value: MsgMigrateContract) {
    return {
      type_url: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.encode(value).finish()
    };
  },

  updateAdmin(value: MsgUpdateAdmin) {
    return {
      type_url: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.encode(value).finish()
    };
  },

  clearAdmin(value: MsgClearAdmin) {
    return {
      type_url: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.encode(value).finish()
    };
  }

};