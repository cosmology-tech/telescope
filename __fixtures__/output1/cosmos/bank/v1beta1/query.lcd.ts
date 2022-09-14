import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata } from "./bank";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Balance queries the balance of a single coin for a single account. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.get<QueryBalanceResponse>(endpoint, options);
  }

  /* AllBalances queries the balance of all coins for a single account. */
  async allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.get<QueryAllBalancesResponse>(endpoint, options);
  }

  /* SpendableBalances queries the spenable balance of all coins for a single
  account. */
  async spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
    return await this.get<QuerySpendableBalancesResponse>(endpoint, options);
  }

  /* TotalSupply queries the total supply of all coins. */
  async totalSupply(params: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.get<QueryTotalSupplyResponse>(endpoint, options);
  }

  /* SupplyOf queries the supply of a single coin. */
  async supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
    return await this.get<QuerySupplyOfResponse>(endpoint, options);
  }

  /* Params queries the parameters of x/bank module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* DenomsMetadata queries the client metadata of a given coin denomination. */
  async denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.get<QueryDenomMetadataResponse>(endpoint);
  }

  /* DenomsMetadata queries the client metadata for all registered coin
  denominations. */
  async denomsMetadata(params: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.get<QueryDenomsMetadataResponse>(endpoint, options);
  }

  /* DenomOwners queries for all account addresses that own a particular token
  denomination. */
  async denomOwners(params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
    return await this.get<QueryDenomOwnersResponse>(endpoint, options);
  }

}