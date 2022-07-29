import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  /*null*/

  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
  /*null*/

  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
  /*null*/

  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
  /*null*/

  joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
  /*null*/

  joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
  /*null*/

  exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
  /*null*/

  exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
  /*null*/

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

  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse> {
    const data = MsgJoinPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinPool", data);
    return promise.then(data => MsgJoinPoolResponse.decode(new _m0.Reader(data)));
  }

  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse> {
    const data = MsgExitPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitPool", data);
    return promise.then(data => MsgExitPoolResponse.decode(new _m0.Reader(data)));
  }

  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse> {
    const data = MsgSwapExactAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountIn", data);
    return promise.then(data => MsgSwapExactAmountInResponse.decode(new _m0.Reader(data)));
  }

  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse> {
    const data = MsgSwapExactAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountOut", data);
    return promise.then(data => MsgSwapExactAmountOutResponse.decode(new _m0.Reader(data)));
  }

  joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse> {
    const data = MsgJoinSwapExternAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapExternAmountIn", data);
    return promise.then(data => MsgJoinSwapExternAmountInResponse.decode(new _m0.Reader(data)));
  }

  joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse> {
    const data = MsgJoinSwapShareAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapShareAmountOut", data);
    return promise.then(data => MsgJoinSwapShareAmountOutResponse.decode(new _m0.Reader(data)));
  }

  exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse> {
    const data = MsgExitSwapExternAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapExternAmountOut", data);
    return promise.then(data => MsgExitSwapExternAmountOutResponse.decode(new _m0.Reader(data)));
  }

  exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse> {
    const data = MsgExitSwapShareAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapShareAmountIn", data);
    return promise.then(data => MsgExitSwapShareAmountInResponse.decode(new _m0.Reader(data)));
  }

}