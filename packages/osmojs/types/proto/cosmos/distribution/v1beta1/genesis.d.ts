import { DecCoin } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorHistoricalRewards, ValidatorCurrentRewards, DelegatorStartingInfo, ValidatorSlashEvent, Params, FeePool } from "./distribution";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
    /** delegator_address is the address of the delegator. */
    delegatorAddress: string;
    /** withdraw_address is the address to withdraw the delegation rewards to. */
    withdrawAddress: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** outstanding_rewards represents the oustanding rewards of a validator. */
    outstandingRewards: DecCoin[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** accumulated is the accumulated commission of a validator. */
    accumulated: ValidatorAccumulatedCommission;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** period defines the period the historical rewards apply to. */
    period: Long;
    /** rewards defines the historical rewards of a validator. */
    rewards: ValidatorHistoricalRewards;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** rewards defines the current rewards of a validator. */
    rewards: ValidatorCurrentRewards;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
    /** delegator_address is the address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** starting_info defines the starting info of a delegator. */
    startingInfo: DelegatorStartingInfo;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
    /** validator_address is the address of the validator. */
    validatorAddress: string;
    /** height defines the block height at which the slash event occured. */
    height: Long;
    /** period is the period of the slash event. */
    period: Long;
    /** validator_slash_event describes the slash event. */
    validatorSlashEvent: ValidatorSlashEvent;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** fee_pool defines the fee pool at genesis. */
    feePool: FeePool;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegatorWithdrawInfos: DelegatorWithdrawInfo[];
    /** fee_pool defines the previous proposer at genesis. */
    previousProposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstandingRewards: ValidatorOutstandingRewardsRecord[];
    /** fee_pool defines the accumulated commisions of all validators at genesis. */
    validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegatorStartingInfos: DelegatorStartingInfoRecord[];
    /** fee_pool defines the validator slash events at genesis. */
    validatorSlashEvents: ValidatorSlashEventRecord[];
}
export declare const DelegatorWithdrawInfo: {
    encode(message: DelegatorWithdrawInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorWithdrawInfo;
    fromJSON(object: any): DelegatorWithdrawInfo;
    toJSON(message: DelegatorWithdrawInfo): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        withdrawAddress?: string;
    } & {
        delegatorAddress?: string;
        withdrawAddress?: string;
    } & Record<Exclude<keyof I, keyof DelegatorWithdrawInfo>, never>>(object: I): DelegatorWithdrawInfo;
};
export declare const ValidatorOutstandingRewardsRecord: {
    encode(message: ValidatorOutstandingRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord;
    fromJSON(object: any): ValidatorOutstandingRewardsRecord;
    toJSON(message: ValidatorOutstandingRewardsRecord): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        outstandingRewards?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        validatorAddress?: string;
        outstandingRewards?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["outstandingRewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["outstandingRewards"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ValidatorOutstandingRewardsRecord>, never>>(object: I): ValidatorOutstandingRewardsRecord;
};
export declare const ValidatorAccumulatedCommissionRecord: {
    encode(message: ValidatorAccumulatedCommissionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord;
    fromJSON(object: any): ValidatorAccumulatedCommissionRecord;
    toJSON(message: ValidatorAccumulatedCommissionRecord): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        accumulated?: {
            commission?: {
                denom?: string;
                amount?: string;
            }[];
        };
    } & {
        validatorAddress?: string;
        accumulated?: {
            commission?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            commission?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["accumulated"]["commission"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["accumulated"]["commission"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["accumulated"], "commission">, never>;
    } & Record<Exclude<keyof I, keyof ValidatorAccumulatedCommissionRecord>, never>>(object: I): ValidatorAccumulatedCommissionRecord;
};
export declare const ValidatorHistoricalRewardsRecord: {
    encode(message: ValidatorHistoricalRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord;
    fromJSON(object: any): ValidatorHistoricalRewardsRecord;
    toJSON(message: ValidatorHistoricalRewardsRecord): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        period?: any;
        rewards?: {
            cumulativeRewardRatio?: {
                denom?: string;
                amount?: string;
            }[];
            referenceCount?: number;
        };
    } & {
        validatorAddress?: string;
        period?: any;
        rewards?: {
            cumulativeRewardRatio?: {
                denom?: string;
                amount?: string;
            }[];
            referenceCount?: number;
        } & {
            cumulativeRewardRatio?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["rewards"]["cumulativeRewardRatio"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"]["cumulativeRewardRatio"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            referenceCount?: number;
        } & Record<Exclude<keyof I["rewards"], keyof ValidatorHistoricalRewards>, never>;
    } & Record<Exclude<keyof I, keyof ValidatorHistoricalRewardsRecord>, never>>(object: I): ValidatorHistoricalRewardsRecord;
};
export declare const ValidatorCurrentRewardsRecord: {
    encode(message: ValidatorCurrentRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord;
    fromJSON(object: any): ValidatorCurrentRewardsRecord;
    toJSON(message: ValidatorCurrentRewardsRecord): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        rewards?: {
            rewards?: {
                denom?: string;
                amount?: string;
            }[];
            period?: any;
        };
    } & {
        validatorAddress?: string;
        rewards?: {
            rewards?: {
                denom?: string;
                amount?: string;
            }[];
            period?: any;
        } & {
            rewards?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["rewards"]["rewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"]["rewards"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            period?: any;
        } & Record<Exclude<keyof I["rewards"], keyof ValidatorCurrentRewards>, never>;
    } & Record<Exclude<keyof I, keyof ValidatorCurrentRewardsRecord>, never>>(object: I): ValidatorCurrentRewardsRecord;
};
export declare const DelegatorStartingInfoRecord: {
    encode(message: DelegatorStartingInfoRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfoRecord;
    fromJSON(object: any): DelegatorStartingInfoRecord;
    toJSON(message: DelegatorStartingInfoRecord): unknown;
    fromPartial<I extends {
        delegatorAddress?: string;
        validatorAddress?: string;
        startingInfo?: {
            previousPeriod?: any;
            stake?: string;
            height?: any;
        };
    } & {
        delegatorAddress?: string;
        validatorAddress?: string;
        startingInfo?: {
            previousPeriod?: any;
            stake?: string;
            height?: any;
        } & {
            previousPeriod?: any;
            stake?: string;
            height?: any;
        } & Record<Exclude<keyof I["startingInfo"], keyof DelegatorStartingInfo>, never>;
    } & Record<Exclude<keyof I, keyof DelegatorStartingInfoRecord>, never>>(object: I): DelegatorStartingInfoRecord;
};
export declare const ValidatorSlashEventRecord: {
    encode(message: ValidatorSlashEventRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEventRecord;
    fromJSON(object: any): ValidatorSlashEventRecord;
    toJSON(message: ValidatorSlashEventRecord): unknown;
    fromPartial<I extends {
        validatorAddress?: string;
        height?: any;
        period?: any;
        validatorSlashEvent?: {
            validatorPeriod?: any;
            fraction?: string;
        };
    } & {
        validatorAddress?: string;
        height?: any;
        period?: any;
        validatorSlashEvent?: {
            validatorPeriod?: any;
            fraction?: string;
        } & {
            validatorPeriod?: any;
            fraction?: string;
        } & Record<Exclude<keyof I["validatorSlashEvent"], keyof ValidatorSlashEvent>, never>;
    } & Record<Exclude<keyof I, keyof ValidatorSlashEventRecord>, never>>(object: I): ValidatorSlashEventRecord;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        };
        feePool?: {
            communityPool?: {
                denom?: string;
                amount?: string;
            }[];
        };
        delegatorWithdrawInfos?: {
            delegatorAddress?: string;
            withdrawAddress?: string;
        }[];
        previousProposer?: string;
        outstandingRewards?: {
            validatorAddress?: string;
            outstandingRewards?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        validatorAccumulatedCommissions?: {
            validatorAddress?: string;
            accumulated?: {
                commission?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        }[];
        validatorHistoricalRewards?: {
            validatorAddress?: string;
            period?: any;
            rewards?: {
                cumulativeRewardRatio?: {
                    denom?: string;
                    amount?: string;
                }[];
                referenceCount?: number;
            };
        }[];
        validatorCurrentRewards?: {
            validatorAddress?: string;
            rewards?: {
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
                period?: any;
            };
        }[];
        delegatorStartingInfos?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            startingInfo?: {
                previousPeriod?: any;
                stake?: string;
                height?: any;
            };
        }[];
        validatorSlashEvents?: {
            validatorAddress?: string;
            height?: any;
            period?: any;
            validatorSlashEvent?: {
                validatorPeriod?: any;
                fraction?: string;
            };
        }[];
    } & {
        params?: {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        } & {
            communityTax?: string;
            baseProposerReward?: string;
            bonusProposerReward?: string;
            withdrawAddrEnabled?: boolean;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        feePool?: {
            communityPool?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            communityPool?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["feePool"]["communityPool"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["feePool"]["communityPool"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["feePool"], "communityPool">, never>;
        delegatorWithdrawInfos?: {
            delegatorAddress?: string;
            withdrawAddress?: string;
        }[] & ({
            delegatorAddress?: string;
            withdrawAddress?: string;
        } & {
            delegatorAddress?: string;
            withdrawAddress?: string;
        } & Record<Exclude<keyof I["delegatorWithdrawInfos"][number], keyof DelegatorWithdrawInfo>, never>)[] & Record<Exclude<keyof I["delegatorWithdrawInfos"], keyof {
            delegatorAddress?: string;
            withdrawAddress?: string;
        }[]>, never>;
        previousProposer?: string;
        outstandingRewards?: {
            validatorAddress?: string;
            outstandingRewards?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            validatorAddress?: string;
            outstandingRewards?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            validatorAddress?: string;
            outstandingRewards?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["outstandingRewards"][number]["outstandingRewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["outstandingRewards"][number]["outstandingRewards"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["outstandingRewards"][number], keyof ValidatorOutstandingRewardsRecord>, never>)[] & Record<Exclude<keyof I["outstandingRewards"], keyof {
            validatorAddress?: string;
            outstandingRewards?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        validatorAccumulatedCommissions?: {
            validatorAddress?: string;
            accumulated?: {
                commission?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        }[] & ({
            validatorAddress?: string;
            accumulated?: {
                commission?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        } & {
            validatorAddress?: string;
            accumulated?: {
                commission?: {
                    denom?: string;
                    amount?: string;
                }[];
            } & {
                commission?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["validatorAccumulatedCommissions"][number]["accumulated"]["commission"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["validatorAccumulatedCommissions"][number]["accumulated"]["commission"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["validatorAccumulatedCommissions"][number]["accumulated"], "commission">, never>;
        } & Record<Exclude<keyof I["validatorAccumulatedCommissions"][number], keyof ValidatorAccumulatedCommissionRecord>, never>)[] & Record<Exclude<keyof I["validatorAccumulatedCommissions"], keyof {
            validatorAddress?: string;
            accumulated?: {
                commission?: {
                    denom?: string;
                    amount?: string;
                }[];
            };
        }[]>, never>;
        validatorHistoricalRewards?: {
            validatorAddress?: string;
            period?: any;
            rewards?: {
                cumulativeRewardRatio?: {
                    denom?: string;
                    amount?: string;
                }[];
                referenceCount?: number;
            };
        }[] & ({
            validatorAddress?: string;
            period?: any;
            rewards?: {
                cumulativeRewardRatio?: {
                    denom?: string;
                    amount?: string;
                }[];
                referenceCount?: number;
            };
        } & {
            validatorAddress?: string;
            period?: any;
            rewards?: {
                cumulativeRewardRatio?: {
                    denom?: string;
                    amount?: string;
                }[];
                referenceCount?: number;
            } & {
                cumulativeRewardRatio?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["validatorHistoricalRewards"][number]["rewards"]["cumulativeRewardRatio"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["validatorHistoricalRewards"][number]["rewards"]["cumulativeRewardRatio"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                referenceCount?: number;
            } & Record<Exclude<keyof I["validatorHistoricalRewards"][number]["rewards"], keyof ValidatorHistoricalRewards>, never>;
        } & Record<Exclude<keyof I["validatorHistoricalRewards"][number], keyof ValidatorHistoricalRewardsRecord>, never>)[] & Record<Exclude<keyof I["validatorHistoricalRewards"], keyof {
            validatorAddress?: string;
            period?: any;
            rewards?: {
                cumulativeRewardRatio?: {
                    denom?: string;
                    amount?: string;
                }[];
                referenceCount?: number;
            };
        }[]>, never>;
        validatorCurrentRewards?: {
            validatorAddress?: string;
            rewards?: {
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
                period?: any;
            };
        }[] & ({
            validatorAddress?: string;
            rewards?: {
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
                period?: any;
            };
        } & {
            validatorAddress?: string;
            rewards?: {
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
                period?: any;
            } & {
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["validatorCurrentRewards"][number]["rewards"]["rewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["validatorCurrentRewards"][number]["rewards"]["rewards"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                period?: any;
            } & Record<Exclude<keyof I["validatorCurrentRewards"][number]["rewards"], keyof ValidatorCurrentRewards>, never>;
        } & Record<Exclude<keyof I["validatorCurrentRewards"][number], keyof ValidatorCurrentRewardsRecord>, never>)[] & Record<Exclude<keyof I["validatorCurrentRewards"], keyof {
            validatorAddress?: string;
            rewards?: {
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
                period?: any;
            };
        }[]>, never>;
        delegatorStartingInfos?: {
            delegatorAddress?: string;
            validatorAddress?: string;
            startingInfo?: {
                previousPeriod?: any;
                stake?: string;
                height?: any;
            };
        }[] & ({
            delegatorAddress?: string;
            validatorAddress?: string;
            startingInfo?: {
                previousPeriod?: any;
                stake?: string;
                height?: any;
            };
        } & {
            delegatorAddress?: string;
            validatorAddress?: string;
            startingInfo?: {
                previousPeriod?: any;
                stake?: string;
                height?: any;
            } & {
                previousPeriod?: any;
                stake?: string;
                height?: any;
            } & Record<Exclude<keyof I["delegatorStartingInfos"][number]["startingInfo"], keyof DelegatorStartingInfo>, never>;
        } & Record<Exclude<keyof I["delegatorStartingInfos"][number], keyof DelegatorStartingInfoRecord>, never>)[] & Record<Exclude<keyof I["delegatorStartingInfos"], keyof {
            delegatorAddress?: string;
            validatorAddress?: string;
            startingInfo?: {
                previousPeriod?: any;
                stake?: string;
                height?: any;
            };
        }[]>, never>;
        validatorSlashEvents?: {
            validatorAddress?: string;
            height?: any;
            period?: any;
            validatorSlashEvent?: {
                validatorPeriod?: any;
                fraction?: string;
            };
        }[] & ({
            validatorAddress?: string;
            height?: any;
            period?: any;
            validatorSlashEvent?: {
                validatorPeriod?: any;
                fraction?: string;
            };
        } & {
            validatorAddress?: string;
            height?: any;
            period?: any;
            validatorSlashEvent?: {
                validatorPeriod?: any;
                fraction?: string;
            } & {
                validatorPeriod?: any;
                fraction?: string;
            } & Record<Exclude<keyof I["validatorSlashEvents"][number]["validatorSlashEvent"], keyof ValidatorSlashEvent>, never>;
        } & Record<Exclude<keyof I["validatorSlashEvents"][number], keyof ValidatorSlashEventRecord>, never>)[] & Record<Exclude<keyof I["validatorSlashEvents"], keyof {
            validatorAddress?: string;
            height?: any;
            period?: any;
            validatorSlashEvent?: {
                validatorPeriod?: any;
                fraction?: string;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
