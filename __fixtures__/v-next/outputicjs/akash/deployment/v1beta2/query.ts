import { DeploymentFilters, DeploymentFiltersAmino, DeploymentID, DeploymentIDAmino, Deployment, DeploymentAmino } from "./deployment";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDAmino } from "./groupid";
import { Group, GroupAmino } from "./group";
import { Account, AccountAmino } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  filters: DeploymentFilters;
  pagination?: PageRequest;
}
export interface QueryDeploymentsRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsRequest";
  value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestAmino {
  filters: DeploymentFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryDeploymentsRequestAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentsRequest";
  value: QueryDeploymentsRequestAmino;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  deployments: QueryDeploymentResponse[];
  pagination?: PageResponse;
}
export interface QueryDeploymentsResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse";
  value: Uint8Array;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseAmino {
  deployments: QueryDeploymentResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDeploymentsResponseAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentsResponse";
  value: QueryDeploymentsResponseAmino;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  id: DeploymentID;
}
export interface QueryDeploymentRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest";
  value: Uint8Array;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestAmino {
  id: DeploymentIDAmino;
}
export interface QueryDeploymentRequestAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentRequest";
  value: QueryDeploymentRequestAmino;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  deployment: Deployment;
  groups: Group[];
  escrowAccount: Account;
}
export interface QueryDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse";
  value: Uint8Array;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseAmino {
  deployment: DeploymentAmino;
  groups: GroupAmino[];
  escrow_account: AccountAmino;
}
export interface QueryDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta2.QueryDeploymentResponse";
  value: QueryDeploymentResponseAmino;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  id: GroupID;
}
export interface QueryGroupRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest";
  value: Uint8Array;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestAmino {
  id: GroupIDAmino;
}
export interface QueryGroupRequestAminoMsg {
  type: "/akash.deployment.v1beta2.QueryGroupRequest";
  value: QueryGroupRequestAmino;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  group: Group;
}
export interface QueryGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse";
  value: Uint8Array;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseAmino {
  group: GroupAmino;
}
export interface QueryGroupResponseAminoMsg {
  type: "/akash.deployment.v1beta2.QueryGroupResponse";
  value: QueryGroupResponseAmino;
}
function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return {
    filters: DeploymentFilters.fromPartial({}),
    pagination: undefined
  };
}
export const QueryDeploymentsRequest = {
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsRequest",
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
  fromPartial(object: DeepPartial<QueryDeploymentsRequest>): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    message.filters = object.filters !== undefined && object.filters !== null ? DeploymentFilters.fromPartial(object.filters) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDeploymentsRequestAmino): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = DeploymentFilters.fromAmino(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeploymentsRequest): QueryDeploymentsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? DeploymentFilters.toAmino(message.filters) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentsRequestAminoMsg): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentsRequestProtoMsg): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.decode(message.value);
  },
  toProto(message: QueryDeploymentsRequest): Uint8Array {
    return QueryDeploymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentsRequest): QueryDeploymentsRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsRequest",
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
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse",
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
  fromPartial(object: DeepPartial<QueryDeploymentsResponse>): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDeploymentsResponseAmino): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map(e => QueryDeploymentResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDeploymentsResponse): QueryDeploymentsResponseAmino {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toAmino(e) : undefined);
    } else {
      obj.deployments = message.deployments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentsResponseAminoMsg): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentsResponseProtoMsg): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.decode(message.value);
  },
  toProto(message: QueryDeploymentsResponse): Uint8Array {
    return QueryDeploymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentsResponse): QueryDeploymentsResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse",
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
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest",
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
  fromPartial(object: DeepPartial<QueryDeploymentRequest>): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: QueryDeploymentRequestAmino): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryDeploymentRequest): QueryDeploymentRequestAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentRequestAminoMsg): QueryDeploymentRequest {
    return QueryDeploymentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentRequestProtoMsg): QueryDeploymentRequest {
    return QueryDeploymentRequest.decode(message.value);
  },
  toProto(message: QueryDeploymentRequest): Uint8Array {
    return QueryDeploymentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentRequest): QueryDeploymentRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest",
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
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse",
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
  fromPartial(object: DeepPartial<QueryDeploymentResponse>): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    message.escrowAccount = object.escrowAccount !== undefined && object.escrowAccount !== null ? Account.fromPartial(object.escrowAccount) : undefined;
    return message;
  },
  fromAmino(object: QueryDeploymentResponseAmino): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromAmino(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    if (object.escrow_account !== undefined && object.escrow_account !== null) {
      message.escrowAccount = Account.fromAmino(object.escrow_account);
    }
    return message;
  },
  toAmino(message: QueryDeploymentResponse): QueryDeploymentResponseAmino {
    const obj: any = {};
    obj.deployment = message.deployment ? Deployment.toAmino(message.deployment) : Deployment.toAmino(Deployment.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentResponseAminoMsg): QueryDeploymentResponse {
    return QueryDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentResponseProtoMsg): QueryDeploymentResponse {
    return QueryDeploymentResponse.decode(message.value);
  },
  toProto(message: QueryDeploymentResponse): Uint8Array {
    return QueryDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeploymentResponse): QueryDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse",
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
  typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest",
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
  fromPartial(object: DeepPartial<QueryGroupRequest>): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupRequestAmino): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: QueryGroupRequest): QueryGroupRequestAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupRequestAminoMsg): QueryGroupRequest {
    return QueryGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupRequestProtoMsg): QueryGroupRequest {
    return QueryGroupRequest.decode(message.value);
  },
  toProto(message: QueryGroupRequest): Uint8Array {
    return QueryGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupRequest): QueryGroupRequestProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest",
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
  typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse",
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
  fromPartial(object: DeepPartial<QueryGroupResponse>): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    message.group = object.group !== undefined && object.group !== null ? Group.fromPartial(object.group) : undefined;
    return message;
  },
  fromAmino(object: QueryGroupResponseAmino): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromAmino(object.group);
    }
    return message;
  },
  toAmino(message: QueryGroupResponse): QueryGroupResponseAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupResponseAminoMsg): QueryGroupResponse {
    return QueryGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupResponseProtoMsg): QueryGroupResponse {
    return QueryGroupResponse.decode(message.value);
  },
  toProto(message: QueryGroupResponse): Uint8Array {
    return QueryGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGroupResponse): QueryGroupResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse",
      value: QueryGroupResponse.encode(message).finish()
    };
  }
};