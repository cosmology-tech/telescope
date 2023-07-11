//@ts-nocheck
/* eslint-disable */
import { Minter, Params } from "./mint";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.mint.v1beta1";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** minter is an abstraction for holding current rewards information. */
  minter: Minter;
  /** params defines all the paramaters of the mint module. */
  params: Params;
  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   */
  reductionStartedEpoch: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    minter: Minter.fromPartial({}),
    params: Params.fromPartial({}),
    reductionStartedEpoch: Long.ZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (!message.reductionStartedEpoch.isZero()) {
      writer.uint32(24).int64(message.reductionStartedEpoch);
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
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.reductionStartedEpoch = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.minter)) obj.minter = Minter.fromJSON(object.minter);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.reductionStartedEpoch)) obj.reductionStartedEpoch = Long.fromValue(object.reductionStartedEpoch);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.reductionStartedEpoch !== undefined && (obj.reductionStartedEpoch = (message.reductionStartedEpoch || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : Minter.fromPartial({});
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : Params.fromPartial({});
    message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? Long.fromValue(object.reductionStartedEpoch) : Long.ZERO;
    return message;
  }
};