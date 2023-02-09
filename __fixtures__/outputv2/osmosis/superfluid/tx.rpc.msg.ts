import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateSDKType, MsgSuperfluidDelegateResponse, MsgSuperfluidDelegateResponseSDKType, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateSDKType, MsgSuperfluidUndelegateResponse, MsgSuperfluidUndelegateResponseSDKType, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockSDKType, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUnbondLockResponseSDKType, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateSDKType, MsgLockAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegateResponseSDKType, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolSDKType, MsgUnPoolWhitelistedPoolResponse, MsgUnPoolWhitelistedPoolResponseSDKType } from "./tx";

/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  SuperfluidDelegate(request: DeepPartial<MsgSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidDelegateResponse>;

  /** Execute superfluid undelegation for a lockup */
  SuperfluidUndelegate(request: DeepPartial<MsgSuperfluidUndelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUndelegateResponse>;

  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  SuperfluidUnbondLock(request: DeepPartial<MsgSuperfluidUnbondLock>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUnbondLockResponse>;

  /** Execute lockup lock and superfluid delegation in a single msg */
  LockAndSuperfluidDelegate(request: DeepPartial<MsgLockAndSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgLockAndSuperfluidDelegateResponse>;
  UnPoolWhitelistedPool(request: DeepPartial<MsgUnPoolWhitelistedPool>, metadata?: grpc.Metadata): Promise<MsgUnPoolWhitelistedPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.superfluidDelegate = this.superfluidDelegate.bind(this);
    this.superfluidUndelegate = this.superfluidUndelegate.bind(this);
    this.superfluidUnbondLock = this.superfluidUnbondLock.bind(this);
    this.lockAndSuperfluidDelegate = this.lockAndSuperfluidDelegate.bind(this);
    this.unPoolWhitelistedPool = this.unPoolWhitelistedPool.bind(this);
  }

  superfluidDelegate(request: DeepPartial<MsgSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidDelegateResponse> {
    return this.rpc.unary(MsgSuperfluidDelegate, MsgSuperfluidDelegate.fromPartial(request), metadata);
  }

  superfluidUndelegate(request: DeepPartial<MsgSuperfluidUndelegate>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUndelegateResponse> {
    return this.rpc.unary(MsgSuperfluidUndelegate, MsgSuperfluidUndelegate.fromPartial(request), metadata);
  }

  superfluidUnbondLock(request: DeepPartial<MsgSuperfluidUnbondLock>, metadata?: grpc.Metadata): Promise<MsgSuperfluidUnbondLockResponse> {
    return this.rpc.unary(MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLock.fromPartial(request), metadata);
  }

  lockAndSuperfluidDelegate(request: DeepPartial<MsgLockAndSuperfluidDelegate>, metadata?: grpc.Metadata): Promise<MsgLockAndSuperfluidDelegateResponse> {
    return this.rpc.unary(MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegate.fromPartial(request), metadata);
  }

  unPoolWhitelistedPool(request: DeepPartial<MsgUnPoolWhitelistedPool>, metadata?: grpc.Metadata): Promise<MsgUnPoolWhitelistedPoolResponse> {
    return this.rpc.unary(MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPool.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "osmosis.superfluid.Msg"
};
export const MsgSuperfluidDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidDelegate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSuperfluidDelegate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSuperfluidDelegateResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgSuperfluidUndelegateDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidUndelegate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSuperfluidUndelegate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSuperfluidUndelegateResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgSuperfluidUnbondLockDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidUnbondLock",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSuperfluidUnbondLock.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSuperfluidUnbondLockResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgLockAndSuperfluidDelegateDesc: UnaryMethodDefinitionish = {
  methodName: "LockAndSuperfluidDelegate",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgLockAndSuperfluidDelegate.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgLockAndSuperfluidDelegateResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgUnPoolWhitelistedPoolDesc: UnaryMethodDefinitionish = {
  methodName: "UnPoolWhitelistedPool",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUnPoolWhitelistedPool.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgUnPoolWhitelistedPoolResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};