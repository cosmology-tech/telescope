import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Deployments queries deployments */


  deployments = async (params: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/deployment/v1beta2/deployments/list`;
    return await this.req.get<QueryDeploymentsResponse>(endpoint, options);
  };
  /* Deployment queries deployment details */

  deployment = async (params: QueryDeploymentRequest): Promise<QueryDeploymentResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/deployment/v1beta2/deployments/info`;
    return await this.req.get<QueryDeploymentResponse>(endpoint, options);
  };
  /* Group queries group details */

  group = async (params: QueryGroupRequest): Promise<QueryGroupResponse> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/deployment/v1beta2/groups/info`;
    return await this.req.get<QueryGroupResponse>(endpoint, options);
  };
}