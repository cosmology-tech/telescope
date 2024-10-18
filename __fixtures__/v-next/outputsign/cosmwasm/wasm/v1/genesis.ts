import { MsgStoreCode, MsgStoreCodeAmino, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractAmino, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractAmino, MsgExecuteContractSDKType } from "./tx";
import { Params, ParamsAmino, ParamsSDKType, CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  genMsgs: GenesisState_GenMsgs[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  codes?: CodeAmino[];
  contracts?: ContractAmino[];
  sequences?: SequenceAmino[];
  gen_msgs?: GenesisState_GenMsgsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "wasm/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
  gen_msgs: GenesisState_GenMsgsSDKType[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
  storeCode?: MsgStoreCode;
  instantiateContract?: MsgInstantiateContract;
  executeContract?: MsgExecuteContract;
}
export interface GenesisState_GenMsgsProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.GenMsgs";
  value: Uint8Array;
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgsAmino {
  store_code?: MsgStoreCodeAmino;
  instantiate_contract?: MsgInstantiateContractAmino;
  execute_contract?: MsgExecuteContractAmino;
}
export interface GenesisState_GenMsgsAminoMsg {
  type: "wasm/GenMsgs";
  value: GenesisState_GenMsgsAmino;
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgsSDKType {
  store_code?: MsgStoreCodeSDKType;
  instantiate_contract?: MsgInstantiateContractSDKType;
  execute_contract?: MsgExecuteContractSDKType;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: bigint;
  codeInfo: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}
export interface CodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Code";
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeAmino {
  code_id?: string;
  code_info?: CodeInfoAmino;
  code_bytes?: string;
  /** Pinned to wasmvm cache */
  pinned?: boolean;
}
export interface CodeAminoMsg {
  type: "wasm/Code";
  value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
  code_id: bigint;
  code_info: CodeInfoSDKType;
  code_bytes: Uint8Array;
  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo: ContractInfo;
  contractState: Model[];
}
export interface ContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Contract";
  value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
  contract_address?: string;
  contract_info?: ContractInfoAmino;
  contract_state?: ModelAmino[];
}
export interface ContractAminoMsg {
  type: "wasm/Contract";
  value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
  contract_address: string;
  contract_info: ContractInfoSDKType;
  contract_state: ModelSDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
  idKey: Uint8Array;
  value: bigint;
}
export interface SequenceProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Sequence";
  value: Uint8Array;
}
/** Sequence key and value of an id generation counter */
export interface SequenceAmino {
  id_key?: string;
  value?: string;
}
export interface SequenceAminoMsg {
  type: "wasm/Sequence";
  value: SequenceAmino;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
  id_key: Uint8Array;
  value: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: [],
    genMsgs: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.genMsgs) {
      GenesisState_GenMsgs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        case 5:
          message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    message.genMsgs = object.genMsgs?.map(e => GenesisState_GenMsgs.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.codes = object.codes?.map(e => Code.fromAmino(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromAmino(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromAmino(e)) || [];
    message.genMsgs = object.gen_msgs?.map(e => GenesisState_GenMsgs.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toAmino(e) : undefined);
    } else {
      obj.codes = message.codes;
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
    } else {
      obj.sequences = message.sequences;
    }
    if (message.genMsgs) {
      obj.gen_msgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toAmino(e) : undefined);
    } else {
      obj.gen_msgs = message.genMsgs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "wasm/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisState_GenMsgs(): GenesisState_GenMsgs {
  return {
    storeCode: undefined,
    instantiateContract: undefined,
    executeContract: undefined
  };
}
export const GenesisState_GenMsgs = {
  typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
  encode(message: GenesisState_GenMsgs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeCode !== undefined) {
      MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateContract !== undefined) {
      MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
    }
    if (message.executeContract !== undefined) {
      MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_GenMsgs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_GenMsgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeCode = MsgStoreCode.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateContract = MsgInstantiateContract.decode(reader, reader.uint32());
          break;
        case 3:
          message.executeContract = MsgExecuteContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState_GenMsgs>): GenesisState_GenMsgs {
    const message = createBaseGenesisState_GenMsgs();
    if (object.storeCode !== undefined && object.storeCode !== null) {
      message.storeCode = MsgStoreCode.fromPartial(object.storeCode);
    }
    if (object.instantiateContract !== undefined && object.instantiateContract !== null) {
      message.instantiateContract = MsgInstantiateContract.fromPartial(object.instantiateContract);
    }
    if (object.executeContract !== undefined && object.executeContract !== null) {
      message.executeContract = MsgExecuteContract.fromPartial(object.executeContract);
    }
    return message;
  },
  fromAmino(object: GenesisState_GenMsgsAmino): GenesisState_GenMsgs {
    const message = createBaseGenesisState_GenMsgs();
    if (object.store_code !== undefined && object.store_code !== null) {
      message.storeCode = MsgStoreCode.fromAmino(object.store_code);
    }
    if (object.instantiate_contract !== undefined && object.instantiate_contract !== null) {
      message.instantiateContract = MsgInstantiateContract.fromAmino(object.instantiate_contract);
    }
    if (object.execute_contract !== undefined && object.execute_contract !== null) {
      message.executeContract = MsgExecuteContract.fromAmino(object.execute_contract);
    }
    return message;
  },
  toAmino(message: GenesisState_GenMsgs): GenesisState_GenMsgsAmino {
    const obj: any = {};
    obj.store_code = message.storeCode ? MsgStoreCode.toAmino(message.storeCode) : undefined;
    obj.instantiate_contract = message.instantiateContract ? MsgInstantiateContract.toAmino(message.instantiateContract) : undefined;
    obj.execute_contract = message.executeContract ? MsgExecuteContract.toAmino(message.executeContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_GenMsgsAminoMsg): GenesisState_GenMsgs {
    return GenesisState_GenMsgs.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsAminoMsg {
    return {
      type: "wasm/GenMsgs",
      value: GenesisState_GenMsgs.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisState_GenMsgsProtoMsg): GenesisState_GenMsgs {
    return GenesisState_GenMsgs.decode(message.value);
  },
  toProto(message: GenesisState_GenMsgs): Uint8Array {
    return GenesisState_GenMsgs.encode(message).finish();
  },
  toProtoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
      value: GenesisState_GenMsgs.encode(message).finish()
    };
  }
};
function createBaseCode(): Code {
  return {
    codeId: BigInt(0),
    codeInfo: CodeInfo.fromPartial({}),
    codeBytes: new Uint8Array(),
    pinned: false
  };
}
export const Code = {
  typeUrl: "/cosmwasm.wasm.v1.Code",
  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Code {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.codeBytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
    }
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
  fromAmino(object: CodeAmino): Code {
    const message = createBaseCode();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.code_info !== undefined && object.code_info !== null) {
      message.codeInfo = CodeInfo.fromAmino(object.code_info);
    }
    if (object.code_bytes !== undefined && object.code_bytes !== null) {
      message.codeBytes = bytesFromBase64(object.code_bytes);
    }
    if (object.pinned !== undefined && object.pinned !== null) {
      message.pinned = object.pinned;
    }
    return message;
  },
  toAmino(message: Code): CodeAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.code_info = message.codeInfo ? CodeInfo.toAmino(message.codeInfo) : undefined;
    obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : undefined;
    obj.pinned = message.pinned === false ? undefined : message.pinned;
    return obj;
  },
  fromAminoMsg(object: CodeAminoMsg): Code {
    return Code.fromAmino(object.value);
  },
  toAminoMsg(message: Code): CodeAminoMsg {
    return {
      type: "wasm/Code",
      value: Code.toAmino(message)
    };
  },
  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },
  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },
  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Code",
      value: Code.encode(message).finish()
    };
  }
};
function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: ContractInfo.fromPartial({}),
    contractState: []
  };
}
export const Contract = {
  typeUrl: "/cosmwasm.wasm.v1.Contract",
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    }
    message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractAmino): Contract {
    const message = createBaseContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.contract_info !== undefined && object.contract_info !== null) {
      message.contractInfo = ContractInfo.fromAmino(object.contract_info);
    }
    message.contractState = object.contract_state?.map(e => Model.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Contract): ContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;
    if (message.contractState) {
      obj.contract_state = message.contractState.map(e => e ? Model.toAmino(e) : undefined);
    } else {
      obj.contract_state = message.contractState;
    }
    return obj;
  },
  fromAminoMsg(object: ContractAminoMsg): Contract {
    return Contract.fromAmino(object.value);
  },
  toAminoMsg(message: Contract): ContractAminoMsg {
    return {
      type: "wasm/Contract",
      value: Contract.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },
  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0)
  };
}
export const Sequence = {
  typeUrl: "/cosmwasm.wasm.v1.Sequence",
  encode(message: Sequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
  fromAmino(object: SequenceAmino): Sequence {
    const message = createBaseSequence();
    if (object.id_key !== undefined && object.id_key !== null) {
      message.idKey = bytesFromBase64(object.id_key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: Sequence): SequenceAmino {
    const obj: any = {};
    obj.id_key = message.idKey ? base64FromBytes(message.idKey) : undefined;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SequenceAminoMsg): Sequence {
    return Sequence.fromAmino(object.value);
  },
  toAminoMsg(message: Sequence): SequenceAminoMsg {
    return {
      type: "wasm/Sequence",
      value: Sequence.toAmino(message)
    };
  },
  fromProtoMsg(message: SequenceProtoMsg): Sequence {
    return Sequence.decode(message.value);
  },
  toProto(message: Sequence): Uint8Array {
    return Sequence.encode(message).finish();
  },
  toProtoMsg(message: Sequence): SequenceProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }
};