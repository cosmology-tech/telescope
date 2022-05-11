import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";
export interface Authentication {
  rules: AuthenticationRule[];
  providers: AuthProvider[];
}

function createBaseAuthentication(): Authentication {
  return {
    rules: [],
    providers: []
  };
}

export const Authentication = {
  encode(message: Authentication, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      AuthenticationRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Authentication {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthentication();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 3:
          message.rules.push(AuthenticationRule.decode(reader, reader.uint32()));
          break;

        case 4:
          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Authentication {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => AuthenticationRule.fromJSON(e)) : [],
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => AuthProvider.fromJSON(e)) : []
    };
  },

  toJSON(message: Authentication): unknown {
    const obj: any = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? AuthenticationRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    if (message.providers) {
      obj.providers = message.providers.map(e => e ? AuthProvider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Authentication>, I>>(object: I): Authentication {
    const message = createBaseAuthentication();
    message.rules = object.rules?.map(e => AuthenticationRule.fromPartial(e)) || [];
    message.providers = object.providers?.map(e => AuthProvider.fromPartial(e)) || [];
    return message;
  }

};
export interface AuthenticationRule {
  selector: string;
  oauth: OAuthRequirements;
  allowWithoutCredential: boolean;
  requirements: AuthRequirement[];
}

function createBaseAuthenticationRule(): AuthenticationRule {
  return {
    selector: "",
    oauth: undefined,
    allowWithoutCredential: false,
    requirements: []
  };
}

export const AuthenticationRule = {
  encode(message: AuthenticationRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    if (message.oauth !== undefined) {
      OAuthRequirements.encode(message.oauth, writer.uint32(18).fork()).ldelim();
    }

    if (message.allowWithoutCredential === true) {
      writer.uint32(40).bool(message.allowWithoutCredential);
    }

    for (const v of message.requirements) {
      AuthRequirement.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.oauth = OAuthRequirements.decode(reader, reader.uint32());
          break;

        case 5:
          message.allowWithoutCredential = reader.bool();
          break;

        case 7:
          message.requirements.push(AuthRequirement.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AuthenticationRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      oauth: isSet(object.oauth) ? OAuthRequirements.fromJSON(object.oauth) : undefined,
      allowWithoutCredential: isSet(object.allowWithoutCredential) ? Boolean(object.allowWithoutCredential) : false,
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => AuthRequirement.fromJSON(e)) : []
    };
  },

  toJSON(message: AuthenticationRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.oauth !== undefined && (obj.oauth = message.oauth ? OAuthRequirements.toJSON(message.oauth) : undefined);
    message.allowWithoutCredential !== undefined && (obj.allowWithoutCredential = message.allowWithoutCredential);

    if (message.requirements) {
      obj.requirements = message.requirements.map(e => e ? AuthRequirement.toJSON(e) : undefined);
    } else {
      obj.requirements = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthenticationRule>, I>>(object: I): AuthenticationRule {
    const message = createBaseAuthenticationRule();
    message.selector = object.selector ?? "";
    message.oauth = object.oauth !== undefined && object.oauth !== null ? OAuthRequirements.fromPartial(object.oauth) : undefined;
    message.allowWithoutCredential = object.allowWithoutCredential ?? false;
    message.requirements = object.requirements?.map(e => AuthRequirement.fromPartial(e)) || [];
    return message;
  }

};
export interface JwtLocation {
  header?: string;
  query?: string;
  valuePrefix: string;
}

function createBaseJwtLocation(): JwtLocation {
  return {
    header: undefined,
    query: undefined,
    valuePrefix: ""
  };
}

export const JwtLocation = {
  encode(message: JwtLocation, writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      writer.uint32(10).string(message.header);
    }

    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }

    if (message.valuePrefix !== "") {
      writer.uint32(26).string(message.valuePrefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JwtLocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwtLocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = reader.string();
          break;

        case 2:
          message.query = reader.string();
          break;

        case 3:
          message.valuePrefix = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): JwtLocation {
    return {
      header: isSet(object.header) ? String(object.header) : undefined,
      query: isSet(object.query) ? String(object.query) : undefined,
      valuePrefix: isSet(object.valuePrefix) ? String(object.valuePrefix) : ""
    };
  },

  toJSON(message: JwtLocation): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header);
    message.query !== undefined && (obj.query = message.query);
    message.valuePrefix !== undefined && (obj.valuePrefix = message.valuePrefix);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JwtLocation>, I>>(object: I): JwtLocation {
    const message = createBaseJwtLocation();
    message.header = object.header ?? undefined;
    message.query = object.query ?? undefined;
    message.valuePrefix = object.valuePrefix ?? "";
    return message;
  }

};
export interface AuthProvider {
  id: string;
  issuer: string;
  jwksUri: string;
  audiences: string;
  authorizationUrl: string;
  jwtLocations: JwtLocation[];
}

function createBaseAuthProvider(): AuthProvider {
  return {
    id: "",
    issuer: "",
    jwksUri: "",
    audiences: "",
    authorizationUrl: "",
    jwtLocations: []
  };
}

export const AuthProvider = {
  encode(message: AuthProvider, writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }

    if (message.jwksUri !== "") {
      writer.uint32(26).string(message.jwksUri);
    }

    if (message.audiences !== "") {
      writer.uint32(34).string(message.audiences);
    }

    if (message.authorizationUrl !== "") {
      writer.uint32(42).string(message.authorizationUrl);
    }

    for (const v of message.jwtLocations) {
      JwtLocation.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthProvider();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.issuer = reader.string();
          break;

        case 3:
          message.jwksUri = reader.string();
          break;

        case 4:
          message.audiences = reader.string();
          break;

        case 5:
          message.authorizationUrl = reader.string();
          break;

        case 6:
          message.jwtLocations.push(JwtLocation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AuthProvider {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      jwksUri: isSet(object.jwksUri) ? String(object.jwksUri) : "",
      audiences: isSet(object.audiences) ? String(object.audiences) : "",
      authorizationUrl: isSet(object.authorizationUrl) ? String(object.authorizationUrl) : "",
      jwtLocations: Array.isArray(object?.jwtLocations) ? object.jwtLocations.map((e: any) => JwtLocation.fromJSON(e)) : []
    };
  },

  toJSON(message: AuthProvider): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.jwksUri !== undefined && (obj.jwksUri = message.jwksUri);
    message.audiences !== undefined && (obj.audiences = message.audiences);
    message.authorizationUrl !== undefined && (obj.authorizationUrl = message.authorizationUrl);

    if (message.jwtLocations) {
      obj.jwtLocations = message.jwtLocations.map(e => e ? JwtLocation.toJSON(e) : undefined);
    } else {
      obj.jwtLocations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthProvider>, I>>(object: I): AuthProvider {
    const message = createBaseAuthProvider();
    message.id = object.id ?? "";
    message.issuer = object.issuer ?? "";
    message.jwksUri = object.jwksUri ?? "";
    message.audiences = object.audiences ?? "";
    message.authorizationUrl = object.authorizationUrl ?? "";
    message.jwtLocations = object.jwtLocations?.map(e => JwtLocation.fromPartial(e)) || [];
    return message;
  }

};
export interface OAuthRequirements {
  canonicalScopes: string;
}

function createBaseOAuthRequirements(): OAuthRequirements {
  return {
    canonicalScopes: ""
  };
}

export const OAuthRequirements = {
  encode(message: OAuthRequirements, writer = _m0.Writer.create()): _m0.Writer {
    if (message.canonicalScopes !== "") {
      writer.uint32(10).string(message.canonicalScopes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OAuthRequirements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOAuthRequirements();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.canonicalScopes = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OAuthRequirements {
    return {
      canonicalScopes: isSet(object.canonicalScopes) ? String(object.canonicalScopes) : ""
    };
  },

  toJSON(message: OAuthRequirements): unknown {
    const obj: any = {};
    message.canonicalScopes !== undefined && (obj.canonicalScopes = message.canonicalScopes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OAuthRequirements>, I>>(object: I): OAuthRequirements {
    const message = createBaseOAuthRequirements();
    message.canonicalScopes = object.canonicalScopes ?? "";
    return message;
  }

};
export interface AuthRequirement {
  providerId: string;
  audiences: string;
}

function createBaseAuthRequirement(): AuthRequirement {
  return {
    providerId: "",
    audiences: ""
  };
}

export const AuthRequirement = {
  encode(message: AuthRequirement, writer = _m0.Writer.create()): _m0.Writer {
    if (message.providerId !== "") {
      writer.uint32(10).string(message.providerId);
    }

    if (message.audiences !== "") {
      writer.uint32(18).string(message.audiences);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequirement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRequirement();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.providerId = reader.string();
          break;

        case 2:
          message.audiences = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AuthRequirement {
    return {
      providerId: isSet(object.providerId) ? String(object.providerId) : "",
      audiences: isSet(object.audiences) ? String(object.audiences) : ""
    };
  },

  toJSON(message: AuthRequirement): unknown {
    const obj: any = {};
    message.providerId !== undefined && (obj.providerId = message.providerId);
    message.audiences !== undefined && (obj.audiences = message.audiences);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthRequirement>, I>>(object: I): AuthRequirement {
    const message = createBaseAuthRequirement();
    message.providerId = object.providerId ?? "";
    message.audiences = object.audiences ?? "";
    return message;
  }

};