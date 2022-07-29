import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BidID } from "./bid";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact } from "@osmonauts/helpers";
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

    default:
      return "UNKNOWN";
  }
}

/** LeaseID stores bid details of lease */
export interface LeaseID {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}

/** Lease stores LeaseID, state of lease and price */
export interface Lease {
  leaseId: LeaseID;
  state: Lease_State;
  price: DecCoin;
  createdAt: Long;
  closedOn: Long;
}

/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}

/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
  bidId: BidID;
}

/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {}

/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
  bidId: LeaseID;
}

/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {}

/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
  leaseId: LeaseID;
}

/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {}

function createBaseLeaseID(): LeaseID {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}

export const LeaseID = {
  encode(message: LeaseID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
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

  fromJSON(object: any): LeaseID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromString(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },

  toJSON(message: LeaseID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeaseID>, I>>(object: I): LeaseID {
    const message = createBaseLeaseID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  }

};

function createBaseLease(): Lease {
  return {
    leaseId: undefined,
    state: 0,
    price: undefined,
    createdAt: Long.ZERO,
    closedOn: Long.ZERO
  };
}

export const Lease = {
  encode(message: Lease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }

    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }

    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }

    if (!message.closedOn.isZero()) {
      writer.uint32(40).int64(message.closedOn);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.createdAt = (reader.int64() as Long);
          break;

        case 5:
          message.closedOn = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Lease {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined,
      state: isSet(object.state) ? lease_StateFromJSON(object.state) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      createdAt: isSet(object.createdAt) ? Long.fromString(object.createdAt) : Long.ZERO,
      closedOn: isSet(object.closedOn) ? Long.fromString(object.closedOn) : Long.ZERO
    };
  },

  toJSON(message: Lease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    message.state !== undefined && (obj.state = lease_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    message.closedOn !== undefined && (obj.closedOn = (message.closedOn || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Lease>, I>>(object: I): Lease {
    const message = createBaseLease();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.closedOn = object.closedOn !== undefined && object.closedOn !== null ? Long.fromValue(object.closedOn) : Long.ZERO;
    return message;
  }

};

function createBaseLeaseFilters(): LeaseFilters {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}

export const LeaseFilters = {
  encode(message: LeaseFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseFilters();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
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

  fromJSON(object: any): LeaseFilters {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromString(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },

  toJSON(message: LeaseFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeaseFilters>, I>>(object: I): LeaseFilters {
    const message = createBaseLeaseFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  }

};

function createBaseMsgCreateLease(): MsgCreateLease {
  return {
    bidId: undefined
  };
}

export const MsgCreateLease = {
  encode(message: MsgCreateLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgCreateLease {
    return {
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined
    };
  },

  toJSON(message: MsgCreateLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLease>, I>>(object: I): MsgCreateLease {
    const message = createBaseMsgCreateLease();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  }

};

function createBaseMsgCreateLeaseResponse(): MsgCreateLeaseResponse {
  return {};
}

export const MsgCreateLeaseResponse = {
  encode(_: MsgCreateLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgCreateLeaseResponse {
    return {};
  },

  toJSON(_: MsgCreateLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLeaseResponse>, I>>(_: I): MsgCreateLeaseResponse {
    const message = createBaseMsgCreateLeaseResponse();
    return message;
  }

};

function createBaseMsgWithdrawLease(): MsgWithdrawLease {
  return {
    bidId: undefined
  };
}

export const MsgWithdrawLease = {
  encode(message: MsgWithdrawLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgWithdrawLease {
    return {
      bidId: isSet(object.bidId) ? LeaseID.fromJSON(object.bidId) : undefined
    };
  },

  toJSON(message: MsgWithdrawLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? LeaseID.toJSON(message.bidId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLease>, I>>(object: I): MsgWithdrawLease {
    const message = createBaseMsgWithdrawLease();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? LeaseID.fromPartial(object.bidId) : undefined;
    return message;
  }

};

function createBaseMsgWithdrawLeaseResponse(): MsgWithdrawLeaseResponse {
  return {};
}

export const MsgWithdrawLeaseResponse = {
  encode(_: MsgWithdrawLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgWithdrawLeaseResponse {
    return {};
  },

  toJSON(_: MsgWithdrawLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLeaseResponse>, I>>(_: I): MsgWithdrawLeaseResponse {
    const message = createBaseMsgWithdrawLeaseResponse();
    return message;
  }

};

function createBaseMsgCloseLease(): MsgCloseLease {
  return {
    leaseId: undefined
  };
}

export const MsgCloseLease = {
  encode(message: MsgCloseLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgCloseLease {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined
    };
  },

  toJSON(message: MsgCloseLease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLease>, I>>(object: I): MsgCloseLease {
    const message = createBaseMsgCloseLease();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    return message;
  }

};

function createBaseMsgCloseLeaseResponse(): MsgCloseLeaseResponse {
  return {};
}

export const MsgCloseLeaseResponse = {
  encode(_: MsgCloseLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgCloseLeaseResponse {
    return {};
  },

  toJSON(_: MsgCloseLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLeaseResponse>, I>>(_: I): MsgCloseLeaseResponse {
    const message = createBaseMsgCloseLeaseResponse();
    return message;
  }

};