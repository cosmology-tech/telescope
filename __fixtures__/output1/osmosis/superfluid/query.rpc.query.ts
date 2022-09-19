import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params returns the total set of minting parameters.*/

  assetType(request: AssetTypeRequest): Promise<AssetTypeResponseSDKType>;
  /*Returns superfluid asset type*/

  allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponseSDKType>;
  /*Returns all superfluid asset types*/

  assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponseSDKType>;
  /*Returns superfluid asset Multiplier*/

  allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponseSDKType>;
  /*Returns all superfluid intermediary account*/

  connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponseSDKType>;
  /*Returns intermediary account connected to a superfluid staked lock by id*/

  totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponseSDKType>;
  /*Returns the total amount of osmo superfluidly staked
  response denominated in uosmo*/

  superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponseSDKType>;
  /*Returns the coins superfluid delegated for a delegator, validator, denom
  triplet*/

  superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponseSDKType>;
  /*Returns all the superfluid poistions for a specific delegator*/

  superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponseSDKType>;
  /*null*/

  superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponseSDKType>;
  /*Returns all the superfluid positions of a specific denom delegated to one
  validator*/

  estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType>;
  /*Returns the amount of a specific denom delegated to a specific validator
  This is labeled an estimate, because the way it calculates the amount can
  lead rounding errors from the true delegated amount*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.assetType = this.assetType.bind(this);
    this.allAssets = this.allAssets.bind(this);
    this.assetMultiplier = this.assetMultiplier.bind(this);
    this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
    this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
    this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
    this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
    this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
    this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
    this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
    this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  assetType(request: AssetTypeRequest): Promise<AssetTypeResponseSDKType> {
    const data = AssetTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
    return promise.then(data => AssetTypeResponse.decode(new _m0.Reader(data)));
  }

  allAssets(request: AllAssetsRequest = {}): Promise<AllAssetsResponseSDKType> {
    const data = AllAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
    return promise.then(data => AllAssetsResponse.decode(new _m0.Reader(data)));
  }

  assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponseSDKType> {
    const data = AssetMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
    return promise.then(data => AssetMultiplierResponse.decode(new _m0.Reader(data)));
  }

  allIntermediaryAccounts(request: AllIntermediaryAccountsRequest = {
    pagination: undefined
  }): Promise<AllIntermediaryAccountsResponseSDKType> {
    const data = AllIntermediaryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
    return promise.then(data => AllIntermediaryAccountsResponse.decode(new _m0.Reader(data)));
  }

  connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponseSDKType> {
    const data = ConnectedIntermediaryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
    return promise.then(data => ConnectedIntermediaryAccountResponse.decode(new _m0.Reader(data)));
  }

  totalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponseSDKType> {
    const data = TotalSuperfluidDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
    return promise.then(data => TotalSuperfluidDelegationsResponse.decode(new _m0.Reader(data)));
  }

  superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponseSDKType> {
    const data = SuperfluidDelegationAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
    return promise.then(data => SuperfluidDelegationAmountResponse.decode(new _m0.Reader(data)));
  }

  superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponseSDKType> {
    const data = SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
    return promise.then(data => SuperfluidDelegationsByDelegatorResponse.decode(new _m0.Reader(data)));
  }

  superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponseSDKType> {
    const data = SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
    return promise.then(data => SuperfluidUndelegationsByDelegatorResponse.decode(new _m0.Reader(data)));
  }

  superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponseSDKType> {
    const data = SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
    return promise.then(data => SuperfluidDelegationsByValidatorDenomResponse.decode(new _m0.Reader(data)));
  }

  estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType> {
    const data = EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
    return promise.then(data => EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    assetType(request: AssetTypeRequest): Promise<AssetTypeResponseSDKType> {
      return queryService.assetType(request);
    },

    allAssets(request: AllAssetsRequest): Promise<AllAssetsResponseSDKType> {
      return queryService.allAssets(request);
    },

    assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponseSDKType> {
      return queryService.assetMultiplier(request);
    },

    allIntermediaryAccounts(request: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponseSDKType> {
      return queryService.allIntermediaryAccounts(request);
    },

    connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponseSDKType> {
      return queryService.connectedIntermediaryAccount(request);
    },

    totalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponseSDKType> {
      return queryService.totalSuperfluidDelegations(request);
    },

    superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponseSDKType> {
      return queryService.superfluidDelegationAmount(request);
    },

    superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponseSDKType> {
      return queryService.superfluidDelegationsByDelegator(request);
    },

    superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponseSDKType> {
      return queryService.superfluidUndelegationsByDelegator(request);
    },

    superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponseSDKType> {
      return queryService.superfluidDelegationsByValidatorDenom(request);
    },

    estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType> {
      return queryService.estimateSuperfluidDelegatedAmountByValidatorDenom(request);
    }

  };
};