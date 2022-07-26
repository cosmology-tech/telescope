import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Accounts returns all the existing accounts
  
  Since: cosmos-sdk 0.43 */
  async accounts(params: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.request(endpoint, options);
  }

  /* Account returns account details based on address. */
  async account(params: QueryAccountRequest): Promise<QueryAccountResponse> {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.request(endpoint);
  }

  /* Params queries all parameters. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.request(endpoint);
  }

  /* ModuleAccounts returns all the existing module accounts. */
  async moduleAccounts(params: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.request(endpoint);
  }

  /* Bech32 queries bech32Prefix */
  async bech32Prefix(params: Bech32PrefixRequest): Promise<Bech32PrefixResponse> {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.request(endpoint);
  }

  /* AddressBytesToString converts Account Address bytes to string */
  async addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.addressBytes !== "undefined") {
      options.params.address_bytes = params.addressBytes;
    }

    const endpoint = `cosmos/auth/v1beta1/bech32/${params.address_bytes}`;
    return await this.request(endpoint, options);
  }

  /* AddressStringToBytes converts Address string to bytes */
  async addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.addressString !== "undefined") {
      options.params.address_string = params.addressString;
    }

    const endpoint = `cosmos/auth/v1beta1/bech32/${params.address_string}`;
    return await this.request(endpoint, options);
  }

}