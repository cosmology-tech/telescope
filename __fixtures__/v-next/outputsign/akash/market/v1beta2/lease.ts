import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType } from "./bid";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "akash.market.v1beta2";
/** State is an enum which refers to state of lease */
export enum Lease_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - LeaseActive denotes state for lease active */
  active = 1,
  /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
  insufficient_funds = 2,
  /** closed - LeaseClosed denotes state for lease closed */
  closed = 3,
  UNRECOGNIZED = -1,
}
export const Lease_StateSDKType = Lease_State;
export function lease_StateFromJSON(object: any): Lease_State {
  switch (object) {
    case 0:
    case "invalid":
      return Lease_State.invalid;
    case 1:
    case "active":
      return Lease_State.active;
    case 2:
    case "insufficient_funds":
      return Lease_State.insufficient_funds;
    case 3:
    case "closed":
      return Lease_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lease_State.UNRECOGNIZED;
  }
}
export function lease_StateToJSON(object: Lease_State): string {
  switch (object) {
    case Lease_State.invalid:
      return "invalid";
    case Lease_State.active:
      return "active";
    case Lease_State.insufficient_funds:
      return "insufficient_funds";
    case Lease_State.closed:
      return "closed";
    case Lease_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LeaseID stores bid details of lease */
export interface LeaseID {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface LeaseIDProtoMsg {
  typeUrl: "/akash.market.v1beta2.LeaseID";
  value: Uint8Array;
}
/** LeaseID stores bid details of lease */
export interface LeaseIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Lease stores LeaseID, state of lease and price */
export interface Lease {
  leaseId: LeaseID;
  state: Lease_State;
  price: DecCoin;
  createdAt: bigint;
  closedOn: bigint;
}
export interface LeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.Lease";
  value: Uint8Array;
}
/** Lease stores LeaseID, state of lease and price */
export interface LeaseSDKType {
  lease_id: LeaseIDSDKType;
  state: Lease_State;
  price: DecCoinSDKType;
  created_at: bigint;
  closed_on: bigint;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface LeaseFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta2.LeaseFilters";
  value: Uint8Array;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFiltersSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
  bidId: BidID;
}
export interface MsgCreateLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateLease";
  value: Uint8Array;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLeaseSDKType {
  bid_id: BidIDSDKType;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {}
export interface MsgCreateLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse";
  value: Uint8Array;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponseSDKType {}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
  bidId: LeaseID;
}
export interface MsgWithdrawLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLease";
  value: Uint8Array;
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLeaseSDKType {
  bid_id: LeaseIDSDKType;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {}
export interface MsgWithdrawLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse";
  value: Uint8Array;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponseSDKType {}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
  leaseId: LeaseID;
}
export interface MsgCloseLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseLease";
  value: Uint8Array;
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLeaseSDKType {
  lease_id: LeaseIDSDKType;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {}
export interface MsgCloseLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse";
  value: Uint8Array;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponseSDKType {}
function createBaseLeaseID(): LeaseID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
export const LeaseID = {
  typeUrl: "/akash.market.v1beta2.LeaseID",
  encode(message: LeaseID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeaseID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LeaseIDProtoMsg): LeaseID {
    return LeaseID.decode(message.value);
  },
  toProto(message: LeaseID): Uint8Array {
    return LeaseID.encode(message).finish();
  },
  toProtoMsg(message: LeaseID): LeaseIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.LeaseID",
      value: LeaseID.encode(message).finish()
    };
  }
};
function createBaseLease(): Lease {
  return {
    leaseId: LeaseID.fromPartial({}),
    state: 0,
    price: DecCoin.fromPartial({}),
    createdAt: BigInt(0),
    closedOn: BigInt(0)
  };
}
export const Lease = {
  typeUrl: "/akash.market.v1beta2.Lease",
  encode(message: Lease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (message.closedOn !== BigInt(0)) {
      writer.uint32(40).int64(message.closedOn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Lease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        case 5:
          message.closedOn = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LeaseProtoMsg): Lease {
    return Lease.decode(message.value);
  },
  toProto(message: Lease): Uint8Array {
    return Lease.encode(message).finish();
  },
  toProtoMsg(message: Lease): LeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Lease",
      value: Lease.encode(message).finish()
    };
  }
};
function createBaseLeaseFilters(): LeaseFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}
export const LeaseFilters = {
  typeUrl: "/akash.market.v1beta2.LeaseFilters",
  encode(message: LeaseFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeaseFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LeaseFiltersProtoMsg): LeaseFilters {
    return LeaseFilters.decode(message.value);
  },
  toProto(message: LeaseFilters): Uint8Array {
    return LeaseFilters.encode(message).finish();
  },
  toProtoMsg(message: LeaseFilters): LeaseFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.LeaseFilters",
      value: LeaseFilters.encode(message).finish()
    };
  }
};
function createBaseMsgCreateLease(): MsgCreateLease {
  return {
    bidId: BidID.fromPartial({})
  };
}
export const MsgCreateLease = {
  typeUrl: "/akash.market.v1beta2.MsgCreateLease",
  encode(message: MsgCreateLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgCreateLeaseProtoMsg): MsgCreateLease {
    return MsgCreateLease.decode(message.value);
  },
  toProto(message: MsgCreateLease): Uint8Array {
    return MsgCreateLease.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLease): MsgCreateLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateLease",
      value: MsgCreateLease.encode(message).finish()
    };
  }
};
function createBaseMsgCreateLeaseResponse(): MsgCreateLeaseResponse {
  return {};
}
export const MsgCreateLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
  encode(_: MsgCreateLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgCreateLeaseResponseProtoMsg): MsgCreateLeaseResponse {
    return MsgCreateLeaseResponse.decode(message.value);
  },
  toProto(message: MsgCreateLeaseResponse): Uint8Array {
    return MsgCreateLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLeaseResponse): MsgCreateLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
      value: MsgCreateLeaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLease(): MsgWithdrawLease {
  return {
    bidId: LeaseID.fromPartial({})
  };
}
export const MsgWithdrawLease = {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
  encode(message: MsgWithdrawLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgWithdrawLeaseProtoMsg): MsgWithdrawLease {
    return MsgWithdrawLease.decode(message.value);
  },
  toProto(message: MsgWithdrawLease): Uint8Array {
    return MsgWithdrawLease.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLease): MsgWithdrawLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
      value: MsgWithdrawLease.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLeaseResponse(): MsgWithdrawLeaseResponse {
  return {};
}
export const MsgWithdrawLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
  encode(_: MsgWithdrawLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgWithdrawLeaseResponseProtoMsg): MsgWithdrawLeaseResponse {
    return MsgWithdrawLeaseResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawLeaseResponse): Uint8Array {
    return MsgWithdrawLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
      value: MsgWithdrawLeaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseLease(): MsgCloseLease {
  return {
    leaseId: LeaseID.fromPartial({})
  };
}
export const MsgCloseLease = {
  typeUrl: "/akash.market.v1beta2.MsgCloseLease",
  encode(message: MsgCloseLease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseLease {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgCloseLeaseProtoMsg): MsgCloseLease {
    return MsgCloseLease.decode(message.value);
  },
  toProto(message: MsgCloseLease): Uint8Array {
    return MsgCloseLease.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseLease): MsgCloseLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseLease",
      value: MsgCloseLease.encode(message).finish()
    };
  }
};
function createBaseMsgCloseLeaseResponse(): MsgCloseLeaseResponse {
  return {};
}
export const MsgCloseLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
  encode(_: MsgCloseLeaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseLeaseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgCloseLeaseResponseProtoMsg): MsgCloseLeaseResponse {
    return MsgCloseLeaseResponse.decode(message.value);
  },
  toProto(message: MsgCloseLeaseResponse): Uint8Array {
    return MsgCloseLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseLeaseResponse): MsgCloseLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
      value: MsgCloseLeaseResponse.encode(message).finish()
    };
  }
};