import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate } from "./tx";
export declare const json: {
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
