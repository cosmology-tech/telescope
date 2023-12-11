import { DeploymentFilters, DeploymentFiltersAmino, DeploymentFiltersSDKType, DeploymentID, DeploymentIDAmino, DeploymentIDSDKType, Deployment, DeploymentAmino, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDAmino, GroupIDSDKType, Group, GroupAmino, GroupSDKType } from "./group";
import { Account, AccountAmino, AccountSDKType } from "../../escrow/v1beta1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Exact } from "../../../helpers";
import { TxRpc } from "../../../types";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
export const protobufPackage = "akash.deployment.v1beta1";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  filters: DeploymentFilters | undefined;
  pagination?: PageRequest | undefined;
}
export interface QueryDeploymentsRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest";
  value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestAmino {
  filters?: DeploymentFiltersAmino | undefined;
  pagination?: PageRequestAmino | undefined;
}
export interface QueryDeploymentsRequestAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentsRequest";
  value: QueryDeploymentsRequestAmino;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestSDKType {
  filters: DeploymentFiltersSDKType | undefined;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  deployments: QueryDeploymentResponse[];
  pagination?: PageResponse | undefined;
}
export interface QueryDeploymentsResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse";
  value: Uint8Array;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseAmino {
  deployments?: QueryDeploymentResponseAmino[];
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDeploymentsResponseAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentsResponse";
  value: QueryDeploymentsResponseAmino;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseSDKType {
  deployments: QueryDeploymentResponseSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  id: DeploymentID | undefined;
}
export interface QueryDeploymentRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest";
  value: Uint8Array;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestAmino {
  id?: DeploymentIDAmino | undefined;
}
export interface QueryDeploymentRequestAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentRequest";
  value: QueryDeploymentRequestAmino;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestSDKType {
  id: DeploymentIDSDKType | undefined;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  deployment: Deployment | undefined;
  groups: Group[];
  escrowAccount: Account | undefined;
}
export interface QueryDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse";
  value: Uint8Array;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseAmino {
  deployment?: DeploymentAmino | undefined;
  groups?: GroupAmino[];
  escrow_account?: AccountAmino | undefined;
}
export interface QueryDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentResponse";
  value: QueryDeploymentResponseAmino;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseSDKType {
  deployment: DeploymentSDKType | undefined;
  groups: GroupSDKType[];
  escrow_account: AccountSDKType | undefined;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  id: GroupID | undefined;
}
export interface QueryGroupRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest";
  value: Uint8Array;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestAmino {
  id?: GroupIDAmino | undefined;
}
export interface QueryGroupRequestAminoMsg {
  type: "/akash.deployment.v1beta1.QueryGroupRequest";
  value: QueryGroupRequestAmino;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestSDKType {
  id: GroupIDSDKType | undefined;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  group: Group | undefined;
}
export interface QueryGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse";
  value: Uint8Array;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseAmino {
  group?: GroupAmino | undefined;
}
export interface QueryGroupResponseAminoMsg {
  type: "/akash.deployment.v1beta1.QueryGroupResponse";
  value: QueryGroupResponseAmino;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseSDKType {
  group: GroupSDKType | undefined;
}
function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return {
    filters: DeploymentFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryDeploymentsRequest = {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest",
  encode(message: QueryDeploymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filters !== undefined) {
      DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<QueryDeploymentsRequest>, I>>(object: I): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = DeploymentFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromProtoMsg(message: QueryDeploymentsRequestProtoMsg): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.decode(message.value);
  },
  toProto(message: QueryDeploymentsRequest): Uint8Array {
    return QueryDeploymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentsRequest): QueryDeploymentsRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest",
      value: QueryDeploymentsRequest.encode(message).finish()
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
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse",
  encode(message: QueryDeploymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deployments) {
      QueryDeploymentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<QueryDeploymentsResponse>, I>>(object: I): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromProtoMsg(message: QueryDeploymentsResponseProtoMsg): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.decode(message.value);
  },
  toProto(message: QueryDeploymentsResponse): Uint8Array {
    return QueryDeploymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentsResponse): QueryDeploymentsResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse",
      value: QueryDeploymentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
  return {
    id: DeploymentID.fromPartial({})
  };
}
export const QueryDeploymentRequest = {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest",
  encode(message: QueryDeploymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<QueryDeploymentRequest>, I>>(object: I): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    return message;
  },
  fromProtoMsg(message: QueryDeploymentRequestProtoMsg): QueryDeploymentRequest {
    return QueryDeploymentRequest.decode(message.value);
  },
  toProto(message: QueryDeploymentRequest): Uint8Array {
    return QueryDeploymentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentRequest): QueryDeploymentRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest",
      value: QueryDeploymentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
  return {
    deployment: Deployment.fromPartial({}),
    groups: [],
    escrowAccount: Account.fromPartial({})
  };
}
export const QueryDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse",
  encode(message: QueryDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<QueryDeploymentResponse>, I>>(object: I): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromPartial(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    }
    return message;
  },
  fromProtoMsg(message: QueryDeploymentResponseProtoMsg): QueryDeploymentResponse {
    return QueryDeploymentResponse.decode(message.value);
  },
  toProto(message: QueryDeploymentResponse): Uint8Array {
    return QueryDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentResponse): QueryDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse",
      value: QueryDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGroupRequest(): QueryGroupRequest {
  return {
    id: GroupID.fromPartial({})
  };
}
export const QueryGroupRequest = {
  typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest",
  encode(message: QueryGroupRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<QueryGroupRequest>, I>>(object: I): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromProtoMsg(message: QueryGroupRequestProtoMsg): QueryGroupRequest {
    return QueryGroupRequest.decode(message.value);
  },
  toProto(message: QueryGroupRequest): Uint8Array {
    return QueryGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupRequest): QueryGroupRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest",
      value: QueryGroupRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGroupResponse(): QueryGroupResponse {
  return {
    group: Group.fromPartial({})
  };
}
export const QueryGroupResponse = {
  typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse",
  encode(message: QueryGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial<I extends Exact<Partial<QueryGroupResponse>, I>>(object: I): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    }
    return message;
  },
  fromProtoMsg(message: QueryGroupResponseProtoMsg): QueryGroupResponse {
    return QueryGroupResponse.decode(message.value);
  },
  toProto(message: QueryGroupResponse): Uint8Array {
    return QueryGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupResponse): QueryGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse",
      value: QueryGroupResponse.encode(message).finish()
    };
  }
};
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
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Deployments queries deployments */
  deployments = async (request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> => {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployments", data);
    return promise.then(data => QueryDeploymentsResponse.decode(new BinaryReader(data)));
  };
  /* Deployment queries deployment details */
  deployment = async (request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> => {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Deployment", data);
    return promise.then(data => QueryDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* Group queries group details */
  group = async (request: QueryGroupRequest): Promise<QueryGroupResponse> => {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Query", "Group", data);
    return promise.then(data => QueryGroupResponse.decode(new BinaryReader(data)));
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