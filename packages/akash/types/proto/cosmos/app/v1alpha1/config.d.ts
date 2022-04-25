import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface Config {
    /** modules are the module configurations for the app. */
    modules: ModuleConfig[];
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfig {
    /**
     * name is the unique name of the module within the app. It should be a name
     * that persists between different versions of a module so that modules
     * can be smoothly upgraded to new versions.
     *
     * For example, for the module cosmos.bank.module.v1.Module, we may chose
     * to simply name the module "bank" in the app. When we upgrade to
     * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
     * and the framework knows that the v2 module should receive all the same state
     * that the v1 module had. Note: modules should provide info on which versions
     * they can migrate from in the ModuleDescriptor.can_migration_from field.
     */
    name: string;
    /**
     * config is the config object for the module. Module config messages should
     * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
     */
    config: Any;
}
export declare const Config: {
    encode(message: Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Config;
    fromJSON(object: any): Config;
    toJSON(message: Config): unknown;
    fromPartial<I extends unknown>(object: I): Config;
};
export declare const ModuleConfig: {
    encode(message: ModuleConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleConfig;
    fromJSON(object: any): ModuleConfig;
    toJSON(message: ModuleConfig): unknown;
    fromPartial<I extends unknown>(object: I): ModuleConfig;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
