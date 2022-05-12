import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface QuoteReport {
  id: string;
  timestamp: string;
  version: Long;
  isvEnclaveQuoteStatus: string;
  platformInfoBlob: string;
  isvEnclaveQuoteBody: string;
  advisoryIds: string[];
}

function createBaseQuoteReport(): QuoteReport {
  return {
    id: "",
    timestamp: "",
    version: Long.UZERO,
    isvEnclaveQuoteStatus: "",
    platformInfoBlob: "",
    isvEnclaveQuoteBody: "",
    advisoryIds: []
  };
}

export const QuoteReport = {
  encode(message: QuoteReport, writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }

    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }

    if (message.isvEnclaveQuoteStatus !== "") {
      writer.uint32(34).string(message.isvEnclaveQuoteStatus);
    }

    if (message.platformInfoBlob !== "") {
      writer.uint32(42).string(message.platformInfoBlob);
    }

    if (message.isvEnclaveQuoteBody !== "") {
      writer.uint32(50).string(message.isvEnclaveQuoteBody);
    }

    for (const v of message.advisoryIds) {
      writer.uint32(58).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteReport();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.timestamp = reader.string();
          break;

        case 3:
          message.version = (reader.uint64() as Long);
          break;

        case 4:
          message.isvEnclaveQuoteStatus = reader.string();
          break;

        case 5:
          message.platformInfoBlob = reader.string();
          break;

        case 6:
          message.isvEnclaveQuoteBody = reader.string();
          break;

        case 7:
          message.advisoryIds.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuoteReport {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      version: isSet(object.version) ? Long.fromString(object.version) : Long.UZERO,
      isvEnclaveQuoteStatus: isSet(object.isvEnclaveQuoteStatus) ? String(object.isvEnclaveQuoteStatus) : "",
      platformInfoBlob: isSet(object.platformInfoBlob) ? String(object.platformInfoBlob) : "",
      isvEnclaveQuoteBody: isSet(object.isvEnclaveQuoteBody) ? String(object.isvEnclaveQuoteBody) : "",
      advisoryIds: Array.isArray(object?.advisoryIds) ? object.advisoryIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QuoteReport): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.isvEnclaveQuoteStatus !== undefined && (obj.isvEnclaveQuoteStatus = message.isvEnclaveQuoteStatus);
    message.platformInfoBlob !== undefined && (obj.platformInfoBlob = message.platformInfoBlob);
    message.isvEnclaveQuoteBody !== undefined && (obj.isvEnclaveQuoteBody = message.isvEnclaveQuoteBody);

    if (message.advisoryIds) {
      obj.advisoryIds = message.advisoryIds.map(e => e);
    } else {
      obj.advisoryIds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuoteReport>, I>>(object: I): QuoteReport {
    const message = createBaseQuoteReport();
    message.id = object.id ?? "";
    message.timestamp = object.timestamp ?? "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.isvEnclaveQuoteStatus = object.isvEnclaveQuoteStatus ?? "";
    message.platformInfoBlob = object.platformInfoBlob ?? "";
    message.isvEnclaveQuoteBody = object.isvEnclaveQuoteBody ?? "";
    message.advisoryIds = object.advisoryIds?.map(e => e) || [];
    return message;
  }

};
export interface QuoteReportBody {
  mrEnclave: string;
  mrSigner: string;
  reportData: string;
}

function createBaseQuoteReportBody(): QuoteReportBody {
  return {
    mrEnclave: "",
    mrSigner: "",
    reportData: ""
  };
}

export const QuoteReportBody = {
  encode(message: QuoteReportBody, writer = _m0.Writer.create()): _m0.Writer {
    if (message.mrEnclave !== "") {
      writer.uint32(10).string(message.mrEnclave);
    }

    if (message.mrSigner !== "") {
      writer.uint32(18).string(message.mrSigner);
    }

    if (message.reportData !== "") {
      writer.uint32(26).string(message.reportData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteReportBody();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mrEnclave = reader.string();
          break;

        case 2:
          message.mrSigner = reader.string();
          break;

        case 3:
          message.reportData = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuoteReportBody {
    return {
      mrEnclave: isSet(object.mrEnclave) ? String(object.mrEnclave) : "",
      mrSigner: isSet(object.mrSigner) ? String(object.mrSigner) : "",
      reportData: isSet(object.reportData) ? String(object.reportData) : ""
    };
  },

  toJSON(message: QuoteReportBody): unknown {
    const obj: any = {};
    message.mrEnclave !== undefined && (obj.mrEnclave = message.mrEnclave);
    message.mrSigner !== undefined && (obj.mrSigner = message.mrSigner);
    message.reportData !== undefined && (obj.reportData = message.reportData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuoteReportBody>, I>>(object: I): QuoteReportBody {
    const message = createBaseQuoteReportBody();
    message.mrEnclave = object.mrEnclave ?? "";
    message.mrSigner = object.mrSigner ?? "";
    message.reportData = object.reportData ?? "";
    return message;
  }

};
export interface QuoteReportData {
  version: Long;
  signType: Long;
  reportBody: QuoteReportBody;
}

function createBaseQuoteReportData(): QuoteReportData {
  return {
    version: Long.UZERO,
    signType: Long.UZERO,
    reportBody: undefined
  };
}

export const QuoteReportData = {
  encode(message: QuoteReportData, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).uint64(message.version);
    }

    if (!message.signType.isZero()) {
      writer.uint32(16).uint64(message.signType);
    }

    if (message.reportBody !== undefined) {
      QuoteReportBody.encode(message.reportBody, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteReportData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = (reader.uint64() as Long);
          break;

        case 2:
          message.signType = (reader.uint64() as Long);
          break;

        case 3:
          message.reportBody = QuoteReportBody.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuoteReportData {
    return {
      version: isSet(object.version) ? Long.fromString(object.version) : Long.UZERO,
      signType: isSet(object.signType) ? Long.fromString(object.signType) : Long.UZERO,
      reportBody: isSet(object.reportBody) ? QuoteReportBody.fromJSON(object.reportBody) : undefined
    };
  },

  toJSON(message: QuoteReportData): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.signType !== undefined && (obj.signType = (message.signType || Long.UZERO).toString());
    message.reportBody !== undefined && (obj.reportBody = message.reportBody ? QuoteReportBody.toJSON(message.reportBody) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuoteReportData>, I>>(object: I): QuoteReportData {
    const message = createBaseQuoteReportData();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.signType = object.signType !== undefined && object.signType !== null ? Long.fromValue(object.signType) : Long.UZERO;
    message.reportBody = object.reportBody !== undefined && object.reportBody !== null ? QuoteReportBody.fromPartial(object.reportBody) : undefined;
    return message;
  }

};
export interface EndorsedAttestationReport {
  report: Uint8Array;
  signature: Uint8Array;
  signingCert: Uint8Array;
}

function createBaseEndorsedAttestationReport(): EndorsedAttestationReport {
  return {
    report: new Uint8Array(),
    signature: new Uint8Array(),
    signingCert: new Uint8Array()
  };
}

export const EndorsedAttestationReport = {
  encode(message: EndorsedAttestationReport, writer = _m0.Writer.create()): _m0.Writer {
    if (message.report.length !== 0) {
      writer.uint32(10).bytes(message.report);
    }

    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }

    if (message.signingCert.length !== 0) {
      writer.uint32(26).bytes(message.signingCert);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndorsedAttestationReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndorsedAttestationReport();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.report = reader.bytes();
          break;

        case 2:
          message.signature = reader.bytes();
          break;

        case 3:
          message.signingCert = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EndorsedAttestationReport {
    return {
      report: isSet(object.report) ? bytesFromBase64(object.report) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      signingCert: isSet(object.signingCert) ? bytesFromBase64(object.signingCert) : new Uint8Array()
    };
  },

  toJSON(message: EndorsedAttestationReport): unknown {
    const obj: any = {};
    message.report !== undefined && (obj.report = base64FromBytes(message.report !== undefined ? message.report : new Uint8Array()));
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.signingCert !== undefined && (obj.signingCert = base64FromBytes(message.signingCert !== undefined ? message.signingCert : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EndorsedAttestationReport>, I>>(object: I): EndorsedAttestationReport {
    const message = createBaseEndorsedAttestationReport();
    message.report = object.report ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    message.signingCert = object.signingCert ?? new Uint8Array();
    return message;
  }

};
export interface SGXEC256Signature {
  gx: string;
  gy: string;
}

function createBaseSGXEC256Signature(): SGXEC256Signature {
  return {
    gx: "",
    gy: ""
  };
}

export const SGXEC256Signature = {
  encode(message: SGXEC256Signature, writer = _m0.Writer.create()): _m0.Writer {
    if (message.gx !== "") {
      writer.uint32(10).string(message.gx);
    }

    if (message.gy !== "") {
      writer.uint32(18).string(message.gy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SGXEC256Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSGXEC256Signature();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gx = reader.string();
          break;

        case 2:
          message.gy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SGXEC256Signature {
    return {
      gx: isSet(object.gx) ? String(object.gx) : "",
      gy: isSet(object.gy) ? String(object.gy) : ""
    };
  },

  toJSON(message: SGXEC256Signature): unknown {
    const obj: any = {};
    message.gx !== undefined && (obj.gx = message.gx);
    message.gy !== undefined && (obj.gy = message.gy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SGXEC256Signature>, I>>(object: I): SGXEC256Signature {
    const message = createBaseSGXEC256Signature();
    message.gx = object.gx ?? "";
    message.gy = object.gy ?? "";
    return message;
  }

};
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

function createBasePlatformInfoBlob(): PlatformInfoBlob {
  return {
    sgxEpidGroupFlags: 0,
    sgxTcbEvaluationFlags: 0,
    pseEvaluationFlags: 0,
    latestEquivalentTcbPsvn: "",
    latestPseIsvsvn: "",
    latestPsdaSvn: "",
    xeid: 0,
    gid: 0,
    sgxEc256SignatureT: undefined
  };
}

export const PlatformInfoBlob = {
  encode(message: PlatformInfoBlob, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sgxEpidGroupFlags !== 0) {
      writer.uint32(8).uint32(message.sgxEpidGroupFlags);
    }

    if (message.sgxTcbEvaluationFlags !== 0) {
      writer.uint32(16).uint32(message.sgxTcbEvaluationFlags);
    }

    if (message.pseEvaluationFlags !== 0) {
      writer.uint32(24).uint32(message.pseEvaluationFlags);
    }

    if (message.latestEquivalentTcbPsvn !== "") {
      writer.uint32(34).string(message.latestEquivalentTcbPsvn);
    }

    if (message.latestPseIsvsvn !== "") {
      writer.uint32(42).string(message.latestPseIsvsvn);
    }

    if (message.latestPsdaSvn !== "") {
      writer.uint32(50).string(message.latestPsdaSvn);
    }

    if (message.xeid !== 0) {
      writer.uint32(56).uint32(message.xeid);
    }

    if (message.gid !== 0) {
      writer.uint32(64).uint32(message.gid);
    }

    if (message.sgxEc256SignatureT !== undefined) {
      SGXEC256Signature.encode(message.sgxEc256SignatureT, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlatformInfoBlob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlatformInfoBlob();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sgxEpidGroupFlags = reader.uint32();
          break;

        case 2:
          message.sgxTcbEvaluationFlags = reader.uint32();
          break;

        case 3:
          message.pseEvaluationFlags = reader.uint32();
          break;

        case 4:
          message.latestEquivalentTcbPsvn = reader.string();
          break;

        case 5:
          message.latestPseIsvsvn = reader.string();
          break;

        case 6:
          message.latestPsdaSvn = reader.string();
          break;

        case 7:
          message.xeid = reader.uint32();
          break;

        case 8:
          message.gid = reader.uint32();
          break;

        case 9:
          message.sgxEc256SignatureT = SGXEC256Signature.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PlatformInfoBlob {
    return {
      sgxEpidGroupFlags: isSet(object.sgxEpidGroupFlags) ? Number(object.sgxEpidGroupFlags) : 0,
      sgxTcbEvaluationFlags: isSet(object.sgxTcbEvaluationFlags) ? Number(object.sgxTcbEvaluationFlags) : 0,
      pseEvaluationFlags: isSet(object.pseEvaluationFlags) ? Number(object.pseEvaluationFlags) : 0,
      latestEquivalentTcbPsvn: isSet(object.latestEquivalentTcbPsvn) ? String(object.latestEquivalentTcbPsvn) : "",
      latestPseIsvsvn: isSet(object.latestPseIsvsvn) ? String(object.latestPseIsvsvn) : "",
      latestPsdaSvn: isSet(object.latestPsdaSvn) ? String(object.latestPsdaSvn) : "",
      xeid: isSet(object.xeid) ? Number(object.xeid) : 0,
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      sgxEc256SignatureT: isSet(object.sgxEc256SignatureT) ? SGXEC256Signature.fromJSON(object.sgxEc256SignatureT) : undefined
    };
  },

  toJSON(message: PlatformInfoBlob): unknown {
    const obj: any = {};
    message.sgxEpidGroupFlags !== undefined && (obj.sgxEpidGroupFlags = Math.round(message.sgxEpidGroupFlags));
    message.sgxTcbEvaluationFlags !== undefined && (obj.sgxTcbEvaluationFlags = Math.round(message.sgxTcbEvaluationFlags));
    message.pseEvaluationFlags !== undefined && (obj.pseEvaluationFlags = Math.round(message.pseEvaluationFlags));
    message.latestEquivalentTcbPsvn !== undefined && (obj.latestEquivalentTcbPsvn = message.latestEquivalentTcbPsvn);
    message.latestPseIsvsvn !== undefined && (obj.latestPseIsvsvn = message.latestPseIsvsvn);
    message.latestPsdaSvn !== undefined && (obj.latestPsdaSvn = message.latestPsdaSvn);
    message.xeid !== undefined && (obj.xeid = Math.round(message.xeid));
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.sgxEc256SignatureT !== undefined && (obj.sgxEc256SignatureT = message.sgxEc256SignatureT ? SGXEC256Signature.toJSON(message.sgxEc256SignatureT) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlatformInfoBlob>, I>>(object: I): PlatformInfoBlob {
    const message = createBasePlatformInfoBlob();
    message.sgxEpidGroupFlags = object.sgxEpidGroupFlags ?? 0;
    message.sgxTcbEvaluationFlags = object.sgxTcbEvaluationFlags ?? 0;
    message.pseEvaluationFlags = object.pseEvaluationFlags ?? 0;
    message.latestEquivalentTcbPsvn = object.latestEquivalentTcbPsvn ?? "";
    message.latestPseIsvsvn = object.latestPseIsvsvn ?? "";
    message.latestPsdaSvn = object.latestPsdaSvn ?? "";
    message.xeid = object.xeid ?? 0;
    message.gid = object.gid ?? 0;
    message.sgxEc256SignatureT = object.sgxEc256SignatureT !== undefined && object.sgxEc256SignatureT !== null ? SGXEC256Signature.fromPartial(object.sgxEc256SignatureT) : undefined;
    return message;
  }

};