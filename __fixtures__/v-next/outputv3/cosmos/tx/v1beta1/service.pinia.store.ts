import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/tx/v1beta1/service.proto', {
  state: () => {
    return {
      simulate: ({} as SimulateResponse),
      getTx: ({} as GetTxResponse),
      broadcastTx: ({} as BroadcastTxResponse),
      getTxsEvent: ({} as GetTxsEventResponse),
      getBlockWithTxs: ({} as GetBlockWithTxsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchSimulate(param : SimulateRequest) {
      this.simulate = await this.lcdClient.simulate(param);
      return this.simulate;
    },

    async fetchGetTx(param : GetTxRequest) {
      this.getTx = await this.lcdClient.getTx(param);
      return this.getTx;
    },

    async fetchBroadcastTx(param : BroadcastTxRequest) {
      this.broadcastTx = await this.lcdClient.broadcastTx(param);
      return this.broadcastTx;
    },

    async fetchGetTxsEvent(param : GetTxsEventRequest) {
      this.getTxsEvent = await this.lcdClient.getTxsEvent(param);
      return this.getTxsEvent;
    },

    async fetchGetBlockWithTxs(param : GetBlockWithTxsRequest) {
      this.getBlockWithTxs = await this.lcdClient.getBlockWithTxs(param);
      return this.getBlockWithTxs;
    }

  }
});