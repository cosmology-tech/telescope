//@ts-nocheck
/* eslint-disable */
import { ClaimsRecordAddress } from "./claims";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "evmos.claims.v1";

/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;

  /** list of claim records with the corresponding airdrop recipient */
  claimsRecords: ClaimsRecordAddress[];
}

/** Params defines the claims module's parameters. */
export interface Params {
  /** enable claiming process */
  enableClaims: boolean;

  /** timestamp of the airdrop start */
  airdropStartTime?: Timestamp;

  /** duration until decay of claimable tokens begin */
  durationUntilDecay?: Duration;

  /** duration of the token claim decay period */
  durationOfDecay?: Duration;

  /** denom of claimable coin */
  claimsDenom: string;

  /**
   * list of authorized channel identifiers that can perform address
   * attestations via IBC.
   */
  authorizedChannels: string[];

  /** list of channel identifiers from EVM compatible chains */
  evmChannels: string[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    claimsRecords: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.claimsRecords) {
      ClaimsRecordAddress.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.claimsRecords.push(ClaimsRecordAddress.decode(reader, reader.uint32()));
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
      claimsRecords: Array.isArray(object?.claimsRecords) ? object.claimsRecords.map((e: any) => ClaimsRecordAddress.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.claimsRecords) {
      obj.claimsRecords = message.claimsRecords.map(e => e ? ClaimsRecordAddress.toJSON(e) : undefined);
    } else {
      obj.claimsRecords = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.claimsRecords = object.claimsRecords?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      claims_records: Array.isArray(object?.claims_records) ? object.claims_records.map((e: any) => ClaimsRecordAddress.fromSDKJSON(e)) : []
    };
  }

};

function createBaseParams(): Params {
  return {
    enableClaims: false,
    airdropStartTime: undefined,
    durationUntilDecay: undefined,
    durationOfDecay: undefined,
    claimsDenom: "",
    authorizedChannels: [],
    evmChannels: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableClaims === true) {
      writer.uint32(8).bool(message.enableClaims);
    }

    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(message.airdropStartTime, writer.uint32(18).fork()).ldelim();
    }

    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }

    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }

    if (message.claimsDenom !== "") {
      writer.uint32(42).string(message.claimsDenom);
    }

    for (const v of message.authorizedChannels) {
      writer.uint32(50).string(v!);
    }

    for (const v of message.evmChannels) {
      writer.uint32(58).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enableClaims = reader.bool();
          break;

        case 2:
          message.airdropStartTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;

        case 5:
          message.claimsDenom = reader.string();
          break;

        case 6:
          message.authorizedChannels.push(reader.string());
          break;

        case 7:
          message.evmChannels.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      enableClaims: isSet(object.enableClaims) ? Boolean(object.enableClaims) : false,
      airdropStartTime: isSet(object.airdropStartTime) ? fromJsonTimestamp(object.airdropStartTime) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
      claimsDenom: isSet(object.claimsDenom) ? String(object.claimsDenom) : "",
      authorizedChannels: Array.isArray(object?.authorizedChannels) ? object.authorizedChannels.map((e: any) => String(e)) : [],
      evmChannels: Array.isArray(object?.evmChannels) ? object.evmChannels.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableClaims !== undefined && (obj.enableClaims = message.enableClaims);
    message.airdropStartTime !== undefined && (obj.airdropStartTime = fromTimestamp(message.airdropStartTime).toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimsDenom !== undefined && (obj.claimsDenom = message.claimsDenom);

    if (message.authorizedChannels) {
      obj.authorizedChannels = message.authorizedChannels.map(e => e);
    } else {
      obj.authorizedChannels = [];
    }

    if (message.evmChannels) {
      obj.evmChannels = message.evmChannels.map(e => e);
    } else {
      obj.evmChannels = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableClaims = object.enableClaims ?? false;
    message.airdropStartTime = object.airdropStartTime !== undefined && object.airdropStartTime !== null ? Timestamp.fromPartial(object.airdropStartTime) : undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimsDenom = object.claimsDenom ?? "";
    message.authorizedChannels = object.authorizedChannels?.map(e => e) || [];
    message.evmChannels = object.evmChannels?.map(e => e) || [];
    return message;
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      enable_claims: isSet(object.enable_claims) ? Boolean(object.enable_claims) : false,
      airdrop_start_time: isSet(object.airdrop_start_time) ? fromJsonTimestamp(object.airdrop_start_time) : undefined,
      duration_until_decay: isSet(object.duration_until_decay) ? Duration.fromSDKJSON(object.duration_until_decay) : undefined,
      duration_of_decay: isSet(object.duration_of_decay) ? Duration.fromSDKJSON(object.duration_of_decay) : undefined,
      claims_denom: isSet(object.claims_denom) ? String(object.claims_denom) : "",
      authorized_channels: Array.isArray(object?.authorized_channels) ? object.authorized_channels.map((e: any) => String(e)) : [],
      evm_channels: Array.isArray(object?.evm_channels) ? object.evm_channels.map((e: any) => String(e)) : []
    };
  }

};