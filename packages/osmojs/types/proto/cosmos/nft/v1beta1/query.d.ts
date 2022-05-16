import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
    classId: string;
    owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
    amount: Long;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    classId: string;
    id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
    classId: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    amount: Long;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
    classId: string;
    owner: string;
    pagination: PageRequest;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
    nfts: NFT[];
    pagination: PageResponse;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    classId: string;
    id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    nft: NFT;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
    classId: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
    class: Class;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
    classes: Class[];
    pagination: PageResponse;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial<I extends {
        classId?: string;
        owner?: string;
    } & {
        classId?: string;
        owner?: string;
    } & Record<Exclude<keyof I, keyof QueryBalanceRequest>, never>>(object: I): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial<I extends {
        amount?: any;
    } & {
        amount?: any;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): QueryBalanceResponse;
};
export declare const QueryOwnerRequest: {
    encode(message: QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest;
    fromJSON(object: any): QueryOwnerRequest;
    toJSON(message: QueryOwnerRequest): unknown;
    fromPartial<I extends {
        classId?: string;
        id?: string;
    } & {
        classId?: string;
        id?: string;
    } & Record<Exclude<keyof I, keyof QueryOwnerRequest>, never>>(object: I): QueryOwnerRequest;
};
export declare const QueryOwnerResponse: {
    encode(message: QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse;
    fromJSON(object: any): QueryOwnerResponse;
    toJSON(message: QueryOwnerResponse): unknown;
    fromPartial<I extends {
        owner?: string;
    } & {
        owner?: string;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): QueryOwnerResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial<I extends {
        classId?: string;
    } & {
        classId?: string;
    } & Record<Exclude<keyof I, "classId">, never>>(object: I): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial<I extends {
        amount?: any;
    } & {
        amount?: any;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): QuerySupplyResponse;
};
export declare const QueryNFTsRequest: {
    encode(message: QueryNFTsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest;
    fromJSON(object: any): QueryNFTsRequest;
    toJSON(message: QueryNFTsRequest): unknown;
    fromPartial<I extends {
        classId?: string;
        owner?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        classId?: string;
        owner?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryNFTsRequest>, never>>(object: I): QueryNFTsRequest;
};
export declare const QueryNFTsResponse: {
    encode(message: QueryNFTsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse;
    fromJSON(object: any): QueryNFTsResponse;
    toJSON(message: QueryNFTsResponse): unknown;
    fromPartial<I extends {
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        nfts?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["nfts"][number]["data"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["nfts"][number], keyof NFT>, never>)[] & Record<Exclude<keyof I["nfts"], keyof {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryNFTsResponse>, never>>(object: I): QueryNFTsResponse;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
    fromJSON(object: any): QueryNFTRequest;
    toJSON(message: QueryNFTRequest): unknown;
    fromPartial<I extends {
        classId?: string;
        id?: string;
    } & {
        classId?: string;
        id?: string;
    } & Record<Exclude<keyof I, keyof QueryNFTRequest>, never>>(object: I): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
    fromJSON(object: any): QueryNFTResponse;
    toJSON(message: QueryNFTResponse): unknown;
    fromPartial<I extends {
        nft?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        nft?: {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            classId?: string;
            id?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["nft"]["data"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["nft"], keyof NFT>, never>;
    } & Record<Exclude<keyof I, "nft">, never>>(object: I): QueryNFTResponse;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    fromPartial<I extends {
        classId?: string;
    } & {
        classId?: string;
    } & Record<Exclude<keyof I, "classId">, never>>(object: I): QueryClassRequest;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    fromPartial<I extends {
        class?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        class?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["class"]["data"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["class"], keyof Class>, never>;
    } & Record<Exclude<keyof I, "class">, never>>(object: I): QueryClassResponse;
};
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial<I extends {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        classes?: {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["classes"][number]["data"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["classes"][number], keyof Class>, never>)[] & Record<Exclude<keyof I["classes"], keyof {
            id?: string;
            name?: string;
            symbol?: string;
            description?: string;
            uri?: string;
            uriHash?: string;
            data?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryClassesResponse>, never>>(object: I): QueryClassesResponse;
};
