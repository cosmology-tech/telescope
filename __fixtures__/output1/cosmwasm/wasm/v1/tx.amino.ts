import { AccessConfig, accessTypeFromJSON } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
export interface AminoMsgStoreCode extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission: {
      permission: number;
      address: string;
    };
  };
}
export interface AminoMsgInstantiateContract extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgInstantiateContract";
  value: {
    sender: string;
    admin: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgExecuteContract extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgExecuteContract";
  value: {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgMigrateContract extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgMigrateContract";
  value: {
    sender: string;
    contract: string;
    code_id: string;
    msg: Uint8Array;
  };
}
export interface AminoMsgUpdateAdmin extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
  value: {
    sender: string;
    new_admin: string;
    contract: string;
  };
}
export interface AminoMsgClearAdmin extends AminoMsg {
  type: "/cosmwasm.wasm.v1.MsgClearAdmin";
  value: {
    sender: string;
    contract: string;
  };
}
export const AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "/cosmwasm.wasm.v1.MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode,
      instantiatePermission
    }: MsgStoreCode): AminoMsgStoreCode["value"] => {
      return {
        sender,
        wasm_byte_code: wasmByteCode,
        instantiate_permission: {
          permission: instantiatePermission.permission,
          address: instantiatePermission.address
        }
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      instantiate_permission
    }: AminoMsgStoreCode["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: wasm_byte_code,
        instantiatePermission: {
          permission: accessTypeFromJSON(instantiate_permission.permission),
          address: instantiate_permission.address
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    toAmino: ({
      sender,
      admin,
      codeId,
      label,
      msg,
      funds
    }: MsgInstantiateContract): AminoMsgInstantiateContract["value"] => {
      return {
        sender,
        admin,
        code_id: codeId.toString(),
        label,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      admin,
      code_id,
      label,
      msg,
      funds
    }: AminoMsgInstantiateContract["value"]): MsgInstantiateContract => {
      return {
        sender,
        admin,
        codeId: Long.fromString(code_id),
        label,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "/cosmwasm.wasm.v1.MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteContract): AminoMsgExecuteContract["value"] => {
      return {
        sender,
        contract,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds
    }: AminoMsgExecuteContract["value"]): MsgExecuteContract => {
      return {
        sender,
        contract,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "/cosmwasm.wasm.v1.MsgMigrateContract",
    toAmino: ({
      sender,
      contract,
      codeId,
      msg
    }: MsgMigrateContract): AminoMsgMigrateContract["value"] => {
      return {
        sender,
        contract,
        code_id: codeId.toString(),
        msg
      };
    },
    fromAmino: ({
      sender,
      contract,
      code_id,
      msg
    }: AminoMsgMigrateContract["value"]): MsgMigrateContract => {
      return {
        sender,
        contract,
        codeId: Long.fromString(code_id),
        msg
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
    toAmino: ({
      sender,
      newAdmin,
      contract
    }: MsgUpdateAdmin): AminoMsgUpdateAdmin["value"] => {
      return {
        sender,
        new_admin: newAdmin,
        contract
      };
    },
    fromAmino: ({
      sender,
      new_admin,
      contract
    }: AminoMsgUpdateAdmin["value"]): MsgUpdateAdmin => {
      return {
        sender,
        newAdmin: new_admin,
        contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "/cosmwasm.wasm.v1.MsgClearAdmin",
    toAmino: ({
      sender,
      contract
    }: MsgClearAdmin): AminoMsgClearAdmin["value"] => {
      return {
        sender,
        contract
      };
    },
    fromAmino: ({
      sender,
      contract
    }: AminoMsgClearAdmin["value"]): MsgClearAdmin => {
      return {
        sender,
        contract
      };
    }
  }
};