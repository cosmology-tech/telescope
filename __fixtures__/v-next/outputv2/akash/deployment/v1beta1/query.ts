import { DeploymentFilters, DeploymentFiltersAmino, DeploymentFiltersSDKType, DeploymentID, DeploymentIDAmino, DeploymentIDSDKType, Deployment, DeploymentAmino, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDAmino, GroupIDSDKType, Group, GroupAmino, GroupSDKType } from "./group";
import { Account, AccountAmino, AccountSDKType } from "../../escrow/v1beta1/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta1";
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  filters: DeploymentFilters;
  pagination?: PageRequest;
}
export interface QueryDeploymentsRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsRequest";
  value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestAmino {
  filters?: DeploymentFiltersAmino;
  pagination?: PageRequestAmino;
}
export interface QueryDeploymentsRequestAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentsRequest";
  value: QueryDeploymentsRequestAmino;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequestSDKType {
  filters: DeploymentFiltersSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  deployments: QueryDeploymentResponse[];
  pagination?: PageResponse;
}
export interface QueryDeploymentsResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentsResponse";
  value: Uint8Array;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseAmino {
  deployments: QueryDeploymentResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDeploymentsResponseAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentsResponse";
  value: QueryDeploymentsResponseAmino;
}
/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponseSDKType {
  deployments: QueryDeploymentResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  id: DeploymentID;
}
export interface QueryDeploymentRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentRequest";
  value: Uint8Array;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestAmino {
  id?: DeploymentIDAmino;
}
export interface QueryDeploymentRequestAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentRequest";
  value: QueryDeploymentRequestAmino;
}
/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequestSDKType {
  id: DeploymentIDSDKType;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  deployment: Deployment;
  groups: Group[];
  escrowAccount: Account;
}
export interface QueryDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryDeploymentResponse";
  value: Uint8Array;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseAmino {
  deployment?: DeploymentAmino;
  groups: GroupAmino[];
  escrow_account?: AccountAmino;
}
export interface QueryDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta1.QueryDeploymentResponse";
  value: QueryDeploymentResponseAmino;
}
/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponseSDKType {
  deployment: DeploymentSDKType;
  groups: GroupSDKType[];
  escrow_account: AccountSDKType;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  id: GroupID;
}
export interface QueryGroupRequestProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryGroupRequest";
  value: Uint8Array;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestAmino {
  id?: GroupIDAmino;
}
export interface QueryGroupRequestAminoMsg {
  type: "/akash.deployment.v1beta1.QueryGroupRequest";
  value: QueryGroupRequestAmino;
}
/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequestSDKType {
  id: GroupIDSDKType;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  group: Group;
}
export interface QueryGroupResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.QueryGroupResponse";
  value: Uint8Array;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseAmino {
  group?: GroupAmino;
}
export interface QueryGroupResponseAminoMsg {
  type: "/akash.deployment.v1beta1.QueryGroupResponse";
  value: QueryGroupResponseAmino;
}
/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponseSDKType {
  group: GroupSDKType;
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDeploymentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = DeploymentFilters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentsRequest {
    const obj = createBaseQueryDeploymentsRequest();
    if (isSet(object.filters)) obj.filters = DeploymentFilters.fromJSON(object.filters);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDeploymentsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? DeploymentFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDeploymentsRequest>): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = DeploymentFilters.fromPartial(object.filters);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentsRequestSDKType): QueryDeploymentsRequest {
    return {
      filters: object.filters ? DeploymentFilters.fromSDK(object.filters) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDeploymentsRequest): QueryDeploymentsRequestSDKType {
    const obj: any = {};
    message.filters !== undefined && (obj.filters = message.filters ? DeploymentFilters.toSDK(message.filters) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentsRequestAmino): QueryDeploymentsRequest {
    return {
      filters: object?.filters ? DeploymentFilters.fromAmino(object.filters) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDeploymentsRequest, useInterfaces: boolean = true): QueryDeploymentsRequestAmino {
    const obj: any = {};
    obj.filters = message.filters ? DeploymentFilters.toAmino(message.filters, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentsRequestAminoMsg): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentsRequestProtoMsg, useInterfaces: boolean = true): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.decode(message.value, undefined, useInterfaces);
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDeploymentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployments.push(QueryDeploymentResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentsResponse {
    const obj = createBaseQueryDeploymentsResponse();
    if (Array.isArray(object?.deployments)) obj.deployments = object.deployments.map((e: any) => QueryDeploymentResponse.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentsResponseSDKType): QueryDeploymentsResponse {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDeploymentsResponse): QueryDeploymentsResponseSDKType {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toSDK(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentsResponseAmino): QueryDeploymentsResponse {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => QueryDeploymentResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDeploymentsResponse, useInterfaces: boolean = true): QueryDeploymentsResponseAmino {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? QueryDeploymentResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.deployments = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentsResponseAminoMsg): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentsResponseProtoMsg, useInterfaces: boolean = true): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.decode(message.value, undefined, useInterfaces);
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDeploymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentRequest {
    const obj = createBaseQueryDeploymentRequest();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryDeploymentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDeploymentRequest>): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentRequestSDKType): QueryDeploymentRequest {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryDeploymentRequest): QueryDeploymentRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentRequestAmino): QueryDeploymentRequest {
    return {
      id: object?.id ? DeploymentID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: QueryDeploymentRequest, useInterfaces: boolean = true): QueryDeploymentRequestAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentRequestAminoMsg): QueryDeploymentRequest {
    return QueryDeploymentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentRequestProtoMsg, useInterfaces: boolean = true): QueryDeploymentRequest {
    return QueryDeploymentRequest.decode(message.value, undefined, useInterfaces);
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.escrowAccount = Account.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDeploymentResponse {
    const obj = createBaseQueryDeploymentResponse();
    if (isSet(object.deployment)) obj.deployment = Deployment.fromJSON(object.deployment);
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => Group.fromJSON(e));
    if (isSet(object.escrowAccount)) obj.escrowAccount = Account.fromJSON(object.escrowAccount);
    return obj;
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
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromPartial(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    }
    return message;
  },
  fromSDK(object: QueryDeploymentResponseSDKType): QueryDeploymentResponse {
    return {
      deployment: object.deployment ? Deployment.fromSDK(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDK(e)) : [],
      escrowAccount: object.escrow_account ? Account.fromSDK(object.escrow_account) : undefined
    };
  },
  toSDK(message: QueryDeploymentResponse): QueryDeploymentResponseSDKType {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toSDK(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.escrowAccount !== undefined && (obj.escrow_account = message.escrowAccount ? Account.toSDK(message.escrowAccount) : undefined);
    return obj;
  },
  fromAmino(object: QueryDeploymentResponseAmino): QueryDeploymentResponse {
    return {
      deployment: object?.deployment ? Deployment.fromAmino(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromAmino(e)) : [],
      escrowAccount: object?.escrow_account ? Account.fromAmino(object.escrow_account) : undefined
    };
  },
  toAmino(message: QueryDeploymentResponse, useInterfaces: boolean = true): QueryDeploymentResponseAmino {
    const obj: any = {};
    obj.deployment = message.deployment ? Deployment.toAmino(message.deployment, useInterfaces) : undefined;
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.groups = [];
    }
    obj.escrow_account = message.escrowAccount ? Account.toAmino(message.escrowAccount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDeploymentResponseAminoMsg): QueryDeploymentResponse {
    return QueryDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeploymentResponseProtoMsg, useInterfaces: boolean = true): QueryDeploymentResponse {
    return QueryDeploymentResponse.decode(message.value, undefined, useInterfaces);
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupRequest {
    const obj = createBaseQueryGroupRequest();
    if (isSet(object.id)) obj.id = GroupID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: QueryGroupRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupRequest>): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: QueryGroupRequestSDKType): QueryGroupRequest {
    return {
      id: object.id ? GroupID.fromSDK(object.id) : undefined
    };
  },
  toSDK(message: QueryGroupRequest): QueryGroupRequestSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toSDK(message.id) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupRequestAmino): QueryGroupRequest {
    return {
      id: object?.id ? GroupID.fromAmino(object.id) : undefined
    };
  },
  toAmino(message: QueryGroupRequest, useInterfaces: boolean = true): QueryGroupRequestAmino {
    const obj: any = {};
    obj.id = message.id ? GroupID.toAmino(message.id, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupRequestAminoMsg): QueryGroupRequest {
    return QueryGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupRequestProtoMsg, useInterfaces: boolean = true): QueryGroupRequest {
    return QueryGroupRequest.decode(message.value, undefined, useInterfaces);
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGroupResponse {
    const obj = createBaseQueryGroupResponse();
    if (isSet(object.group)) obj.group = Group.fromJSON(object.group);
    return obj;
  },
  toJSON(message: QueryGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGroupResponse>): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    }
    return message;
  },
  fromSDK(object: QueryGroupResponseSDKType): QueryGroupResponse {
    return {
      group: object.group ? Group.fromSDK(object.group) : undefined
    };
  },
  toSDK(message: QueryGroupResponse): QueryGroupResponseSDKType {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toSDK(message.group) : undefined);
    return obj;
  },
  fromAmino(object: QueryGroupResponseAmino): QueryGroupResponse {
    return {
      group: object?.group ? Group.fromAmino(object.group) : undefined
    };
  },
  toAmino(message: QueryGroupResponse, useInterfaces: boolean = true): QueryGroupResponseAmino {
    const obj: any = {};
    obj.group = message.group ? Group.toAmino(message.group, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGroupResponseAminoMsg): QueryGroupResponse {
    return QueryGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGroupResponseProtoMsg, useInterfaces: boolean = true): QueryGroupResponse {
    return QueryGroupResponse.decode(message.value, undefined, useInterfaces);
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