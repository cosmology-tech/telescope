import { Header, HeaderSDKType } from "../../../tendermint/types/types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}
export const BondStatusSDKType = BondStatus;
export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}
export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header: Header;
  valset: Validator[];
}
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfoSDKType {
  header: HeaderSDKType;
  valset: ValidatorSDKType[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  maxRate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  maxChangeRate: string;
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRatesSDKType {
  rate: string;
  max_rate: string;
  max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commissionRates: CommissionRates;
  /** update_time is the last time the commission rate was changed. */
  updateTime: Date;
}
/** Commission defines commission parameters for a given validator. */
export interface CommissionSDKType {
  commission_rates: CommissionRatesSDKType;
  update_time: Date;
}
/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  securityContact: string;
  /** details define other optional details. */
  details: string;
}
/** Description defines a validator description. */
export interface DescriptionSDKType {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operatorAddress: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensusPubkey: Any;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegatorShares: string;
  /** description defines the description terms for the validator. */
  description: Description;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbondingHeight: bigint;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbondingTime: Date;
  /** commission defines the commission parameters. */
  commission: Commission;
  /** min_self_delegation is the validator's self declared minimum self delegation. */
  minSelfDelegation: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorSDKType {
  operator_address: string;
  consensus_pubkey: AnySDKType;
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegator_shares: string;
  description: DescriptionSDKType;
  unbonding_height: bigint;
  unbonding_time: Date;
  commission: CommissionSDKType;
  min_self_delegation: string;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddressesSDKType {
  addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPairSDKType {
  delegator_address: string;
  validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairsSDKType {
  pairs: DVPairSDKType[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTripletSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTripletsSDKType {
  triplets: DVVTripletSDKType[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** shares define the delegation shares received. */
  shares: string;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface DelegationSDKType {
  delegator_address: string;
  validator_address: string;
  shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegationSDKType {
  delegator_address: string;
  validator_address: string;
  entries: UnbondingDelegationEntrySDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creationHeight: bigint;
  /** completion_time is the unix time for unbonding completion. */
  completionTime: Date;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initialBalance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntrySDKType {
  creation_height: bigint;
  completion_time: Date;
  initial_balance: string;
  balance: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creationHeight: bigint;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime: Date;
  /** initial_balance defines the initial balance when redelegation started. */
  initialBalance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  sharesDst: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntrySDKType {
  creation_height: bigint;
  completion_time: Date;
  initial_balance: string;
  shares_dst: string;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validatorSrcAddress: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validatorDstAddress: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface RedelegationSDKType {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  entries: RedelegationEntrySDKType[];
}
/** Params defines the parameters for the staking module. */
export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime: Duration;
  /** max_validators is the maximum number of validators. */
  maxValidators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  maxEntries: number;
  /** historical_entries is the number of historical entries to persist. */
  historicalEntries: number;
  /** bond_denom defines the bondable coin denomination. */
  bondDenom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  minCommissionRate: string;
}
/** Params defines the parameters for the staking module. */
export interface ParamsSDKType {
  unbonding_time: DurationSDKType;
  max_validators: number;
  max_entries: number;
  historical_entries: number;
  bond_denom: string;
  min_commission_rate: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation;
  balance: Coin;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponseSDKType {
  delegation: DelegationSDKType;
  balance: CoinSDKType;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegationEntry: RedelegationEntry;
  balance: string;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponseSDKType {
  redelegation_entry: RedelegationEntrySDKType;
  balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation: Redelegation;
  entries: RedelegationEntryResponse[];
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponseSDKType {
  redelegation: RedelegationSDKType;
  entries: RedelegationEntryResponseSDKType[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface PoolSDKType {
  not_bonded_tokens: string;
  bonded_tokens: string;
}
function createBaseHistoricalInfo(): HistoricalInfo {
  return {
    header: Header.fromPartial({}),
    valset: []
  };
}
export const HistoricalInfo = {
  encode(message: HistoricalInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HistoricalInfo {
    const obj = createBaseHistoricalInfo();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (Array.isArray(object?.valset)) object.valset.map((e: any) => Validator.fromJSON(e));
    return obj;
  },
  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.valset = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    message.valset = object.valset?.map(e => Validator.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: HistoricalInfoSDKType): HistoricalInfo {
    return {
      header: object.header ? Header.fromSDK(object.header) : undefined,
      valset: Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): HistoricalInfoSDKType {
    return {
      header: isSet(object.header) ? Header.fromSDKJSON(object.header) : undefined,
      valset: Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: HistoricalInfo): HistoricalInfoSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.valset = [];
    }
    return obj;
  }
};
function createBaseCommissionRates(): CommissionRates {
  return {
    rate: "",
    maxRate: "",
    maxChangeRate: ""
  };
}
export const CommissionRates = {
  encode(message: CommissionRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maxRate, 18).atomics);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxChangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxChangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommissionRates {
    const obj = createBaseCommissionRates();
    if (isSet(object.rate)) obj.rate = String(object.rate);
    if (isSet(object.maxRate)) obj.maxRate = String(object.maxRate);
    if (isSet(object.maxChangeRate)) obj.maxChangeRate = String(object.maxChangeRate);
    return obj;
  },
  toJSON(message: CommissionRates): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },
  fromPartial(object: DeepPartial<CommissionRates>): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.maxRate = object.maxRate ?? "";
    message.maxChangeRate = object.maxChangeRate ?? "";
    return message;
  },
  fromSDK(object: CommissionRatesSDKType): CommissionRates {
    return {
      rate: object?.rate,
      maxRate: object?.max_rate,
      maxChangeRate: object?.max_change_rate
    };
  },
  fromSDKJSON(object: any): CommissionRatesSDKType {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
      max_rate: isSet(object.max_rate) ? String(object.max_rate) : "",
      max_change_rate: isSet(object.max_change_rate) ? String(object.max_change_rate) : ""
    };
  },
  toSDK(message: CommissionRates): CommissionRatesSDKType {
    const obj: any = {};
    obj.rate = message.rate;
    obj.max_rate = message.maxRate;
    obj.max_change_rate = message.maxChangeRate;
    return obj;
  }
};
function createBaseCommission(): Commission {
  return {
    commissionRates: CommissionRates.fromPartial({}),
    updateTime: new Date()
  };
}
export const Commission = {
  encode(message: Commission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commission {
    const obj = createBaseCommission();
    if (isSet(object.commissionRates)) obj.commissionRates = CommissionRates.fromJSON(object.commissionRates);
    if (isSet(object.updateTime)) obj.updateTime = new Date(object.updateTime);
    return obj;
  },
  toJSON(message: Commission): unknown {
    const obj: any = {};
    message.commissionRates !== undefined && (obj.commissionRates = message.commissionRates ? CommissionRates.toJSON(message.commissionRates) : undefined);
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<Commission>): Commission {
    const message = createBaseCommission();
    if (object.commissionRates !== undefined && object.commissionRates !== null) {
      message.commissionRates = CommissionRates.fromPartial(object.commissionRates);
    }
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
  fromSDK(object: CommissionSDKType): Commission {
    return {
      commissionRates: object.commission_rates ? CommissionRates.fromSDK(object.commission_rates) : undefined,
      updateTime: object.update_time ?? undefined
    };
  },
  fromSDKJSON(object: any): CommissionSDKType {
    return {
      commission_rates: isSet(object.commission_rates) ? CommissionRates.fromSDKJSON(object.commission_rates) : undefined,
      update_time: isSet(object.update_time) ? new Date(object.update_time) : undefined
    };
  },
  toSDK(message: Commission): CommissionSDKType {
    const obj: any = {};
    message.commissionRates !== undefined && (obj.commission_rates = message.commissionRates ? CommissionRates.toSDK(message.commissionRates) : undefined);
    message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
    return obj;
  }
};
function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: ""
  };
}
export const Description = {
  encode(message: Description, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Description {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Description {
    const obj = createBaseDescription();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.identity)) obj.identity = String(object.identity);
    if (isSet(object.website)) obj.website = String(object.website);
    if (isSet(object.securityContact)) obj.securityContact = String(object.securityContact);
    if (isSet(object.details)) obj.details = String(object.details);
    return obj;
  },
  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial(object: DeepPartial<Description>): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromSDK(object: DescriptionSDKType): Description {
    return {
      moniker: object?.moniker,
      identity: object?.identity,
      website: object?.website,
      securityContact: object?.security_contact,
      details: object?.details
    };
  },
  fromSDKJSON(object: any): DescriptionSDKType {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      security_contact: isSet(object.security_contact) ? String(object.security_contact) : "",
      details: isSet(object.details) ? String(object.details) : ""
    };
  },
  toSDK(message: Description): DescriptionSDKType {
    const obj: any = {};
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.security_contact = message.securityContact;
    obj.details = message.details;
    return obj;
  }
};
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    consensusPubkey: Any.fromPartial({}),
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: Description.fromPartial({}),
    unbondingHeight: BigInt(0),
    unbondingTime: new Date(),
    commission: Commission.fromPartial({}),
    minSelfDelegation: ""
  };
}
export const Validator = {
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.delegatorShares, 18).atomics);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = (reader.int32() as any);
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64();
          break;
        case 9:
          message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.operatorAddress)) obj.operatorAddress = String(object.operatorAddress);
    if (isSet(object.consensusPubkey)) obj.consensusPubkey = Any.fromJSON(object.consensusPubkey);
    if (isSet(object.jailed)) obj.jailed = Boolean(object.jailed);
    if (isSet(object.status)) obj.status = bondStatusFromJSON(object.status);
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    if (isSet(object.delegatorShares)) obj.delegatorShares = String(object.delegatorShares);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.unbondingHeight)) obj.unbondingHeight = BigInt(object.unbondingHeight.toString());
    if (isSet(object.unbondingTime)) obj.unbondingTime = new Date(object.unbondingTime);
    if (isSet(object.commission)) obj.commission = Commission.fromJSON(object.commission);
    if (isSet(object.minSelfDelegation)) obj.minSelfDelegation = String(object.minSelfDelegation);
    return obj;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.unbondingHeight !== undefined && (obj.unbondingHeight = (message.unbondingHeight || BigInt(0)).toString());
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime.toISOString());
    message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    if (object.consensusPubkey !== undefined && object.consensusPubkey !== null) {
      message.consensusPubkey = Any.fromPartial(object.consensusPubkey);
    }
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    if (object.unbondingHeight !== undefined && object.unbondingHeight !== null) {
      message.unbondingHeight = BigInt(object.unbondingHeight.toString());
    }
    message.unbondingTime = object.unbondingTime ?? undefined;
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Commission.fromPartial(object.commission);
    }
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
  fromSDK(object: ValidatorSDKType): Validator {
    return {
      operatorAddress: object?.operator_address,
      consensusPubkey: object.consensus_pubkey ? Any.fromSDK(object.consensus_pubkey) : undefined,
      jailed: object?.jailed,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: object?.tokens,
      delegatorShares: object?.delegator_shares,
      description: object.description ? Description.fromSDK(object.description) : undefined,
      unbondingHeight: object?.unbonding_height,
      unbondingTime: object.unbonding_time ?? undefined,
      commission: object.commission ? Commission.fromSDK(object.commission) : undefined,
      minSelfDelegation: object?.min_self_delegation
    };
  },
  fromSDKJSON(object: any): ValidatorSDKType {
    return {
      operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
      consensus_pubkey: isSet(object.consensus_pubkey) ? Any.fromSDKJSON(object.consensus_pubkey) : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegator_shares: isSet(object.delegator_shares) ? String(object.delegator_shares) : "",
      description: isSet(object.description) ? Description.fromSDKJSON(object.description) : undefined,
      unbonding_height: isSet(object.unbonding_height) ? BigInt(object.unbonding_height.toString()) : BigInt(0),
      unbonding_time: isSet(object.unbonding_time) ? new Date(object.unbonding_time) : undefined,
      commission: isSet(object.commission) ? Commission.fromSDKJSON(object.commission) : undefined,
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : ""
    };
  },
  toSDK(message: Validator): ValidatorSDKType {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    message.consensusPubkey !== undefined && (obj.consensus_pubkey = message.consensusPubkey ? Any.toSDK(message.consensusPubkey) : undefined);
    obj.jailed = message.jailed;
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    obj.tokens = message.tokens;
    obj.delegator_shares = message.delegatorShares;
    message.description !== undefined && (obj.description = message.description ? Description.toSDK(message.description) : undefined);
    obj.unbonding_height = message.unbondingHeight;
    message.unbondingTime !== undefined && (obj.unbonding_time = message.unbondingTime ?? undefined);
    message.commission !== undefined && (obj.commission = message.commission ? Commission.toSDK(message.commission) : undefined);
    obj.min_self_delegation = message.minSelfDelegation;
    return obj;
  }
};
function createBaseValAddresses(): ValAddresses {
  return {
    addresses: []
  };
}
export const ValAddresses = {
  encode(message: ValAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValAddresses {
    const obj = createBaseValAddresses();
    if (Array.isArray(object?.addresses)) object.addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ValAddresses): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValAddresses>): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ValAddressesSDKType): ValAddresses {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): ValAddressesSDKType {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: ValAddresses): ValAddressesSDKType {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  }
};
function createBaseDVPair(): DVPair {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const DVPair = {
  encode(message: DVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPair {
    const obj = createBaseDVPair();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: DVPair): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<DVPair>): DVPair {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromSDK(object: DVPairSDKType): DVPair {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address
    };
  },
  fromSDKJSON(object: any): DVPairSDKType {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  toSDK(message: DVPair): DVPairSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  }
};
function createBaseDVPairs(): DVPairs {
  return {
    pairs: []
  };
}
export const DVPairs = {
  encode(message: DVPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVPairs {
    const obj = createBaseDVPairs();
    if (Array.isArray(object?.pairs)) object.pairs.map((e: any) => DVPair.fromJSON(e));
    return obj;
  },
  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DVPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DVPairs>): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map(e => DVPair.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DVPairsSDKType): DVPairs {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DVPair.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): DVPairsSDKType {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DVPair.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: DVPairs): DVPairsSDKType {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? DVPair.toSDK(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  }
};
function createBaseDVVTriplet(): DVVTriplet {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: ""
  };
}
export const DVVTriplet = {
  encode(message: DVVTriplet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplet {
    const obj = createBaseDVVTriplet();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorSrcAddress)) obj.validatorSrcAddress = String(object.validatorSrcAddress);
    if (isSet(object.validatorDstAddress)) obj.validatorDstAddress = String(object.validatorDstAddress);
    return obj;
  },
  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  },
  fromSDK(object: DVVTripletSDKType): DVVTriplet {
    return {
      delegatorAddress: object?.delegator_address,
      validatorSrcAddress: object?.validator_src_address,
      validatorDstAddress: object?.validator_dst_address
    };
  },
  fromSDKJSON(object: any): DVVTripletSDKType {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : ""
    };
  },
  toSDK(message: DVVTriplet): DVVTripletSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    return obj;
  }
};
function createBaseDVVTriplets(): DVVTriplets {
  return {
    triplets: []
  };
}
export const DVVTriplets = {
  encode(message: DVVTriplets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DVVTriplets {
    const obj = createBaseDVVTriplets();
    if (Array.isArray(object?.triplets)) object.triplets.map((e: any) => DVVTriplet.fromJSON(e));
    return obj;
  },
  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map(e => e ? DVVTriplet.toJSON(e) : undefined);
    } else {
      obj.triplets = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map(e => DVVTriplet.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DVVTripletsSDKType): DVVTriplets {
    return {
      triplets: Array.isArray(object?.triplets) ? object.triplets.map((e: any) => DVVTriplet.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): DVVTripletsSDKType {
    return {
      triplets: Array.isArray(object?.triplets) ? object.triplets.map((e: any) => DVVTriplet.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: DVVTriplets): DVVTripletsSDKType {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map(e => e ? DVVTriplet.toSDK(e) : undefined);
    } else {
      obj.triplets = [];
    }
    return obj;
  }
};
function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    shares: ""
  };
}
export const Delegation = {
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.shares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
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
          message.shares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegation {
    const obj = createBaseDelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.shares)) obj.shares = String(object.shares);
    return obj;
  },
  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },
  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
  fromSDK(object: DelegationSDKType): Delegation {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      shares: object?.shares
    };
  },
  fromSDKJSON(object: any): DelegationSDKType {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      shares: isSet(object.shares) ? String(object.shares) : ""
    };
  },
  toSDK(message: Delegation): DelegationSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.shares = message.shares;
    return obj;
  }
};
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    entries: []
  };
}
export const UnbondingDelegation = {
  encode(message: UnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
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
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegation {
    const obj = createBaseUnbondingDelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (Array.isArray(object?.entries)) object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: UnbondingDelegationSDKType): UnbondingDelegation {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): UnbondingDelegationSDKType {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: UnbondingDelegation): UnbondingDelegationSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  }
};
function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: new Date(),
    initialBalance: "",
    balance: ""
  };
}
export const UnbondingDelegationEntry = {
  encode(message: UnbondingDelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingDelegationEntry {
    const obj = createBaseUnbondingDelegationEntry();
    if (isSet(object.creationHeight)) obj.creationHeight = BigInt(object.creationHeight.toString());
    if (isSet(object.completionTime)) obj.completionTime = new Date(object.completionTime);
    if (isSet(object.initialBalance)) obj.initialBalance = String(object.initialBalance);
    if (isSet(object.balance)) obj.balance = String(object.balance);
    return obj;
  },
  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight.toString());
    }
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
  fromSDK(object: UnbondingDelegationEntrySDKType): UnbondingDelegationEntry {
    return {
      creationHeight: object?.creation_height,
      completionTime: object.completion_time ?? undefined,
      initialBalance: object?.initial_balance,
      balance: object?.balance
    };
  },
  fromSDKJSON(object: any): UnbondingDelegationEntrySDKType {
    return {
      creation_height: isSet(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
      completion_time: isSet(object.completion_time) ? new Date(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  toSDK(message: UnbondingDelegationEntry): UnbondingDelegationEntrySDKType {
    const obj: any = {};
    obj.creation_height = message.creationHeight;
    message.completionTime !== undefined && (obj.completion_time = message.completionTime ?? undefined);
    obj.initial_balance = message.initialBalance;
    obj.balance = message.balance;
    return obj;
  }
};
function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: new Date(),
    initialBalance: "",
    sharesDst: ""
  };
}
export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.sharesDst, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntry {
    const obj = createBaseRedelegationEntry();
    if (isSet(object.creationHeight)) obj.creationHeight = BigInt(object.creationHeight.toString());
    if (isSet(object.completionTime)) obj.completionTime = new Date(object.completionTime);
    if (isSet(object.initialBalance)) obj.initialBalance = String(object.initialBalance);
    if (isSet(object.sharesDst)) obj.sharesDst = String(object.sharesDst);
    return obj;
  },
  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },
  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight.toString());
    }
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    return message;
  },
  fromSDK(object: RedelegationEntrySDKType): RedelegationEntry {
    return {
      creationHeight: object?.creation_height,
      completionTime: object.completion_time ?? undefined,
      initialBalance: object?.initial_balance,
      sharesDst: object?.shares_dst
    };
  },
  fromSDKJSON(object: any): RedelegationEntrySDKType {
    return {
      creation_height: isSet(object.creation_height) ? BigInt(object.creation_height.toString()) : BigInt(0),
      completion_time: isSet(object.completion_time) ? new Date(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      shares_dst: isSet(object.shares_dst) ? String(object.shares_dst) : ""
    };
  },
  toSDK(message: RedelegationEntry): RedelegationEntrySDKType {
    const obj: any = {};
    obj.creation_height = message.creationHeight;
    message.completionTime !== undefined && (obj.completion_time = message.completionTime ?? undefined);
    obj.initial_balance = message.initialBalance;
    obj.shares_dst = message.sharesDst;
    return obj;
  }
};
function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: []
  };
}
export const Redelegation = {
  encode(message: Redelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Redelegation {
    const obj = createBaseRedelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorSrcAddress)) obj.validatorSrcAddress = String(object.validatorSrcAddress);
    if (isSet(object.validatorDstAddress)) obj.validatorDstAddress = String(object.validatorDstAddress);
    if (Array.isArray(object?.entries)) object.entries.map((e: any) => RedelegationEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = object.entries?.map(e => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: RedelegationSDKType): Redelegation {
    return {
      delegatorAddress: object?.delegator_address,
      validatorSrcAddress: object?.validator_src_address,
      validatorDstAddress: object?.validator_dst_address,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): RedelegationSDKType {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Redelegation): RedelegationSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_src_address = message.validatorSrcAddress;
    obj.validator_dst_address = message.validatorDstAddress;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  }
};
function createBaseParams(): Params {
  return {
    unbondingTime: Duration.fromPartial({}),
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    bondDenom: "",
    minCommissionRate: ""
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
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
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        case 6:
          message.minCommissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.unbondingTime)) obj.unbondingTime = Duration.fromJSON(object.unbondingTime);
    if (isSet(object.maxValidators)) obj.maxValidators = Number(object.maxValidators);
    if (isSet(object.maxEntries)) obj.maxEntries = Number(object.maxEntries);
    if (isSet(object.historicalEntries)) obj.historicalEntries = Number(object.historicalEntries);
    if (isSet(object.bondDenom)) obj.bondDenom = String(object.bondDenom);
    if (isSet(object.minCommissionRate)) obj.minCommissionRate = String(object.minCommissionRate);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime ? Duration.toJSON(message.unbondingTime) : undefined);
    message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
    message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== undefined && (obj.historicalEntries = Math.round(message.historicalEntries));
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.minCommissionRate !== undefined && (obj.minCommissionRate = message.minCommissionRate);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    if (object.unbondingTime !== undefined && object.unbondingTime !== null) {
      message.unbondingTime = Duration.fromPartial(object.unbondingTime);
    }
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    message.minCommissionRate = object.minCommissionRate ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      unbondingTime: object.unbonding_time ? Duration.fromSDK(object.unbonding_time) : undefined,
      maxValidators: object?.max_validators,
      maxEntries: object?.max_entries,
      historicalEntries: object?.historical_entries,
      bondDenom: object?.bond_denom,
      minCommissionRate: object?.min_commission_rate
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      unbonding_time: isSet(object.unbonding_time) ? Duration.fromSDKJSON(object.unbonding_time) : undefined,
      max_validators: isSet(object.max_validators) ? Number(object.max_validators) : 0,
      max_entries: isSet(object.max_entries) ? Number(object.max_entries) : 0,
      historical_entries: isSet(object.historical_entries) ? Number(object.historical_entries) : 0,
      bond_denom: isSet(object.bond_denom) ? String(object.bond_denom) : "",
      min_commission_rate: isSet(object.min_commission_rate) ? String(object.min_commission_rate) : ""
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.unbondingTime !== undefined && (obj.unbonding_time = message.unbondingTime ? Duration.toSDK(message.unbondingTime) : undefined);
    obj.max_validators = message.maxValidators;
    obj.max_entries = message.maxEntries;
    obj.historical_entries = message.historicalEntries;
    obj.bond_denom = message.bondDenom;
    obj.min_commission_rate = message.minCommissionRate;
    return obj;
  }
};
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: Coin.fromPartial({})
  };
}
export const DelegationResponse = {
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationResponse {
    const obj = createBaseDelegationResponse();
    if (isSet(object.delegation)) obj.delegation = Delegation.fromJSON(object.delegation);
    if (isSet(object.balance)) obj.balance = Coin.fromJSON(object.balance);
    return obj;
  },
  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromPartial(object.delegation);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    }
    return message;
  },
  fromSDK(object: DelegationResponseSDKType): DelegationResponse {
    return {
      delegation: object.delegation ? Delegation.fromSDK(object.delegation) : undefined,
      balance: object.balance ? Coin.fromSDK(object.balance) : undefined
    };
  },
  fromSDKJSON(object: any): DelegationResponseSDKType {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromSDKJSON(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromSDKJSON(object.balance) : undefined
    };
  },
  toSDK(message: DelegationResponse): DelegationResponseSDKType {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? Delegation.toSDK(message.delegation) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toSDK(message.balance) : undefined);
    return obj;
  }
};
function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return {
    redelegationEntry: RedelegationEntry.fromPartial({}),
    balance: ""
  };
}
export const RedelegationEntryResponse = {
  encode(message: RedelegationEntryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationEntryResponse {
    const obj = createBaseRedelegationEntryResponse();
    if (isSet(object.redelegationEntry)) obj.redelegationEntry = RedelegationEntry.fromJSON(object.redelegationEntry);
    if (isSet(object.balance)) obj.balance = String(object.balance);
    return obj;
  },
  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    message.redelegationEntry !== undefined && (obj.redelegationEntry = message.redelegationEntry ? RedelegationEntry.toJSON(message.redelegationEntry) : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    if (object.redelegationEntry !== undefined && object.redelegationEntry !== null) {
      message.redelegationEntry = RedelegationEntry.fromPartial(object.redelegationEntry);
    }
    message.balance = object.balance ?? "";
    return message;
  },
  fromSDK(object: RedelegationEntryResponseSDKType): RedelegationEntryResponse {
    return {
      redelegationEntry: object.redelegation_entry ? RedelegationEntry.fromSDK(object.redelegation_entry) : undefined,
      balance: object?.balance
    };
  },
  fromSDKJSON(object: any): RedelegationEntryResponseSDKType {
    return {
      redelegation_entry: isSet(object.redelegation_entry) ? RedelegationEntry.fromSDKJSON(object.redelegation_entry) : undefined,
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },
  toSDK(message: RedelegationEntryResponse): RedelegationEntryResponseSDKType {
    const obj: any = {};
    message.redelegationEntry !== undefined && (obj.redelegation_entry = message.redelegationEntry ? RedelegationEntry.toSDK(message.redelegationEntry) : undefined);
    obj.balance = message.balance;
    return obj;
  }
};
function createBaseRedelegationResponse(): RedelegationResponse {
  return {
    redelegation: Redelegation.fromPartial({}),
    entries: []
  };
}
export const RedelegationResponse = {
  encode(message: RedelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationResponse {
    const obj = createBaseRedelegationResponse();
    if (isSet(object.redelegation)) obj.redelegation = Redelegation.fromJSON(object.redelegation);
    if (Array.isArray(object?.entries)) object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e));
    return obj;
  },
  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toJSON(message.redelegation) : undefined);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    if (object.redelegation !== undefined && object.redelegation !== null) {
      message.redelegation = Redelegation.fromPartial(object.redelegation);
    }
    message.entries = object.entries?.map(e => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: RedelegationResponseSDKType): RedelegationResponse {
    return {
      redelegation: object.redelegation ? Redelegation.fromSDK(object.redelegation) : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntryResponse.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): RedelegationResponseSDKType {
    return {
      redelegation: isSet(object.redelegation) ? Redelegation.fromSDKJSON(object.redelegation) : undefined,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntryResponse.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: RedelegationResponse): RedelegationResponseSDKType {
    const obj: any = {};
    message.redelegation !== undefined && (obj.redelegation = message.redelegation ? Redelegation.toSDK(message.redelegation) : undefined);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RedelegationEntryResponse.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  }
};
function createBasePool(): Pool {
  return {
    notBondedTokens: "",
    bondedTokens: ""
  };
}
export const Pool = {
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const obj = createBasePool();
    if (isSet(object.notBondedTokens)) obj.notBondedTokens = String(object.notBondedTokens);
    if (isSet(object.bondedTokens)) obj.bondedTokens = String(object.bondedTokens);
    return obj;
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.notBondedTokens !== undefined && (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== undefined && (obj.bondedTokens = message.bondedTokens);
    return obj;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
    return message;
  },
  fromSDK(object: PoolSDKType): Pool {
    return {
      notBondedTokens: object?.not_bonded_tokens,
      bondedTokens: object?.bonded_tokens
    };
  },
  fromSDKJSON(object: any): PoolSDKType {
    return {
      not_bonded_tokens: isSet(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
      bonded_tokens: isSet(object.bonded_tokens) ? String(object.bonded_tokens) : ""
    };
  },
  toSDK(message: Pool): PoolSDKType {
    const obj: any = {};
    obj.not_bonded_tokens = message.notBondedTokens;
    obj.bonded_tokens = message.bondedTokens;
    return obj;
  }
};