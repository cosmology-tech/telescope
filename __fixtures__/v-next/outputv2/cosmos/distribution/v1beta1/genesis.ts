import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorHistoricalRewards, ValidatorHistoricalRewardsAmino, ValidatorHistoricalRewardsSDKType, ValidatorCurrentRewards, ValidatorCurrentRewardsAmino, ValidatorCurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoAmino, DelegatorStartingInfoSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, Params, ParamsAmino, ParamsSDKType, FeePool, FeePoolAmino, FeePoolSDKType } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdrawAddress: string;
}
export interface DelegatorWithdrawInfoProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
  value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address: string;
}
export interface DelegatorWithdrawInfoAminoMsg {
  type: "cosmos-sdk/DelegatorWithdrawInfo";
  value: DelegatorWithdrawInfoAmino;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstandingRewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
  value: Uint8Array;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstanding_rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorOutstandingRewardsRecord";
  value: ValidatorOutstandingRewardsRecordAmino;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordSDKType {
  validator_address: string;
  outstanding_rewards: DecCoinSDKType[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated: ValidatorAccumulatedCommission;
}
export interface ValidatorAccumulatedCommissionRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated?: ValidatorAccumulatedCommissionAmino;
}
export interface ValidatorAccumulatedCommissionRecordAminoMsg {
  type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord";
  value: ValidatorAccumulatedCommissionRecordAmino;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordSDKType {
  validator_address: string;
  accumulated: ValidatorAccumulatedCommissionSDKType;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** period defines the period the historical rewards apply to. */
  period: bigint;
  /** rewards defines the historical rewards of a validator. */
  rewards: ValidatorHistoricalRewards;
}
export interface ValidatorHistoricalRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** period defines the period the historical rewards apply to. */
  period: string;
  /** rewards defines the historical rewards of a validator. */
  rewards?: ValidatorHistoricalRewardsAmino;
}
export interface ValidatorHistoricalRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorHistoricalRewardsRecord";
  value: ValidatorHistoricalRewardsRecordAmino;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordSDKType {
  validator_address: string;
  period: bigint;
  rewards: ValidatorHistoricalRewardsSDKType;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** rewards defines the current rewards of a validator. */
  rewards: ValidatorCurrentRewards;
}
export interface ValidatorCurrentRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
  value: Uint8Array;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** rewards defines the current rewards of a validator. */
  rewards?: ValidatorCurrentRewardsAmino;
}
export interface ValidatorCurrentRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorCurrentRewardsRecord";
  value: ValidatorCurrentRewardsRecordAmino;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordSDKType {
  validator_address: string;
  rewards: ValidatorCurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** starting_info defines the starting info of a delegator. */
  startingInfo: DelegatorStartingInfo;
}
export interface DelegatorStartingInfoRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
  value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** starting_info defines the starting info of a delegator. */
  starting_info?: DelegatorStartingInfoAmino;
}
export interface DelegatorStartingInfoRecordAminoMsg {
  type: "cosmos-sdk/DelegatorStartingInfoRecord";
  value: DelegatorStartingInfoRecordAmino;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
  delegator_address: string;
  validator_address: string;
  starting_info: DelegatorStartingInfoSDKType;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** height defines the block height at which the slash event occured. */
  height: bigint;
  /** period is the period of the slash event. */
  period: bigint;
  /** validator_slash_event describes the slash event. */
  validatorSlashEvent: ValidatorSlashEvent;
}
export interface ValidatorSlashEventRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
  value: Uint8Array;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** height defines the block height at which the slash event occured. */
  height: string;
  /** period is the period of the slash event. */
  period: string;
  /** validator_slash_event describes the slash event. */
  validator_slash_event?: ValidatorSlashEventAmino;
}
export interface ValidatorSlashEventRecordAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEventRecord";
  value: ValidatorSlashEventRecordAmino;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordSDKType {
  validator_address: string;
  height: bigint;
  period: bigint;
  validator_slash_event: ValidatorSlashEventSDKType;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** fee_pool defines the fee pool at genesis. */
  feePool: FeePool;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegatorWithdrawInfos: DelegatorWithdrawInfo[];
  /** fee_pool defines the previous proposer at genesis. */
  previousProposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstandingRewards: ValidatorOutstandingRewardsRecord[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegatorStartingInfos: DelegatorStartingInfoRecord[];
  /** fee_pool defines the validator slash events at genesis. */
  validatorSlashEvents: ValidatorSlashEventRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool?: FeePoolAmino;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos: DelegatorWithdrawInfoAmino[];
  /** fee_pool defines the previous proposer at genesis. */
  previous_proposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstanding_rewards: ValidatorOutstandingRewardsRecordAmino[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordAmino[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validator_historical_rewards: ValidatorHistoricalRewardsRecordAmino[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validator_current_rewards: ValidatorCurrentRewardsRecordAmino[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegator_starting_infos: DelegatorStartingInfoRecordAmino[];
  /** fee_pool defines the validator slash events at genesis. */
  validator_slash_events: ValidatorSlashEventRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pool: FeePoolSDKType;
  delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
  previous_proposer: string;
  outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
  validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
  validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
  delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
  validator_slash_events: ValidatorSlashEventRecordSDKType[];
}
function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const DelegatorWithdrawInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
  aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
  encode(message: DelegatorWithdrawInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelegatorWithdrawInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorWithdrawInfo {
    const obj = createBaseDelegatorWithdrawInfo();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.withdrawAddress)) obj.withdrawAddress = String(object.withdrawAddress);
    return obj;
  },
  toJSON(message: DelegatorWithdrawInfo): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromSDK(object: DelegatorWithdrawInfoSDKType): DelegatorWithdrawInfo {
    return {
      delegatorAddress: object?.delegator_address,
      withdrawAddress: object?.withdraw_address
    };
  },
  toSDK(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo {
    return {
      delegatorAddress: object.delegator_address,
      withdrawAddress: object.withdraw_address
    };
  },
  toAmino(message: DelegatorWithdrawInfo, useInterfaces: boolean = true): DelegatorWithdrawInfoAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorWithdrawInfo, useInterfaces: boolean = true): DelegatorWithdrawInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg, useInterfaces: boolean = true): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelegatorWithdrawInfo): Uint8Array {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
  return {
    validatorAddress: "",
    outstandingRewards: []
  };
}
export const ValidatorOutstandingRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
  encode(message: ValidatorOutstandingRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.outstandingRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorOutstandingRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.outstandingRewards.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewardsRecord {
    const obj = createBaseValidatorOutstandingRewardsRecord();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (Array.isArray(object?.outstandingRewards)) obj.outstandingRewards = object.outstandingRewards.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorOutstandingRewardsRecord): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.outstandingRewards) {
      obj.outstandingRewards = message.outstandingRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.outstandingRewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.outstandingRewards = object.outstandingRewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ValidatorOutstandingRewardsRecordSDKType): ValidatorOutstandingRewardsRecord {
    return {
      validatorAddress: object?.validator_address,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromAmino(object: ValidatorOutstandingRewardsRecordAmino): ValidatorOutstandingRewardsRecord {
    return {
      validatorAddress: object.validator_address,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorOutstandingRewardsRecord, useInterfaces: boolean = true): ValidatorOutstandingRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsRecordAminoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewardsRecord, useInterfaces: boolean = true): ValidatorOutstandingRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsRecordProtoMsg, useInterfaces: boolean = true): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorOutstandingRewardsRecord): Uint8Array {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
  return {
    validatorAddress: "",
    accumulated: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const ValidatorAccumulatedCommissionRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
  aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
  encode(message: ValidatorAccumulatedCommissionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorAccumulatedCommissionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommissionRecord {
    const obj = createBaseValidatorAccumulatedCommissionRecord();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.accumulated)) obj.accumulated = ValidatorAccumulatedCommission.fromJSON(object.accumulated);
    return obj;
  },
  toJSON(message: ValidatorAccumulatedCommissionRecord): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.accumulated !== undefined && object.accumulated !== null) {
      message.accumulated = ValidatorAccumulatedCommission.fromPartial(object.accumulated);
    }
    return message;
  },
  fromSDK(object: ValidatorAccumulatedCommissionRecordSDKType): ValidatorAccumulatedCommissionRecord {
    return {
      validatorAddress: object?.validator_address,
      accumulated: object.accumulated ? ValidatorAccumulatedCommission.fromSDK(object.accumulated) : undefined
    };
  },
  toSDK(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toSDK(message.accumulated) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorAccumulatedCommissionRecordAmino): ValidatorAccumulatedCommissionRecord {
    return {
      validatorAddress: object.validator_address,
      accumulated: object?.accumulated ? ValidatorAccumulatedCommission.fromAmino(object.accumulated) : undefined
    };
  },
  toAmino(message: ValidatorAccumulatedCommissionRecord, useInterfaces: boolean = true): ValidatorAccumulatedCommissionRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toAmino(message.accumulated, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionRecordAminoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommissionRecord, useInterfaces: boolean = true): ValidatorAccumulatedCommissionRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionRecordProtoMsg, useInterfaces: boolean = true): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorAccumulatedCommissionRecord): Uint8Array {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
  return {
    validatorAddress: "",
    period: BigInt(0),
    rewards: ValidatorHistoricalRewards.fromPartial({})
  };
}
export const ValidatorHistoricalRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
  encode(message: ValidatorHistoricalRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorHistoricalRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewardsRecord {
    const obj = createBaseValidatorHistoricalRewardsRecord();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.period)) obj.period = BigInt(object.period.toString());
    if (isSet(object.rewards)) obj.rewards = ValidatorHistoricalRewards.fromJSON(object.rewards);
    return obj;
  },
  toJSON(message: ValidatorHistoricalRewardsRecord): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period.toString());
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorHistoricalRewards.fromPartial(object.rewards);
    }
    return message;
  },
  fromSDK(object: ValidatorHistoricalRewardsRecordSDKType): ValidatorHistoricalRewardsRecord {
    return {
      validatorAddress: object?.validator_address,
      period: object?.period,
      rewards: object.rewards ? ValidatorHistoricalRewards.fromSDK(object.rewards) : undefined
    };
  },
  toSDK(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.period = message.period;
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toSDK(message.rewards) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorHistoricalRewardsRecordAmino): ValidatorHistoricalRewardsRecord {
    return {
      validatorAddress: object.validator_address,
      period: BigInt(object.period),
      rewards: object?.rewards ? ValidatorHistoricalRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino(message: ValidatorHistoricalRewardsRecord, useInterfaces: boolean = true): ValidatorHistoricalRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.rewards = message.rewards ? ValidatorHistoricalRewards.toAmino(message.rewards, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsRecordAminoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewardsRecord, useInterfaces: boolean = true): ValidatorHistoricalRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsRecordProtoMsg, useInterfaces: boolean = true): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorHistoricalRewardsRecord): Uint8Array {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
  return {
    validatorAddress: "",
    rewards: ValidatorCurrentRewards.fromPartial({})
  };
}
export const ValidatorCurrentRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
  encode(message: ValidatorCurrentRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorCurrentRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewardsRecord {
    const obj = createBaseValidatorCurrentRewardsRecord();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.rewards)) obj.rewards = ValidatorCurrentRewards.fromJSON(object.rewards);
    return obj;
  },
  toJSON(message: ValidatorCurrentRewardsRecord): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorCurrentRewards.fromPartial(object.rewards);
    }
    return message;
  },
  fromSDK(object: ValidatorCurrentRewardsRecordSDKType): ValidatorCurrentRewardsRecord {
    return {
      validatorAddress: object?.validator_address,
      rewards: object.rewards ? ValidatorCurrentRewards.fromSDK(object.rewards) : undefined
    };
  },
  toSDK(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toSDK(message.rewards) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorCurrentRewardsRecordAmino): ValidatorCurrentRewardsRecord {
    return {
      validatorAddress: object.validator_address,
      rewards: object?.rewards ? ValidatorCurrentRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino(message: ValidatorCurrentRewardsRecord, useInterfaces: boolean = true): ValidatorCurrentRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.rewards = message.rewards ? ValidatorCurrentRewards.toAmino(message.rewards, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsRecordAminoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewardsRecord, useInterfaces: boolean = true): ValidatorCurrentRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsRecordProtoMsg, useInterfaces: boolean = true): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorCurrentRewardsRecord): Uint8Array {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    startingInfo: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
  aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
  encode(message: DelegatorStartingInfoRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.startingInfo !== undefined) {
      DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DelegatorStartingInfoRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfoRecord {
    const obj = createBaseDelegatorStartingInfoRecord();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.startingInfo)) obj.startingInfo = DelegatorStartingInfo.fromJSON(object.startingInfo);
    return obj;
  },
  toJSON(message: DelegatorStartingInfoRecord): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingInfo !== undefined && (obj.startingInfo = message.startingInfo ? DelegatorStartingInfo.toJSON(message.startingInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.startingInfo !== undefined && object.startingInfo !== null) {
      message.startingInfo = DelegatorStartingInfo.fromPartial(object.startingInfo);
    }
    return message;
  },
  fromSDK(object: DelegatorStartingInfoRecordSDKType): DelegatorStartingInfoRecord {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      startingInfo: object.starting_info ? DelegatorStartingInfo.fromSDK(object.starting_info) : undefined
    };
  },
  toSDK(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    message.startingInfo !== undefined && (obj.starting_info = message.startingInfo ? DelegatorStartingInfo.toSDK(message.startingInfo) : undefined);
    return obj;
  },
  fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      startingInfo: object?.starting_info ? DelegatorStartingInfo.fromAmino(object.starting_info) : undefined
    };
  },
  toAmino(message: DelegatorStartingInfoRecord, useInterfaces: boolean = true): DelegatorStartingInfoRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.starting_info = message.startingInfo ? DelegatorStartingInfo.toAmino(message.startingInfo, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfoRecord, useInterfaces: boolean = true): DelegatorStartingInfoRecordAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg, useInterfaces: boolean = true): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DelegatorStartingInfoRecord): Uint8Array {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
  return {
    validatorAddress: "",
    height: BigInt(0),
    period: BigInt(0),
    validatorSlashEvent: ValidatorSlashEvent.fromPartial({})
  };
}
export const ValidatorSlashEventRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
  aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
  encode(message: ValidatorSlashEventRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validatorSlashEvent !== undefined) {
      ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorSlashEventRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validatorSlashEvent = ValidatorSlashEvent.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEventRecord {
    const obj = createBaseValidatorSlashEventRecord();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.period)) obj.period = BigInt(object.period.toString());
    if (isSet(object.validatorSlashEvent)) obj.validatorSlashEvent = ValidatorSlashEvent.fromJSON(object.validatorSlashEvent);
    return obj;
  },
  toJSON(message: ValidatorSlashEventRecord): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    message.validatorSlashEvent !== undefined && (obj.validatorSlashEvent = message.validatorSlashEvent ? ValidatorSlashEvent.toJSON(message.validatorSlashEvent) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period.toString());
    }
    if (object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null) {
      message.validatorSlashEvent = ValidatorSlashEvent.fromPartial(object.validatorSlashEvent);
    }
    return message;
  },
  fromSDK(object: ValidatorSlashEventRecordSDKType): ValidatorSlashEventRecord {
    return {
      validatorAddress: object?.validator_address,
      height: object?.height,
      period: object?.period,
      validatorSlashEvent: object.validator_slash_event ? ValidatorSlashEvent.fromSDK(object.validator_slash_event) : undefined
    };
  },
  toSDK(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.height = message.height;
    obj.period = message.period;
    message.validatorSlashEvent !== undefined && (obj.validator_slash_event = message.validatorSlashEvent ? ValidatorSlashEvent.toSDK(message.validatorSlashEvent) : undefined);
    return obj;
  },
  fromAmino(object: ValidatorSlashEventRecordAmino): ValidatorSlashEventRecord {
    return {
      validatorAddress: object.validator_address,
      height: BigInt(object.height),
      period: BigInt(object.period),
      validatorSlashEvent: object?.validator_slash_event ? ValidatorSlashEvent.fromAmino(object.validator_slash_event) : undefined
    };
  },
  toAmino(message: ValidatorSlashEventRecord, useInterfaces: boolean = true): ValidatorSlashEventRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.validator_slash_event = message.validatorSlashEvent ? ValidatorSlashEvent.toAmino(message.validatorSlashEvent, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventRecordAminoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEventRecord, useInterfaces: boolean = true): ValidatorSlashEventRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventRecordProtoMsg, useInterfaces: boolean = true): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorSlashEventRecord): Uint8Array {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feePool: FeePool.fromPartial({}),
    delegatorWithdrawInfos: [],
    previousProposer: "",
    outstandingRewards: [],
    validatorAccumulatedCommissions: [],
    validatorHistoricalRewards: [],
    validatorCurrentRewards: [],
    delegatorStartingInfos: [],
    validatorSlashEvents: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feePool !== undefined) {
      FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatorWithdrawInfos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousProposer !== "") {
      writer.uint32(34).string(message.previousProposer);
    }
    for (const v of message.outstandingRewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validatorAccumulatedCommissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validatorHistoricalRewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validatorCurrentRewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegatorStartingInfos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.feePool = FeePool.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.previousProposer = reader.string();
          break;
        case 5:
          message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 10:
          message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32(), useInterfaces));
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
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.feePool)) obj.feePool = FeePool.fromJSON(object.feePool);
    if (Array.isArray(object?.delegatorWithdrawInfos)) obj.delegatorWithdrawInfos = object.delegatorWithdrawInfos.map((e: any) => DelegatorWithdrawInfo.fromJSON(e));
    if (isSet(object.previousProposer)) obj.previousProposer = String(object.previousProposer);
    if (Array.isArray(object?.outstandingRewards)) obj.outstandingRewards = object.outstandingRewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromJSON(e));
    if (Array.isArray(object?.validatorAccumulatedCommissions)) obj.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromJSON(e));
    if (Array.isArray(object?.validatorHistoricalRewards)) obj.validatorHistoricalRewards = object.validatorHistoricalRewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromJSON(e));
    if (Array.isArray(object?.validatorCurrentRewards)) obj.validatorCurrentRewards = object.validatorCurrentRewards.map((e: any) => ValidatorCurrentRewardsRecord.fromJSON(e));
    if (Array.isArray(object?.delegatorStartingInfos)) obj.delegatorStartingInfos = object.delegatorStartingInfos.map((e: any) => DelegatorStartingInfoRecord.fromJSON(e));
    if (Array.isArray(object?.validatorSlashEvents)) obj.validatorSlashEvents = object.validatorSlashEvents.map((e: any) => ValidatorSlashEventRecord.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.feePool !== undefined && (obj.feePool = message.feePool ? FeePool.toJSON(message.feePool) : undefined);
    if (message.delegatorWithdrawInfos) {
      obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
    } else {
      obj.delegatorWithdrawInfos = [];
    }
    message.previousProposer !== undefined && (obj.previousProposer = message.previousProposer);
    if (message.outstandingRewards) {
      obj.outstandingRewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.outstandingRewards = [];
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
    } else {
      obj.validatorAccumulatedCommissions = [];
    }
    if (message.validatorHistoricalRewards) {
      obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validatorHistoricalRewards = [];
    }
    if (message.validatorCurrentRewards) {
      obj.validatorCurrentRewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validatorCurrentRewards = [];
    }
    if (message.delegatorStartingInfos) {
      obj.delegatorStartingInfos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
    } else {
      obj.delegatorStartingInfos = [];
    }
    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
    } else {
      obj.validatorSlashEvents = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.feePool !== undefined && object.feePool !== null) {
      message.feePool = FeePool.fromPartial(object.feePool);
    }
    message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previousProposer = object.previousProposer ?? "";
    message.outstandingRewards = object.outstandingRewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validatorHistoricalRewards = object.validatorHistoricalRewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validatorCurrentRewards = object.validatorCurrentRewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegatorStartingInfos = object.delegatorStartingInfos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      feePool: object.fee_pool ? FeePool.fromSDK(object.fee_pool) : undefined,
      delegatorWithdrawInfos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromSDK(e)) : [],
      previousProposer: object?.previous_proposer,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromSDK(e)) : [],
      validatorAccumulatedCommissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromSDK(e)) : [],
      validatorHistoricalRewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromSDK(e)) : [],
      validatorCurrentRewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromSDK(e)) : [],
      delegatorStartingInfos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromSDK(e)) : [],
      validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    message.feePool !== undefined && (obj.fee_pool = message.feePool ? FeePool.toSDK(message.feePool) : undefined);
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toSDK(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = [];
    }
    obj.previous_proposer = message.previousProposer;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toSDK(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toSDK(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validatorHistoricalRewards) {
      obj.validator_historical_rewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toSDK(e) : undefined);
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validatorCurrentRewards) {
      obj.validator_current_rewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toSDK(e) : undefined);
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toSDK(e) : undefined);
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toSDK(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      feePool: object?.fee_pool ? FeePool.fromAmino(object.fee_pool) : undefined,
      delegatorWithdrawInfos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromAmino(e)) : [],
      previousProposer: object.previous_proposer,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromAmino(e)) : [],
      validatorAccumulatedCommissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromAmino(e)) : [],
      validatorHistoricalRewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromAmino(e)) : [],
      validatorCurrentRewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromAmino(e)) : [],
      delegatorStartingInfos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromAmino(e)) : [],
      validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    obj.fee_pool = message.feePool ? FeePool.toAmino(message.feePool, useInterfaces) : undefined;
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegator_withdraw_infos = [];
    }
    obj.previous_proposer = message.previousProposer;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validatorHistoricalRewards) {
      obj.validator_historical_rewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validatorCurrentRewards) {
      obj.validator_current_rewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState, useInterfaces: boolean = true): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};