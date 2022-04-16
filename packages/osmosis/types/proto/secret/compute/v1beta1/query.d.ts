import * as _m0 from "protobufjs/minimal";
import { ContractInfo } from "../../../secret/compute/v1beta1/types";
import { StringEvent } from "../../../cosmos/base/abci/v1beta1/abci";
/** QueryContractInfoRequest is the request type for the Query/ContractInfo RPC method */
export interface QueryContractInfoRequest {
    /** address is the address of the contract to query */
    address: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponse {
    /** address is the address of the contract */
    address: Uint8Array;
    ContractInfo: ContractInfo;
}
export interface QueryContractHistoryRequest {
    /** address is the address of the contract to query */
    address: Uint8Array;
}
export interface QueryContractsByCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: string;
}
/** ContractInfoWithAddress adds the address (key) to the ContractInfo representation */
export interface ContractInfoWithAddress {
    address: Uint8Array;
    ContractInfo: ContractInfo;
}
export interface QueryContractsByCodeResponse {
    contractInfos: ContractInfoWithAddress[];
}
export interface QuerySmartContractStateRequest {
    /** address is the address of the contract */
    address: Uint8Array;
    queryData: Uint8Array;
}
export interface QueryContractAddressByLabelRequest {
    label: string;
}
export interface QueryContractKeyRequest {
    /** address is the address of the contract */
    address: Uint8Array;
}
export interface QueryContractHashRequest {
    /** address is the address of the contract */
    address: Uint8Array;
}
export interface QuerySmartContractStateResponse {
    data: Uint8Array;
}
export interface QueryCodeRequest {
    /** grpc-gateway_out does not support Go style CodID */
    codeId: string;
}
export interface CodeInfoResponse {
    /** id for legacy support */
    codeId: string;
    creator: Uint8Array;
    dataHash: Uint8Array;
    source: string;
    builder: string;
}
export interface QueryCodeResponse {
    codeInfo: CodeInfoResponse;
    data: Uint8Array;
}
export interface QueryCodesResponse {
    codeInfos: CodeInfoResponse[];
}
export interface QueryContractAddressByLabelResponse {
    /** address is the address of the contract */
    address: Uint8Array;
}
export interface QueryContractKeyResponse {
    /** address is the address of the contract */
    key: Uint8Array;
}
export interface QueryContractHashResponse {
    codeHash: Uint8Array;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */
export interface DecryptedAnswer {
    type: string;
    input: string;
    outputData: string;
    outputDataAsString: string;
    outputLogs: StringEvent[];
    outputError: Uint8Array;
    plaintextError: string;
}
export declare const QueryContractInfoRequest: {
    encode(message: QueryContractInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromJSON(object: any): QueryContractInfoRequest;
    toJSON(message: QueryContractInfoRequest): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryContractInfoRequest;
};
export declare const QueryContractInfoResponse: {
    encode(message: QueryContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromJSON(object: any): QueryContractInfoResponse;
    toJSON(message: QueryContractInfoResponse): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
        ContractInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
        };
    } & {
        address?: Uint8Array;
        ContractInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
        } & {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            } & {
                blockHeight?: string;
                txIndex?: string;
            } & Record<Exclude<keyof I["ContractInfo"]["created"], keyof import("../../../secret/compute/v1beta1/types").AbsoluteTxPosition>, never>;
        } & Record<Exclude<keyof I["ContractInfo"], keyof ContractInfo>, never>;
    } & Record<Exclude<keyof I, keyof QueryContractInfoResponse>, never>>(object: I): QueryContractInfoResponse;
};
export declare const QueryContractHistoryRequest: {
    encode(message: QueryContractHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryRequest;
    fromJSON(object: any): QueryContractHistoryRequest;
    toJSON(message: QueryContractHistoryRequest): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryContractHistoryRequest;
};
export declare const QueryContractsByCodeRequest: {
    encode(message: QueryContractsByCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest;
    fromJSON(object: any): QueryContractsByCodeRequest;
    toJSON(message: QueryContractsByCodeRequest): unknown;
    fromPartial<I extends {
        codeId?: string;
    } & {
        codeId?: string;
    } & Record<Exclude<keyof I, "codeId">, never>>(object: I): QueryContractsByCodeRequest;
};
export declare const ContractInfoWithAddress: {
    encode(message: ContractInfoWithAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoWithAddress;
    fromJSON(object: any): ContractInfoWithAddress;
    toJSON(message: ContractInfoWithAddress): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
        ContractInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
        };
    } & {
        address?: Uint8Array;
        ContractInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            };
        } & {
            codeId?: string;
            creator?: Uint8Array;
            label?: string;
            created?: {
                blockHeight?: string;
                txIndex?: string;
            } & {
                blockHeight?: string;
                txIndex?: string;
            } & Record<Exclude<keyof I["ContractInfo"]["created"], keyof import("../../../secret/compute/v1beta1/types").AbsoluteTxPosition>, never>;
        } & Record<Exclude<keyof I["ContractInfo"], keyof ContractInfo>, never>;
    } & Record<Exclude<keyof I, keyof ContractInfoWithAddress>, never>>(object: I): ContractInfoWithAddress;
};
export declare const QueryContractsByCodeResponse: {
    encode(message: QueryContractsByCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse;
    fromJSON(object: any): QueryContractsByCodeResponse;
    toJSON(message: QueryContractsByCodeResponse): unknown;
    fromPartial<I extends {
        contractInfos?: {
            address?: Uint8Array;
            ContractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
        }[];
    } & {
        contractInfos?: {
            address?: Uint8Array;
            ContractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
        }[] & ({
            address?: Uint8Array;
            ContractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
        } & {
            address?: Uint8Array;
            ContractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            } & {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                } & {
                    blockHeight?: string;
                    txIndex?: string;
                } & Record<Exclude<keyof I["contractInfos"][number]["ContractInfo"]["created"], keyof import("../../../secret/compute/v1beta1/types").AbsoluteTxPosition>, never>;
            } & Record<Exclude<keyof I["contractInfos"][number]["ContractInfo"], keyof ContractInfo>, never>;
        } & Record<Exclude<keyof I["contractInfos"][number], keyof ContractInfoWithAddress>, never>)[] & Record<Exclude<keyof I["contractInfos"], keyof {
            address?: Uint8Array;
            ContractInfo?: {
                codeId?: string;
                creator?: Uint8Array;
                label?: string;
                created?: {
                    blockHeight?: string;
                    txIndex?: string;
                };
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, "contractInfos">, never>>(object: I): QueryContractsByCodeResponse;
};
export declare const QuerySmartContractStateRequest: {
    encode(message: QuerySmartContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateRequest;
    fromJSON(object: any): QuerySmartContractStateRequest;
    toJSON(message: QuerySmartContractStateRequest): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
        queryData?: Uint8Array;
    } & {
        address?: Uint8Array;
        queryData?: Uint8Array;
    } & Record<Exclude<keyof I, keyof QuerySmartContractStateRequest>, never>>(object: I): QuerySmartContractStateRequest;
};
export declare const QueryContractAddressByLabelRequest: {
    encode(message: QueryContractAddressByLabelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressByLabelRequest;
    fromJSON(object: any): QueryContractAddressByLabelRequest;
    toJSON(message: QueryContractAddressByLabelRequest): unknown;
    fromPartial<I extends {
        label?: string;
    } & {
        label?: string;
    } & Record<Exclude<keyof I, "label">, never>>(object: I): QueryContractAddressByLabelRequest;
};
export declare const QueryContractKeyRequest: {
    encode(message: QueryContractKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractKeyRequest;
    fromJSON(object: any): QueryContractKeyRequest;
    toJSON(message: QueryContractKeyRequest): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryContractKeyRequest;
};
export declare const QueryContractHashRequest: {
    encode(message: QueryContractHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHashRequest;
    fromJSON(object: any): QueryContractHashRequest;
    toJSON(message: QueryContractHashRequest): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryContractHashRequest;
};
export declare const QuerySmartContractStateResponse: {
    encode(message: QuerySmartContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateResponse;
    fromJSON(object: any): QuerySmartContractStateResponse;
    toJSON(message: QuerySmartContractStateResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array;
    } & {
        data?: Uint8Array;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): QuerySmartContractStateResponse;
};
export declare const QueryCodeRequest: {
    encode(message: QueryCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest;
    fromJSON(object: any): QueryCodeRequest;
    toJSON(message: QueryCodeRequest): unknown;
    fromPartial<I extends {
        codeId?: string;
    } & {
        codeId?: string;
    } & Record<Exclude<keyof I, "codeId">, never>>(object: I): QueryCodeRequest;
};
export declare const CodeInfoResponse: {
    encode(message: CodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse;
    fromJSON(object: any): CodeInfoResponse;
    toJSON(message: CodeInfoResponse): unknown;
    fromPartial<I extends {
        codeId?: string;
        creator?: Uint8Array;
        dataHash?: Uint8Array;
        source?: string;
        builder?: string;
    } & {
        codeId?: string;
        creator?: Uint8Array;
        dataHash?: Uint8Array;
        source?: string;
        builder?: string;
    } & Record<Exclude<keyof I, keyof CodeInfoResponse>, never>>(object: I): CodeInfoResponse;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial<I extends {
        codeInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        };
        data?: Uint8Array;
    } & {
        codeInfo?: {
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        } & {
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        } & Record<Exclude<keyof I["codeInfo"], keyof CodeInfoResponse>, never>;
        data?: Uint8Array;
    } & Record<Exclude<keyof I, keyof QueryCodeResponse>, never>>(object: I): QueryCodeResponse;
};
export declare const QueryCodesResponse: {
    encode(message: QueryCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse;
    fromJSON(object: any): QueryCodesResponse;
    toJSON(message: QueryCodesResponse): unknown;
    fromPartial<I extends {
        codeInfos?: {
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        }[];
    } & {
        codeInfos?: {
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        }[] & ({
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        } & {
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        } & Record<Exclude<keyof I["codeInfos"][number], keyof CodeInfoResponse>, never>)[] & Record<Exclude<keyof I["codeInfos"], keyof {
            codeId?: string;
            creator?: Uint8Array;
            dataHash?: Uint8Array;
            source?: string;
            builder?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "codeInfos">, never>>(object: I): QueryCodesResponse;
};
export declare const QueryContractAddressByLabelResponse: {
    encode(message: QueryContractAddressByLabelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressByLabelResponse;
    fromJSON(object: any): QueryContractAddressByLabelResponse;
    toJSON(message: QueryContractAddressByLabelResponse): unknown;
    fromPartial<I extends {
        address?: Uint8Array;
    } & {
        address?: Uint8Array;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryContractAddressByLabelResponse;
};
export declare const QueryContractKeyResponse: {
    encode(message: QueryContractKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractKeyResponse;
    fromJSON(object: any): QueryContractKeyResponse;
    toJSON(message: QueryContractKeyResponse): unknown;
    fromPartial<I extends {
        key?: Uint8Array;
    } & {
        key?: Uint8Array;
    } & Record<Exclude<keyof I, "key">, never>>(object: I): QueryContractKeyResponse;
};
export declare const QueryContractHashResponse: {
    encode(message: QueryContractHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHashResponse;
    fromJSON(object: any): QueryContractHashResponse;
    toJSON(message: QueryContractHashResponse): unknown;
    fromPartial<I extends {
        codeHash?: Uint8Array;
    } & {
        codeHash?: Uint8Array;
    } & Record<Exclude<keyof I, "codeHash">, never>>(object: I): QueryContractHashResponse;
};
export declare const DecryptedAnswer: {
    encode(message: DecryptedAnswer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecryptedAnswer;
    fromJSON(object: any): DecryptedAnswer;
    toJSON(message: DecryptedAnswer): unknown;
    fromPartial<I extends {
        type?: string;
        input?: string;
        outputData?: string;
        outputDataAsString?: string;
        outputLogs?: {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        }[];
        outputError?: Uint8Array;
        plaintextError?: string;
    } & {
        type?: string;
        input?: string;
        outputData?: string;
        outputDataAsString?: string;
        outputLogs?: {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        }[] & ({
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        } & {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[] & ({
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I["outputLogs"][number]["attributes"][number], keyof import("../../../cosmos/base/abci/v1beta1/abci").Attribute>, never>)[] & Record<Exclude<keyof I["outputLogs"][number]["attributes"], keyof {
                key?: string;
                value?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["outputLogs"][number], keyof StringEvent>, never>)[] & Record<Exclude<keyof I["outputLogs"], keyof {
            type?: string;
            attributes?: {
                key?: string;
                value?: string;
            }[];
        }[]>, never>;
        outputError?: Uint8Array;
        plaintextError?: string;
    } & Record<Exclude<keyof I, keyof DecryptedAnswer>, never>>(object: I): DecryptedAnswer;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
