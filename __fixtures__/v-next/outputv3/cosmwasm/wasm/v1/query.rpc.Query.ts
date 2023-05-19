import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType } from "./types";
import * as fm from "../../../grpc-gateway";
import { QueryContractInfoRequest, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";
export class Query {
  /** ContractInfo gets the contract meta data */
  static ContractInfo(request: QueryContractInfoRequest, initRequest?: fm.InitReq): Promise<QueryContractInfoResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/contract/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ContractHistory gets the contract code history */
  static ContractHistory(request: QueryContractHistoryRequest, initRequest?: fm.InitReq): Promise<QueryContractHistoryResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/contract/${request["address"]}/history?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ContractsByCode lists all smart contracts for a code id */
  static ContractsByCode(request: QueryContractsByCodeRequest, initRequest?: fm.InitReq): Promise<QueryContractsByCodeResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/code/${request["code_id"]}/contracts?${fm.renderURLSearchParams({
      ...request
    }, ["code_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AllContractState gets all raw store data for a single contract */
  static AllContractState(request: QueryAllContractStateRequest, initRequest?: fm.InitReq): Promise<QueryAllContractStateResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/contract/${request["address"]}/state?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** RawContractState gets single key from the raw store data of a contract */
  static RawContractState(request: QueryRawContractStateRequest, initRequest?: fm.InitReq): Promise<QueryRawContractStateResponse> {
    return fm.fetchReq(`/wasm/v1/contract/${request["address"]}/raw/{query_data}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** SmartContractState get smart query result from the contract */
  static SmartContractState(request: QuerySmartContractStateRequest, initRequest?: fm.InitReq): Promise<QuerySmartContractStateResponse> {
    return fm.fetchReq(`/wasm/v1/contract/${request["address"]}/smart/{query_data}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Code gets the binary code and metadata for a singe wasm code */
  static Code(request: QueryCodeRequest, initRequest?: fm.InitReq): Promise<QueryCodeResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/code/${request["code_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["code_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Codes gets the metadata for all stored wasm codes */
  static Codes(request: QueryCodesRequest, initRequest?: fm.InitReq): Promise<QueryCodesResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/code?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** PinnedCodes gets the pinned code ids */
  static PinnedCodes(request: QueryPinnedCodesRequest, initRequest?: fm.InitReq): Promise<QueryPinnedCodesResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/codes/pinned?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
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
  /** ContractInfo gets the contract meta data */
  async ContractInfo(req: QueryContractInfoRequest, headers?: HeadersInit): Promise<QueryContractInfoResponse> {
    return Query.ContractInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ContractHistory gets the contract code history */
  async ContractHistory(req: QueryContractHistoryRequest, headers?: HeadersInit): Promise<QueryContractHistoryResponse> {
    return Query.ContractHistory(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ContractsByCode lists all smart contracts for a code id */
  async ContractsByCode(req: QueryContractsByCodeRequest, headers?: HeadersInit): Promise<QueryContractsByCodeResponse> {
    return Query.ContractsByCode(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AllContractState gets all raw store data for a single contract */
  async AllContractState(req: QueryAllContractStateRequest, headers?: HeadersInit): Promise<QueryAllContractStateResponse> {
    return Query.AllContractState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** RawContractState gets single key from the raw store data of a contract */
  async RawContractState(req: QueryRawContractStateRequest, headers?: HeadersInit): Promise<QueryRawContractStateResponse> {
    return Query.RawContractState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** SmartContractState get smart query result from the contract */
  async SmartContractState(req: QuerySmartContractStateRequest, headers?: HeadersInit): Promise<QuerySmartContractStateResponse> {
    return Query.SmartContractState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Code gets the binary code and metadata for a singe wasm code */
  async Code(req: QueryCodeRequest, headers?: HeadersInit): Promise<QueryCodeResponse> {
    return Query.Code(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Codes gets the metadata for all stored wasm codes */
  async Codes(req: QueryCodesRequest, headers?: HeadersInit): Promise<QueryCodesResponse> {
    return Query.Codes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** PinnedCodes gets the pinned code ids */
  async PinnedCodes(req: QueryPinnedCodesRequest, headers?: HeadersInit): Promise<QueryPinnedCodesResponse> {
    return Query.PinnedCodes(req, {
      headers,
      pathPrefix: this.url
    });
  }
}