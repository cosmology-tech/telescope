import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.valsetpref.v1beta1";
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequest {
  /** user account address */
  address: string;
}
/** Request type for UserValidatorPreferences. */
export interface UserValidatorPreferencesRequestSDKType {
  address: string;
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponse {
  preferences: ValidatorPreference[];
}
/** Response type the QueryUserValidatorPreferences query request */
export interface UserValidatorPreferencesResponseSDKType {
  preferences: ValidatorPreferenceSDKType[];
}
function createBaseUserValidatorPreferencesRequest(): UserValidatorPreferencesRequest {
  return {
    address: ""
  };
}
export const UserValidatorPreferencesRequest = {
  encode(message: UserValidatorPreferencesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserValidatorPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserValidatorPreferencesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: UserValidatorPreferencesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<UserValidatorPreferencesRequest>): UserValidatorPreferencesRequest {
    const message = createBaseUserValidatorPreferencesRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: UserValidatorPreferencesRequestSDKType): UserValidatorPreferencesRequest {
    return {
      address: object?.address
    };
  },
  fromSDKJSON(object: any): UserValidatorPreferencesRequestSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toSDK(message: UserValidatorPreferencesRequest): UserValidatorPreferencesRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  }
};
function createBaseUserValidatorPreferencesResponse(): UserValidatorPreferencesResponse {
  return {
    preferences: []
  };
}
export const UserValidatorPreferencesResponse = {
  encode(message: UserValidatorPreferencesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserValidatorPreferencesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserValidatorPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserValidatorPreferencesResponse {
    return {
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },
  toJSON(message: UserValidatorPreferencesResponse): unknown {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UserValidatorPreferencesResponse>): UserValidatorPreferencesResponse {
    const message = createBaseUserValidatorPreferencesResponse();
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: UserValidatorPreferencesResponseSDKType): UserValidatorPreferencesResponse {
    return {
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): UserValidatorPreferencesResponseSDKType {
    return {
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: UserValidatorPreferencesResponse): UserValidatorPreferencesResponseSDKType {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toSDK(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  }
};