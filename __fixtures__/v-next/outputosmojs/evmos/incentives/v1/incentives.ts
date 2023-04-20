import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.incentives.v1";
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface Incentive {
  /** contract address */
  contract: string;
  /** denoms and percentage of rewards to be allocated */
  allocations: DecCoin[];
  /** number of remaining epochs */
  epochs: number;
  /** distribution start time */
  startTime?: Date;
  /** cumulative gas spent by all gasmeters of the incentive during the epoch */
  totalGas: bigint;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveSDKType {
  contract: string;
  allocations: DecCoinSDKType[];
  epochs: number;
  start_time?: Date;
  total_gas: bigint;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeter {
  /** hex address of the incentivized contract */
  contract: string;
  /** participant address that interacts with the incentive */
  participant: string;
  /** cumulative gas spent during the epoch */
  cumulativeGas: bigint;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeterSDKType {
  contract: string;
  participant: string;
  cumulative_gas: bigint;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address */
  contract: string;
  /** denoms and percentage of rewards to be allocated */
  allocations: DecCoin[];
  /** number of remaining epochs */
  epochs: number;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposalSDKType {
  title: string;
  description: string;
  contract: string;
  allocations: DecCoinSDKType[];
  epochs: number;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address */
  contract: string;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposalSDKType {
  title: string;
  description: string;
  contract: string;
}
function createBaseIncentive(): Incentive {
  return {
    contract: "",
    allocations: [],
    epochs: 0,
    startTime: undefined,
    totalGas: BigInt("0")
  };
}
export const Incentive = {
  encode(message: Incentive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    for (const v of message.allocations) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.epochs !== 0) {
      writer.uint32(24).uint32(message.epochs);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.totalGas !== BigInt(0)) {
      writer.uint32(40).uint64(Long.fromString(message.totalGas.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Incentive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.allocations.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.epochs = reader.uint32();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.totalGas = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Incentive {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromJSON(e)) : [],
      epochs: isSet(object.epochs) ? Number(object.epochs) : 0,
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined,
      totalGas: isSet(object.totalGas) ? BigInt(object.totalGas.toString()) : BigInt("0")
    };
  },
  toJSON(message: Incentive): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.allocations = [];
    }
    message.epochs !== undefined && (obj.epochs = Math.round(message.epochs));
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.totalGas !== undefined && (obj.totalGas = (message.totalGas || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Incentive>): Incentive {
    const message = createBaseIncentive();
    message.contract = object.contract ?? "";
    message.allocations = object.allocations?.map(e => DecCoin.fromPartial(e)) || [];
    message.epochs = object.epochs ?? 0;
    message.startTime = object.startTime ?? undefined;
    message.totalGas = object.totalGas !== undefined && object.totalGas !== null ? BigInt(object.totalGas.toString()) : BigInt("0");
    return message;
  },
  fromSDK(object: IncentiveSDKType): Incentive {
    return {
      contract: object?.contract,
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromSDK(e)) : [],
      epochs: object?.epochs,
      startTime: object.start_time ?? undefined,
      totalGas: object?.total_gas
    };
  },
  fromSDKJSON(object: any): IncentiveSDKType {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      epochs: isSet(object.epochs) ? Number(object.epochs) : 0,
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined,
      total_gas: isSet(object.total_gas) ? BigInt(object.total_gas.toString()) : BigInt("0")
    };
  },
  toSDK(message: Incentive): IncentiveSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.allocations = [];
    }
    obj.epochs = message.epochs;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    obj.total_gas = message.totalGas;
    return obj;
  }
};
function createBaseGasMeter(): GasMeter {
  return {
    contract: "",
    participant: "",
    cumulativeGas: BigInt("0")
  };
}
export const GasMeter = {
  encode(message: GasMeter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }
    if (message.cumulativeGas !== BigInt(0)) {
      writer.uint32(24).uint64(Long.fromString(message.cumulativeGas.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GasMeter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasMeter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.participant = reader.string();
          break;
        case 3:
          message.cumulativeGas = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasMeter {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      participant: isSet(object.participant) ? String(object.participant) : "",
      cumulativeGas: isSet(object.cumulativeGas) ? BigInt(object.cumulativeGas.toString()) : BigInt("0")
    };
  },
  toJSON(message: GasMeter): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.participant !== undefined && (obj.participant = message.participant);
    message.cumulativeGas !== undefined && (obj.cumulativeGas = (message.cumulativeGas || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GasMeter>): GasMeter {
    const message = createBaseGasMeter();
    message.contract = object.contract ?? "";
    message.participant = object.participant ?? "";
    message.cumulativeGas = object.cumulativeGas !== undefined && object.cumulativeGas !== null ? BigInt(object.cumulativeGas.toString()) : BigInt("0");
    return message;
  },
  fromSDK(object: GasMeterSDKType): GasMeter {
    return {
      contract: object?.contract,
      participant: object?.participant,
      cumulativeGas: object?.cumulative_gas
    };
  },
  fromSDKJSON(object: any): GasMeterSDKType {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      participant: isSet(object.participant) ? String(object.participant) : "",
      cumulative_gas: isSet(object.cumulative_gas) ? BigInt(object.cumulative_gas.toString()) : BigInt("0")
    };
  },
  toSDK(message: GasMeter): GasMeterSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    obj.participant = message.participant;
    obj.cumulative_gas = message.cumulativeGas;
    return obj;
  }
};
function createBaseRegisterIncentiveProposal(): RegisterIncentiveProposal {
  return {
    title: "",
    description: "",
    contract: "",
    allocations: [],
    epochs: 0
  };
}
export const RegisterIncentiveProposal = {
  encode(message: RegisterIncentiveProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    for (const v of message.allocations) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.epochs !== 0) {
      writer.uint32(40).uint32(message.epochs);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIncentiveProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterIncentiveProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.allocations.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.epochs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterIncentiveProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromJSON(e)) : [],
      epochs: isSet(object.epochs) ? Number(object.epochs) : 0
    };
  },
  toJSON(message: RegisterIncentiveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.allocations = [];
    }
    message.epochs !== undefined && (obj.epochs = Math.round(message.epochs));
    return obj;
  },
  fromPartial(object: DeepPartial<RegisterIncentiveProposal>): RegisterIncentiveProposal {
    const message = createBaseRegisterIncentiveProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.allocations = object.allocations?.map(e => DecCoin.fromPartial(e)) || [];
    message.epochs = object.epochs ?? 0;
    return message;
  },
  fromSDK(object: RegisterIncentiveProposalSDKType): RegisterIncentiveProposal {
    return {
      title: object?.title,
      description: object?.description,
      contract: object?.contract,
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromSDK(e)) : [],
      epochs: object?.epochs
    };
  },
  fromSDKJSON(object: any): RegisterIncentiveProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromSDKJSON(e)) : [],
      epochs: isSet(object.epochs) ? Number(object.epochs) : 0
    };
  },
  toSDK(message: RegisterIncentiveProposal): RegisterIncentiveProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.allocations = [];
    }
    obj.epochs = message.epochs;
    return obj;
  }
};
function createBaseCancelIncentiveProposal(): CancelIncentiveProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
export const CancelIncentiveProposal = {
  encode(message: CancelIncentiveProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CancelIncentiveProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelIncentiveProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CancelIncentiveProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: CancelIncentiveProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: DeepPartial<CancelIncentiveProposal>): CancelIncentiveProposal {
    const message = createBaseCancelIncentiveProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
  fromSDK(object: CancelIncentiveProposalSDKType): CancelIncentiveProposal {
    return {
      title: object?.title,
      description: object?.description,
      contract: object?.contract
    };
  },
  fromSDKJSON(object: any): CancelIncentiveProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toSDK(message: CancelIncentiveProposal): CancelIncentiveProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    return obj;
  }
};