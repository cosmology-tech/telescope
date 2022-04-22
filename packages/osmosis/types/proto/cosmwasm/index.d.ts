import * as _624 from "./wasm/v1/genesis";
import * as _625 from "./wasm/v1/ibc";
import * as _626 from "./wasm/v1/proposal";
import * as _627 from "./wasm/v1/query";
import * as _628 from "./wasm/v1/tx";
import * as _637 from "./wasm/v1/types";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            accessTypeFromJSON(object: any): _637.AccessType;
            accessTypeToJSON(object: _637.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _637.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _637.ContractCodeHistoryOperationType): string;
            AccessType: typeof _637.AccessType;
            ContractCodeHistoryOperationType: typeof _637.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _637.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.AccessTypeParam;
                fromJSON(object: any): _637.AccessTypeParam;
                toJSON(message: _637.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _637.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _637.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.AccessConfig;
                fromJSON(object: any): _637.AccessConfig;
                toJSON(message: _637.AccessConfig): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _637.AccessConfig;
            };
            Params: {
                encode(message: _637.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.Params;
                fromJSON(object: any): _637.Params;
                toJSON(message: _637.Params): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _637.Params;
            };
            CodeInfo: {
                encode(message: _637.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.CodeInfo;
                fromJSON(object: any): _637.CodeInfo;
                toJSON(message: _637.CodeInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _637.CodeInfo;
            };
            ContractInfo: {
                encode(message: _637.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.ContractInfo;
                fromJSON(object: any): _637.ContractInfo;
                toJSON(message: _637.ContractInfo): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _637.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _637.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.ContractCodeHistoryEntry;
                fromJSON(object: any): _637.ContractCodeHistoryEntry;
                toJSON(message: _637.ContractCodeHistoryEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _637.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _637.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.AbsoluteTxPosition;
                fromJSON(object: any): _637.AbsoluteTxPosition;
                toJSON(message: _637.AbsoluteTxPosition): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _637.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _637.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _637.Model;
                fromJSON(object: any): _637.Model;
                toJSON(message: _637.Model): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _637.Model;
            };
            MsgStoreCode: {
                encode(message: _628.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgStoreCode;
                fromJSON(object: any): _628.MsgStoreCode;
                toJSON(message: _628.MsgStoreCode): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _628.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _628.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgStoreCodeResponse;
                fromJSON(object: any): _628.MsgStoreCodeResponse;
                toJSON(message: _628.MsgStoreCodeResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _628.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _628.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgInstantiateContract;
                fromJSON(object: any): _628.MsgInstantiateContract;
                toJSON(message: _628.MsgInstantiateContract): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _628.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _628.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgInstantiateContractResponse;
                fromJSON(object: any): _628.MsgInstantiateContractResponse;
                toJSON(message: _628.MsgInstantiateContractResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _628.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _628.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgExecuteContract;
                fromJSON(object: any): _628.MsgExecuteContract;
                toJSON(message: _628.MsgExecuteContract): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _628.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _628.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgExecuteContractResponse;
                fromJSON(object: any): _628.MsgExecuteContractResponse;
                toJSON(message: _628.MsgExecuteContractResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _628.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _628.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgMigrateContract;
                fromJSON(object: any): _628.MsgMigrateContract;
                toJSON(message: _628.MsgMigrateContract): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _628.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _628.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgMigrateContractResponse;
                fromJSON(object: any): _628.MsgMigrateContractResponse;
                toJSON(message: _628.MsgMigrateContractResponse): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _628.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _628.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgUpdateAdmin;
                fromJSON(object: any): _628.MsgUpdateAdmin;
                toJSON(message: _628.MsgUpdateAdmin): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _628.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _628.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgUpdateAdminResponse;
                fromJSON(_: any): _628.MsgUpdateAdminResponse;
                toJSON(_: _628.MsgUpdateAdminResponse): unknown;
                fromPartial<I_17 extends unknown>(_: I_17): _628.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _628.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgClearAdmin;
                fromJSON(object: any): _628.MsgClearAdmin;
                toJSON(message: _628.MsgClearAdmin): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _628.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _628.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _628.MsgClearAdminResponse;
                fromJSON(_: any): _628.MsgClearAdminResponse;
                toJSON(_: _628.MsgClearAdminResponse): unknown;
                fromPartial<I_19 extends unknown>(_: I_19): _628.MsgClearAdminResponse;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _628.MsgStoreCode) => {
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
                    }) => _628.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _628.MsgInstantiateContract) => {
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
                    }) => _628.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _628.MsgExecuteContract) => {
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
                    }) => _628.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _628.MsgMigrateContract) => {
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
                    }) => _628.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _628.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _628.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _628.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _628.MsgClearAdmin;
                };
            };
            encoded: {
                storeCode(value: _628.MsgStoreCode): {
                    type_url: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _628.MsgInstantiateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                executeContract(value: _628.MsgExecuteContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                migrateContract(value: _628.MsgMigrateContract): {
                    type_url: string;
                    value: Uint8Array;
                };
                updateAdmin(value: _628.MsgUpdateAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
                clearAdmin(value: _628.MsgClearAdmin): {
                    type_url: string;
                    value: Uint8Array;
                };
            };
            fromJSON: {
                storeCode(value: any): {
                    typeUrl: string;
                    value: _628.MsgStoreCode;
                };
                instantiateContract(value: any): {
                    typeUrl: string;
                    value: _628.MsgInstantiateContract;
                };
                executeContract(value: any): {
                    typeUrl: string;
                    value: _628.MsgExecuteContract;
                };
                migrateContract(value: any): {
                    typeUrl: string;
                    value: _628.MsgMigrateContract;
                };
                updateAdmin(value: any): {
                    typeUrl: string;
                    value: _628.MsgUpdateAdmin;
                };
                clearAdmin(value: any): {
                    typeUrl: string;
                    value: _628.MsgClearAdmin;
                };
            };
            toJSON: {
                storeCode(value: _628.MsgStoreCode): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract(value: _628.MsgInstantiateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeContract(value: _628.MsgExecuteContract): {
                    typeUrl: string;
                    value: unknown;
                };
                migrateContract(value: _628.MsgMigrateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                updateAdmin(value: _628.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
                clearAdmin(value: _628.MsgClearAdmin): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            json: {
                storeCode(value: _628.MsgStoreCode): {
                    typeUrl: string;
                    value: _628.MsgStoreCode;
                };
                instantiateContract(value: _628.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _628.MsgInstantiateContract;
                };
                executeContract(value: _628.MsgExecuteContract): {
                    typeUrl: string;
                    value: _628.MsgExecuteContract;
                };
                migrateContract(value: _628.MsgMigrateContract): {
                    typeUrl: string;
                    value: _628.MsgMigrateContract;
                };
                updateAdmin(value: _628.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _628.MsgUpdateAdmin;
                };
                clearAdmin(value: _628.MsgClearAdmin): {
                    typeUrl: string;
                    value: _628.MsgClearAdmin;
                };
            };
            messages: {
                storeCode(value: _628.MsgStoreCode): {
                    typeUrl: string;
                    value: _628.MsgStoreCode;
                };
                instantiateContract(value: _628.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _628.MsgInstantiateContract;
                };
                executeContract(value: _628.MsgExecuteContract): {
                    typeUrl: string;
                    value: _628.MsgExecuteContract;
                };
                migrateContract(value: _628.MsgMigrateContract): {
                    typeUrl: string;
                    value: _628.MsgMigrateContract;
                };
                updateAdmin(value: _628.MsgUpdateAdmin): {
                    typeUrl: string;
                    value: _628.MsgUpdateAdmin;
                };
                clearAdmin(value: _628.MsgClearAdmin): {
                    typeUrl: string;
                    value: _628.MsgClearAdmin;
                };
            };
            QueryContractInfoRequest: {
                encode(message: _627.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryContractInfoRequest;
                fromJSON(object: any): _627.QueryContractInfoRequest;
                toJSON(message: _627.QueryContractInfoRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _627.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _627.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryContractInfoResponse;
                fromJSON(object: any): _627.QueryContractInfoResponse;
                toJSON(message: _627.QueryContractInfoResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _627.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _627.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryContractHistoryRequest;
                fromJSON(object: any): _627.QueryContractHistoryRequest;
                toJSON(message: _627.QueryContractHistoryRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _627.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _627.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryContractHistoryResponse;
                fromJSON(object: any): _627.QueryContractHistoryResponse;
                toJSON(message: _627.QueryContractHistoryResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _627.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _627.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryContractsByCodeRequest;
                fromJSON(object: any): _627.QueryContractsByCodeRequest;
                toJSON(message: _627.QueryContractsByCodeRequest): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _627.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _627.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryContractsByCodeResponse;
                fromJSON(object: any): _627.QueryContractsByCodeResponse;
                toJSON(message: _627.QueryContractsByCodeResponse): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _627.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _627.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryAllContractStateRequest;
                fromJSON(object: any): _627.QueryAllContractStateRequest;
                toJSON(message: _627.QueryAllContractStateRequest): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _627.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _627.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryAllContractStateResponse;
                fromJSON(object: any): _627.QueryAllContractStateResponse;
                toJSON(message: _627.QueryAllContractStateResponse): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _627.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _627.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryRawContractStateRequest;
                fromJSON(object: any): _627.QueryRawContractStateRequest;
                toJSON(message: _627.QueryRawContractStateRequest): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _627.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _627.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryRawContractStateResponse;
                fromJSON(object: any): _627.QueryRawContractStateResponse;
                toJSON(message: _627.QueryRawContractStateResponse): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _627.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _627.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QuerySmartContractStateRequest;
                fromJSON(object: any): _627.QuerySmartContractStateRequest;
                toJSON(message: _627.QuerySmartContractStateRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _627.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _627.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QuerySmartContractStateResponse;
                fromJSON(object: any): _627.QuerySmartContractStateResponse;
                toJSON(message: _627.QuerySmartContractStateResponse): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _627.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _627.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryCodeRequest;
                fromJSON(object: any): _627.QueryCodeRequest;
                toJSON(message: _627.QueryCodeRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _627.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _627.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.CodeInfoResponse;
                fromJSON(object: any): _627.CodeInfoResponse;
                toJSON(message: _627.CodeInfoResponse): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _627.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _627.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryCodeResponse;
                fromJSON(object: any): _627.QueryCodeResponse;
                toJSON(message: _627.QueryCodeResponse): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _627.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _627.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryCodesRequest;
                fromJSON(object: any): _627.QueryCodesRequest;
                toJSON(message: _627.QueryCodesRequest): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _627.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _627.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryCodesResponse;
                fromJSON(object: any): _627.QueryCodesResponse;
                toJSON(message: _627.QueryCodesResponse): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _627.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _627.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryPinnedCodesRequest;
                fromJSON(object: any): _627.QueryPinnedCodesRequest;
                toJSON(message: _627.QueryPinnedCodesRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _627.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _627.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _627.QueryPinnedCodesResponse;
                fromJSON(object: any): _627.QueryPinnedCodesResponse;
                toJSON(message: _627.QueryPinnedCodesResponse): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _627.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _626.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.StoreCodeProposal;
                fromJSON(object: any): _626.StoreCodeProposal;
                toJSON(message: _626.StoreCodeProposal): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _626.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _626.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.InstantiateContractProposal;
                fromJSON(object: any): _626.InstantiateContractProposal;
                toJSON(message: _626.InstantiateContractProposal): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _626.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _626.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.MigrateContractProposal;
                fromJSON(object: any): _626.MigrateContractProposal;
                toJSON(message: _626.MigrateContractProposal): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _626.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _626.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.SudoContractProposal;
                fromJSON(object: any): _626.SudoContractProposal;
                toJSON(message: _626.SudoContractProposal): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _626.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _626.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.ExecuteContractProposal;
                fromJSON(object: any): _626.ExecuteContractProposal;
                toJSON(message: _626.ExecuteContractProposal): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _626.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _626.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.UpdateAdminProposal;
                fromJSON(object: any): _626.UpdateAdminProposal;
                toJSON(message: _626.UpdateAdminProposal): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _626.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _626.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.ClearAdminProposal;
                fromJSON(object: any): _626.ClearAdminProposal;
                toJSON(message: _626.ClearAdminProposal): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _626.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _626.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.PinCodesProposal;
                fromJSON(object: any): _626.PinCodesProposal;
                toJSON(message: _626.PinCodesProposal): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _626.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _626.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _626.UnpinCodesProposal;
                fromJSON(object: any): _626.UnpinCodesProposal;
                toJSON(message: _626.UnpinCodesProposal): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _626.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _625.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.MsgIBCSend;
                fromJSON(object: any): _625.MsgIBCSend;
                toJSON(message: _625.MsgIBCSend): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _625.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _625.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _625.MsgIBCCloseChannel;
                fromJSON(object: any): _625.MsgIBCCloseChannel;
                toJSON(message: _625.MsgIBCCloseChannel): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _625.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _624.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.GenesisState;
                fromJSON(object: any): _624.GenesisState;
                toJSON(message: _624.GenesisState): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _624.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _624.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.GenesisState_GenMsgs;
                fromJSON(object: any): _624.GenesisState_GenMsgs;
                toJSON(message: _624.GenesisState_GenMsgs): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _624.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _624.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.Code;
                fromJSON(object: any): _624.Code;
                toJSON(message: _624.Code): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _624.Code;
            };
            Contract: {
                encode(message: _624.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.Contract;
                fromJSON(object: any): _624.Contract;
                toJSON(message: _624.Contract): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _624.Contract;
            };
            Sequence: {
                encode(message: _624.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _624.Sequence;
                fromJSON(object: any): _624.Sequence;
                toJSON(message: _624.Sequence): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _624.Sequence;
            };
        };
    }
}
