import * as _1172 from "./compute/v1beta1/genesis";
import * as _1174 from "./compute/v1beta1/msg";
import * as _1176 from "./compute/v1beta1/query";
import * as _1178 from "./compute/v1beta1/types";
import * as _1180 from "./registration/v1beta1/genesis";
import * as _1182 from "./registration/v1beta1/msg";
import * as _1184 from "./registration/v1beta1/query";
import * as _1186 from "./registration/v1beta1/types";
import * as _1188 from "./registration/v1beta1/remote_attestation/types";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _1178.AccessType;
            accessTypeToJSON(object: _1178.AccessType): string;
            AccessType: typeof _1178.AccessType;
            AccessTypeParam: {
                encode(message: _1178.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1178.AccessTypeParam;
                fromJSON(object: any): _1178.AccessTypeParam;
                toJSON(message: _1178.AccessTypeParam): unknown;
                fromPartial<I extends {
                    value?: _1178.AccessType;
                } & {
                    value?: _1178.AccessType;
                } & Record<Exclude<keyof I, "value">, never>>(object: I): _1178.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _1178.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1178.CodeInfo;
                fromJSON(object: any): _1178.CodeInfo;
                toJSON(message: _1178.CodeInfo): unknown;
                fromPartial<I_1 extends {
                    codeHash?: Uint8Array;
                    creator?: Uint8Array;
                    source?: string;
                    builder?: string;
                } & {
                    codeHash?: Uint8Array;
                    creator?: Uint8Array;
                    source?: string;
                    builder?: string;
                } & Record<Exclude<keyof I_1, keyof _1178.CodeInfo>, never>>(object: I_1): _1178.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _1178.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1178.ContractCustomInfo;
                fromJSON(object: any): _1178.ContractCustomInfo;
                toJSON(message: _1178.ContractCustomInfo): unknown;
                fromPartial<I_2 extends {
                    enclaveKey?: Uint8Array;
                    label?: string;
                } & {
                    enclaveKey?: Uint8Array;
                    label?: string;
                } & Record<Exclude<keyof I_2, keyof _1178.ContractCustomInfo>, never>>(object: I_2): _1178.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _1178.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1178.ContractInfo;
                fromJSON(object: any): _1178.ContractInfo;
                toJSON(message: _1178.ContractInfo): unknown;
                fromPartial<I_3 extends {
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
                    } & Record<Exclude<keyof I_3["created"], keyof _1178.AbsoluteTxPosition>, never>;
                } & Record<Exclude<keyof I_3, keyof _1178.ContractInfo>, never>>(object: I_3): _1178.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _1178.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1178.AbsoluteTxPosition;
                fromJSON(object: any): _1178.AbsoluteTxPosition;
                toJSON(message: _1178.AbsoluteTxPosition): unknown;
                fromPartial<I_4 extends {
                    blockHeight?: string;
                    txIndex?: string;
                } & {
                    blockHeight?: string;
                    txIndex?: string;
                } & Record<Exclude<keyof I_4, keyof _1178.AbsoluteTxPosition>, never>>(object: I_4): _1178.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _1178.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1178.Model;
                fromJSON(object: any): _1178.Model;
                toJSON(message: _1178.Model): unknown;
                fromPartial<I_5 extends {
                    Key?: Uint8Array;
                    Value?: Uint8Array;
                } & {
                    Key?: Uint8Array;
                    Value?: Uint8Array;
                } & Record<Exclude<keyof I_5, keyof _1178.Model>, never>>(object: I_5): _1178.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _1176.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractInfoRequest;
                fromJSON(object: any): _1176.QueryContractInfoRequest;
                toJSON(message: _1176.QueryContractInfoRequest): unknown;
                fromPartial<I_6 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_6, "address">, never>>(object: I_6): _1176.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _1176.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractInfoResponse;
                fromJSON(object: any): _1176.QueryContractInfoResponse;
                toJSON(message: _1176.QueryContractInfoResponse): unknown;
                fromPartial<I_7 extends {
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
                        } & Record<Exclude<keyof I_7["ContractInfo"]["created"], keyof _1178.AbsoluteTxPosition>, never>;
                    } & Record<Exclude<keyof I_7["ContractInfo"], keyof _1178.ContractInfo>, never>;
                } & Record<Exclude<keyof I_7, keyof _1176.QueryContractInfoResponse>, never>>(object: I_7): _1176.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _1176.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractHistoryRequest;
                fromJSON(object: any): _1176.QueryContractHistoryRequest;
                toJSON(message: _1176.QueryContractHistoryRequest): unknown;
                fromPartial<I_8 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_8, "address">, never>>(object: I_8): _1176.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _1176.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractsByCodeRequest;
                fromJSON(object: any): _1176.QueryContractsByCodeRequest;
                toJSON(message: _1176.QueryContractsByCodeRequest): unknown;
                fromPartial<I_9 extends {
                    codeId?: string;
                } & {
                    codeId?: string;
                } & Record<Exclude<keyof I_9, "codeId">, never>>(object: I_9): _1176.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _1176.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.ContractInfoWithAddress;
                fromJSON(object: any): _1176.ContractInfoWithAddress;
                toJSON(message: _1176.ContractInfoWithAddress): unknown;
                fromPartial<I_10 extends {
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
                        } & Record<Exclude<keyof I_10["ContractInfo"]["created"], keyof _1178.AbsoluteTxPosition>, never>;
                    } & Record<Exclude<keyof I_10["ContractInfo"], keyof _1178.ContractInfo>, never>;
                } & Record<Exclude<keyof I_10, keyof _1176.ContractInfoWithAddress>, never>>(object: I_10): _1176.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _1176.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractsByCodeResponse;
                fromJSON(object: any): _1176.QueryContractsByCodeResponse;
                toJSON(message: _1176.QueryContractsByCodeResponse): unknown;
                fromPartial<I_11 extends {
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
                            } & Record<Exclude<keyof I_11["contractInfos"][number]["ContractInfo"]["created"], keyof _1178.AbsoluteTxPosition>, never>;
                        } & Record<Exclude<keyof I_11["contractInfos"][number]["ContractInfo"], keyof _1178.ContractInfo>, never>;
                    } & Record<Exclude<keyof I_11["contractInfos"][number], keyof _1176.ContractInfoWithAddress>, never>)[] & Record<Exclude<keyof I_11["contractInfos"], keyof {
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
                } & Record<Exclude<keyof I_11, "contractInfos">, never>>(object: I_11): _1176.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _1176.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QuerySmartContractStateRequest;
                fromJSON(object: any): _1176.QuerySmartContractStateRequest;
                toJSON(message: _1176.QuerySmartContractStateRequest): unknown;
                fromPartial<I_12 extends {
                    address?: Uint8Array;
                    queryData?: Uint8Array;
                } & {
                    address?: Uint8Array;
                    queryData?: Uint8Array;
                } & Record<Exclude<keyof I_12, keyof _1176.QuerySmartContractStateRequest>, never>>(object: I_12): _1176.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _1176.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _1176.QueryContractAddressByLabelRequest;
                toJSON(message: _1176.QueryContractAddressByLabelRequest): unknown;
                fromPartial<I_13 extends {
                    label?: string;
                } & {
                    label?: string;
                } & Record<Exclude<keyof I_13, "label">, never>>(object: I_13): _1176.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _1176.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractKeyRequest;
                fromJSON(object: any): _1176.QueryContractKeyRequest;
                toJSON(message: _1176.QueryContractKeyRequest): unknown;
                fromPartial<I_14 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_14, "address">, never>>(object: I_14): _1176.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _1176.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractHashRequest;
                fromJSON(object: any): _1176.QueryContractHashRequest;
                toJSON(message: _1176.QueryContractHashRequest): unknown;
                fromPartial<I_15 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_15, "address">, never>>(object: I_15): _1176.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _1176.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QuerySmartContractStateResponse;
                fromJSON(object: any): _1176.QuerySmartContractStateResponse;
                toJSON(message: _1176.QuerySmartContractStateResponse): unknown;
                fromPartial<I_16 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_16, "data">, never>>(object: I_16): _1176.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _1176.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryCodeRequest;
                fromJSON(object: any): _1176.QueryCodeRequest;
                toJSON(message: _1176.QueryCodeRequest): unknown;
                fromPartial<I_17 extends {
                    codeId?: string;
                } & {
                    codeId?: string;
                } & Record<Exclude<keyof I_17, "codeId">, never>>(object: I_17): _1176.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _1176.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.CodeInfoResponse;
                fromJSON(object: any): _1176.CodeInfoResponse;
                toJSON(message: _1176.CodeInfoResponse): unknown;
                fromPartial<I_18 extends {
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
                } & Record<Exclude<keyof I_18, keyof _1176.CodeInfoResponse>, never>>(object: I_18): _1176.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _1176.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryCodeResponse;
                fromJSON(object: any): _1176.QueryCodeResponse;
                toJSON(message: _1176.QueryCodeResponse): unknown;
                fromPartial<I_19 extends {
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
                    } & Record<Exclude<keyof I_19["codeInfo"], keyof _1176.CodeInfoResponse>, never>;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_19, keyof _1176.QueryCodeResponse>, never>>(object: I_19): _1176.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _1176.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryCodesResponse;
                fromJSON(object: any): _1176.QueryCodesResponse;
                toJSON(message: _1176.QueryCodesResponse): unknown;
                fromPartial<I_20 extends {
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
                    } & Record<Exclude<keyof I_20["codeInfos"][number], keyof _1176.CodeInfoResponse>, never>)[] & Record<Exclude<keyof I_20["codeInfos"], keyof {
                        codeId?: string;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_20, "codeInfos">, never>>(object: I_20): _1176.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _1176.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _1176.QueryContractAddressByLabelResponse;
                toJSON(message: _1176.QueryContractAddressByLabelResponse): unknown;
                fromPartial<I_21 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_21, "address">, never>>(object: I_21): _1176.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _1176.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractKeyResponse;
                fromJSON(object: any): _1176.QueryContractKeyResponse;
                toJSON(message: _1176.QueryContractKeyResponse): unknown;
                fromPartial<I_22 extends {
                    key?: Uint8Array;
                } & {
                    key?: Uint8Array;
                } & Record<Exclude<keyof I_22, "key">, never>>(object: I_22): _1176.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _1176.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.QueryContractHashResponse;
                fromJSON(object: any): _1176.QueryContractHashResponse;
                toJSON(message: _1176.QueryContractHashResponse): unknown;
                fromPartial<I_23 extends {
                    codeHash?: Uint8Array;
                } & {
                    codeHash?: Uint8Array;
                } & Record<Exclude<keyof I_23, "codeHash">, never>>(object: I_23): _1176.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _1176.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1176.DecryptedAnswer;
                fromJSON(object: any): _1176.DecryptedAnswer;
                toJSON(message: _1176.DecryptedAnswer): unknown;
                fromPartial<I_24 extends {
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
                        } & Record<Exclude<keyof I_24["outputLogs"][number]["attributes"][number], keyof import("../cosmos/base/abci/v1beta1/abci").Attribute>, never>)[] & Record<Exclude<keyof I_24["outputLogs"][number]["attributes"], keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_24["outputLogs"][number], keyof import("../cosmos/base/abci/v1beta1/abci").StringEvent>, never>)[] & Record<Exclude<keyof I_24["outputLogs"], keyof {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }[]>, never>;
                    outputError?: Uint8Array;
                    plaintextError?: string;
                } & Record<Exclude<keyof I_24, keyof _1176.DecryptedAnswer>, never>>(object: I_24): _1176.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _1174.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1174.MsgStoreCode;
                fromJSON(object: any): _1174.MsgStoreCode;
                toJSON(message: _1174.MsgStoreCode): unknown;
                fromPartial<I_25 extends {
                    sender?: Uint8Array;
                    wasmByteCode?: Uint8Array;
                    source?: string;
                    builder?: string;
                } & {
                    sender?: Uint8Array;
                    wasmByteCode?: Uint8Array;
                    source?: string;
                    builder?: string;
                } & Record<Exclude<keyof I_25, keyof _1174.MsgStoreCode>, never>>(object: I_25): _1174.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _1174.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1174.MsgInstantiateContract;
                fromJSON(object: any): _1174.MsgInstantiateContract;
                toJSON(message: _1174.MsgInstantiateContract): unknown;
                fromPartial<I_26 extends {
                    sender?: Uint8Array;
                    callbackCodeHash?: string;
                    codeId?: string;
                    label?: string;
                    initMsg?: Uint8Array;
                    initFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    callbackSig?: Uint8Array;
                } & {
                    sender?: Uint8Array;
                    callbackCodeHash?: string;
                    codeId?: string;
                    label?: string;
                    initMsg?: Uint8Array;
                    initFunds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_26["initFunds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_26["initFunds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    callbackSig?: Uint8Array;
                } & Record<Exclude<keyof I_26, keyof _1174.MsgInstantiateContract>, never>>(object: I_26): _1174.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _1174.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1174.MsgExecuteContract;
                fromJSON(object: any): _1174.MsgExecuteContract;
                toJSON(message: _1174.MsgExecuteContract): unknown;
                fromPartial<I_27 extends {
                    sender?: Uint8Array;
                    contract?: Uint8Array;
                    msg?: Uint8Array;
                    callbackCodeHash?: string;
                    sentFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    callbackSig?: Uint8Array;
                } & {
                    sender?: Uint8Array;
                    contract?: Uint8Array;
                    msg?: Uint8Array;
                    callbackCodeHash?: string;
                    sentFunds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_27["sentFunds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_27["sentFunds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    callbackSig?: Uint8Array;
                } & Record<Exclude<keyof I_27, keyof _1174.MsgExecuteContract>, never>>(object: I_27): _1174.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _1172.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1172.GenesisState;
                fromJSON(object: any): _1172.GenesisState;
                toJSON(message: _1172.GenesisState): unknown;
                fromPartial<I_28 extends {
                    codes?: {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    }[];
                    contracts?: {
                        contractAddress?: Uint8Array;
                        contractInfo?: {
                            codeId?: string;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                        };
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[];
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        };
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string;
                    }[];
                } & {
                    codes?: {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    }[] & ({
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    } & {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        } & {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        } & Record<Exclude<keyof I_28["codes"][number]["codeInfo"], keyof _1178.CodeInfo>, never>;
                        codeBytes?: Uint8Array;
                    } & Record<Exclude<keyof I_28["codes"][number], keyof _1172.Code>, never>)[] & Record<Exclude<keyof I_28["codes"], keyof {
                        codeId?: string;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    }[]>, never>;
                    contracts?: {
                        contractAddress?: Uint8Array;
                        contractInfo?: {
                            codeId?: string;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                        };
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[];
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        };
                    }[] & ({
                        contractAddress?: Uint8Array;
                        contractInfo?: {
                            codeId?: string;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                        };
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[];
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        };
                    } & {
                        contractAddress?: Uint8Array;
                        contractInfo?: {
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
                            } & Record<Exclude<keyof I_28["contracts"][number]["contractInfo"]["created"], keyof _1178.AbsoluteTxPosition>, never>;
                        } & Record<Exclude<keyof I_28["contracts"][number]["contractInfo"], keyof _1178.ContractInfo>, never>;
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[] & ({
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        } & {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        } & Record<Exclude<keyof I_28["contracts"][number]["contractState"][number], keyof _1178.Model>, never>)[] & Record<Exclude<keyof I_28["contracts"][number]["contractState"], keyof {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[]>, never>;
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        } & {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        } & Record<Exclude<keyof I_28["contracts"][number]["contractCustomInfo"], keyof _1178.ContractCustomInfo>, never>;
                    } & Record<Exclude<keyof I_28["contracts"][number], keyof _1172.Contract>, never>)[] & Record<Exclude<keyof I_28["contracts"], keyof {
                        contractAddress?: Uint8Array;
                        contractInfo?: {
                            codeId?: string;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: string;
                                txIndex?: string;
                            };
                        };
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[];
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        };
                    }[]>, never>;
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string;
                    }[] & ({
                        idKey?: Uint8Array;
                        value?: string;
                    } & {
                        idKey?: Uint8Array;
                        value?: string;
                    } & Record<Exclude<keyof I_28["sequences"][number], keyof _1172.Sequence>, never>)[] & Record<Exclude<keyof I_28["sequences"], keyof {
                        idKey?: Uint8Array;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_28, keyof _1172.GenesisState>, never>>(object: I_28): _1172.GenesisState;
            };
            Code: {
                encode(message: _1172.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1172.Code;
                fromJSON(object: any): _1172.Code;
                toJSON(message: _1172.Code): unknown;
                fromPartial<I_29 extends {
                    codeId?: string;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    codeBytes?: Uint8Array;
                } & {
                    codeId?: string;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: Uint8Array;
                        source?: string;
                        builder?: string;
                    } & {
                        codeHash?: Uint8Array;
                        creator?: Uint8Array;
                        source?: string;
                        builder?: string;
                    } & Record<Exclude<keyof I_29["codeInfo"], keyof _1178.CodeInfo>, never>;
                    codeBytes?: Uint8Array;
                } & Record<Exclude<keyof I_29, keyof _1172.Code>, never>>(object: I_29): _1172.Code;
            };
            Contract: {
                encode(message: _1172.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1172.Contract;
                fromJSON(object: any): _1172.Contract;
                toJSON(message: _1172.Contract): unknown;
                fromPartial<I_30 extends {
                    contractAddress?: Uint8Array;
                    contractInfo?: {
                        codeId?: string;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: string;
                            txIndex?: string;
                        };
                    };
                    contractState?: {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    }[];
                    contractCustomInfo?: {
                        enclaveKey?: Uint8Array;
                        label?: string;
                    };
                } & {
                    contractAddress?: Uint8Array;
                    contractInfo?: {
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
                        } & Record<Exclude<keyof I_30["contractInfo"]["created"], keyof _1178.AbsoluteTxPosition>, never>;
                    } & Record<Exclude<keyof I_30["contractInfo"], keyof _1178.ContractInfo>, never>;
                    contractState?: {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    }[] & ({
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    } & {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    } & Record<Exclude<keyof I_30["contractState"][number], keyof _1178.Model>, never>)[] & Record<Exclude<keyof I_30["contractState"], keyof {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    }[]>, never>;
                    contractCustomInfo?: {
                        enclaveKey?: Uint8Array;
                        label?: string;
                    } & {
                        enclaveKey?: Uint8Array;
                        label?: string;
                    } & Record<Exclude<keyof I_30["contractCustomInfo"], keyof _1178.ContractCustomInfo>, never>;
                } & Record<Exclude<keyof I_30, keyof _1172.Contract>, never>>(object: I_30): _1172.Contract;
            };
            Sequence: {
                encode(message: _1172.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1172.Sequence;
                fromJSON(object: any): _1172.Sequence;
                toJSON(message: _1172.Sequence): unknown;
                fromPartial<I_31 extends {
                    idKey?: Uint8Array;
                    value?: string;
                } & {
                    idKey?: Uint8Array;
                    value?: string;
                } & Record<Exclude<keyof I_31, keyof _1172.Sequence>, never>>(object: I_31): _1172.Sequence;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _1186.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1186.SeedConfig;
                fromJSON(object: any): _1186.SeedConfig;
                toJSON(message: _1186.SeedConfig): unknown;
                fromPartial<I extends {
                    masterCert?: string;
                    encryptedKey?: string;
                } & {
                    masterCert?: string;
                    encryptedKey?: string;
                } & Record<Exclude<keyof I, keyof _1186.SeedConfig>, never>>(object: I): _1186.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _1186.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1186.RegistrationNodeInfo;
                fromJSON(object: any): _1186.RegistrationNodeInfo;
                toJSON(message: _1186.RegistrationNodeInfo): unknown;
                fromPartial<I_1 extends {
                    certificate?: Uint8Array;
                    encryptedSeed?: Uint8Array;
                } & {
                    certificate?: Uint8Array;
                    encryptedSeed?: Uint8Array;
                } & Record<Exclude<keyof I_1, keyof _1186.RegistrationNodeInfo>, never>>(object: I_1): _1186.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _1184.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1184.QueryEncryptedSeedRequest;
                fromJSON(object: any): _1184.QueryEncryptedSeedRequest;
                toJSON(message: _1184.QueryEncryptedSeedRequest): unknown;
                fromPartial<I_2 extends {
                    pubKey?: Uint8Array;
                } & {
                    pubKey?: Uint8Array;
                } & Record<Exclude<keyof I_2, "pubKey">, never>>(object: I_2): _1184.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _1184.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1184.QueryEncryptedSeedResponse;
                fromJSON(object: any): _1184.QueryEncryptedSeedResponse;
                toJSON(message: _1184.QueryEncryptedSeedResponse): unknown;
                fromPartial<I_3 extends {
                    encryptedSeed?: Uint8Array;
                } & {
                    encryptedSeed?: Uint8Array;
                } & Record<Exclude<keyof I_3, "encryptedSeed">, never>>(object: I_3): _1184.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _1182.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1182.RaAuthenticate;
                fromJSON(object: any): _1182.RaAuthenticate;
                toJSON(message: _1182.RaAuthenticate): unknown;
                fromPartial<I_4 extends {
                    sender?: Uint8Array;
                    certificate?: Uint8Array;
                } & {
                    sender?: Uint8Array;
                    certificate?: Uint8Array;
                } & Record<Exclude<keyof I_4, keyof _1182.RaAuthenticate>, never>>(object: I_4): _1182.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _1182.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1182.MasterCertificate;
                fromJSON(object: any): _1182.MasterCertificate;
                toJSON(message: _1182.MasterCertificate): unknown;
                fromPartial<I_5 extends {
                    bytes?: Uint8Array;
                } & {
                    bytes?: Uint8Array;
                } & Record<Exclude<keyof I_5, "bytes">, never>>(object: I_5): _1182.MasterCertificate;
            };
            Key: {
                encode(message: _1182.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1182.Key;
                fromJSON(object: any): _1182.Key;
                toJSON(message: _1182.Key): unknown;
                fromPartial<I_6 extends {
                    key?: Uint8Array;
                } & {
                    key?: Uint8Array;
                } & Record<Exclude<keyof I_6, "key">, never>>(object: I_6): _1182.Key;
            };
            GenesisState: {
                encode(message: _1180.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1180.GenesisState;
                fromJSON(object: any): _1180.GenesisState;
                toJSON(message: _1180.GenesisState): unknown;
                fromPartial<I_7 extends {
                    registration?: {
                        certificate?: Uint8Array;
                        encryptedSeed?: Uint8Array;
                    }[];
                    nodeExchMasterCertificate?: {
                        bytes?: Uint8Array;
                    };
                    ioMasterCertificate?: {
                        bytes?: Uint8Array;
                    };
                } & {
                    registration?: {
                        certificate?: Uint8Array;
                        encryptedSeed?: Uint8Array;
                    }[] & ({
                        certificate?: Uint8Array;
                        encryptedSeed?: Uint8Array;
                    } & {
                        certificate?: Uint8Array;
                        encryptedSeed?: Uint8Array;
                    } & Record<Exclude<keyof I_7["registration"][number], keyof _1186.RegistrationNodeInfo>, never>)[] & Record<Exclude<keyof I_7["registration"], keyof {
                        certificate?: Uint8Array;
                        encryptedSeed?: Uint8Array;
                    }[]>, never>;
                    nodeExchMasterCertificate?: {
                        bytes?: Uint8Array;
                    } & {
                        bytes?: Uint8Array;
                    } & Record<Exclude<keyof I_7["nodeExchMasterCertificate"], "bytes">, never>;
                    ioMasterCertificate?: {
                        bytes?: Uint8Array;
                    } & {
                        bytes?: Uint8Array;
                    } & Record<Exclude<keyof I_7["ioMasterCertificate"], "bytes">, never>;
                } & Record<Exclude<keyof I_7, keyof _1180.GenesisState>, never>>(object: I_7): _1180.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _1188.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1188.QuoteReport;
                    fromJSON(object: any): _1188.QuoteReport;
                    toJSON(message: _1188.QuoteReport): unknown;
                    fromPartial<I extends {
                        id?: string;
                        timestamp?: string;
                        version?: string;
                        isvEnclaveQuoteStatus?: string;
                        platformInfoBlob?: string;
                        isvEnclaveQuoteBody?: string;
                        advisoryIds?: string[];
                    } & {
                        id?: string;
                        timestamp?: string;
                        version?: string;
                        isvEnclaveQuoteStatus?: string;
                        platformInfoBlob?: string;
                        isvEnclaveQuoteBody?: string;
                        advisoryIds?: string[] & string[] & Record<Exclude<keyof I["advisoryIds"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I, keyof _1188.QuoteReport>, never>>(object: I): _1188.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _1188.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1188.QuoteReportBody;
                    fromJSON(object: any): _1188.QuoteReportBody;
                    toJSON(message: _1188.QuoteReportBody): unknown;
                    fromPartial<I_1 extends {
                        mrEnclave?: string;
                        mrSigner?: string;
                        reportData?: string;
                    } & {
                        mrEnclave?: string;
                        mrSigner?: string;
                        reportData?: string;
                    } & Record<Exclude<keyof I_1, keyof _1188.QuoteReportBody>, never>>(object: I_1): _1188.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _1188.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1188.QuoteReportData;
                    fromJSON(object: any): _1188.QuoteReportData;
                    toJSON(message: _1188.QuoteReportData): unknown;
                    fromPartial<I_2 extends {
                        version?: string;
                        signType?: string;
                        reportBody?: {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        };
                    } & {
                        version?: string;
                        signType?: string;
                        reportBody?: {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        } & {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        } & Record<Exclude<keyof I_2["reportBody"], keyof _1188.QuoteReportBody>, never>;
                    } & Record<Exclude<keyof I_2, keyof _1188.QuoteReportData>, never>>(object: I_2): _1188.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _1188.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1188.EndorsedAttestationReport;
                    fromJSON(object: any): _1188.EndorsedAttestationReport;
                    toJSON(message: _1188.EndorsedAttestationReport): unknown;
                    fromPartial<I_3 extends {
                        report?: Uint8Array;
                        signature?: Uint8Array;
                        signingCert?: Uint8Array;
                    } & {
                        report?: Uint8Array;
                        signature?: Uint8Array;
                        signingCert?: Uint8Array;
                    } & Record<Exclude<keyof I_3, keyof _1188.EndorsedAttestationReport>, never>>(object: I_3): _1188.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _1188.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1188.SGXEC256Signature;
                    fromJSON(object: any): _1188.SGXEC256Signature;
                    toJSON(message: _1188.SGXEC256Signature): unknown;
                    fromPartial<I_4 extends {
                        gx?: string;
                        gy?: string;
                    } & {
                        gx?: string;
                        gy?: string;
                    } & Record<Exclude<keyof I_4, keyof _1188.SGXEC256Signature>, never>>(object: I_4): _1188.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _1188.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1188.PlatformInfoBlob;
                    fromJSON(object: any): _1188.PlatformInfoBlob;
                    toJSON(message: _1188.PlatformInfoBlob): unknown;
                    fromPartial<I_5 extends {
                        sgxEpidGroupFlags?: number;
                        sgxTcbEvaluationFlags?: number;
                        pseEvaluationFlags?: number;
                        latestEquivalentTcbPsvn?: string;
                        latestPseIsvsvn?: string;
                        latestPsdaSvn?: string;
                        xeid?: number;
                        gid?: number;
                        sgxEc256SignatureT?: {
                            gx?: string;
                            gy?: string;
                        };
                    } & {
                        sgxEpidGroupFlags?: number;
                        sgxTcbEvaluationFlags?: number;
                        pseEvaluationFlags?: number;
                        latestEquivalentTcbPsvn?: string;
                        latestPseIsvsvn?: string;
                        latestPsdaSvn?: string;
                        xeid?: number;
                        gid?: number;
                        sgxEc256SignatureT?: {
                            gx?: string;
                            gy?: string;
                        } & {
                            gx?: string;
                            gy?: string;
                        } & Record<Exclude<keyof I_5["sgxEc256SignatureT"], keyof _1188.SGXEC256Signature>, never>;
                    } & Record<Exclude<keyof I_5, keyof _1188.PlatformInfoBlob>, never>>(object: I_5): _1188.PlatformInfoBlob;
                };
            };
        }
    }
}
