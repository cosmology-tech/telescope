// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`test gRPC-web Query Client 1`] = `
"/** Query defines the gRPC querier service. */
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
}"
`;

exports[`test gRPC-web Query Client 2`] = `
"export class QueryClientImpl implements Query {
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

}"
`;
