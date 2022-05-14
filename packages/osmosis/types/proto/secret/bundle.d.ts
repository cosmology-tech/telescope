import * as _214 from "./compute/v1beta1/genesis";
import * as _215 from "./compute/v1beta1/msg";
import * as _216 from "./compute/v1beta1/query";
import * as _217 from "./compute/v1beta1/types";
import * as _218 from "./registration/v1beta1/genesis";
import * as _219 from "./registration/v1beta1/msg";
import * as _220 from "./registration/v1beta1/query";
import * as _221 from "./registration/v1beta1/types";
import * as _222 from "./registration/v1beta1/remote_attestation/types";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _217.AccessType;
            accessTypeToJSON(object: _217.AccessType): string;
            AccessType: typeof _217.AccessType;
            AccessTypeParam: {
                encode(message: _217.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.AccessTypeParam;
                fromJSON(object: any): _217.AccessTypeParam;
                toJSON(message: _217.AccessTypeParam): unknown;
                fromPartial<I extends {
                    value?: _217.AccessType;
                } & {
                    value?: _217.AccessType;
                } & Record<Exclude<keyof I, "value">, never>>(object: I): _217.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _217.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.CodeInfo;
                fromJSON(object: any): _217.CodeInfo;
                toJSON(message: _217.CodeInfo): unknown;
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
                } & Record<Exclude<keyof I_1, keyof _217.CodeInfo>, never>>(object: I_1): _217.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _217.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.ContractCustomInfo;
                fromJSON(object: any): _217.ContractCustomInfo;
                toJSON(message: _217.ContractCustomInfo): unknown;
                fromPartial<I_2 extends {
                    enclaveKey?: Uint8Array;
                    label?: string;
                } & {
                    enclaveKey?: Uint8Array;
                    label?: string;
                } & Record<Exclude<keyof I_2, keyof _217.ContractCustomInfo>, never>>(object: I_2): _217.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _217.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.ContractInfo;
                fromJSON(object: any): _217.ContractInfo;
                toJSON(message: _217.ContractInfo): unknown;
                fromPartial<I_3 extends {
                    codeId?: any;
                    creator?: Uint8Array;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                } & {
                    codeId?: any;
                    creator?: Uint8Array;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    } & {
                        blockHeight?: any;
                        txIndex?: any;
                    } & Record<Exclude<keyof I_3["created"], keyof _217.AbsoluteTxPosition>, never>;
                } & Record<Exclude<keyof I_3, keyof _217.ContractInfo>, never>>(object: I_3): _217.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _217.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.AbsoluteTxPosition;
                fromJSON(object: any): _217.AbsoluteTxPosition;
                toJSON(message: _217.AbsoluteTxPosition): unknown;
                fromPartial<I_4 extends {
                    blockHeight?: any;
                    txIndex?: any;
                } & {
                    blockHeight?: any;
                    txIndex?: any;
                } & Record<Exclude<keyof I_4, keyof _217.AbsoluteTxPosition>, never>>(object: I_4): _217.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _217.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Model;
                fromJSON(object: any): _217.Model;
                toJSON(message: _217.Model): unknown;
                fromPartial<I_5 extends {
                    Key?: Uint8Array;
                    Value?: Uint8Array;
                } & {
                    Key?: Uint8Array;
                    Value?: Uint8Array;
                } & Record<Exclude<keyof I_5, keyof _217.Model>, never>>(object: I_5): _217.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _216.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractInfoRequest;
                fromJSON(object: any): _216.QueryContractInfoRequest;
                toJSON(message: _216.QueryContractInfoRequest): unknown;
                fromPartial<I_6 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_6, "address">, never>>(object: I_6): _216.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _216.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractInfoResponse;
                fromJSON(object: any): _216.QueryContractInfoResponse;
                toJSON(message: _216.QueryContractInfoResponse): unknown;
                fromPartial<I_7 extends {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                } & {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    } & {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        } & {
                            blockHeight?: any;
                            txIndex?: any;
                        } & Record<Exclude<keyof I_7["ContractInfo"]["created"], keyof _217.AbsoluteTxPosition>, never>;
                    } & Record<Exclude<keyof I_7["ContractInfo"], keyof _217.ContractInfo>, never>;
                } & Record<Exclude<keyof I_7, keyof _216.QueryContractInfoResponse>, never>>(object: I_7): _216.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _216.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractHistoryRequest;
                fromJSON(object: any): _216.QueryContractHistoryRequest;
                toJSON(message: _216.QueryContractHistoryRequest): unknown;
                fromPartial<I_8 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_8, "address">, never>>(object: I_8): _216.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _216.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractsByCodeRequest;
                fromJSON(object: any): _216.QueryContractsByCodeRequest;
                toJSON(message: _216.QueryContractsByCodeRequest): unknown;
                fromPartial<I_9 extends {
                    codeId?: any;
                } & {
                    codeId?: any;
                } & Record<Exclude<keyof I_9, "codeId">, never>>(object: I_9): _216.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _216.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.ContractInfoWithAddress;
                fromJSON(object: any): _216.ContractInfoWithAddress;
                toJSON(message: _216.ContractInfoWithAddress): unknown;
                fromPartial<I_10 extends {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    };
                } & {
                    address?: Uint8Array;
                    ContractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    } & {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        } & {
                            blockHeight?: any;
                            txIndex?: any;
                        } & Record<Exclude<keyof I_10["ContractInfo"]["created"], keyof _217.AbsoluteTxPosition>, never>;
                    } & Record<Exclude<keyof I_10["ContractInfo"], keyof _217.ContractInfo>, never>;
                } & Record<Exclude<keyof I_10, keyof _216.ContractInfoWithAddress>, never>>(object: I_10): _216.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _216.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractsByCodeResponse;
                fromJSON(object: any): _216.QueryContractsByCodeResponse;
                toJSON(message: _216.QueryContractsByCodeResponse): unknown;
                fromPartial<I_11 extends {
                    contractInfos?: {
                        address?: Uint8Array;
                        ContractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                    }[];
                } & {
                    contractInfos?: {
                        address?: Uint8Array;
                        ContractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                    }[] & ({
                        address?: Uint8Array;
                        ContractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                    } & {
                        address?: Uint8Array;
                        ContractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        } & {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            } & {
                                blockHeight?: any;
                                txIndex?: any;
                            } & Record<Exclude<keyof I_11["contractInfos"][number]["ContractInfo"]["created"], keyof _217.AbsoluteTxPosition>, never>;
                        } & Record<Exclude<keyof I_11["contractInfos"][number]["ContractInfo"], keyof _217.ContractInfo>, never>;
                    } & Record<Exclude<keyof I_11["contractInfos"][number], keyof _216.ContractInfoWithAddress>, never>)[] & Record<Exclude<keyof I_11["contractInfos"], keyof {
                        address?: Uint8Array;
                        ContractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I_11, "contractInfos">, never>>(object: I_11): _216.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _216.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySmartContractStateRequest;
                fromJSON(object: any): _216.QuerySmartContractStateRequest;
                toJSON(message: _216.QuerySmartContractStateRequest): unknown;
                fromPartial<I_12 extends {
                    address?: Uint8Array;
                    queryData?: Uint8Array;
                } & {
                    address?: Uint8Array;
                    queryData?: Uint8Array;
                } & Record<Exclude<keyof I_12, keyof _216.QuerySmartContractStateRequest>, never>>(object: I_12): _216.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _216.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _216.QueryContractAddressByLabelRequest;
                toJSON(message: _216.QueryContractAddressByLabelRequest): unknown;
                fromPartial<I_13 extends {
                    label?: string;
                } & {
                    label?: string;
                } & Record<Exclude<keyof I_13, "label">, never>>(object: I_13): _216.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _216.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractKeyRequest;
                fromJSON(object: any): _216.QueryContractKeyRequest;
                toJSON(message: _216.QueryContractKeyRequest): unknown;
                fromPartial<I_14 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_14, "address">, never>>(object: I_14): _216.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _216.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractHashRequest;
                fromJSON(object: any): _216.QueryContractHashRequest;
                toJSON(message: _216.QueryContractHashRequest): unknown;
                fromPartial<I_15 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_15, "address">, never>>(object: I_15): _216.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _216.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySmartContractStateResponse;
                fromJSON(object: any): _216.QuerySmartContractStateResponse;
                toJSON(message: _216.QuerySmartContractStateResponse): unknown;
                fromPartial<I_16 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_16, "data">, never>>(object: I_16): _216.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _216.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryCodeRequest;
                fromJSON(object: any): _216.QueryCodeRequest;
                toJSON(message: _216.QueryCodeRequest): unknown;
                fromPartial<I_17 extends {
                    codeId?: any;
                } & {
                    codeId?: any;
                } & Record<Exclude<keyof I_17, "codeId">, never>>(object: I_17): _216.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _216.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.CodeInfoResponse;
                fromJSON(object: any): _216.CodeInfoResponse;
                toJSON(message: _216.CodeInfoResponse): unknown;
                fromPartial<I_18 extends {
                    codeId?: any;
                    creator?: Uint8Array;
                    dataHash?: Uint8Array;
                    source?: string;
                    builder?: string;
                } & {
                    codeId?: any;
                    creator?: Uint8Array;
                    dataHash?: Uint8Array;
                    source?: string;
                    builder?: string;
                } & Record<Exclude<keyof I_18, keyof _216.CodeInfoResponse>, never>>(object: I_18): _216.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _216.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryCodeResponse;
                fromJSON(object: any): _216.QueryCodeResponse;
                toJSON(message: _216.QueryCodeResponse): unknown;
                fromPartial<I_19 extends {
                    codeInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    data?: Uint8Array;
                } & {
                    codeInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    } & {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    } & Record<Exclude<keyof I_19["codeInfo"], keyof _216.CodeInfoResponse>, never>;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_19, keyof _216.QueryCodeResponse>, never>>(object: I_19): _216.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _216.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryCodesResponse;
                fromJSON(object: any): _216.QueryCodesResponse;
                toJSON(message: _216.QueryCodesResponse): unknown;
                fromPartial<I_20 extends {
                    codeInfos?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    }[];
                } & {
                    codeInfos?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    }[] & ({
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    } & {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    } & Record<Exclude<keyof I_20["codeInfos"][number], keyof _216.CodeInfoResponse>, never>)[] & Record<Exclude<keyof I_20["codeInfos"], keyof {
                        codeId?: any;
                        creator?: Uint8Array;
                        dataHash?: Uint8Array;
                        source?: string;
                        builder?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_20, "codeInfos">, never>>(object: I_20): _216.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _216.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _216.QueryContractAddressByLabelResponse;
                toJSON(message: _216.QueryContractAddressByLabelResponse): unknown;
                fromPartial<I_21 extends {
                    address?: Uint8Array;
                } & {
                    address?: Uint8Array;
                } & Record<Exclude<keyof I_21, "address">, never>>(object: I_21): _216.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _216.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractKeyResponse;
                fromJSON(object: any): _216.QueryContractKeyResponse;
                toJSON(message: _216.QueryContractKeyResponse): unknown;
                fromPartial<I_22 extends {
                    key?: Uint8Array;
                } & {
                    key?: Uint8Array;
                } & Record<Exclude<keyof I_22, "key">, never>>(object: I_22): _216.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _216.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryContractHashResponse;
                fromJSON(object: any): _216.QueryContractHashResponse;
                toJSON(message: _216.QueryContractHashResponse): unknown;
                fromPartial<I_23 extends {
                    codeHash?: Uint8Array;
                } & {
                    codeHash?: Uint8Array;
                } & Record<Exclude<keyof I_23, "codeHash">, never>>(object: I_23): _216.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _216.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.DecryptedAnswer;
                fromJSON(object: any): _216.DecryptedAnswer;
                toJSON(message: _216.DecryptedAnswer): unknown;
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
                } & Record<Exclude<keyof I_24, keyof _216.DecryptedAnswer>, never>>(object: I_24): _216.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _215.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgStoreCode;
                fromJSON(object: any): _215.MsgStoreCode;
                toJSON(message: _215.MsgStoreCode): unknown;
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
                } & Record<Exclude<keyof I_25, keyof _215.MsgStoreCode>, never>>(object: I_25): _215.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _215.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgInstantiateContract;
                fromJSON(object: any): _215.MsgInstantiateContract;
                toJSON(message: _215.MsgInstantiateContract): unknown;
                fromPartial<I_26 extends {
                    sender?: Uint8Array;
                    callbackCodeHash?: string;
                    codeId?: any;
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
                    codeId?: any;
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
                } & Record<Exclude<keyof I_26, keyof _215.MsgInstantiateContract>, never>>(object: I_26): _215.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _215.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.MsgExecuteContract;
                fromJSON(object: any): _215.MsgExecuteContract;
                toJSON(message: _215.MsgExecuteContract): unknown;
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
                } & Record<Exclude<keyof I_27, keyof _215.MsgExecuteContract>, never>>(object: I_27): _215.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _214.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GenesisState;
                fromJSON(object: any): _214.GenesisState;
                toJSON(message: _214.GenesisState): unknown;
                fromPartial<I_28 extends {
                    codes?: {
                        codeId?: any;
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
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
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
                        value?: any;
                    }[];
                } & {
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    }[] & ({
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: Uint8Array;
                            source?: string;
                            builder?: string;
                        };
                        codeBytes?: Uint8Array;
                    } & {
                        codeId?: any;
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
                        } & Record<Exclude<keyof I_28["codes"][number]["codeInfo"], keyof _217.CodeInfo>, never>;
                        codeBytes?: Uint8Array;
                    } & Record<Exclude<keyof I_28["codes"][number], keyof _214.Code>, never>)[] & Record<Exclude<keyof I_28["codes"], keyof {
                        codeId?: any;
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
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
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
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
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
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                        } & {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            } & {
                                blockHeight?: any;
                                txIndex?: any;
                            } & Record<Exclude<keyof I_28["contracts"][number]["contractInfo"]["created"], keyof _217.AbsoluteTxPosition>, never>;
                        } & Record<Exclude<keyof I_28["contracts"][number]["contractInfo"], keyof _217.ContractInfo>, never>;
                        contractState?: {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[] & ({
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        } & {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        } & Record<Exclude<keyof I_28["contracts"][number]["contractState"][number], keyof _217.Model>, never>)[] & Record<Exclude<keyof I_28["contracts"][number]["contractState"], keyof {
                            Key?: Uint8Array;
                            Value?: Uint8Array;
                        }[]>, never>;
                        contractCustomInfo?: {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        } & {
                            enclaveKey?: Uint8Array;
                            label?: string;
                        } & Record<Exclude<keyof I_28["contracts"][number]["contractCustomInfo"], keyof _217.ContractCustomInfo>, never>;
                    } & Record<Exclude<keyof I_28["contracts"][number], keyof _214.Contract>, never>)[] & Record<Exclude<keyof I_28["contracts"], keyof {
                        contractAddress?: Uint8Array;
                        contractInfo?: {
                            codeId?: any;
                            creator?: Uint8Array;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
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
                        value?: any;
                    }[] & ({
                        idKey?: Uint8Array;
                        value?: any;
                    } & {
                        idKey?: Uint8Array;
                        value?: any;
                    } & Record<Exclude<keyof I_28["sequences"][number], keyof _214.Sequence>, never>)[] & Record<Exclude<keyof I_28["sequences"], keyof {
                        idKey?: Uint8Array;
                        value?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I_28, keyof _214.GenesisState>, never>>(object: I_28): _214.GenesisState;
            };
            Code: {
                encode(message: _214.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Code;
                fromJSON(object: any): _214.Code;
                toJSON(message: _214.Code): unknown;
                fromPartial<I_29 extends {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: Uint8Array;
                        source?: string;
                        builder?: string;
                    };
                    codeBytes?: Uint8Array;
                } & {
                    codeId?: any;
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
                    } & Record<Exclude<keyof I_29["codeInfo"], keyof _217.CodeInfo>, never>;
                    codeBytes?: Uint8Array;
                } & Record<Exclude<keyof I_29, keyof _214.Code>, never>>(object: I_29): _214.Code;
            };
            Contract: {
                encode(message: _214.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Contract;
                fromJSON(object: any): _214.Contract;
                toJSON(message: _214.Contract): unknown;
                fromPartial<I_30 extends {
                    contractAddress?: Uint8Array;
                    contractInfo?: {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
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
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                    } & {
                        codeId?: any;
                        creator?: Uint8Array;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        } & {
                            blockHeight?: any;
                            txIndex?: any;
                        } & Record<Exclude<keyof I_30["contractInfo"]["created"], keyof _217.AbsoluteTxPosition>, never>;
                    } & Record<Exclude<keyof I_30["contractInfo"], keyof _217.ContractInfo>, never>;
                    contractState?: {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    }[] & ({
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    } & {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    } & Record<Exclude<keyof I_30["contractState"][number], keyof _217.Model>, never>)[] & Record<Exclude<keyof I_30["contractState"], keyof {
                        Key?: Uint8Array;
                        Value?: Uint8Array;
                    }[]>, never>;
                    contractCustomInfo?: {
                        enclaveKey?: Uint8Array;
                        label?: string;
                    } & {
                        enclaveKey?: Uint8Array;
                        label?: string;
                    } & Record<Exclude<keyof I_30["contractCustomInfo"], keyof _217.ContractCustomInfo>, never>;
                } & Record<Exclude<keyof I_30, keyof _214.Contract>, never>>(object: I_30): _214.Contract;
            };
            Sequence: {
                encode(message: _214.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Sequence;
                fromJSON(object: any): _214.Sequence;
                toJSON(message: _214.Sequence): unknown;
                fromPartial<I_31 extends {
                    idKey?: Uint8Array;
                    value?: any;
                } & {
                    idKey?: Uint8Array;
                    value?: any;
                } & Record<Exclude<keyof I_31, keyof _214.Sequence>, never>>(object: I_31): _214.Sequence;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _221.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.SeedConfig;
                fromJSON(object: any): _221.SeedConfig;
                toJSON(message: _221.SeedConfig): unknown;
                fromPartial<I extends {
                    masterCert?: string;
                    encryptedKey?: string;
                } & {
                    masterCert?: string;
                    encryptedKey?: string;
                } & Record<Exclude<keyof I, keyof _221.SeedConfig>, never>>(object: I): _221.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _221.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.RegistrationNodeInfo;
                fromJSON(object: any): _221.RegistrationNodeInfo;
                toJSON(message: _221.RegistrationNodeInfo): unknown;
                fromPartial<I_1 extends {
                    certificate?: Uint8Array;
                    encryptedSeed?: Uint8Array;
                } & {
                    certificate?: Uint8Array;
                    encryptedSeed?: Uint8Array;
                } & Record<Exclude<keyof I_1, keyof _221.RegistrationNodeInfo>, never>>(object: I_1): _221.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _220.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryEncryptedSeedRequest;
                fromJSON(object: any): _220.QueryEncryptedSeedRequest;
                toJSON(message: _220.QueryEncryptedSeedRequest): unknown;
                fromPartial<I_2 extends {
                    pubKey?: Uint8Array;
                } & {
                    pubKey?: Uint8Array;
                } & Record<Exclude<keyof I_2, "pubKey">, never>>(object: I_2): _220.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _220.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.QueryEncryptedSeedResponse;
                fromJSON(object: any): _220.QueryEncryptedSeedResponse;
                toJSON(message: _220.QueryEncryptedSeedResponse): unknown;
                fromPartial<I_3 extends {
                    encryptedSeed?: Uint8Array;
                } & {
                    encryptedSeed?: Uint8Array;
                } & Record<Exclude<keyof I_3, "encryptedSeed">, never>>(object: I_3): _220.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _219.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.RaAuthenticate;
                fromJSON(object: any): _219.RaAuthenticate;
                toJSON(message: _219.RaAuthenticate): unknown;
                fromPartial<I_4 extends {
                    sender?: Uint8Array;
                    certificate?: Uint8Array;
                } & {
                    sender?: Uint8Array;
                    certificate?: Uint8Array;
                } & Record<Exclude<keyof I_4, keyof _219.RaAuthenticate>, never>>(object: I_4): _219.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _219.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MasterCertificate;
                fromJSON(object: any): _219.MasterCertificate;
                toJSON(message: _219.MasterCertificate): unknown;
                fromPartial<I_5 extends {
                    bytes?: Uint8Array;
                } & {
                    bytes?: Uint8Array;
                } & Record<Exclude<keyof I_5, "bytes">, never>>(object: I_5): _219.MasterCertificate;
            };
            Key: {
                encode(message: _219.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Key;
                fromJSON(object: any): _219.Key;
                toJSON(message: _219.Key): unknown;
                fromPartial<I_6 extends {
                    key?: Uint8Array;
                } & {
                    key?: Uint8Array;
                } & Record<Exclude<keyof I_6, "key">, never>>(object: I_6): _219.Key;
            };
            GenesisState: {
                encode(message: _218.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GenesisState;
                fromJSON(object: any): _218.GenesisState;
                toJSON(message: _218.GenesisState): unknown;
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
                    } & Record<Exclude<keyof I_7["registration"][number], keyof _221.RegistrationNodeInfo>, never>)[] & Record<Exclude<keyof I_7["registration"], keyof {
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
                } & Record<Exclude<keyof I_7, keyof _218.GenesisState>, never>>(object: I_7): _218.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _222.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QuoteReport;
                    fromJSON(object: any): _222.QuoteReport;
                    toJSON(message: _222.QuoteReport): unknown;
                    fromPartial<I extends {
                        id?: string;
                        timestamp?: string;
                        version?: any;
                        isvEnclaveQuoteStatus?: string;
                        platformInfoBlob?: string;
                        isvEnclaveQuoteBody?: string;
                        advisoryIds?: string[];
                    } & {
                        id?: string;
                        timestamp?: string;
                        version?: any;
                        isvEnclaveQuoteStatus?: string;
                        platformInfoBlob?: string;
                        isvEnclaveQuoteBody?: string;
                        advisoryIds?: string[] & string[] & Record<Exclude<keyof I["advisoryIds"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I, keyof _222.QuoteReport>, never>>(object: I): _222.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _222.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QuoteReportBody;
                    fromJSON(object: any): _222.QuoteReportBody;
                    toJSON(message: _222.QuoteReportBody): unknown;
                    fromPartial<I_1 extends {
                        mrEnclave?: string;
                        mrSigner?: string;
                        reportData?: string;
                    } & {
                        mrEnclave?: string;
                        mrSigner?: string;
                        reportData?: string;
                    } & Record<Exclude<keyof I_1, keyof _222.QuoteReportBody>, never>>(object: I_1): _222.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _222.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QuoteReportData;
                    fromJSON(object: any): _222.QuoteReportData;
                    toJSON(message: _222.QuoteReportData): unknown;
                    fromPartial<I_2 extends {
                        version?: any;
                        signType?: any;
                        reportBody?: {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        };
                    } & {
                        version?: any;
                        signType?: any;
                        reportBody?: {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        } & {
                            mrEnclave?: string;
                            mrSigner?: string;
                            reportData?: string;
                        } & Record<Exclude<keyof I_2["reportBody"], keyof _222.QuoteReportBody>, never>;
                    } & Record<Exclude<keyof I_2, keyof _222.QuoteReportData>, never>>(object: I_2): _222.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _222.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EndorsedAttestationReport;
                    fromJSON(object: any): _222.EndorsedAttestationReport;
                    toJSON(message: _222.EndorsedAttestationReport): unknown;
                    fromPartial<I_3 extends {
                        report?: Uint8Array;
                        signature?: Uint8Array;
                        signingCert?: Uint8Array;
                    } & {
                        report?: Uint8Array;
                        signature?: Uint8Array;
                        signingCert?: Uint8Array;
                    } & Record<Exclude<keyof I_3, keyof _222.EndorsedAttestationReport>, never>>(object: I_3): _222.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _222.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.SGXEC256Signature;
                    fromJSON(object: any): _222.SGXEC256Signature;
                    toJSON(message: _222.SGXEC256Signature): unknown;
                    fromPartial<I_4 extends {
                        gx?: string;
                        gy?: string;
                    } & {
                        gx?: string;
                        gy?: string;
                    } & Record<Exclude<keyof I_4, keyof _222.SGXEC256Signature>, never>>(object: I_4): _222.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _222.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.PlatformInfoBlob;
                    fromJSON(object: any): _222.PlatformInfoBlob;
                    toJSON(message: _222.PlatformInfoBlob): unknown;
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
                        } & Record<Exclude<keyof I_5["sgxEc256SignatureT"], keyof _222.SGXEC256Signature>, never>;
                    } & Record<Exclude<keyof I_5, keyof _222.PlatformInfoBlob>, never>>(object: I_5): _222.PlatformInfoBlob;
                };
            };
        }
    }
}
