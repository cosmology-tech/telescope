import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, BaseAccount, BaseAccountSDKType, ModuleAccount, ModuleAccountSDKType } from "./auth";
import * as fm from "../../../grpc-gateway";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";
export class Query {
  /**
   * Accounts returns all the existing accounts
   * 
   * Since: cosmos-sdk 0.43
   */
  static Accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<QueryAccountsResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Account returns account details based on address. */
  static Account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<QueryAccountResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/accounts/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries all parameters. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ModuleAccounts returns all the existing module accounts. */
  static ModuleAccounts(request: QueryModuleAccountsRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountsResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Bech32 queries bech32Prefix */
  static Bech32Prefix(request: Bech32PrefixRequest, initRequest?: fm.InitReq): Promise<Bech32PrefixResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/bech32?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AddressBytesToString converts Account Address bytes to string */
  static AddressBytesToString(request: AddressBytesToStringRequest, initRequest?: fm.InitReq): Promise<AddressBytesToStringResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_bytes"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address_bytes"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AddressStringToBytes converts Address string to bytes */
  static AddressStringToBytes(request: AddressStringToBytesRequest, initRequest?: fm.InitReq): Promise<AddressStringToBytesResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_string"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address_string"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /**
   * Accounts returns all the existing accounts
   * 
   * Since: cosmos-sdk 0.43
   */
  async Accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<QueryAccountsResponse> {
    return Query.Accounts(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Account returns account details based on address. */
  async Account(req: QueryAccountRequest, headers?: HeadersInit): Promise<QueryAccountResponse> {
    return Query.Account(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries all parameters. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ModuleAccounts returns all the existing module accounts. */
  async ModuleAccounts(req: QueryModuleAccountsRequest, headers?: HeadersInit): Promise<QueryModuleAccountsResponse> {
    return Query.ModuleAccounts(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Bech32 queries bech32Prefix */
  async Bech32Prefix(req: Bech32PrefixRequest, headers?: HeadersInit): Promise<Bech32PrefixResponse> {
    return Query.Bech32Prefix(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AddressBytesToString converts Account Address bytes to string */
  async AddressBytesToString(req: AddressBytesToStringRequest, headers?: HeadersInit): Promise<AddressBytesToStringResponse> {
    return Query.AddressBytesToString(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AddressStringToBytes converts Address string to bytes */
  async AddressStringToBytes(req: AddressStringToBytesRequest, headers?: HeadersInit): Promise<AddressStringToBytesResponse> {
    return Query.AddressStringToBytes(req, {
      headers,
      pathPrefix: this.url
    });
  }
}