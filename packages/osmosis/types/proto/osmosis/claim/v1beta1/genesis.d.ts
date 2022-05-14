import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { ClaimRecord } from "./claim";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /** balance of the claim module's account */
    moduleAccountBalance: Coin;
    /** params defines all the parameters of the module. */
    params: Params;
    /** list of claim records, one for every airdrop recipient */
    claimRecords: ClaimRecord[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        moduleAccountBalance?: {
            denom?: string;
            amount?: string;
        };
        params?: {
            airdropStartTime?: Date;
            durationUntilDecay?: string;
            durationOfDecay?: string;
            claimDenom?: string;
        };
        claimRecords?: {
            address?: string;
            initialClaimableAmount?: {
                denom?: string;
                amount?: string;
            }[];
            actionCompleted?: boolean[];
        }[];
    } & {
        moduleAccountBalance?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["moduleAccountBalance"], keyof Coin>, never>;
        params?: {
            airdropStartTime?: Date;
            durationUntilDecay?: string;
            durationOfDecay?: string;
            claimDenom?: string;
        } & {
            airdropStartTime?: Date;
            durationUntilDecay?: string;
            durationOfDecay?: string;
            claimDenom?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        claimRecords?: {
            address?: string;
            initialClaimableAmount?: {
                denom?: string;
                amount?: string;
            }[];
            actionCompleted?: boolean[];
        }[] & ({
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
            } & Record<Exclude<keyof I["claimRecords"][number]["initialClaimableAmount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimRecords"][number]["initialClaimableAmount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I["claimRecords"][number]["actionCompleted"], keyof boolean[]>, never>;
        } & Record<Exclude<keyof I["claimRecords"][number], keyof ClaimRecord>, never>)[] & Record<Exclude<keyof I["claimRecords"], keyof {
            address?: string;
            initialClaimableAmount?: {
                denom?: string;
                amount?: string;
            }[];
            actionCompleted?: boolean[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
