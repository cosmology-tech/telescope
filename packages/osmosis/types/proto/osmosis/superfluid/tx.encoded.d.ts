import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate } from "./tx";
export declare const encoded: {
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
