import * as _878 from "./wasm/v1/genesis";
import * as _880 from "./wasm/v1/ibc";
import * as _882 from "./wasm/v1/proposal";
import * as _884 from "./wasm/v1/query";
import * as _886 from "./wasm/v1/tx";
import * as _894 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _894.AccessType;
            accessTypeToJSON(object: _894.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _894.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _894.ContractCodeHistoryOperationType): string;
            AccessType: typeof _894.AccessType;
            ContractCodeHistoryOperationType: typeof _894.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _894.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.AccessTypeParam;
                fromJSON(object: any): _894.AccessTypeParam;
                toJSON(message: _894.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _894.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _894.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.AccessConfig;
                fromJSON(object: any): _894.AccessConfig;
                toJSON(message: _894.AccessConfig): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _894.AccessConfig;
            };
            Params: {
                encode(message: _894.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.Params;
                fromJSON(object: any): _894.Params;
                toJSON(message: _894.Params): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _894.Params;
            };
            CodeInfo: {
                encode(message: _894.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.CodeInfo;
                fromJSON(object: any): _894.CodeInfo;
                toJSON(message: _894.CodeInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _894.CodeInfo;
            };
            ContractInfo: {
                encode(message: _894.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.ContractInfo;
                fromJSON(object: any): _894.ContractInfo;
                toJSON(message: _894.ContractInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _894.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _894.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.ContractCodeHistoryEntry;
                fromJSON(object: any): _894.ContractCodeHistoryEntry;
                toJSON(message: _894.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _894.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _894.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.AbsoluteTxPosition;
                fromJSON(object: any): _894.AbsoluteTxPosition;
                toJSON(message: _894.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _894.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _894.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.Model;
                fromJSON(object: any): _894.Model;
                toJSON(message: _894.Model): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _894.Model;
            };
            MsgStoreCode: {
                encode(message: _886.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgStoreCode;
                fromJSON(object: any): _886.MsgStoreCode;
                toJSON(message: _886.MsgStoreCode): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _886.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _886.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgStoreCodeResponse;
                fromJSON(object: any): _886.MsgStoreCodeResponse;
                toJSON(message: _886.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _886.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _886.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgInstantiateContract;
                fromJSON(object: any): _886.MsgInstantiateContract;
                toJSON(message: _886.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _886.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _886.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgInstantiateContractResponse;
                fromJSON(object: any): _886.MsgInstantiateContractResponse;
                toJSON(message: _886.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _886.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _886.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgExecuteContract;
                fromJSON(object: any): _886.MsgExecuteContract;
                toJSON(message: _886.MsgExecuteContract): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _886.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _886.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgExecuteContractResponse;
                fromJSON(object: any): _886.MsgExecuteContractResponse;
                toJSON(message: _886.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _886.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _886.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgMigrateContract;
                fromJSON(object: any): _886.MsgMigrateContract;
                toJSON(message: _886.MsgMigrateContract): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _886.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _886.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgMigrateContractResponse;
                fromJSON(object: any): _886.MsgMigrateContractResponse;
                toJSON(message: _886.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _886.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _886.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgUpdateAdmin;
                fromJSON(object: any): _886.MsgUpdateAdmin;
                toJSON(message: _886.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _886.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _886.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgUpdateAdminResponse;
                fromJSON(_: any): _886.MsgUpdateAdminResponse;
                toJSON(_: _886.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends unknown>(_: I_17): _886.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _886.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgClearAdmin;
                fromJSON(object: any): _886.MsgClearAdmin;
                toJSON(message: _886.MsgClearAdmin): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _886.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _886.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.MsgClearAdminResponse;
                fromJSON(_: any): _886.MsgClearAdminResponse;
                toJSON(_: _886.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends unknown>(_: I_19): _886.MsgClearAdminResponse;
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _886.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: Uint8Array;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: Uint8Array;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _886.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _886.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _886.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _886.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _886.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _886.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _886.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _886.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _886.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _886.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _886.MsgClearAdmin;
                };
            };
            encoded: {
                storeCode(value: _886.MsgStoreCode): {
                    type_url: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                storeCode(value: any): {
                    typeUrl: string;
                    value: _886.MsgStoreCode;
                };
                instantiateContract(value: any): {
                    typeUrl: string;
                    value: _886.MsgInstantiateContract;
                };
                executeContract(value: any): {
                    typeUrl: string;
                    value: _886.MsgExecuteContract;
                };
                migrateContract(value: any): {
                    typeUrl: string;
                    value: _886.MsgMigrateContract;
                };
                updateAdmin(value: any): {
                    typeUrl: string;
                    value: _886.MsgUpdateAdmin;
                };
                clearAdmin(value: any): {
                    typeUrl: string;
                    value: _886.MsgClearAdmin;
                };
            };
            toJSON: {
                storeCode(value: _886.MsgStoreCode): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    typeUrl: string;
                    value: unknown;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                storeCode(value: _886.MsgStoreCode): {
                    typeUrl: string;
                    value: _886.MsgStoreCode;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _886.MsgInstantiateContract;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    typeUrl: string;
                    value: _886.MsgExecuteContract;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    typeUrl: string;
                    value: _886.MsgMigrateContract;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _886.MsgUpdateAdmin;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    typeUrl: string;
                    value: _886.MsgClearAdmin;
                };
            };
            messages: {
                storeCode(value: _886.MsgStoreCode): {
                    typeUrl: string;
                    value: _886.MsgStoreCode;
                };
                instantiateContract(value: _886.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _886.MsgInstantiateContract;
                };
                executeContract(value: _886.MsgExecuteContract): {
                    typeUrl: string;
                    value: _886.MsgExecuteContract;
                };
                migrateContract(value: _886.MsgMigrateContract): {
                    typeUrl: string;
                    value: _886.MsgMigrateContract;
                };
                updateAdmin(value: _886.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _886.MsgUpdateAdmin;
                };
                clearAdmin(value: _886.MsgClearAdmin): {
                    typeUrl: string;
                    value: _886.MsgClearAdmin;
                };
            };
            QueryContractInfoRequest: {
                encode(message: _884.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractInfoRequest;
                fromJSON(object: any): _884.QueryContractInfoRequest;
                toJSON(message: _884.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _884.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _884.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractInfoResponse;
                fromJSON(object: any): _884.QueryContractInfoResponse;
                toJSON(message: _884.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _884.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _884.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractHistoryRequest;
                fromJSON(object: any): _884.QueryContractHistoryRequest;
                toJSON(message: _884.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _884.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _884.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractHistoryResponse;
                fromJSON(object: any): _884.QueryContractHistoryResponse;
                toJSON(message: _884.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _884.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _884.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractsByCodeRequest;
                fromJSON(object: any): _884.QueryContractsByCodeRequest;
                toJSON(message: _884.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _884.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _884.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryContractsByCodeResponse;
                fromJSON(object: any): _884.QueryContractsByCodeResponse;
                toJSON(message: _884.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _884.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _884.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryAllContractStateRequest;
                fromJSON(object: any): _884.QueryAllContractStateRequest;
                toJSON(message: _884.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _884.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _884.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryAllContractStateResponse;
                fromJSON(object: any): _884.QueryAllContractStateResponse;
                toJSON(message: _884.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _884.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _884.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryRawContractStateRequest;
                fromJSON(object: any): _884.QueryRawContractStateRequest;
                toJSON(message: _884.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _884.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _884.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryRawContractStateResponse;
                fromJSON(object: any): _884.QueryRawContractStateResponse;
                toJSON(message: _884.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _884.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _884.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QuerySmartContractStateRequest;
                fromJSON(object: any): _884.QuerySmartContractStateRequest;
                toJSON(message: _884.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _884.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _884.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QuerySmartContractStateResponse;
                fromJSON(object: any): _884.QuerySmartContractStateResponse;
                toJSON(message: _884.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _884.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _884.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodeRequest;
                fromJSON(object: any): _884.QueryCodeRequest;
                toJSON(message: _884.QueryCodeRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _884.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _884.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.CodeInfoResponse;
                fromJSON(object: any): _884.CodeInfoResponse;
                toJSON(message: _884.CodeInfoResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _884.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _884.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodeResponse;
                fromJSON(object: any): _884.QueryCodeResponse;
                toJSON(message: _884.QueryCodeResponse): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _884.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _884.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodesRequest;
                fromJSON(object: any): _884.QueryCodesRequest;
                toJSON(message: _884.QueryCodesRequest): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _884.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _884.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryCodesResponse;
                fromJSON(object: any): _884.QueryCodesResponse;
                toJSON(message: _884.QueryCodesResponse): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _884.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _884.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryPinnedCodesRequest;
                fromJSON(object: any): _884.QueryPinnedCodesRequest;
                toJSON(message: _884.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _884.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _884.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QueryPinnedCodesResponse;
                fromJSON(object: any): _884.QueryPinnedCodesResponse;
                toJSON(message: _884.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _884.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _882.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.StoreCodeProposal;
                fromJSON(object: any): _882.StoreCodeProposal;
                toJSON(message: _882.StoreCodeProposal): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _882.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _882.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.InstantiateContractProposal;
                fromJSON(object: any): _882.InstantiateContractProposal;
                toJSON(message: _882.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _882.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _882.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.MigrateContractProposal;
                fromJSON(object: any): _882.MigrateContractProposal;
                toJSON(message: _882.MigrateContractProposal): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _882.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _882.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.SudoContractProposal;
                fromJSON(object: any): _882.SudoContractProposal;
                toJSON(message: _882.SudoContractProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _882.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _882.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.ExecuteContractProposal;
                fromJSON(object: any): _882.ExecuteContractProposal;
                toJSON(message: _882.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _882.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _882.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.UpdateAdminProposal;
                fromJSON(object: any): _882.UpdateAdminProposal;
                toJSON(message: _882.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _882.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _882.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.ClearAdminProposal;
                fromJSON(object: any): _882.ClearAdminProposal;
                toJSON(message: _882.ClearAdminProposal): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _882.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _882.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.PinCodesProposal;
                fromJSON(object: any): _882.PinCodesProposal;
                toJSON(message: _882.PinCodesProposal): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _882.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _882.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.UnpinCodesProposal;
                fromJSON(object: any): _882.UnpinCodesProposal;
                toJSON(message: _882.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _882.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _880.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.MsgIBCSend;
                fromJSON(object: any): _880.MsgIBCSend;
                toJSON(message: _880.MsgIBCSend): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _880.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _880.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.MsgIBCCloseChannel;
                fromJSON(object: any): _880.MsgIBCCloseChannel;
                toJSON(message: _880.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _880.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _878.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.GenesisState;
                fromJSON(object: any): _878.GenesisState;
                toJSON(message: _878.GenesisState): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _878.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _878.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.GenesisState_GenMsgs;
                fromJSON(object: any): _878.GenesisState_GenMsgs;
                toJSON(message: _878.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _878.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _878.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Code;
                fromJSON(object: any): _878.Code;
                toJSON(message: _878.Code): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _878.Code;
            };
            Contract: {
                encode(message: _878.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Contract;
                fromJSON(object: any): _878.Contract;
                toJSON(message: _878.Contract): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _878.Contract;
            };
            Sequence: {
                encode(message: _878.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Sequence;
                fromJSON(object: any): _878.Sequence;
                toJSON(message: _878.Sequence): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _878.Sequence;
            };
        };
    }
}
