import * as _m0 from "protobufjs/minimal";
/**
 * Selects and configures the service controller used by the service.  The
 * service controller handles features like abuse, quota, billing, logging,
 * monitoring, etc.
 */
export interface Control {
    /**
     * The service control environment to use. If empty, no control plane
     * feature (like quota and billing) will be enabled.
     */
    environment: string;
}
export declare const Control: {
    encode(message: Control, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Control;
    fromJSON(object: any): Control;
    toJSON(message: Control): unknown;
    fromPartial<I extends {
        environment?: string;
    } & {
        environment?: string;
    } & Record<Exclude<keyof I, "environment">, never>>(object: I): Control;
};
