import * as _m0 from "protobuf/minimal";
import { isSet, Long } from "@osmonauts/helpers";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
export interface QueryValidatorsRequest {
  status: string;
  pagination: PageRequest;
}

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    status: "",
    pagination: undefined
  };
}

export const QueryValidatorsRequest = {
  encode(message: QueryValidatorsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
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

  fromJSON(object: any): QueryValidatorsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsRequest>, I>>(object: I): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryValidatorsResponse {
  validators: Validator[];
  pagination: PageResponse;
}

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(object: I): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryValidatorRequest {
  validatorAddr: string;
}

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validatorAddr: ""
  };
}

export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },

  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(object: I): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }

};
export interface QueryValidatorResponse {
  validator: Validator;
}

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: undefined
  };
}

export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorResponse {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined
    };
  },

  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(object: I): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  }

};
export interface QueryValidatorDelegationsRequest {
  validatorAddr: string;
  pagination: PageRequest;
}

function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}

export const QueryValidatorDelegationsRequest = {
  encode(message: QueryValidatorDelegationsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
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

  fromJSON(object: any): QueryValidatorDelegationsRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsRequest>, I>>(object: I): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  pagination: PageResponse;
}

function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}

export const QueryValidatorDelegationsResponse = {
  encode(message: QueryValidatorDelegationsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegationResponses) ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};

    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsResponse>, I>>(object: I): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryValidatorUnbondingDelegationsRequest {
  validatorAddr: string;
  pagination: PageRequest;
}

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsRequest>, I>>(object: I): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  pagination: PageResponse;
}

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbondingResponses) ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};

    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsResponse>, I>>(object: I): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
}

function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}

export const QueryDelegationRequest = {
  encode(message: QueryDelegationRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },

  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationRequest>, I>>(object: I): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }

};
export interface QueryDelegationResponse {
  delegationResponse: DelegationResponse;
}

function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return {
    delegationResponse: undefined
  };
}

export const QueryDelegationResponse = {
  encode(message: QueryDelegationResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegationResponse {
    return {
      delegationResponse: isSet(object.delegationResponse) ? DelegationResponse.fromJSON(object.delegationResponse) : undefined
    };
  },

  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegationResponse = message.delegationResponse ? DelegationResponse.toJSON(message.delegationResponse) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationResponse>, I>>(object: I): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? DelegationResponse.fromPartial(object.delegationResponse) : undefined;
    return message;
  }

};
export interface QueryUnbondingDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
}

function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}

export const QueryUnbondingDelegationRequest = {
  encode(message: QueryUnbondingDelegationRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryUnbondingDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },

  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationRequest>, I>>(object: I): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }

};
export interface QueryUnbondingDelegationResponse {
  unbond: UnbondingDelegation;
}

function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return {
    unbond: undefined
  };
}

export const QueryUnbondingDelegationResponse = {
  encode(message: QueryUnbondingDelegationResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationResponse {
    return {
      unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : undefined
    };
  },

  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined && (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationResponse>, I>>(object: I): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  }

};
export interface QueryDelegatorDelegationsRequest {
  delegatorAddr: string;
  pagination: PageRequest;
}

function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}

export const QueryDelegatorDelegationsRequest = {
  encode(message: QueryDelegatorDelegationsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsRequest>, I>>(object: I): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryDelegatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  pagination: PageResponse;
}

function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}

export const QueryDelegatorDelegationsResponse = {
  encode(message: QueryDelegatorDelegationsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegationResponses) ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};

    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsResponse>, I>>(object: I): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryDelegatorUnbondingDelegationsRequest {
  delegatorAddr: string;
  pagination: PageRequest;
}

function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}

export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, I>>(object: I): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  pagination: PageResponse;
}

function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}

export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbondingResponses) ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};

    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsResponse>, I>>(object: I): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryRedelegationsRequest {
  delegatorAddr: string;
  srcValidatorAddr: string;
  dstValidatorAddr: string;
  pagination: PageRequest;
}

function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: undefined
  };
}

export const QueryRedelegationsRequest = {
  encode(message: QueryRedelegationsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }

    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.srcValidatorAddr = reader.string();
          break;

        case 3:
          message.dstValidatorAddr = reader.string();
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRedelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      srcValidatorAddr: isSet(object.srcValidatorAddr) ? String(object.srcValidatorAddr) : "",
      dstValidatorAddr: isSet(object.dstValidatorAddr) ? String(object.dstValidatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRedelegationsRequest>, I>>(object: I): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  pagination: PageResponse;
}

function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    redelegationResponses: [],
    pagination: undefined
  };
}

export const QueryRedelegationsResponse = {
  encode(message: QueryRedelegationsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryRedelegationsResponse {
    return {
      redelegationResponses: Array.isArray(object?.redelegationResponses) ? object.redelegationResponses.map((e: any) => RedelegationResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};

    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map(e => e ? RedelegationResponse.toJSON(e) : undefined);
    } else {
      obj.redelegationResponses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRedelegationsResponse>, I>>(object: I): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map(e => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryDelegatorValidatorsRequest {
  delegatorAddr: string;
  pagination: PageRequest;
}

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(object: I): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryDelegatorValidatorsResponse {
  validators: Validator[];
  pagination: PageResponse;
}

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(object: I): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};
export interface QueryDelegatorValidatorRequest {
  delegatorAddr: string;
  validatorAddr: string;
}

function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}

export const QueryDelegatorValidatorRequest = {
  encode(message: QueryDelegatorValidatorRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }

    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;

        case 2:
          message.validatorAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },

  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorRequest>, I>>(object: I): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }

};
export interface QueryDelegatorValidatorResponse {
  validator: Validator;
}

function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return {
    validator: undefined
  };
}

export const QueryDelegatorValidatorResponse = {
  encode(message: QueryDelegatorValidatorResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryDelegatorValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorResponse {
    return {
      validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined
    };
  },

  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorResponse>, I>>(object: I): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  }

};
export interface QueryHistoricalInfoRequest {
  height: Long;
}

function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return {
    height: Long.UZERO
  };
}

export const QueryHistoricalInfoRequest = {
  encode(message: QueryHistoricalInfoRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryHistoricalInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoRequest {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoRequest>, I>>(object: I): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};
export interface QueryHistoricalInfoResponse {
  hist: HistoricalInfo;
}

function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return {
    hist: undefined
  };
}

export const QueryHistoricalInfoResponse = {
  encode(message: QueryHistoricalInfoResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryHistoricalInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoResponse {
    return {
      hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : undefined
    };
  },

  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoResponse>, I>>(object: I): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  }

};
export interface QueryPoolRequest {}

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}

export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();

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

  fromJSON(object: any): QueryPoolRequest {
    return {};
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(object: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  }

};
export interface QueryPoolResponse {
  pool: Pool;
}

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  }

};
export interface QueryParamsRequest {}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryParamsRequest {
    return {};
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(object: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};
export interface QueryParamsResponse {
  params: Params;
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};