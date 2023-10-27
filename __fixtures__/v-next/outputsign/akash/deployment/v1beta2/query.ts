import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "akash.deployment.v1beta2";
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
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentsResponse";
  value: Uint8Array;
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
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentRequest";
  value: Uint8Array;
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
  typeUrl: "/akash.deployment.v1beta2.QueryDeploymentResponse";
  value: Uint8Array;
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
  typeUrl: "/akash.deployment.v1beta2.QueryGroupRequest";
  value: Uint8Array;
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
  typeUrl: "/akash.deployment.v1beta2.QueryGroupResponse";
  value: Uint8Array;
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