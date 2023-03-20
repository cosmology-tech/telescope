import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";

/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of related to deposit. */
  params?: Params;

  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signingInfos: SigningInfo[];

  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missedBlocks: ValidatorMissedBlocks[];
}

/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  signing_infos: SigningInfoSDKType[];
  missed_blocks: ValidatorMissedBlocksSDKType[];
}

/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
  /** address is the validator address. */
  address: string;

  /** validator_signing_info represents the signing info of this validator. */
  validatorSigningInfo?: ValidatorSigningInfo;
}

/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoSDKType {
  address: string;
  validator_signing_info?: ValidatorSigningInfoSDKType;
}

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
  /** address is the validator address. */
  address: string;

  /** missed_blocks is an array of missed blocks by the validator. */
  missedBlocks: MissedBlock[];
}

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksSDKType {
  address: string;
  missed_blocks: MissedBlockSDKType[];
}

/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
  /** index is the height at which the block was missed. */
  index: Long;

  /** missed is the missed status. */
  missed: boolean;
}

/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockSDKType {
  index: Long;
  missed: boolean;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    signingInfos: [],
    missedBlocks: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.signingInfos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.missedBlocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          break;

        case 3:
          message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
      signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e: any) => SigningInfo.fromJSON(e)) : [],
      missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.signingInfos) {
      obj.signingInfos = message.signingInfos.map(e => e ? SigningInfo.toJSON(e) : undefined);
    } else {
      obj.signingInfos = [];
    }

    if (message.missedBlocks) {
      obj.missedBlocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toJSON(e) : undefined);
    } else {
      obj.missedBlocks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      signingInfos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromSDK(e)) : [],
      missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => ValidatorMissedBlocks.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);

    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toSDK(e) : undefined);
    } else {
      obj.signing_infos = [];
    }

    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toSDK(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }

    return obj;
  },

  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      signing_infos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e: any) => SigningInfo.fromSDKJSON(e)) : [],
      missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => ValidatorMissedBlocks.fromSDKJSON(e)) : []
    };
  }

};

function createBaseSigningInfo(): SigningInfo {
  return {
    address: "",
    validatorSigningInfo: undefined
  };
}

export const SigningInfo = {
  encode(message: SigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.validatorSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.validatorSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      validatorSigningInfo: isSet(object.validatorSigningInfo) ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo) : undefined
    };
  },

  toJSON(message: SigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.validatorSigningInfo !== undefined && (obj.validatorSigningInfo = message.validatorSigningInfo ? ValidatorSigningInfo.toJSON(message.validatorSigningInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
    return message;
  },

  fromSDK(object: SigningInfoSDKType): SigningInfo {
    return {
      address: object?.address,
      validatorSigningInfo: object.validator_signing_info ? ValidatorSigningInfo.fromSDK(object.validator_signing_info) : undefined
    };
  },

  toSDK(message: SigningInfo): SigningInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.validatorSigningInfo !== undefined && (obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfo.toSDK(message.validatorSigningInfo) : undefined);
    return obj;
  },

  fromSDKJSON(object: any): SigningInfoSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      validator_signing_info: isSet(object.validator_signing_info) ? ValidatorSigningInfo.fromSDKJSON(object.validator_signing_info) : undefined
    };
  }

};

function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    address: "",
    missedBlocks: []
  };
}

export const ValidatorMissedBlocks = {
  encode(message: ValidatorMissedBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorMissedBlocks {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e: any) => MissedBlock.fromJSON(e)) : []
    };
  },

  toJSON(message: ValidatorMissedBlocks): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.missedBlocks) {
      obj.missedBlocks = message.missedBlocks.map(e => e ? MissedBlock.toJSON(e) : undefined);
    } else {
      obj.missedBlocks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missedBlocks = object.missedBlocks?.map(e => MissedBlock.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ValidatorMissedBlocksSDKType): ValidatorMissedBlocks {
    return {
      address: object?.address,
      missedBlocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => MissedBlock.fromSDK(e)) : []
    };
  },

  toSDK(message: ValidatorMissedBlocks): ValidatorMissedBlocksSDKType {
    const obj: any = {};
    obj.address = message.address;

    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toSDK(e) : undefined);
    } else {
      obj.missed_blocks = [];
    }

    return obj;
  },

  fromSDKJSON(object: any): ValidatorMissedBlocksSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e: any) => MissedBlock.fromSDKJSON(e)) : []
    };
  }

};

function createBaseMissedBlock(): MissedBlock {
  return {
    index: Long.ZERO,
    missed: false
  };
}

export const MissedBlock = {
  encode(message: MissedBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).int64(message.index);
    }

    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.int64() as Long);
          break;

        case 2:
          message.missed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MissedBlock {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      missed: isSet(object.missed) ? Boolean(object.missed) : false
    };
  },

  toJSON(message: MissedBlock): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
    message.missed !== undefined && (obj.missed = message.missed);
    return obj;
  },

  fromPartial(object: DeepPartial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.missed = object.missed ?? false;
    return message;
  },

  fromSDK(object: MissedBlockSDKType): MissedBlock {
    return {
      index: object?.index,
      missed: object?.missed
    };
  },

  toSDK(message: MissedBlock): MissedBlockSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.missed = message.missed;
    return obj;
  },

  fromSDKJSON(object: any): MissedBlockSDKType {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
      missed: isSet(object.missed) ? Boolean(object.missed) : false
    };
  }

};