import { ContractInfo } from "./types";
import { StringEvent } from "../../../cosmos/base/abci/v1beta1/abci";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesResponse } from "./query";
import { google.protobuf.Empty } from "../../../google/protobuf/empty";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Query contract */
  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const endpoint = `compute/v1beta1/contract/${params.address}`;
    return await this.request(endpoint);
  }

  /* Query contract */
  async contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.codeId !== "undefined") {
      options.params.code_id = params.codeId;
    }

    const endpoint = `compute/v1beta1/code/${params.code_id}/contracts`;
    return await this.request(endpoint, options);
  }

  /* Query contract */
  async smartContractState(params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.queryData !== "undefined") {
      options.params.query_data = params.queryData;
    }

    const endpoint = `compute/v1beta1/contract/${params.address}/smart`;
    return await this.request(endpoint, options);
  }

  /* Query a specific contract code */
  async code(params: QueryCodeRequest): Promise<QueryCodeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.codeId !== "undefined") {
      options.params.code_id = params.codeId;
    }

    const endpoint = `compute/v1beta1/code/${params.code_id}`;
    return await this.request(endpoint, options);
  }

  /* Query all contract codes on-chain */
  async codes(params: google.protobuf.Empty): Promise<QueryCodesResponse> {
    const endpoint = `compute/v1beta1/code/`;
    return await this.request(endpoint);
  }

}