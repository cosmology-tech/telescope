import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
    protocol: Long;
    software: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
    block: Long;
    app: Long;
}
export declare const App: {
    encode(message: App, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): App;
    fromJSON(object: any): App;
    toJSON(message: App): unknown;
    fromPartial<I extends {
        protocol?: any;
        software?: string;
    } & {
        protocol?: any;
        software?: string;
    } & Record<Exclude<keyof I, keyof App>, never>>(object: I): App;
};
export declare const Consensus: {
    encode(message: Consensus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Consensus;
    fromJSON(object: any): Consensus;
    toJSON(message: Consensus): unknown;
    fromPartial<I extends {
        block?: any;
        app?: any;
    } & {
        block?: any;
        app?: any;
    } & Record<Exclude<keyof I, keyof Consensus>, never>>(object: I): Consensus;
};
