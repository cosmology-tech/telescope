import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import { fromBase64, toBase64, toUtf8, fromUtf8 } from "@cosmjs/encoding";
export const protobufPackage = "cosmwasm.wasm.v1";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
}
export interface StoreCodeProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal";
  value: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: string;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission?: AccessConfigAmino;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface InstantiateContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal";
  value: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: CoinAmino[];
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM codesudo */
  codeId: bigint;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
export interface MigrateContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal";
  value: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM codesudo */
  code_id: string;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
  code_id: bigint;
  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
export interface SudoContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal";
  value: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
export interface ExecuteContractProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal";
  value: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: CoinAmino[];
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface UpdateAdminProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal";
  value: Uint8Array;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  new_admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
  title: string;
  description: string;
  new_admin: string;
  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
export interface ClearAdminProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal";
  value: Uint8Array;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
  title: string;
  description: string;
  contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  codeIds: bigint[];
}
export interface PinCodesProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal";
  value: Uint8Array;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  code_ids: string[];
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
  title: string;
  description: string;
  code_ids: bigint[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  codeIds: bigint[];
}
export interface UnpinCodesProposalProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal";
  value: Uint8Array;
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalAmino {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  code_ids: string[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
  title: string;
  description: string;
  code_ids: bigint[];
}
function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined
  };
}
export const StoreCodeProposal = {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
  aminoType: "wasm/StoreCodeProposal",
  encode(message: StoreCodeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): StoreCodeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.wasmByteCode = reader.bytes();
          break;
        case 7:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreCodeProposal {
    const obj = createBaseStoreCodeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.runAs)) obj.runAs = String(object.runAs);
    if (isSet(object.wasmByteCode)) obj.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    if (isSet(object.instantiatePermission)) obj.instantiatePermission = AccessConfig.fromJSON(object.instantiatePermission);
    return obj;
  },
  toJSON(message: StoreCodeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission ? AccessConfig.toJSON(message.instantiatePermission) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    }
    return message;
  },
  fromSDK(object: StoreCodeProposalSDKType): StoreCodeProposal {
    return {
      title: object?.title,
      description: object?.description,
      runAs: object?.run_as,
      wasmByteCode: object?.wasm_byte_code,
      instantiatePermission: object.instantiate_permission ? AccessConfig.fromSDK(object.instantiate_permission) : undefined
    };
  },
  toSDK(message: StoreCodeProposal): StoreCodeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.wasm_byte_code = message.wasmByteCode;
    message.instantiatePermission !== undefined && (obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toSDK(message.instantiatePermission) : undefined);
    return obj;
  },
  fromAmino(object: StoreCodeProposalAmino): StoreCodeProposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      wasmByteCode: fromBase64(object.wasm_byte_code),
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined
    };
  },
  toAmino(message: StoreCodeProposal, useInterfaces: boolean = false): StoreCodeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: StoreCodeProposalProtoMsg, useInterfaces: boolean = false): StoreCodeProposal {
    return StoreCodeProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StoreCodeProposal): Uint8Array {
    return StoreCodeProposal.encode(message).finish();
  },
  toProtoMsg(message: StoreCodeProposal): StoreCodeProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
      value: StoreCodeProposal.encode(message).finish()
    };
  }
};
function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: BigInt(0),
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const InstantiateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
  aminoType: "wasm/InstantiateContractProposal",
  encode(message: InstantiateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): InstantiateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.msg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InstantiateContractProposal {
    const obj = createBaseInstantiateContractProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.runAs)) obj.runAs = String(object.runAs);
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.label)) obj.label = String(object.label);
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    if (Array.isArray(object?.funds)) obj.funds = object.funds.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: InstantiateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: InstantiateContractProposalSDKType): InstantiateContractProposal {
    return {
      title: object?.title,
      description: object?.description,
      runAs: object?.run_as,
      admin: object?.admin,
      codeId: object?.code_id,
      label: object?.label,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: InstantiateContractProposal): InstantiateContractProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.admin = message.admin;
    obj.code_id = message.codeId;
    obj.label = message.label;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAmino(object: InstantiateContractProposalAmino): InstantiateContractProposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      admin: object.admin,
      codeId: BigInt(object.code_id),
      label: object.label,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: InstantiateContractProposal, useInterfaces: boolean = false): InstantiateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.admin = message.admin;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromProtoMsg(message: InstantiateContractProposalProtoMsg, useInterfaces: boolean = false): InstantiateContractProposal {
    return InstantiateContractProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: InstantiateContractProposal): Uint8Array {
    return InstantiateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: InstantiateContractProposal): InstantiateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
      value: InstantiateContractProposal.encode(message).finish()
    };
  }
};
function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    codeId: BigInt(0),
    msg: new Uint8Array()
  };
}
export const MigrateContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
  aminoType: "wasm/MigrateContractProposal",
  encode(message: MigrateContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): MigrateContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64();
          break;
        case 6:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MigrateContractProposal {
    const obj = createBaseMigrateContractProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    return obj;
  },
  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MigrateContractProposalSDKType): MigrateContractProposal {
    return {
      title: object?.title,
      description: object?.description,
      contract: object?.contract,
      codeId: object?.code_id,
      msg: object?.msg
    };
  },
  toSDK(message: MigrateContractProposal): MigrateContractProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    obj.code_id = message.codeId;
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: MigrateContractProposalAmino): MigrateContractProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract,
      codeId: BigInt(object.code_id),
      msg: toUtf8(JSON.stringify(object.msg))
    };
  },
  toAmino(message: MigrateContractProposal, useInterfaces: boolean = false): MigrateContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromProtoMsg(message: MigrateContractProposalProtoMsg, useInterfaces: boolean = false): MigrateContractProposal {
    return MigrateContractProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MigrateContractProposal): Uint8Array {
    return MigrateContractProposal.encode(message).finish();
  },
  toProtoMsg(message: MigrateContractProposal): MigrateContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
      value: MigrateContractProposal.encode(message).finish()
    };
  }
};
function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}
export const SudoContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
  aminoType: "wasm/SudoContractProposal",
  encode(message: SudoContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): SudoContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoContractProposal {
    const obj = createBaseSudoContractProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    return obj;
  },
  toJSON(message: SudoContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<SudoContractProposal>): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SudoContractProposalSDKType): SudoContractProposal {
    return {
      title: object?.title,
      description: object?.description,
      contract: object?.contract,
      msg: object?.msg
    };
  },
  toSDK(message: SudoContractProposal): SudoContractProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    obj.msg = message.msg;
    return obj;
  },
  fromAmino(object: SudoContractProposalAmino): SudoContractProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract,
      msg: toUtf8(JSON.stringify(object.msg))
    };
  },
  toAmino(message: SudoContractProposal, useInterfaces: boolean = false): SudoContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    return obj;
  },
  fromProtoMsg(message: SudoContractProposalProtoMsg, useInterfaces: boolean = false): SudoContractProposal {
    return SudoContractProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SudoContractProposal): Uint8Array {
    return SudoContractProposal.encode(message).finish();
  },
  toProtoMsg(message: SudoContractProposal): SudoContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
      value: SudoContractProposal.encode(message).finish()
    };
  }
};
function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const ExecuteContractProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
  aminoType: "wasm/ExecuteContractProposal",
  encode(message: ExecuteContractProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ExecuteContractProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runAs = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.msg = reader.bytes();
          break;
        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecuteContractProposal {
    const obj = createBaseExecuteContractProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.runAs)) obj.runAs = String(object.runAs);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    if (Array.isArray(object?.funds)) obj.funds = object.funds.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: ExecuteContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ExecuteContractProposalSDKType): ExecuteContractProposal {
    return {
      title: object?.title,
      description: object?.description,
      runAs: object?.run_as,
      contract: object?.contract,
      msg: object?.msg,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: ExecuteContractProposal): ExecuteContractProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.contract = message.contract;
    obj.msg = message.msg;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromAmino(object: ExecuteContractProposalAmino): ExecuteContractProposal {
    return {
      title: object.title,
      description: object.description,
      runAs: object.run_as,
      contract: object.contract,
      msg: toUtf8(JSON.stringify(object.msg)),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: ExecuteContractProposal, useInterfaces: boolean = false): ExecuteContractProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.run_as = message.runAs;
    obj.contract = message.contract;
    obj.msg = message.msg ? JSON.parse(fromUtf8(message.msg)) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.funds = [];
    }
    return obj;
  },
  fromProtoMsg(message: ExecuteContractProposalProtoMsg, useInterfaces: boolean = false): ExecuteContractProposal {
    return ExecuteContractProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExecuteContractProposal): Uint8Array {
    return ExecuteContractProposal.encode(message).finish();
  },
  toProtoMsg(message: ExecuteContractProposal): ExecuteContractProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
      value: ExecuteContractProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}
export const UpdateAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
  aminoType: "wasm/UpdateAdminProposal",
  encode(message: UpdateAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): UpdateAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateAdminProposal {
    const obj = createBaseUpdateAdminProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.newAdmin)) obj.newAdmin = String(object.newAdmin);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    return obj;
  },
  toJSON(message: UpdateAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: UpdateAdminProposalSDKType): UpdateAdminProposal {
    return {
      title: object?.title,
      description: object?.description,
      newAdmin: object?.new_admin,
      contract: object?.contract
    };
  },
  toSDK(message: UpdateAdminProposal): UpdateAdminProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.new_admin = message.newAdmin;
    obj.contract = message.contract;
    return obj;
  },
  fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal {
    return {
      title: object.title,
      description: object.description,
      newAdmin: object.new_admin,
      contract: object.contract
    };
  },
  toAmino(message: UpdateAdminProposal, useInterfaces: boolean = false): UpdateAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.new_admin = message.newAdmin;
    obj.contract = message.contract;
    return obj;
  },
  fromProtoMsg(message: UpdateAdminProposalProtoMsg, useInterfaces: boolean = false): UpdateAdminProposal {
    return UpdateAdminProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UpdateAdminProposal): Uint8Array {
    return UpdateAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
      value: UpdateAdminProposal.encode(message).finish()
    };
  }
};
function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
export const ClearAdminProposal = {
  typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
  aminoType: "wasm/ClearAdminProposal",
  encode(message: ClearAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ClearAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClearAdminProposal {
    const obj = createBaseClearAdminProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.contract)) obj.contract = String(object.contract);
    return obj;
  },
  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: ClearAdminProposalSDKType): ClearAdminProposal {
    return {
      title: object?.title,
      description: object?.description,
      contract: object?.contract
    };
  },
  toSDK(message: ClearAdminProposal): ClearAdminProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    return obj;
  },
  fromAmino(object: ClearAdminProposalAmino): ClearAdminProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract
    };
  },
  toAmino(message: ClearAdminProposal, useInterfaces: boolean = false): ClearAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    return obj;
  },
  fromProtoMsg(message: ClearAdminProposalProtoMsg, useInterfaces: boolean = false): ClearAdminProposal {
    return ClearAdminProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ClearAdminProposal): Uint8Array {
    return ClearAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: ClearAdminProposal): ClearAdminProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
      value: ClearAdminProposal.encode(message).finish()
    };
  }
};
function createBasePinCodesProposal(): PinCodesProposal {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}
export const PinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
  aminoType: "wasm/PinCodesProposal",
  encode(message: PinCodesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): PinCodesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PinCodesProposal {
    const obj = createBasePinCodesProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.codeIds)) obj.codeIds = object.codeIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: PinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: PinCodesProposalSDKType): PinCodesProposal {
    return {
      title: object?.title,
      description: object?.description,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: PinCodesProposal): PinCodesProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromAmino(object: PinCodesProposalAmino): PinCodesProposal {
    return {
      title: object.title,
      description: object.description,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: PinCodesProposal, useInterfaces: boolean = false): PinCodesProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e.toString());
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromProtoMsg(message: PinCodesProposalProtoMsg, useInterfaces: boolean = false): PinCodesProposal {
    return PinCodesProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PinCodesProposal): Uint8Array {
    return PinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message: PinCodesProposal): PinCodesProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
      value: PinCodesProposal.encode(message).finish()
    };
  }
};
function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}
export const UnpinCodesProposal = {
  typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
  aminoType: "wasm/UnpinCodesProposal",
  encode(message: UnpinCodesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): UnpinCodesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnpinCodesProposal {
    const obj = createBaseUnpinCodesProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.codeIds)) obj.codeIds = object.codeIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: UnpinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: UnpinCodesProposalSDKType): UnpinCodesProposal {
    return {
      title: object?.title,
      description: object?.description,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: UnpinCodesProposal): UnpinCodesProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e);
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromAmino(object: UnpinCodesProposalAmino): UnpinCodesProposal {
    return {
      title: object.title,
      description: object.description,
      codeIds: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: UnpinCodesProposal, useInterfaces: boolean = false): UnpinCodesProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map(e => e.toString());
    } else {
      obj.code_ids = [];
    }
    return obj;
  },
  fromProtoMsg(message: UnpinCodesProposalProtoMsg, useInterfaces: boolean = false): UnpinCodesProposal {
    return UnpinCodesProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UnpinCodesProposal): Uint8Array {
    return UnpinCodesProposal.encode(message).finish();
  },
  toProtoMsg(message: UnpinCodesProposal): UnpinCodesProposalProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
      value: UnpinCodesProposal.encode(message).finish()
    };
  }
};