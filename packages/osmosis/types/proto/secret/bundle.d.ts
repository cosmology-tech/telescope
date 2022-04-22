import * as _816 from "./compute/v1beta1/genesis";
import * as _817 from "./compute/v1beta1/msg";
import * as _818 from "./compute/v1beta1/query";
import * as _819 from "./compute/v1beta1/types";
import * as _820 from "./registration/v1beta1/genesis";
import * as _821 from "./registration/v1beta1/msg";
import * as _822 from "./registration/v1beta1/query";
import * as _823 from "./registration/v1beta1/types";
import * as _824 from "./registration/v1beta1/remote_attestation/types";
export declare namespace secret {
    namespace compute {
        const v1beta1: {
            accessTypeFromJSON(object: any): _819.AccessType;
            accessTypeToJSON(object: _819.AccessType): string;
            AccessType: typeof _819.AccessType;
            AccessTypeParam: {
                encode(message: _819.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _819.AccessTypeParam;
                fromJSON(object: any): _819.AccessTypeParam;
                toJSON(message: _819.AccessTypeParam): unknown;
                fromPartial<I extends unknown>(object: I): _819.AccessTypeParam;
            };
            CodeInfo: {
                encode(message: _819.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _819.CodeInfo;
                fromJSON(object: any): _819.CodeInfo;
                toJSON(message: _819.CodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _819.CodeInfo;
            };
            ContractCustomInfo: {
                encode(message: _819.ContractCustomInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _819.ContractCustomInfo;
                fromJSON(object: any): _819.ContractCustomInfo;
                toJSON(message: _819.ContractCustomInfo): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _819.ContractCustomInfo;
            };
            ContractInfo: {
                encode(message: _819.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _819.ContractInfo;
                fromJSON(object: any): _819.ContractInfo;
                toJSON(message: _819.ContractInfo): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _819.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _819.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _819.AbsoluteTxPosition;
                fromJSON(object: any): _819.AbsoluteTxPosition;
                toJSON(message: _819.AbsoluteTxPosition): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _819.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _819.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _819.Model;
                fromJSON(object: any): _819.Model;
                toJSON(message: _819.Model): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _819.Model;
            };
            QueryContractInfoRequest: {
                encode(message: _818.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractInfoRequest;
                fromJSON(object: any): _818.QueryContractInfoRequest;
                toJSON(message: _818.QueryContractInfoRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _818.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _818.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractInfoResponse;
                fromJSON(object: any): _818.QueryContractInfoResponse;
                toJSON(message: _818.QueryContractInfoResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _818.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _818.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractHistoryRequest;
                fromJSON(object: any): _818.QueryContractHistoryRequest;
                toJSON(message: _818.QueryContractHistoryRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _818.QueryContractHistoryRequest;
            };
            QueryContractsByCodeRequest: {
                encode(message: _818.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractsByCodeRequest;
                fromJSON(object: any): _818.QueryContractsByCodeRequest;
                toJSON(message: _818.QueryContractsByCodeRequest): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _818.QueryContractsByCodeRequest;
            };
            ContractInfoWithAddress: {
                encode(message: _818.ContractInfoWithAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.ContractInfoWithAddress;
                fromJSON(object: any): _818.ContractInfoWithAddress;
                toJSON(message: _818.ContractInfoWithAddress): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _818.ContractInfoWithAddress;
            };
            QueryContractsByCodeResponse: {
                encode(message: _818.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractsByCodeResponse;
                fromJSON(object: any): _818.QueryContractsByCodeResponse;
                toJSON(message: _818.QueryContractsByCodeResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _818.QueryContractsByCodeResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _818.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QuerySmartContractStateRequest;
                fromJSON(object: any): _818.QuerySmartContractStateRequest;
                toJSON(message: _818.QuerySmartContractStateRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _818.QuerySmartContractStateRequest;
            };
            QueryContractAddressByLabelRequest: {
                encode(message: _818.QueryContractAddressByLabelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractAddressByLabelRequest;
                fromJSON(object: any): _818.QueryContractAddressByLabelRequest;
                toJSON(message: _818.QueryContractAddressByLabelRequest): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _818.QueryContractAddressByLabelRequest;
            };
            QueryContractKeyRequest: {
                encode(message: _818.QueryContractKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractKeyRequest;
                fromJSON(object: any): _818.QueryContractKeyRequest;
                toJSON(message: _818.QueryContractKeyRequest): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _818.QueryContractKeyRequest;
            };
            QueryContractHashRequest: {
                encode(message: _818.QueryContractHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractHashRequest;
                fromJSON(object: any): _818.QueryContractHashRequest;
                toJSON(message: _818.QueryContractHashRequest): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _818.QueryContractHashRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _818.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QuerySmartContractStateResponse;
                fromJSON(object: any): _818.QuerySmartContractStateResponse;
                toJSON(message: _818.QuerySmartContractStateResponse): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _818.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _818.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryCodeRequest;
                fromJSON(object: any): _818.QueryCodeRequest;
                toJSON(message: _818.QueryCodeRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _818.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _818.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.CodeInfoResponse;
                fromJSON(object: any): _818.CodeInfoResponse;
                toJSON(message: _818.CodeInfoResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _818.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _818.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryCodeResponse;
                fromJSON(object: any): _818.QueryCodeResponse;
                toJSON(message: _818.QueryCodeResponse): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _818.QueryCodeResponse;
            };
            QueryCodesResponse: {
                encode(message: _818.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryCodesResponse;
                fromJSON(object: any): _818.QueryCodesResponse;
                toJSON(message: _818.QueryCodesResponse): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _818.QueryCodesResponse;
            };
            QueryContractAddressByLabelResponse: {
                encode(message: _818.QueryContractAddressByLabelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractAddressByLabelResponse;
                fromJSON(object: any): _818.QueryContractAddressByLabelResponse;
                toJSON(message: _818.QueryContractAddressByLabelResponse): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _818.QueryContractAddressByLabelResponse;
            };
            QueryContractKeyResponse: {
                encode(message: _818.QueryContractKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractKeyResponse;
                fromJSON(object: any): _818.QueryContractKeyResponse;
                toJSON(message: _818.QueryContractKeyResponse): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _818.QueryContractKeyResponse;
            };
            QueryContractHashResponse: {
                encode(message: _818.QueryContractHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.QueryContractHashResponse;
                fromJSON(object: any): _818.QueryContractHashResponse;
                toJSON(message: _818.QueryContractHashResponse): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _818.QueryContractHashResponse;
            };
            DecryptedAnswer: {
                encode(message: _818.DecryptedAnswer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _818.DecryptedAnswer;
                fromJSON(object: any): _818.DecryptedAnswer;
                toJSON(message: _818.DecryptedAnswer): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _818.DecryptedAnswer;
            };
            MsgStoreCode: {
                encode(message: _817.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _817.MsgStoreCode;
                fromJSON(object: any): _817.MsgStoreCode;
                toJSON(message: _817.MsgStoreCode): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _817.MsgStoreCode;
            };
            MsgInstantiateContract: {
                encode(message: _817.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _817.MsgInstantiateContract;
                fromJSON(object: any): _817.MsgInstantiateContract;
                toJSON(message: _817.MsgInstantiateContract): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _817.MsgInstantiateContract;
            };
            MsgExecuteContract: {
                encode(message: _817.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _817.MsgExecuteContract;
                fromJSON(object: any): _817.MsgExecuteContract;
                toJSON(message: _817.MsgExecuteContract): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _817.MsgExecuteContract;
            };
            GenesisState: {
                encode(message: _816.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _816.GenesisState;
                fromJSON(object: any): _816.GenesisState;
                toJSON(message: _816.GenesisState): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _816.GenesisState;
            };
            Code: {
                encode(message: _816.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _816.Code;
                fromJSON(object: any): _816.Code;
                toJSON(message: _816.Code): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _816.Code;
            };
            Contract: {
                encode(message: _816.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _816.Contract;
                fromJSON(object: any): _816.Contract;
                toJSON(message: _816.Contract): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _816.Contract;
            };
            Sequence: {
                encode(message: _816.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _816.Sequence;
                fromJSON(object: any): _816.Sequence;
                toJSON(message: _816.Sequence): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _816.Sequence;
            };
        };
    }
    namespace registration {
        const v1beta1: {
            SeedConfig: {
                encode(message: _823.SeedConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.SeedConfig;
                fromJSON(object: any): _823.SeedConfig;
                toJSON(message: _823.SeedConfig): unknown;
                fromPartial<I extends unknown>(object: I): _823.SeedConfig;
            };
            RegistrationNodeInfo: {
                encode(message: _823.RegistrationNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _823.RegistrationNodeInfo;
                fromJSON(object: any): _823.RegistrationNodeInfo;
                toJSON(message: _823.RegistrationNodeInfo): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _823.RegistrationNodeInfo;
            };
            QueryEncryptedSeedRequest: {
                encode(message: _822.QueryEncryptedSeedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QueryEncryptedSeedRequest;
                fromJSON(object: any): _822.QueryEncryptedSeedRequest;
                toJSON(message: _822.QueryEncryptedSeedRequest): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _822.QueryEncryptedSeedRequest;
            };
            QueryEncryptedSeedResponse: {
                encode(message: _822.QueryEncryptedSeedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.QueryEncryptedSeedResponse;
                fromJSON(object: any): _822.QueryEncryptedSeedResponse;
                toJSON(message: _822.QueryEncryptedSeedResponse): unknown;
                fromPartial<I_3 extends unknown>(object: I_3): _822.QueryEncryptedSeedResponse;
            };
            RaAuthenticate: {
                encode(message: _821.RaAuthenticate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _821.RaAuthenticate;
                fromJSON(object: any): _821.RaAuthenticate;
                toJSON(message: _821.RaAuthenticate): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _821.RaAuthenticate;
            };
            MasterCertificate: {
                encode(message: _821.MasterCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _821.MasterCertificate;
                fromJSON(object: any): _821.MasterCertificate;
                toJSON(message: _821.MasterCertificate): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _821.MasterCertificate;
            };
            Key: {
                encode(message: _821.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _821.Key;
                fromJSON(object: any): _821.Key;
                toJSON(message: _821.Key): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _821.Key;
            };
            GenesisState: {
                encode(message: _820.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _820.GenesisState;
                fromJSON(object: any): _820.GenesisState;
                toJSON(message: _820.GenesisState): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _820.GenesisState;
            };
        };
        namespace remote_attestation {
            const v1beta1: {
                QuoteReport: {
                    encode(message: _824.QuoteReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.QuoteReport;
                    fromJSON(object: any): _824.QuoteReport;
                    toJSON(message: _824.QuoteReport): unknown;
                    fromPartial<I extends unknown>(object: I): _824.QuoteReport;
                };
                QuoteReportBody: {
                    encode(message: _824.QuoteReportBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.QuoteReportBody;
                    fromJSON(object: any): _824.QuoteReportBody;
                    toJSON(message: _824.QuoteReportBody): unknown;
                    fromPartial<I_1 extends unknown>(object: I_1): _824.QuoteReportBody;
                };
                QuoteReportData: {
                    encode(message: _824.QuoteReportData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.QuoteReportData;
                    fromJSON(object: any): _824.QuoteReportData;
                    toJSON(message: _824.QuoteReportData): unknown;
                    fromPartial<I_2 extends unknown>(object: I_2): _824.QuoteReportData;
                };
                EndorsedAttestationReport: {
                    encode(message: _824.EndorsedAttestationReport, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.EndorsedAttestationReport;
                    fromJSON(object: any): _824.EndorsedAttestationReport;
                    toJSON(message: _824.EndorsedAttestationReport): unknown;
                    fromPartial<I_3 extends unknown>(object: I_3): _824.EndorsedAttestationReport;
                };
                SGXEC256Signature: {
                    encode(message: _824.SGXEC256Signature, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.SGXEC256Signature;
                    fromJSON(object: any): _824.SGXEC256Signature;
                    toJSON(message: _824.SGXEC256Signature): unknown;
                    fromPartial<I_4 extends unknown>(object: I_4): _824.SGXEC256Signature;
                };
                PlatformInfoBlob: {
                    encode(message: _824.PlatformInfoBlob, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.PlatformInfoBlob;
                    fromJSON(object: any): _824.PlatformInfoBlob;
                    toJSON(message: _824.PlatformInfoBlob): unknown;
                    fromPartial<I_5 extends unknown>(object: I_5): _824.PlatformInfoBlob;
                };
            };
        }
    }
}
