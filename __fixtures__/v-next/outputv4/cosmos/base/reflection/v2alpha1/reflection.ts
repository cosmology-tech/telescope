import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "cosmos.base.reflection.v2alpha1";

/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
  /**
   * AuthnDescriptor provides information on how to authenticate transactions on the application
   * NOTE: experimental and subject to change in future releases.
   */
  authn?: AuthnDescriptor;

  /** chain provides the chain descriptor */
  chain?: ChainDescriptor;

  /** codec provides metadata information regarding codec related types */
  codec?: CodecDescriptor;

  /** configuration provides metadata information regarding the sdk.Config type */
  configuration?: ConfigurationDescriptor;

  /** query_services provides metadata information regarding the available queriable endpoints */
  queryServices?: QueryServicesDescriptor;

  /** tx provides metadata information regarding how to send transactions to the given application */
  tx?: TxDescriptor;
}

/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptorSDKType {
  authn?: AuthnDescriptorSDKType;
  chain?: ChainDescriptorSDKType;
  codec?: CodecDescriptorSDKType;
  configuration?: ConfigurationDescriptorSDKType;
  query_services?: QueryServicesDescriptorSDKType;
  tx?: TxDescriptorSDKType;
}

/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
  /**
   * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
   * it is not meant to support polymorphism of transaction types, it is supposed to be used by
   * reflection clients to understand if they can handle a specific transaction type in an application.
   */
  fullname: string;

  /** msgs lists the accepted application messages (sdk.Msg) */
  msgs: MsgDescriptor[];
}

/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptorSDKType {
  fullname: string;
  msgs: MsgDescriptorSDKType[];
}

/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
  /** sign_modes defines the supported signature algorithm */
  signModes: SigningModeDescriptor[];
}

/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptorSDKType {
  sign_modes: SigningModeDescriptorSDKType[];
}

/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
  /** name defines the unique name of the signing mode */
  name: string;

  /** number is the unique int32 identifier for the sign_mode enum */
  number: number;

  /**
   * authn_info_provider_method_fullname defines the fullname of the method to call to get
   * the metadata required to authenticate using the provided sign_modes
   */
  authnInfoProviderMethodFullname: string;
}

/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptorSDKType {
  name: string;
  number: number;
  authn_info_provider_method_fullname: string;
}

/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
  /** id is the chain id */
  id: string;
}

/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptorSDKType {
  id: string;
}

/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
  /** interfaces is a list of the registerted interfaces descriptors */
  interfaces: InterfaceDescriptor[];
}

/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptorSDKType {
  interfaces: InterfaceDescriptorSDKType[];
}

/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
  /** fullname is the name of the interface */
  fullname: string;

  /**
   * interface_accepting_messages contains information regarding the proto messages which contain the interface as
   * google.protobuf.Any field
   */
  interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];

  /** interface_implementers is a list of the descriptors of the interface implementers */
  interfaceImplementers: InterfaceImplementerDescriptor[];
}

/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptorSDKType {
  fullname: string;
  interface_accepting_messages: InterfaceAcceptingMessageDescriptorSDKType[];
  interface_implementers: InterfaceImplementerDescriptorSDKType[];
}

/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
  /** fullname is the protobuf queryable name of the interface implementer */
  fullname: string;

  /**
   * type_url defines the type URL used when marshalling the type as any
   * this is required so we can provide type safe google.protobuf.Any marshalling and
   * unmarshalling, making sure that we don't accept just 'any' type
   * in our interface fields
   */
  typeUrl: string;
}

/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptorSDKType {
  fullname: string;
  type_url: string;
}

/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
  /** fullname is the protobuf fullname of the type containing the interface */
  fullname: string;

  /**
   * field_descriptor_names is a list of the protobuf name (not fullname) of the field
   * which contains the interface as google.protobuf.Any (the interface is the same, but
   * it can be in multiple fields of the same proto message)
   */
  fieldDescriptorNames: string[];
}

/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptorSDKType {
  fullname: string;
  field_descriptor_names: string[];
}

/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
  /** bech32_account_address_prefix is the account address prefix */
  bech32AccountAddressPrefix: string;
}

/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptorSDKType {
  bech32_account_address_prefix: string;
}

/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
  /** msg_type_url contains the TypeURL of a sdk.Msg. */
  msgTypeUrl: string;
}

/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptorSDKType {
  msg_type_url: string;
}

/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {}

/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequestSDKType {}

/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
  /** authn describes how to authenticate to the application when sending transactions */
  authn?: AuthnDescriptor;
}

/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponseSDKType {
  authn?: AuthnDescriptorSDKType;
}

/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {}

/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequestSDKType {}

/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
  /** chain describes application chain information */
  chain?: ChainDescriptor;
}

/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponseSDKType {
  chain?: ChainDescriptorSDKType;
}

/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {}

/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequestSDKType {}

/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
  /** codec describes the application codec such as registered interfaces and implementations */
  codec?: CodecDescriptor;
}

/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponseSDKType {
  codec?: CodecDescriptorSDKType;
}

/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {}

/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequestSDKType {}

/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
  /** config describes the application's sdk.Config */
  config?: ConfigurationDescriptor;
}

/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponseSDKType {
  config?: ConfigurationDescriptorSDKType;
}

/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {}

/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequestSDKType {}

/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
  /** queries provides information on the available queryable services */
  queries?: QueryServicesDescriptor;
}

/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponseSDKType {
  queries?: QueryServicesDescriptorSDKType;
}

/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {}

/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequestSDKType {}

/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
  /**
   * tx provides information on msgs that can be forwarded to the application
   * alongside the accepted transaction protobuf type
   */
  tx?: TxDescriptor;
}

/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponseSDKType {
  tx?: TxDescriptorSDKType;
}

/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
  /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
  queryServices: QueryServiceDescriptor[];
}

/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptorSDKType {
  query_services: QueryServiceDescriptorSDKType[];
}

/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
  /** fullname is the protobuf fullname of the service descriptor */
  fullname: string;

  /** is_module describes if this service is actually exposed by an application's module */
  isModule: boolean;

  /** methods provides a list of query service methods */
  methods: QueryMethodDescriptor[];
}

/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptorSDKType {
  fullname: string;
  is_module: boolean;
  methods: QueryMethodDescriptorSDKType[];
}

/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
  /** name is the protobuf name (not fullname) of the method */
  name: string;

  /**
   * full_query_path is the path that can be used to query
   * this method via tendermint abci.Query
   */
  fullQueryPath: string;
}

/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptorSDKType {
  name: string;
  full_query_path: string;
}

function createBaseAppDescriptor(): AppDescriptor {
  return {
    authn: undefined,
    chain: undefined,
    codec: undefined,
    configuration: undefined,
    queryServices: undefined,
    tx: undefined
  };
}

export const AppDescriptor = {
  encode(message: AppDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }

    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }

    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }

    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }

    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
    }

    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;

        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;

        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;

        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;

        case 5:
          message.queryServices = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;

        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AppDescriptor {
    return {
      authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
      chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
      codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
      configuration: isSet(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
      queryServices: isSet(object.queryServices) ? QueryServicesDescriptor.fromJSON(object.queryServices) : undefined,
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },

  toJSON(message: AppDescriptor): unknown {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    message.configuration !== undefined && (obj.configuration = message.configuration ? ConfigurationDescriptor.toJSON(message.configuration) : undefined);
    message.queryServices !== undefined && (obj.queryServices = message.queryServices ? QueryServicesDescriptor.toJSON(message.queryServices) : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AppDescriptor>): AppDescriptor {
    const message = createBaseAppDescriptor();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
    message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  },

  fromSDK(object: AppDescriptorSDKType): AppDescriptor {
    return {
      authn: object.authn ? AuthnDescriptor.fromSDK(object.authn) : undefined,
      chain: object.chain ? ChainDescriptor.fromSDK(object.chain) : undefined,
      codec: object.codec ? CodecDescriptor.fromSDK(object.codec) : undefined,
      configuration: object.configuration ? ConfigurationDescriptor.fromSDK(object.configuration) : undefined,
      queryServices: object.query_services ? QueryServicesDescriptor.fromSDK(object.query_services) : undefined,
      tx: object.tx ? TxDescriptor.fromSDK(object.tx) : undefined
    };
  },

  toSDK(message: AppDescriptor): AppDescriptorSDKType {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toSDK(message.authn) : undefined);
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toSDK(message.chain) : undefined);
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toSDK(message.codec) : undefined);
    message.configuration !== undefined && (obj.configuration = message.configuration ? ConfigurationDescriptor.toSDK(message.configuration) : undefined);
    message.queryServices !== undefined && (obj.query_services = message.queryServices ? QueryServicesDescriptor.toSDK(message.queryServices) : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toSDK(message.tx) : undefined);
    return obj;
  }

};

function createBaseTxDescriptor(): TxDescriptor {
  return {
    fullname: "",
    msgs: []
  };
}

export const TxDescriptor = {
  encode(message: TxDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    for (const v of message.msgs) {
      MsgDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: TxDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);

    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<TxDescriptor>): TxDescriptor {
    const message = createBaseTxDescriptor();
    message.fullname = object.fullname ?? "";
    message.msgs = object.msgs?.map(e => MsgDescriptor.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: TxDescriptorSDKType): TxDescriptor {
    return {
      fullname: object?.fullname,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgDescriptor.fromSDK(e)) : []
    };
  },

  toSDK(message: TxDescriptor): TxDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;

    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toSDK(e) : undefined);
    } else {
      obj.msgs = [];
    }

    return obj;
  }

};

function createBaseAuthnDescriptor(): AuthnDescriptor {
  return {
    signModes: []
  };
}

export const AuthnDescriptor = {
  encode(message: AuthnDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthnDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthnDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signModes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AuthnDescriptor {
    return {
      signModes: Array.isArray(object?.signModes) ? object.signModes.map((e: any) => SigningModeDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: AuthnDescriptor): unknown {
    const obj: any = {};

    if (message.signModes) {
      obj.signModes = message.signModes.map(e => e ? SigningModeDescriptor.toJSON(e) : undefined);
    } else {
      obj.signModes = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AuthnDescriptor>): AuthnDescriptor {
    const message = createBaseAuthnDescriptor();
    message.signModes = object.signModes?.map(e => SigningModeDescriptor.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: AuthnDescriptorSDKType): AuthnDescriptor {
    return {
      signModes: Array.isArray(object?.sign_modes) ? object.sign_modes.map((e: any) => SigningModeDescriptor.fromSDK(e)) : []
    };
  },

  toSDK(message: AuthnDescriptor): AuthnDescriptorSDKType {
    const obj: any = {};

    if (message.signModes) {
      obj.sign_modes = message.signModes.map(e => e ? SigningModeDescriptor.toSDK(e) : undefined);
    } else {
      obj.sign_modes = [];
    }

    return obj;
  }

};

function createBaseSigningModeDescriptor(): SigningModeDescriptor {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: ""
  };
}

export const SigningModeDescriptor = {
  encode(message: SigningModeDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }

    if (message.authnInfoProviderMethodFullname !== "") {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningModeDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningModeDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.number = reader.int32();
          break;

        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SigningModeDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      authnInfoProviderMethodFullname: isSet(object.authnInfoProviderMethodFullname) ? String(object.authnInfoProviderMethodFullname) : ""
    };
  },

  toJSON(message: SigningModeDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.authnInfoProviderMethodFullname !== undefined && (obj.authnInfoProviderMethodFullname = message.authnInfoProviderMethodFullname);
    return obj;
  },

  fromPartial(object: DeepPartial<SigningModeDescriptor>): SigningModeDescriptor {
    const message = createBaseSigningModeDescriptor();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname ?? "";
    return message;
  },

  fromSDK(object: SigningModeDescriptorSDKType): SigningModeDescriptor {
    return {
      name: object?.name,
      number: object?.number,
      authnInfoProviderMethodFullname: object?.authn_info_provider_method_fullname
    };
  },

  toSDK(message: SigningModeDescriptor): SigningModeDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
    return obj;
  }

};

function createBaseChainDescriptor(): ChainDescriptor {
  return {
    id: ""
  };
}

export const ChainDescriptor = {
  encode(message: ChainDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainDescriptor {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: ChainDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainDescriptor>): ChainDescriptor {
    const message = createBaseChainDescriptor();
    message.id = object.id ?? "";
    return message;
  },

  fromSDK(object: ChainDescriptorSDKType): ChainDescriptor {
    return {
      id: object?.id
    };
  },

  toSDK(message: ChainDescriptor): ChainDescriptorSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  }

};

function createBaseCodecDescriptor(): CodecDescriptor {
  return {
    interfaces: []
  };
}

export const CodecDescriptor = {
  encode(message: CodecDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodecDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodecDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodecDescriptor {
    return {
      interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => InterfaceDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: CodecDescriptor): unknown {
    const obj: any = {};

    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toJSON(e) : undefined);
    } else {
      obj.interfaces = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<CodecDescriptor>): CodecDescriptor {
    const message = createBaseCodecDescriptor();
    message.interfaces = object.interfaces?.map(e => InterfaceDescriptor.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: CodecDescriptorSDKType): CodecDescriptor {
    return {
      interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => InterfaceDescriptor.fromSDK(e)) : []
    };
  },

  toSDK(message: CodecDescriptor): CodecDescriptorSDKType {
    const obj: any = {};

    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toSDK(e) : undefined);
    } else {
      obj.interfaces = [];
    }

    return obj;
  }

};

function createBaseInterfaceDescriptor(): InterfaceDescriptor {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: []
  };
}

export const InterfaceDescriptor = {
  encode(message: InterfaceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.interfaceImplementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterfaceDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      interfaceAcceptingMessages: Array.isArray(object?.interfaceAcceptingMessages) ? object.interfaceAcceptingMessages.map((e: any) => InterfaceAcceptingMessageDescriptor.fromJSON(e)) : [],
      interfaceImplementers: Array.isArray(object?.interfaceImplementers) ? object.interfaceImplementers.map((e: any) => InterfaceImplementerDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: InterfaceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);

    if (message.interfaceAcceptingMessages) {
      obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map(e => e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined);
    } else {
      obj.interfaceAcceptingMessages = [];
    }

    if (message.interfaceImplementers) {
      obj.interfaceImplementers = message.interfaceImplementers.map(e => e ? InterfaceImplementerDescriptor.toJSON(e) : undefined);
    } else {
      obj.interfaceImplementers = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<InterfaceDescriptor>): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    message.fullname = object.fullname ?? "";
    message.interfaceAcceptingMessages = object.interfaceAcceptingMessages?.map(e => InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
    message.interfaceImplementers = object.interfaceImplementers?.map(e => InterfaceImplementerDescriptor.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: InterfaceDescriptorSDKType): InterfaceDescriptor {
    return {
      fullname: object?.fullname,
      interfaceAcceptingMessages: Array.isArray(object?.interface_accepting_messages) ? object.interface_accepting_messages.map((e: any) => InterfaceAcceptingMessageDescriptor.fromSDK(e)) : [],
      interfaceImplementers: Array.isArray(object?.interface_implementers) ? object.interface_implementers.map((e: any) => InterfaceImplementerDescriptor.fromSDK(e)) : []
    };
  },

  toSDK(message: InterfaceDescriptor): InterfaceDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;

    if (message.interfaceAcceptingMessages) {
      obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? InterfaceAcceptingMessageDescriptor.toSDK(e) : undefined);
    } else {
      obj.interface_accepting_messages = [];
    }

    if (message.interfaceImplementers) {
      obj.interface_implementers = message.interfaceImplementers.map(e => e ? InterfaceImplementerDescriptor.toSDK(e) : undefined);
    } else {
      obj.interface_implementers = [];
    }

    return obj;
  }

};

function createBaseInterfaceImplementerDescriptor(): InterfaceImplementerDescriptor {
  return {
    fullname: "",
    typeUrl: ""
  };
}

export const InterfaceImplementerDescriptor = {
  encode(message: InterfaceImplementerDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceImplementerDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceImplementerDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.typeUrl = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterfaceImplementerDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : ""
    };
  },

  toJSON(message: InterfaceImplementerDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<InterfaceImplementerDescriptor>): InterfaceImplementerDescriptor {
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = object.fullname ?? "";
    message.typeUrl = object.typeUrl ?? "";
    return message;
  },

  fromSDK(object: InterfaceImplementerDescriptorSDKType): InterfaceImplementerDescriptor {
    return {
      fullname: object?.fullname,
      typeUrl: object?.type_url
    };
  },

  toSDK(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;
    obj.type_url = message.typeUrl;
    return obj;
  }

};

function createBaseInterfaceAcceptingMessageDescriptor(): InterfaceAcceptingMessageDescriptor {
  return {
    fullname: "",
    fieldDescriptorNames: []
  };
}

export const InterfaceAcceptingMessageDescriptor = {
  encode(message: InterfaceAcceptingMessageDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceAcceptingMessageDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.fieldDescriptorNames.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InterfaceAcceptingMessageDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      fieldDescriptorNames: Array.isArray(object?.fieldDescriptorNames) ? object.fieldDescriptorNames.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: InterfaceAcceptingMessageDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);

    if (message.fieldDescriptorNames) {
      obj.fieldDescriptorNames = message.fieldDescriptorNames.map(e => e);
    } else {
      obj.fieldDescriptorNames = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<InterfaceAcceptingMessageDescriptor>): InterfaceAcceptingMessageDescriptor {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = object.fullname ?? "";
    message.fieldDescriptorNames = object.fieldDescriptorNames?.map(e => e) || [];
    return message;
  },

  fromSDK(object: InterfaceAcceptingMessageDescriptorSDKType): InterfaceAcceptingMessageDescriptor {
    return {
      fullname: object?.fullname,
      fieldDescriptorNames: Array.isArray(object?.field_descriptor_names) ? object.field_descriptor_names.map((e: any) => e) : []
    };
  },

  toSDK(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;

    if (message.fieldDescriptorNames) {
      obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
    } else {
      obj.field_descriptor_names = [];
    }

    return obj;
  }

};

function createBaseConfigurationDescriptor(): ConfigurationDescriptor {
  return {
    bech32AccountAddressPrefix: ""
  };
}

export const ConfigurationDescriptor = {
  encode(message: ConfigurationDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConfigurationDescriptor {
    return {
      bech32AccountAddressPrefix: isSet(object.bech32AccountAddressPrefix) ? String(object.bech32AccountAddressPrefix) : ""
    };
  },

  toJSON(message: ConfigurationDescriptor): unknown {
    const obj: any = {};
    message.bech32AccountAddressPrefix !== undefined && (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
    return obj;
  },

  fromPartial(object: DeepPartial<ConfigurationDescriptor>): ConfigurationDescriptor {
    const message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix ?? "";
    return message;
  },

  fromSDK(object: ConfigurationDescriptorSDKType): ConfigurationDescriptor {
    return {
      bech32AccountAddressPrefix: object?.bech32_account_address_prefix
    };
  },

  toSDK(message: ConfigurationDescriptor): ConfigurationDescriptorSDKType {
    const obj: any = {};
    obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
    return obj;
  }

};

function createBaseMsgDescriptor(): MsgDescriptor {
  return {
    msgTypeUrl: ""
  };
}

export const MsgDescriptor = {
  encode(message: MsgDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDescriptor {
    return {
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
    };
  },

  toJSON(message: MsgDescriptor): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDescriptor>): MsgDescriptor {
    const message = createBaseMsgDescriptor();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },

  fromSDK(object: MsgDescriptorSDKType): MsgDescriptor {
    return {
      msgTypeUrl: object?.msg_type_url
    };
  },

  toSDK(message: MsgDescriptor): MsgDescriptorSDKType {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  }

};

function createBaseGetAuthnDescriptorRequest(): GetAuthnDescriptorRequest {
  return {};
}

export const GetAuthnDescriptorRequest = {
  encode(_: GetAuthnDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorRequest();

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

  fromJSON(_: any): GetAuthnDescriptorRequest {
    return {};
  },

  toJSON(_: GetAuthnDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetAuthnDescriptorRequest>): GetAuthnDescriptorRequest {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },

  fromSDK(_: GetAuthnDescriptorRequestSDKType): GetAuthnDescriptorRequest {
    return {};
  },

  toSDK(_: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseGetAuthnDescriptorResponse(): GetAuthnDescriptorResponse {
  return {
    authn: undefined
  };
}

export const GetAuthnDescriptorResponse = {
  encode(message: GetAuthnDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetAuthnDescriptorResponse {
    return {
      authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined
    };
  },

  toJSON(message: GetAuthnDescriptorResponse): unknown {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAuthnDescriptorResponse>): GetAuthnDescriptorResponse {
    const message = createBaseGetAuthnDescriptorResponse();
    message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
    return message;
  },

  fromSDK(object: GetAuthnDescriptorResponseSDKType): GetAuthnDescriptorResponse {
    return {
      authn: object.authn ? AuthnDescriptor.fromSDK(object.authn) : undefined
    };
  },

  toSDK(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseSDKType {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toSDK(message.authn) : undefined);
    return obj;
  }

};

function createBaseGetChainDescriptorRequest(): GetChainDescriptorRequest {
  return {};
}

export const GetChainDescriptorRequest = {
  encode(_: GetChainDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorRequest();

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

  fromJSON(_: any): GetChainDescriptorRequest {
    return {};
  },

  toJSON(_: GetChainDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetChainDescriptorRequest>): GetChainDescriptorRequest {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },

  fromSDK(_: GetChainDescriptorRequestSDKType): GetChainDescriptorRequest {
    return {};
  },

  toSDK(_: GetChainDescriptorRequest): GetChainDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseGetChainDescriptorResponse(): GetChainDescriptorResponse {
  return {
    chain: undefined
  };
}

export const GetChainDescriptorResponse = {
  encode(message: GetChainDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetChainDescriptorResponse {
    return {
      chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined
    };
  },

  toJSON(message: GetChainDescriptorResponse): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetChainDescriptorResponse>): GetChainDescriptorResponse {
    const message = createBaseGetChainDescriptorResponse();
    message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
    return message;
  },

  fromSDK(object: GetChainDescriptorResponseSDKType): GetChainDescriptorResponse {
    return {
      chain: object.chain ? ChainDescriptor.fromSDK(object.chain) : undefined
    };
  },

  toSDK(message: GetChainDescriptorResponse): GetChainDescriptorResponseSDKType {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toSDK(message.chain) : undefined);
    return obj;
  }

};

function createBaseGetCodecDescriptorRequest(): GetCodecDescriptorRequest {
  return {};
}

export const GetCodecDescriptorRequest = {
  encode(_: GetCodecDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorRequest();

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

  fromJSON(_: any): GetCodecDescriptorRequest {
    return {};
  },

  toJSON(_: GetCodecDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetCodecDescriptorRequest>): GetCodecDescriptorRequest {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },

  fromSDK(_: GetCodecDescriptorRequestSDKType): GetCodecDescriptorRequest {
    return {};
  },

  toSDK(_: GetCodecDescriptorRequest): GetCodecDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseGetCodecDescriptorResponse(): GetCodecDescriptorResponse {
  return {
    codec: undefined
  };
}

export const GetCodecDescriptorResponse = {
  encode(message: GetCodecDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetCodecDescriptorResponse {
    return {
      codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined
    };
  },

  toJSON(message: GetCodecDescriptorResponse): unknown {
    const obj: any = {};
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetCodecDescriptorResponse>): GetCodecDescriptorResponse {
    const message = createBaseGetCodecDescriptorResponse();
    message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
    return message;
  },

  fromSDK(object: GetCodecDescriptorResponseSDKType): GetCodecDescriptorResponse {
    return {
      codec: object.codec ? CodecDescriptor.fromSDK(object.codec) : undefined
    };
  },

  toSDK(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseSDKType {
    const obj: any = {};
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toSDK(message.codec) : undefined);
    return obj;
  }

};

function createBaseGetConfigurationDescriptorRequest(): GetConfigurationDescriptorRequest {
  return {};
}

export const GetConfigurationDescriptorRequest = {
  encode(_: GetConfigurationDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorRequest();

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

  fromJSON(_: any): GetConfigurationDescriptorRequest {
    return {};
  },

  toJSON(_: GetConfigurationDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetConfigurationDescriptorRequest>): GetConfigurationDescriptorRequest {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },

  fromSDK(_: GetConfigurationDescriptorRequestSDKType): GetConfigurationDescriptorRequest {
    return {};
  },

  toSDK(_: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseGetConfigurationDescriptorResponse(): GetConfigurationDescriptorResponse {
  return {
    config: undefined
  };
}

export const GetConfigurationDescriptorResponse = {
  encode(message: GetConfigurationDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetConfigurationDescriptorResponse {
    return {
      config: isSet(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined
    };
  },

  toJSON(message: GetConfigurationDescriptorResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? ConfigurationDescriptor.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetConfigurationDescriptorResponse>): GetConfigurationDescriptorResponse {
    const message = createBaseGetConfigurationDescriptorResponse();
    message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
    return message;
  },

  fromSDK(object: GetConfigurationDescriptorResponseSDKType): GetConfigurationDescriptorResponse {
    return {
      config: object.config ? ConfigurationDescriptor.fromSDK(object.config) : undefined
    };
  },

  toSDK(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseSDKType {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? ConfigurationDescriptor.toSDK(message.config) : undefined);
    return obj;
  }

};

function createBaseGetQueryServicesDescriptorRequest(): GetQueryServicesDescriptorRequest {
  return {};
}

export const GetQueryServicesDescriptorRequest = {
  encode(_: GetQueryServicesDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorRequest();

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

  fromJSON(_: any): GetQueryServicesDescriptorRequest {
    return {};
  },

  toJSON(_: GetQueryServicesDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetQueryServicesDescriptorRequest>): GetQueryServicesDescriptorRequest {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },

  fromSDK(_: GetQueryServicesDescriptorRequestSDKType): GetQueryServicesDescriptorRequest {
    return {};
  },

  toSDK(_: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseGetQueryServicesDescriptorResponse(): GetQueryServicesDescriptorResponse {
  return {
    queries: undefined
  };
}

export const GetQueryServicesDescriptorResponse = {
  encode(message: GetQueryServicesDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetQueryServicesDescriptorResponse {
    return {
      queries: isSet(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined
    };
  },

  toJSON(message: GetQueryServicesDescriptorResponse): unknown {
    const obj: any = {};
    message.queries !== undefined && (obj.queries = message.queries ? QueryServicesDescriptor.toJSON(message.queries) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetQueryServicesDescriptorResponse>): GetQueryServicesDescriptorResponse {
    const message = createBaseGetQueryServicesDescriptorResponse();
    message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
    return message;
  },

  fromSDK(object: GetQueryServicesDescriptorResponseSDKType): GetQueryServicesDescriptorResponse {
    return {
      queries: object.queries ? QueryServicesDescriptor.fromSDK(object.queries) : undefined
    };
  },

  toSDK(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseSDKType {
    const obj: any = {};
    message.queries !== undefined && (obj.queries = message.queries ? QueryServicesDescriptor.toSDK(message.queries) : undefined);
    return obj;
  }

};

function createBaseGetTxDescriptorRequest(): GetTxDescriptorRequest {
  return {};
}

export const GetTxDescriptorRequest = {
  encode(_: GetTxDescriptorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorRequest();

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

  fromJSON(_: any): GetTxDescriptorRequest {
    return {};
  },

  toJSON(_: GetTxDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetTxDescriptorRequest>): GetTxDescriptorRequest {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },

  fromSDK(_: GetTxDescriptorRequestSDKType): GetTxDescriptorRequest {
    return {};
  },

  toSDK(_: GetTxDescriptorRequest): GetTxDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseGetTxDescriptorResponse(): GetTxDescriptorResponse {
  return {
    tx: undefined
  };
}

export const GetTxDescriptorResponse = {
  encode(message: GetTxDescriptorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetTxDescriptorResponse {
    return {
      tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
    };
  },

  toJSON(message: GetTxDescriptorResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTxDescriptorResponse>): GetTxDescriptorResponse {
    const message = createBaseGetTxDescriptorResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
    return message;
  },

  fromSDK(object: GetTxDescriptorResponseSDKType): GetTxDescriptorResponse {
    return {
      tx: object.tx ? TxDescriptor.fromSDK(object.tx) : undefined
    };
  },

  toSDK(message: GetTxDescriptorResponse): GetTxDescriptorResponseSDKType {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toSDK(message.tx) : undefined);
    return obj;
  }

};

function createBaseQueryServicesDescriptor(): QueryServicesDescriptor {
  return {
    queryServices: []
  };
}

export const QueryServicesDescriptor = {
  encode(message: QueryServicesDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryServicesDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryServicesDescriptor {
    return {
      queryServices: Array.isArray(object?.queryServices) ? object.queryServices.map((e: any) => QueryServiceDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryServicesDescriptor): unknown {
    const obj: any = {};

    if (message.queryServices) {
      obj.queryServices = message.queryServices.map(e => e ? QueryServiceDescriptor.toJSON(e) : undefined);
    } else {
      obj.queryServices = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryServicesDescriptor>): QueryServicesDescriptor {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices = object.queryServices?.map(e => QueryServiceDescriptor.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryServicesDescriptorSDKType): QueryServicesDescriptor {
    return {
      queryServices: Array.isArray(object?.query_services) ? object.query_services.map((e: any) => QueryServiceDescriptor.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryServicesDescriptor): QueryServicesDescriptorSDKType {
    const obj: any = {};

    if (message.queryServices) {
      obj.query_services = message.queryServices.map(e => e ? QueryServiceDescriptor.toSDK(e) : undefined);
    } else {
      obj.query_services = [];
    }

    return obj;
  }

};

function createBaseQueryServiceDescriptor(): QueryServiceDescriptor {
  return {
    fullname: "",
    isModule: false,
    methods: []
  };
}

export const QueryServiceDescriptor = {
  encode(message: QueryServiceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }

    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }

    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryServiceDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;

        case 2:
          message.isModule = reader.bool();
          break;

        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryServiceDescriptor {
    return {
      fullname: isSet(object.fullname) ? String(object.fullname) : "",
      isModule: isSet(object.isModule) ? Boolean(object.isModule) : false,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => QueryMethodDescriptor.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryServiceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.isModule !== undefined && (obj.isModule = message.isModule);

    if (message.methods) {
      obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toJSON(e) : undefined);
    } else {
      obj.methods = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryServiceDescriptor>): QueryServiceDescriptor {
    const message = createBaseQueryServiceDescriptor();
    message.fullname = object.fullname ?? "";
    message.isModule = object.isModule ?? false;
    message.methods = object.methods?.map(e => QueryMethodDescriptor.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryServiceDescriptorSDKType): QueryServiceDescriptor {
    return {
      fullname: object?.fullname,
      isModule: object?.is_module,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => QueryMethodDescriptor.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryServiceDescriptor): QueryServiceDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;
    obj.is_module = message.isModule;

    if (message.methods) {
      obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toSDK(e) : undefined);
    } else {
      obj.methods = [];
    }

    return obj;
  }

};

function createBaseQueryMethodDescriptor(): QueryMethodDescriptor {
  return {
    name: "",
    fullQueryPath: ""
  };
}

export const QueryMethodDescriptor = {
  encode(message: QueryMethodDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMethodDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMethodDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.fullQueryPath = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMethodDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      fullQueryPath: isSet(object.fullQueryPath) ? String(object.fullQueryPath) : ""
    };
  },

  toJSON(message: QueryMethodDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.fullQueryPath !== undefined && (obj.fullQueryPath = message.fullQueryPath);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMethodDescriptor>): QueryMethodDescriptor {
    const message = createBaseQueryMethodDescriptor();
    message.name = object.name ?? "";
    message.fullQueryPath = object.fullQueryPath ?? "";
    return message;
  },

  fromSDK(object: QueryMethodDescriptorSDKType): QueryMethodDescriptor {
    return {
      name: object?.name,
      fullQueryPath: object?.full_query_path
    };
  },

  toSDK(message: QueryMethodDescriptor): QueryMethodDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.full_query_path = message.fullQueryPath;
    return obj;
  }

};