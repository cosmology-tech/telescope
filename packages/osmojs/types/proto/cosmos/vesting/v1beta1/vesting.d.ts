import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    baseAccount: BaseAccount;
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    endTime: Long;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
    baseVestingAccount: BaseVestingAccount;
    startTime: Long;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
    baseVestingAccount: BaseVestingAccount;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    length: Long;
    amount: Coin[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
    baseVestingAccount: BaseVestingAccount;
    startTime: Long;
    vestingPeriods: Period[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
    baseVestingAccount: BaseVestingAccount;
}
export declare const BaseVestingAccount: {
    encode(message: BaseVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseVestingAccount;
    fromJSON(object: any): BaseVestingAccount;
    toJSON(message: BaseVestingAccount): unknown;
    fromPartial<I extends {
        baseAccount?: {
            address?: string;
            pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            accountNumber?: any;
            sequence?: any;
        };
        originalVesting?: {
            denom?: string;
            amount?: string;
        }[];
        delegatedFree?: {
            denom?: string;
            amount?: string;
        }[];
        delegatedVesting?: {
            denom?: string;
            amount?: string;
        }[];
        endTime?: any;
    } & {
        baseAccount?: {
            address?: string;
            pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            accountNumber?: any;
            sequence?: any;
        } & {
            address?: string;
            pubKey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["baseAccount"]["pubKey"], keyof import("../../../google/protobuf/any").Any>, never>;
            accountNumber?: any;
            sequence?: any;
        } & Record<Exclude<keyof I["baseAccount"], keyof BaseAccount>, never>;
        originalVesting?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["originalVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["originalVesting"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        delegatedFree?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["delegatedFree"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["delegatedFree"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        delegatedVesting?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["delegatedVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["delegatedVesting"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        endTime?: any;
    } & Record<Exclude<keyof I, keyof BaseVestingAccount>, never>>(object: I): BaseVestingAccount;
};
export declare const ContinuousVestingAccount: {
    encode(message: ContinuousVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContinuousVestingAccount;
    fromJSON(object: any): ContinuousVestingAccount;
    toJSON(message: ContinuousVestingAccount): unknown;
    fromPartial<I extends {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        };
        startTime?: any;
    } & {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        } & {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            } & {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"]["pubKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                accountNumber?: any;
                sequence?: any;
            } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"], keyof BaseAccount>, never>;
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            endTime?: any;
        } & Record<Exclude<keyof I["baseVestingAccount"], keyof BaseVestingAccount>, never>;
        startTime?: any;
    } & Record<Exclude<keyof I, keyof ContinuousVestingAccount>, never>>(object: I): ContinuousVestingAccount;
};
export declare const DelayedVestingAccount: {
    encode(message: DelayedVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelayedVestingAccount;
    fromJSON(object: any): DelayedVestingAccount;
    toJSON(message: DelayedVestingAccount): unknown;
    fromPartial<I extends {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        };
    } & {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        } & {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            } & {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"]["pubKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                accountNumber?: any;
                sequence?: any;
            } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"], keyof BaseAccount>, never>;
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            endTime?: any;
        } & Record<Exclude<keyof I["baseVestingAccount"], keyof BaseVestingAccount>, never>;
    } & Record<Exclude<keyof I, "baseVestingAccount">, never>>(object: I): DelayedVestingAccount;
};
export declare const Period: {
    encode(message: Period, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Period;
    fromJSON(object: any): Period;
    toJSON(message: Period): unknown;
    fromPartial<I extends {
        length?: any;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        length?: any;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Period>, never>>(object: I): Period;
};
export declare const PeriodicVestingAccount: {
    encode(message: PeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicVestingAccount;
    fromJSON(object: any): PeriodicVestingAccount;
    toJSON(message: PeriodicVestingAccount): unknown;
    fromPartial<I extends {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        };
        startTime?: any;
        vestingPeriods?: {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        } & {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            } & {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"]["pubKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                accountNumber?: any;
                sequence?: any;
            } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"], keyof BaseAccount>, never>;
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            endTime?: any;
        } & Record<Exclude<keyof I["baseVestingAccount"], keyof BaseVestingAccount>, never>;
        startTime?: any;
        vestingPeriods?: {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["vestingPeriods"][number]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["vestingPeriods"][number]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["vestingPeriods"][number], keyof Period>, never>)[] & Record<Exclude<keyof I["vestingPeriods"], keyof {
            length?: any;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof PeriodicVestingAccount>, never>>(object: I): PeriodicVestingAccount;
};
export declare const PermanentLockedAccount: {
    encode(message: PermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermanentLockedAccount;
    fromJSON(object: any): PermanentLockedAccount;
    toJSON(message: PermanentLockedAccount): unknown;
    fromPartial<I extends {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        };
    } & {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: any;
        } & {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: any;
                sequence?: any;
            } & {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"]["pubKey"], keyof import("../../../google/protobuf/any").Any>, never>;
                accountNumber?: any;
                sequence?: any;
            } & Record<Exclude<keyof I["baseVestingAccount"]["baseAccount"], keyof BaseAccount>, never>;
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["originalVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedFree"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["baseVestingAccount"]["delegatedVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            endTime?: any;
        } & Record<Exclude<keyof I["baseVestingAccount"], keyof BaseVestingAccount>, never>;
    } & Record<Exclude<keyof I, "baseVestingAccount">, never>>(object: I): PermanentLockedAccount;
};
