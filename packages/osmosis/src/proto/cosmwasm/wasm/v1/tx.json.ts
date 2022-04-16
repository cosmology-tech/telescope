import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateAdminResponse, MsgClearAdminResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const json = {
  storeCode(value: MsgStoreCode) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value
    };
  },

  instantiateContract(value: MsgInstantiateContract) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value
    };
  },

  executeContract(value: MsgExecuteContract) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value
    };
  },

  migrateContract(value: MsgMigrateContract) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value
    };
  },

  updateAdmin(value: MsgUpdateAdmin) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value
    };
  },

  clearAdmin(value: MsgClearAdmin) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value
    };
  }

};