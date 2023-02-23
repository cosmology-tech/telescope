import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;

  /** Deployment queries deployment details */
  deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;

  /** Group queries group details */
  group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  /* Deployments queries deployments */
  deployments = async (request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> => {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new _m0.Reader(data)));
  };

  /* Deployment queries deployment details */
  deployment = async (request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> => {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new _m0.Reader(data)));
  };

  /* Group queries group details */
  group = async (request: QueryGroupRequest): Promise<QueryGroupResponse> => {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta2.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
      return queryService.deployments(request);
    },

    deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
      return queryService.deployment(request);
    },

    group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
      return queryService.group(request);
    }

  };
};
export interface UseDeploymentsQuery<TData> extends ReactQueryParams<QueryDeploymentsResponse, TData> {
  request: QueryDeploymentsRequest;
}
export interface UseDeploymentQuery<TData> extends ReactQueryParams<QueryDeploymentResponse, TData> {
  request: QueryDeploymentRequest;
}
export interface UseGroupQuery<TData> extends ReactQueryParams<QueryGroupResponse, TData> {
  request: QueryGroupRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useDeployments = <TData = QueryDeploymentsResponse,>({
    request,
    options
  }: UseDeploymentsQuery<TData>) => {
    return useQuery<QueryDeploymentsResponse, Error, TData>(["deploymentsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deployments(request);
    }, options);
  };

  const useDeployment = <TData = QueryDeploymentResponse,>({
    request,
    options
  }: UseDeploymentQuery<TData>) => {
    return useQuery<QueryDeploymentResponse, Error, TData>(["deploymentQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.deployment(request);
    }, options);
  };

  const useGroup = <TData = QueryGroupResponse,>({
    request,
    options
  }: UseGroupQuery<TData>) => {
    return useQuery<QueryGroupResponse, Error, TData>(["groupQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.group(request);
    }, options);
  };

  return {
    /** Deployments queries deployments */
    useDeployments,

    /** Deployment queries deployment details */
    useDeployment,

    /** Group queries group details */
    useGroup
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryDeploymentsStore extends QueryStore<QueryDeploymentsRequest, QueryDeploymentsResponse> {
    constructor() {
      super(queryService?.deployments);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    deployments(request: QueryDeploymentsRequest): MobxResponse<QueryDeploymentsResponse> {
      return this.getData(request);
    }

  }

  class QueryDeploymentStore extends QueryStore<QueryDeploymentRequest, QueryDeploymentResponse> {
    constructor() {
      super(queryService?.deployment);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    deployment(request: QueryDeploymentRequest): MobxResponse<QueryDeploymentResponse> {
      return this.getData(request);
    }

  }

  class QueryGroupStore extends QueryStore<QueryGroupRequest, QueryGroupResponse> {
    constructor() {
      super(queryService?.group);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }

    group(request: QueryGroupRequest): MobxResponse<QueryGroupResponse> {
      return this.getData(request);
    }

  }

  return {
    /** Deployments queries deployments */
    QueryDeploymentsStore,

    /** Deployment queries deployment details */
    QueryDeploymentStore,

    /** Group queries group details */
    QueryGroupStore
  };
};