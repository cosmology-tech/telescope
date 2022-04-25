import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateAdminResponse, MsgClearAdminResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const fromJSON = {
  storeCode(value: any) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.fromJSON(value)
    };
  },

  instantiateContract(value: any) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.fromJSON(value)
    };
  },

  executeContract(value: any) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromJSON(value)
    };
  },

  migrateContract(value: any) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.fromJSON(value)
    };
  },

  updateAdmin(value: any) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.fromJSON(value)
    };
  },

  clearAdmin(value: any) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.fromJSON(value)
    };
  }

};