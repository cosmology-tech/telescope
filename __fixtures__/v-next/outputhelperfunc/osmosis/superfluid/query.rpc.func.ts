import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { SigningClientResolver } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetAssetType = (getRpcInstance: SigningClientResolver) => buildQuery<AssetTypeRequest, AssetTypeResponse>({
  encoder: AssetTypeRequest.encode,
  decoder: AssetTypeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AssetType",
  getRpcInstance: getRpcInstance
});
export const useGetAssetType = buildUseQuery<AssetTypeRequest, AssetTypeResponse>({
  builderQueryFn: createGetAssetType,
  queryKeyPrefix: "AssetTypeQuery"
});
export const createGetAllAssets = (getRpcInstance: SigningClientResolver) => buildQuery<AllAssetsRequest, AllAssetsResponse>({
  encoder: AllAssetsRequest.encode,
  decoder: AllAssetsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllAssets",
  getRpcInstance: getRpcInstance
});
export const useGetAllAssets = buildUseQuery<AllAssetsRequest, AllAssetsResponse>({
  builderQueryFn: createGetAllAssets,
  queryKeyPrefix: "AllAssetsQuery"
});
export const createGetAssetMultiplier = (getRpcInstance: SigningClientResolver) => buildQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  encoder: AssetMultiplierRequest.encode,
  decoder: AssetMultiplierResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AssetMultiplier",
  getRpcInstance: getRpcInstance
});
export const useGetAssetMultiplier = buildUseQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  builderQueryFn: createGetAssetMultiplier,
  queryKeyPrefix: "AssetMultiplierQuery"
});
export const createGetAllIntermediaryAccounts = (getRpcInstance: SigningClientResolver) => buildQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  encoder: AllIntermediaryAccountsRequest.encode,
  decoder: AllIntermediaryAccountsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllIntermediaryAccounts",
  getRpcInstance: getRpcInstance
});
export const useGetAllIntermediaryAccounts = buildUseQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  builderQueryFn: createGetAllIntermediaryAccounts,
  queryKeyPrefix: "AllIntermediaryAccountsQuery"
});
export const createGetConnectedIntermediaryAccount = (getRpcInstance: SigningClientResolver) => buildQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  encoder: ConnectedIntermediaryAccountRequest.encode,
  decoder: ConnectedIntermediaryAccountResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ConnectedIntermediaryAccount",
  getRpcInstance: getRpcInstance
});
export const useGetConnectedIntermediaryAccount = buildUseQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  builderQueryFn: createGetConnectedIntermediaryAccount,
  queryKeyPrefix: "ConnectedIntermediaryAccountQuery"
});
export const createGetTotalDelegationByValidatorForDenom = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  encoder: QueryTotalDelegationByValidatorForDenomRequest.encode,
  decoder: QueryTotalDelegationByValidatorForDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalDelegationByValidatorForDenom",
  getRpcInstance: getRpcInstance
});
export const useGetTotalDelegationByValidatorForDenom = buildUseQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  builderQueryFn: createGetTotalDelegationByValidatorForDenom,
  queryKeyPrefix: "TotalDelegationByValidatorForDenomQuery"
});
export const createGetTotalSuperfluidDelegations = (getRpcInstance: SigningClientResolver) => buildQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  encoder: TotalSuperfluidDelegationsRequest.encode,
  decoder: TotalSuperfluidDelegationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalSuperfluidDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetTotalSuperfluidDelegations = buildUseQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  builderQueryFn: createGetTotalSuperfluidDelegations,
  queryKeyPrefix: "TotalSuperfluidDelegationsQuery"
});
export const createGetSuperfluidDelegationAmount = (getRpcInstance: SigningClientResolver) => buildQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  encoder: SuperfluidDelegationAmountRequest.encode,
  decoder: SuperfluidDelegationAmountResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SuperfluidDelegationAmount",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidDelegationAmount = buildUseQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  builderQueryFn: createGetSuperfluidDelegationAmount,
  queryKeyPrefix: "SuperfluidDelegationAmountQuery"
});
export const createGetSuperfluidDelegationsByDelegator = (getRpcInstance: SigningClientResolver) => buildQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  encoder: SuperfluidDelegationsByDelegatorRequest.encode,
  decoder: SuperfluidDelegationsByDelegatorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SuperfluidDelegationsByDelegator",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidDelegationsByDelegator = buildUseQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByDelegator,
  queryKeyPrefix: "SuperfluidDelegationsByDelegatorQuery"
});
export const createGetSuperfluidUndelegationsByDelegator = (getRpcInstance: SigningClientResolver) => buildQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  encoder: SuperfluidUndelegationsByDelegatorRequest.encode,
  decoder: SuperfluidUndelegationsByDelegatorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SuperfluidUndelegationsByDelegator",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidUndelegationsByDelegator = buildUseQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidUndelegationsByDelegator,
  queryKeyPrefix: "SuperfluidUndelegationsByDelegatorQuery"
});
export const createGetSuperfluidDelegationsByValidatorDenom = (getRpcInstance: SigningClientResolver) => buildQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  encoder: SuperfluidDelegationsByValidatorDenomRequest.encode,
  decoder: SuperfluidDelegationsByValidatorDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SuperfluidDelegationsByValidatorDenom",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidDelegationsByValidatorDenom = buildUseQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByValidatorDenom,
  queryKeyPrefix: "SuperfluidDelegationsByValidatorDenomQuery"
});
export const createGetEstimateSuperfluidDelegatedAmountByValidatorDenom = (getRpcInstance: SigningClientResolver) => buildQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  encoder: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode,
  decoder: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "EstimateSuperfluidDelegatedAmountByValidatorDenom",
  getRpcInstance: getRpcInstance
});
export const useGetEstimateSuperfluidDelegatedAmountByValidatorDenom = buildUseQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  builderQueryFn: createGetEstimateSuperfluidDelegatedAmountByValidatorDenom,
  queryKeyPrefix: "EstimateSuperfluidDelegatedAmountByValidatorDenomQuery"
});
export const createGetTotalDelegationByDelegator = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  encoder: QueryTotalDelegationByDelegatorRequest.encode,
  decoder: QueryTotalDelegationByDelegatorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalDelegationByDelegator",
  getRpcInstance: getRpcInstance
});
export const useGetTotalDelegationByDelegator = buildUseQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  builderQueryFn: createGetTotalDelegationByDelegator,
  queryKeyPrefix: "TotalDelegationByDelegatorQuery"
});
export const createGetUnpoolWhitelist = (getRpcInstance: SigningClientResolver) => buildQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  encoder: QueryUnpoolWhitelistRequest.encode,
  decoder: QueryUnpoolWhitelistResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UnpoolWhitelist",
  getRpcInstance: getRpcInstance
});
export const useGetUnpoolWhitelist = buildUseQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  builderQueryFn: createGetUnpoolWhitelist,
  queryKeyPrefix: "UnpoolWhitelistQuery"
});