import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, SyntheticLock } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface ModuleBalanceRequest {
}
export interface ModuleBalanceResponse {
    coins: Coin[];
}
export interface ModuleLockedAmountRequest {
}
export interface ModuleLockedAmountResponse {
    coins: Coin[];
}
export interface AccountUnlockableCoinsRequest {
    owner: string;
}
export interface AccountUnlockableCoinsResponse {
    coins: Coin[];
}
export interface AccountUnlockingCoinsRequest {
    owner: string;
}
export interface AccountUnlockingCoinsResponse {
    coins: Coin[];
}
export interface AccountLockedCoinsRequest {
    owner: string;
}
export interface AccountLockedCoinsResponse {
    coins: Coin[];
}
export interface AccountLockedPastTimeRequest {
    owner: string;
    timestamp: Date;
}
export interface AccountLockedPastTimeResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
    owner: string;
    timestamp: Date;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeRequest {
    owner: string;
    timestamp: Date;
}
export interface AccountUnlockedBeforeTimeResponse {
    locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomRequest {
    owner: string;
    timestamp: Date;
    denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
    locks: PeriodLock[];
}
export interface LockedDenomRequest {
    denom: string;
    duration: string;
}
export interface LockedDenomResponse {
    amount: string;
}
export interface LockedRequest {
    lockId: Long;
}
export interface LockedResponse {
    lock: PeriodLock;
}
export interface SyntheticLockupsByLockupIDRequest {
    lockId: Long;
}
export interface SyntheticLockupsByLockupIDResponse {
    syntheticLocks: SyntheticLock[];
}
export interface AccountLockedLongerDurationRequest {
    owner: string;
    duration: string;
}
export interface AccountLockedLongerDurationResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
    owner: string;
    duration: string;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
    locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomRequest {
    owner: string;
    duration: string;
    denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
    locks: PeriodLock[];
}
export declare const ModuleBalanceRequest: {
    encode(_: ModuleBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceRequest;
    fromJSON(_: any): ModuleBalanceRequest;
    toJSON(_: ModuleBalanceRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ModuleBalanceRequest;
};
export declare const ModuleBalanceResponse: {
    encode(message: ModuleBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceResponse;
    fromJSON(object: any): ModuleBalanceResponse;
    toJSON(message: ModuleBalanceResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): ModuleBalanceResponse;
};
export declare const ModuleLockedAmountRequest: {
    encode(_: ModuleLockedAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountRequest;
    fromJSON(_: any): ModuleLockedAmountRequest;
    toJSON(_: ModuleLockedAmountRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ModuleLockedAmountRequest;
};
export declare const ModuleLockedAmountResponse: {
    encode(message: ModuleLockedAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountResponse;
    fromJSON(object: any): ModuleLockedAmountResponse;
    toJSON(message: ModuleLockedAmountResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): ModuleLockedAmountResponse;
};
export declare const AccountUnlockableCoinsRequest: {
    encode(message: AccountUnlockableCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsRequest;
    fromJSON(object: any): AccountUnlockableCoinsRequest;
    toJSON(message: AccountUnlockableCoinsRequest): unknown;
    fromPartial<I extends {
        owner?: string;
    } & {
        owner?: string;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): AccountUnlockableCoinsRequest;
};
export declare const AccountUnlockableCoinsResponse: {
    encode(message: AccountUnlockableCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsResponse;
    fromJSON(object: any): AccountUnlockableCoinsResponse;
    toJSON(message: AccountUnlockableCoinsResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): AccountUnlockableCoinsResponse;
};
export declare const AccountUnlockingCoinsRequest: {
    encode(message: AccountUnlockingCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsRequest;
    fromJSON(object: any): AccountUnlockingCoinsRequest;
    toJSON(message: AccountUnlockingCoinsRequest): unknown;
    fromPartial<I extends {
        owner?: string;
    } & {
        owner?: string;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): AccountUnlockingCoinsRequest;
};
export declare const AccountUnlockingCoinsResponse: {
    encode(message: AccountUnlockingCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsResponse;
    fromJSON(object: any): AccountUnlockingCoinsResponse;
    toJSON(message: AccountUnlockingCoinsResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): AccountUnlockingCoinsResponse;
};
export declare const AccountLockedCoinsRequest: {
    encode(message: AccountLockedCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsRequest;
    fromJSON(object: any): AccountLockedCoinsRequest;
    toJSON(message: AccountLockedCoinsRequest): unknown;
    fromPartial<I extends {
        owner?: string;
    } & {
        owner?: string;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): AccountLockedCoinsRequest;
};
export declare const AccountLockedCoinsResponse: {
    encode(message: AccountLockedCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsResponse;
    fromJSON(object: any): AccountLockedCoinsResponse;
    toJSON(message: AccountLockedCoinsResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): AccountLockedCoinsResponse;
};
export declare const AccountLockedPastTimeRequest: {
    encode(message: AccountLockedPastTimeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeRequest;
    fromJSON(object: any): AccountLockedPastTimeRequest;
    toJSON(message: AccountLockedPastTimeRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        timestamp?: Date;
    } & {
        owner?: string;
        timestamp?: Date;
    } & Record<Exclude<keyof I, keyof AccountLockedPastTimeRequest>, never>>(object: I): AccountLockedPastTimeRequest;
};
export declare const AccountLockedPastTimeResponse: {
    encode(message: AccountLockedPastTimeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeResponse;
    fromJSON(object: any): AccountLockedPastTimeResponse;
    toJSON(message: AccountLockedPastTimeResponse): unknown;
    fromPartial<I extends {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedPastTimeResponse;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyRequest: {
    encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        timestamp?: Date;
    } & {
        owner?: string;
        timestamp?: Date;
    } & Record<Exclude<keyof I, keyof AccountLockedPastTimeNotUnlockingOnlyRequest>, never>>(object: I): AccountLockedPastTimeNotUnlockingOnlyRequest;
};
export declare const AccountLockedPastTimeNotUnlockingOnlyResponse: {
    encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
    fromPartial<I extends {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedPastTimeNotUnlockingOnlyResponse;
};
export declare const AccountUnlockedBeforeTimeRequest: {
    encode(message: AccountUnlockedBeforeTimeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeRequest;
    fromJSON(object: any): AccountUnlockedBeforeTimeRequest;
    toJSON(message: AccountUnlockedBeforeTimeRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        timestamp?: Date;
    } & {
        owner?: string;
        timestamp?: Date;
    } & Record<Exclude<keyof I, keyof AccountUnlockedBeforeTimeRequest>, never>>(object: I): AccountUnlockedBeforeTimeRequest;
};
export declare const AccountUnlockedBeforeTimeResponse: {
    encode(message: AccountUnlockedBeforeTimeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeResponse;
    fromJSON(object: any): AccountUnlockedBeforeTimeResponse;
    toJSON(message: AccountUnlockedBeforeTimeResponse): unknown;
    fromPartial<I extends {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountUnlockedBeforeTimeResponse;
};
export declare const AccountLockedPastTimeDenomRequest: {
    encode(message: AccountLockedPastTimeDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomRequest;
    fromJSON(object: any): AccountLockedPastTimeDenomRequest;
    toJSON(message: AccountLockedPastTimeDenomRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        timestamp?: Date;
        denom?: string;
    } & {
        owner?: string;
        timestamp?: Date;
        denom?: string;
    } & Record<Exclude<keyof I, keyof AccountLockedPastTimeDenomRequest>, never>>(object: I): AccountLockedPastTimeDenomRequest;
};
export declare const AccountLockedPastTimeDenomResponse: {
    encode(message: AccountLockedPastTimeDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomResponse;
    fromJSON(object: any): AccountLockedPastTimeDenomResponse;
    toJSON(message: AccountLockedPastTimeDenomResponse): unknown;
    fromPartial<I extends {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedPastTimeDenomResponse;
};
export declare const LockedDenomRequest: {
    encode(message: LockedDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomRequest;
    fromJSON(object: any): LockedDenomRequest;
    toJSON(message: LockedDenomRequest): unknown;
    fromPartial<I extends {
        denom?: string;
        duration?: string;
    } & {
        denom?: string;
        duration?: string;
    } & Record<Exclude<keyof I, keyof LockedDenomRequest>, never>>(object: I): LockedDenomRequest;
};
export declare const LockedDenomResponse: {
    encode(message: LockedDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomResponse;
    fromJSON(object: any): LockedDenomResponse;
    toJSON(message: LockedDenomResponse): unknown;
    fromPartial<I extends {
        amount?: string;
    } & {
        amount?: string;
    } & Record<Exclude<keyof I, "amount">, never>>(object: I): LockedDenomResponse;
};
export declare const LockedRequest: {
    encode(message: LockedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedRequest;
    fromJSON(object: any): LockedRequest;
    toJSON(message: LockedRequest): unknown;
    fromPartial<I extends {
        lockId?: any;
    } & {
        lockId?: any;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): LockedRequest;
};
export declare const LockedResponse: {
    encode(message: LockedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedResponse;
    fromJSON(object: any): LockedResponse;
    toJSON(message: LockedResponse): unknown;
    fromPartial<I extends {
        lock?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        lock?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["lock"]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["lock"]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["lock"], keyof PeriodLock>, never>;
    } & Record<Exclude<keyof I, "lock">, never>>(object: I): LockedResponse;
};
export declare const SyntheticLockupsByLockupIDRequest: {
    encode(message: SyntheticLockupsByLockupIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDRequest;
    fromJSON(object: any): SyntheticLockupsByLockupIDRequest;
    toJSON(message: SyntheticLockupsByLockupIDRequest): unknown;
    fromPartial<I extends {
        lockId?: any;
    } & {
        lockId?: any;
    } & Record<Exclude<keyof I, "lockId">, never>>(object: I): SyntheticLockupsByLockupIDRequest;
};
export declare const SyntheticLockupsByLockupIDResponse: {
    encode(message: SyntheticLockupsByLockupIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDResponse;
    fromJSON(object: any): SyntheticLockupsByLockupIDResponse;
    toJSON(message: SyntheticLockupsByLockupIDResponse): unknown;
    fromPartial<I extends {
        syntheticLocks?: {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[];
    } & {
        syntheticLocks?: {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[] & ({
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & Record<Exclude<keyof I["syntheticLocks"][number], keyof SyntheticLock>, never>)[] & Record<Exclude<keyof I["syntheticLocks"], keyof {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "syntheticLocks">, never>>(object: I): SyntheticLockupsByLockupIDResponse;
};
export declare const AccountLockedLongerDurationRequest: {
    encode(message: AccountLockedLongerDurationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationRequest;
    fromJSON(object: any): AccountLockedLongerDurationRequest;
    toJSON(message: AccountLockedLongerDurationRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        duration?: string;
    } & {
        owner?: string;
        duration?: string;
    } & Record<Exclude<keyof I, keyof AccountLockedLongerDurationRequest>, never>>(object: I): AccountLockedLongerDurationRequest;
};
export declare const AccountLockedLongerDurationResponse: {
    encode(message: AccountLockedLongerDurationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationResponse;
    fromJSON(object: any): AccountLockedLongerDurationResponse;
    toJSON(message: AccountLockedLongerDurationResponse): unknown;
    fromPartial<I extends {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedLongerDurationResponse;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyRequest: {
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        duration?: string;
    } & {
        owner?: string;
        duration?: string;
    } & Record<Exclude<keyof I, keyof AccountLockedLongerDurationNotUnlockingOnlyRequest>, never>>(object: I): AccountLockedLongerDurationNotUnlockingOnlyRequest;
};
export declare const AccountLockedLongerDurationNotUnlockingOnlyResponse: {
    encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse;
    toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
    fromPartial<I extends {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedLongerDurationNotUnlockingOnlyResponse;
};
export declare const AccountLockedLongerDurationDenomRequest: {
    encode(message: AccountLockedLongerDurationDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomRequest;
    fromJSON(object: any): AccountLockedLongerDurationDenomRequest;
    toJSON(message: AccountLockedLongerDurationDenomRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        duration?: string;
        denom?: string;
    } & {
        owner?: string;
        duration?: string;
        denom?: string;
    } & Record<Exclude<keyof I, keyof AccountLockedLongerDurationDenomRequest>, never>>(object: I): AccountLockedLongerDurationDenomRequest;
};
export declare const AccountLockedLongerDurationDenomResponse: {
    encode(message: AccountLockedLongerDurationDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomResponse;
    fromJSON(object: any): AccountLockedLongerDurationDenomResponse;
    toJSON(message: AccountLockedLongerDurationDenomResponse): unknown;
    fromPartial<I extends {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "locks">, never>>(object: I): AccountLockedLongerDurationDenomResponse;
};
