import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  Balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;

  /** AllBalances queries the balance of all coins for a single account. */
  AllBalances(request: DeepPartial<QueryAllBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllBalancesResponse>;

  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  SpendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>, metadata?: grpc.Metadata): Promise<QuerySpendableBalancesResponse>;

  /** TotalSupply queries the total supply of all coins. */
  TotalSupply(request?: DeepPartial<QueryTotalSupplyRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSupplyResponse>;

  /** SupplyOf queries the supply of a single coin. */
  SupplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse>;

  /** Params queries the parameters of x/bank module. */
  Params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  DenomMetadata(request: DeepPartial<QueryDenomMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomMetadataResponse>;

  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  DenomsMetadata(request?: DeepPartial<QueryDenomsMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsMetadataResponse>;

  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */
  DenomOwners(request: DeepPartial<QueryDenomOwnersRequest>, metadata?: grpc.Metadata): Promise<QueryDenomOwnersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
  }

  balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse> {
    return this.rpc.unary(QueryBalanceDesc, QueryBalanceRequest.fromPartial(request), metadata);
  }

  allBalances(request: DeepPartial<QueryAllBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllBalancesResponse> {
    return this.rpc.unary(QueryAllBalancesDesc, QueryAllBalancesRequest.fromPartial(request), metadata);
  }

  spendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>, metadata?: grpc.Metadata): Promise<QuerySpendableBalancesResponse> {
    return this.rpc.unary(QuerySpendableBalancesDesc, QuerySpendableBalancesRequest.fromPartial(request), metadata);
  }

  totalSupply(request: DeepPartial<QueryTotalSupplyRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryTotalSupplyResponse> {
    return this.rpc.unary(QueryTotalSupplyDesc, QueryTotalSupplyRequest.fromPartial(request), metadata);
  }

  supplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse> {
    return this.rpc.unary(QuerySupplyOfDesc, QuerySupplyOfRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  denomMetadata(request: DeepPartial<QueryDenomMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomMetadataResponse> {
    return this.rpc.unary(QueryDenomMetadataDesc, QueryDenomMetadataRequest.fromPartial(request), metadata);
  }

  denomsMetadata(request: DeepPartial<QueryDenomsMetadataRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryDenomsMetadataResponse> {
    return this.rpc.unary(QueryDenomsMetadataDesc, QueryDenomsMetadataRequest.fromPartial(request), metadata);
  }

  denomOwners(request: DeepPartial<QueryDenomOwnersRequest>, metadata?: grpc.Metadata): Promise<QueryDenomOwnersResponse> {
    return this.rpc.unary(QueryDenomOwnersDesc, QueryDenomOwnersRequest.fromPartial(request), metadata);
  }

}