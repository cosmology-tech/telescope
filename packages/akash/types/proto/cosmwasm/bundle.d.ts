import * as _858 from "./wasm/v1/genesis";
import * as _859 from "./wasm/v1/ibc";
import * as _860 from "./wasm/v1/proposal";
import * as _861 from "./wasm/v1/query";
import * as _862 from "./wasm/v1/tx";
import * as _871 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _871.AccessType;
            accessTypeToJSON(object: _871.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _871.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _871.ContractCodeHistoryOperationType): string;
            AccessType: typeof _871.AccessType;
            ContractCodeHistoryOperationType: typeof _871.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _871.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.AccessTypeParam;
                fromJSON(object: any): _871.AccessTypeParam;
                toJSON(message: _871.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _871.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _871.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.AccessConfig;
                fromJSON(object: any): _871.AccessConfig;
                toJSON(message: _871.AccessConfig): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _871.AccessConfig;
            };
            Params: {
                encode(message: _871.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.Params;
                fromJSON(object: any): _871.Params;
                toJSON(message: _871.Params): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _871.Params;
            };
            CodeInfo: {
                encode(message: _871.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.CodeInfo;
                fromJSON(object: any): _871.CodeInfo;
                toJSON(message: _871.CodeInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _871.CodeInfo;
            };
            ContractInfo: {
                encode(message: _871.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.ContractInfo;
                fromJSON(object: any): _871.ContractInfo;
                toJSON(message: _871.ContractInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _871.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _871.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.ContractCodeHistoryEntry;
                fromJSON(object: any): _871.ContractCodeHistoryEntry;
                toJSON(message: _871.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _871.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _871.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.AbsoluteTxPosition;
                fromJSON(object: any): _871.AbsoluteTxPosition;
                toJSON(message: _871.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _871.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _871.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _871.Model;
                fromJSON(object: any): _871.Model;
                toJSON(message: _871.Model): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _871.Model;
            };
            MsgStoreCode: {
                encode(message: _862.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgStoreCode;
                fromJSON(object: any): _862.MsgStoreCode;
                toJSON(message: _862.MsgStoreCode): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _862.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _862.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgStoreCodeResponse;
                fromJSON(object: any): _862.MsgStoreCodeResponse;
                toJSON(message: _862.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _862.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _862.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgInstantiateContract;
                fromJSON(object: any): _862.MsgInstantiateContract;
                toJSON(message: _862.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _862.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _862.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgInstantiateContractResponse;
                fromJSON(object: any): _862.MsgInstantiateContractResponse;
                toJSON(message: _862.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _862.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _862.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgExecuteContract;
                fromJSON(object: any): _862.MsgExecuteContract;
                toJSON(message: _862.MsgExecuteContract): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _862.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _862.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgExecuteContractResponse;
                fromJSON(object: any): _862.MsgExecuteContractResponse;
                toJSON(message: _862.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _862.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _862.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgMigrateContract;
                fromJSON(object: any): _862.MsgMigrateContract;
                toJSON(message: _862.MsgMigrateContract): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _862.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _862.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgMigrateContractResponse;
                fromJSON(object: any): _862.MsgMigrateContractResponse;
                toJSON(message: _862.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _862.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _862.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgUpdateAdmin;
                fromJSON(object: any): _862.MsgUpdateAdmin;
                toJSON(message: _862.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _862.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _862.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgUpdateAdminResponse;
                fromJSON(_: any): _862.MsgUpdateAdminResponse;
                toJSON(_: _862.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends unknown>(_: I_17): _862.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _862.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgClearAdmin;
                fromJSON(object: any): _862.MsgClearAdmin;
                toJSON(message: _862.MsgClearAdmin): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _862.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _862.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.MsgClearAdminResponse;
                fromJSON(_: any): _862.MsgClearAdminResponse;
                toJSON(_: _862.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends unknown>(_: I_19): _862.MsgClearAdminResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _862.MsgStoreCode) => {
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
                    }) => _862.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _862.MsgInstantiateContract) => {
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
                    }) => _862.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _862.MsgExecuteContract) => {
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
                    }) => _862.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _862.MsgMigrateContract) => {
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
                    }) => _862.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _862.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _862.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _862.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _862.MsgClearAdmin;
                };
            };
            encoded: {
                storeCode(value: _862.MsgStoreCode): {
                    type_url: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _862.MsgInstantiateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                executeContract(value: _862.MsgExecuteContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                migrateContract(value: _862.MsgMigrateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateAdmin(value: _862.MsgUpdateAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                clearAdmin(value: _862.MsgClearAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                storeCode(value: any): {
                    typeUrl: string;
                    value: _862.MsgStoreCode;
                };
                instantiateContract(value: any): {
                    typeUrl: string;
                    value: _862.MsgInstantiateContract;
                };
                executeContract(value: any): {
                    typeUrl: string;
                    value: _862.MsgExecuteContract;
                };
                migrateContract(value: any): {
                    typeUrl: string;
                    value: _862.MsgMigrateContract;
                };
                updateAdmin(value: any): {
                    typeUrl: string;
                    value: _862.MsgUpdateAdmin;
                };
                clearAdmin(value: any): {
                    typeUrl: string;
                    value: _862.MsgClearAdmin;
                };
            };
            toJSON: {
                storeCode(value: _862.MsgStoreCode): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract(value: _862.MsgInstantiateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeContract(value: _862.MsgExecuteContract): {
                    typeUrl: string;
                    value: unknown;
                };
                migrateContract(value: _862.MsgMigrateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAdmin(value: _862.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                clearAdmin(value: _862.MsgClearAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                storeCode(value: _862.MsgStoreCode): {
                    typeUrl: string;
                    value: _862.MsgStoreCode;
                };
                instantiateContract(value: _862.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _862.MsgInstantiateContract;
                };
                executeContract(value: _862.MsgExecuteContract): {
                    typeUrl: string;
                    value: _862.MsgExecuteContract;
                };
                migrateContract(value: _862.MsgMigrateContract): {
                    typeUrl: string;
                    value: _862.MsgMigrateContract;
                };
                updateAdmin(value: _862.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _862.MsgUpdateAdmin;
                };
                clearAdmin(value: _862.MsgClearAdmin): {
                    typeUrl: string;
                    value: _862.MsgClearAdmin;
                };
            };
            messages: {
                storeCode(value: _862.MsgStoreCode): {
                    typeUrl: string;
                    value: _862.MsgStoreCode;
                };
                instantiateContract(value: _862.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _862.MsgInstantiateContract;
                };
                executeContract(value: _862.MsgExecuteContract): {
                    typeUrl: string;
                    value: _862.MsgExecuteContract;
                };
                migrateContract(value: _862.MsgMigrateContract): {
                    typeUrl: string;
                    value: _862.MsgMigrateContract;
                };
                updateAdmin(value: _862.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _862.MsgUpdateAdmin;
                };
                clearAdmin(value: _862.MsgClearAdmin): {
                    typeUrl: string;
                    value: _862.MsgClearAdmin;
                };
            };
            QueryContractInfoRequest: {
                encode(message: _861.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryContractInfoRequest;
                fromJSON(object: any): _861.QueryContractInfoRequest;
                toJSON(message: _861.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _861.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _861.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryContractInfoResponse;
                fromJSON(object: any): _861.QueryContractInfoResponse;
                toJSON(message: _861.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _861.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _861.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryContractHistoryRequest;
                fromJSON(object: any): _861.QueryContractHistoryRequest;
                toJSON(message: _861.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _861.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _861.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryContractHistoryResponse;
                fromJSON(object: any): _861.QueryContractHistoryResponse;
                toJSON(message: _861.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _861.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _861.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryContractsByCodeRequest;
                fromJSON(object: any): _861.QueryContractsByCodeRequest;
                toJSON(message: _861.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _861.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _861.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryContractsByCodeResponse;
                fromJSON(object: any): _861.QueryContractsByCodeResponse;
                toJSON(message: _861.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _861.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _861.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryAllContractStateRequest;
                fromJSON(object: any): _861.QueryAllContractStateRequest;
                toJSON(message: _861.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _861.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _861.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryAllContractStateResponse;
                fromJSON(object: any): _861.QueryAllContractStateResponse;
                toJSON(message: _861.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _861.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _861.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryRawContractStateRequest;
                fromJSON(object: any): _861.QueryRawContractStateRequest;
                toJSON(message: _861.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _861.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _861.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryRawContractStateResponse;
                fromJSON(object: any): _861.QueryRawContractStateResponse;
                toJSON(message: _861.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _861.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _861.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QuerySmartContractStateRequest;
                fromJSON(object: any): _861.QuerySmartContractStateRequest;
                toJSON(message: _861.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _861.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _861.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QuerySmartContractStateResponse;
                fromJSON(object: any): _861.QuerySmartContractStateResponse;
                toJSON(message: _861.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _861.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _861.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryCodeRequest;
                fromJSON(object: any): _861.QueryCodeRequest;
                toJSON(message: _861.QueryCodeRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _861.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _861.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.CodeInfoResponse;
                fromJSON(object: any): _861.CodeInfoResponse;
                toJSON(message: _861.CodeInfoResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _861.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _861.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryCodeResponse;
                fromJSON(object: any): _861.QueryCodeResponse;
                toJSON(message: _861.QueryCodeResponse): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _861.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _861.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryCodesRequest;
                fromJSON(object: any): _861.QueryCodesRequest;
                toJSON(message: _861.QueryCodesRequest): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _861.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _861.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryCodesResponse;
                fromJSON(object: any): _861.QueryCodesResponse;
                toJSON(message: _861.QueryCodesResponse): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _861.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _861.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryPinnedCodesRequest;
                fromJSON(object: any): _861.QueryPinnedCodesRequest;
                toJSON(message: _861.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _861.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _861.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _861.QueryPinnedCodesResponse;
                fromJSON(object: any): _861.QueryPinnedCodesResponse;
                toJSON(message: _861.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _861.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _860.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.StoreCodeProposal;
                fromJSON(object: any): _860.StoreCodeProposal;
                toJSON(message: _860.StoreCodeProposal): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _860.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _860.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.InstantiateContractProposal;
                fromJSON(object: any): _860.InstantiateContractProposal;
                toJSON(message: _860.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _860.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _860.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.MigrateContractProposal;
                fromJSON(object: any): _860.MigrateContractProposal;
                toJSON(message: _860.MigrateContractProposal): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _860.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _860.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.SudoContractProposal;
                fromJSON(object: any): _860.SudoContractProposal;
                toJSON(message: _860.SudoContractProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _860.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _860.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.ExecuteContractProposal;
                fromJSON(object: any): _860.ExecuteContractProposal;
                toJSON(message: _860.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _860.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _860.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.UpdateAdminProposal;
                fromJSON(object: any): _860.UpdateAdminProposal;
                toJSON(message: _860.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _860.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _860.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.ClearAdminProposal;
                fromJSON(object: any): _860.ClearAdminProposal;
                toJSON(message: _860.ClearAdminProposal): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _860.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _860.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.PinCodesProposal;
                fromJSON(object: any): _860.PinCodesProposal;
                toJSON(message: _860.PinCodesProposal): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _860.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _860.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.UnpinCodesProposal;
                fromJSON(object: any): _860.UnpinCodesProposal;
                toJSON(message: _860.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _860.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _859.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _859.MsgIBCSend;
                fromJSON(object: any): _859.MsgIBCSend;
                toJSON(message: _859.MsgIBCSend): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _859.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _859.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _859.MsgIBCCloseChannel;
                fromJSON(object: any): _859.MsgIBCCloseChannel;
                toJSON(message: _859.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _859.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _858.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.GenesisState;
                fromJSON(object: any): _858.GenesisState;
                toJSON(message: _858.GenesisState): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _858.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _858.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.GenesisState_GenMsgs;
                fromJSON(object: any): _858.GenesisState_GenMsgs;
                toJSON(message: _858.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _858.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _858.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.Code;
                fromJSON(object: any): _858.Code;
                toJSON(message: _858.Code): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _858.Code;
            };
            Contract: {
                encode(message: _858.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.Contract;
                fromJSON(object: any): _858.Contract;
                toJSON(message: _858.Contract): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _858.Contract;
            };
            Sequence: {
                encode(message: _858.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.Sequence;
                fromJSON(object: any): _858.Sequence;
                toJSON(message: _858.Sequence): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _858.Sequence;
            };
        };
    }
}
