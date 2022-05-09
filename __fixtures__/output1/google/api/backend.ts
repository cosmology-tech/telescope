import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";
export interface Backend {
  rules: BackendRule[];
}

function createBaseBackend(): Backend {
  return {
    rules: []
  };
}

export const Backend = {
  encode(message: Backend, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      BackendRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Backend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rules.push(BackendRule.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Backend {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => BackendRule.fromJSON(e)) : []
    };
  },

  toJSON(message: Backend): unknown {
    const obj: any = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? BackendRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Backend>, I>>(object: I): Backend {
    const message = createBaseBackend();
    message.rules = object.rules?.map(e => BackendRule.fromPartial(e)) || [];
    return message;
  }

};
export interface BackendRule {
  selector: string;
  address: string;
  deadline: number;
  minDeadline: number;
  operationDeadline: number;
  pathTranslation: BackendRule_PathTranslation;
  jwtAudience?: string;
  disableAuth?: boolean;
  protocol: string;
}

function createBaseBackendRule(): BackendRule {
  return {
    selector: "",
    address: "",
    deadline: 0,
    minDeadline: 0,
    operationDeadline: 0,
    pathTranslation: undefined,
    jwtAudience: "",
    disableAuth: false,
    protocol: ""
  };
}

export const BackendRule = {
  encode(message: BackendRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.deadline !== 0) {
      writer.uint32(25).double(message.deadline);
    }

    if (message.minDeadline !== 0) {
      writer.uint32(33).double(message.minDeadline);
    }

    if (message.operationDeadline !== 0) {
      writer.uint32(41).double(message.operationDeadline);
    }

    if (message.pathTranslation !== 0) {
      writer.uint32(48).int32(message.pathTranslation);
    }

    if (message.jwtAudience !== "") {
      writer.uint32(58).string(message.jwtAudience);
    }

    if (message.disableAuth === true) {
      writer.uint32(64).bool(message.disableAuth);
    }

    if (message.protocol !== "") {
      writer.uint32(74).string(message.protocol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BackendRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.deadline = reader.double();
          break;

        case 4:
          message.minDeadline = reader.double();
          break;

        case 5:
          message.operationDeadline = reader.double();
          break;

        case 6:
          message.pathTranslation = (reader.int32() as any);
          break;

        case 7:
          message.jwtAudience = reader.string();
          break;

        case 8:
          message.disableAuth = reader.bool();
          break;

        case 9:
          message.protocol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BackendRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      address: isSet(object.address) ? String(object.address) : "",
      deadline: isSet(object.deadline) ? Number(object.deadline) : 0,
      minDeadline: isSet(object.minDeadline) ? Number(object.minDeadline) : 0,
      operationDeadline: isSet(object.operationDeadline) ? Number(object.operationDeadline) : 0,
      pathTranslation: isSet(object.pathTranslation) ? backendRule_PathTranslationFromJSON(object.pathTranslation) : 0,
      jwtAudience: isSet(object.jwtAudience) ? String(object.jwtAudience) : "",
      disableAuth: isSet(object.disableAuth) ? Boolean(object.disableAuth) : false,
      protocol: isSet(object.protocol) ? String(object.protocol) : ""
    };
  },

  toJSON(message: BackendRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.address !== undefined && (obj.address = message.address);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    message.minDeadline !== undefined && (obj.minDeadline = message.minDeadline);
    message.operationDeadline !== undefined && (obj.operationDeadline = message.operationDeadline);
    message.pathTranslation !== undefined && (obj.pathTranslation = backendRule_PathTranslationToJSON(message.pathTranslation));
    message.jwtAudience !== undefined && (obj.jwtAudience = message.jwtAudience);
    message.disableAuth !== undefined && (obj.disableAuth = message.disableAuth);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BackendRule>, I>>(object: I): BackendRule {
    const message = createBaseBackendRule();
    message.selector = object.selector ?? "";
    message.address = object.address ?? "";
    message.deadline = object.deadline ?? 0;
    message.minDeadline = object.minDeadline ?? 0;
    message.operationDeadline = object.operationDeadline ?? 0;
    message.pathTranslation = object.pathTranslation ?? 0;
    message.jwtAudience = object.jwtAudience ?? "";
    message.disableAuth = object.disableAuth ?? false;
    message.protocol = object.protocol ?? "";
    return message;
  }

};
export enum BackendRule_PathTranslation {
  PATH_TRANSLATION_UNSPECIFIED = 0,

  /*Use the backend address as-is, with no modification to the path. If the
  URL pattern contains variables, the variable names and values will be
  appended to the query string. If a query string parameter and a URL
  pattern variable have the same name, this may result in duplicate keys in
  the query string.
  
  # Examples
  
  Given the following operation config:
  
  Method path:        /api/company/{cid}/user/{uid}
  Backend address:    https://example.cloudfunctions.net/getUser
  
  Requests to the following request paths will call the backend at the
  translated path:
  
  Request path: /api/company/widgetworks/user/johndoe
  Translated:
  https://example.cloudfunctions.net/getUser?cid=widgetworks&uid=johndoe
  
  Request path: /api/company/widgetworks/user/johndoe?timezone=EST
  Translated:
  https://example.cloudfunctions.net/getUser?timezone=EST&cid=widgetworks&uid=johndoe*/
  CONSTANT_ADDRESS = 1,

  /*The request path will be appended to the backend address.
  
  # Examples
  
  Given the following operation config:
  
  Method path:        /api/company/{cid}/user/{uid}
  Backend address:    https://example.appspot.com
  
  Requests to the following request paths will call the backend at the
  translated path:
  
  Request path: /api/company/widgetworks/user/johndoe
  Translated:
  https://example.appspot.com/api/company/widgetworks/user/johndoe
  
  Request path: /api/company/widgetworks/user/johndoe?timezone=EST
  Translated:
  https://example.appspot.com/api/company/widgetworks/user/johndoe?timezone=EST*/
  APPEND_PATH_TO_ADDRESS = 2,
  UNRECOGNIZED = -1,
}
export function backendRulePathTranslationFromJSON(object: any): BackendRule_PathTranslation {
  switch (object) {
    case "PATH_TRANSLATION_UNSPECIFIED":
      return BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED;

    case "CONSTANT_ADDRESS":
      return BackendRule_PathTranslation.CONSTANT_ADDRESS;

    case "APPEND_PATH_TO_ADDRESS":
      return BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BackendRule_PathTranslation.UNRECOGNIZED;
  }
}
export function backendRulePathTranslationToJSON(object: BackendRule_PathTranslation): string {
  switch (object) {
    case BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED:
      return "PATH_TRANSLATION_UNSPECIFIED";

    case BackendRule_PathTranslation.CONSTANT_ADDRESS:
      return "CONSTANT_ADDRESS";

    case BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS:
      return "APPEND_PATH_TO_ADDRESS";

    default:
      return "UNKNOWN";
  }
}