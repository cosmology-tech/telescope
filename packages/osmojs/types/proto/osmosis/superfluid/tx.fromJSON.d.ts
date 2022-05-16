import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate } from "./tx";
export declare const fromJSON: {
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
