import { Struct } from "../../protobuf/struct";
import { Timestamp } from "../../protobuf/timestamp";
import { Duration } from "../../protobuf/duration";
import { Any } from "../../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * This message defines the standard attribute vocabulary for Google APIs.
 * 
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 * 
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 * 
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 * 
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 */
export interface AttributeContext {
  /**
   * The origin of a network activity. In a multi hop network activity,
   * the origin represents the sender of the first hop. For the first hop,
   * the `source` and the `origin` must have the same content.
   */
  origin?: AttributeContext_Peer;
  /**
   * The source of a network activity, such as starting a TCP connection.
   * In a multi hop network activity, the source represents the sender of the
   * last hop.
   */
  source?: AttributeContext_Peer;
  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop.
   */
  destination?: AttributeContext_Peer;
  /** Represents a network request, such as an HTTP request. */
  request?: AttributeContext_Request;
  /** Represents a network response, such as an HTTP response. */
  response?: AttributeContext_Response;
  /**
   * Represents a target resource that is involved with a network activity.
   * If multiple resources are involved with an activity, this must be the
   * primary one.
   */
  resource?: AttributeContext_Resource;
  /** Represents an API operation that is involved to a network activity. */
  api?: AttributeContext_Api;
  /** Supports extensions for advanced use cases, such as logs and metrics. */
  extensions: Any[];
}
export interface AttributeContext_Peer_LabelsEntry {
  key: string;
  value: string;
}
/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface AttributeContext_Peer {
  /** The IP address of the peer. */
  ip: string;
  /** The network port of the peer. */
  port: bigint;
  /** The labels associated with the peer. */
  labels: {
    [key: string]: string;
  };
  /**
   * The identity of this peer. Similar to `Request.auth.principal`, but
   * relative to the peer instead of the request. For example, the
   * idenity associated with a load balancer that forwared the request.
   */
  principal: string;
  /**
   * The CLDR country/region code associated with the above IP address.
   * If the IP address is private, the `region_code` should reflect the
   * physical location where this peer is running.
   */
  regionCode: string;
}
/**
 * This message defines attributes associated with API operations, such as
 * a network API request. The terminology is based on the conventions used
 * by Google APIs, Istio, and OpenAPI.
 */
export interface AttributeContext_Api {
  /**
   * The API service name. It is a logical identifier for a networked API,
   * such as "pubsub.googleapis.com". The naming syntax depends on the
   * API management system being used for handling the request.
   */
  service: string;
  /**
   * The API operation name. For gRPC requests, it is the fully qualified API
   * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
   * requests, it is the `operationId`, such as "getPet".
   */
  operation: string;
  /**
   * The API protocol used for sending the request, such as "http", "https",
   * "grpc", or "internal".
   */
  protocol: string;
  /**
   * The API version associated with the API operation above, such as "v1" or
   * "v1alpha1".
   */
  version: string;
}
/**
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 */
export interface AttributeContext_Auth {
  /**
   * The authenticated principal. Reflects the issuer (`iss`) and subject
   * (`sub`) claims within a JWT. The issuer and subject should be `/`
   * delimited, with `/` percent-encoded within the subject fragment. For
   * Google accounts, the principal format is:
   * "https://accounts.google.com/{id}"
   */
  principal: string;
  /**
   * The intended audience(s) for this authentication information. Reflects
   * the audience (`aud`) claim within a JWT. The audience
   * value(s) depends on the `issuer`, but typically include one or more of
   * the following pieces of information:
   * 
   * *  The services intended to receive the credential. For example,
   *    ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"].
   * *  A set of service-based scopes. For example,
   *    ["https://www.googleapis.com/auth/cloud-platform"].
   * *  The client id of an app, such as the Firebase project id for JWTs
   *    from Firebase Auth.
   * 
   * Consult the documentation for the credential issuer to determine the
   * information provided.
   */
  audiences: string[];
  /**
   * The authorized presenter of the credential. Reflects the optional
   * Authorized Presenter (`azp`) claim within a JWT or the
   * OAuth client id. For example, a Google Cloud Platform client id looks
   * as follows: "123456789012.apps.googleusercontent.com".
   */
  presenter: string;
  /**
   * Structured claims presented with the credential. JWTs include
   * `{key: value}` pairs for standard and private claims. The following
   * is a subset of the standard required and optional claims that would
   * typically be presented for a Google-based JWT:
   * 
   *    {'iss': 'accounts.google.com',
   *     'sub': '113289723416554971153',
   *     'aud': ['123456789012', 'pubsub.googleapis.com'],
   *     'azp': '123456789012.apps.googleusercontent.com',
   *     'email': 'jsmith@example.com',
   *     'iat': 1353601026,
   *     'exp': 1353604926}
   * 
   * SAML assertions are similarly specified, but with an identity provider
   * dependent structure.
   */
  claims?: Struct;
  /**
   * A list of access level resource names that allow resources to be
   * accessed by authenticated requester. It is part of Secure GCP processing
   * for the incoming request. An access level string has the format:
   * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
   * 
   * Example:
   * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
   */
  accessLevels: string[];
}
export interface AttributeContext_Request_HeadersEntry {
  key: string;
  value: string;
}
/**
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 */
export interface AttributeContext_Request {
  /**
   * The unique ID for a request, which can be propagated to downstream
   * systems. The ID should have low probability of collision
   * within a single day for a specific service.
   */
  id: string;
  /** The HTTP request method, such as `GET`, `POST`. */
  method: string;
  /**
   * The HTTP request headers. If multiple headers share the same key, they
   * must be merged according to the HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers: {
    [key: string]: string;
  };
  /** The HTTP URL path. */
  path: string;
  /** The HTTP request `Host` header value. */
  host: string;
  /** The HTTP URL scheme, such as `http` and `https`. */
  scheme: string;
  /**
   * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
   * appears in the first line of the HTTP request. No decoding is performed.
   */
  query: string;
  /**
   * The timestamp when the `destination` service receives the last byte of
   * the request.
   */
  time?: Date;
  /** The HTTP request size in bytes. If unknown, it must be -1. */
  size: bigint;
  /**
   * The network protocol used with the request, such as "http/1.1",
   * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for details.
   */
  protocol: string;
  /**
   * A special parameter for request reason. It is used by security systems
   * to associate auditing information with a request.
   */
  reason: string;
  /**
   * The request authentication. May be absent for unauthenticated requests.
   * Derived from the HTTP request `Authorization` header or equivalent.
   */
  auth?: AttributeContext_Auth;
}
export interface AttributeContext_Response_HeadersEntry {
  key: string;
  value: string;
}
/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 */
export interface AttributeContext_Response {
  /** The HTTP response status code, such as `200` and `404`. */
  code: bigint;
  /** The HTTP response size in bytes. If unknown, it must be -1. */
  size: bigint;
  /**
   * The HTTP response headers. If multiple headers share the same key, they
   * must be merged according to HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers: {
    [key: string]: string;
  };
  /**
   * The timestamp when the `destination` service sends the last byte of
   * the response.
   */
  time?: Date;
  /**
   * The length of time it takes the backend service to fully respond to a
   * request. Measured from when the destination service starts to send the
   * request to the backend until when the destination service receives the
   * complete response from the backend.
   */
  backendLatency?: Duration;
}
export interface AttributeContext_Resource_LabelsEntry {
  key: string;
  value: string;
}
export interface AttributeContext_Resource_AnnotationsEntry {
  key: string;
  value: string;
}
/**
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 */
export interface AttributeContext_Resource {
  /**
   * The name of the service that this resource belongs to, such as
   * `pubsub.googleapis.com`. The service may be different from the DNS
   * hostname that actually serves the request.
   */
  service: string;
  /**
   * The stable identifier (name) of a resource on the `service`. A resource
   * can be logically identified as "//{resource.service}/{resource.name}".
   * The differences between a resource name and a URI are:
   * 
   * *   Resource name is a logical identifier, independent of network
   *     protocol and API version. For example,
   *     `//pubsub.googleapis.com/projects/123/topics/news-feed`.
   * *   URI often includes protocol and version information, so it can
   *     be used directly by applications. For example,
   *     `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
   * 
   * See https://cloud.google.com/apis/design/resource_names for details.
   */
  name: string;
  /**
   * The type of the resource. The syntax is platform-specific because
   * different platforms define their resources differently.
   * 
   * For Google APIs, the type format must be "{service}/{kind}".
   */
  type: string;
  /**
   * The labels or tags on the resource, such as AWS resource tags and
   * Kubernetes resource labels.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * The unique identifier of the resource. UID is unique in the time
   * and space for this resource within the scope of the service. It is
   * typically generated by the server on successful creation of a resource
   * and must not be changed. UID is used to uniquely identify resources
   * with resource name reuses. This should be a UUID4.
   */
  uid: string;
  /**
   * Annotations is an unstructured key-value map stored with a resource that
   * may be set by external tools to store and retrieve arbitrary metadata.
   * They are not queryable and should be preserved when modifying objects.
   * 
   * More info: https://kubernetes.io/docs/user-guide/annotations
   */
  annotations: {
    [key: string]: string;
  };
  /** Mutable. The display name set by clients. Must be <= 63 characters. */
  displayName: string;
  /**
   * Output only. The timestamp when the resource was created. This may
   * be either the time creation was initiated or when it was completed.
   */
  createTime?: Date;
  /**
   * Output only. The timestamp when the resource was last updated. Any
   * change to the resource made by users must refresh this value.
   * Changes to a resource made by the service should refresh this value.
   */
  updateTime?: Date;
  /**
   * Output only. The timestamp when the resource was deleted.
   * If the resource is not deleted, this must be empty.
   */
  deleteTime?: Date;
  /**
   * Output only. An opaque value that uniquely identifies a version or
   * generation of a resource. It can be used to confirm that the client
   * and server agree on the ordering of a resource being written.
   */
  etag: string;
  /**
   * Immutable. The location of the resource. The location encoding is
   * specific to the service provider, and new encoding may be introduced
   * as the service evolves.
   * 
   * For Google Cloud products, the encoding is what is used by Google Cloud
   * APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The
   * semantics of `location` is identical to the
   * `cloud.googleapis.com/location` label used by some Google Cloud APIs.
   */
  location: string;
}
function createBaseAttributeContext(): AttributeContext {
  return {
    origin: undefined,
    source: undefined,
    destination: undefined,
    request: undefined,
    response: undefined,
    resource: undefined,
    api: undefined,
    extensions: []
  };
}
export const AttributeContext = {
  typeUrl: "/google.rpc.context.AttributeContext",
  encode(message: AttributeContext, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.origin !== undefined) {
      AttributeContext_Peer.encode(message.origin, writer.uint32(58).fork()).ldelim();
    }
    if (message.source !== undefined) {
      AttributeContext_Peer.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      AttributeContext_Peer.encode(message.destination, writer.uint32(18).fork()).ldelim();
    }
    if (message.request !== undefined) {
      AttributeContext_Request.encode(message.request, writer.uint32(26).fork()).ldelim();
    }
    if (message.response !== undefined) {
      AttributeContext_Response.encode(message.response, writer.uint32(34).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      AttributeContext_Resource.encode(message.resource, writer.uint32(42).fork()).ldelim();
    }
    if (message.api !== undefined) {
      AttributeContext_Api.encode(message.api, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.origin = AttributeContext_Peer.decode(reader, reader.uint32());
          break;
        case 1:
          message.source = AttributeContext_Peer.decode(reader, reader.uint32());
          break;
        case 2:
          message.destination = AttributeContext_Peer.decode(reader, reader.uint32());
          break;
        case 3:
          message.request = AttributeContext_Request.decode(reader, reader.uint32());
          break;
        case 4:
          message.response = AttributeContext_Response.decode(reader, reader.uint32());
          break;
        case 5:
          message.resource = AttributeContext_Resource.decode(reader, reader.uint32());
          break;
        case 6:
          message.api = AttributeContext_Api.decode(reader, reader.uint32());
          break;
        case 8:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext>): AttributeContext {
    const message = createBaseAttributeContext();
    message.origin = object.origin !== undefined && object.origin !== null ? AttributeContext_Peer.fromPartial(object.origin) : undefined;
    message.source = object.source !== undefined && object.source !== null ? AttributeContext_Peer.fromPartial(object.source) : undefined;
    message.destination = object.destination !== undefined && object.destination !== null ? AttributeContext_Peer.fromPartial(object.destination) : undefined;
    message.request = object.request !== undefined && object.request !== null ? AttributeContext_Request.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? AttributeContext_Response.fromPartial(object.response) : undefined;
    message.resource = object.resource !== undefined && object.resource !== null ? AttributeContext_Resource.fromPartial(object.resource) : undefined;
    message.api = object.api !== undefined && object.api !== null ? AttributeContext_Api.fromPartial(object.api) : undefined;
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAttributeContext_Peer_LabelsEntry(): AttributeContext_Peer_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Peer_LabelsEntry = {
  encode(message: AttributeContext_Peer_LabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Peer_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Peer_LabelsEntry>): AttributeContext_Peer_LabelsEntry {
    const message = createBaseAttributeContext_Peer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseAttributeContext_Peer(): AttributeContext_Peer {
  return {
    ip: "",
    port: BigInt(0),
    labels: {},
    principal: "",
    regionCode: ""
  };
}
export const AttributeContext_Peer = {
  typeUrl: "/google.rpc.context.Peer",
  encode(message: AttributeContext_Peer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== BigInt(0)) {
      writer.uint32(16).int64(message.port);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      AttributeContext_Peer_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.principal !== "") {
      writer.uint32(58).string(message.principal);
    }
    if (message.regionCode !== "") {
      writer.uint32(66).string(message.regionCode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Peer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.port = reader.int64();
          break;
        case 6:
          const entry6 = AttributeContext_Peer_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.principal = reader.string();
          break;
        case 8:
          message.regionCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Peer>): AttributeContext_Peer {
    const message = createBaseAttributeContext_Peer();
    message.ip = object.ip ?? "";
    message.port = object.port !== undefined && object.port !== null ? BigInt(object.port.toString()) : BigInt(0);
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.principal = object.principal ?? "";
    message.regionCode = object.regionCode ?? "";
    return message;
  }
};
function createBaseAttributeContext_Api(): AttributeContext_Api {
  return {
    service: "",
    operation: "",
    protocol: "",
    version: ""
  };
}
export const AttributeContext_Api = {
  typeUrl: "/google.rpc.context.Api",
  encode(message: AttributeContext_Api, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Api {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Api();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.operation = reader.string();
          break;
        case 3:
          message.protocol = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Api>): AttributeContext_Api {
    const message = createBaseAttributeContext_Api();
    message.service = object.service ?? "";
    message.operation = object.operation ?? "";
    message.protocol = object.protocol ?? "";
    message.version = object.version ?? "";
    return message;
  }
};
function createBaseAttributeContext_Auth(): AttributeContext_Auth {
  return {
    principal: "",
    audiences: [],
    presenter: "",
    claims: undefined,
    accessLevels: []
  };
}
export const AttributeContext_Auth = {
  typeUrl: "/google.rpc.context.Auth",
  encode(message: AttributeContext_Auth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    for (const v of message.audiences) {
      writer.uint32(18).string(v!);
    }
    if (message.presenter !== "") {
      writer.uint32(26).string(message.presenter);
    }
    if (message.claims !== undefined) {
      Struct.encode(message.claims, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.accessLevels) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Auth {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Auth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = reader.string();
          break;
        case 2:
          message.audiences.push(reader.string());
          break;
        case 3:
          message.presenter = reader.string();
          break;
        case 4:
          message.claims = Struct.decode(reader, reader.uint32());
          break;
        case 5:
          message.accessLevels.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Auth>): AttributeContext_Auth {
    const message = createBaseAttributeContext_Auth();
    message.principal = object.principal ?? "";
    message.audiences = object.audiences?.map(e => e) || [];
    message.presenter = object.presenter ?? "";
    message.claims = object.claims !== undefined && object.claims !== null ? Struct.fromPartial(object.claims) : undefined;
    message.accessLevels = object.accessLevels?.map(e => e) || [];
    return message;
  }
};
function createBaseAttributeContext_Request_HeadersEntry(): AttributeContext_Request_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Request_HeadersEntry = {
  encode(message: AttributeContext_Request_HeadersEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Request_HeadersEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Request_HeadersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Request_HeadersEntry>): AttributeContext_Request_HeadersEntry {
    const message = createBaseAttributeContext_Request_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseAttributeContext_Request(): AttributeContext_Request {
  return {
    id: "",
    method: "",
    headers: {},
    path: "",
    host: "",
    scheme: "",
    query: "",
    time: undefined,
    size: BigInt(0),
    protocol: "",
    reason: "",
    auth: undefined
  };
}
export const AttributeContext_Request = {
  typeUrl: "/google.rpc.context.Request",
  encode(message: AttributeContext_Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.method !== "") {
      writer.uint32(18).string(message.method);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      AttributeContext_Request_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    if (message.host !== "") {
      writer.uint32(42).string(message.host);
    }
    if (message.scheme !== "") {
      writer.uint32(50).string(message.scheme);
    }
    if (message.query !== "") {
      writer.uint32(58).string(message.query);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(74).fork()).ldelim();
    }
    if (message.size !== BigInt(0)) {
      writer.uint32(80).int64(message.size);
    }
    if (message.protocol !== "") {
      writer.uint32(90).string(message.protocol);
    }
    if (message.reason !== "") {
      writer.uint32(98).string(message.reason);
    }
    if (message.auth !== undefined) {
      AttributeContext_Auth.encode(message.auth, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.method = reader.string();
          break;
        case 3:
          const entry3 = AttributeContext_Request_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.path = reader.string();
          break;
        case 5:
          message.host = reader.string();
          break;
        case 6:
          message.scheme = reader.string();
          break;
        case 7:
          message.query = reader.string();
          break;
        case 9:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.size = reader.int64();
          break;
        case 11:
          message.protocol = reader.string();
          break;
        case 12:
          message.reason = reader.string();
          break;
        case 13:
          message.auth = AttributeContext_Auth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Request>): AttributeContext_Request {
    const message = createBaseAttributeContext_Request();
    message.id = object.id ?? "";
    message.method = object.method ?? "";
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.path = object.path ?? "";
    message.host = object.host ?? "";
    message.scheme = object.scheme ?? "";
    message.query = object.query ?? "";
    message.time = object.time ?? undefined;
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    message.protocol = object.protocol ?? "";
    message.reason = object.reason ?? "";
    message.auth = object.auth !== undefined && object.auth !== null ? AttributeContext_Auth.fromPartial(object.auth) : undefined;
    return message;
  }
};
function createBaseAttributeContext_Response_HeadersEntry(): AttributeContext_Response_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Response_HeadersEntry = {
  encode(message: AttributeContext_Response_HeadersEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Response_HeadersEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Response_HeadersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Response_HeadersEntry>): AttributeContext_Response_HeadersEntry {
    const message = createBaseAttributeContext_Response_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseAttributeContext_Response(): AttributeContext_Response {
  return {
    code: BigInt(0),
    size: BigInt(0),
    headers: {},
    time: undefined,
    backendLatency: undefined
  };
}
export const AttributeContext_Response = {
  typeUrl: "/google.rpc.context.Response",
  encode(message: AttributeContext_Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== BigInt(0)) {
      writer.uint32(8).int64(message.code);
    }
    if (message.size !== BigInt(0)) {
      writer.uint32(16).int64(message.size);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      AttributeContext_Response_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.backendLatency !== undefined) {
      Duration.encode(message.backendLatency, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int64();
          break;
        case 2:
          message.size = reader.int64();
          break;
        case 3:
          const entry3 = AttributeContext_Response_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.backendLatency = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Response>): AttributeContext_Response {
    const message = createBaseAttributeContext_Response();
    message.code = object.code !== undefined && object.code !== null ? BigInt(object.code.toString()) : BigInt(0);
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.time = object.time ?? undefined;
    message.backendLatency = object.backendLatency !== undefined && object.backendLatency !== null ? Duration.fromPartial(object.backendLatency) : undefined;
    return message;
  }
};
function createBaseAttributeContext_Resource_LabelsEntry(): AttributeContext_Resource_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Resource_LabelsEntry = {
  encode(message: AttributeContext_Resource_LabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Resource_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Resource_LabelsEntry>): AttributeContext_Resource_LabelsEntry {
    const message = createBaseAttributeContext_Resource_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseAttributeContext_Resource_AnnotationsEntry(): AttributeContext_Resource_AnnotationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AttributeContext_Resource_AnnotationsEntry = {
  encode(message: AttributeContext_Resource_AnnotationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Resource_AnnotationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource_AnnotationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Resource_AnnotationsEntry>): AttributeContext_Resource_AnnotationsEntry {
    const message = createBaseAttributeContext_Resource_AnnotationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseAttributeContext_Resource(): AttributeContext_Resource {
  return {
    service: "",
    name: "",
    type: "",
    labels: {},
    uid: "",
    annotations: {},
    displayName: "",
    createTime: undefined,
    updateTime: undefined,
    deleteTime: undefined,
    etag: "",
    location: ""
  };
}
export const AttributeContext_Resource = {
  typeUrl: "/google.rpc.context.Resource",
  encode(message: AttributeContext_Resource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      AttributeContext_Resource_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(34).fork()).ldelim();
    });
    if (message.uid !== "") {
      writer.uint32(42).string(message.uid);
    }
    Object.entries(message.annotations).forEach(([key, value]) => {
      AttributeContext_Resource_AnnotationsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    if (message.displayName !== "") {
      writer.uint32(58).string(message.displayName);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.deleteTime !== undefined) {
      Timestamp.encode(toTimestamp(message.deleteTime), writer.uint32(82).fork()).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(90).string(message.etag);
    }
    if (message.location !== "") {
      writer.uint32(98).string(message.location);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributeContext_Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          const entry4 = AttributeContext_Resource_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.uid = reader.string();
          break;
        case 6:
          const entry6 = AttributeContext_Resource_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.annotations[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.displayName = reader.string();
          break;
        case 8:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.deleteTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.etag = reader.string();
          break;
        case 12:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AttributeContext_Resource>): AttributeContext_Resource {
    const message = createBaseAttributeContext_Resource();
    message.service = object.service ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.uid = object.uid ?? "";
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.displayName = object.displayName ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.deleteTime = object.deleteTime ?? undefined;
    message.etag = object.etag ?? "";
    message.location = object.location ?? "";
    return message;
  }
};