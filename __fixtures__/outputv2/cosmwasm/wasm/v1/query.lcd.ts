import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoAmino, ContractInfoAminoType, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntryAminoType, ContractCodeHistoryEntrySDKType, Model, ModelAmino, ModelAminoType, ModelSDKType } from "./types";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoRequestAmino, QueryContractInfoRequestAminoType, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseAmino, QueryContractInfoResponseAminoType, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestAmino, QueryContractHistoryRequestAminoType, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseAmino, QueryContractHistoryResponseAminoType, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestAmino, QueryContractsByCodeRequestAminoType, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseAmino, QueryContractsByCodeResponseAminoType, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestAmino, QueryAllContractStateRequestAminoType, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseAmino, QueryAllContractStateResponseAminoType, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestAmino, QueryRawContractStateRequestAminoType, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseAmino, QueryRawContractStateResponseAminoType, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestAmino, QuerySmartContractStateRequestAminoType, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseAmino, QuerySmartContractStateResponseAminoType, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestAmino, QueryCodeRequestAminoType, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseAmino, QueryCodeResponseAminoType, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestAmino, QueryCodesRequestAminoType, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseAmino, QueryCodesResponseAminoType, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestAmino, QueryPinnedCodesRequestAminoType, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseAmino, QueryPinnedCodesResponseAminoType, QueryPinnedCodesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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

  /* ContractInfo gets the contract meta data */
  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return await this.req.get<QueryContractInfoResponseSDKType>(endpoint);
  }

  /* ContractHistory gets the contract code history */
  async contractHistory(params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return await this.req.get<QueryContractHistoryResponseSDKType>(endpoint, options);
  }

  /* ContractsByCode lists all smart contracts for a code id */
  async contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}/contracts`;
    return await this.req.get<QueryContractsByCodeResponseSDKType>(endpoint, options);
  }

  /* AllContractState gets all raw store data for a single contract */
  async allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return await this.req.get<QueryAllContractStateResponseSDKType>(endpoint, options);
  }

  /* RawContractState gets single key from the raw store data of a contract */
  async rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType> {
    const endpoint = `wasm/v1/contract/${params.address}/raw/${params.queryData}`;
    return await this.req.get<QueryRawContractStateResponseSDKType>(endpoint);
  }

  /* SmartContractState get smart query result from the contract */
  async smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType> {
    const endpoint = `wasm/v1/contract/${params.address}/smart/${params.queryData}`;
    return await this.req.get<QuerySmartContractStateResponseSDKType>(endpoint);
  }

  /* Code gets the binary code and metadata for a singe wasm code */
  async code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType> {
    const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}`;
    return await this.req.get<QueryCodeResponseSDKType>(endpoint);
  }

  /* Codes gets the metadata for all stored wasm codes */
  async codes(params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/code`;
    return await this.req.get<QueryCodesResponseSDKType>(endpoint, options);
  }

  /* PinnedCodes gets the pinned code ids */
  async pinnedCodes(params: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return await this.req.get<QueryPinnedCodesResponseSDKType>(endpoint, options);
  }

}