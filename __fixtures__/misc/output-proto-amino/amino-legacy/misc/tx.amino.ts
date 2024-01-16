import { EncodingTestForDontOmit, EncodingTestForDontOmitSDKType, EncodingTestForOmit, EncodingTestForOmitSDKType } from "./all_fields";
import { AminoMsg, Pubkey } from "@cosmjs/amino";
import { omitDefault, padDecimal } from "../helpers";
import { fromUtf8, toBase64, toUtf8, fromBase64 } from "@cosmjs/encoding";
import { decodePubkey, encodePubkey } from "@cosmjs/proto-signing";
import { AccessConfig, AccessConfigSDKType, voteOptionFromJSON } from "./eval_request";
import { Any, AnySDKType } from "../google/protobuf/any";
import { Duration, DurationSDKType } from "../google/protobuf/duration";
import { InputMsg, InputMsgSDKType } from "./tx";
export interface InputMsgAminoType extends AminoMsg {
  type: "/misc.InputMsg";
  value: {
    d_o_tests: {
      str: string;
      d_o_str: string;
      b: boolean;
      d_o_b: boolean;
      num: number;
      d_o_num: number;
      big: string;
      d_o_big: string;
      proto: {
        sender: string;
      };
      d_o_proto: {
        sender: string;
      };
      auth: {
        type_url: string;
        value: Uint8Array;
      };
      d_o_auth: {
        type_url: string;
        value: Uint8Array;
      };
      salt: Uint8Array;
      d_o_salt: Uint8Array;
      raw: Uint8Array;
      d_o_raw: Uint8Array;
      wasm: string;
      d_o_wasm: string;
      opt: number;
      d_o_opt: number;
      period: {
        seconds: string;
        nanos: number;
      };
      d_o_period: {
        seconds: string;
        nanos: number;
      };
      date: string;
      d_o_date: string;
      pubkey: Pubkey;
      d_o_pubkey: Pubkey;
      nums: number[];
      d_o_nums: number[];
      bigs: string[];
      d_o_bigs: string[];
      salts: Uint8Array[];
      d_o_salts: Uint8Array[];
      raws: Uint8Array[];
      d_o_raws: Uint8Array[];
      wasms: string[];
      d_o_wasms: string[];
      opts: number[];
      d_o_opts: number[];
      periods: {
        seconds: string;
        nanos: number;
      }[];
      d_o_periods: {
        seconds: string;
        nanos: number;
      }[];
      protos: {
        sender: string;
      }[];
      d_o_protos: {
        sender: string;
      }[];
      auths: {
        type_url: string;
        value: Uint8Array;
      }[];
      d_o_auths: {
        type_url: string;
        value: Uint8Array;
      }[];
      dec: string;
      d_o_dec: string;
      decs: string[];
      d_o_decs: string[];
    };
    o_tests: {
      str: string;
      o_str: string;
      b: boolean;
      o_b: boolean;
      num: number;
      o_num: number;
      big: string;
      o_big: string;
      proto: {
        sender: string;
      };
      o_proto: {
        sender: string;
      };
      auth: {
        type_url: string;
        value: Uint8Array;
      };
      o_auth: {
        type_url: string;
        value: Uint8Array;
      };
      salt: Uint8Array;
      o_salt: Uint8Array;
      raw: Uint8Array;
      o_raw: Uint8Array;
      wasm: string;
      o_wasm: string;
      opt: number;
      o_opt: number;
      period: {
        seconds: string;
        nanos: number;
      };
      o_period: {
        seconds: string;
        nanos: number;
      };
      date: string;
      o_date: string;
      pubkey: Pubkey;
      o_pubkey: Pubkey;
      nums: number[];
      o_nums: number[];
      bigs: string[];
      o_bigs: string[];
      salts: Uint8Array[];
      o_salts: Uint8Array[];
      raws: Uint8Array[];
      o_raws: Uint8Array[];
      wasms: string[];
      o_wasms: string[];
      opts: number[];
      o_opts: number[];
      periods: {
        seconds: string;
        nanos: number;
      }[];
      o_periods: {
        seconds: string;
        nanos: number;
      }[];
      protos: {
        sender: string;
      }[];
      o_protos: {
        sender: string;
      }[];
      auths: {
        type_url: string;
        value: Uint8Array;
      }[];
      o_auths: {
        type_url: string;
        value: Uint8Array;
      }[];
      dec: string;
      o_dec: string;
      decs: string[];
      o_decs: string[];
    };
  };
}
export const AminoConverter = {
  "/misc.InputMsg": {
    aminoType: "/misc.InputMsg",
    toAmino: ({
      dOTests,
      oTests
    }: InputMsg): InputMsgAminoType["value"] => {
      return {
        d_o_tests: {
          str: dOTests.str,
          d_o_str: dOTests.dOStr,
          b: omitDefault(dOTests.b),
          d_o_b: omitDefault(dOTests.dOB),
          num: omitDefault(dOTests.num),
          d_o_num: omitDefault(dOTests.dONum),
          big: omitDefault(dOTests.big)?.toString?.(),
          d_o_big: omitDefault(dOTests.dOBig)?.toString?.(),
          proto: {
            sender: dOTests.proto.sender
          },
          d_o_proto: {
            sender: dOTests.dOProto.sender
          },
          auth: {
            type_url: dOTests.auth.typeUrl,
            value: dOTests.auth.value
          },
          d_o_auth: {
            type_url: dOTests.dOAuth.typeUrl,
            value: dOTests.dOAuth.value
          },
          salt: dOTests.salt,
          d_o_salt: dOTests.dOSalt,
          raw: JSON.parse(fromUtf8(dOTests.raw)),
          d_o_raw: JSON.parse(fromUtf8(dOTests.dORaw)),
          wasm: toBase64(dOTests.wasm),
          d_o_wasm: toBase64(dOTests.dOWasm),
          opt: dOTests.opt,
          d_o_opt: dOTests.dOOpt,
          period: (dOTests.period * 1_000_000_000).toString(),
          d_o_period: (dOTests.dOPeriod * 1_000_000_000).toString(),
          date: dOTests.date,
          d_o_date: dOTests.dODate,
          pubkey: decodePubkey(pubkey)!,
          dOPubkey: decodePubkey(dOPubkey)!,
          nums: dOTests.nums,
          d_o_nums: dOTests.dONums,
          bigs: dOTests.bigs.map(el0 => el0.toString()),
          d_o_bigs: dOTests.dOBigs.map(el0 => el0.toString()),
          salts: dOTests.salts,
          d_o_salts: dOTests.dOSalts,
          raws: dOTests.raws,
          d_o_raws: dOTests.dORaws,
          wasms: dOTests.wasms,
          d_o_wasms: dOTests.dOWasms,
          opts: dOTests.opts,
          d_o_opts: dOTests.dOOpts,
          periods: dOTests.periods.map(el0 => ({
            seconds: omitDefault(el0.seconds)?.toString?.(),
            nanos: omitDefault(el0.nanos)
          })),
          d_o_periods: dOTests.dOPeriods.map(el0 => ({
            seconds: omitDefault(el0.seconds)?.toString?.(),
            nanos: omitDefault(el0.nanos)
          })),
          protos: dOTests.protos.map(el0 => ({
            sender: el0.sender
          })),
          d_o_protos: dOTests.dOProtos.map(el0 => ({
            sender: el0.sender
          })),
          auths: dOTests.auths.map(el0 => ({
            type_url: el0.typeUrl,
            value: el0.value
          })),
          d_o_auths: dOTests.dOAuths.map(el0 => ({
            type_url: el0.typeUrl,
            value: el0.value
          })),
          dec: padDecimal(dOTests.dec),
          d_o_dec: padDecimal(dOTests.dODec),
          decs: dOTests.decs.map(el0 => padDecimal(el0)),
          d_o_decs: dOTests.dODecs.map(el0 => padDecimal(el0))
        },
        o_tests: {
          str: oTests.str,
          o_str: oTests.oStr,
          b: omitDefault(oTests.b),
          o_b: omitDefault(oTests.oB),
          num: omitDefault(oTests.num),
          o_num: omitDefault(oTests.oNum),
          big: omitDefault(oTests.big)?.toString?.(),
          o_big: omitDefault(oTests.oBig)?.toString?.(),
          proto: {
            sender: oTests.proto.sender
          },
          o_proto: {
            sender: oTests.oProto.sender
          },
          auth: {
            type_url: oTests.auth.typeUrl,
            value: oTests.auth.value
          },
          o_auth: {
            type_url: oTests.oAuth.typeUrl,
            value: oTests.oAuth.value
          },
          salt: oTests.salt,
          o_salt: oTests.oSalt,
          raw: JSON.parse(fromUtf8(oTests.raw)),
          o_raw: JSON.parse(fromUtf8(oTests.oRaw)),
          wasm: toBase64(oTests.wasm),
          o_wasm: toBase64(oTests.oWasm),
          opt: oTests.opt,
          o_opt: oTests.oOpt,
          period: (oTests.period * 1_000_000_000).toString(),
          o_period: (oTests.oPeriod * 1_000_000_000).toString(),
          date: oTests.date,
          o_date: oTests.oDate,
          pubkey: decodePubkey(pubkey)!,
          oPubkey: decodePubkey(oPubkey)!,
          nums: oTests.nums,
          o_nums: oTests.oNums,
          bigs: oTests.bigs.map(el0 => el0.toString()),
          o_bigs: oTests.oBigs.map(el0 => el0.toString()),
          salts: oTests.salts,
          o_salts: oTests.oSalts,
          raws: oTests.raws,
          o_raws: oTests.oRaws,
          wasms: oTests.wasms,
          o_wasms: oTests.oWasms,
          opts: oTests.opts,
          o_opts: oTests.oOpts,
          periods: oTests.periods.map(el0 => ({
            seconds: omitDefault(el0.seconds)?.toString?.(),
            nanos: omitDefault(el0.nanos)
          })),
          o_periods: oTests.oPeriods.map(el0 => ({
            seconds: omitDefault(el0.seconds)?.toString?.(),
            nanos: omitDefault(el0.nanos)
          })),
          protos: oTests.protos.map(el0 => ({
            sender: el0.sender
          })),
          o_protos: oTests.oProtos.map(el0 => ({
            sender: el0.sender
          })),
          auths: oTests.auths.map(el0 => ({
            type_url: el0.typeUrl,
            value: el0.value
          })),
          o_auths: oTests.oAuths.map(el0 => ({
            type_url: el0.typeUrl,
            value: el0.value
          })),
          dec: padDecimal(oTests.dec),
          o_dec: padDecimal(oTests.oDec),
          decs: oTests.decs.map(el0 => padDecimal(el0)),
          o_decs: oTests.oDecs.map(el0 => padDecimal(el0))
        }
      };
    },
    fromAmino: ({
      d_o_tests,
      o_tests
    }: InputMsgAminoType["value"]): InputMsg => {
      return {
        dOTests: d_o_tests == null ? d_o_tests : {
          str: d_o_tests.str,
          dOStr: d_o_tests.d_o_str,
          b: d_o_tests.b,
          dOB: d_o_tests.d_o_b,
          num: d_o_tests.num,
          dONum: d_o_tests.d_o_num,
          big: d_o_tests.big == null ? d_o_tests.big : BigInt(d_o_tests.big),
          dOBig: d_o_tests.d_o_big == null ? d_o_tests.d_o_big : BigInt(d_o_tests.d_o_big),
          proto: d_o_tests.proto == null ? d_o_tests.proto : {
            sender: d_o_tests.proto.sender
          },
          dOProto: d_o_tests.d_o_proto == null ? d_o_tests.d_o_proto : {
            sender: d_o_tests.d_o_proto.sender
          },
          auth: d_o_tests.auth == null ? d_o_tests.auth : {
            typeUrl: d_o_tests.auth.type_url,
            value: d_o_tests.auth.value
          },
          dOAuth: d_o_tests.d_o_auth == null ? d_o_tests.d_o_auth : {
            typeUrl: d_o_tests.d_o_auth.type_url,
            value: d_o_tests.d_o_auth.value
          },
          salt: d_o_tests.salt,
          dOSalt: d_o_tests.d_o_salt,
          raw: d_o_tests.raw == null ? d_o_tests.raw : toUtf8(JSON.stringify(d_o_tests.raw)),
          dORaw: d_o_tests.d_o_raw == null ? d_o_tests.d_o_raw : toUtf8(JSON.stringify(d_o_tests.d_o_raw)),
          wasm: d_o_tests.wasm == null ? d_o_tests.wasm : fromBase64(d_o_tests.wasm),
          dOWasm: d_o_tests.d_o_wasm == null ? d_o_tests.d_o_wasm : fromBase64(d_o_tests.d_o_wasm),
          opt: d_o_tests.opt == null ? d_o_tests.opt : voteOptionFromJSON(d_o_tests.opt),
          dOOpt: d_o_tests.d_o_opt == null ? d_o_tests.d_o_opt : voteOptionFromJSON(d_o_tests.d_o_opt),
          period: d_o_tests.period == null ? d_o_tests.period : {
            seconds: BigInt(Math.floor(parseInt(d_o_tests.period) / 1_000_000_000)),
            nanos: parseInt(d_o_tests.period) % 1_000_000_000
          },
          dOPeriod: d_o_tests.d_o_period == null ? d_o_tests.d_o_period : {
            seconds: BigInt(Math.floor(parseInt(d_o_tests.d_o_period) / 1_000_000_000)),
            nanos: parseInt(d_o_tests.d_o_period) % 1_000_000_000
          },
          date: d_o_tests.date,
          dODate: d_o_tests.d_o_date,
          pubkey: encodePubkey(pubkey),
          dOPubkey: encodePubkey(pubkey),
          nums: d_o_tests.nums,
          dONums: d_o_tests.d_o_nums,
          bigs: d_o_tests.bigs.map?.(el1 => BigInt(el1)),
          dOBigs: d_o_tests.d_o_bigs.map?.(el1 => BigInt(el1)),
          salts: d_o_tests.salts,
          dOSalts: d_o_tests.d_o_salts,
          raws: d_o_tests.raws,
          dORaws: d_o_tests.d_o_raws,
          wasms: d_o_tests.wasms,
          dOWasms: d_o_tests.d_o_wasms,
          opts: d_o_tests.opts.map?.(el => voteOptionFromJSON(el)),
          dOOpts: d_o_tests.d_o_opts.map?.(el => voteOptionFromJSON(el)),
          periods: d_o_tests.periods.map?.(el1 => ({
            seconds: el1.seconds == null ? el1.seconds : BigInt(el1.seconds),
            nanos: el1.nanos
          })),
          dOPeriods: d_o_tests.d_o_periods.map?.(el1 => ({
            seconds: el1.seconds == null ? el1.seconds : BigInt(el1.seconds),
            nanos: el1.nanos
          })),
          protos: d_o_tests.protos.map?.(el1 => ({
            sender: el1.sender
          })),
          dOProtos: d_o_tests.d_o_protos.map?.(el1 => ({
            sender: el1.sender
          })),
          auths: d_o_tests.auths.map?.(el1 => ({
            typeUrl: el1.type_url,
            value: el1.value
          })),
          dOAuths: d_o_tests.d_o_auths.map?.(el1 => ({
            typeUrl: el1.type_url,
            value: el1.value
          })),
          dec: d_o_tests.dec,
          dODec: d_o_tests.d_o_dec,
          decs: d_o_tests.decs,
          dODecs: d_o_tests.d_o_decs
        },
        oTests: o_tests == null ? o_tests : {
          str: o_tests.str,
          oStr: o_tests.o_str,
          b: o_tests.b,
          oB: o_tests.o_b,
          num: o_tests.num,
          oNum: o_tests.o_num,
          big: o_tests.big == null ? o_tests.big : BigInt(o_tests.big),
          oBig: o_tests.o_big == null ? o_tests.o_big : BigInt(o_tests.o_big),
          proto: o_tests.proto == null ? o_tests.proto : {
            sender: o_tests.proto.sender
          },
          oProto: o_tests.o_proto == null ? o_tests.o_proto : {
            sender: o_tests.o_proto.sender
          },
          auth: o_tests.auth == null ? o_tests.auth : {
            typeUrl: o_tests.auth.type_url,
            value: o_tests.auth.value
          },
          oAuth: o_tests.o_auth == null ? o_tests.o_auth : {
            typeUrl: o_tests.o_auth.type_url,
            value: o_tests.o_auth.value
          },
          salt: o_tests.salt,
          oSalt: o_tests.o_salt,
          raw: o_tests.raw == null ? o_tests.raw : toUtf8(JSON.stringify(o_tests.raw)),
          oRaw: o_tests.o_raw == null ? o_tests.o_raw : toUtf8(JSON.stringify(o_tests.o_raw)),
          wasm: o_tests.wasm == null ? o_tests.wasm : fromBase64(o_tests.wasm),
          oWasm: o_tests.o_wasm == null ? o_tests.o_wasm : fromBase64(o_tests.o_wasm),
          opt: o_tests.opt == null ? o_tests.opt : voteOptionFromJSON(o_tests.opt),
          oOpt: o_tests.o_opt == null ? o_tests.o_opt : voteOptionFromJSON(o_tests.o_opt),
          period: o_tests.period == null ? o_tests.period : {
            seconds: BigInt(Math.floor(parseInt(o_tests.period) / 1_000_000_000)),
            nanos: parseInt(o_tests.period) % 1_000_000_000
          },
          oPeriod: o_tests.o_period == null ? o_tests.o_period : {
            seconds: BigInt(Math.floor(parseInt(o_tests.o_period) / 1_000_000_000)),
            nanos: parseInt(o_tests.o_period) % 1_000_000_000
          },
          date: o_tests.date,
          oDate: o_tests.o_date,
          pubkey: encodePubkey(pubkey),
          oPubkey: encodePubkey(pubkey),
          nums: o_tests.nums,
          oNums: o_tests.o_nums,
          bigs: o_tests.bigs.map?.(el1 => BigInt(el1)),
          oBigs: o_tests.o_bigs.map?.(el1 => BigInt(el1)),
          salts: o_tests.salts,
          oSalts: o_tests.o_salts,
          raws: o_tests.raws,
          oRaws: o_tests.o_raws,
          wasms: o_tests.wasms,
          oWasms: o_tests.o_wasms,
          opts: o_tests.opts.map?.(el => voteOptionFromJSON(el)),
          oOpts: o_tests.o_opts.map?.(el => voteOptionFromJSON(el)),
          periods: o_tests.periods.map?.(el1 => ({
            seconds: el1.seconds == null ? el1.seconds : BigInt(el1.seconds),
            nanos: el1.nanos
          })),
          oPeriods: o_tests.o_periods.map?.(el1 => ({
            seconds: el1.seconds == null ? el1.seconds : BigInt(el1.seconds),
            nanos: el1.nanos
          })),
          protos: o_tests.protos.map?.(el1 => ({
            sender: el1.sender
          })),
          oProtos: o_tests.o_protos.map?.(el1 => ({
            sender: el1.sender
          })),
          auths: o_tests.auths.map?.(el1 => ({
            typeUrl: el1.type_url,
            value: el1.value
          })),
          oAuths: o_tests.o_auths.map?.(el1 => ({
            typeUrl: el1.type_url,
            value: el1.value
          })),
          dec: o_tests.dec,
          oDec: o_tests.o_dec,
          decs: o_tests.decs,
          oDecs: o_tests.o_decs
        }
      };
    }
  }
};