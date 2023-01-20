import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType } from "./types";
import * as fm from "../../../grpc-gateway";
import { QueryContractInfoRequest, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";
export class Query {
  static ContractInfo(request: QueryContractInfoRequest, initRequest?: fm.InitReq): Promise<QueryContractInfoResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/contract/${request["address"]}?${fm.renderURLSearchParams(request, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ContractHistory(request: QueryContractHistoryRequest, initRequest?: fm.InitReq): Promise<QueryContractHistoryResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/contract/${request["address"]}/history?${fm.renderURLSearchParams(request, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ContractsByCode(request: QueryContractsByCodeRequest, initRequest?: fm.InitReq): Promise<QueryContractsByCodeResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/code/${request["code_id"]}/contracts?${fm.renderURLSearchParams(request, ["code_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AllContractState(request: QueryAllContractStateRequest, initRequest?: fm.InitReq): Promise<QueryAllContractStateResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/contract/${request["address"]}/state?${fm.renderURLSearchParams(request, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static RawContractState(request: QueryRawContractStateRequest, initRequest?: fm.InitReq): Promise<QueryRawContractStateResponse> {
    return fm.fetchReq(`/wasm/v1/contract/${request["address"]}/raw/{query_data}?${fm.renderURLSearchParams(request, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static SmartContractState(request: QuerySmartContractStateRequest, initRequest?: fm.InitReq): Promise<QuerySmartContractStateResponse> {
    return fm.fetchReq(`/wasm/v1/contract/${request["address"]}/smart/{query_data}?${fm.renderURLSearchParams(request, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Code(request: QueryCodeRequest, initRequest?: fm.InitReq): Promise<QueryCodeResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/code/${request["code_id"]}?${fm.renderURLSearchParams(request, ["code_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Codes(request: QueryCodesRequest, initRequest?: fm.InitReq): Promise<QueryCodesResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/code?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static PinnedCodes(request: QueryPinnedCodesRequest, initRequest?: fm.InitReq): Promise<QueryPinnedCodesResponse> {
    return fm.fetchReq(`/cosmwasm/wasm/v1/codes/pinned?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}