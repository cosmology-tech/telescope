import { MsgStoreCode, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractSDKType } from "./tx";
import { Params, ParamsSDKType, CodeInfo, CodeInfoSDKType, ContractInfo, ContractInfoSDKType, Model, ModelSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export const protobufPackage = "cosmwasm.wasm.v1";

/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  genMsgs: GenesisState_GenMsgs[];
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
  codeId: Long;
  codeInfo: CodeInfo;
  codeBytes: Uint8Array;

  /** Pinned to wasmvm cache */
  pinned: boolean;
}

/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
  code_id: Long;
  code_info: CodeInfoSDKType;
  code_bytes: Uint8Array;

  /** Pinned to wasmvm cache */
  pinned: boolean;
}

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo: ContractInfo;
  contractState: Model[];
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
  value: Long;
}

/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
  id_key: Uint8Array;
  value: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    codes: [],
    contracts: [],
    sequences: [],
    genMsgs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : [],
      genMsgs: Array.isArray(object?.genMsgs) ? object.genMsgs.map((e: any) => GenesisState_GenMsgs.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toJSON(e) : undefined);
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }

    if (message.genMsgs) {
      obj.genMsgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toJSON(e) : undefined);
    } else {
      obj.genMsgs = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    message.genMsgs = object.genMsgs?.map(e => GenesisState_GenMsgs.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined,
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromSDK(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromSDK(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromSDK(e)) : [],
      genMsgs: Array.isArray(object?.gen_msgs) ? object.gen_msgs.map((e: any) => GenesisState_GenMsgs.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);

    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toSDK(e) : undefined);
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toSDK(e) : undefined);
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toSDK(e) : undefined);
    } else {
      obj.sequences = [];
    }

    if (message.genMsgs) {
      obj.gen_msgs = message.genMsgs.map(e => e ? GenesisState_GenMsgs.toSDK(e) : undefined);
    } else {
      obj.gen_msgs = [];
    }

    return obj;
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
  encode(message: GenesisState_GenMsgs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_GenMsgs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): GenesisState_GenMsgs {
    return {
      storeCode: isSet(object.storeCode) ? MsgStoreCode.fromJSON(object.storeCode) : undefined,
      instantiateContract: isSet(object.instantiateContract) ? MsgInstantiateContract.fromJSON(object.instantiateContract) : undefined,
      executeContract: isSet(object.executeContract) ? MsgExecuteContract.fromJSON(object.executeContract) : undefined
    };
  },

  toJSON(message: GenesisState_GenMsgs): unknown {
    const obj: any = {};
    message.storeCode !== undefined && (obj.storeCode = message.storeCode ? MsgStoreCode.toJSON(message.storeCode) : undefined);
    message.instantiateContract !== undefined && (obj.instantiateContract = message.instantiateContract ? MsgInstantiateContract.toJSON(message.instantiateContract) : undefined);
    message.executeContract !== undefined && (obj.executeContract = message.executeContract ? MsgExecuteContract.toJSON(message.executeContract) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState_GenMsgs>): GenesisState_GenMsgs {
    const message = createBaseGenesisState_GenMsgs();
    message.storeCode = object.storeCode !== undefined && object.storeCode !== null ? MsgStoreCode.fromPartial(object.storeCode) : undefined;
    message.instantiateContract = object.instantiateContract !== undefined && object.instantiateContract !== null ? MsgInstantiateContract.fromPartial(object.instantiateContract) : undefined;
    message.executeContract = object.executeContract !== undefined && object.executeContract !== null ? MsgExecuteContract.fromPartial(object.executeContract) : undefined;
    return message;
  },

  fromSDK(object: GenesisState_GenMsgsSDKType): GenesisState_GenMsgs {
    return {
      storeCode: isSet(object.store_code) ? MsgStoreCode.fromSDK(object.store_code) : undefined,
      instantiateContract: isSet(object.instantiate_contract) ? MsgInstantiateContract.fromSDK(object.instantiate_contract) : undefined,
      executeContract: isSet(object.execute_contract) ? MsgExecuteContract.fromSDK(object.execute_contract) : undefined
    };
  },

  toSDK(message: GenesisState_GenMsgs): GenesisState_GenMsgsSDKType {
    const obj: any = {};
    message.storeCode !== undefined && (obj.store_code = message.storeCode ? MsgStoreCode.toSDK(message.storeCode) : undefined);
    message.instantiateContract !== undefined && (obj.instantiate_contract = message.instantiateContract ? MsgInstantiateContract.toSDK(message.instantiateContract) : undefined);
    message.executeContract !== undefined && (obj.execute_contract = message.executeContract ? MsgExecuteContract.toSDK(message.executeContract) : undefined);
    return obj;
  }

};

function createBaseCode(): Code {
  return {
    codeId: Long.UZERO,
    codeInfo: undefined,
    codeBytes: new Uint8Array(),
    pinned: false
  };
}

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
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

  fromJSON(object: any): Code {
    return {
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : Long.UZERO,
      codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(),
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false
    };
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined && (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },

  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },

  fromSDK(object: CodeSDKType): Code {
    return {
      codeId: isSet(object.code_id) ? object.code_id : Long.UZERO,
      codeInfo: isSet(object.code_info) ? CodeInfo.fromSDK(object.code_info) : undefined,
      codeBytes: isSet(object.code_bytes) ? object.code_bytes : new Uint8Array(),
      pinned: isSet(object.pinned) ? object.pinned : false
    };
  },

  toSDK(message: Code): CodeSDKType {
    const obj: any = {};
    message.codeId !== undefined && (obj.code_id = message.codeId);
    message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? CodeInfo.toSDK(message.codeInfo) : undefined);
    message.codeBytes !== undefined && (obj.code_bytes = message.codeBytes);
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  }

};

function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: undefined,
    contractState: []
  };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): Contract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object?.contractState) ? object.contractState.map((e: any) => Model.fromJSON(e)) : []
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);

    if (message.contractState) {
      obj.contractState = message.contractState.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.contractState = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ContractSDKType): Contract {
    return {
      contractAddress: isSet(object.contract_address) ? object.contract_address : "",
      contractInfo: isSet(object.contract_info) ? ContractInfo.fromSDK(object.contract_info) : undefined,
      contractState: Array.isArray(object?.contract_state) ? object.contract_state.map((e: any) => Model.fromSDK(e)) : []
    };
  },

  toSDK(message: Contract): ContractSDKType {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contract_address = message.contractAddress);
    message.contractInfo !== undefined && (obj.contract_info = message.contractInfo ? ContractInfo.toSDK(message.contractInfo) : undefined);

    if (message.contractState) {
      obj.contract_state = message.contractState.map(e => e ? Model.toSDK(e) : undefined);
    } else {
      obj.contract_state = [];
    }

    return obj;
  }

};

function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: Long.UZERO
  };
}

export const Sequence = {
  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;

        case 2:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Sequence {
    return {
      idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
      value: isSet(object.value) ? Long.fromString(object.value) : Long.UZERO
    };
  },

  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.idKey !== undefined && (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },

  fromSDK(object: SequenceSDKType): Sequence {
    return {
      idKey: isSet(object.id_key) ? object.id_key : new Uint8Array(),
      value: isSet(object.value) ? object.value : Long.UZERO
    };
  },

  toSDK(message: Sequence): SequenceSDKType {
    const obj: any = {};
    message.idKey !== undefined && (obj.id_key = message.idKey);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  }

};