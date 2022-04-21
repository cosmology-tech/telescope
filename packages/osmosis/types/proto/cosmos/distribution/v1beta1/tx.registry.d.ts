import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
import * as _m0 from "protobufjs/minimal";
export declare const registry: {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        encode(message: MsgSetWithdrawAddress, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSetWithdrawAddress;
        fromJSON(object: any): MsgSetWithdrawAddress;
        toJSON(message: MsgSetWithdrawAddress): unknown;
        fromPartial<I extends unknown>(object: I): MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        encode(message: MsgWithdrawDelegatorReward, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgWithdrawDelegatorReward;
        fromJSON(object: any): MsgWithdrawDelegatorReward;
        toJSON(message: MsgWithdrawDelegatorReward): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        encode(message: MsgWithdrawValidatorCommission, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgWithdrawValidatorCommission;
        fromJSON(object: any): MsgWithdrawValidatorCommission;
        toJSON(message: MsgWithdrawValidatorCommission): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        encode(message: MsgFundCommunityPool, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgFundCommunityPool;
        fromJSON(object: any): MsgFundCommunityPool;
        toJSON(message: MsgFundCommunityPool): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgFundCommunityPool;
    };
};
