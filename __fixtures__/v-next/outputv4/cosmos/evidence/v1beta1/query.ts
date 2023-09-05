import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.evidence.v1beta1";
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
  /** evidence_hash defines the hash of the requested evidence. */
  evidenceHash: Uint8Array;
}
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequestSDKType {
  evidence_hash: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
  /** evidence returns the requested evidence. */
  evidence: Any;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponseSDKType {
  evidence: AnySDKType;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
  /** evidence returns all evidences. */
  evidence: Any[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponseSDKType {
  evidence: AnySDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryEvidenceRequest(): QueryEvidenceRequest {
  return {
    evidenceHash: new Uint8Array()
  };
}
export const QueryEvidenceRequest = {
  encode(message: QueryEvidenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidenceHash.length !== 0) {
      writer.uint32(10).bytes(message.evidenceHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvidenceRequest {
    const obj = createBaseQueryEvidenceRequest();
    if (isSet(object.evidenceHash)) obj.evidenceHash = bytesFromBase64(object.evidenceHash);
    return obj;
  },
  toJSON(message: QueryEvidenceRequest): unknown {
    const obj: any = {};
    message.evidenceHash !== undefined && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest {
    const message = createBaseQueryEvidenceRequest();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: QueryEvidenceRequestSDKType): QueryEvidenceRequest {
    return {
      evidenceHash: object?.evidence_hash
    };
  },
  fromSDKJSON(object: any): QueryEvidenceRequestSDKType {
    return {
      evidence_hash: isSet(object.evidence_hash) ? bytesFromBase64(object.evidence_hash) : new Uint8Array()
    };
  },
  toSDK(message: QueryEvidenceRequest): QueryEvidenceRequestSDKType {
    const obj: any = {};
    obj.evidence_hash = message.evidenceHash;
    return obj;
  }
};
function createBaseQueryEvidenceResponse(): QueryEvidenceResponse {
  return {
    evidence: Any.fromPartial({})
  };
}
export const QueryEvidenceResponse = {
  encode(message: QueryEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvidenceResponse {
    const obj = createBaseQueryEvidenceResponse();
    if (isSet(object.evidence)) obj.evidence = Any.fromJSON(object.evidence);
    return obj;
  },
  toJSON(message: QueryEvidenceResponse): unknown {
    const obj: any = {};
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse {
    const message = createBaseQueryEvidenceResponse();
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromPartial(object.evidence);
    }
    return message;
  },
  fromSDK(object: QueryEvidenceResponseSDKType): QueryEvidenceResponse {
    return {
      evidence: object.evidence ? Any.fromSDK(object.evidence) : undefined
    };
  },
  fromSDKJSON(object: any): QueryEvidenceResponseSDKType {
    return {
      evidence: isSet(object.evidence) ? Any.fromSDKJSON(object.evidence) : undefined
    };
  },
  toSDK(message: QueryEvidenceResponse): QueryEvidenceResponseSDKType {
    const obj: any = {};
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toSDK(message.evidence) : undefined);
    return obj;
  }
};
function createBaseQueryAllEvidenceRequest(): QueryAllEvidenceRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllEvidenceRequest = {
  encode(message: QueryAllEvidenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceRequest();
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
  fromJSON(object: any): QueryAllEvidenceRequest {
    const obj = createBaseQueryAllEvidenceRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllEvidenceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest {
    const message = createBaseQueryAllEvidenceRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllEvidenceRequestSDKType): QueryAllEvidenceRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryAllEvidenceRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryAllEvidenceResponse(): QueryAllEvidenceResponse {
  return {
    evidence: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllEvidenceResponse = {
  encode(message: QueryAllEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Any.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllEvidenceResponse {
    const obj = createBaseQueryAllEvidenceResponse();
    if (Array.isArray(object?.evidence)) object.evidence.map((e: any) => Any.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllEvidenceResponse): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map(e => Any.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryAllEvidenceResponseSDKType): QueryAllEvidenceResponse {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Any.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryAllEvidenceResponseSDKType {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Any.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseSDKType {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.evidence = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};