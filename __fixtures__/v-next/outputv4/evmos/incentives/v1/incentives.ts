import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
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
  startTime: Date;
  /** cumulative gas spent by all gasmeters of the incentive during the epoch */
  totalGas: bigint;
}
export interface IncentiveProtoMsg {
  typeUrl: "/evmos.incentives.v1.Incentive";
  value: Uint8Array;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveAmino {
  /** contract address */
  contract: string;
  /** denoms and percentage of rewards to be allocated */
  allocations: DecCoinAmino[];
  /** number of remaining epochs */
  epochs: number;
  /** distribution start time */
  start_time?: Date;
  /** cumulative gas spent by all gasmeters of the incentive during the epoch */
  total_gas: string;
}
export interface IncentiveAminoMsg {
  type: "/evmos.incentives.v1.Incentive";
  value: IncentiveAmino;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveSDKType {
  contract: string;
  allocations: DecCoinSDKType[];
  epochs: number;
  start_time: Date;
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
export interface GasMeterProtoMsg {
  typeUrl: "/evmos.incentives.v1.GasMeter";
  value: Uint8Array;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeterAmino {
  /** hex address of the incentivized contract */
  contract: string;
  /** participant address that interacts with the incentive */
  participant: string;
  /** cumulative gas spent during the epoch */
  cumulative_gas: string;
}
export interface GasMeterAminoMsg {
  type: "/evmos.incentives.v1.GasMeter";
  value: GasMeterAmino;
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
export interface RegisterIncentiveProposalProtoMsg {
  typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal";
  value: Uint8Array;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposalAmino {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address */
  contract: string;
  /** denoms and percentage of rewards to be allocated */
  allocations: DecCoinAmino[];
  /** number of remaining epochs */
  epochs: number;
}
export interface RegisterIncentiveProposalAminoMsg {
  type: "/evmos.incentives.v1.RegisterIncentiveProposal";
  value: RegisterIncentiveProposalAmino;
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
export interface CancelIncentiveProposalProtoMsg {
  typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal";
  value: Uint8Array;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposalAmino {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address */
  contract: string;
}
export interface CancelIncentiveProposalAminoMsg {
  type: "/evmos.incentives.v1.CancelIncentiveProposal";
  value: CancelIncentiveProposalAmino;
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
    startTime: new Date(),
    totalGas: BigInt(0)
  };
}
export const Incentive = {
  encode(message: Incentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(40).uint64(message.totalGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Incentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.totalGas = reader.uint64();
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
      totalGas: isSet(object.totalGas) ? BigInt(object.totalGas.toString()) : BigInt(0)
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
    message.totalGas !== undefined && (obj.totalGas = (message.totalGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Incentive>): Incentive {
    const message = createBaseIncentive();
    message.contract = object.contract ?? "";
    message.allocations = object.allocations?.map(e => DecCoin.fromPartial(e)) || [];
    message.epochs = object.epochs ?? 0;
    message.startTime = object.startTime ?? undefined;
    message.totalGas = object.totalGas !== undefined && object.totalGas !== null ? BigInt(object.totalGas.toString()) : BigInt(0);
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
      total_gas: isSet(object.total_gas) ? BigInt(object.total_gas.toString()) : BigInt(0)
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
  },
  fromAmino(object: IncentiveAmino): Incentive {
    return {
      contract: object.contract,
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromAmino(e)) : [],
      epochs: object.epochs,
      startTime: object.start_time,
      totalGas: BigInt(object.total_gas)
    };
  },
  toAmino(message: Incentive): IncentiveAmino {
    const obj: any = {};
    obj.contract = message.contract;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.allocations = [];
    }
    obj.epochs = message.epochs;
    obj.start_time = message.startTime;
    obj.total_gas = message.totalGas ? message.totalGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveAminoMsg): Incentive {
    return Incentive.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentiveProtoMsg): Incentive {
    return Incentive.decode(message.value);
  },
  toProto(message: Incentive): Uint8Array {
    return Incentive.encode(message).finish();
  },
  toProtoMsg(message: Incentive): IncentiveProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.Incentive",
      value: Incentive.encode(message).finish()
    };
  }
};
function createBaseGasMeter(): GasMeter {
  return {
    contract: "",
    participant: "",
    cumulativeGas: BigInt(0)
  };
}
export const GasMeter = {
  encode(message: GasMeter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }
    if (message.cumulativeGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.cumulativeGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasMeter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.cumulativeGas = reader.uint64();
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
      cumulativeGas: isSet(object.cumulativeGas) ? BigInt(object.cumulativeGas.toString()) : BigInt(0)
    };
  },
  toJSON(message: GasMeter): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.participant !== undefined && (obj.participant = message.participant);
    message.cumulativeGas !== undefined && (obj.cumulativeGas = (message.cumulativeGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GasMeter>): GasMeter {
    const message = createBaseGasMeter();
    message.contract = object.contract ?? "";
    message.participant = object.participant ?? "";
    message.cumulativeGas = object.cumulativeGas !== undefined && object.cumulativeGas !== null ? BigInt(object.cumulativeGas.toString()) : BigInt(0);
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
      cumulative_gas: isSet(object.cumulative_gas) ? BigInt(object.cumulative_gas.toString()) : BigInt(0)
    };
  },
  toSDK(message: GasMeter): GasMeterSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    obj.participant = message.participant;
    obj.cumulative_gas = message.cumulativeGas;
    return obj;
  },
  fromAmino(object: GasMeterAmino): GasMeter {
    return {
      contract: object.contract,
      participant: object.participant,
      cumulativeGas: BigInt(object.cumulative_gas)
    };
  },
  toAmino(message: GasMeter): GasMeterAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.participant = message.participant;
    obj.cumulative_gas = message.cumulativeGas ? message.cumulativeGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasMeterAminoMsg): GasMeter {
    return GasMeter.fromAmino(object.value);
  },
  fromProtoMsg(message: GasMeterProtoMsg): GasMeter {
    return GasMeter.decode(message.value);
  },
  toProto(message: GasMeter): Uint8Array {
    return GasMeter.encode(message).finish();
  },
  toProtoMsg(message: GasMeter): GasMeterProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.GasMeter",
      value: GasMeter.encode(message).finish()
    };
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
  encode(message: RegisterIncentiveProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterIncentiveProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: RegisterIncentiveProposalAmino): RegisterIncentiveProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract,
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => DecCoin.fromAmino(e)) : [],
      epochs: object.epochs
    };
  },
  toAmino(message: RegisterIncentiveProposal): RegisterIncentiveProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.allocations = [];
    }
    obj.epochs = message.epochs;
    return obj;
  },
  fromAminoMsg(object: RegisterIncentiveProposalAminoMsg): RegisterIncentiveProposal {
    return RegisterIncentiveProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterIncentiveProposalProtoMsg): RegisterIncentiveProposal {
    return RegisterIncentiveProposal.decode(message.value);
  },
  toProto(message: RegisterIncentiveProposal): Uint8Array {
    return RegisterIncentiveProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterIncentiveProposal): RegisterIncentiveProposalProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
      value: RegisterIncentiveProposal.encode(message).finish()
    };
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
  encode(message: CancelIncentiveProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): CancelIncentiveProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: CancelIncentiveProposalAmino): CancelIncentiveProposal {
    return {
      title: object.title,
      description: object.description,
      contract: object.contract
    };
  },
  toAmino(message: CancelIncentiveProposal): CancelIncentiveProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.contract = message.contract;
    return obj;
  },
  fromAminoMsg(object: CancelIncentiveProposalAminoMsg): CancelIncentiveProposal {
    return CancelIncentiveProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CancelIncentiveProposalProtoMsg): CancelIncentiveProposal {
    return CancelIncentiveProposal.decode(message.value);
  },
  toProto(message: CancelIncentiveProposal): Uint8Array {
    return CancelIncentiveProposal.encode(message).finish();
  },
  toProtoMsg(message: CancelIncentiveProposal): CancelIncentiveProposalProtoMsg {
    return {
      typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal",
      value: CancelIncentiveProposal.encode(message).finish()
    };
  }
};