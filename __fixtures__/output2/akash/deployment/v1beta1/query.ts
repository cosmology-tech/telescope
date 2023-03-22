//@ts-nocheck
/* eslint-disable */
import { DeploymentFilters, DeploymentID, Deployment } from "./deployment";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, Group } from "./group";
import { Account } from "../../escrow/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Rpc } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta1";

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  filters?: DeploymentFilters;
  pagination?: PageRequest;
}

/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  deployments: QueryDeploymentResponse[];
  pagination?: PageResponse;
}

/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  id?: DeploymentID;
}

/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  deployment?: Deployment;
  groups: Group[];
  escrowAccount?: Account;
}

/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  id?: GroupID;
}

/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  group?: Group;
}

function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return {
    filters: undefined,
    pagination: undefined
  };
}

export const QueryDeploymentsRequest = {
  encode(message: QueryDeploymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filters !== undefined) {
      DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.filters = DeploymentFilters.decode(reader, reader.uint32());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDeploymentsRequest {
    return {
      filters: isSet(object.filters) ? DeploymentFilters.fromJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDeploymentsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? DeploymentFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeploymentsRequest>): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? DeploymentFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDKJSON(object: any): QueryDeploymentsRequestSDKType {
    return {
      filters: isSet(object.filters) ? DeploymentFilters.fromSDKJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  }

};

function createBaseQueryDeploymentsResponse(): QueryDeploymentsResponse {
  return {
    deployments: [],
    pagination: undefined
  };
}

export const QueryDeploymentsResponse = {
  encode(message: QueryDeploymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deployments) {
      QueryDeploymentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deployments.push(QueryDeploymentResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDeploymentsResponse {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDeploymentsResponse): unknown {
    const obj: any = {};

    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toJSON(e) : undefined);
    } else {
      obj.deployments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeploymentsResponse>): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDKJSON(object: any): QueryDeploymentsResponseSDKType {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  }

};

function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
  return {
    id: undefined
  };
}

export const QueryDeploymentRequest = {
  encode(message: QueryDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDeploymentRequest {
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: QueryDeploymentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeploymentRequest>): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDKJSON(object: any): QueryDeploymentRequestSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined
    };
  }

};

function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
  return {
    deployment: undefined,
    groups: [],
    escrowAccount: undefined
  };
}

export const QueryDeploymentResponse = {
  encode(message: QueryDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;

        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;

        case 3:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDeploymentResponse {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      escrowAccount: isSet(object.escrowAccount) ? Account.fromJSON(object.escrowAccount) : undefined
    };
  },

  toJSON(message: QueryDeploymentResponse): unknown {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toJSON(message.deployment) : undefined);

    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }

    message.escrowAccount !== undefined && (obj.escrowAccount = message.escrowAccount ? Account.toJSON(message.escrowAccount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDeploymentResponse>): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? Account.fromPartial(object.escrowAccount) : undefined;
    return message;
  },

  fromSDKJSON(object: any): QueryDeploymentResponseSDKType {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromSDKJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDKJSON(e)) : [],
      escrow_account: isSet(object.escrow_account) ? Account.fromSDKJSON(object.escrow_account) : undefined
    };
  }

};

function createBaseQueryGroupRequest(): QueryGroupRequest {
  return {
    id: undefined
  };
}

export const QueryGroupRequest = {
  encode(message: QueryGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGroupRequest {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: QueryGroupRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGroupRequest>): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDKJSON(object: any): QueryGroupRequestSDKType {
    return {
      id: isSet(object.id) ? GroupID.fromSDKJSON(object.id) : undefined
    };
  }

};

function createBaseQueryGroupResponse(): QueryGroupResponse {
  return {
    group: undefined
  };
}

export const QueryGroupResponse = {
  encode(message: QueryGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGroupResponse {
    return {
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined
    };
  },

  toJSON(message: QueryGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGroupResponse>): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    return message;
  },

  fromSDKJSON(object: any): QueryGroupResponseSDKType {
    return {
      group: isSet(object.group) ? Group.fromSDKJSON(object.group) : undefined
    };
  }

};

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;

  /** Deployment queries deployment details */
  Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;

  /** Group queries group details */
  Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Deployments = this.Deployments.bind(this);
    this.Deployment = this.Deployment.bind(this);
    this.Group = this.Group.bind(this);
  }

  Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new _m0.Reader(data)));
  }

  Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new _m0.Reader(data)));
  }

  Group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new _m0.Reader(data)));
  }

}