import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _99.AccessType;
            accessTypeToJSON(object: _99.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _99.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _99.ContractCodeHistoryOperationType): string;
            AccessType: typeof _99.AccessType;
            ContractCodeHistoryOperationType: typeof _99.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _99.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessTypeParam;
                fromJSON(object: any): _99.AccessTypeParam;
                toJSON(message: _99.AccessTypeParam): unknown;
                fromPartial<I extends {
                    value?: _99.AccessType;
                } & {
                    value?: _99.AccessType;
                } & Record<Exclude<keyof I, "value">, never>>(object: I): _99.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _99.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessConfig;
                fromJSON(object: any): _99.AccessConfig;
                toJSON(message: _99.AccessConfig): unknown;
                fromPartial<I_1 extends {
                    permission?: _99.AccessType;
                    address?: string;
                } & {
                    permission?: _99.AccessType;
                    address?: string;
                } & Record<Exclude<keyof I_1, keyof _99.AccessConfig>, never>>(object: I_1): _99.AccessConfig;
            };
            Params: {
                encode(message: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Params;
                fromJSON(object: any): _99.Params;
                toJSON(message: _99.Params): unknown;
                fromPartial<I_2 extends {
                    codeUploadAccess?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _99.AccessType;
                    maxWasmCodeSize?: any;
                } & {
                    codeUploadAccess?: {
                        permission?: _99.AccessType;
                        address?: string;
                    } & {
                        permission?: _99.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_2["codeUploadAccess"], keyof _99.AccessConfig>, never>;
                    instantiateDefaultPermission?: _99.AccessType;
                    maxWasmCodeSize?: any;
                } & Record<Exclude<keyof I_2, keyof _99.Params>, never>>(object: I_2): _99.Params;
            };
            CodeInfo: {
                encode(message: _99.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.CodeInfo;
                fromJSON(object: any): _99.CodeInfo;
                toJSON(message: _99.CodeInfo): unknown;
                fromPartial<I_3 extends {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                } & {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _99.AccessType;
                        address?: string;
                    } & {
                        permission?: _99.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_3["instantiateConfig"], keyof _99.AccessConfig>, never>;
                } & Record<Exclude<keyof I_3, keyof _99.CodeInfo>, never>>(object: I_3): _99.CodeInfo;
            };
            ContractInfo: {
                encode(message: _99.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractInfo;
                fromJSON(object: any): _99.ContractInfo;
                toJSON(message: _99.ContractInfo): unknown;
                fromPartial<I_4 extends {
                    codeId?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    codeId?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    } & {
                        blockHeight?: any;
                        txIndex?: any;
                    } & Record<Exclude<keyof I_4["created"], keyof _99.AbsoluteTxPosition>, never>;
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_4["extension"], keyof import("../google/protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I_4, keyof _99.ContractInfo>, never>>(object: I_4): _99.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _99.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractCodeHistoryEntry;
                fromJSON(object: any): _99.ContractCodeHistoryEntry;
                toJSON(message: _99.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends {
                    operation?: _99.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                } & {
                    operation?: _99.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    } & {
                        blockHeight?: any;
                        txIndex?: any;
                    } & Record<Exclude<keyof I_5["updated"], keyof _99.AbsoluteTxPosition>, never>;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_5, keyof _99.ContractCodeHistoryEntry>, never>>(object: I_5): _99.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _99.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AbsoluteTxPosition;
                fromJSON(object: any): _99.AbsoluteTxPosition;
                toJSON(message: _99.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends {
                    blockHeight?: any;
                    txIndex?: any;
                } & {
                    blockHeight?: any;
                    txIndex?: any;
                } & Record<Exclude<keyof I_6, keyof _99.AbsoluteTxPosition>, never>>(object: I_6): _99.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _99.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Model;
                fromJSON(object: any): _99.Model;
                toJSON(message: _99.Model): unknown;
                fromPartial<I_7 extends {
                    key?: Uint8Array;
                    value?: Uint8Array;
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I_7, keyof _99.Model>, never>>(object: I_7): _99.Model;
            };
            MsgStoreCode: {
                encode(message: _98.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCode;
                fromJSON(object: any): _98.MsgStoreCode;
                toJSON(message: _98.MsgStoreCode): unknown;
                fromPartial<I_8 extends {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                } & {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _99.AccessType;
                        address?: string;
                    } & {
                        permission?: _99.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_8["instantiatePermission"], keyof _99.AccessConfig>, never>;
                } & Record<Exclude<keyof I_8, keyof _98.MsgStoreCode>, never>>(object: I_8): _98.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _98.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCodeResponse;
                fromJSON(object: any): _98.MsgStoreCodeResponse;
                toJSON(message: _98.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends {
                    codeId?: any;
                } & {
                    codeId?: any;
                } & Record<Exclude<keyof I_9, "codeId">, never>>(object: I_9): _98.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _98.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContract;
                fromJSON(object: any): _98.MsgInstantiateContract;
                toJSON(message: _98.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends {
                    sender?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    sender?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_10["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_10["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_10, keyof _98.MsgInstantiateContract>, never>>(object: I_10): _98.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _98.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContractResponse;
                fromJSON(object: any): _98.MsgInstantiateContractResponse;
                toJSON(message: _98.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends {
                    address?: string;
                    data?: Uint8Array;
                } & {
                    address?: string;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_11, keyof _98.MsgInstantiateContractResponse>, never>>(object: I_11): _98.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _98.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContract;
                fromJSON(object: any): _98.MsgExecuteContract;
                toJSON(message: _98.MsgExecuteContract): unknown;
                fromPartial<I_12 extends {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_12["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_12["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_12, keyof _98.MsgExecuteContract>, never>>(object: I_12): _98.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _98.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContractResponse;
                fromJSON(object: any): _98.MsgExecuteContractResponse;
                toJSON(message: _98.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_13, "data">, never>>(object: I_13): _98.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _98.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContract;
                fromJSON(object: any): _98.MsgMigrateContract;
                toJSON(message: _98.MsgMigrateContract): unknown;
                fromPartial<I_14 extends {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                } & {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_14, keyof _98.MsgMigrateContract>, never>>(object: I_14): _98.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _98.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContractResponse;
                fromJSON(object: any): _98.MsgMigrateContractResponse;
                toJSON(message: _98.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_15, "data">, never>>(object: I_15): _98.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _98.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdmin;
                fromJSON(object: any): _98.MsgUpdateAdmin;
                toJSON(message: _98.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                } & {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_16, keyof _98.MsgUpdateAdmin>, never>>(object: I_16): _98.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _98.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdminResponse;
                fromJSON(_: any): _98.MsgUpdateAdminResponse;
                toJSON(_: _98.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _98.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _98.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdmin;
                fromJSON(object: any): _98.MsgClearAdmin;
                toJSON(message: _98.MsgClearAdmin): unknown;
                fromPartial<I_18 extends {
                    sender?: string;
                    contract?: string;
                } & {
                    sender?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_18, keyof _98.MsgClearAdmin>, never>>(object: I_18): _98.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _98.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdminResponse;
                fromJSON(_: any): _98.MsgClearAdminResponse;
                toJSON(_: _98.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _98.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _97.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoRequest;
                fromJSON(object: any): _97.QueryContractInfoRequest;
                toJSON(message: _97.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends {
                    address?: string;
                } & {
                    address?: string;
                } & Record<Exclude<keyof I_20, "address">, never>>(object: I_20): _97.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _97.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoResponse;
                fromJSON(object: any): _97.QueryContractInfoResponse;
                toJSON(message: _97.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends {
                    address?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                } & {
                    address?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        } & {
                            blockHeight?: any;
                            txIndex?: any;
                        } & Record<Exclude<keyof I_21["contractInfo"]["created"], keyof _99.AbsoluteTxPosition>, never>;
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_21["contractInfo"]["extension"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_21["contractInfo"], keyof _99.ContractInfo>, never>;
                } & Record<Exclude<keyof I_21, keyof _97.QueryContractInfoResponse>, never>>(object: I_21): _97.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _97.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryRequest;
                fromJSON(object: any): _97.QueryContractHistoryRequest;
                toJSON(message: _97.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    address?: string;
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
                    } & Record<Exclude<keyof I_22["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_22, keyof _97.QueryContractHistoryRequest>, never>>(object: I_22): _97.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _97.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryResponse;
                fromJSON(object: any): _97.QueryContractHistoryResponse;
                toJSON(message: _97.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends {
                    entries?: {
                        operation?: _99.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    entries?: {
                        operation?: _99.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[] & ({
                        operation?: _99.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    } & {
                        operation?: _99.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        } & {
                            blockHeight?: any;
                            txIndex?: any;
                        } & Record<Exclude<keyof I_23["entries"][number]["updated"], keyof _99.AbsoluteTxPosition>, never>;
                        msg?: Uint8Array;
                    } & Record<Exclude<keyof I_23["entries"][number], keyof _99.ContractCodeHistoryEntry>, never>)[] & Record<Exclude<keyof I_23["entries"], keyof {
                        operation?: _99.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_23["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_23, keyof _97.QueryContractHistoryResponse>, never>>(object: I_23): _97.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _97.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeRequest;
                fromJSON(object: any): _97.QueryContractsByCodeRequest;
                toJSON(message: _97.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends {
                    codeId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    codeId?: any;
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
                    } & Record<Exclude<keyof I_24["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_24, keyof _97.QueryContractsByCodeRequest>, never>>(object: I_24): _97.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _97.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeResponse;
                fromJSON(object: any): _97.QueryContractsByCodeResponse;
                toJSON(message: _97.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    contracts?: string[] & string[] & Record<Exclude<keyof I_25["contracts"], keyof string[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_25["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_25, keyof _97.QueryContractsByCodeResponse>, never>>(object: I_25): _97.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _97.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateRequest;
                fromJSON(object: any): _97.QueryAllContractStateRequest;
                toJSON(message: _97.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                } & {
                    address?: string;
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
                    } & Record<Exclude<keyof I_26["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_26, keyof _97.QueryAllContractStateRequest>, never>>(object: I_26): _97.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _97.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateResponse;
                fromJSON(object: any): _97.QueryAllContractStateResponse;
                toJSON(message: _97.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_27["models"][number], keyof _99.Model>, never>)[] & Record<Exclude<keyof I_27["models"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_27["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_27, keyof _97.QueryAllContractStateResponse>, never>>(object: I_27): _97.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _97.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateRequest;
                fromJSON(object: any): _97.QueryRawContractStateRequest;
                toJSON(message: _97.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends {
                    address?: string;
                    queryData?: Uint8Array;
                } & {
                    address?: string;
                    queryData?: Uint8Array;
                } & Record<Exclude<keyof I_28, keyof _97.QueryRawContractStateRequest>, never>>(object: I_28): _97.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _97.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateResponse;
                fromJSON(object: any): _97.QueryRawContractStateResponse;
                toJSON(message: _97.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_29, "data">, never>>(object: I_29): _97.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _97.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateRequest;
                fromJSON(object: any): _97.QuerySmartContractStateRequest;
                toJSON(message: _97.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends {
                    address?: string;
                    queryData?: Uint8Array;
                } & {
                    address?: string;
                    queryData?: Uint8Array;
                } & Record<Exclude<keyof I_30, keyof _97.QuerySmartContractStateRequest>, never>>(object: I_30): _97.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _97.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateResponse;
                fromJSON(object: any): _97.QuerySmartContractStateResponse;
                toJSON(message: _97.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends {
                    data?: Uint8Array;
                } & {
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_31, "data">, never>>(object: I_31): _97.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _97.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeRequest;
                fromJSON(object: any): _97.QueryCodeRequest;
                toJSON(message: _97.QueryCodeRequest): unknown;
                fromPartial<I_32 extends {
                    codeId?: any;
                } & {
                    codeId?: any;
                } & Record<Exclude<keyof I_32, "codeId">, never>>(object: I_32): _97.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _97.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CodeInfoResponse;
                fromJSON(object: any): _97.CodeInfoResponse;
                toJSON(message: _97.CodeInfoResponse): unknown;
                fromPartial<I_33 extends {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                } & {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                } & Record<Exclude<keyof I_33, keyof _97.CodeInfoResponse>, never>>(object: I_33): _97.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _97.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeResponse;
                fromJSON(object: any): _97.QueryCodeResponse;
                toJSON(message: _97.QueryCodeResponse): unknown;
                fromPartial<I_34 extends {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                } & {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & Record<Exclude<keyof I_34["codeInfo"], keyof _97.CodeInfoResponse>, never>;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_34, keyof _97.QueryCodeResponse>, never>>(object: I_34): _97.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _97.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesRequest;
                fromJSON(object: any): _97.QueryCodesRequest;
                toJSON(message: _97.QueryCodesRequest): unknown;
                fromPartial<I_35 extends {
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
                    } & Record<Exclude<keyof I_35["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_35, "pagination">, never>>(object: I_35): _97.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _97.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesResponse;
                fromJSON(object: any): _97.QueryCodesResponse;
                toJSON(message: _97.QueryCodesResponse): unknown;
                fromPartial<I_36 extends {
                    codeInfos?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    codeInfos?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[] & ({
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    } & Record<Exclude<keyof I_36["codeInfos"][number], keyof _97.CodeInfoResponse>, never>)[] & Record<Exclude<keyof I_36["codeInfos"], keyof {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_36["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_36, keyof _97.QueryCodesResponse>, never>>(object: I_36): _97.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _97.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesRequest;
                fromJSON(object: any): _97.QueryPinnedCodesRequest;
                toJSON(message: _97.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends {
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
                    } & Record<Exclude<keyof I_37["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_37, "pagination">, never>>(object: I_37): _97.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _97.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesResponse;
                fromJSON(object: any): _97.QueryPinnedCodesResponse;
                toJSON(message: _97.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                } & {
                    codeIds?: any[] & any[] & Record<Exclude<keyof I_38["codeIds"], keyof any[]>, never>;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & {
                        nextKey?: Uint8Array;
                        total?: any;
                    } & Record<Exclude<keyof I_38["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_38, keyof _97.QueryPinnedCodesResponse>, never>>(object: I_38): _97.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _96.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.StoreCodeProposal;
                fromJSON(object: any): _96.StoreCodeProposal;
                toJSON(message: _96.StoreCodeProposal): unknown;
                fromPartial<I_39 extends {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _99.AccessType;
                        address?: string;
                    };
                } & {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _99.AccessType;
                        address?: string;
                    } & {
                        permission?: _99.AccessType;
                        address?: string;
                    } & Record<Exclude<keyof I_39["instantiatePermission"], keyof _99.AccessConfig>, never>;
                } & Record<Exclude<keyof I_39, keyof _96.StoreCodeProposal>, never>>(object: I_39): _96.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _96.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.InstantiateContractProposal;
                fromJSON(object: any): _96.InstantiateContractProposal;
                toJSON(message: _96.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_40["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_40["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_40, keyof _96.InstantiateContractProposal>, never>>(object: I_40): _96.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _96.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MigrateContractProposal;
                fromJSON(object: any): _96.MigrateContractProposal;
                toJSON(message: _96.MigrateContractProposal): unknown;
                fromPartial<I_41 extends {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                } & {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_41, keyof _96.MigrateContractProposal>, never>>(object: I_41): _96.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _96.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SudoContractProposal;
                fromJSON(object: any): _96.SudoContractProposal;
                toJSON(message: _96.SudoContractProposal): unknown;
                fromPartial<I_42 extends {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                } & {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                } & Record<Exclude<keyof I_42, keyof _96.SudoContractProposal>, never>>(object: I_42): _96.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _96.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ExecuteContractProposal;
                fromJSON(object: any): _96.ExecuteContractProposal;
                toJSON(message: _96.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                } & {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[] & ({
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_43["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_43["funds"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_43, keyof _96.ExecuteContractProposal>, never>>(object: I_43): _96.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _96.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UpdateAdminProposal;
                fromJSON(object: any): _96.UpdateAdminProposal;
                toJSON(message: _96.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                } & {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_44, keyof _96.UpdateAdminProposal>, never>>(object: I_44): _96.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _96.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ClearAdminProposal;
                fromJSON(object: any): _96.ClearAdminProposal;
                toJSON(message: _96.ClearAdminProposal): unknown;
                fromPartial<I_45 extends {
                    title?: string;
                    description?: string;
                    contract?: string;
                } & {
                    title?: string;
                    description?: string;
                    contract?: string;
                } & Record<Exclude<keyof I_45, keyof _96.ClearAdminProposal>, never>>(object: I_45): _96.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _96.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PinCodesProposal;
                fromJSON(object: any): _96.PinCodesProposal;
                toJSON(message: _96.PinCodesProposal): unknown;
                fromPartial<I_46 extends {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                } & {
                    title?: string;
                    description?: string;
                    codeIds?: any[] & any[] & Record<Exclude<keyof I_46["codeIds"], keyof any[]>, never>;
                } & Record<Exclude<keyof I_46, keyof _96.PinCodesProposal>, never>>(object: I_46): _96.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _96.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UnpinCodesProposal;
                fromJSON(object: any): _96.UnpinCodesProposal;
                toJSON(message: _96.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                } & {
                    title?: string;
                    description?: string;
                    codeIds?: any[] & any[] & Record<Exclude<keyof I_47["codeIds"], keyof any[]>, never>;
                } & Record<Exclude<keyof I_47, keyof _96.UnpinCodesProposal>, never>>(object: I_47): _96.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _95.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCSend;
                fromJSON(object: any): _95.MsgIBCSend;
                toJSON(message: _95.MsgIBCSend): unknown;
                fromPartial<I_48 extends {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                } & {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_48, keyof _95.MsgIBCSend>, never>>(object: I_48): _95.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _95.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCCloseChannel;
                fromJSON(object: any): _95.MsgIBCCloseChannel;
                toJSON(message: _95.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends {
                    channel?: string;
                } & {
                    channel?: string;
                } & Record<Exclude<keyof I_49, "channel">, never>>(object: I_49): _95.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState;
                fromJSON(object: any): _94.GenesisState;
                toJSON(message: _94.GenesisState): unknown;
                fromPartial<I_50 extends {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _99.AccessType;
                        maxWasmCodeSize?: any;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                } & {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _99.AccessType;
                        maxWasmCodeSize?: any;
                    } & {
                        codeUploadAccess?: {
                            permission?: _99.AccessType;
                            address?: string;
                        } & {
                            permission?: _99.AccessType;
                            address?: string;
                        } & Record<Exclude<keyof I_50["params"]["codeUploadAccess"], keyof _99.AccessConfig>, never>;
                        instantiateDefaultPermission?: _99.AccessType;
                        maxWasmCodeSize?: any;
                    } & Record<Exclude<keyof I_50["params"], keyof _99.Params>, never>;
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[] & ({
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    } & {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        } & {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _99.AccessType;
                                address?: string;
                            } & {
                                permission?: _99.AccessType;
                                address?: string;
                            } & Record<Exclude<keyof I_50["codes"][number]["codeInfo"]["instantiateConfig"], keyof _99.AccessConfig>, never>;
                        } & Record<Exclude<keyof I_50["codes"][number]["codeInfo"], keyof _99.CodeInfo>, never>;
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    } & Record<Exclude<keyof I_50["codes"][number], keyof _94.Code>, never>)[] & Record<Exclude<keyof I_50["codes"], keyof {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[]>, never>;
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[] & ({
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    } & {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            } & {
                                blockHeight?: any;
                                txIndex?: any;
                            } & Record<Exclude<keyof I_50["contracts"][number]["contractInfo"]["created"], keyof _99.AbsoluteTxPosition>, never>;
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_50["contracts"][number]["contractInfo"]["extension"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_50["contracts"][number]["contractInfo"], keyof _99.ContractInfo>, never>;
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_50["contracts"][number]["contractState"][number], keyof _99.Model>, never>)[] & Record<Exclude<keyof I_50["contracts"][number]["contractState"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_50["contracts"][number], keyof _94.Contract>, never>)[] & Record<Exclude<keyof I_50["contracts"], keyof {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
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
                    } & Record<Exclude<keyof I_50["sequences"][number], keyof _94.Sequence>, never>)[] & Record<Exclude<keyof I_50["sequences"], keyof {
                        idKey?: Uint8Array;
                        value?: any;
                    }[]>, never>;
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[] & ({
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    } & {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        } & {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _99.AccessType;
                                address?: string;
                            } & {
                                permission?: _99.AccessType;
                                address?: string;
                            } & Record<Exclude<keyof I_50["genMsgs"][number]["storeCode"]["instantiatePermission"], keyof _99.AccessConfig>, never>;
                        } & Record<Exclude<keyof I_50["genMsgs"][number]["storeCode"], keyof _98.MsgStoreCode>, never>;
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } & {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[] & ({
                                denom?: string;
                                amount?: string;
                            } & {
                                denom?: string;
                                amount?: string;
                            } & Record<Exclude<keyof I_50["genMsgs"][number]["instantiateContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_50["genMsgs"][number]["instantiateContract"]["funds"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_50["genMsgs"][number]["instantiateContract"], keyof _98.MsgInstantiateContract>, never>;
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } & {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[] & ({
                                denom?: string;
                                amount?: string;
                            } & {
                                denom?: string;
                                amount?: string;
                            } & Record<Exclude<keyof I_50["genMsgs"][number]["executeContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_50["genMsgs"][number]["executeContract"]["funds"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_50["genMsgs"][number]["executeContract"], keyof _98.MsgExecuteContract>, never>;
                    } & Record<Exclude<keyof I_50["genMsgs"][number], keyof _94.GenesisState_GenMsgs>, never>)[] & Record<Exclude<keyof I_50["genMsgs"], keyof {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _99.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I_50, keyof _94.GenesisState>, never>>(object: I_50): _94.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _94.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState_GenMsgs;
                fromJSON(object: any): _94.GenesisState_GenMsgs;
                toJSON(message: _94.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                } & {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                    } & {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _99.AccessType;
                            address?: string;
                        } & {
                            permission?: _99.AccessType;
                            address?: string;
                        } & Record<Exclude<keyof I_51["storeCode"]["instantiatePermission"], keyof _99.AccessConfig>, never>;
                    } & Record<Exclude<keyof I_51["storeCode"], keyof _98.MsgStoreCode>, never>;
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_51["instantiateContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_51["instantiateContract"]["funds"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_51["instantiateContract"], keyof _98.MsgInstantiateContract>, never>;
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_51["executeContract"]["funds"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_51["executeContract"]["funds"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_51["executeContract"], keyof _98.MsgExecuteContract>, never>;
                } & Record<Exclude<keyof I_51, keyof _94.GenesisState_GenMsgs>, never>>(object: I_51): _94.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _94.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Code;
                fromJSON(object: any): _94.Code;
                toJSON(message: _94.Code): unknown;
                fromPartial<I_52 extends {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                } & {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _99.AccessType;
                            address?: string;
                        };
                    } & {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _99.AccessType;
                            address?: string;
                        } & {
                            permission?: _99.AccessType;
                            address?: string;
                        } & Record<Exclude<keyof I_52["codeInfo"]["instantiateConfig"], keyof _99.AccessConfig>, never>;
                    } & Record<Exclude<keyof I_52["codeInfo"], keyof _99.CodeInfo>, never>;
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                } & Record<Exclude<keyof I_52, keyof _94.Code>, never>>(object: I_52): _94.Code;
            };
            Contract: {
                encode(message: _94.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Contract;
                fromJSON(object: any): _94.Contract;
                toJSON(message: _94.Contract): unknown;
                fromPartial<I_53 extends {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                } & {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        } & {
                            blockHeight?: any;
                            txIndex?: any;
                        } & Record<Exclude<keyof I_53["contractInfo"]["created"], keyof _99.AbsoluteTxPosition>, never>;
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_53["contractInfo"]["extension"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_53["contractInfo"], keyof _99.ContractInfo>, never>;
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_53["contractState"][number], keyof _99.Model>, never>)[] & Record<Exclude<keyof I_53["contractState"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_53, keyof _94.Contract>, never>>(object: I_53): _94.Contract;
            };
            Sequence: {
                encode(message: _94.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Sequence;
                fromJSON(object: any): _94.Sequence;
                toJSON(message: _94.Sequence): unknown;
                fromPartial<I_54 extends {
                    idKey?: Uint8Array;
                    value?: any;
                } & {
                    idKey?: Uint8Array;
                    value?: any;
                } & Record<Exclude<keyof I_54, keyof _94.Sequence>, never>>(object: I_54): _94.Sequence;
            };
        };
    }
}
