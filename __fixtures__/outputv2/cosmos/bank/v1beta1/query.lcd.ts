import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsAmino, ParamsAminoType, ParamsSDKType, Metadata, MetadataAmino, MetadataAminoType, MetadataSDKType } from "./bank";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceRequestAmino, QueryBalanceRequestAminoType, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseAmino, QueryBalanceResponseAminoType, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestAmino, QueryAllBalancesRequestAminoType, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseAmino, QueryAllBalancesResponseAminoType, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestAmino, QuerySpendableBalancesRequestAminoType, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseAmino, QuerySpendableBalancesResponseAminoType, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestAmino, QueryTotalSupplyRequestAminoType, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseAmino, QueryTotalSupplyResponseAminoType, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestAmino, QuerySupplyOfRequestAminoType, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseAmino, QuerySupplyOfResponseAminoType, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestAmino, QueryParamsRequestAminoType, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseAmino, QueryParamsResponseAminoType, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestAmino, QueryDenomMetadataRequestAminoType, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseAmino, QueryDenomMetadataResponseAminoType, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestAmino, QueryDenomsMetadataRequestAminoType, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseAmino, QueryDenomsMetadataResponseAminoType, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestAmino, QueryDenomOwnersRequestAminoType, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseAmino, QueryDenomOwnersResponseAminoType, QueryDenomOwnersResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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

  /* Balance queries the balance of a single coin for a single account. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint, options);
  }

  /* AllBalances queries the balance of all coins for a single account. */
  async allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.req.get<QueryAllBalancesResponseSDKType>(endpoint, options);
  }

  /* SpendableBalances queries the spenable balance of all coins for a single
   account. */
  async spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
    return await this.req.get<QuerySpendableBalancesResponseSDKType>(endpoint, options);
  }

  /* TotalSupply queries the total supply of all coins. */
  async totalSupply(params: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint, options);
  }

  /* SupplyOf queries the supply of a single coin. */
  async supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
    return await this.req.get<QuerySupplyOfResponseSDKType>(endpoint, options);
  }

  /* Params queries the parameters of x/bank module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* DenomsMetadata queries the client metadata of a given coin denomination. */
  async denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.req.get<QueryDenomMetadataResponseSDKType>(endpoint);
  }

  /* DenomsMetadata queries the client metadata for all registered coin
   denominations. */
  async denomsMetadata(params: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.req.get<QueryDenomsMetadataResponseSDKType>(endpoint, options);
  }

  /* DenomOwners queries for all account addresses that own a particular token
   denomination. */
  async denomOwners(params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
    return await this.req.get<QueryDenomOwnersResponseSDKType>(endpoint, options);
  }

}