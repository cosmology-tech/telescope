import { Config } from "./config";
import * as _m0 from "protobufjs/minimal";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
    /** config is the current app config. */
    config: Config;
}
export declare const QueryConfigRequest: {
    encode(_: QueryConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest;
    fromJSON(_: any): QueryConfigRequest;
    toJSON(_: QueryConfigRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryConfigRequest;
};
export declare const QueryConfigResponse: {
    encode(message: QueryConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse;
    fromJSON(object: any): QueryConfigResponse;
    toJSON(message: QueryConfigResponse): unknown;
    fromPartial<I extends {
        config?: {
            modules?: {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        };
    } & {
        config?: {
            modules?: {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        } & {
            modules?: {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[] & ({
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["config"]["modules"][number]["config"], keyof import("../../../google/protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["config"]["modules"][number], keyof import("./config").ModuleConfig>, never>)[] & Record<Exclude<keyof I["config"]["modules"], keyof {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["config"], "modules">, never>;
    } & Record<Exclude<keyof I, "config">, never>>(object: I): QueryConfigResponse;
};
