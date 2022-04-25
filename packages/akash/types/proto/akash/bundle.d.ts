import * as _535 from "./audit/v1beta1/audit";
import * as _544 from "./audit/v1beta2/audit";
import * as _553 from "./audit/v1beta2/genesis";
import * as _554 from "./audit/v1beta2/query";
import * as _555 from "./base/v1beta1/attribute";
import * as _556 from "./base/v1beta1/endpoint";
import * as _557 from "./base/v1beta1/resource";
import * as _558 from "./base/v1beta1/resourcevalue";
import * as _559 from "./base/v1beta2/attribute";
import * as _560 from "./base/v1beta2/endpoint";
import * as _561 from "./base/v1beta2/resource";
import * as _562 from "./base/v1beta2/resourceunits";
import * as _563 from "./base/v1beta2/resourcevalue";
import * as _564 from "./cert/v1beta2/cert";
import * as _573 from "./cert/v1beta2/genesis";
import * as _574 from "./cert/v1beta2/query";
import * as _575 from "./deployment/v1beta1/authz";
import * as _576 from "./deployment/v1beta1/deployment";
import * as _585 from "./deployment/v1beta1/genesis";
import * as _586 from "./deployment/v1beta1/group";
import * as _587 from "./deployment/v1beta1/params";
import * as _588 from "./deployment/v1beta1/query";
import * as _589 from "./deployment/v1beta2/authz";
import * as _590 from "./deployment/v1beta2/deployment";
import * as _591 from "./deployment/v1beta2/deploymentmsg";
import * as _592 from "./deployment/v1beta2/genesis";
import * as _593 from "./deployment/v1beta2/group";
import * as _594 from "./deployment/v1beta2/groupid";
import * as _595 from "./deployment/v1beta2/groupmsg";
import * as _596 from "./deployment/v1beta2/groupspec";
import * as _597 from "./deployment/v1beta2/params";
import * as _598 from "./deployment/v1beta2/query";
import * as _599 from "./deployment/v1beta2/resource";
import * as _600 from "./deployment/v1beta2/service";
import * as _609 from "./escrow/v1beta1/genesis";
import * as _610 from "./escrow/v1beta1/query";
import * as _611 from "./escrow/v1beta1/types";
import * as _612 from "./escrow/v1beta2/genesis";
import * as _613 from "./escrow/v1beta2/query";
import * as _614 from "./escrow/v1beta2/types";
import * as _615 from "./inflation/v1beta2/genesis";
import * as _616 from "./inflation/v1beta2/params";
import * as _617 from "./market/v1beta2/bid";
import * as _618 from "./market/v1beta2/genesis";
import * as _619 from "./market/v1beta2/lease";
import * as _620 from "./market/v1beta2/order";
import * as _621 from "./market/v1beta2/params";
import * as _622 from "./market/v1beta2/query";
import * as _623 from "./market/v1beta2/service";
import * as _632 from "./provider/v1beta1/provider";
import * as _641 from "./provider/v1beta2/genesis";
import * as _642 from "./provider/v1beta2/provider";
import * as _651 from "./provider/v1beta2/query";
export declare namespace akash {
    namespace audit {
        const v1beta1: {
            Provider: {
                encode(message: _535.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.Provider;
                fromJSON(object: any): _535.Provider;
                toJSON(message: _535.Provider): unknown;
                fromPartial<I extends unknown>(object: I): _535.Provider;
            };
            AuditedAttributes: {
                encode(message: _535.AuditedAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.AuditedAttributes;
                fromJSON(object: any): _535.AuditedAttributes;
                toJSON(message: _535.AuditedAttributes): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _535.AuditedAttributes;
            };
            AttributesResponse: {
                encode(message: _535.AttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.AttributesResponse;
                fromJSON(object: any): _535.AttributesResponse;
                toJSON(message: _535.AttributesResponse): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _535.AttributesResponse;
            };
            AttributesFilters: {
                encode(message: _535.AttributesFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.AttributesFilters;
                fromJSON(object: any): _535.AttributesFilters;
                toJSON(message: _535.AttributesFilters): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _535.AttributesFilters;
            };
            MsgSignProviderAttributes: {
                encode(message: _535.MsgSignProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.MsgSignProviderAttributes;
                fromJSON(object: any): _535.MsgSignProviderAttributes;
                toJSON(message: _535.MsgSignProviderAttributes): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _535.MsgSignProviderAttributes;
            };
            MsgSignProviderAttributesResponse: {
                encode(_: _535.MsgSignProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.MsgSignProviderAttributesResponse;
                fromJSON(_: any): _535.MsgSignProviderAttributesResponse;
                toJSON(_: _535.MsgSignProviderAttributesResponse): unknown;
                fromPartial<I_5 extends unknown>(_: I_5): _535.MsgSignProviderAttributesResponse;
            };
            MsgDeleteProviderAttributes: {
                encode(message: _535.MsgDeleteProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.MsgDeleteProviderAttributes;
                fromJSON(object: any): _535.MsgDeleteProviderAttributes;
                toJSON(message: _535.MsgDeleteProviderAttributes): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _535.MsgDeleteProviderAttributes;
            };
            MsgDeleteProviderAttributesResponse: {
                encode(_: _535.MsgDeleteProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _535.MsgDeleteProviderAttributesResponse;
                fromJSON(_: any): _535.MsgDeleteProviderAttributesResponse;
                toJSON(_: _535.MsgDeleteProviderAttributesResponse): unknown;
                fromPartial<I_7 extends unknown>(_: I_7): _535.MsgDeleteProviderAttributesResponse;
            };
            MsgClientImpl: typeof _535.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.audit.v1beta1.MsgSignProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, attributes }: _535.MsgSignProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromAmino: ({ owner, auditor, attributes }: {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    }) => _535.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, keys }: _535.MsgDeleteProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    };
                    fromAmino: ({ owner, auditor, keys }: {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    }) => _535.MsgDeleteProviderAttributes;
                };
            };
            encoded: {
                signProviderAttributes(value: _535.MsgSignProviderAttributes): {
                    type_url: string;
                    value: Uint8Array;
                };
                deleteProviderAttributes(value: _535.MsgDeleteProviderAttributes): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                signProviderAttributes(value: any): {
                    typeUrl: string;
                    value: _535.MsgSignProviderAttributes;
                };
                deleteProviderAttributes(value: any): {
                    typeUrl: string;
                    value: _535.MsgDeleteProviderAttributes;
                };
            };
            toJSON: {
                signProviderAttributes(value: _535.MsgSignProviderAttributes): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteProviderAttributes(value: _535.MsgDeleteProviderAttributes): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                signProviderAttributes(value: _535.MsgSignProviderAttributes): {
                    typeUrl: string;
                    value: _535.MsgSignProviderAttributes;
                };
                deleteProviderAttributes(value: _535.MsgDeleteProviderAttributes): {
                    typeUrl: string;
                    value: _535.MsgDeleteProviderAttributes;
                };
            };
            messages: {
                signProviderAttributes(value: _535.MsgSignProviderAttributes): {
                    typeUrl: string;
                    value: _535.MsgSignProviderAttributes;
                };
                deleteProviderAttributes(value: _535.MsgDeleteProviderAttributes): {
                    typeUrl: string;
                    value: _535.MsgDeleteProviderAttributes;
                };
            };
        };
        const v1beta2: {
            QueryProvidersResponse: {
                encode(message: _554.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.QueryProvidersResponse;
                fromJSON(object: any): _554.QueryProvidersResponse;
                toJSON(message: _554.QueryProvidersResponse): unknown;
                fromPartial<I extends unknown>(object: I): _554.QueryProvidersResponse;
            };
            QueryProviderRequest: {
                encode(message: _554.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.QueryProviderRequest;
                fromJSON(object: any): _554.QueryProviderRequest;
                toJSON(message: _554.QueryProviderRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _554.QueryProviderRequest;
            };
            QueryAllProvidersAttributesRequest: {
                encode(message: _554.QueryAllProvidersAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.QueryAllProvidersAttributesRequest;
                fromJSON(object: any): _554.QueryAllProvidersAttributesRequest;
                toJSON(message: _554.QueryAllProvidersAttributesRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _554.QueryAllProvidersAttributesRequest;
            };
            QueryProviderAttributesRequest: {
                encode(message: _554.QueryProviderAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.QueryProviderAttributesRequest;
                fromJSON(object: any): _554.QueryProviderAttributesRequest;
                toJSON(message: _554.QueryProviderAttributesRequest): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _554.QueryProviderAttributesRequest;
            };
            QueryProviderAuditorRequest: {
                encode(message: _554.QueryProviderAuditorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.QueryProviderAuditorRequest;
                fromJSON(object: any): _554.QueryProviderAuditorRequest;
                toJSON(message: _554.QueryProviderAuditorRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _554.QueryProviderAuditorRequest;
            };
            QueryAuditorAttributesRequest: {
                encode(message: _554.QueryAuditorAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _554.QueryAuditorAttributesRequest;
                fromJSON(object: any): _554.QueryAuditorAttributesRequest;
                toJSON(message: _554.QueryAuditorAttributesRequest): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _554.QueryAuditorAttributesRequest;
            };
            GenesisState: {
                encode(message: _553.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _553.GenesisState;
                fromJSON(object: any): _553.GenesisState;
                toJSON(message: _553.GenesisState): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _553.GenesisState;
            };
            Provider: {
                encode(message: _544.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.Provider;
                fromJSON(object: any): _544.Provider;
                toJSON(message: _544.Provider): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _544.Provider;
            };
            AuditedAttributes: {
                encode(message: _544.AuditedAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.AuditedAttributes;
                fromJSON(object: any): _544.AuditedAttributes;
                toJSON(message: _544.AuditedAttributes): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _544.AuditedAttributes;
            };
            AttributesResponse: {
                encode(message: _544.AttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.AttributesResponse;
                fromJSON(object: any): _544.AttributesResponse;
                toJSON(message: _544.AttributesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _544.AttributesResponse;
            };
            AttributesFilters: {
                encode(message: _544.AttributesFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.AttributesFilters;
                fromJSON(object: any): _544.AttributesFilters;
                toJSON(message: _544.AttributesFilters): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _544.AttributesFilters;
            };
            MsgSignProviderAttributes: {
                encode(message: _544.MsgSignProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgSignProviderAttributes;
                fromJSON(object: any): _544.MsgSignProviderAttributes;
                toJSON(message: _544.MsgSignProviderAttributes): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _544.MsgSignProviderAttributes;
            };
            MsgSignProviderAttributesResponse: {
                encode(_: _544.MsgSignProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgSignProviderAttributesResponse;
                fromJSON(_: any): _544.MsgSignProviderAttributesResponse;
                toJSON(_: _544.MsgSignProviderAttributesResponse): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _544.MsgSignProviderAttributesResponse;
            };
            MsgDeleteProviderAttributes: {
                encode(message: _544.MsgDeleteProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgDeleteProviderAttributes;
                fromJSON(object: any): _544.MsgDeleteProviderAttributes;
                toJSON(message: _544.MsgDeleteProviderAttributes): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _544.MsgDeleteProviderAttributes;
            };
            MsgDeleteProviderAttributesResponse: {
                encode(_: _544.MsgDeleteProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _544.MsgDeleteProviderAttributesResponse;
                fromJSON(_: any): _544.MsgDeleteProviderAttributesResponse;
                toJSON(_: _544.MsgDeleteProviderAttributesResponse): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _544.MsgDeleteProviderAttributesResponse;
            };
            MsgClientImpl: typeof _544.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.audit.v1beta2.MsgSignProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, attributes }: _544.MsgSignProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromAmino: ({ owner, auditor, attributes }: {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    }) => _544.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, keys }: _544.MsgDeleteProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    };
                    fromAmino: ({ owner, auditor, keys }: {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    }) => _544.MsgDeleteProviderAttributes;
                };
            };
            encoded: {
                signProviderAttributes(value: _544.MsgSignProviderAttributes): {
                    type_url: string;
                    value: Uint8Array;
                };
                deleteProviderAttributes(value: _544.MsgDeleteProviderAttributes): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                signProviderAttributes(value: any): {
                    typeUrl: string;
                    value: _544.MsgSignProviderAttributes;
                };
                deleteProviderAttributes(value: any): {
                    typeUrl: string;
                    value: _544.MsgDeleteProviderAttributes;
                };
            };
            toJSON: {
                signProviderAttributes(value: _544.MsgSignProviderAttributes): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteProviderAttributes(value: _544.MsgDeleteProviderAttributes): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                signProviderAttributes(value: _544.MsgSignProviderAttributes): {
                    typeUrl: string;
                    value: _544.MsgSignProviderAttributes;
                };
                deleteProviderAttributes(value: _544.MsgDeleteProviderAttributes): {
                    typeUrl: string;
                    value: _544.MsgDeleteProviderAttributes;
                };
            };
            messages: {
                signProviderAttributes(value: _544.MsgSignProviderAttributes): {
                    typeUrl: string;
                    value: _544.MsgSignProviderAttributes;
                };
                deleteProviderAttributes(value: _544.MsgDeleteProviderAttributes): {
                    typeUrl: string;
                    value: _544.MsgDeleteProviderAttributes;
                };
            };
        };
    }
    namespace base {
        const v1beta1: {
            ResourceValue: {
                encode(message: _558.ResourceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _558.ResourceValue;
                fromJSON(object: any): _558.ResourceValue;
                toJSON(message: _558.ResourceValue): unknown;
                fromPartial<I extends unknown>(object: I): _558.ResourceValue;
            };
            CPU: {
                encode(message: _557.CPU, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.CPU;
                fromJSON(object: any): _557.CPU;
                toJSON(message: _557.CPU): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _557.CPU;
            };
            Memory: {
                encode(message: _557.Memory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.Memory;
                fromJSON(object: any): _557.Memory;
                toJSON(message: _557.Memory): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _557.Memory;
            };
            Storage: {
                encode(message: _557.Storage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.Storage;
                fromJSON(object: any): _557.Storage;
                toJSON(message: _557.Storage): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _557.Storage;
            };
            ResourceUnits: {
                encode(message: _557.ResourceUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _557.ResourceUnits;
                fromJSON(object: any): _557.ResourceUnits;
                toJSON(message: _557.ResourceUnits): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _557.ResourceUnits;
            };
            endpoint_KindFromJSON(object: any): _556.Endpoint_Kind;
            endpoint_KindToJSON(object: _556.Endpoint_Kind): string;
            Endpoint: {
                encode(message: _556.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _556.Endpoint;
                fromJSON(object: any): _556.Endpoint;
                toJSON(message: _556.Endpoint): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _556.Endpoint;
            };
            Endpoint_Kind: typeof _556.Endpoint_Kind;
            Attribute: {
                encode(message: _555.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.Attribute;
                fromJSON(object: any): _555.Attribute;
                toJSON(message: _555.Attribute): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _555.Attribute;
            };
            SignedBy: {
                encode(message: _555.SignedBy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.SignedBy;
                fromJSON(object: any): _555.SignedBy;
                toJSON(message: _555.SignedBy): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _555.SignedBy;
            };
            PlacementRequirements: {
                encode(message: _555.PlacementRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _555.PlacementRequirements;
                fromJSON(object: any): _555.PlacementRequirements;
                toJSON(message: _555.PlacementRequirements): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _555.PlacementRequirements;
            };
        };
        const v1beta2: {
            ResourceValue: {
                encode(message: _563.ResourceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _563.ResourceValue;
                fromJSON(object: any): _563.ResourceValue;
                toJSON(message: _563.ResourceValue): unknown;
                fromPartial<I extends unknown>(object: I): _563.ResourceValue;
            };
            ResourceUnits: {
                encode(message: _562.ResourceUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _562.ResourceUnits;
                fromJSON(object: any): _562.ResourceUnits;
                toJSON(message: _562.ResourceUnits): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _562.ResourceUnits;
            };
            CPU: {
                encode(message: _561.CPU, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.CPU;
                fromJSON(object: any): _561.CPU;
                toJSON(message: _561.CPU): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _561.CPU;
            };
            Memory: {
                encode(message: _561.Memory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.Memory;
                fromJSON(object: any): _561.Memory;
                toJSON(message: _561.Memory): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _561.Memory;
            };
            Storage: {
                encode(message: _561.Storage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _561.Storage;
                fromJSON(object: any): _561.Storage;
                toJSON(message: _561.Storage): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _561.Storage;
            };
            endpoint_KindFromJSON(object: any): _560.Endpoint_Kind;
            endpoint_KindToJSON(object: _560.Endpoint_Kind): string;
            Endpoint: {
                encode(message: _560.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _560.Endpoint;
                fromJSON(object: any): _560.Endpoint;
                toJSON(message: _560.Endpoint): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _560.Endpoint;
            };
            Endpoint_Kind: typeof _560.Endpoint_Kind;
            Attribute: {
                encode(message: _559.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.Attribute;
                fromJSON(object: any): _559.Attribute;
                toJSON(message: _559.Attribute): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _559.Attribute;
            };
            SignedBy: {
                encode(message: _559.SignedBy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.SignedBy;
                fromJSON(object: any): _559.SignedBy;
                toJSON(message: _559.SignedBy): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _559.SignedBy;
            };
            PlacementRequirements: {
                encode(message: _559.PlacementRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _559.PlacementRequirements;
                fromJSON(object: any): _559.PlacementRequirements;
                toJSON(message: _559.PlacementRequirements): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _559.PlacementRequirements;
            };
        };
    }
    namespace cert {
        const v1beta2: {
            CertificateResponse: {
                encode(message: _574.CertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.CertificateResponse;
                fromJSON(object: any): _574.CertificateResponse;
                toJSON(message: _574.CertificateResponse): unknown;
                fromPartial<I extends unknown>(object: I): _574.CertificateResponse;
            };
            QueryCertificatesRequest: {
                encode(message: _574.QueryCertificatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.QueryCertificatesRequest;
                fromJSON(object: any): _574.QueryCertificatesRequest;
                toJSON(message: _574.QueryCertificatesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _574.QueryCertificatesRequest;
            };
            QueryCertificatesResponse: {
                encode(message: _574.QueryCertificatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _574.QueryCertificatesResponse;
                fromJSON(object: any): _574.QueryCertificatesResponse;
                toJSON(message: _574.QueryCertificatesResponse): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _574.QueryCertificatesResponse;
            };
            GenesisCertificate: {
                encode(message: _573.GenesisCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.GenesisCertificate;
                fromJSON(object: any): _573.GenesisCertificate;
                toJSON(message: _573.GenesisCertificate): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _573.GenesisCertificate;
            };
            GenesisState: {
                encode(message: _573.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _573.GenesisState;
                fromJSON(object: any): _573.GenesisState;
                toJSON(message: _573.GenesisState): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _573.GenesisState;
            };
            certificate_StateFromJSON(object: any): _564.Certificate_State;
            certificate_StateToJSON(object: _564.Certificate_State): string;
            CertificateID: {
                encode(message: _564.CertificateID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.CertificateID;
                fromJSON(object: any): _564.CertificateID;
                toJSON(message: _564.CertificateID): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _564.CertificateID;
            };
            Certificate: {
                encode(message: _564.Certificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.Certificate;
                fromJSON(object: any): _564.Certificate;
                toJSON(message: _564.Certificate): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _564.Certificate;
            };
            Certificate_State: typeof _564.Certificate_State;
            CertificateFilter: {
                encode(message: _564.CertificateFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.CertificateFilter;
                fromJSON(object: any): _564.CertificateFilter;
                toJSON(message: _564.CertificateFilter): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _564.CertificateFilter;
            };
            MsgCreateCertificate: {
                encode(message: _564.MsgCreateCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.MsgCreateCertificate;
                fromJSON(object: any): _564.MsgCreateCertificate;
                toJSON(message: _564.MsgCreateCertificate): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _564.MsgCreateCertificate;
            };
            MsgCreateCertificateResponse: {
                encode(_: _564.MsgCreateCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.MsgCreateCertificateResponse;
                fromJSON(_: any): _564.MsgCreateCertificateResponse;
                toJSON(_: _564.MsgCreateCertificateResponse): unknown;
                fromPartial<I_9 extends unknown>(_: I_9): _564.MsgCreateCertificateResponse;
            };
            MsgRevokeCertificate: {
                encode(message: _564.MsgRevokeCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.MsgRevokeCertificate;
                fromJSON(object: any): _564.MsgRevokeCertificate;
                toJSON(message: _564.MsgRevokeCertificate): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _564.MsgRevokeCertificate;
            };
            MsgRevokeCertificateResponse: {
                encode(_: _564.MsgRevokeCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _564.MsgRevokeCertificateResponse;
                fromJSON(_: any): _564.MsgRevokeCertificateResponse;
                toJSON(_: _564.MsgRevokeCertificateResponse): unknown;
                fromPartial<I_11 extends unknown>(_: I_11): _564.MsgRevokeCertificateResponse;
            };
            MsgClientImpl: typeof _564.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.cert.v1beta2.MsgCreateCertificate": {
                    aminoType: string;
                    toAmino: ({ owner, cert, pubkey }: _564.MsgCreateCertificate) => {
                        owner: string;
                        cert: Uint8Array;
                        pubkey: Uint8Array;
                    };
                    fromAmino: ({ owner, cert, pubkey }: {
                        owner: string;
                        cert: Uint8Array;
                        pubkey: Uint8Array;
                    }) => _564.MsgCreateCertificate;
                };
                "/akash.cert.v1beta2.MsgRevokeCertificate": {
                    aminoType: string;
                    toAmino: ({ id }: _564.MsgRevokeCertificate) => {
                        id: {
                            owner: string;
                            serial: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            serial: string;
                        };
                    }) => _564.MsgRevokeCertificate;
                };
            };
            encoded: {
                createCertificate(value: _564.MsgCreateCertificate): {
                    type_url: string;
                    value: Uint8Array;
                };
                revokeCertificate(value: _564.MsgRevokeCertificate): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createCertificate(value: any): {
                    typeUrl: string;
                    value: _564.MsgCreateCertificate;
                };
                revokeCertificate(value: any): {
                    typeUrl: string;
                    value: _564.MsgRevokeCertificate;
                };
            };
            toJSON: {
                createCertificate(value: _564.MsgCreateCertificate): {
                    typeUrl: string;
                    value: unknown;
                };
                revokeCertificate(value: _564.MsgRevokeCertificate): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createCertificate(value: _564.MsgCreateCertificate): {
                    typeUrl: string;
                    value: _564.MsgCreateCertificate;
                };
                revokeCertificate(value: _564.MsgRevokeCertificate): {
                    typeUrl: string;
                    value: _564.MsgRevokeCertificate;
                };
            };
            messages: {
                createCertificate(value: _564.MsgCreateCertificate): {
                    typeUrl: string;
                    value: _564.MsgCreateCertificate;
                };
                revokeCertificate(value: _564.MsgRevokeCertificate): {
                    typeUrl: string;
                    value: _564.MsgRevokeCertificate;
                };
            };
        };
    }
    namespace deployment {
        const v1beta1: {
            QueryDeploymentsRequest: {
                encode(message: _588.QueryDeploymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.QueryDeploymentsRequest;
                fromJSON(object: any): _588.QueryDeploymentsRequest;
                toJSON(message: _588.QueryDeploymentsRequest): unknown;
                fromPartial<I extends unknown>(object: I): _588.QueryDeploymentsRequest;
            };
            QueryDeploymentsResponse: {
                encode(message: _588.QueryDeploymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.QueryDeploymentsResponse;
                fromJSON(object: any): _588.QueryDeploymentsResponse;
                toJSON(message: _588.QueryDeploymentsResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _588.QueryDeploymentsResponse;
            };
            QueryDeploymentRequest: {
                encode(message: _588.QueryDeploymentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.QueryDeploymentRequest;
                fromJSON(object: any): _588.QueryDeploymentRequest;
                toJSON(message: _588.QueryDeploymentRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _588.QueryDeploymentRequest;
            };
            QueryDeploymentResponse: {
                encode(message: _588.QueryDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.QueryDeploymentResponse;
                fromJSON(object: any): _588.QueryDeploymentResponse;
                toJSON(message: _588.QueryDeploymentResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _588.QueryDeploymentResponse;
            };
            QueryGroupRequest: {
                encode(message: _588.QueryGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.QueryGroupRequest;
                fromJSON(object: any): _588.QueryGroupRequest;
                toJSON(message: _588.QueryGroupRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _588.QueryGroupRequest;
            };
            QueryGroupResponse: {
                encode(message: _588.QueryGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _588.QueryGroupResponse;
                fromJSON(object: any): _588.QueryGroupResponse;
                toJSON(message: _588.QueryGroupResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _588.QueryGroupResponse;
            };
            Params: {
                encode(message: _587.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _587.Params;
                fromJSON(object: any): _587.Params;
                toJSON(message: _587.Params): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _587.Params;
            };
            group_StateFromJSON(object: any): _586.Group_State;
            group_StateToJSON(object: _586.Group_State): string;
            MsgCloseGroup: {
                encode(message: _586.MsgCloseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgCloseGroup;
                fromJSON(object: any): _586.MsgCloseGroup;
                toJSON(message: _586.MsgCloseGroup): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _586.MsgCloseGroup;
            };
            MsgCloseGroupResponse: {
                encode(_: _586.MsgCloseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgCloseGroupResponse;
                fromJSON(_: any): _586.MsgCloseGroupResponse;
                toJSON(_: _586.MsgCloseGroupResponse): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _586.MsgCloseGroupResponse;
            };
            MsgPauseGroup: {
                encode(message: _586.MsgPauseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgPauseGroup;
                fromJSON(object: any): _586.MsgPauseGroup;
                toJSON(message: _586.MsgPauseGroup): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _586.MsgPauseGroup;
            };
            MsgPauseGroupResponse: {
                encode(_: _586.MsgPauseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgPauseGroupResponse;
                fromJSON(_: any): _586.MsgPauseGroupResponse;
                toJSON(_: _586.MsgPauseGroupResponse): unknown;
                fromPartial<I_10 extends unknown>(_: I_10): _586.MsgPauseGroupResponse;
            };
            MsgStartGroup: {
                encode(message: _586.MsgStartGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgStartGroup;
                fromJSON(object: any): _586.MsgStartGroup;
                toJSON(message: _586.MsgStartGroup): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _586.MsgStartGroup;
            };
            MsgStartGroupResponse: {
                encode(_: _586.MsgStartGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.MsgStartGroupResponse;
                fromJSON(_: any): _586.MsgStartGroupResponse;
                toJSON(_: _586.MsgStartGroupResponse): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _586.MsgStartGroupResponse;
            };
            GroupID: {
                encode(message: _586.GroupID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.GroupID;
                fromJSON(object: any): _586.GroupID;
                toJSON(message: _586.GroupID): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _586.GroupID;
            };
            GroupSpec: {
                encode(message: _586.GroupSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.GroupSpec;
                fromJSON(object: any): _586.GroupSpec;
                toJSON(message: _586.GroupSpec): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _586.GroupSpec;
            };
            Group: {
                encode(message: _586.Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.Group;
                fromJSON(object: any): _586.Group;
                toJSON(message: _586.Group): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _586.Group;
            };
            Group_State: typeof _586.Group_State;
            Resource: {
                encode(message: _586.Resource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _586.Resource;
                fromJSON(object: any): _586.Resource;
                toJSON(message: _586.Resource): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _586.Resource;
            };
            GenesisDeployment: {
                encode(message: _585.GenesisDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.GenesisDeployment;
                fromJSON(object: any): _585.GenesisDeployment;
                toJSON(message: _585.GenesisDeployment): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _585.GenesisDeployment;
            };
            GenesisState: {
                encode(message: _585.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _585.GenesisState;
                fromJSON(object: any): _585.GenesisState;
                toJSON(message: _585.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _585.GenesisState;
            };
            deployment_StateFromJSON(object: any): _576.Deployment_State;
            deployment_StateToJSON(object: _576.Deployment_State): string;
            MsgCreateDeployment: {
                encode(message: _576.MsgCreateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgCreateDeployment;
                fromJSON(object: any): _576.MsgCreateDeployment;
                toJSON(message: _576.MsgCreateDeployment): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _576.MsgCreateDeployment;
            };
            MsgCreateDeploymentResponse: {
                encode(_: _576.MsgCreateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgCreateDeploymentResponse;
                fromJSON(_: any): _576.MsgCreateDeploymentResponse;
                toJSON(_: _576.MsgCreateDeploymentResponse): unknown;
                fromPartial<I_20 extends unknown>(_: I_20): _576.MsgCreateDeploymentResponse;
            };
            MsgDepositDeployment: {
                encode(message: _576.MsgDepositDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgDepositDeployment;
                fromJSON(object: any): _576.MsgDepositDeployment;
                toJSON(message: _576.MsgDepositDeployment): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _576.MsgDepositDeployment;
            };
            MsgDepositDeploymentResponse: {
                encode(_: _576.MsgDepositDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgDepositDeploymentResponse;
                fromJSON(_: any): _576.MsgDepositDeploymentResponse;
                toJSON(_: _576.MsgDepositDeploymentResponse): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _576.MsgDepositDeploymentResponse;
            };
            MsgUpdateDeployment: {
                encode(message: _576.MsgUpdateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgUpdateDeployment;
                fromJSON(object: any): _576.MsgUpdateDeployment;
                toJSON(message: _576.MsgUpdateDeployment): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _576.MsgUpdateDeployment;
            };
            MsgUpdateDeploymentResponse: {
                encode(_: _576.MsgUpdateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgUpdateDeploymentResponse;
                fromJSON(_: any): _576.MsgUpdateDeploymentResponse;
                toJSON(_: _576.MsgUpdateDeploymentResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _576.MsgUpdateDeploymentResponse;
            };
            MsgCloseDeployment: {
                encode(message: _576.MsgCloseDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgCloseDeployment;
                fromJSON(object: any): _576.MsgCloseDeployment;
                toJSON(message: _576.MsgCloseDeployment): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _576.MsgCloseDeployment;
            };
            MsgCloseDeploymentResponse: {
                encode(_: _576.MsgCloseDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.MsgCloseDeploymentResponse;
                fromJSON(_: any): _576.MsgCloseDeploymentResponse;
                toJSON(_: _576.MsgCloseDeploymentResponse): unknown;
                fromPartial<I_26 extends unknown>(_: I_26): _576.MsgCloseDeploymentResponse;
            };
            DeploymentID: {
                encode(message: _576.DeploymentID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.DeploymentID;
                fromJSON(object: any): _576.DeploymentID;
                toJSON(message: _576.DeploymentID): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _576.DeploymentID;
            };
            Deployment: {
                encode(message: _576.Deployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.Deployment;
                fromJSON(object: any): _576.Deployment;
                toJSON(message: _576.Deployment): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _576.Deployment;
            };
            Deployment_State: typeof _576.Deployment_State;
            DeploymentFilters: {
                encode(message: _576.DeploymentFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _576.DeploymentFilters;
                fromJSON(object: any): _576.DeploymentFilters;
                toJSON(message: _576.DeploymentFilters): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _576.DeploymentFilters;
            };
            MsgClientImpl: typeof _576.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.deployment.v1beta1.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version, deposit }: _576.MsgCreateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, groups, version, deposit }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _576.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta1.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: ({ id, amount }: _576.MsgDepositDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, amount }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _576.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta1.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version }: _576.MsgUpdateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    };
                    fromAmino: ({ id, groups, version }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    }) => _576.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: ({ id }: _576.MsgCloseDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    }) => _576.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _586.MsgCloseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _586.MsgCloseGroup;
                };
                "/akash.deployment.v1beta1.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _586.MsgPauseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _586.MsgPauseGroup;
                };
                "/akash.deployment.v1beta1.MsgStartGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _586.MsgStartGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _586.MsgStartGroup;
                };
            };
            encoded: {
                createDeployment(value: _576.MsgCreateDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                depositDeployment(value: _576.MsgDepositDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateDeployment(value: _576.MsgUpdateDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                closeDeployment(value: _576.MsgCloseDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                closeGroup(value: _586.MsgCloseGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                pauseGroup(value: _586.MsgPauseGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                startGroup(value: _586.MsgStartGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createDeployment(value: any): {
                    typeUrl: string;
                    value: _576.MsgCreateDeployment;
                };
                depositDeployment(value: any): {
                    typeUrl: string;
                    value: _576.MsgDepositDeployment;
                };
                updateDeployment(value: any): {
                    typeUrl: string;
                    value: _576.MsgUpdateDeployment;
                };
                closeDeployment(value: any): {
                    typeUrl: string;
                    value: _576.MsgCloseDeployment;
                };
                closeGroup(value: any): {
                    typeUrl: string;
                    value: _586.MsgCloseGroup;
                };
                pauseGroup(value: any): {
                    typeUrl: string;
                    value: _586.MsgPauseGroup;
                };
                startGroup(value: any): {
                    typeUrl: string;
                    value: _586.MsgStartGroup;
                };
            };
            toJSON: {
                createDeployment(value: _576.MsgCreateDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                depositDeployment(value: _576.MsgDepositDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                updateDeployment(value: _576.MsgUpdateDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                closeDeployment(value: _576.MsgCloseDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                closeGroup(value: _586.MsgCloseGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                pauseGroup(value: _586.MsgPauseGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                startGroup(value: _586.MsgStartGroup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createDeployment(value: _576.MsgCreateDeployment): {
                    typeUrl: string;
                    value: _576.MsgCreateDeployment;
                };
                depositDeployment(value: _576.MsgDepositDeployment): {
                    typeUrl: string;
                    value: _576.MsgDepositDeployment;
                };
                updateDeployment(value: _576.MsgUpdateDeployment): {
                    typeUrl: string;
                    value: _576.MsgUpdateDeployment;
                };
                closeDeployment(value: _576.MsgCloseDeployment): {
                    typeUrl: string;
                    value: _576.MsgCloseDeployment;
                };
                closeGroup(value: _586.MsgCloseGroup): {
                    typeUrl: string;
                    value: _586.MsgCloseGroup;
                };
                pauseGroup(value: _586.MsgPauseGroup): {
                    typeUrl: string;
                    value: _586.MsgPauseGroup;
                };
                startGroup(value: _586.MsgStartGroup): {
                    typeUrl: string;
                    value: _586.MsgStartGroup;
                };
            };
            messages: {
                createDeployment(value: _576.MsgCreateDeployment): {
                    typeUrl: string;
                    value: _576.MsgCreateDeployment;
                };
                depositDeployment(value: _576.MsgDepositDeployment): {
                    typeUrl: string;
                    value: _576.MsgDepositDeployment;
                };
                updateDeployment(value: _576.MsgUpdateDeployment): {
                    typeUrl: string;
                    value: _576.MsgUpdateDeployment;
                };
                closeDeployment(value: _576.MsgCloseDeployment): {
                    typeUrl: string;
                    value: _576.MsgCloseDeployment;
                };
                closeGroup(value: _586.MsgCloseGroup): {
                    typeUrl: string;
                    value: _586.MsgCloseGroup;
                };
                pauseGroup(value: _586.MsgPauseGroup): {
                    typeUrl: string;
                    value: _586.MsgPauseGroup;
                };
                startGroup(value: _586.MsgStartGroup): {
                    typeUrl: string;
                    value: _586.MsgStartGroup;
                };
            };
            DepositDeploymentAuthorization: {
                encode(message: _575.DepositDeploymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _575.DepositDeploymentAuthorization;
                fromJSON(object: any): _575.DepositDeploymentAuthorization;
                toJSON(message: _575.DepositDeploymentAuthorization): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _575.DepositDeploymentAuthorization;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _600.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.deployment.v1beta2.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version, deposit }: _591.MsgCreateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, groups, version, deposit }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _591.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta2.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: ({ id, amount }: _591.MsgDepositDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, amount }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _591.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta2.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version }: _591.MsgUpdateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    };
                    fromAmino: ({ id, groups, version }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    }) => _591.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: ({ id }: _591.MsgCloseDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    }) => _591.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _595.MsgCloseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _595.MsgCloseGroup;
                };
                "/akash.deployment.v1beta2.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _595.MsgPauseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _595.MsgPauseGroup;
                };
                "/akash.deployment.v1beta2.MsgStartGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _595.MsgStartGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _595.MsgStartGroup;
                };
            };
            encoded: {
                createDeployment(value: _591.MsgCreateDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                depositDeployment(value: _591.MsgDepositDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateDeployment(value: _591.MsgUpdateDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                closeDeployment(value: _591.MsgCloseDeployment): {
                    type_url: string;
                    value: Uint8Array;
                };
                closeGroup(value: _595.MsgCloseGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                pauseGroup(value: _595.MsgPauseGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
                startGroup(value: _595.MsgStartGroup): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createDeployment(value: any): {
                    typeUrl: string;
                    value: _591.MsgCreateDeployment;
                };
                depositDeployment(value: any): {
                    typeUrl: string;
                    value: _591.MsgDepositDeployment;
                };
                updateDeployment(value: any): {
                    typeUrl: string;
                    value: _591.MsgUpdateDeployment;
                };
                closeDeployment(value: any): {
                    typeUrl: string;
                    value: _591.MsgCloseDeployment;
                };
                closeGroup(value: any): {
                    typeUrl: string;
                    value: _595.MsgCloseGroup;
                };
                pauseGroup(value: any): {
                    typeUrl: string;
                    value: _595.MsgPauseGroup;
                };
                startGroup(value: any): {
                    typeUrl: string;
                    value: _595.MsgStartGroup;
                };
            };
            toJSON: {
                createDeployment(value: _591.MsgCreateDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                depositDeployment(value: _591.MsgDepositDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                updateDeployment(value: _591.MsgUpdateDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                closeDeployment(value: _591.MsgCloseDeployment): {
                    typeUrl: string;
                    value: unknown;
                };
                closeGroup(value: _595.MsgCloseGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                pauseGroup(value: _595.MsgPauseGroup): {
                    typeUrl: string;
                    value: unknown;
                };
                startGroup(value: _595.MsgStartGroup): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createDeployment(value: _591.MsgCreateDeployment): {
                    typeUrl: string;
                    value: _591.MsgCreateDeployment;
                };
                depositDeployment(value: _591.MsgDepositDeployment): {
                    typeUrl: string;
                    value: _591.MsgDepositDeployment;
                };
                updateDeployment(value: _591.MsgUpdateDeployment): {
                    typeUrl: string;
                    value: _591.MsgUpdateDeployment;
                };
                closeDeployment(value: _591.MsgCloseDeployment): {
                    typeUrl: string;
                    value: _591.MsgCloseDeployment;
                };
                closeGroup(value: _595.MsgCloseGroup): {
                    typeUrl: string;
                    value: _595.MsgCloseGroup;
                };
                pauseGroup(value: _595.MsgPauseGroup): {
                    typeUrl: string;
                    value: _595.MsgPauseGroup;
                };
                startGroup(value: _595.MsgStartGroup): {
                    typeUrl: string;
                    value: _595.MsgStartGroup;
                };
            };
            messages: {
                createDeployment(value: _591.MsgCreateDeployment): {
                    typeUrl: string;
                    value: _591.MsgCreateDeployment;
                };
                depositDeployment(value: _591.MsgDepositDeployment): {
                    typeUrl: string;
                    value: _591.MsgDepositDeployment;
                };
                updateDeployment(value: _591.MsgUpdateDeployment): {
                    typeUrl: string;
                    value: _591.MsgUpdateDeployment;
                };
                closeDeployment(value: _591.MsgCloseDeployment): {
                    typeUrl: string;
                    value: _591.MsgCloseDeployment;
                };
                closeGroup(value: _595.MsgCloseGroup): {
                    typeUrl: string;
                    value: _595.MsgCloseGroup;
                };
                pauseGroup(value: _595.MsgPauseGroup): {
                    typeUrl: string;
                    value: _595.MsgPauseGroup;
                };
                startGroup(value: _595.MsgStartGroup): {
                    typeUrl: string;
                    value: _595.MsgStartGroup;
                };
            };
            Resource: {
                encode(message: _599.Resource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _599.Resource;
                fromJSON(object: any): _599.Resource;
                toJSON(message: _599.Resource): unknown;
                fromPartial<I extends unknown>(object: I): _599.Resource;
            };
            QueryDeploymentsRequest: {
                encode(message: _598.QueryDeploymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.QueryDeploymentsRequest;
                fromJSON(object: any): _598.QueryDeploymentsRequest;
                toJSON(message: _598.QueryDeploymentsRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _598.QueryDeploymentsRequest;
            };
            QueryDeploymentsResponse: {
                encode(message: _598.QueryDeploymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.QueryDeploymentsResponse;
                fromJSON(object: any): _598.QueryDeploymentsResponse;
                toJSON(message: _598.QueryDeploymentsResponse): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _598.QueryDeploymentsResponse;
            };
            QueryDeploymentRequest: {
                encode(message: _598.QueryDeploymentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.QueryDeploymentRequest;
                fromJSON(object: any): _598.QueryDeploymentRequest;
                toJSON(message: _598.QueryDeploymentRequest): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _598.QueryDeploymentRequest;
            };
            QueryDeploymentResponse: {
                encode(message: _598.QueryDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.QueryDeploymentResponse;
                fromJSON(object: any): _598.QueryDeploymentResponse;
                toJSON(message: _598.QueryDeploymentResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _598.QueryDeploymentResponse;
            };
            QueryGroupRequest: {
                encode(message: _598.QueryGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.QueryGroupRequest;
                fromJSON(object: any): _598.QueryGroupRequest;
                toJSON(message: _598.QueryGroupRequest): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _598.QueryGroupRequest;
            };
            QueryGroupResponse: {
                encode(message: _598.QueryGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _598.QueryGroupResponse;
                fromJSON(object: any): _598.QueryGroupResponse;
                toJSON(message: _598.QueryGroupResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _598.QueryGroupResponse;
            };
            Params: {
                encode(message: _597.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _597.Params;
                fromJSON(object: any): _597.Params;
                toJSON(message: _597.Params): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _597.Params;
            };
            GroupSpec: {
                encode(message: _596.GroupSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _596.GroupSpec;
                fromJSON(object: any): _596.GroupSpec;
                toJSON(message: _596.GroupSpec): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _596.GroupSpec;
            };
            MsgCloseGroup: {
                encode(message: _595.MsgCloseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgCloseGroup;
                fromJSON(object: any): _595.MsgCloseGroup;
                toJSON(message: _595.MsgCloseGroup): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _595.MsgCloseGroup;
            };
            MsgCloseGroupResponse: {
                encode(_: _595.MsgCloseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgCloseGroupResponse;
                fromJSON(_: any): _595.MsgCloseGroupResponse;
                toJSON(_: _595.MsgCloseGroupResponse): unknown;
                fromPartial<I_10 extends unknown>(_: I_10): _595.MsgCloseGroupResponse;
            };
            MsgPauseGroup: {
                encode(message: _595.MsgPauseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgPauseGroup;
                fromJSON(object: any): _595.MsgPauseGroup;
                toJSON(message: _595.MsgPauseGroup): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _595.MsgPauseGroup;
            };
            MsgPauseGroupResponse: {
                encode(_: _595.MsgPauseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgPauseGroupResponse;
                fromJSON(_: any): _595.MsgPauseGroupResponse;
                toJSON(_: _595.MsgPauseGroupResponse): unknown;
                fromPartial<I_12 extends unknown>(_: I_12): _595.MsgPauseGroupResponse;
            };
            MsgStartGroup: {
                encode(message: _595.MsgStartGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgStartGroup;
                fromJSON(object: any): _595.MsgStartGroup;
                toJSON(message: _595.MsgStartGroup): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _595.MsgStartGroup;
            };
            MsgStartGroupResponse: {
                encode(_: _595.MsgStartGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _595.MsgStartGroupResponse;
                fromJSON(_: any): _595.MsgStartGroupResponse;
                toJSON(_: _595.MsgStartGroupResponse): unknown;
                fromPartial<I_14 extends unknown>(_: I_14): _595.MsgStartGroupResponse;
            };
            GroupID: {
                encode(message: _594.GroupID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _594.GroupID;
                fromJSON(object: any): _594.GroupID;
                toJSON(message: _594.GroupID): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _594.GroupID;
            };
            group_StateFromJSON(object: any): _593.Group_State;
            group_StateToJSON(object: _593.Group_State): string;
            Group: {
                encode(message: _593.Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _593.Group;
                fromJSON(object: any): _593.Group;
                toJSON(message: _593.Group): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _593.Group;
            };
            Group_State: typeof _593.Group_State;
            GenesisDeployment: {
                encode(message: _592.GenesisDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.GenesisDeployment;
                fromJSON(object: any): _592.GenesisDeployment;
                toJSON(message: _592.GenesisDeployment): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _592.GenesisDeployment;
            };
            GenesisState: {
                encode(message: _592.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _592.GenesisState;
                fromJSON(object: any): _592.GenesisState;
                toJSON(message: _592.GenesisState): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _592.GenesisState;
            };
            MsgCreateDeployment: {
                encode(message: _591.MsgCreateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgCreateDeployment;
                fromJSON(object: any): _591.MsgCreateDeployment;
                toJSON(message: _591.MsgCreateDeployment): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _591.MsgCreateDeployment;
            };
            MsgCreateDeploymentResponse: {
                encode(_: _591.MsgCreateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgCreateDeploymentResponse;
                fromJSON(_: any): _591.MsgCreateDeploymentResponse;
                toJSON(_: _591.MsgCreateDeploymentResponse): unknown;
                fromPartial<I_20 extends unknown>(_: I_20): _591.MsgCreateDeploymentResponse;
            };
            MsgDepositDeployment: {
                encode(message: _591.MsgDepositDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgDepositDeployment;
                fromJSON(object: any): _591.MsgDepositDeployment;
                toJSON(message: _591.MsgDepositDeployment): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _591.MsgDepositDeployment;
            };
            MsgDepositDeploymentResponse: {
                encode(_: _591.MsgDepositDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgDepositDeploymentResponse;
                fromJSON(_: any): _591.MsgDepositDeploymentResponse;
                toJSON(_: _591.MsgDepositDeploymentResponse): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _591.MsgDepositDeploymentResponse;
            };
            MsgUpdateDeployment: {
                encode(message: _591.MsgUpdateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgUpdateDeployment;
                fromJSON(object: any): _591.MsgUpdateDeployment;
                toJSON(message: _591.MsgUpdateDeployment): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _591.MsgUpdateDeployment;
            };
            MsgUpdateDeploymentResponse: {
                encode(_: _591.MsgUpdateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgUpdateDeploymentResponse;
                fromJSON(_: any): _591.MsgUpdateDeploymentResponse;
                toJSON(_: _591.MsgUpdateDeploymentResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _591.MsgUpdateDeploymentResponse;
            };
            MsgCloseDeployment: {
                encode(message: _591.MsgCloseDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgCloseDeployment;
                fromJSON(object: any): _591.MsgCloseDeployment;
                toJSON(message: _591.MsgCloseDeployment): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _591.MsgCloseDeployment;
            };
            MsgCloseDeploymentResponse: {
                encode(_: _591.MsgCloseDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _591.MsgCloseDeploymentResponse;
                fromJSON(_: any): _591.MsgCloseDeploymentResponse;
                toJSON(_: _591.MsgCloseDeploymentResponse): unknown;
                fromPartial<I_26 extends unknown>(_: I_26): _591.MsgCloseDeploymentResponse;
            };
            deployment_StateFromJSON(object: any): _590.Deployment_State;
            deployment_StateToJSON(object: _590.Deployment_State): string;
            DeploymentID: {
                encode(message: _590.DeploymentID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.DeploymentID;
                fromJSON(object: any): _590.DeploymentID;
                toJSON(message: _590.DeploymentID): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _590.DeploymentID;
            };
            Deployment: {
                encode(message: _590.Deployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.Deployment;
                fromJSON(object: any): _590.Deployment;
                toJSON(message: _590.Deployment): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _590.Deployment;
            };
            Deployment_State: typeof _590.Deployment_State;
            DeploymentFilters: {
                encode(message: _590.DeploymentFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _590.DeploymentFilters;
                fromJSON(object: any): _590.DeploymentFilters;
                toJSON(message: _590.DeploymentFilters): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _590.DeploymentFilters;
            };
            DepositDeploymentAuthorization: {
                encode(message: _589.DepositDeploymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _589.DepositDeploymentAuthorization;
                fromJSON(object: any): _589.DepositDeploymentAuthorization;
                toJSON(message: _589.DepositDeploymentAuthorization): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _589.DepositDeploymentAuthorization;
            };
        };
    }
    namespace escrow {
        const v1beta1: {
            account_StateFromJSON(object: any): _611.Account_State;
            account_StateToJSON(object: _611.Account_State): string;
            payment_StateFromJSON(object: any): _611.Payment_State;
            payment_StateToJSON(object: _611.Payment_State): string;
            AccountID: {
                encode(message: _611.AccountID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _611.AccountID;
                fromJSON(object: any): _611.AccountID;
                toJSON(message: _611.AccountID): unknown;
                fromPartial<I extends unknown>(object: I): _611.AccountID;
            };
            Account: {
                encode(message: _611.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _611.Account;
                fromJSON(object: any): _611.Account;
                toJSON(message: _611.Account): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _611.Account;
            };
            Account_State: typeof _611.Account_State;
            Payment: {
                encode(message: _611.Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _611.Payment;
                fromJSON(object: any): _611.Payment;
                toJSON(message: _611.Payment): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _611.Payment;
            };
            Payment_State: typeof _611.Payment_State;
            QueryAccountsRequest: {
                encode(message: _610.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.QueryAccountsRequest;
                fromJSON(object: any): _610.QueryAccountsRequest;
                toJSON(message: _610.QueryAccountsRequest): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _610.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _610.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.QueryAccountsResponse;
                fromJSON(object: any): _610.QueryAccountsResponse;
                toJSON(message: _610.QueryAccountsResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _610.QueryAccountsResponse;
            };
            QueryPaymentsRequest: {
                encode(message: _610.QueryPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.QueryPaymentsRequest;
                fromJSON(object: any): _610.QueryPaymentsRequest;
                toJSON(message: _610.QueryPaymentsRequest): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _610.QueryPaymentsRequest;
            };
            QueryPaymentsResponse: {
                encode(message: _610.QueryPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _610.QueryPaymentsResponse;
                fromJSON(object: any): _610.QueryPaymentsResponse;
                toJSON(message: _610.QueryPaymentsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _610.QueryPaymentsResponse;
            };
            GenesisState: {
                encode(message: _609.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _609.GenesisState;
                fromJSON(object: any): _609.GenesisState;
                toJSON(message: _609.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _609.GenesisState;
            };
        };
        const v1beta2: {
            account_StateFromJSON(object: any): _614.Account_State;
            account_StateToJSON(object: _614.Account_State): string;
            fractionalPayment_StateFromJSON(object: any): _614.FractionalPayment_State;
            fractionalPayment_StateToJSON(object: _614.FractionalPayment_State): string;
            AccountID: {
                encode(message: _614.AccountID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.AccountID;
                fromJSON(object: any): _614.AccountID;
                toJSON(message: _614.AccountID): unknown;
                fromPartial<I extends unknown>(object: I): _614.AccountID;
            };
            Account: {
                encode(message: _614.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.Account;
                fromJSON(object: any): _614.Account;
                toJSON(message: _614.Account): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _614.Account;
            };
            Account_State: typeof _614.Account_State;
            FractionalPayment: {
                encode(message: _614.FractionalPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _614.FractionalPayment;
                fromJSON(object: any): _614.FractionalPayment;
                toJSON(message: _614.FractionalPayment): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _614.FractionalPayment;
            };
            FractionalPayment_State: typeof _614.FractionalPayment_State;
            QueryAccountsRequest: {
                encode(message: _613.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryAccountsRequest;
                fromJSON(object: any): _613.QueryAccountsRequest;
                toJSON(message: _613.QueryAccountsRequest): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _613.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _613.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryAccountsResponse;
                fromJSON(object: any): _613.QueryAccountsResponse;
                toJSON(message: _613.QueryAccountsResponse): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _613.QueryAccountsResponse;
            };
            QueryPaymentsRequest: {
                encode(message: _613.QueryPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryPaymentsRequest;
                fromJSON(object: any): _613.QueryPaymentsRequest;
                toJSON(message: _613.QueryPaymentsRequest): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _613.QueryPaymentsRequest;
            };
            QueryPaymentsResponse: {
                encode(message: _613.QueryPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _613.QueryPaymentsResponse;
                fromJSON(object: any): _613.QueryPaymentsResponse;
                toJSON(message: _613.QueryPaymentsResponse): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _613.QueryPaymentsResponse;
            };
            GenesisState: {
                encode(message: _612.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _612.GenesisState;
                fromJSON(object: any): _612.GenesisState;
                toJSON(message: _612.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _612.GenesisState;
            };
        };
    }
    namespace inflation {
        const v1beta2: {
            Params: {
                encode(message: _616.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _616.Params;
                fromJSON(object: any): _616.Params;
                toJSON(message: _616.Params): unknown;
                fromPartial<I extends unknown>(object: I): _616.Params;
            };
            GenesisState: {
                encode(message: _615.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _615.GenesisState;
                fromJSON(object: any): _615.GenesisState;
                toJSON(message: _615.GenesisState): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _615.GenesisState;
            };
        };
    }
    namespace market {
        const v1beta2: {
            MsgClientImpl: typeof _623.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.market.v1beta2.MsgCreateBid": {
                    aminoType: string;
                    toAmino: ({ order, provider, price, deposit }: _617.MsgCreateBid) => {
                        order: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                        };
                        provider: string;
                        price: {
                            denom: string;
                            amount: string;
                        };
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ order, provider, price, deposit }: {
                        order: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                        };
                        provider: string;
                        price: {
                            denom: string;
                            amount: string;
                        };
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _617.MsgCreateBid;
                };
                "/akash.market.v1beta2.MsgCloseBid": {
                    aminoType: string;
                    toAmino: ({ bidId }: _617.MsgCloseBid) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _617.MsgCloseBid;
                };
                "/akash.market.v1beta2.MsgWithdrawLease": {
                    aminoType: string;
                    toAmino: ({ bidId }: _619.MsgWithdrawLease) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _619.MsgWithdrawLease;
                };
                "/akash.market.v1beta2.MsgCreateLease": {
                    aminoType: string;
                    toAmino: ({ bidId }: _619.MsgCreateLease) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _619.MsgCreateLease;
                };
                "/akash.market.v1beta2.MsgCloseLease": {
                    aminoType: string;
                    toAmino: ({ leaseId }: _619.MsgCloseLease) => {
                        lease_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ lease_id }: {
                        lease_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _619.MsgCloseLease;
                };
            };
            encoded: {
                createBid(value: _617.MsgCreateBid): {
                    type_url: string;
                    value: Uint8Array;
                };
                closeBid(value: _617.MsgCloseBid): {
                    type_url: string;
                    value: Uint8Array;
                };
                withdrawLease(value: _619.MsgWithdrawLease): {
                    type_url: string;
                    value: Uint8Array;
                };
                createLease(value: _619.MsgCreateLease): {
                    type_url: string;
                    value: Uint8Array;
                };
                closeLease(value: _619.MsgCloseLease): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createBid(value: any): {
                    typeUrl: string;
                    value: _617.MsgCreateBid;
                };
                closeBid(value: any): {
                    typeUrl: string;
                    value: _617.MsgCloseBid;
                };
                withdrawLease(value: any): {
                    typeUrl: string;
                    value: _619.MsgWithdrawLease;
                };
                createLease(value: any): {
                    typeUrl: string;
                    value: _619.MsgCreateLease;
                };
                closeLease(value: any): {
                    typeUrl: string;
                    value: _619.MsgCloseLease;
                };
            };
            toJSON: {
                createBid(value: _617.MsgCreateBid): {
                    typeUrl: string;
                    value: unknown;
                };
                closeBid(value: _617.MsgCloseBid): {
                    typeUrl: string;
                    value: unknown;
                };
                withdrawLease(value: _619.MsgWithdrawLease): {
                    typeUrl: string;
                    value: unknown;
                };
                createLease(value: _619.MsgCreateLease): {
                    typeUrl: string;
                    value: unknown;
                };
                closeLease(value: _619.MsgCloseLease): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createBid(value: _617.MsgCreateBid): {
                    typeUrl: string;
                    value: _617.MsgCreateBid;
                };
                closeBid(value: _617.MsgCloseBid): {
                    typeUrl: string;
                    value: _617.MsgCloseBid;
                };
                withdrawLease(value: _619.MsgWithdrawLease): {
                    typeUrl: string;
                    value: _619.MsgWithdrawLease;
                };
                createLease(value: _619.MsgCreateLease): {
                    typeUrl: string;
                    value: _619.MsgCreateLease;
                };
                closeLease(value: _619.MsgCloseLease): {
                    typeUrl: string;
                    value: _619.MsgCloseLease;
                };
            };
            messages: {
                createBid(value: _617.MsgCreateBid): {
                    typeUrl: string;
                    value: _617.MsgCreateBid;
                };
                closeBid(value: _617.MsgCloseBid): {
                    typeUrl: string;
                    value: _617.MsgCloseBid;
                };
                withdrawLease(value: _619.MsgWithdrawLease): {
                    typeUrl: string;
                    value: _619.MsgWithdrawLease;
                };
                createLease(value: _619.MsgCreateLease): {
                    typeUrl: string;
                    value: _619.MsgCreateLease;
                };
                closeLease(value: _619.MsgCloseLease): {
                    typeUrl: string;
                    value: _619.MsgCloseLease;
                };
            };
            QueryOrdersRequest: {
                encode(message: _622.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryOrdersRequest;
                fromJSON(object: any): _622.QueryOrdersRequest;
                toJSON(message: _622.QueryOrdersRequest): unknown;
                fromPartial<I extends unknown>(object: I): _622.QueryOrdersRequest;
            };
            QueryOrdersResponse: {
                encode(message: _622.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryOrdersResponse;
                fromJSON(object: any): _622.QueryOrdersResponse;
                toJSON(message: _622.QueryOrdersResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _622.QueryOrdersResponse;
            };
            QueryOrderRequest: {
                encode(message: _622.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryOrderRequest;
                fromJSON(object: any): _622.QueryOrderRequest;
                toJSON(message: _622.QueryOrderRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _622.QueryOrderRequest;
            };
            QueryOrderResponse: {
                encode(message: _622.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryOrderResponse;
                fromJSON(object: any): _622.QueryOrderResponse;
                toJSON(message: _622.QueryOrderResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _622.QueryOrderResponse;
            };
            QueryBidsRequest: {
                encode(message: _622.QueryBidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryBidsRequest;
                fromJSON(object: any): _622.QueryBidsRequest;
                toJSON(message: _622.QueryBidsRequest): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _622.QueryBidsRequest;
            };
            QueryBidsResponse: {
                encode(message: _622.QueryBidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryBidsResponse;
                fromJSON(object: any): _622.QueryBidsResponse;
                toJSON(message: _622.QueryBidsResponse): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _622.QueryBidsResponse;
            };
            QueryBidRequest: {
                encode(message: _622.QueryBidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryBidRequest;
                fromJSON(object: any): _622.QueryBidRequest;
                toJSON(message: _622.QueryBidRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _622.QueryBidRequest;
            };
            QueryBidResponse: {
                encode(message: _622.QueryBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryBidResponse;
                fromJSON(object: any): _622.QueryBidResponse;
                toJSON(message: _622.QueryBidResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _622.QueryBidResponse;
            };
            QueryLeasesRequest: {
                encode(message: _622.QueryLeasesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryLeasesRequest;
                fromJSON(object: any): _622.QueryLeasesRequest;
                toJSON(message: _622.QueryLeasesRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _622.QueryLeasesRequest;
            };
            QueryLeasesResponse: {
                encode(message: _622.QueryLeasesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryLeasesResponse;
                fromJSON(object: any): _622.QueryLeasesResponse;
                toJSON(message: _622.QueryLeasesResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _622.QueryLeasesResponse;
            };
            QueryLeaseRequest: {
                encode(message: _622.QueryLeaseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryLeaseRequest;
                fromJSON(object: any): _622.QueryLeaseRequest;
                toJSON(message: _622.QueryLeaseRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _622.QueryLeaseRequest;
            };
            QueryLeaseResponse: {
                encode(message: _622.QueryLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _622.QueryLeaseResponse;
                fromJSON(object: any): _622.QueryLeaseResponse;
                toJSON(message: _622.QueryLeaseResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _622.QueryLeaseResponse;
            };
            Params: {
                encode(message: _621.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _621.Params;
                fromJSON(object: any): _621.Params;
                toJSON(message: _621.Params): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _621.Params;
            };
            order_StateFromJSON(object: any): _620.Order_State;
            order_StateToJSON(object: _620.Order_State): string;
            OrderID: {
                encode(message: _620.OrderID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.OrderID;
                fromJSON(object: any): _620.OrderID;
                toJSON(message: _620.OrderID): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _620.OrderID;
            };
            Order: {
                encode(message: _620.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.Order;
                fromJSON(object: any): _620.Order;
                toJSON(message: _620.Order): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _620.Order;
            };
            Order_State: typeof _620.Order_State;
            OrderFilters: {
                encode(message: _620.OrderFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _620.OrderFilters;
                fromJSON(object: any): _620.OrderFilters;
                toJSON(message: _620.OrderFilters): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _620.OrderFilters;
            };
            lease_StateFromJSON(object: any): _619.Lease_State;
            lease_StateToJSON(object: _619.Lease_State): string;
            LeaseID: {
                encode(message: _619.LeaseID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.LeaseID;
                fromJSON(object: any): _619.LeaseID;
                toJSON(message: _619.LeaseID): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _619.LeaseID;
            };
            Lease: {
                encode(message: _619.Lease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.Lease;
                fromJSON(object: any): _619.Lease;
                toJSON(message: _619.Lease): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _619.Lease;
            };
            Lease_State: typeof _619.Lease_State;
            LeaseFilters: {
                encode(message: _619.LeaseFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.LeaseFilters;
                fromJSON(object: any): _619.LeaseFilters;
                toJSON(message: _619.LeaseFilters): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _619.LeaseFilters;
            };
            MsgCreateLease: {
                encode(message: _619.MsgCreateLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.MsgCreateLease;
                fromJSON(object: any): _619.MsgCreateLease;
                toJSON(message: _619.MsgCreateLease): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _619.MsgCreateLease;
            };
            MsgCreateLeaseResponse: {
                encode(_: _619.MsgCreateLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.MsgCreateLeaseResponse;
                fromJSON(_: any): _619.MsgCreateLeaseResponse;
                toJSON(_: _619.MsgCreateLeaseResponse): unknown;
                fromPartial<I_20 extends unknown>(_: I_20): _619.MsgCreateLeaseResponse;
            };
            MsgWithdrawLease: {
                encode(message: _619.MsgWithdrawLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.MsgWithdrawLease;
                fromJSON(object: any): _619.MsgWithdrawLease;
                toJSON(message: _619.MsgWithdrawLease): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _619.MsgWithdrawLease;
            };
            MsgWithdrawLeaseResponse: {
                encode(_: _619.MsgWithdrawLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.MsgWithdrawLeaseResponse;
                fromJSON(_: any): _619.MsgWithdrawLeaseResponse;
                toJSON(_: _619.MsgWithdrawLeaseResponse): unknown;
                fromPartial<I_22 extends unknown>(_: I_22): _619.MsgWithdrawLeaseResponse;
            };
            MsgCloseLease: {
                encode(message: _619.MsgCloseLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.MsgCloseLease;
                fromJSON(object: any): _619.MsgCloseLease;
                toJSON(message: _619.MsgCloseLease): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _619.MsgCloseLease;
            };
            MsgCloseLeaseResponse: {
                encode(_: _619.MsgCloseLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _619.MsgCloseLeaseResponse;
                fromJSON(_: any): _619.MsgCloseLeaseResponse;
                toJSON(_: _619.MsgCloseLeaseResponse): unknown;
                fromPartial<I_24 extends unknown>(_: I_24): _619.MsgCloseLeaseResponse;
            };
            GenesisState: {
                encode(message: _618.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _618.GenesisState;
                fromJSON(object: any): _618.GenesisState;
                toJSON(message: _618.GenesisState): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _618.GenesisState;
            };
            bid_StateFromJSON(object: any): _617.Bid_State;
            bid_StateToJSON(object: _617.Bid_State): string;
            MsgCreateBid: {
                encode(message: _617.MsgCreateBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.MsgCreateBid;
                fromJSON(object: any): _617.MsgCreateBid;
                toJSON(message: _617.MsgCreateBid): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _617.MsgCreateBid;
            };
            MsgCreateBidResponse: {
                encode(_: _617.MsgCreateBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.MsgCreateBidResponse;
                fromJSON(_: any): _617.MsgCreateBidResponse;
                toJSON(_: _617.MsgCreateBidResponse): unknown;
                fromPartial<I_27 extends unknown>(_: I_27): _617.MsgCreateBidResponse;
            };
            MsgCloseBid: {
                encode(message: _617.MsgCloseBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.MsgCloseBid;
                fromJSON(object: any): _617.MsgCloseBid;
                toJSON(message: _617.MsgCloseBid): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _617.MsgCloseBid;
            };
            MsgCloseBidResponse: {
                encode(_: _617.MsgCloseBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.MsgCloseBidResponse;
                fromJSON(_: any): _617.MsgCloseBidResponse;
                toJSON(_: _617.MsgCloseBidResponse): unknown;
                fromPartial<I_29 extends unknown>(_: I_29): _617.MsgCloseBidResponse;
            };
            BidID: {
                encode(message: _617.BidID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.BidID;
                fromJSON(object: any): _617.BidID;
                toJSON(message: _617.BidID): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _617.BidID;
            };
            Bid: {
                encode(message: _617.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.Bid;
                fromJSON(object: any): _617.Bid;
                toJSON(message: _617.Bid): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _617.Bid;
            };
            Bid_State: typeof _617.Bid_State;
            BidFilters: {
                encode(message: _617.BidFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _617.BidFilters;
                fromJSON(object: any): _617.BidFilters;
                toJSON(message: _617.BidFilters): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _617.BidFilters;
            };
        };
    }
    namespace provider {
        const v1beta1: {
            ProviderInfo: {
                encode(message: _632.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.ProviderInfo;
                fromJSON(object: any): _632.ProviderInfo;
                toJSON(message: _632.ProviderInfo): unknown;
                fromPartial<I extends unknown>(object: I): _632.ProviderInfo;
            };
            MsgCreateProvider: {
                encode(message: _632.MsgCreateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.MsgCreateProvider;
                fromJSON(object: any): _632.MsgCreateProvider;
                toJSON(message: _632.MsgCreateProvider): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _632.MsgCreateProvider;
            };
            MsgCreateProviderResponse: {
                encode(_: _632.MsgCreateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.MsgCreateProviderResponse;
                fromJSON(_: any): _632.MsgCreateProviderResponse;
                toJSON(_: _632.MsgCreateProviderResponse): unknown;
                fromPartial<I_2 extends unknown>(_: I_2): _632.MsgCreateProviderResponse;
            };
            MsgUpdateProvider: {
                encode(message: _632.MsgUpdateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.MsgUpdateProvider;
                fromJSON(object: any): _632.MsgUpdateProvider;
                toJSON(message: _632.MsgUpdateProvider): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _632.MsgUpdateProvider;
            };
            MsgUpdateProviderResponse: {
                encode(_: _632.MsgUpdateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.MsgUpdateProviderResponse;
                fromJSON(_: any): _632.MsgUpdateProviderResponse;
                toJSON(_: _632.MsgUpdateProviderResponse): unknown;
                fromPartial<I_4 extends unknown>(_: I_4): _632.MsgUpdateProviderResponse;
            };
            MsgDeleteProvider: {
                encode(message: _632.MsgDeleteProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.MsgDeleteProvider;
                fromJSON(object: any): _632.MsgDeleteProvider;
                toJSON(message: _632.MsgDeleteProvider): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _632.MsgDeleteProvider;
            };
            MsgDeleteProviderResponse: {
                encode(_: _632.MsgDeleteProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.MsgDeleteProviderResponse;
                fromJSON(_: any): _632.MsgDeleteProviderResponse;
                toJSON(_: _632.MsgDeleteProviderResponse): unknown;
                fromPartial<I_6 extends unknown>(_: I_6): _632.MsgDeleteProviderResponse;
            };
            Provider: {
                encode(message: _632.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _632.Provider;
                fromJSON(object: any): _632.Provider;
                toJSON(message: _632.Provider): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _632.Provider;
            };
            MsgClientImpl: typeof _632.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.provider.v1beta1.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _632.MsgCreateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _632.MsgCreateProvider;
                };
                "/akash.provider.v1beta1.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _632.MsgUpdateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _632.MsgUpdateProvider;
                };
                "/akash.provider.v1beta1.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: ({ owner }: _632.MsgDeleteProvider) => {
                        owner: string;
                    };
                    fromAmino: ({ owner }: {
                        owner: string;
                    }) => _632.MsgDeleteProvider;
                };
            };
            encoded: {
                createProvider(value: _632.MsgCreateProvider): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateProvider(value: _632.MsgUpdateProvider): {
                    type_url: string;
                    value: Uint8Array;
                };
                deleteProvider(value: _632.MsgDeleteProvider): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createProvider(value: any): {
                    typeUrl: string;
                    value: _632.MsgCreateProvider;
                };
                updateProvider(value: any): {
                    typeUrl: string;
                    value: _632.MsgUpdateProvider;
                };
                deleteProvider(value: any): {
                    typeUrl: string;
                    value: _632.MsgDeleteProvider;
                };
            };
            toJSON: {
                createProvider(value: _632.MsgCreateProvider): {
                    typeUrl: string;
                    value: unknown;
                };
                updateProvider(value: _632.MsgUpdateProvider): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteProvider(value: _632.MsgDeleteProvider): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createProvider(value: _632.MsgCreateProvider): {
                    typeUrl: string;
                    value: _632.MsgCreateProvider;
                };
                updateProvider(value: _632.MsgUpdateProvider): {
                    typeUrl: string;
                    value: _632.MsgUpdateProvider;
                };
                deleteProvider(value: _632.MsgDeleteProvider): {
                    typeUrl: string;
                    value: _632.MsgDeleteProvider;
                };
            };
            messages: {
                createProvider(value: _632.MsgCreateProvider): {
                    typeUrl: string;
                    value: _632.MsgCreateProvider;
                };
                updateProvider(value: _632.MsgUpdateProvider): {
                    typeUrl: string;
                    value: _632.MsgUpdateProvider;
                };
                deleteProvider(value: _632.MsgDeleteProvider): {
                    typeUrl: string;
                    value: _632.MsgDeleteProvider;
                };
            };
        };
        const v1beta2: {
            QueryProvidersRequest: {
                encode(message: _651.QueryProvidersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QueryProvidersRequest;
                fromJSON(object: any): _651.QueryProvidersRequest;
                toJSON(message: _651.QueryProvidersRequest): unknown;
                fromPartial<I extends unknown>(object: I): _651.QueryProvidersRequest;
            };
            QueryProvidersResponse: {
                encode(message: _651.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QueryProvidersResponse;
                fromJSON(object: any): _651.QueryProvidersResponse;
                toJSON(message: _651.QueryProvidersResponse): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _651.QueryProvidersResponse;
            };
            QueryProviderRequest: {
                encode(message: _651.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QueryProviderRequest;
                fromJSON(object: any): _651.QueryProviderRequest;
                toJSON(message: _651.QueryProviderRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _651.QueryProviderRequest;
            };
            QueryProviderResponse: {
                encode(message: _651.QueryProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _651.QueryProviderResponse;
                fromJSON(object: any): _651.QueryProviderResponse;
                toJSON(message: _651.QueryProviderResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _651.QueryProviderResponse;
            };
            ProviderInfo: {
                encode(message: _642.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.ProviderInfo;
                fromJSON(object: any): _642.ProviderInfo;
                toJSON(message: _642.ProviderInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _642.ProviderInfo;
            };
            MsgCreateProvider: {
                encode(message: _642.MsgCreateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgCreateProvider;
                fromJSON(object: any): _642.MsgCreateProvider;
                toJSON(message: _642.MsgCreateProvider): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _642.MsgCreateProvider;
            };
            MsgCreateProviderResponse: {
                encode(_: _642.MsgCreateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgCreateProviderResponse;
                fromJSON(_: any): _642.MsgCreateProviderResponse;
                toJSON(_: _642.MsgCreateProviderResponse): unknown;
                fromPartial<I_6 extends unknown>(_: I_6): _642.MsgCreateProviderResponse;
            };
            MsgUpdateProvider: {
                encode(message: _642.MsgUpdateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgUpdateProvider;
                fromJSON(object: any): _642.MsgUpdateProvider;
                toJSON(message: _642.MsgUpdateProvider): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _642.MsgUpdateProvider;
            };
            MsgUpdateProviderResponse: {
                encode(_: _642.MsgUpdateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgUpdateProviderResponse;
                fromJSON(_: any): _642.MsgUpdateProviderResponse;
                toJSON(_: _642.MsgUpdateProviderResponse): unknown;
                fromPartial<I_8 extends unknown>(_: I_8): _642.MsgUpdateProviderResponse;
            };
            MsgDeleteProvider: {
                encode(message: _642.MsgDeleteProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgDeleteProvider;
                fromJSON(object: any): _642.MsgDeleteProvider;
                toJSON(message: _642.MsgDeleteProvider): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _642.MsgDeleteProvider;
            };
            MsgDeleteProviderResponse: {
                encode(_: _642.MsgDeleteProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.MsgDeleteProviderResponse;
                fromJSON(_: any): _642.MsgDeleteProviderResponse;
                toJSON(_: _642.MsgDeleteProviderResponse): unknown;
                fromPartial<I_10 extends unknown>(_: I_10): _642.MsgDeleteProviderResponse;
            };
            Provider: {
                encode(message: _642.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.Provider;
                fromJSON(object: any): _642.Provider;
                toJSON(message: _642.Provider): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _642.Provider;
            };
            MsgClientImpl: typeof _642.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/akash.provider.v1beta2.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _642.MsgCreateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _642.MsgCreateProvider;
                };
                "/akash.provider.v1beta2.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _642.MsgUpdateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _642.MsgUpdateProvider;
                };
                "/akash.provider.v1beta2.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: ({ owner }: _642.MsgDeleteProvider) => {
                        owner: string;
                    };
                    fromAmino: ({ owner }: {
                        owner: string;
                    }) => _642.MsgDeleteProvider;
                };
            };
            encoded: {
                createProvider(value: _642.MsgCreateProvider): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateProvider(value: _642.MsgUpdateProvider): {
                    type_url: string;
                    value: Uint8Array;
                };
                deleteProvider(value: _642.MsgDeleteProvider): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                createProvider(value: any): {
                    typeUrl: string;
                    value: _642.MsgCreateProvider;
                };
                updateProvider(value: any): {
                    typeUrl: string;
                    value: _642.MsgUpdateProvider;
                };
                deleteProvider(value: any): {
                    typeUrl: string;
                    value: _642.MsgDeleteProvider;
                };
            };
            toJSON: {
                createProvider(value: _642.MsgCreateProvider): {
                    typeUrl: string;
                    value: unknown;
                };
                updateProvider(value: _642.MsgUpdateProvider): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteProvider(value: _642.MsgDeleteProvider): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                createProvider(value: _642.MsgCreateProvider): {
                    typeUrl: string;
                    value: _642.MsgCreateProvider;
                };
                updateProvider(value: _642.MsgUpdateProvider): {
                    typeUrl: string;
                    value: _642.MsgUpdateProvider;
                };
                deleteProvider(value: _642.MsgDeleteProvider): {
                    typeUrl: string;
                    value: _642.MsgDeleteProvider;
                };
            };
            messages: {
                createProvider(value: _642.MsgCreateProvider): {
                    typeUrl: string;
                    value: _642.MsgCreateProvider;
                };
                updateProvider(value: _642.MsgUpdateProvider): {
                    typeUrl: string;
                    value: _642.MsgUpdateProvider;
                };
                deleteProvider(value: _642.MsgDeleteProvider): {
                    typeUrl: string;
                    value: _642.MsgDeleteProvider;
                };
            };
            GenesisState: {
                encode(message: _641.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.GenesisState;
                fromJSON(object: any): _641.GenesisState;
                toJSON(message: _641.GenesisState): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _641.GenesisState;
            };
        };
    }
}
