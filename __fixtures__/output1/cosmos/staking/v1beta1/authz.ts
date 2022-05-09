import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface StakeAuthorization {
  maxTokens: Coin;
  allowList?: StakeAuthorization_Validators;
  denyList?: StakeAuthorization_Validators;
  authorizationType: AuthorizationType;
}

function createBaseStakeAuthorization(): StakeAuthorization {
  return {
    maxTokens: undefined,
    allowList: undefined,
    denyList: undefined,
    authorizationType: undefined
  };
}

export const StakeAuthorization = {
  encode(message: StakeAuthorization, writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxTokens !== undefined) {
      Coin.encode(message.maxTokens, writer.uint32(10).fork()).ldelim();
    }

    if (message.allowList !== undefined) {
      StakeAuthorization_Validators.encode(message.allowList, writer.uint32(18).fork()).ldelim();
    }

    if (message.denyList !== undefined) {
      StakeAuthorization_Validators.encode(message.denyList, writer.uint32(26).fork()).ldelim();
    }

    if (message.authorizationType !== 0) {
      writer.uint32(32).int32(message.authorizationType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxTokens = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.allowList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;

        case 3:
          message.denyList = StakeAuthorization_Validators.decode(reader, reader.uint32());
          break;

        case 4:
          message.authorizationType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StakeAuthorization {
    return {
      maxTokens: isSet(object.maxTokens) ? Coin.fromJSON(object.maxTokens) : undefined,
      allowList: isSet(object.allowList) ? StakeAuthorization_Validators.fromJSON(object.allowList) : undefined,
      denyList: isSet(object.denyList) ? StakeAuthorization_Validators.fromJSON(object.denyList) : undefined,
      authorizationType: isSet(object.authorizationType) ? authorizationTypeFromJSON(object.authorizationType) : 0
    };
  },

  toJSON(message: StakeAuthorization): unknown {
    const obj: any = {};
    message.maxTokens !== undefined && (obj.maxTokens = message.maxTokens ? Coin.toJSON(message.maxTokens) : undefined);
    message.allowList !== undefined && (obj.allowList = message.allowList ? StakeAuthorization_Validators.toJSON(message.allowList) : undefined);
    message.denyList !== undefined && (obj.denyList = message.denyList ? StakeAuthorization_Validators.toJSON(message.denyList) : undefined);
    message.authorizationType !== undefined && (obj.authorizationType = authorizationTypeToJSON(message.authorizationType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeAuthorization>, I>>(object: I): StakeAuthorization {
    const message = createBaseStakeAuthorization();
    message.maxTokens = object.maxTokens !== undefined && object.maxTokens !== null ? Coin.fromPartial(object.maxTokens) : undefined;
    message.allowList = object.allowList !== undefined && object.allowList !== null ? StakeAuthorization_Validators.fromPartial(object.allowList) : undefined;
    message.denyList = object.denyList !== undefined && object.denyList !== null ? StakeAuthorization_Validators.fromPartial(object.denyList) : undefined;
    message.authorizationType = object.authorizationType ?? 0;
    return message;
  }

};
export interface StakeAuthorization_Validators {
  address: string[];
}

function createBaseStakeAuthorization_Validators(): StakeAuthorization_Validators {
  return {
    address: []
  };
}

export const StakeAuthorization_Validators = {
  encode(message: StakeAuthorization_Validators, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.address) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeAuthorization_Validators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeAuthorization_Validators();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StakeAuthorization_Validators {
    return {
      address: Array.isArray(object?.address) ? object.address.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: StakeAuthorization_Validators): unknown {
    const obj: any = {};

    if (message.address) {
      obj.address = message.address.map(e => e);
    } else {
      obj.address = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeAuthorization_Validators>, I>>(object: I): StakeAuthorization_Validators {
    const message = createBaseStakeAuthorization_Validators();
    message.address = object.address?.map(e => e) || [];
    return message;
  }

};
export enum AuthorizationType {
  /*AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type*/
  AUTHORIZATION_TYPE_UNSPECIFIED = 0,

  /*AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate*/
  AUTHORIZATION_TYPE_DELEGATE = 1,

  /*AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate*/
  AUTHORIZATION_TYPE_UNDELEGATE = 2,

  /*AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate*/
  AUTHORIZATION_TYPE_REDELEGATE = 3,
  UNRECOGNIZED = -1,
}
export function authorizationTypeFromJSON(object: any): AuthorizationType {
  switch (object) {
    case "AUTHORIZATION_TYPE_UNSPECIFIED":
      return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;

    case "AUTHORIZATION_TYPE_DELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;

    case "AUTHORIZATION_TYPE_UNDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;

    case "AUTHORIZATION_TYPE_REDELEGATE":
      return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthorizationType.UNRECOGNIZED;
  }
}
export function authorizationTypeToJSON(object: AuthorizationType): string {
  switch (object) {
    case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
      return "AUTHORIZATION_TYPE_UNSPECIFIED";

    case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
      return "AUTHORIZATION_TYPE_DELEGATE";

    case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
      return "AUTHORIZATION_TYPE_UNDELEGATE";

    case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
      return "AUTHORIZATION_TYPE_REDELEGATE";

    default:
      return "UNKNOWN";
  }
}