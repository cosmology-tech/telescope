/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../osmosis/superfluid/params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "../../osmosis/superfluid/superfluid";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params: Params;
  superfluidAssets: SuperfluidAsset[];
  osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
  intermediaryAccounts: SuperfluidIntermediaryAccount[];
  intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    superfluidAssets: [],
    osmoEquivalentMultipliers: [],
    intermediaryAccounts: [],
    intemediaryAccountConnections: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.superfluidAssets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.osmoEquivalentMultipliers) {
      OsmoEquivalentMultiplierRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.intermediaryAccounts) {
      SuperfluidIntermediaryAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.intemediaryAccountConnections) {
      LockIdIntermediaryAccountConnection.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.superfluidAssets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;

        case 3:
          message.osmoEquivalentMultipliers.push(OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
          break;

        case 4:
          message.intermediaryAccounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
          break;

        case 5:
          message.intemediaryAccountConnections.push(LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
      superfluidAssets: Array.isArray(object?.superfluidAssets) ? object.superfluidAssets.map((e: any) => SuperfluidAsset.fromJSON(e)) : [],
      osmoEquivalentMultipliers: Array.isArray(object?.osmoEquivalentMultipliers) ? object.osmoEquivalentMultipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
      intermediaryAccounts: Array.isArray(object?.intermediaryAccounts) ? object.intermediaryAccounts.map((e: any) => SuperfluidIntermediaryAccount.fromJSON(e)) : [],
      intemediaryAccountConnections: Array.isArray(object?.intemediaryAccountConnections) ? object.intemediaryAccountConnections.map((e: any) => LockIdIntermediaryAccountConnection.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.superfluidAssets) {
      obj.superfluidAssets = message.superfluidAssets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.superfluidAssets = [];
    }

    if (message.osmoEquivalentMultipliers) {
      obj.osmoEquivalentMultipliers = message.osmoEquivalentMultipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
    } else {
      obj.osmoEquivalentMultipliers = [];
    }

    if (message.intermediaryAccounts) {
      obj.intermediaryAccounts = message.intermediaryAccounts.map(e => e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined);
    } else {
      obj.intermediaryAccounts = [];
    }

    if (message.intemediaryAccountConnections) {
      obj.intemediaryAccountConnections = message.intemediaryAccountConnections.map(e => e ? LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
    } else {
      obj.intemediaryAccountConnections = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.superfluidAssets = object.superfluidAssets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    message.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
    message.intermediaryAccounts = object.intermediaryAccounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
    message.intemediaryAccountConnections = object.intemediaryAccountConnections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}