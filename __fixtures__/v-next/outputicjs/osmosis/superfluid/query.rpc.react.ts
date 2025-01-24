import { buildUseQuery } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
import { createGetParams, createGetAssetType, createGetAllAssets, createGetAssetMultiplier, createGetAllIntermediaryAccounts, createGetConnectedIntermediaryAccount, createGetTotalDelegationByValidatorForDenom, createGetTotalSuperfluidDelegations, createGetSuperfluidDelegationAmount, createGetSuperfluidDelegationsByDelegator, createGetSuperfluidUndelegationsByDelegator, createGetSuperfluidDelegationsByValidatorDenom, createGetEstimateSuperfluidDelegatedAmountByValidatorDenom, createGetTotalDelegationByDelegator, createGetUnpoolWhitelist } from "./query.rpc.func.ts";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetAssetType = buildUseQuery<AssetTypeRequest, AssetTypeResponse>({
  builderQueryFn: createGetAssetType,
  queryKeyPrefix: "AssetTypeQuery"
});
export const useGetAllAssets = buildUseQuery<AllAssetsRequest, AllAssetsResponse>({
  builderQueryFn: createGetAllAssets,
  queryKeyPrefix: "AllAssetsQuery"
});
export const useGetAssetMultiplier = buildUseQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  builderQueryFn: createGetAssetMultiplier,
  queryKeyPrefix: "AssetMultiplierQuery"
});
export const useGetAllIntermediaryAccounts = buildUseQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  builderQueryFn: createGetAllIntermediaryAccounts,
  queryKeyPrefix: "AllIntermediaryAccountsQuery"
});
export const useGetConnectedIntermediaryAccount = buildUseQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  builderQueryFn: createGetConnectedIntermediaryAccount,
  queryKeyPrefix: "ConnectedIntermediaryAccountQuery"
});
export const useGetTotalDelegationByValidatorForDenom = buildUseQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  builderQueryFn: createGetTotalDelegationByValidatorForDenom,
  queryKeyPrefix: "TotalDelegationByValidatorForDenomQuery"
});
export const useGetTotalSuperfluidDelegations = buildUseQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  builderQueryFn: createGetTotalSuperfluidDelegations,
  queryKeyPrefix: "TotalSuperfluidDelegationsQuery"
});
export const useGetSuperfluidDelegationAmount = buildUseQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  builderQueryFn: createGetSuperfluidDelegationAmount,
  queryKeyPrefix: "SuperfluidDelegationAmountQuery"
});
export const useGetSuperfluidDelegationsByDelegator = buildUseQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByDelegator,
  queryKeyPrefix: "SuperfluidDelegationsByDelegatorQuery"
});
export const useGetSuperfluidUndelegationsByDelegator = buildUseQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidUndelegationsByDelegator,
  queryKeyPrefix: "SuperfluidUndelegationsByDelegatorQuery"
});
export const useGetSuperfluidDelegationsByValidatorDenom = buildUseQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByValidatorDenom,
  queryKeyPrefix: "SuperfluidDelegationsByValidatorDenomQuery"
});
export const useGetEstimateSuperfluidDelegatedAmountByValidatorDenom = buildUseQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  builderQueryFn: createGetEstimateSuperfluidDelegatedAmountByValidatorDenom,
  queryKeyPrefix: "EstimateSuperfluidDelegatedAmountByValidatorDenomQuery"
});
export const useGetTotalDelegationByDelegator = buildUseQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  builderQueryFn: createGetTotalDelegationByDelegator,
  queryKeyPrefix: "TotalDelegationByDelegatorQuery"
});
export const useGetUnpoolWhitelist = buildUseQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  builderQueryFn: createGetUnpoolWhitelist,
  queryKeyPrefix: "UnpoolWhitelistQuery"
});