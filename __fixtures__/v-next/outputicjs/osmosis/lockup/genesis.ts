import { PeriodLock, SyntheticLock } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  lastLockId: bigint;
  locks: PeriodLock[];
  syntheticLocks: SyntheticLock[];
}
function createBaseGenesisState(): GenesisState {
  return {
    lastLockId: BigInt(0),
    locks: [],
    syntheticLocks: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.lockup.GenesisState",
  aminoType: "osmosis/lockup/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastLockId !== BigInt(0)) {
      writer.uint32(8).uint64(message.lastLockId);
    }
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.lastLockId = reader.uint64();
          break;
        case 2:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
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
    message.lastLockId = object.lastLockId !== undefined && object.lastLockId !== null ? BigInt(object.lastLockId.toString()) : BigInt(0);
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  }
};