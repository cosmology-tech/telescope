import { Status } from "../../../rpc/status";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface CheckError {
  code: Code;
  subject: string;
  detail: string;
  status: Status;
}

function createBaseCheckError(): CheckError {
  return {
    code: undefined,
    subject: "",
    detail: "",
    status: undefined
  };
}

export const CheckError = {
  encode(message: CheckError, writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }

    if (message.subject !== "") {
      writer.uint32(34).string(message.subject);
    }

    if (message.detail !== "") {
      writer.uint32(18).string(message.detail);
    }

    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckError();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = (reader.int32() as any);
          break;

        case 4:
          message.subject = reader.string();
          break;

        case 2:
          message.detail = reader.string();
          break;

        case 3:
          message.status = Status.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckError {
    return {
      code: isSet(object.code) ? checkError_CodeFromJSON(object.code) : 0,
      subject: isSet(object.subject) ? String(object.subject) : "",
      detail: isSet(object.detail) ? String(object.detail) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined
    };
  },

  toJSON(message: CheckError): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = checkError_CodeToJSON(message.code));
    message.subject !== undefined && (obj.subject = message.subject);
    message.detail !== undefined && (obj.detail = message.detail);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckError>, I>>(object: I): CheckError {
    const message = createBaseCheckError();
    message.code = object.code ?? 0;
    message.subject = object.subject ?? "";
    message.detail = object.detail ?? "";
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    return message;
  }

};
export enum CheckError_Code {
  /*This is never used in `CheckResponse`.*/
  ERROR_CODE_UNSPECIFIED = 0,

  /*The consumer's project id, network container, or resource container was
  not found. Same as [google.rpc.Code.NOT_FOUND][google.rpc.Code.NOT_FOUND].*/
  NOT_FOUND = 5,

  /*The consumer doesn't have access to the specified resource.
  Same as [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].*/
  PERMISSION_DENIED = 7,

  /*Quota check failed. Same as [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED].*/
  RESOURCE_EXHAUSTED = 8,

  /*The consumer hasn't activated the service.*/
  SERVICE_NOT_ACTIVATED = 104,

  /*The consumer cannot access the service because billing is disabled.*/
  BILLING_DISABLED = 107,

  /*The consumer's project has been marked as deleted (soft deletion).*/
  PROJECT_DELETED = 108,

  /*The consumer's project number or id does not represent a valid project.*/
  PROJECT_INVALID = 114,

  /*The input consumer info does not represent a valid consumer folder or
  organization.*/
  CONSUMER_INVALID = 125,

  /*The IP address of the consumer is invalid for the specific consumer
  project.*/
  IP_ADDRESS_BLOCKED = 109,

  /*The referer address of the consumer request is invalid for the specific
  consumer project.*/
  REFERER_BLOCKED = 110,

  /*The client application of the consumer request is invalid for the
  specific consumer project.*/
  CLIENT_APP_BLOCKED = 111,

  /*The API targeted by this request is invalid for the specified consumer
  project.*/
  API_TARGET_BLOCKED = 122,

  /*The consumer's API key is invalid.*/
  API_KEY_INVALID = 105,

  /*The consumer's API Key has expired.*/
  API_KEY_EXPIRED = 112,

  /*The consumer's API Key was not found in config record.*/
  API_KEY_NOT_FOUND = 113,

  /*The credential in the request can not be verified.*/
  INVALID_CREDENTIAL = 123,

  /*The backend server for looking up project id/number is unavailable.*/
  NAMESPACE_LOOKUP_UNAVAILABLE = 300,

  /*The backend server for checking service status is unavailable.*/
  SERVICE_STATUS_UNAVAILABLE = 301,

  /*The backend server for checking billing status is unavailable.*/
  BILLING_STATUS_UNAVAILABLE = 302,

  /*Cloud Resource Manager backend server is unavailable.*/
  CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE = 305,
  UNRECOGNIZED = -1,
}
export function checkErrorCodeFromJSON(object: any): CheckError_Code {
  switch (object) {
    case "ERROR_CODE_UNSPECIFIED":
      return CheckError_Code.ERROR_CODE_UNSPECIFIED;

    case "NOT_FOUND":
      return CheckError_Code.NOT_FOUND;

    case "PERMISSION_DENIED":
      return CheckError_Code.PERMISSION_DENIED;

    case "RESOURCE_EXHAUSTED":
      return CheckError_Code.RESOURCE_EXHAUSTED;

    case "SERVICE_NOT_ACTIVATED":
      return CheckError_Code.SERVICE_NOT_ACTIVATED;

    case "BILLING_DISABLED":
      return CheckError_Code.BILLING_DISABLED;

    case "PROJECT_DELETED":
      return CheckError_Code.PROJECT_DELETED;

    case "PROJECT_INVALID":
      return CheckError_Code.PROJECT_INVALID;

    case "CONSUMER_INVALID":
      return CheckError_Code.CONSUMER_INVALID;

    case "IP_ADDRESS_BLOCKED":
      return CheckError_Code.IP_ADDRESS_BLOCKED;

    case "REFERER_BLOCKED":
      return CheckError_Code.REFERER_BLOCKED;

    case "CLIENT_APP_BLOCKED":
      return CheckError_Code.CLIENT_APP_BLOCKED;

    case "API_TARGET_BLOCKED":
      return CheckError_Code.API_TARGET_BLOCKED;

    case "API_KEY_INVALID":
      return CheckError_Code.API_KEY_INVALID;

    case "API_KEY_EXPIRED":
      return CheckError_Code.API_KEY_EXPIRED;

    case "API_KEY_NOT_FOUND":
      return CheckError_Code.API_KEY_NOT_FOUND;

    case "INVALID_CREDENTIAL":
      return CheckError_Code.INVALID_CREDENTIAL;

    case "NAMESPACE_LOOKUP_UNAVAILABLE":
      return CheckError_Code.NAMESPACE_LOOKUP_UNAVAILABLE;

    case "SERVICE_STATUS_UNAVAILABLE":
      return CheckError_Code.SERVICE_STATUS_UNAVAILABLE;

    case "BILLING_STATUS_UNAVAILABLE":
      return CheckError_Code.BILLING_STATUS_UNAVAILABLE;

    case "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE":
      return CheckError_Code.CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckError_Code.UNRECOGNIZED;
  }
}
export function checkErrorCodeToJSON(object: CheckError_Code): string {
  switch (object) {
    case CheckError_Code.ERROR_CODE_UNSPECIFIED:
      return "ERROR_CODE_UNSPECIFIED";

    case CheckError_Code.NOT_FOUND:
      return "NOT_FOUND";

    case CheckError_Code.PERMISSION_DENIED:
      return "PERMISSION_DENIED";

    case CheckError_Code.RESOURCE_EXHAUSTED:
      return "RESOURCE_EXHAUSTED";

    case CheckError_Code.SERVICE_NOT_ACTIVATED:
      return "SERVICE_NOT_ACTIVATED";

    case CheckError_Code.BILLING_DISABLED:
      return "BILLING_DISABLED";

    case CheckError_Code.PROJECT_DELETED:
      return "PROJECT_DELETED";

    case CheckError_Code.PROJECT_INVALID:
      return "PROJECT_INVALID";

    case CheckError_Code.CONSUMER_INVALID:
      return "CONSUMER_INVALID";

    case CheckError_Code.IP_ADDRESS_BLOCKED:
      return "IP_ADDRESS_BLOCKED";

    case CheckError_Code.REFERER_BLOCKED:
      return "REFERER_BLOCKED";

    case CheckError_Code.CLIENT_APP_BLOCKED:
      return "CLIENT_APP_BLOCKED";

    case CheckError_Code.API_TARGET_BLOCKED:
      return "API_TARGET_BLOCKED";

    case CheckError_Code.API_KEY_INVALID:
      return "API_KEY_INVALID";

    case CheckError_Code.API_KEY_EXPIRED:
      return "API_KEY_EXPIRED";

    case CheckError_Code.API_KEY_NOT_FOUND:
      return "API_KEY_NOT_FOUND";

    case CheckError_Code.INVALID_CREDENTIAL:
      return "INVALID_CREDENTIAL";

    case CheckError_Code.NAMESPACE_LOOKUP_UNAVAILABLE:
      return "NAMESPACE_LOOKUP_UNAVAILABLE";

    case CheckError_Code.SERVICE_STATUS_UNAVAILABLE:
      return "SERVICE_STATUS_UNAVAILABLE";

    case CheckError_Code.BILLING_STATUS_UNAVAILABLE:
      return "BILLING_STATUS_UNAVAILABLE";

    case CheckError_Code.CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE:
      return "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE";

    default:
      return "UNKNOWN";
  }
}