import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        lockTokens(value: MsgLockTokens): {
            type_url: string;
            value: Uint8Array;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            type_url: string;
            value: Uint8Array;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
    };
    toJSON: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: unknown;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: unknown;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        lockTokens(value: any): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: any): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: any): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
    };
    fromPartial: {
        lockTokens(value: MsgLockTokens): {
            typeUrl: string;
            value: MsgLockTokens;
        };
        beginUnlockingAll(value: MsgBeginUnlockingAll): {
            typeUrl: string;
            value: MsgBeginUnlockingAll;
        };
        beginUnlocking(value: MsgBeginUnlocking): {
            typeUrl: string;
            value: MsgBeginUnlocking;
        };
    };
};
