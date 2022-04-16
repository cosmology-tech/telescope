import * as _m0 from "protobufjs/minimal";
import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "../../../cosmos/staking/v1beta1/staking";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params: Params;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    lastTotalPower: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    lastValidatorPowers: LastValidatorPower[];
    /** delegations defines the validator set at genesis. */
    validators: Validator[];
    /** delegations defines the delegations active at genesis. */
    delegations: Delegation[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbondingDelegations: UnbondingDelegation[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: Redelegation[];
    exported: boolean;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            unbondingTime?: string;
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
            minCommissionRate?: string;
        };
        lastTotalPower?: Uint8Array;
        lastValidatorPowers?: {
            address?: string;
            power?: string;
        }[];
        validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("../../../cosmos/staking/v1beta1/staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: string;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[];
        delegations?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            shares?: string;
        }[];
        unbondingDelegations?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[];
        redelegations?: {
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            }[];
        }[];
        exported?: boolean;
    } & {
        params?: {
            unbondingTime?: string;
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
            minCommissionRate?: string;
        } & {
            unbondingTime?: string;
            maxValidators?: number;
            maxEntries?: number;
            historicalEntries?: number;
            bondDenom?: string;
            minCommissionRate?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        lastTotalPower?: Uint8Array;
        lastValidatorPowers?: {
            address?: string;
            power?: string;
        }[] & ({
            address?: string;
            power?: string;
        } & {
            address?: string;
            power?: string;
        } & Record<Exclude<keyof I["lastValidatorPowers"][number], keyof LastValidatorPower>, never>)[] & Record<Exclude<keyof I["lastValidatorPowers"], keyof {
            address?: string;
            power?: string;
        }[]>, never>;
        validators?: {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("../../../cosmos/staking/v1beta1/staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: string;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[] & ({
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("../../../cosmos/staking/v1beta1/staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: string;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        } & {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["validators"][number]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>, never>;
            jailed?: boolean;
            status?: import("../../../cosmos/staking/v1beta1/staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            } & Record<Exclude<keyof I["validators"][number]["description"], keyof import("../../../cosmos/staking/v1beta1/staking").Description>, never>;
            unbondingHeight?: string;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            } & {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                } & Record<Exclude<keyof I["validators"][number]["commission"]["commissionRates"], keyof import("../../../cosmos/staking/v1beta1/staking").CommissionRates>, never>;
                updateTime?: Date;
            } & Record<Exclude<keyof I["validators"][number]["commission"], keyof import("../../../cosmos/staking/v1beta1/staking").Commission>, never>;
            minSelfDelegation?: string;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            operatorAddress?: string;
            consensusPubkey?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            jailed?: boolean;
            status?: import("../../../cosmos/staking/v1beta1/staking").BondStatus;
            tokens?: string;
            delegatorShares?: string;
            description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                securityContact?: string;
                details?: string;
            };
            unbondingHeight?: string;
            unbondingTime?: Date;
            commission?: {
                commissionRates?: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                };
                updateTime?: Date;
            };
            minSelfDelegation?: string;
        }[]>, never>;
        delegations?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            shares?: string;
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            shares?: string;
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            shares?: string;
        } & Record<Exclude<keyof I["delegations"][number], keyof Delegation>, never>)[] & Record<Exclude<keyof I["delegations"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            shares?: string;
        }[]>, never>;
        unbondingDelegations?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[] & ({
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            } & Record<Exclude<keyof I["unbondingDelegations"][number]["entries"][number], keyof import("../../../cosmos/staking/v1beta1/staking").UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["unbondingDelegations"][number]["entries"], keyof {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["unbondingDelegations"][number], keyof UnbondingDelegation>, never>)[] & Record<Exclude<keyof I["unbondingDelegations"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                balance?: string;
            }[];
        }[]>, never>;
        redelegations?: {
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            }[];
        }[] & ({
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            }[];
        } & {
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            }[] & ({
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            } & {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            } & Record<Exclude<keyof I["redelegations"][number]["entries"][number], keyof import("../../../cosmos/staking/v1beta1/staking").RedelegationEntry>, never>)[] & Record<Exclude<keyof I["redelegations"][number]["entries"], keyof {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["redelegations"][number], keyof Redelegation>, never>)[] & Record<Exclude<keyof I["redelegations"], keyof {
            delegatorAddress?: string;
            validatorSrcAddress?: string;
            validatorDstAddress?: string;
            entries?: {
                creationHeight?: string;
                completionTime?: Date;
                initialBalance?: string;
                sharesDst?: string;
            }[];
        }[]>, never>;
        exported?: boolean;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const LastValidatorPower: {
    encode(message: LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower;
    fromJSON(object: any): LastValidatorPower;
    toJSON(message: LastValidatorPower): unknown;
    fromPartial<I extends {
        address?: string;
        power?: string;
    } & {
        address?: string;
        power?: string;
    } & Record<Exclude<keyof I, keyof LastValidatorPower>, never>>(object: I): LastValidatorPower;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
