import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsAminoType, ParamsSDKType, BaseAccount, BaseAccountAmino, BaseAccountAminoType, BaseAccountSDKType, ModuleAccount, ModuleAccountAmino, ModuleAccountAminoType, ModuleAccountSDKType } from "./auth";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountsRequest, QueryAccountsRequestAmino, QueryAccountsRequestAminoType, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseAmino, QueryAccountsResponseAminoType, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestAmino, QueryAccountRequestAminoType, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseAmino, QueryAccountResponseAminoType, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestAmino, QueryParamsRequestAminoType, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseAmino, QueryParamsResponseAminoType, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestAmino, QueryModuleAccountsRequestAminoType, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseAmino, QueryModuleAccountsResponseAminoType, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestAmino, Bech32PrefixRequestAminoType, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseAmino, Bech32PrefixResponseAminoType, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestAmino, AddressBytesToStringRequestAminoType, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseAmino, AddressBytesToStringResponseAminoType, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestAmino, AddressStringToBytesRequestAminoType, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseAmino, AddressStringToBytesResponseAminoType, AddressStringToBytesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
  }

  /* Accounts returns all the existing accounts
  
   Since: cosmos-sdk 0.43 */
  async accounts(params: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint, options);
  }

  /* Account returns account details based on address. */
  async account(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.req.get<QueryAccountResponseSDKType>(endpoint);
  }

  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* ModuleAccounts returns all the existing module accounts. */
  async moduleAccounts(_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.req.get<QueryModuleAccountsResponseSDKType>(endpoint);
  }

  /* Bech32 queries bech32Prefix */
  async bech32Prefix(_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.req.get<Bech32PrefixResponseSDKType>(endpoint);
  }

  /* AddressBytesToString converts Account Address bytes to string */
  async addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.req.get<AddressBytesToStringResponseSDKType>(endpoint);
  }

  /* AddressStringToBytes converts Address string to bytes */
  async addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.req.get<AddressStringToBytesResponseSDKType>(endpoint);
  }

}