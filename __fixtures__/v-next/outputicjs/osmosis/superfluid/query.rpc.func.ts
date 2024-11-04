import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
export const createGetParams = (clientResolver: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetAssetType = (clientResolver: RpcResolver) => buildQuery<AssetTypeRequest, AssetTypeResponse>({
  encode: AssetTypeRequest.encode,
  decode: AssetTypeResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetType",
  clientResolver
});
export const useGetAssetType = buildUseQuery<AssetTypeRequest, AssetTypeResponse>({
  builderQueryFn: createGetAssetType,
  queryKeyPrefix: "AssetTypeQuery"
});
export const createGetAllAssets = (clientResolver: RpcResolver) => buildQuery<AllAssetsRequest, AllAssetsResponse>({
  encode: AllAssetsRequest.encode,
  decode: AllAssetsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllAssets",
  clientResolver
});
export const useGetAllAssets = buildUseQuery<AllAssetsRequest, AllAssetsResponse>({
  builderQueryFn: createGetAllAssets,
  queryKeyPrefix: "AllAssetsQuery"
});
export const createGetAssetMultiplier = (clientResolver: RpcResolver) => buildQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  encode: AssetMultiplierRequest.encode,
  decode: AssetMultiplierResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetMultiplier",
  clientResolver
});
export const useGetAssetMultiplier = buildUseQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  builderQueryFn: createGetAssetMultiplier,
  queryKeyPrefix: "AssetMultiplierQuery"
});
export const createGetAllIntermediaryAccounts = (clientResolver: RpcResolver) => buildQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  encode: AllIntermediaryAccountsRequest.encode,
  decode: AllIntermediaryAccountsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllIntermediaryAccounts",
  clientResolver
});
export const useGetAllIntermediaryAccounts = buildUseQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  builderQueryFn: createGetAllIntermediaryAccounts,
  queryKeyPrefix: "AllIntermediaryAccountsQuery"
});
export const createGetConnectedIntermediaryAccount = (clientResolver: RpcResolver) => buildQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  encode: ConnectedIntermediaryAccountRequest.encode,
  decode: ConnectedIntermediaryAccountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "ConnectedIntermediaryAccount",
  clientResolver
});
export const useGetConnectedIntermediaryAccount = buildUseQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  builderQueryFn: createGetConnectedIntermediaryAccount,
  queryKeyPrefix: "ConnectedIntermediaryAccountQuery"
});
export const createGetTotalDelegationByValidatorForDenom = (clientResolver: RpcResolver) => buildQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  encode: QueryTotalDelegationByValidatorForDenomRequest.encode,
  decode: QueryTotalDelegationByValidatorForDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByValidatorForDenom",
  clientResolver
});
export const useGetTotalDelegationByValidatorForDenom = buildUseQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  builderQueryFn: createGetTotalDelegationByValidatorForDenom,
  queryKeyPrefix: "TotalDelegationByValidatorForDenomQuery"
});
export const createGetTotalSuperfluidDelegations = (clientResolver: RpcResolver) => buildQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  encode: TotalSuperfluidDelegationsRequest.encode,
  decode: TotalSuperfluidDelegationsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalSuperfluidDelegations",
  clientResolver
});
export const useGetTotalSuperfluidDelegations = buildUseQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  builderQueryFn: createGetTotalSuperfluidDelegations,
  queryKeyPrefix: "TotalSuperfluidDelegationsQuery"
});
export const createGetSuperfluidDelegationAmount = (clientResolver: RpcResolver) => buildQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  encode: SuperfluidDelegationAmountRequest.encode,
  decode: SuperfluidDelegationAmountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationAmount",
  clientResolver
});
export const useGetSuperfluidDelegationAmount = buildUseQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  builderQueryFn: createGetSuperfluidDelegationAmount,
  queryKeyPrefix: "SuperfluidDelegationAmountQuery"
});
export const createGetSuperfluidDelegationsByDelegator = (clientResolver: RpcResolver) => buildQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  encode: SuperfluidDelegationsByDelegatorRequest.encode,
  decode: SuperfluidDelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByDelegator",
  clientResolver
});
export const useGetSuperfluidDelegationsByDelegator = buildUseQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByDelegator,
  queryKeyPrefix: "SuperfluidDelegationsByDelegatorQuery"
});
export const createGetSuperfluidUndelegationsByDelegator = (clientResolver: RpcResolver) => buildQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  encode: SuperfluidUndelegationsByDelegatorRequest.encode,
  decode: SuperfluidUndelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidUndelegationsByDelegator",
  clientResolver
});
export const useGetSuperfluidUndelegationsByDelegator = buildUseQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  builderQueryFn: createGetSuperfluidUndelegationsByDelegator,
  queryKeyPrefix: "SuperfluidUndelegationsByDelegatorQuery"
});
export const createGetSuperfluidDelegationsByValidatorDenom = (clientResolver: RpcResolver) => buildQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  encode: SuperfluidDelegationsByValidatorDenomRequest.encode,
  decode: SuperfluidDelegationsByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByValidatorDenom",
  clientResolver
});
export const useGetSuperfluidDelegationsByValidatorDenom = buildUseQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  builderQueryFn: createGetSuperfluidDelegationsByValidatorDenom,
  queryKeyPrefix: "SuperfluidDelegationsByValidatorDenomQuery"
});
export const createGetEstimateSuperfluidDelegatedAmountByValidatorDenom = (clientResolver: RpcResolver) => buildQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  encode: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode,
  decode: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "EstimateSuperfluidDelegatedAmountByValidatorDenom",
  clientResolver
});
export const useGetEstimateSuperfluidDelegatedAmountByValidatorDenom = buildUseQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  builderQueryFn: createGetEstimateSuperfluidDelegatedAmountByValidatorDenom,
  queryKeyPrefix: "EstimateSuperfluidDelegatedAmountByValidatorDenomQuery"
});
export const createGetTotalDelegationByDelegator = (clientResolver: RpcResolver) => buildQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  encode: QueryTotalDelegationByDelegatorRequest.encode,
  decode: QueryTotalDelegationByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByDelegator",
  clientResolver
});
export const useGetTotalDelegationByDelegator = buildUseQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  builderQueryFn: createGetTotalDelegationByDelegator,
  queryKeyPrefix: "TotalDelegationByDelegatorQuery"
});
export const createGetUnpoolWhitelist = (clientResolver: RpcResolver) => buildQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  encode: QueryUnpoolWhitelistRequest.encode,
  decode: QueryUnpoolWhitelistResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "UnpoolWhitelist",
  clientResolver
});
export const useGetUnpoolWhitelist = buildUseQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  builderQueryFn: createGetUnpoolWhitelist,
  queryKeyPrefix: "UnpoolWhitelistQuery"
});