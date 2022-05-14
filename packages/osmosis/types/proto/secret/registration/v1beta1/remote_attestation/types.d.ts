import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface QuoteReport {
    id: string;
    timestamp: string;
    version: Long;
    isvEnclaveQuoteStatus: string;
    platformInfoBlob: string;
    isvEnclaveQuoteBody: string;
    advisoryIds: string[];
}
export interface QuoteReportBody {
    mrEnclave: string;
    mrSigner: string;
    reportData: string;
}
export interface QuoteReportData {
    version: Long;
    signType: Long;
    reportBody: QuoteReportBody;
}
export interface EndorsedAttestationReport {
    report: Uint8Array;
    signature: Uint8Array;
    signingCert: Uint8Array;
}
export interface SGXEC256Signature {
    gx: string;
    gy: string;
}
export interface PlatformInfoBlob {
    sgxEpidGroupFlags: number;
    sgxTcbEvaluationFlags: number;
    pseEvaluationFlags: number;
    latestEquivalentTcbPsvn: string;
    latestPseIsvsvn: string;
    latestPsdaSvn: string;
    xeid: number;
    gid: number;
    sgxEc256SignatureT: SGXEC256Signature;
}
export declare const QuoteReport: {
    encode(message: QuoteReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReport;
    fromJSON(object: any): QuoteReport;
    toJSON(message: QuoteReport): unknown;
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
    } & Record<Exclude<keyof I, keyof QuoteReport>, never>>(object: I): QuoteReport;
};
export declare const QuoteReportBody: {
    encode(message: QuoteReportBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportBody;
    fromJSON(object: any): QuoteReportBody;
    toJSON(message: QuoteReportBody): unknown;
    fromPartial<I extends {
        mrEnclave?: string;
        mrSigner?: string;
        reportData?: string;
    } & {
        mrEnclave?: string;
        mrSigner?: string;
        reportData?: string;
    } & Record<Exclude<keyof I, keyof QuoteReportBody>, never>>(object: I): QuoteReportBody;
};
export declare const QuoteReportData: {
    encode(message: QuoteReportData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportData;
    fromJSON(object: any): QuoteReportData;
    toJSON(message: QuoteReportData): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["reportBody"], keyof QuoteReportBody>, never>;
    } & Record<Exclude<keyof I, keyof QuoteReportData>, never>>(object: I): QuoteReportData;
};
export declare const EndorsedAttestationReport: {
    encode(message: EndorsedAttestationReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EndorsedAttestationReport;
    fromJSON(object: any): EndorsedAttestationReport;
    toJSON(message: EndorsedAttestationReport): unknown;
    fromPartial<I extends {
        report?: Uint8Array;
        signature?: Uint8Array;
        signingCert?: Uint8Array;
    } & {
        report?: Uint8Array;
        signature?: Uint8Array;
        signingCert?: Uint8Array;
    } & Record<Exclude<keyof I, keyof EndorsedAttestationReport>, never>>(object: I): EndorsedAttestationReport;
};
export declare const SGXEC256Signature: {
    encode(message: SGXEC256Signature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SGXEC256Signature;
    fromJSON(object: any): SGXEC256Signature;
    toJSON(message: SGXEC256Signature): unknown;
    fromPartial<I extends {
        gx?: string;
        gy?: string;
    } & {
        gx?: string;
        gy?: string;
    } & Record<Exclude<keyof I, keyof SGXEC256Signature>, never>>(object: I): SGXEC256Signature;
};
export declare const PlatformInfoBlob: {
    encode(message: PlatformInfoBlob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PlatformInfoBlob;
    fromJSON(object: any): PlatformInfoBlob;
    toJSON(message: PlatformInfoBlob): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["sgxEc256SignatureT"], keyof SGXEC256Signature>, never>;
    } & Record<Exclude<keyof I, keyof PlatformInfoBlob>, never>>(object: I): PlatformInfoBlob;
};
