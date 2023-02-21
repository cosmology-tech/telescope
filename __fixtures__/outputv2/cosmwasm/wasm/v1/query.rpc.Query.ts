import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryContractInfoRequest, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  contractInfo(request: DeepPartial<QueryContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse>;

  /** ContractHistory gets the contract code history */
  contractHistory(request: DeepPartial<QueryContractHistoryRequest>, metadata?: grpc.Metadata): Promise<QueryContractHistoryResponse>;

  /** ContractsByCode lists all smart contracts for a code id */
  contractsByCode(request: DeepPartial<QueryContractsByCodeRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeResponse>;

  /** AllContractState gets all raw store data for a single contract */
  allContractState(request: DeepPartial<QueryAllContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllContractStateResponse>;

  /** RawContractState gets single key from the raw store data of a contract */
  rawContractState(request: DeepPartial<QueryRawContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryRawContractStateResponse>;

  /** SmartContractState get smart query result from the contract */
  smartContractState(request: DeepPartial<QuerySmartContractStateRequest>, metadata?: grpc.Metadata): Promise<QuerySmartContractStateResponse>;

  /** Code gets the binary code and metadata for a singe wasm code */
  code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;

  /** Codes gets the metadata for all stored wasm codes */
  codes(request?: DeepPartial<QueryCodesRequest>, metadata?: grpc.Metadata): Promise<QueryCodesResponse>;

  /** PinnedCodes gets the pinned code ids */
  pinnedCodes(request?: DeepPartial<QueryPinnedCodesRequest>, metadata?: grpc.Metadata): Promise<QueryPinnedCodesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
  }

  contractInfo(request: DeepPartial<QueryContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse> {
    return this.rpc.unary(QueryContractInfoDesc, QueryContractInfoRequest.fromPartial(request), metadata);
  }

  contractHistory(request: DeepPartial<QueryContractHistoryRequest>, metadata?: grpc.Metadata): Promise<QueryContractHistoryResponse> {
    return this.rpc.unary(QueryContractHistoryDesc, QueryContractHistoryRequest.fromPartial(request), metadata);
  }

  contractsByCode(request: DeepPartial<QueryContractsByCodeRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeResponse> {
    return this.rpc.unary(QueryContractsByCodeDesc, QueryContractsByCodeRequest.fromPartial(request), metadata);
  }

  allContractState(request: DeepPartial<QueryAllContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllContractStateResponse> {
    return this.rpc.unary(QueryAllContractStateDesc, QueryAllContractStateRequest.fromPartial(request), metadata);
  }

  rawContractState(request: DeepPartial<QueryRawContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryRawContractStateResponse> {
    return this.rpc.unary(QueryRawContractStateDesc, QueryRawContractStateRequest.fromPartial(request), metadata);
  }

  smartContractState(request: DeepPartial<QuerySmartContractStateRequest>, metadata?: grpc.Metadata): Promise<QuerySmartContractStateResponse> {
    return this.rpc.unary(QuerySmartContractStateDesc, QuerySmartContractStateRequest.fromPartial(request), metadata);
  }

  code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse> {
    return this.rpc.unary(QueryCodeDesc, QueryCodeRequest.fromPartial(request), metadata);
  }

  codes(request: DeepPartial<QueryCodesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryCodesResponse> {
    return this.rpc.unary(QueryCodesDesc, QueryCodesRequest.fromPartial(request), metadata);
  }

  pinnedCodes(request: DeepPartial<QueryPinnedCodesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryPinnedCodesResponse> {
    return this.rpc.unary(QueryPinnedCodesDesc, QueryPinnedCodesRequest.fromPartial(request), metadata);
  }

}