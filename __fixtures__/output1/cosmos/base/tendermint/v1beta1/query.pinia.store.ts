import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/base/tendermint/v1beta1/query.proto', {
  state: () => {
    return {
      getNodeInfo: ({} as GetNodeInfoResponse),
      getSyncing: ({} as GetSyncingResponse),
      getLatestBlock: ({} as GetLatestBlockResponse),
      getBlockByHeight: ({} as GetBlockByHeightResponse),
      getLatestValidatorSet: ({} as GetLatestValidatorSetResponse),
      getValidatorSetByHeight: ({} as GetValidatorSetByHeightResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchGetNodeInfo(param : GetNodeInfoRequest) {
      this.getNodeInfo = await this.lcdClient.getNodeInfo(param);
      return this.getNodeInfo;
    },

    async fetchGetSyncing(param : GetSyncingRequest) {
      this.getSyncing = await this.lcdClient.getSyncing(param);
      return this.getSyncing;
    },

    async fetchGetLatestBlock(param : GetLatestBlockRequest) {
      this.getLatestBlock = await this.lcdClient.getLatestBlock(param);
      return this.getLatestBlock;
    },

    async fetchGetBlockByHeight(param : GetBlockByHeightRequest) {
      this.getBlockByHeight = await this.lcdClient.getBlockByHeight(param);
      return this.getBlockByHeight;
    },

    async fetchGetLatestValidatorSet(param : GetLatestValidatorSetRequest) {
      this.getLatestValidatorSet = await this.lcdClient.getLatestValidatorSet(param);
      return this.getLatestValidatorSet;
    },

    async fetchGetValidatorSetByHeight(param : GetValidatorSetByHeightRequest) {
      this.getValidatorSetByHeight = await this.lcdClient.getValidatorSetByHeight(param);
      return this.getValidatorSetByHeight;
    }

  }
});