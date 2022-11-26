import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType, superfluidAssetTypeFromJSON, superfluidAssetTypeToJSON } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  /** params defines the parameters of the module. */
  params?: ParamsSDKType;
}
export interface AssetTypeRequest {
  denom: string;
}
export interface AssetTypeRequestSDKType {
  denom: string;
}
export interface AssetTypeResponse {
  assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseSDKType {
  asset_type: SuperfluidAssetTypeSDKType;
}
export interface AllAssetsRequest {}
export interface AllAssetsRequestSDKType {}
export interface AllAssetsResponse {
  assets: SuperfluidAsset[];
}
export interface AllAssetsResponseSDKType {
  assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
  denom: string;
}
export interface AssetMultiplierRequestSDKType {
  denom: string;
}
export interface AssetMultiplierResponse {
  osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface AssetMultiplierResponseSDKType {
  osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType;
}
export interface SuperfluidIntermediaryAccountInfo {
  denom: string;
  valAddr: string;
  gaugeId: Long;
  address: string;
}
export interface SuperfluidIntermediaryAccountInfoSDKType {
  denom: string;
  val_addr: string;
  gauge_id: Long;
  address: string;
}
export interface AllIntermediaryAccountsRequest {
  pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface AllIntermediaryAccountsResponse {
  accounts: SuperfluidIntermediaryAccountInfo[];
  pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseSDKType {
  accounts: SuperfluidIntermediaryAccountInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface ConnectedIntermediaryAccountRequest {
  lockId: Long;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
  lock_id: Long;
}
export interface ConnectedIntermediaryAccountResponse {
  account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
  account?: SuperfluidIntermediaryAccountInfoSDKType;
}
export interface TotalSuperfluidDelegationsRequest {}
export interface TotalSuperfluidDelegationsRequestSDKType {}
export interface TotalSuperfluidDelegationsResponse {
  totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
  total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationAmountRequestSDKType {
  delegator_address: string;
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationAmountResponse {
  amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseSDKType {
  amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
  delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
  delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount?: Coin;
}
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount?: CoinSDKType;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
  delegatorAddress: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
  delegator_address: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalUndelegatedCoins: Coin[];
  syntheticLocks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_undelegated_coins: CoinSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
  total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
  delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorRequestSDKType {
  delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  delegationResponse: DelegationResponse[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount?: Coin;
}
export interface QueryTotalDelegationByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  delegation_response: DelegationResponseSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount?: CoinSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toAmino(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },

  fromAmino(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toAmino(message.params) : undefined);
    return obj;
  }

};

function createBaseAssetTypeRequest(): AssetTypeRequest {
  return {
    denom: ""
  };
}

export const AssetTypeRequest = {
  encode(message: AssetTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetTypeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AssetTypeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetTypeRequest>): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: AssetTypeRequestSDKType): AssetTypeRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: AssetTypeRequest): AssetTypeRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromAmino(object: AssetTypeRequestSDKType): AssetTypeRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: AssetTypeRequest): AssetTypeRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseAssetTypeResponse(): AssetTypeResponse {
  return {
    assetType: 0
  };
}

export const AssetTypeResponse = {
  encode(message: AssetTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assetType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetTypeResponse {
    return {
      assetType: isSet(object.assetType) ? superfluidAssetTypeFromJSON(object.assetType) : 0
    };
  },

  toJSON(message: AssetTypeResponse): unknown {
    const obj: any = {};
    message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromPartial(object: DeepPartial<AssetTypeResponse>): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    message.assetType = object.assetType ?? 0;
    return message;
  },

  fromSDK(object: AssetTypeResponseSDKType): AssetTypeResponse {
    return {
      assetType: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : 0
    };
  },

  toSDK(message: AssetTypeResponse): AssetTypeResponseSDKType {
    const obj: any = {};
    message.assetType !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromAmino(object: AssetTypeResponseSDKType): AssetTypeResponse {
    return {
      assetType: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : 0
    };
  },

  toAmino(message: AssetTypeResponse): AssetTypeResponseSDKType {
    const obj: any = {};
    message.assetType !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  }

};

function createBaseAllAssetsRequest(): AllAssetsRequest {
  return {};
}

export const AllAssetsRequest = {
  encode(_: AllAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();

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

  fromJSON(_: any): AllAssetsRequest {
    return {};
  },

  toJSON(_: AllAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AllAssetsRequest>): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },

  fromSDK(_: AllAssetsRequestSDKType): AllAssetsRequest {
    return {};
  },

  toSDK(_: AllAssetsRequest): AllAssetsRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: AllAssetsRequestSDKType): AllAssetsRequest {
    return {};
  },

  toAmino(_: AllAssetsRequest): AllAssetsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseAllAssetsResponse(): AllAssetsResponse {
  return {
    assets: []
  };
}

export const AllAssetsResponse = {
  encode(message: AllAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromJSON(e)) : []
    };
  },

  toJSON(message: AllAssetsResponse): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AllAssetsResponse>): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: AllAssetsResponseSDKType): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromSDK(e)) : []
    };
  },

  toSDK(message: AllAssetsResponse): AllAssetsResponseSDKType {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromAmino(object: AllAssetsResponseSDKType): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromAmino(e)) : []
    };
  },

  toAmino(message: AllAssetsResponse): AllAssetsResponseSDKType {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  }

};

function createBaseAssetMultiplierRequest(): AssetMultiplierRequest {
  return {
    denom: ""
  };
}

export const AssetMultiplierRequest = {
  encode(message: AssetMultiplierRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetMultiplierRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AssetMultiplierRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetMultiplierRequest>): AssetMultiplierRequest {
    const message = createBaseAssetMultiplierRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: AssetMultiplierRequestSDKType): AssetMultiplierRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: AssetMultiplierRequest): AssetMultiplierRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromAmino(object: AssetMultiplierRequestSDKType): AssetMultiplierRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: AssetMultiplierRequest): AssetMultiplierRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseAssetMultiplierResponse(): AssetMultiplierResponse {
  return {
    osmoEquivalentMultiplier: undefined
  };
}

export const AssetMultiplierResponse = {
  encode(message: AssetMultiplierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.osmoEquivalentMultiplier !== undefined) {
      OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: isSet(object.osmoEquivalentMultiplier) ? OsmoEquivalentMultiplierRecord.fromJSON(object.osmoEquivalentMultiplier) : undefined
    };
  },

  toJSON(message: AssetMultiplierResponse): unknown {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined && (obj.osmoEquivalentMultiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toJSON(message.osmoEquivalentMultiplier) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetMultiplierResponse>): AssetMultiplierResponse {
    const message = createBaseAssetMultiplierResponse();
    message.osmoEquivalentMultiplier = object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null ? OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier) : undefined;
    return message;
  },

  fromSDK(object: AssetMultiplierResponseSDKType): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: isSet(object.osmo_equivalent_multiplier) ? OsmoEquivalentMultiplierRecord.fromSDK(object.osmo_equivalent_multiplier) : undefined
    };
  },

  toSDK(message: AssetMultiplierResponse): AssetMultiplierResponseSDKType {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toSDK(message.osmoEquivalentMultiplier) : undefined);
    return obj;
  },

  fromAmino(object: AssetMultiplierResponseSDKType): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: isSet(object.osmo_equivalent_multiplier) ? OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier) : undefined
    };
  },

  toAmino(message: AssetMultiplierResponse): AssetMultiplierResponseSDKType {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toAmino(message.osmoEquivalentMultiplier) : undefined);
    return obj;
  }

};

function createBaseSuperfluidIntermediaryAccountInfo(): SuperfluidIntermediaryAccountInfo {
  return {
    denom: "",
    valAddr: "",
    gaugeId: Long.UZERO,
    address: ""
  };
}

export const SuperfluidIntermediaryAccountInfo = {
  encode(message: SuperfluidIntermediaryAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }

    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccountInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.valAddr = reader.string();
          break;

        case 3:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 4:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidIntermediaryAccountInfo {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: SuperfluidIntermediaryAccountInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo {
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },

  fromSDK(object: SuperfluidIntermediaryAccountInfoSDKType): SuperfluidIntermediaryAccountInfo {
    return {
      denom: isSet(object.denom) ? object.denom : undefined,
      valAddr: isSet(object.val_addr) ? object.val_addr : undefined,
      gaugeId: isSet(object.gauge_id) ? object.gauge_id : undefined,
      address: isSet(object.address) ? object.address : undefined
    };
  },

  toSDK(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.val_addr = message.valAddr);
    message.gaugeId !== undefined && (obj.gauge_id = message.gaugeId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromAmino(object: SuperfluidIntermediaryAccountInfoSDKType): SuperfluidIntermediaryAccountInfo {
    return {
      denom: isSet(object.denom) ? object.denom : undefined,
      valAddr: isSet(object.val_addr) ? object.val_addr : undefined,
      gaugeId: isSet(object.gauge_id) ? object.gauge_id : undefined,
      address: isSet(object.address) ? object.address : undefined
    };
  },

  toAmino(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.val_addr = message.valAddr);
    message.gaugeId !== undefined && (obj.gauge_id = message.gaugeId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  }

};

function createBaseAllIntermediaryAccountsRequest(): AllIntermediaryAccountsRequest {
  return {
    pagination: undefined
  };
}

export const AllIntermediaryAccountsRequest = {
  encode(message: AllIntermediaryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllIntermediaryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AllIntermediaryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest {
    const message = createBaseAllIntermediaryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: AllIntermediaryAccountsRequestSDKType): AllIntermediaryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: AllIntermediaryAccountsRequestSDKType): AllIntermediaryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined);
    return obj;
  }

};

function createBaseAllIntermediaryAccountsResponse(): AllIntermediaryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}

export const AllIntermediaryAccountsResponse = {
  encode(message: AllIntermediaryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      SuperfluidIntermediaryAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AllIntermediaryAccountsResponse): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse {
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: AllIntermediaryAccountsResponseSDKType): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromSDK(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseSDKType {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toSDK(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: AllIntermediaryAccountsResponseSDKType): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromAmino(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseSDKType {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined);
    return obj;
  }

};

function createBaseConnectedIntermediaryAccountRequest(): ConnectedIntermediaryAccountRequest {
  return {
    lockId: Long.UZERO
  };
}

export const ConnectedIntermediaryAccountRequest = {
  encode(message: ConnectedIntermediaryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },

  toJSON(message: ConnectedIntermediaryAccountRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest {
    const message = createBaseConnectedIntermediaryAccountRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },

  fromSDK(object: ConnectedIntermediaryAccountRequestSDKType): ConnectedIntermediaryAccountRequest {
    return {
      lockId: isSet(object.lock_id) ? object.lock_id : undefined
    };
  },

  toSDK(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestSDKType {
    const obj: any = {};
    message.lockId !== undefined && (obj.lock_id = message.lockId);
    return obj;
  },

  fromAmino(object: ConnectedIntermediaryAccountRequestSDKType): ConnectedIntermediaryAccountRequest {
    return {
      lockId: isSet(object.lock_id) ? object.lock_id : undefined
    };
  },

  toAmino(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestSDKType {
    const obj: any = {};
    message.lockId !== undefined && (obj.lock_id = message.lockId);
    return obj;
  }

};

function createBaseConnectedIntermediaryAccountResponse(): ConnectedIntermediaryAccountResponse {
  return {
    account: undefined
  };
}

export const ConnectedIntermediaryAccountResponse = {
  encode(message: ConnectedIntermediaryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountResponse {
    return {
      account: isSet(object.account) ? SuperfluidIntermediaryAccountInfo.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: ConnectedIntermediaryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse {
    const message = createBaseConnectedIntermediaryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
    return message;
  },

  fromSDK(object: ConnectedIntermediaryAccountResponseSDKType): ConnectedIntermediaryAccountResponse {
    return {
      account: isSet(object.account) ? SuperfluidIntermediaryAccountInfo.fromSDK(object.account) : undefined
    };
  },

  toSDK(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseSDKType {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toSDK(message.account) : undefined);
    return obj;
  },

  fromAmino(object: ConnectedIntermediaryAccountResponseSDKType): ConnectedIntermediaryAccountResponse {
    return {
      account: isSet(object.account) ? SuperfluidIntermediaryAccountInfo.fromAmino(object.account) : undefined
    };
  },

  toAmino(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseSDKType {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toAmino(message.account) : undefined);
    return obj;
  }

};

function createBaseTotalSuperfluidDelegationsRequest(): TotalSuperfluidDelegationsRequest {
  return {};
}

export const TotalSuperfluidDelegationsRequest = {
  encode(_: TotalSuperfluidDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsRequest();

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

  fromJSON(_: any): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toJSON(_: TotalSuperfluidDelegationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  },

  fromSDK(_: TotalSuperfluidDelegationsRequestSDKType): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toSDK(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: TotalSuperfluidDelegationsRequestSDKType): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toAmino(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseTotalSuperfluidDelegationsResponse(): TotalSuperfluidDelegationsResponse {
  return {
    totalDelegations: ""
  };
}

export const TotalSuperfluidDelegationsResponse = {
  encode(message: TotalSuperfluidDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: isSet(object.totalDelegations) ? String(object.totalDelegations) : ""
    };
  },

  toJSON(message: TotalSuperfluidDelegationsResponse): unknown {
    const obj: any = {};
    message.totalDelegations !== undefined && (obj.totalDelegations = message.totalDelegations);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse {
    const message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = object.totalDelegations ?? "";
    return message;
  },

  fromSDK(object: TotalSuperfluidDelegationsResponseSDKType): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: isSet(object.total_delegations) ? object.total_delegations : undefined
    };
  },

  toSDK(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseSDKType {
    const obj: any = {};
    message.totalDelegations !== undefined && (obj.total_delegations = message.totalDelegations);
    return obj;
  },

  fromAmino(object: TotalSuperfluidDelegationsResponseSDKType): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: isSet(object.total_delegations) ? object.total_delegations : undefined
    };
  },

  toAmino(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseSDKType {
    const obj: any = {};
    message.totalDelegations !== undefined && (obj.total_delegations = message.totalDelegations);
    return obj;
  }

};

function createBaseSuperfluidDelegationAmountRequest(): SuperfluidDelegationAmountRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: ""
  };
}

export const SuperfluidDelegationAmountRequest = {
  encode(message: SuperfluidDelegationAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountRequest();

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
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidDelegationAmountRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest {
    const message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: SuperfluidDelegationAmountRequestSDKType): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromAmino(object: SuperfluidDelegationAmountRequestSDKType): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseSuperfluidDelegationAmountResponse(): SuperfluidDelegationAmountResponse {
  return {
    amount: []
  };
}

export const SuperfluidDelegationAmountResponse = {
  encode(message: SuperfluidDelegationAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidDelegationAmountResponse): unknown {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse {
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SuperfluidDelegationAmountResponseSDKType): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseSDKType {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromAmino(object: SuperfluidDelegationAmountResponseSDKType): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseSDKType {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseSuperfluidDelegationsByDelegatorRequest(): SuperfluidDelegationsByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}

export const SuperfluidDelegationsByDelegatorRequest = {
  encode(message: SuperfluidDelegationsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest {
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByDelegatorRequestSDKType): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined
    };
  },

  toSDK(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByDelegatorRequestSDKType): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined
    };
  },

  toAmino(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    return obj;
  }

};

function createBaseSuperfluidDelegationsByDelegatorResponse(): SuperfluidDelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}

export const SuperfluidDelegationsByDelegatorResponse = {
  encode(message: SuperfluidDelegationsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      totalEquivalentStakedAmount: isSet(object.totalEquivalentStakedAmount) ? Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse {
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByDelegatorResponseSDKType): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      totalEquivalentStakedAmount: isSet(object.total_equivalent_staked_amount) ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
    };
  },

  toSDK(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByDelegatorResponseSDKType): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      totalEquivalentStakedAmount: isSet(object.total_equivalent_staked_amount) ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
    };
  },

  toAmino(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  }

};

function createBaseSuperfluidUndelegationsByDelegatorRequest(): SuperfluidUndelegationsByDelegatorRequest {
  return {
    delegatorAddress: "",
    denom: ""
  };
}

export const SuperfluidUndelegationsByDelegatorRequest = {
  encode(message: SuperfluidUndelegationsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest {
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: SuperfluidUndelegationsByDelegatorRequestSDKType): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromAmino(object: SuperfluidUndelegationsByDelegatorRequestSDKType): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseSuperfluidUndelegationsByDelegatorResponse(): SuperfluidUndelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: []
  };
}

export const SuperfluidUndelegationsByDelegatorResponse = {
  encode(message: SuperfluidUndelegationsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalUndelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.totalUndelegatedCoins.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.totalUndelegatedCoins) ? object.totalUndelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.totalUndelegatedCoins = message.totalUndelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalUndelegatedCoins = [];
    }

    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.syntheticLocks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse {
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalUndelegatedCoins = object.totalUndelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SuperfluidUndelegationsByDelegatorResponseSDKType): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromSDK(e)) : []
    };
  },

  toSDK(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_undelegated_coins = [];
    }

    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  },

  fromAmino(object: SuperfluidUndelegationsByDelegatorResponseSDKType): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_undelegated_coins = [];
    }

    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  }

};

function createBaseSuperfluidDelegationsByValidatorDenomRequest(): SuperfluidDelegationsByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}

export const SuperfluidDelegationsByValidatorDenomRequest = {
  encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest {
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByValidatorDenomRequestSDKType): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestSDKType {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestSDKType): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestSDKType {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseSuperfluidDelegationsByValidatorDenomResponse(): SuperfluidDelegationsByValidatorDenomResponse {
  return {
    superfluidDelegationRecords: []
  };
}

export const SuperfluidDelegationsByValidatorDenomResponse = {
  encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse {
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByValidatorDenomResponseSDKType): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : []
    };
  },

  toSDK(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseSDKType): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    return obj;
  }

};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest(): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validator_address) ? object.validator_address : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validator_address = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse(): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  return {
    totalDelegatedCoins: []
  };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    return obj;
  },

  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    return obj;
  }

};

function createBaseQueryTotalDelegationByDelegatorRequest(): QueryTotalDelegationByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}

export const QueryTotalDelegationByDelegatorRequest = {
  encode(message: QueryTotalDelegationByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },

  toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest {
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },

  fromSDK(object: QueryTotalDelegationByDelegatorRequestSDKType): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined
    };
  },

  toSDK(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    return obj;
  },

  fromAmino(object: QueryTotalDelegationByDelegatorRequestSDKType): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegator_address) ? object.delegator_address : undefined
    };
  },

  toAmino(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestSDKType {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegator_address = message.delegatorAddress);
    return obj;
  }

};

function createBaseQueryTotalDelegationByDelegatorResponse(): QueryTotalDelegationByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    delegationResponse: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}

export const QueryTotalDelegationByDelegatorResponse = {
  encode(message: QueryTotalDelegationByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.delegationResponse) {
      DelegationResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.delegationResponse.push(DelegationResponse.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      delegationResponse: Array.isArray(object?.delegationResponse) ? object.delegationResponse.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      totalEquivalentStakedAmount: isSet(object.totalEquivalentStakedAmount) ? Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
    };
  },

  toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.delegationResponse) {
      obj.delegationResponse = message.delegationResponse.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponse = [];
    }

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse {
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.delegationResponse = object.delegationResponse?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  },

  fromSDK(object: QueryTotalDelegationByDelegatorResponseSDKType): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      delegationResponse: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e: any) => DelegationResponse.fromSDK(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      totalEquivalentStakedAmount: isSet(object.total_equivalent_staked_amount) ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
    };
  },

  toSDK(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.delegationResponse) {
      obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toSDK(e) : undefined);
    } else {
      obj.delegation_response = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromAmino(object: QueryTotalDelegationByDelegatorResponseSDKType): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      delegationResponse: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e: any) => DelegationResponse.fromAmino(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      totalEquivalentStakedAmount: isSet(object.total_equivalent_staked_amount) ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
    };
  },

  toAmino(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.delegationResponse) {
      obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_response = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  }

};