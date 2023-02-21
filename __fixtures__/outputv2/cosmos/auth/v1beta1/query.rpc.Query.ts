import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, BaseAccount, BaseAccountSDKType, ModuleAccount, ModuleAccountSDKType } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts
   * 
   * Since: cosmos-sdk 0.43
   */
  accounts(request?: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryAccountsResponse>;

  /** Account returns account details based on address. */
  account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<QueryAccountResponse>;

  /** Params queries all parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** ModuleAccounts returns all the existing module accounts. */
  moduleAccounts(request?: DeepPartial<QueryModuleAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleAccountsResponse>;

  /** Bech32 queries bech32Prefix */
  bech32Prefix(request?: DeepPartial<Bech32PrefixRequest>, metadata?: grpc.Metadata): Promise<Bech32PrefixResponse>;

  /** AddressBytesToString converts Account Address bytes to string */
  addressBytesToString(request: DeepPartial<AddressBytesToStringRequest>, metadata?: grpc.Metadata): Promise<AddressBytesToStringResponse>;

  /** AddressStringToBytes converts Address string to bytes */
  addressStringToBytes(request: DeepPartial<AddressStringToBytesRequest>, metadata?: grpc.Metadata): Promise<AddressStringToBytesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.account = this.account.bind(this);
    this.params = this.params.bind(this);
    this.moduleAccounts = this.moduleAccounts.bind(this);
    this.bech32Prefix = this.bech32Prefix.bind(this);
    this.addressBytesToString = this.addressBytesToString.bind(this);
    this.addressStringToBytes = this.addressStringToBytes.bind(this);
  }

  accounts(request: DeepPartial<QueryAccountsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAccountsResponse> {
    return this.rpc.unary(QueryAccountsDesc, QueryAccountsRequest.fromPartial(request), metadata);
  }

  account(request: DeepPartial<QueryAccountRequest>, metadata?: grpc.Metadata): Promise<QueryAccountResponse> {
    return this.rpc.unary(QueryAccountDesc, QueryAccountRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  moduleAccounts(request: DeepPartial<QueryModuleAccountsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryModuleAccountsResponse> {
    return this.rpc.unary(QueryModuleAccountsDesc, QueryModuleAccountsRequest.fromPartial(request), metadata);
  }

  bech32Prefix(request: DeepPartial<Bech32PrefixRequest> = {}, metadata?: grpc.Metadata): Promise<Bech32PrefixResponse> {
    return this.rpc.unary(Bech32PrefixDesc, Bech32PrefixRequest.fromPartial(request), metadata);
  }

  addressBytesToString(request: DeepPartial<AddressBytesToStringRequest>, metadata?: grpc.Metadata): Promise<AddressBytesToStringResponse> {
    return this.rpc.unary(AddressBytesToStringDesc, AddressBytesToStringRequest.fromPartial(request), metadata);
  }

  addressStringToBytes(request: DeepPartial<AddressStringToBytesRequest>, metadata?: grpc.Metadata): Promise<AddressStringToBytesResponse> {
    return this.rpc.unary(AddressStringToBytesDesc, AddressStringToBytesRequest.fromPartial(request), metadata);
  }

}