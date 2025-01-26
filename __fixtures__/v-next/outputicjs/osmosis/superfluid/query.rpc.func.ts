import { RpcResolver, buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "Params",
  clientResolver
});
export const createGetAssetType = (clientResolver?: RpcResolver) => buildQuery<AssetTypeRequest, AssetTypeResponse>({
  encode: AssetTypeRequest.encode,
  decode: AssetTypeResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetType",
  clientResolver
});
export const createGetAllAssets = (clientResolver?: RpcResolver) => buildQuery<AllAssetsRequest, AllAssetsResponse>({
  encode: AllAssetsRequest.encode,
  decode: AllAssetsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllAssets",
  clientResolver
});
export const createGetAssetMultiplier = (clientResolver?: RpcResolver) => buildQuery<AssetMultiplierRequest, AssetMultiplierResponse>({
  encode: AssetMultiplierRequest.encode,
  decode: AssetMultiplierResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AssetMultiplier",
  clientResolver
});
export const createGetAllIntermediaryAccounts = (clientResolver?: RpcResolver) => buildQuery<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>({
  encode: AllIntermediaryAccountsRequest.encode,
  decode: AllIntermediaryAccountsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "AllIntermediaryAccounts",
  clientResolver
});
export const createGetConnectedIntermediaryAccount = (clientResolver?: RpcResolver) => buildQuery<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>({
  encode: ConnectedIntermediaryAccountRequest.encode,
  decode: ConnectedIntermediaryAccountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "ConnectedIntermediaryAccount",
  clientResolver
});
export const createGetTotalDelegationByValidatorForDenom = (clientResolver?: RpcResolver) => buildQuery<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>({
  encode: QueryTotalDelegationByValidatorForDenomRequest.encode,
  decode: QueryTotalDelegationByValidatorForDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByValidatorForDenom",
  clientResolver
});
export const createGetTotalSuperfluidDelegations = (clientResolver?: RpcResolver) => buildQuery<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>({
  encode: TotalSuperfluidDelegationsRequest.encode,
  decode: TotalSuperfluidDelegationsResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalSuperfluidDelegations",
  clientResolver
});
export const createGetSuperfluidDelegationAmount = (clientResolver?: RpcResolver) => buildQuery<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>({
  encode: SuperfluidDelegationAmountRequest.encode,
  decode: SuperfluidDelegationAmountResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationAmount",
  clientResolver
});
export const createGetSuperfluidDelegationsByDelegator = (clientResolver?: RpcResolver) => buildQuery<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>({
  encode: SuperfluidDelegationsByDelegatorRequest.encode,
  decode: SuperfluidDelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByDelegator",
  clientResolver
});
export const createGetSuperfluidUndelegationsByDelegator = (clientResolver?: RpcResolver) => buildQuery<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>({
  encode: SuperfluidUndelegationsByDelegatorRequest.encode,
  decode: SuperfluidUndelegationsByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidUndelegationsByDelegator",
  clientResolver
});
export const createGetSuperfluidDelegationsByValidatorDenom = (clientResolver?: RpcResolver) => buildQuery<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>({
  encode: SuperfluidDelegationsByValidatorDenomRequest.encode,
  decode: SuperfluidDelegationsByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "SuperfluidDelegationsByValidatorDenom",
  clientResolver
});
export const createGetEstimateSuperfluidDelegatedAmountByValidatorDenom = (clientResolver?: RpcResolver) => buildQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({
  encode: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode,
  decode: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "EstimateSuperfluidDelegatedAmountByValidatorDenom",
  clientResolver
});
export const createGetTotalDelegationByDelegator = (clientResolver?: RpcResolver) => buildQuery<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>({
  encode: QueryTotalDelegationByDelegatorRequest.encode,
  decode: QueryTotalDelegationByDelegatorResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "TotalDelegationByDelegator",
  clientResolver
});
export const createGetUnpoolWhitelist = (clientResolver?: RpcResolver) => buildQuery<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>({
  encode: QueryUnpoolWhitelistRequest.encode,
  decode: QueryUnpoolWhitelistResponse.decode,
  service: "osmosis.superfluid.Query",
  method: "UnpoolWhitelist",
  clientResolver
});