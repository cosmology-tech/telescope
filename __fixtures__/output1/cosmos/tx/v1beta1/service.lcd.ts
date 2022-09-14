import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export class LCDServiceClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* GetTx fetches a tx by hash. */
  async getTx(params: GetTxRequest): Promise<GetTxResponse> {
    const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`;
    return await this.get<GetTxResponse>(endpoint);
  }

  /* GetTxsEvent fetches txs by event. */
  async getTxsEvent(params: GetTxsEventRequest): Promise<GetTxsEventResponse> {
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
    return await this.get<GetTxsEventResponse>(endpoint, options);
  }

  /* GetBlockWithTxs fetches a block with decoded txs.
  
  Since: cosmos-sdk 0.45.2 */
  async getBlockWithTxs(params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/tx/v1beta1/txs/block/${params.height}`;
    return await this.get<GetBlockWithTxsResponse>(endpoint, options);
  }

}