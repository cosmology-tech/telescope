import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export declare enum Action {
    ActionAddLiquidity = 0,
    ActionSwap = 1,
    ActionVote = 2,
    ActionDelegateStake = 3,
    UNRECOGNIZED = -1
}
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
    /** address of claim user */
    address: string;
    /** total initial claimable amount for the user */
    initialClaimableAmount: Coin[];
    /**
     * true if action is completed
     * index of bool in array refers to action enum #
     */
    actionCompleted: boolean[];
}
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord;
    fromJSON(object: any): ClaimRecord;
    toJSON(message: ClaimRecord): unknown;
    fromPartial<I extends {
        address?: string;
        initialClaimableAmount?: {
            denom?: string;
            amount?: string;
        }[];
        actionCompleted?: boolean[];
    } & {
        address?: string;
        initialClaimableAmount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["initialClaimableAmount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["initialClaimableAmount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I["actionCompleted"], keyof boolean[]>, never>;
    } & Record<Exclude<keyof I, keyof ClaimRecord>, never>>(object: I): ClaimRecord;
};
