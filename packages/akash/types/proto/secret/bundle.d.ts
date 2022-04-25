import * as _1050 from "./compute/v1beta1/genesis";
import * as _1051 from "./compute/v1beta1/msg";
import * as _1052 from "./compute/v1beta1/query";
import * as _1053 from "./compute/v1beta1/types";
import * as _1054 from "./registration/v1beta1/genesis";
import * as _1055 from "./registration/v1beta1/msg";
import * as _1056 from "./registration/v1beta1/query";
import * as _1057 from "./registration/v1beta1/types";
import * as _1058 from "./registration/v1beta1/remote_attestation/types";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _1053.AccessType;
            accessTypeToJSON(object: _1053.AccessType): string;
            AccessType: typeof _1053.AccessType;
            AccessTypeParam: {
                encode(message: _1053.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1053.AccessTypeParam;
                fromJSON(object: any): _1053.AccessTypeParam;
                toJSON(message: _1053.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _1053.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _1053.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1053.CodeInfo;
                fromJSON(object: any): _1053.CodeInfo;
                toJSON(message: _1053.CodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1053.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _1053.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1053.ContractCustomInfo;
                fromJSON(object: any): _1053.ContractCustomInfo;
                toJSON(message: _1053.ContractCustomInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1053.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _1053.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1053.ContractInfo;
                fromJSON(object: any): _1053.ContractInfo;
                toJSON(message: _1053.ContractInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1053.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _1053.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1053.AbsoluteTxPosition;
                fromJSON(object: any): _1053.AbsoluteTxPosition;
                toJSON(message: _1053.AbsoluteTxPosition): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1053.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _1053.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1053.Model;
                fromJSON(object: any): _1053.Model;
                toJSON(message: _1053.Model): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1053.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _1052.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractInfoRequest;
                fromJSON(object: any): _1052.QueryContractInfoRequest;
                toJSON(message: _1052.QueryContractInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1052.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _1052.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractInfoResponse;
                fromJSON(object: any): _1052.QueryContractInfoResponse;
                toJSON(message: _1052.QueryContractInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1052.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _1052.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractHistoryRequest;
                fromJSON(object: any): _1052.QueryContractHistoryRequest;
                toJSON(message: _1052.QueryContractHistoryRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _1052.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _1052.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractsByCodeRequest;
                fromJSON(object: any): _1052.QueryContractsByCodeRequest;
                toJSON(message: _1052.QueryContractsByCodeRequest): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _1052.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _1052.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.ContractInfoWithAddress;
                fromJSON(object: any): _1052.ContractInfoWithAddress;
                toJSON(message: _1052.ContractInfoWithAddress): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _1052.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _1052.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractsByCodeResponse;
                fromJSON(object: any): _1052.QueryContractsByCodeResponse;
                toJSON(message: _1052.QueryContractsByCodeResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _1052.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _1052.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QuerySmartContractStateRequest;
                fromJSON(object: any): _1052.QuerySmartContractStateRequest;
                toJSON(message: _1052.QuerySmartContractStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _1052.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _1052.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _1052.QueryContractAddressByLabelRequest;
                toJSON(message: _1052.QueryContractAddressByLabelRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _1052.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _1052.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractKeyRequest;
                fromJSON(object: any): _1052.QueryContractKeyRequest;
                toJSON(message: _1052.QueryContractKeyRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _1052.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _1052.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractHashRequest;
                fromJSON(object: any): _1052.QueryContractHashRequest;
                toJSON(message: _1052.QueryContractHashRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _1052.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _1052.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QuerySmartContractStateResponse;
                fromJSON(object: any): _1052.QuerySmartContractStateResponse;
                toJSON(message: _1052.QuerySmartContractStateResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _1052.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _1052.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryCodeRequest;
                fromJSON(object: any): _1052.QueryCodeRequest;
                toJSON(message: _1052.QueryCodeRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _1052.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _1052.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.CodeInfoResponse;
                fromJSON(object: any): _1052.CodeInfoResponse;
                toJSON(message: _1052.CodeInfoResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _1052.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _1052.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryCodeResponse;
                fromJSON(object: any): _1052.QueryCodeResponse;
                toJSON(message: _1052.QueryCodeResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _1052.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _1052.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryCodesResponse;
                fromJSON(object: any): _1052.QueryCodesResponse;
                toJSON(message: _1052.QueryCodesResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _1052.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _1052.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _1052.QueryContractAddressByLabelResponse;
                toJSON(message: _1052.QueryContractAddressByLabelResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _1052.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _1052.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractKeyResponse;
                fromJSON(object: any): _1052.QueryContractKeyResponse;
                toJSON(message: _1052.QueryContractKeyResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _1052.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _1052.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.QueryContractHashResponse;
                fromJSON(object: any): _1052.QueryContractHashResponse;
                toJSON(message: _1052.QueryContractHashResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _1052.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _1052.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1052.DecryptedAnswer;
                fromJSON(object: any): _1052.DecryptedAnswer;
                toJSON(message: _1052.DecryptedAnswer): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _1052.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _1051.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1051.MsgStoreCode;
                fromJSON(object: any): _1051.MsgStoreCode;
                toJSON(message: _1051.MsgStoreCode): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _1051.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _1051.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1051.MsgInstantiateContract;
                fromJSON(object: any): _1051.MsgInstantiateContract;
                toJSON(message: _1051.MsgInstantiateContract): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _1051.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _1051.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1051.MsgExecuteContract;
                fromJSON(object: any): _1051.MsgExecuteContract;
                toJSON(message: _1051.MsgExecuteContract): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _1051.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _1050.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1050.GenesisState;
                fromJSON(object: any): _1050.GenesisState;
                toJSON(message: _1050.GenesisState): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _1050.GenesisState;
            };
            Code: {
                encode(message: _1050.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1050.Code;
                fromJSON(object: any): _1050.Code;
                toJSON(message: _1050.Code): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _1050.Code;
            };
            Contract: {
                encode(message: _1050.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1050.Contract;
                fromJSON(object: any): _1050.Contract;
                toJSON(message: _1050.Contract): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _1050.Contract;
            };
            Sequence: {
                encode(message: _1050.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1050.Sequence;
                fromJSON(object: any): _1050.Sequence;
                toJSON(message: _1050.Sequence): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _1050.Sequence;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _1057.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1057.SeedConfig;
                fromJSON(object: any): _1057.SeedConfig;
                toJSON(message: _1057.SeedConfig): unknown;
                fromPartial<I extends unknown>(object: I): _1057.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _1057.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1057.RegistrationNodeInfo;
                fromJSON(object: any): _1057.RegistrationNodeInfo;
                toJSON(message: _1057.RegistrationNodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _1057.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _1056.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1056.QueryEncryptedSeedRequest;
                fromJSON(object: any): _1056.QueryEncryptedSeedRequest;
                toJSON(message: _1056.QueryEncryptedSeedRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _1056.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _1056.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1056.QueryEncryptedSeedResponse;
                fromJSON(object: any): _1056.QueryEncryptedSeedResponse;
                toJSON(message: _1056.QueryEncryptedSeedResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _1056.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _1055.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1055.RaAuthenticate;
                fromJSON(object: any): _1055.RaAuthenticate;
                toJSON(message: _1055.RaAuthenticate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _1055.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _1055.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1055.MasterCertificate;
                fromJSON(object: any): _1055.MasterCertificate;
                toJSON(message: _1055.MasterCertificate): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _1055.MasterCertificate;
            };
            Key: {
                encode(message: _1055.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1055.Key;
                fromJSON(object: any): _1055.Key;
                toJSON(message: _1055.Key): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _1055.Key;
            };
            GenesisState: {
                encode(message: _1054.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1054.GenesisState;
                fromJSON(object: any): _1054.GenesisState;
                toJSON(message: _1054.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _1054.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _1058.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1058.QuoteReport;
                    fromJSON(object: any): _1058.QuoteReport;
                    toJSON(message: _1058.QuoteReport): unknown;
                    fromPartial<I extends unknown>(object: I): _1058.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _1058.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1058.QuoteReportBody;
                    fromJSON(object: any): _1058.QuoteReportBody;
                    toJSON(message: _1058.QuoteReportBody): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _1058.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _1058.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1058.QuoteReportData;
                    fromJSON(object: any): _1058.QuoteReportData;
                    toJSON(message: _1058.QuoteReportData): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _1058.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _1058.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1058.EndorsedAttestationReport;
                    fromJSON(object: any): _1058.EndorsedAttestationReport;
                    toJSON(message: _1058.EndorsedAttestationReport): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _1058.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _1058.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1058.SGXEC256Signature;
                    fromJSON(object: any): _1058.SGXEC256Signature;
                    toJSON(message: _1058.SGXEC256Signature): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _1058.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _1058.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1058.PlatformInfoBlob;
                    fromJSON(object: any): _1058.PlatformInfoBlob;
                    toJSON(message: _1058.PlatformInfoBlob): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _1058.PlatformInfoBlob;
                };
            };
        }
    }
}
