import { ClaimsRecordAddress, ClaimsRecordAddressAmino } from "./claims";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
/** GenesisState define the claims module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** list of claim records with the corresponding airdrop recipient */
  claimsRecords: ClaimsRecordAddress[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.claims.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState define the claims module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params: ParamsAmino;
  /** list of claim records with the corresponding airdrop recipient */
  claims_records: ClaimsRecordAddressAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.claims.v1.GenesisState";
  value: GenesisStateAmino;
}
/** Params defines the claims module's parameters. */
export interface Params {
  /** enable claiming process */
  enableClaims: boolean;
  /** timestamp of the airdrop start */
  airdropStartTime: Date;
  /** duration until decay of claimable tokens begin */
  durationUntilDecay: Duration;
  /** duration of the token claim decay period */
  durationOfDecay: Duration;
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
export interface ParamsProtoMsg {
  typeUrl: "/evmos.claims.v1.Params";
  value: Uint8Array;
}
/** Params defines the claims module's parameters. */
export interface ParamsAmino {
  /** enable claiming process */
  enable_claims: boolean;
  /** timestamp of the airdrop start */
  airdrop_start_time: string;
  /** duration until decay of claimable tokens begin */
  duration_until_decay: DurationAmino;
  /** duration of the token claim decay period */
  duration_of_decay: DurationAmino;
  /** denom of claimable coin */
  claims_denom: string;
  /**
   * list of authorized channel identifiers that can perform address
   * attestations via IBC.
   */
  authorized_channels: string[];
  /** list of channel identifiers from EVM compatible chains */
  evm_channels: string[];
}
export interface ParamsAminoMsg {
  type: "/evmos.claims.v1.Params";
  value: ParamsAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    claimsRecords: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.claims.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.claimsRecords) {
      ClaimsRecordAddress.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.claimsRecords.push(ClaimsRecordAddress.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.claimsRecords = object.claimsRecords?.map(e => ClaimsRecordAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.claimsRecords = object.claims_records?.map(e => ClaimsRecordAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.claimsRecords) {
      obj.claims_records = message.claimsRecords.map(e => e ? ClaimsRecordAddress.toAmino(e) : undefined);
    } else {
      obj.claims_records = message.claimsRecords;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableClaims: false,
    airdropStartTime: new Date(),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimsDenom: "",
    authorizedChannels: [],
    evmChannels: []
  };
}
export const Params = {
  typeUrl: "/evmos.claims.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableClaims === true) {
      writer.uint32(8).bool(message.enableClaims);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableClaims = reader.bool();
          break;
        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableClaims = object.enableClaims ?? false;
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimsDenom = object.claimsDenom ?? "";
    message.authorizedChannels = object.authorizedChannels?.map(e => e) || [];
    message.evmChannels = object.evmChannels?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_claims !== undefined && object.enable_claims !== null) {
      message.enableClaims = object.enable_claims;
    }
    if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
      message.airdropStartTime = fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time));
    }
    if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
      message.durationUntilDecay = Duration.fromAmino(object.duration_until_decay);
    }
    if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
      message.durationOfDecay = Duration.fromAmino(object.duration_of_decay);
    }
    if (object.claims_denom !== undefined && object.claims_denom !== null) {
      message.claimsDenom = object.claims_denom;
    }
    message.authorizedChannels = object.authorized_channels?.map(e => e) || [];
    message.evmChannels = object.evm_channels?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_claims = message.enableClaims === false ? undefined : message.enableClaims;
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claims_denom = message.claimsDenom === "" ? undefined : message.claimsDenom;
    if (message.authorizedChannels) {
      obj.authorized_channels = message.authorizedChannels.map(e => e);
    } else {
      obj.authorized_channels = message.authorizedChannels;
    }
    if (message.evmChannels) {
      obj.evm_channels = message.evmChannels.map(e => e);
    } else {
      obj.evm_channels = message.evmChannels;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};