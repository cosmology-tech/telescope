import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
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
export const createGetAssetType = (getRpcInstance: RpcResolver) => buildQuery<AssetTypeRequest, AssetTypeResponse>({
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
export const createGetAllAssets = (getRpcInstance: RpcResolver) => buildQuery<AllAssetsRequest, AllAssetsResponse>({
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
export const createGetAssetMultiplier = (getRpcInstance: RpcResolver) => buildQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
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
export const createGetAllIntermediaryAccounts = (getRpcInstance: RpcResolver) => buildQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
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
export const createGetConnectedIntermediaryAccount = (getRpcInstance: RpcResolver) => buildQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
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
export const createGetTotalDelegationByValidatorForDenom = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
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
export const createGetTotalSuperfluidDelegations = (getRpcInstance: RpcResolver) => buildQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
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
export const createGetSuperfluidDelegationAmount = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
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
export const createGetSuperfluidDelegationsByDelegator = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
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
export const createGetSuperfluidUndelegationsByDelegator = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
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
export const createGetSuperfluidDelegationsByValidatorDenom = (getRpcInstance: RpcResolver) => buildQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
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
export const createGetEstimateSuperfluidDelegatedAmountByValidatorDenom = (getRpcInstance: RpcResolver) => buildQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
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
export const createGetTotalDelegationByDelegator = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
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
export const createGetUnpoolWhitelist = (getRpcInstance: RpcResolver) => buildQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
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