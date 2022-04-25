import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateAdminResponse, MsgClearAdminResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const toJSON = {
  storeCode(value: MsgStoreCode) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: MsgStoreCode.toJSON(value)
    };
  },

  instantiateContract(value: MsgInstantiateContract) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: MsgInstantiateContract.toJSON(value)
    };
  },

  executeContract(value: MsgExecuteContract) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.toJSON(value)
    };
  },

  migrateContract(value: MsgMigrateContract) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: MsgMigrateContract.toJSON(value)
    };
  },

  updateAdmin(value: MsgUpdateAdmin) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: MsgUpdateAdmin.toJSON(value)
    };
  },

  clearAdmin(value: MsgClearAdmin) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: MsgClearAdmin.toJSON(value)
    };
  }

};