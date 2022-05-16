import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        superfluidDelegate(value: MsgSuperfluidDelegate): {
            type_url: string;
            value: Uint8Array;
        };
        superfluidUndelegate(value: MsgSuperfluidUndelegate): {
            type_url: string;
            value: Uint8Array;
        };
        superfluidUnbondLock(value: MsgSuperfluidUnbondLock): {
            type_url: string;
            value: Uint8Array;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        superfluidDelegate(value: MsgSuperfluidDelegate): {
            typeUrl: string;
            value: MsgSuperfluidDelegate;
        };
        superfluidUndelegate(value: MsgSuperfluidUndelegate): {
            typeUrl: string;
            value: MsgSuperfluidUndelegate;
        };
        superfluidUnbondLock(value: MsgSuperfluidUnbondLock): {
            typeUrl: string;
            value: MsgSuperfluidUnbondLock;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgLockAndSuperfluidDelegate;
        };
    };
    toJSON: {
        superfluidDelegate(value: MsgSuperfluidDelegate): {
            typeUrl: string;
            value: unknown;
        };
        superfluidUndelegate(value: MsgSuperfluidUndelegate): {
            typeUrl: string;
            value: unknown;
        };
        superfluidUnbondLock(value: MsgSuperfluidUnbondLock): {
            typeUrl: string;
            value: unknown;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        superfluidDelegate(value: any): {
            typeUrl: string;
            value: MsgSuperfluidDelegate;
        };
        superfluidUndelegate(value: any): {
            typeUrl: string;
            value: MsgSuperfluidUndelegate;
        };
        superfluidUnbondLock(value: any): {
            typeUrl: string;
            value: MsgSuperfluidUnbondLock;
        };
        lockAndSuperfluidDelegate(value: any): {
            typeUrl: string;
            value: MsgLockAndSuperfluidDelegate;
        };
    };
    fromPartial: {
        superfluidDelegate(value: MsgSuperfluidDelegate): {
            typeUrl: string;
            value: MsgSuperfluidDelegate;
        };
        superfluidUndelegate(value: MsgSuperfluidUndelegate): {
            typeUrl: string;
            value: MsgSuperfluidUndelegate;
        };
        superfluidUnbondLock(value: MsgSuperfluidUnbondLock): {
            typeUrl: string;
            value: MsgSuperfluidUnbondLock;
        };
        lockAndSuperfluidDelegate(value: MsgLockAndSuperfluidDelegate): {
            typeUrl: string;
            value: MsgLockAndSuperfluidDelegate;
        };
    };
};
