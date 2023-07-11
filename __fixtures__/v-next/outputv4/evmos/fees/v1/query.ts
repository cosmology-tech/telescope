import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.fees.v1";
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 */
export interface QueryDevFeeInfosRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 */
export interface QueryDevFeeInfosRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 */
export interface QueryDevFeeInfosResponse {
  fees: DevFeeInfo[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 */
export interface QueryDevFeeInfosResponseSDKType {
  fees: DevFeeInfoSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoRequest {
  /** contract identifier is the hex contract address of a contract */
  contractAddress: string;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoRequestSDKType {
  contract_address: string;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoResponse {
  fee: DevFeeInfo;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoResponseSDKType {
  fee: DevFeeInfoSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerRequest {
  /** deployer bech32 address */
  deployerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerRequestSDKType {
  deployer_address: string;
  pagination: PageRequestSDKType;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerResponse {
  fees: DevFeeInfo[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerResponseSDKType {
  fees: DevFeeInfoSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryDevFeeInfosRequest(): QueryDevFeeInfosRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDevFeeInfosRequest = {
  encode(message: QueryDevFeeInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfosRequest {
    const obj = createBaseQueryDevFeeInfosRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDevFeeInfosRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosRequest>): QueryDevFeeInfosRequest {
    const message = createBaseQueryDevFeeInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: QueryDevFeeInfosRequestSDKType): QueryDevFeeInfosRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosRequest): QueryDevFeeInfosRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryDevFeeInfosResponse(): QueryDevFeeInfosResponse {
  return {
    fees: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDevFeeInfosResponse = {
  encode(message: QueryDevFeeInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDevFeeInfosResponse {
    const obj = createBaseQueryDevFeeInfosResponse();
    if (Array.isArray(object?.fees)) object.fees.map((e: any) => DevFeeInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDevFeeInfosResponse): unknown {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosResponse>): QueryDevFeeInfosResponse {
    const message = createBaseQueryDevFeeInfosResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryDevFeeInfosResponseSDKType): QueryDevFeeInfosResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosResponseSDKType {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosResponse): QueryDevFeeInfosResponseSDKType {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toSDK(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryDevFeeInfoRequest(): QueryDevFeeInfoRequest {
  return {
    contractAddress: ""
  };
}
export const QueryDevFeeInfoRequest = {
  encode(message: QueryDevFeeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoRequest {
    const obj = createBaseQueryDevFeeInfoRequest();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(message: QueryDevFeeInfoRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoRequest>): QueryDevFeeInfoRequest {
    const message = createBaseQueryDevFeeInfoRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDevFeeInfoRequestSDKType): QueryDevFeeInfoRequest {
    return {
      contractAddress: object?.contract_address
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfoRequestSDKType {
    return {
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : ""
    };
  },
  toSDK(message: QueryDevFeeInfoRequest): QueryDevFeeInfoRequestSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  }
};
function createBaseQueryDevFeeInfoResponse(): QueryDevFeeInfoResponse {
  return {
    fee: DevFeeInfo.fromPartial({})
  };
}
export const QueryDevFeeInfoResponse = {
  encode(message: QueryDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      DevFeeInfo.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = DevFeeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoResponse {
    const obj = createBaseQueryDevFeeInfoResponse();
    if (isSet(object.fee)) obj.fee = DevFeeInfo.fromJSON(object.fee);
    return obj;
  },
  toJSON(message: QueryDevFeeInfoResponse): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DevFeeInfo.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoResponse>): QueryDevFeeInfoResponse {
    const message = createBaseQueryDevFeeInfoResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? DevFeeInfo.fromPartial(object.fee) : DevFeeInfo.fromPartial({});
    return message;
  },
  fromSDK(object: QueryDevFeeInfoResponseSDKType): QueryDevFeeInfoResponse {
    return {
      fee: object.fee ? DevFeeInfo.fromSDK(object.fee) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfoResponseSDKType {
    return {
      fee: isSet(object.fee) ? DevFeeInfo.fromSDKJSON(object.fee) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfoResponse): QueryDevFeeInfoResponseSDKType {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DevFeeInfo.toSDK(message.fee) : undefined);
    return obj;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : Params.fromPartial({});
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseQueryDevFeeInfosPerDeployerRequest(): QueryDevFeeInfosPerDeployerRequest {
  return {
    deployerAddress: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDevFeeInfosPerDeployerRequest = {
  encode(message: QueryDevFeeInfosPerDeployerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosPerDeployerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployerAddress = reader.string();
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
  fromJSON(object: any): QueryDevFeeInfosPerDeployerRequest {
    const obj = createBaseQueryDevFeeInfosPerDeployerRequest();
    if (isSet(object.deployerAddress)) obj.deployerAddress = String(object.deployerAddress);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDevFeeInfosPerDeployerRequest): unknown {
    const obj: any = {};
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerRequest>): QueryDevFeeInfosPerDeployerRequest {
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: QueryDevFeeInfosPerDeployerRequestSDKType): QueryDevFeeInfosPerDeployerRequest {
    return {
      deployerAddress: object?.deployer_address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosPerDeployerRequestSDKType {
    return {
      deployer_address: isSet(object.deployer_address) ? String(object.deployer_address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosPerDeployerRequest): QueryDevFeeInfosPerDeployerRequestSDKType {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryDevFeeInfosPerDeployerResponse(): QueryDevFeeInfosPerDeployerResponse {
  return {
    fees: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDevFeeInfosPerDeployerResponse = {
  encode(message: QueryDevFeeInfosPerDeployerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosPerDeployerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDevFeeInfosPerDeployerResponse {
    const obj = createBaseQueryDevFeeInfosPerDeployerResponse();
    if (Array.isArray(object?.fees)) object.fees.map((e: any) => DevFeeInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDevFeeInfosPerDeployerResponse): unknown {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerResponse>): QueryDevFeeInfosPerDeployerResponse {
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryDevFeeInfosPerDeployerResponseSDKType): QueryDevFeeInfosPerDeployerResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosPerDeployerResponseSDKType {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosPerDeployerResponse): QueryDevFeeInfosPerDeployerResponseSDKType {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toSDK(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};