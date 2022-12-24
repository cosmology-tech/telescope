import { Tx, TxAmino, TxAminoType, TxSDKType } from "./tx";
import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseAmino, TxResponseAminoType, TxResponseSDKType, GasInfo, GasInfoAmino, GasInfoAminoType, GasInfoSDKType, Result, ResultAmino, ResultAminoType, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDAmino, BlockIDAminoType, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockAmino, BlockAminoType, BlockSDKType } from "../../../tendermint/types/block";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { SimulateRequest, SimulateRequestAmino, SimulateRequestAminoType, SimulateRequestSDKType, SimulateResponse, SimulateResponseAmino, SimulateResponseAminoType, SimulateResponseSDKType, GetTxRequest, GetTxRequestAmino, GetTxRequestAminoType, GetTxRequestSDKType, GetTxResponse, GetTxResponseAmino, GetTxResponseAminoType, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestAmino, BroadcastTxRequestAminoType, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseAmino, BroadcastTxResponseAminoType, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestAmino, GetTxsEventRequestAminoType, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseAmino, GetTxsEventResponseAminoType, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestAmino, GetBlockWithTxsRequestAminoType, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseAmino, GetBlockWithTxsResponseAminoType, GetBlockWithTxsResponseSDKType } from "./service";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getTx = this.getTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }

  /* GetTx fetches a tx by hash. */
  async getTx(params: GetTxRequest): Promise<GetTxResponseSDKType> {
    const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`;
    return await this.req.get<GetTxResponseSDKType>(endpoint);
  }

  /* GetTxsEvent fetches txs by event. */
  async getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.events !== "undefined") {
      options.params.events = params.events;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.orderBy !== "undefined") {
      options.params.order_by = params.orderBy;
    }

    const endpoint = `cosmos/tx/v1beta1/txs`;
    return await this.req.get<GetTxsEventResponseSDKType>(endpoint, options);
  }

  /* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */
  async getBlockWithTxs(params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/tx/v1beta1/txs/block/${params.height}`;
    return await this.req.get<GetBlockWithTxsResponseSDKType>(endpoint, options);
  }

}