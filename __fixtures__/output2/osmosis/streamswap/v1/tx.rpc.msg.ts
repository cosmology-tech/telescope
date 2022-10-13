import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateSale, MsgCreateSaleResponse, MsgSubscribe, MsgWithdraw, MsgExitSale, MsgExitSaleResponse, MsgFinalizeSale, MsgFinalizeSaleResponse } from "./tx";
import { Empty } from "../../../google/protobuf/empty";
export interface Msg {
  /**
   * CreateSale creates new token sale. Anyone can create a new sale.
   * params.SaleBond OSMO will be charged as a bond (returned in FinalizeSale)
   * to avoid spams.
   * The sale follows the streamswap functionality explained in the
   * x/launchapd/spec
   */
  createSale(request: MsgCreateSale): Promise<MsgCreateSaleResponse>;
  /**
   * Subscribe to a token sale. Any use at any time before the sale end can join
   * the sale by sending `token_in` to the Sale through the Subscribe msg.
   * During the sale, user `token_in` will be automatically charged every
   * epoch to purchase `token_out`.
   */

  subscribe(request: MsgSubscribe): Promise<Empty>;
  /**
   * Withdraw sends back `amount` of unspent tokens_in to the user.
   * If `amount` is empty, it will default to all unspent tokens.
   * User can do it any time unless his deposit is empty.
   */

  withdraw(request: MsgWithdraw): Promise<Empty>;
  /**
   * ExitSale withdraws (by a user who subscribed to the sale) purchased
   * tokens_out from the pool and remained tokens_in. Must be called before
   * the sale end.
   */

  exitSale(request: MsgExitSale): Promise<MsgExitSaleResponse>;
  /**
   * FinalizeSale clean ups the sale and sends income (earned tokens_in) to the
   * Sale recipient. Returns error if called before the Sale end. Anyone can
   * call this method.
   */

  finalizeSale(request: MsgFinalizeSale): Promise<MsgFinalizeSaleResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createSale = this.createSale.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.exitSale = this.exitSale.bind(this);
    this.finalizeSale = this.finalizeSale.bind(this);
  }

  createSale(request: MsgCreateSale): Promise<MsgCreateSaleResponse> {
    const data = MsgCreateSale.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Msg", "CreateSale", data);
    return promise.then(data => MsgCreateSaleResponse.decode(new _m0.Reader(data)));
  }

  subscribe(request: MsgSubscribe): Promise<Empty> {
    const data = MsgSubscribe.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Msg", "Subscribe", data);
    return promise.then(data => Empty.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<Empty> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Msg", "Withdraw", data);
    return promise.then(data => Empty.decode(new _m0.Reader(data)));
  }

  exitSale(request: MsgExitSale): Promise<MsgExitSaleResponse> {
    const data = MsgExitSale.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Msg", "ExitSale", data);
    return promise.then(data => MsgExitSaleResponse.decode(new _m0.Reader(data)));
  }

  finalizeSale(request: MsgFinalizeSale): Promise<MsgFinalizeSaleResponse> {
    const data = MsgFinalizeSale.encode(request).finish();
    const promise = this.rpc.request("osmosis.streamswap.v1.Msg", "FinalizeSale", data);
    return promise.then(data => MsgFinalizeSaleResponse.decode(new _m0.Reader(data)));
  }

}