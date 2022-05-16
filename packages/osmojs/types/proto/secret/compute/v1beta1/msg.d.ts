import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgStoreCode {
    sender: Uint8Array;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
    source: string;
    /** Builder is a valid docker image name with tag, optional */
    builder: string;
}
export interface MsgInstantiateContract {
    sender: Uint8Array;
    /**
     * Admin is an optional address that can execute migrations
     * bytes admin = 2 [(gogoproto.casttype) = "github.com/cosmos/cosmos-sdk/types.AccAddress"];
     */
    callbackCodeHash: string;
    codeId: Long;
    label: string;
    initMsg: Uint8Array;
    initFunds: Coin[];
    callbackSig: Uint8Array;
}
export interface MsgExecuteContract {
    sender: Uint8Array;
    contract: Uint8Array;
    msg: Uint8Array;
    callbackCodeHash: string;
    sentFunds: Coin[];
    callbackSig: Uint8Array;
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial<I extends {
        sender?: Uint8Array;
        wasmByteCode?: Uint8Array;
        source?: string;
        builder?: string;
    } & {
        sender?: Uint8Array;
        wasmByteCode?: Uint8Array;
        source?: string;
        builder?: string;
    } & Record<Exclude<keyof I, keyof MsgStoreCode>, never>>(object: I): MsgStoreCode;
};
export declare const MsgInstantiateContract: {
    encode(message: MsgInstantiateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["initFunds"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["initFunds"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        callbackSig?: Uint8Array;
    } & Record<Exclude<keyof I, keyof MsgInstantiateContract>, never>>(object: I): MsgInstantiateContract;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["sentFunds"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["sentFunds"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        callbackSig?: Uint8Array;
    } & Record<Exclude<keyof I, keyof MsgExecuteContract>, never>>(object: I): MsgExecuteContract;
};
