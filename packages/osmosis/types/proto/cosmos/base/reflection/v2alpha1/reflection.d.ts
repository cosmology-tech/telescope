import * as _m0 from "protobufjs/minimal";
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     */
    authn: AuthnDescriptor;
    /** chain provides the chain descriptor */
    chain: ChainDescriptor;
    /** codec provides metadata information regarding codec related types */
    codec: CodecDescriptor;
    /** configuration provides metadata information regarding the sdk.Config type */
    configuration: ConfigurationDescriptor;
    /** query_services provides metadata information regarding the available queriable endpoints */
    queryServices: QueryServicesDescriptor;
    /** tx provides metadata information regarding how to send transactions to the given application */
    tx: TxDescriptor;
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
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
    /** sign_modes defines the supported signature algorithm */
    signModes: SigningModeDescriptor[];
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
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
    /** id is the chain id */
    id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
    /** interfaces is a list of the registerted interfaces descriptors */
    interfaces: InterfaceDescriptor[];
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
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
    /** bech32_account_address_prefix is the account address prefix */
    bech32AccountAddressPrefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
    /** msg_type_url contains the TypeURL of a sdk.Msg. */
    msgTypeUrl: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
    /** authn describes how to authenticate to the application when sending transactions */
    authn: AuthnDescriptor;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
    /** chain describes application chain information */
    chain: ChainDescriptor;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
    /** codec describes the application codec such as registered interfaces and implementations */
    codec: CodecDescriptor;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
    /** config describes the application's sdk.Config */
    config: ConfigurationDescriptor;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
    /** queries provides information on the available queryable services */
    queries: QueryServicesDescriptor;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     */
    tx: TxDescriptor;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
    /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
    queryServices: QueryServiceDescriptor[];
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
export declare const AppDescriptor: {
    encode(message: AppDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppDescriptor;
    fromJSON(object: any): AppDescriptor;
    toJSON(message: AppDescriptor): unknown;
    fromPartial<I extends {
        authn?: {
            signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[];
        };
        chain?: {
            id?: string;
        };
        codec?: {
            interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[];
        };
        configuration?: {
            bech32AccountAddressPrefix?: string;
        };
        queryServices?: {
            queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[];
        };
        tx?: {
            fullname?: string;
            msgs?: {
                msgTypeUrl?: string;
            }[];
        };
    } & {
        authn?: {
            signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[];
        } & {
            signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[] & ({
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            } & {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            } & Record<Exclude<keyof I["authn"]["signModes"][number], keyof SigningModeDescriptor>, never>)[] & Record<Exclude<keyof I["authn"]["signModes"], keyof {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["authn"], "signModes">, never>;
        chain?: {
            id?: string;
        } & {
            id?: string;
        } & Record<Exclude<keyof I["chain"], "id">, never>;
        codec?: {
            interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[];
        } & {
            interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[] & ({
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            } & {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[] & ({
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                } & {
                    fullname?: string;
                    fieldDescriptorNames?: string[] & string[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[]>, never>;
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[] & ({
                    fullname?: string;
                    typeUrl?: string;
                } & {
                    fullname?: string;
                    typeUrl?: string;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"], keyof {
                    fullname?: string;
                    typeUrl?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["codec"]["interfaces"][number], keyof InterfaceDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"], keyof {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["codec"], "interfaces">, never>;
        configuration?: {
            bech32AccountAddressPrefix?: string;
        } & {
            bech32AccountAddressPrefix?: string;
        } & Record<Exclude<keyof I["configuration"], "bech32AccountAddressPrefix">, never>;
        queryServices?: {
            queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[];
        } & {
            queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[] & ({
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            } & {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[] & ({
                    name?: string;
                    fullQueryPath?: string;
                } & {
                    name?: string;
                    fullQueryPath?: string;
                } & Record<Exclude<keyof I["queryServices"]["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["queryServices"]["queryServices"][number]["methods"], keyof {
                    name?: string;
                    fullQueryPath?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["queryServices"]["queryServices"][number], keyof QueryServiceDescriptor>, never>)[] & Record<Exclude<keyof I["queryServices"]["queryServices"], keyof {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["queryServices"], "queryServices">, never>;
        tx?: {
            fullname?: string;
            msgs?: {
                msgTypeUrl?: string;
            }[];
        } & {
            fullname?: string;
            msgs?: {
                msgTypeUrl?: string;
            }[] & ({
                msgTypeUrl?: string;
            } & {
                msgTypeUrl?: string;
            } & Record<Exclude<keyof I["tx"]["msgs"][number], "msgTypeUrl">, never>)[] & Record<Exclude<keyof I["tx"]["msgs"], keyof {
                msgTypeUrl?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["tx"], keyof TxDescriptor>, never>;
    } & Record<Exclude<keyof I, keyof AppDescriptor>, never>>(object: I): AppDescriptor;
};
export declare const TxDescriptor: {
    encode(message: TxDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDescriptor;
    fromJSON(object: any): TxDescriptor;
    toJSON(message: TxDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string;
        msgs?: {
            msgTypeUrl?: string;
        }[];
    } & {
        fullname?: string;
        msgs?: {
            msgTypeUrl?: string;
        }[] & ({
            msgTypeUrl?: string;
        } & {
            msgTypeUrl?: string;
        } & Record<Exclude<keyof I["msgs"][number], "msgTypeUrl">, never>)[] & Record<Exclude<keyof I["msgs"], keyof {
            msgTypeUrl?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof TxDescriptor>, never>>(object: I): TxDescriptor;
};
export declare const AuthnDescriptor: {
    encode(message: AuthnDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthnDescriptor;
    fromJSON(object: any): AuthnDescriptor;
    toJSON(message: AuthnDescriptor): unknown;
    fromPartial<I extends {
        signModes?: {
            name?: string;
            number?: number;
            authnInfoProviderMethodFullname?: string;
        }[];
    } & {
        signModes?: {
            name?: string;
            number?: number;
            authnInfoProviderMethodFullname?: string;
        }[] & ({
            name?: string;
            number?: number;
            authnInfoProviderMethodFullname?: string;
        } & {
            name?: string;
            number?: number;
            authnInfoProviderMethodFullname?: string;
        } & Record<Exclude<keyof I["signModes"][number], keyof SigningModeDescriptor>, never>)[] & Record<Exclude<keyof I["signModes"], keyof {
            name?: string;
            number?: number;
            authnInfoProviderMethodFullname?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "signModes">, never>>(object: I): AuthnDescriptor;
};
export declare const SigningModeDescriptor: {
    encode(message: SigningModeDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningModeDescriptor;
    fromJSON(object: any): SigningModeDescriptor;
    toJSON(message: SigningModeDescriptor): unknown;
    fromPartial<I extends {
        name?: string;
        number?: number;
        authnInfoProviderMethodFullname?: string;
    } & {
        name?: string;
        number?: number;
        authnInfoProviderMethodFullname?: string;
    } & Record<Exclude<keyof I, keyof SigningModeDescriptor>, never>>(object: I): SigningModeDescriptor;
};
export declare const ChainDescriptor: {
    encode(message: ChainDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainDescriptor;
    fromJSON(object: any): ChainDescriptor;
    toJSON(message: ChainDescriptor): unknown;
    fromPartial<I extends {
        id?: string;
    } & {
        id?: string;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): ChainDescriptor;
};
export declare const CodecDescriptor: {
    encode(message: CodecDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodecDescriptor;
    fromJSON(object: any): CodecDescriptor;
    toJSON(message: CodecDescriptor): unknown;
    fromPartial<I extends {
        interfaces?: {
            fullname?: string;
            interfaceAcceptingMessages?: {
                fullname?: string;
                fieldDescriptorNames?: string[];
            }[];
            interfaceImplementers?: {
                fullname?: string;
                typeUrl?: string;
            }[];
        }[];
    } & {
        interfaces?: {
            fullname?: string;
            interfaceAcceptingMessages?: {
                fullname?: string;
                fieldDescriptorNames?: string[];
            }[];
            interfaceImplementers?: {
                fullname?: string;
                typeUrl?: string;
            }[];
        }[] & ({
            fullname?: string;
            interfaceAcceptingMessages?: {
                fullname?: string;
                fieldDescriptorNames?: string[];
            }[];
            interfaceImplementers?: {
                fullname?: string;
                typeUrl?: string;
            }[];
        } & {
            fullname?: string;
            interfaceAcceptingMessages?: {
                fullname?: string;
                fieldDescriptorNames?: string[];
            }[] & ({
                fullname?: string;
                fieldDescriptorNames?: string[];
            } & {
                fullname?: string;
                fieldDescriptorNames?: string[] & string[] & Record<Exclude<keyof I["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                fullname?: string;
                fieldDescriptorNames?: string[];
            }[]>, never>;
            interfaceImplementers?: {
                fullname?: string;
                typeUrl?: string;
            }[] & ({
                fullname?: string;
                typeUrl?: string;
            } & {
                fullname?: string;
                typeUrl?: string;
            } & Record<Exclude<keyof I["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["interfaces"][number]["interfaceImplementers"], keyof {
                fullname?: string;
                typeUrl?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["interfaces"][number], keyof InterfaceDescriptor>, never>)[] & Record<Exclude<keyof I["interfaces"], keyof {
            fullname?: string;
            interfaceAcceptingMessages?: {
                fullname?: string;
                fieldDescriptorNames?: string[];
            }[];
            interfaceImplementers?: {
                fullname?: string;
                typeUrl?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "interfaces">, never>>(object: I): CodecDescriptor;
};
export declare const InterfaceDescriptor: {
    encode(message: InterfaceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceDescriptor;
    fromJSON(object: any): InterfaceDescriptor;
    toJSON(message: InterfaceDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string;
        interfaceAcceptingMessages?: {
            fullname?: string;
            fieldDescriptorNames?: string[];
        }[];
        interfaceImplementers?: {
            fullname?: string;
            typeUrl?: string;
        }[];
    } & {
        fullname?: string;
        interfaceAcceptingMessages?: {
            fullname?: string;
            fieldDescriptorNames?: string[];
        }[] & ({
            fullname?: string;
            fieldDescriptorNames?: string[];
        } & {
            fullname?: string;
            fieldDescriptorNames?: string[] & string[] & Record<Exclude<keyof I["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["interfaceAcceptingMessages"], keyof {
            fullname?: string;
            fieldDescriptorNames?: string[];
        }[]>, never>;
        interfaceImplementers?: {
            fullname?: string;
            typeUrl?: string;
        }[] & ({
            fullname?: string;
            typeUrl?: string;
        } & {
            fullname?: string;
            typeUrl?: string;
        } & Record<Exclude<keyof I["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["interfaceImplementers"], keyof {
            fullname?: string;
            typeUrl?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof InterfaceDescriptor>, never>>(object: I): InterfaceDescriptor;
};
export declare const InterfaceImplementerDescriptor: {
    encode(message: InterfaceImplementerDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceImplementerDescriptor;
    fromJSON(object: any): InterfaceImplementerDescriptor;
    toJSON(message: InterfaceImplementerDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string;
        typeUrl?: string;
    } & {
        fullname?: string;
        typeUrl?: string;
    } & Record<Exclude<keyof I, keyof InterfaceImplementerDescriptor>, never>>(object: I): InterfaceImplementerDescriptor;
};
export declare const InterfaceAcceptingMessageDescriptor: {
    encode(message: InterfaceAcceptingMessageDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor;
    fromJSON(object: any): InterfaceAcceptingMessageDescriptor;
    toJSON(message: InterfaceAcceptingMessageDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string;
        fieldDescriptorNames?: string[];
    } & {
        fullname?: string;
        fieldDescriptorNames?: string[] & string[] & Record<Exclude<keyof I["fieldDescriptorNames"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof InterfaceAcceptingMessageDescriptor>, never>>(object: I): InterfaceAcceptingMessageDescriptor;
};
export declare const ConfigurationDescriptor: {
    encode(message: ConfigurationDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationDescriptor;
    fromJSON(object: any): ConfigurationDescriptor;
    toJSON(message: ConfigurationDescriptor): unknown;
    fromPartial<I extends {
        bech32AccountAddressPrefix?: string;
    } & {
        bech32AccountAddressPrefix?: string;
    } & Record<Exclude<keyof I, "bech32AccountAddressPrefix">, never>>(object: I): ConfigurationDescriptor;
};
export declare const MsgDescriptor: {
    encode(message: MsgDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDescriptor;
    fromJSON(object: any): MsgDescriptor;
    toJSON(message: MsgDescriptor): unknown;
    fromPartial<I extends {
        msgTypeUrl?: string;
    } & {
        msgTypeUrl?: string;
    } & Record<Exclude<keyof I, "msgTypeUrl">, never>>(object: I): MsgDescriptor;
};
export declare const GetAuthnDescriptorRequest: {
    encode(_: GetAuthnDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorRequest;
    fromJSON(_: any): GetAuthnDescriptorRequest;
    toJSON(_: GetAuthnDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetAuthnDescriptorRequest;
};
export declare const GetAuthnDescriptorResponse: {
    encode(message: GetAuthnDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorResponse;
    fromJSON(object: any): GetAuthnDescriptorResponse;
    toJSON(message: GetAuthnDescriptorResponse): unknown;
    fromPartial<I extends {
        authn?: {
            signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[];
        };
    } & {
        authn?: {
            signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[];
        } & {
            signModes?: {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[] & ({
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            } & {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            } & Record<Exclude<keyof I["authn"]["signModes"][number], keyof SigningModeDescriptor>, never>)[] & Record<Exclude<keyof I["authn"]["signModes"], keyof {
                name?: string;
                number?: number;
                authnInfoProviderMethodFullname?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["authn"], "signModes">, never>;
    } & Record<Exclude<keyof I, "authn">, never>>(object: I): GetAuthnDescriptorResponse;
};
export declare const GetChainDescriptorRequest: {
    encode(_: GetChainDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorRequest;
    fromJSON(_: any): GetChainDescriptorRequest;
    toJSON(_: GetChainDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetChainDescriptorRequest;
};
export declare const GetChainDescriptorResponse: {
    encode(message: GetChainDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorResponse;
    fromJSON(object: any): GetChainDescriptorResponse;
    toJSON(message: GetChainDescriptorResponse): unknown;
    fromPartial<I extends {
        chain?: {
            id?: string;
        };
    } & {
        chain?: {
            id?: string;
        } & {
            id?: string;
        } & Record<Exclude<keyof I["chain"], "id">, never>;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): GetChainDescriptorResponse;
};
export declare const GetCodecDescriptorRequest: {
    encode(_: GetCodecDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorRequest;
    fromJSON(_: any): GetCodecDescriptorRequest;
    toJSON(_: GetCodecDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetCodecDescriptorRequest;
};
export declare const GetCodecDescriptorResponse: {
    encode(message: GetCodecDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorResponse;
    fromJSON(object: any): GetCodecDescriptorResponse;
    toJSON(message: GetCodecDescriptorResponse): unknown;
    fromPartial<I extends {
        codec?: {
            interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[];
        };
    } & {
        codec?: {
            interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[];
        } & {
            interfaces?: {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[] & ({
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            } & {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[] & ({
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                } & {
                    fullname?: string;
                    fieldDescriptorNames?: string[] & string[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[]>, never>;
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[] & ({
                    fullname?: string;
                    typeUrl?: string;
                } & {
                    fullname?: string;
                    typeUrl?: string;
                } & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"], keyof {
                    fullname?: string;
                    typeUrl?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["codec"]["interfaces"][number], keyof InterfaceDescriptor>, never>)[] & Record<Exclude<keyof I["codec"]["interfaces"], keyof {
                fullname?: string;
                interfaceAcceptingMessages?: {
                    fullname?: string;
                    fieldDescriptorNames?: string[];
                }[];
                interfaceImplementers?: {
                    fullname?: string;
                    typeUrl?: string;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["codec"], "interfaces">, never>;
    } & Record<Exclude<keyof I, "codec">, never>>(object: I): GetCodecDescriptorResponse;
};
export declare const GetConfigurationDescriptorRequest: {
    encode(_: GetConfigurationDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorRequest;
    fromJSON(_: any): GetConfigurationDescriptorRequest;
    toJSON(_: GetConfigurationDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetConfigurationDescriptorRequest;
};
export declare const GetConfigurationDescriptorResponse: {
    encode(message: GetConfigurationDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorResponse;
    fromJSON(object: any): GetConfigurationDescriptorResponse;
    toJSON(message: GetConfigurationDescriptorResponse): unknown;
    fromPartial<I extends {
        config?: {
            bech32AccountAddressPrefix?: string;
        };
    } & {
        config?: {
            bech32AccountAddressPrefix?: string;
        } & {
            bech32AccountAddressPrefix?: string;
        } & Record<Exclude<keyof I["config"], "bech32AccountAddressPrefix">, never>;
    } & Record<Exclude<keyof I, "config">, never>>(object: I): GetConfigurationDescriptorResponse;
};
export declare const GetQueryServicesDescriptorRequest: {
    encode(_: GetQueryServicesDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest;
    fromJSON(_: any): GetQueryServicesDescriptorRequest;
    toJSON(_: GetQueryServicesDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetQueryServicesDescriptorRequest;
};
export declare const GetQueryServicesDescriptorResponse: {
    encode(message: GetQueryServicesDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse;
    fromJSON(object: any): GetQueryServicesDescriptorResponse;
    toJSON(message: GetQueryServicesDescriptorResponse): unknown;
    fromPartial<I extends {
        queries?: {
            queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[];
        };
    } & {
        queries?: {
            queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[];
        } & {
            queryServices?: {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[] & ({
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            } & {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[] & ({
                    name?: string;
                    fullQueryPath?: string;
                } & {
                    name?: string;
                    fullQueryPath?: string;
                } & Record<Exclude<keyof I["queries"]["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["queries"]["queryServices"][number]["methods"], keyof {
                    name?: string;
                    fullQueryPath?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["queries"]["queryServices"][number], keyof QueryServiceDescriptor>, never>)[] & Record<Exclude<keyof I["queries"]["queryServices"], keyof {
                fullname?: string;
                isModule?: boolean;
                methods?: {
                    name?: string;
                    fullQueryPath?: string;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["queries"], "queryServices">, never>;
    } & Record<Exclude<keyof I, "queries">, never>>(object: I): GetQueryServicesDescriptorResponse;
};
export declare const GetTxDescriptorRequest: {
    encode(_: GetTxDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorRequest;
    fromJSON(_: any): GetTxDescriptorRequest;
    toJSON(_: GetTxDescriptorRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetTxDescriptorRequest;
};
export declare const GetTxDescriptorResponse: {
    encode(message: GetTxDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorResponse;
    fromJSON(object: any): GetTxDescriptorResponse;
    toJSON(message: GetTxDescriptorResponse): unknown;
    fromPartial<I extends {
        tx?: {
            fullname?: string;
            msgs?: {
                msgTypeUrl?: string;
            }[];
        };
    } & {
        tx?: {
            fullname?: string;
            msgs?: {
                msgTypeUrl?: string;
            }[];
        } & {
            fullname?: string;
            msgs?: {
                msgTypeUrl?: string;
            }[] & ({
                msgTypeUrl?: string;
            } & {
                msgTypeUrl?: string;
            } & Record<Exclude<keyof I["tx"]["msgs"][number], "msgTypeUrl">, never>)[] & Record<Exclude<keyof I["tx"]["msgs"], keyof {
                msgTypeUrl?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["tx"], keyof TxDescriptor>, never>;
    } & Record<Exclude<keyof I, "tx">, never>>(object: I): GetTxDescriptorResponse;
};
export declare const QueryServicesDescriptor: {
    encode(message: QueryServicesDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryServicesDescriptor;
    fromJSON(object: any): QueryServicesDescriptor;
    toJSON(message: QueryServicesDescriptor): unknown;
    fromPartial<I extends {
        queryServices?: {
            fullname?: string;
            isModule?: boolean;
            methods?: {
                name?: string;
                fullQueryPath?: string;
            }[];
        }[];
    } & {
        queryServices?: {
            fullname?: string;
            isModule?: boolean;
            methods?: {
                name?: string;
                fullQueryPath?: string;
            }[];
        }[] & ({
            fullname?: string;
            isModule?: boolean;
            methods?: {
                name?: string;
                fullQueryPath?: string;
            }[];
        } & {
            fullname?: string;
            isModule?: boolean;
            methods?: {
                name?: string;
                fullQueryPath?: string;
            }[] & ({
                name?: string;
                fullQueryPath?: string;
            } & {
                name?: string;
                fullQueryPath?: string;
            } & Record<Exclude<keyof I["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["queryServices"][number]["methods"], keyof {
                name?: string;
                fullQueryPath?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["queryServices"][number], keyof QueryServiceDescriptor>, never>)[] & Record<Exclude<keyof I["queryServices"], keyof {
            fullname?: string;
            isModule?: boolean;
            methods?: {
                name?: string;
                fullQueryPath?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "queryServices">, never>>(object: I): QueryServicesDescriptor;
};
export declare const QueryServiceDescriptor: {
    encode(message: QueryServiceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryServiceDescriptor;
    fromJSON(object: any): QueryServiceDescriptor;
    toJSON(message: QueryServiceDescriptor): unknown;
    fromPartial<I extends {
        fullname?: string;
        isModule?: boolean;
        methods?: {
            name?: string;
            fullQueryPath?: string;
        }[];
    } & {
        fullname?: string;
        isModule?: boolean;
        methods?: {
            name?: string;
            fullQueryPath?: string;
        }[] & ({
            name?: string;
            fullQueryPath?: string;
        } & {
            name?: string;
            fullQueryPath?: string;
        } & Record<Exclude<keyof I["methods"][number], keyof QueryMethodDescriptor>, never>)[] & Record<Exclude<keyof I["methods"], keyof {
            name?: string;
            fullQueryPath?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof QueryServiceDescriptor>, never>>(object: I): QueryServiceDescriptor;
};
export declare const QueryMethodDescriptor: {
    encode(message: QueryMethodDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMethodDescriptor;
    fromJSON(object: any): QueryMethodDescriptor;
    toJSON(message: QueryMethodDescriptor): unknown;
    fromPartial<I extends {
        name?: string;
        fullQueryPath?: string;
    } & {
        name?: string;
        fullQueryPath?: string;
    } & Record<Exclude<keyof I, keyof QueryMethodDescriptor>, never>>(object: I): QueryMethodDescriptor;
};
