import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate } from "./tx";
export declare const toJSON: {
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
