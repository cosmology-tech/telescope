import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export interface Msg {
  JoinPool(request: DeepPartial<MsgJoinPool>, metadata?: grpc.Metadata): Promise<MsgJoinPoolResponse>;
  ExitPool(request: DeepPartial<MsgExitPool>, metadata?: grpc.Metadata): Promise<MsgExitPoolResponse>;
  SwapExactAmountIn(request: DeepPartial<MsgSwapExactAmountIn>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountInResponse>;
  SwapExactAmountOut(request: DeepPartial<MsgSwapExactAmountOut>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountOutResponse>;
  JoinSwapExternAmountIn(request: DeepPartial<MsgJoinSwapExternAmountIn>, metadata?: grpc.Metadata): Promise<MsgJoinSwapExternAmountInResponse>;
  JoinSwapShareAmountOut(request: DeepPartial<MsgJoinSwapShareAmountOut>, metadata?: grpc.Metadata): Promise<MsgJoinSwapShareAmountOutResponse>;
  ExitSwapExternAmountOut(request: DeepPartial<MsgExitSwapExternAmountOut>, metadata?: grpc.Metadata): Promise<MsgExitSwapExternAmountOutResponse>;
  ExitSwapShareAmountIn(request: DeepPartial<MsgExitSwapShareAmountIn>, metadata?: grpc.Metadata): Promise<MsgExitSwapShareAmountInResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.joinPool = this.joinPool.bind(this);
    this.exitPool = this.exitPool.bind(this);
    this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
    this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
    this.joinSwapExternAmountIn = this.joinSwapExternAmountIn.bind(this);
    this.joinSwapShareAmountOut = this.joinSwapShareAmountOut.bind(this);
    this.exitSwapExternAmountOut = this.exitSwapExternAmountOut.bind(this);
    this.exitSwapShareAmountIn = this.exitSwapShareAmountIn.bind(this);
  }

  joinPool(request: DeepPartial<MsgJoinPool>, metadata?: grpc.Metadata): Promise<MsgJoinPoolResponse> {
    return this.rpc.unary(MsgJoinPool, MsgJoinPool.fromPartial(request), metadata);
  }

  exitPool(request: DeepPartial<MsgExitPool>, metadata?: grpc.Metadata): Promise<MsgExitPoolResponse> {
    return this.rpc.unary(MsgExitPool, MsgExitPool.fromPartial(request), metadata);
  }

  swapExactAmountIn(request: DeepPartial<MsgSwapExactAmountIn>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountInResponse> {
    return this.rpc.unary(MsgSwapExactAmountIn, MsgSwapExactAmountIn.fromPartial(request), metadata);
  }

  swapExactAmountOut(request: DeepPartial<MsgSwapExactAmountOut>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountOutResponse> {
    return this.rpc.unary(MsgSwapExactAmountOut, MsgSwapExactAmountOut.fromPartial(request), metadata);
  }

  joinSwapExternAmountIn(request: DeepPartial<MsgJoinSwapExternAmountIn>, metadata?: grpc.Metadata): Promise<MsgJoinSwapExternAmountInResponse> {
    return this.rpc.unary(MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountIn.fromPartial(request), metadata);
  }

  joinSwapShareAmountOut(request: DeepPartial<MsgJoinSwapShareAmountOut>, metadata?: grpc.Metadata): Promise<MsgJoinSwapShareAmountOutResponse> {
    return this.rpc.unary(MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOut.fromPartial(request), metadata);
  }

  exitSwapExternAmountOut(request: DeepPartial<MsgExitSwapExternAmountOut>, metadata?: grpc.Metadata): Promise<MsgExitSwapExternAmountOutResponse> {
    return this.rpc.unary(MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOut.fromPartial(request), metadata);
  }

  exitSwapShareAmountIn(request: DeepPartial<MsgExitSwapShareAmountIn>, metadata?: grpc.Metadata): Promise<MsgExitSwapShareAmountInResponse> {
    return this.rpc.unary(MsgExitSwapShareAmountIn, MsgExitSwapShareAmountIn.fromPartial(request), metadata);
  }

}
export const MsgDesc = {
  serviceName: "osmosis.gamm.v1beta1.Msg"
};
export const MsgJoinPoolDesc: UnaryMethodDefinitionish = {
  methodName: "JoinPool",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgJoinPool.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgJoinPoolResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgExitPoolDesc: UnaryMethodDefinitionish = {
  methodName: "ExitPool",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExitPool.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgExitPoolResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgSwapExactAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactAmountIn",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSwapExactAmountIn.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSwapExactAmountInResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgSwapExactAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactAmountOut",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSwapExactAmountOut.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgSwapExactAmountOutResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgJoinSwapExternAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "JoinSwapExternAmountIn",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgJoinSwapExternAmountIn.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgJoinSwapExternAmountInResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgJoinSwapShareAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "JoinSwapShareAmountOut",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgJoinSwapShareAmountOut.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgJoinSwapShareAmountOutResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgExitSwapExternAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "ExitSwapExternAmountOut",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExitSwapExternAmountOut.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgExitSwapExternAmountOutResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const MsgExitSwapShareAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "ExitSwapShareAmountIn",
  service: MsgDesc,
  requestStream: false,
  reponseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExitSwapShareAmountIn.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...MsgExitSwapShareAmountInResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};