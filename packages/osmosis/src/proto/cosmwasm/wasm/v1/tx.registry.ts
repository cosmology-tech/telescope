import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateAdminResponse, MsgClearAdminResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Registry } from "@cosmjs/proto-signing";
export const registry = {
  "/cosmwasm.wasm.v1.MsgStoreCode": MsgStoreCode,
  "/cosmwasm.wasm.v1.MsgInstantiateContract": MsgInstantiateContract,
  "/cosmwasm.wasm.v1.MsgExecuteContract": MsgExecuteContract,
  "/cosmwasm.wasm.v1.MsgMigrateContract": MsgMigrateContract,
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": MsgUpdateAdmin,
  "/cosmwasm.wasm.v1.MsgClearAdmin": MsgClearAdmin
};
export const load = (protoRegistry: Registry) => {
  Object.keys(registry).forEach(typeUrl => {
    protoRegistry.register(typeUrl, registry[typeUrl]);
  });
};