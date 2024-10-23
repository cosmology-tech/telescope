import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.superfluid.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetAssetType = (getRpcInstance: RpcResolver) => buildQuery<AssetTypeRequest, AssetTypeResponse>({
  encode: AssetTypeRequest.encode,
  decode: AssetTypeResponse.decode,
  service: "osmosis.superfluid.AssetType",
  method: "AssetType",
  getRpcInstance: getRpcInstance
});
export const useGetAssetType = buildUseQuery<AssetTypeRequest, AssetTypeResponse>({
  builderQueryFn: createGetAssetType,
  queryKeyPrefix: "AssetTypeQuery"
});
export const createGetAllAssets = (getRpcInstance: RpcResolver) => buildQuery<AllAssetsRequest, AllAssetsResponse>({
  encode: AllAssetsRequest.encode,
  decode: AllAssetsResponse.decode,
  service: "osmosis.superfluid.AllAssets",
  method: "AllAssets",
  getRpcInstance: getRpcInstance
});
export const useGetAllAssets = buildUseQuery<AllAssetsRequest, AllAssetsResponse>({
  builderQueryFn: createGetAllAssets,
  queryKeyPrefix: "AllAssetsQuery"
});
export const createGetAssetMultiplier = (getRpcInstance: RpcResolver) => buildQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  encode: AssetMultiplierRequest.encode,
  decode: AssetMultiplierResponse.decode,
  service: "osmosis.superfluid.AssetMultiplier",
  method: "AssetMultiplier",
  getRpcInstance: getRpcInstance
});
export const useGetAssetMultiplier = buildUseQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  builderQueryFn: createGetAssetMultiplier,
  queryKeyPrefix: "AssetMultiplierQuery"
});
export const createGetAllIntermediaryAccounts = (getRpcInstance: RpcResolver) => buildQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  encode: AllIntermediaryAccountsRequest.encode,
  decode: AllIntermediaryAccountsResponse.decode,
  service: "osmosis.superfluid.AllIntermediaryAccounts",
  method: "AllIntermediaryAccounts",
  getRpcInstance: getRpcInstance
});
export const useGetAllIntermediaryAccounts = buildUseQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  builderQueryFn: createGetAllIntermediaryAccounts,
  queryKeyPrefix: "AllIntermediaryAccountsQuery"
});
export const createGetConnectedIntermediaryAccount = (getRpcInstance: RpcResolver) => buildQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  encode: ConnectedIntermediaryAccountRequest.encode,
  decode: ConnectedIntermediaryAccountResponse.decode,
  service: "osmosis.superfluid.ConnectedIntermediaryAccount",
  method: "ConnectedIntermediaryAccount",
  getRpcInstance: getRpcInstance
});
export const useGetConnectedIntermediaryAccount = buildUseQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  builderQueryFn: createGetConnectedIntermediaryAccount,
  queryKeyPrefix: "ConnectedIntermediaryAccountQuery"
});
export const createGetTotalDelegationByValidatorForDenom = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  encode: QueryTotalDelegationByValidatorForDenomRequest.encode,
  decode: QueryTotalDelegationByValidatorForDenomResponse.decode,
  service: "osmosis.superfluid.TotalDelegationByValidatorForDenom",
  method: "TotalDelegationByValidatorForDenom",
  getRpcInstance: getRpcInstance
});
export const useGetTotalDelegationByValidatorForDenom = buildUseQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  builderQueryFn: createGetTotalDelegationByValidatorForDenom,
  queryKeyPrefix: "TotalDelegationByValidatorForDenomQuery"
});
export const createGetTotalSuperfluidDelegations = (getRpcInstance: RpcResolver) => buildQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  encode: TotalSuperfluidDelegationsRequest.encode,
  decode: TotalSuperfluidDelegationsResponse.decode,
  service: "osmosis.superfluid.TotalSuperfluidDelegations",
  method: "TotalSuperfluidDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetTotalSuperfluidDelegations = buildUseQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  builderQueryFn: createGetTotalSuperfluidDelegations,
  queryKeyPrefix: "TotalSuperfluidDelegationsQuery"
});
export const createGetSuperfluidDelegationAmount = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  encode: SuperfluidDelegationAmountRequest.encode,
  decode: SuperfluidDelegationAmountResponse.decode,
  service: "osmosis.superfluid.SuperfluidDelegationAmount",
  method: "SuperfluidDelegationAmount",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidDelegationAmount = buildUseQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  builderQueryFn: createGetSuperfluidDelegationAmount,
  queryKeyPrefix: "SuperfluidDelegationAmountQuery"
});
export const createGetSuperfluidDelegationsByDelegator = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  encode: SuperfluidDelegationsByDelegatorRequest.encode,
  decode: SuperfluidDelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.SuperfluidDelegationsByDelegator",
  method: "SuperfluidDelegationsByDelegator",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidDelegationsByDelegator = buildUseQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByDelegator,
  queryKeyPrefix: "SuperfluidDelegationsByDelegatorQuery"
});
export const createGetSuperfluidUndelegationsByDelegator = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  encode: SuperfluidUndelegationsByDelegatorRequest.encode,
  decode: SuperfluidUndelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.SuperfluidUndelegationsByDelegator",
  method: "SuperfluidUndelegationsByDelegator",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidUndelegationsByDelegator = buildUseQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidUndelegationsByDelegator,
  queryKeyPrefix: "SuperfluidUndelegationsByDelegatorQuery"
});
export const createGetSuperfluidDelegationsByValidatorDenom = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  encode: SuperfluidDelegationsByValidatorDenomRequest.encode,
  decode: SuperfluidDelegationsByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.SuperfluidDelegationsByValidatorDenom",
  method: "SuperfluidDelegationsByValidatorDenom",
  getRpcInstance: getRpcInstance
});
export const useGetSuperfluidDelegationsByValidatorDenom = buildUseQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByValidatorDenom,
  queryKeyPrefix: "SuperfluidDelegationsByValidatorDenomQuery"
});
export const createGetEstimateSuperfluidDelegatedAmountByValidatorDenom = (getRpcInstance: RpcResolver) => buildQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  encode: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode,
  decode: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenom",
  method: "EstimateSuperfluidDelegatedAmountByValidatorDenom",
  getRpcInstance: getRpcInstance
});
export const useGetEstimateSuperfluidDelegatedAmountByValidatorDenom = buildUseQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  builderQueryFn: createGetEstimateSuperfluidDelegatedAmountByValidatorDenom,
  queryKeyPrefix: "EstimateSuperfluidDelegatedAmountByValidatorDenomQuery"
});
export const createGetTotalDelegationByDelegator = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  encode: QueryTotalDelegationByDelegatorRequest.encode,
  decode: QueryTotalDelegationByDelegatorResponse.decode,
  service: "osmosis.superfluid.TotalDelegationByDelegator",
  method: "TotalDelegationByDelegator",
  getRpcInstance: getRpcInstance
});
export const useGetTotalDelegationByDelegator = buildUseQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  builderQueryFn: createGetTotalDelegationByDelegator,
  queryKeyPrefix: "TotalDelegationByDelegatorQuery"
});
export const createGetUnpoolWhitelist = (getRpcInstance: RpcResolver) => buildQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  encode: QueryUnpoolWhitelistRequest.encode,
  decode: QueryUnpoolWhitelistResponse.decode,
  service: "osmosis.superfluid.UnpoolWhitelist",
  method: "UnpoolWhitelist",
  getRpcInstance: getRpcInstance
});
export const useGetUnpoolWhitelist = buildUseQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  builderQueryFn: createGetUnpoolWhitelist,
  queryKeyPrefix: "UnpoolWhitelistQuery"
});