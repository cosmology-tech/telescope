import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Header, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, VersionParams, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../pinia";
import { RequestEcho, RequestEchoSDKType, ResponseEcho, ResponseEchoSDKType, RequestFlush, RequestFlushSDKType, ResponseFlush, ResponseFlushSDKType, RequestInfo, RequestInfoSDKType, ResponseInfo, ResponseInfoSDKType, RequestSetOption, RequestSetOptionSDKType, ResponseSetOption, ResponseSetOptionSDKType, RequestDeliverTx, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType, RequestCheckTx, RequestCheckTxSDKType, ResponseCheckTx, ResponseCheckTxSDKType, RequestQuery, RequestQuerySDKType, ResponseQuery, ResponseQuerySDKType, RequestCommit, RequestCommitSDKType, ResponseCommit, ResponseCommitSDKType, RequestInitChain, RequestInitChainSDKType, ResponseInitChain, ResponseInitChainSDKType, RequestBeginBlock, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockSDKType, RequestListSnapshots, RequestListSnapshotsSDKType, ResponseListSnapshots, ResponseListSnapshotsSDKType, RequestOfferSnapshot, RequestOfferSnapshotSDKType, ResponseOfferSnapshot, ResponseOfferSnapshotSDKType, RequestLoadSnapshotChunk, RequestLoadSnapshotChunkSDKType, ResponseLoadSnapshotChunk, ResponseLoadSnapshotChunkSDKType, RequestApplySnapshotChunk, RequestApplySnapshotChunkSDKType, ResponseApplySnapshotChunk, ResponseApplySnapshotChunkSDKType } from "./types";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('tendermint/abci/types.proto', {
  state: () => {
    return {
      echo: ({} as ResponseEcho),
      flush: ({} as ResponseFlush),
      info: ({} as ResponseInfo),
      setOption: ({} as ResponseSetOption),
      deliverTx: ({} as ResponseDeliverTx),
      checkTx: ({} as ResponseCheckTx),
      query: ({} as ResponseQuery),
      commit: ({} as ResponseCommit),
      initChain: ({} as ResponseInitChain),
      beginBlock: ({} as ResponseBeginBlock),
      endBlock: ({} as ResponseEndBlock),
      listSnapshots: ({} as ResponseListSnapshots),
      offerSnapshot: ({} as ResponseOfferSnapshot),
      loadSnapshotChunk: ({} as ResponseLoadSnapshotChunk),
      applySnapshotChunk: ({} as ResponseApplySnapshotChunk)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchEcho(param : RequestEcho) {
      this.echo = await this.lcdClient.echo(param);
      return this.echo;
    },

    async fetchFlush(param : RequestFlush) {
      this.flush = await this.lcdClient.flush(param);
      return this.flush;
    },

    async fetchInfo(param : RequestInfo) {
      this.info = await this.lcdClient.info(param);
      return this.info;
    },

    async fetchSetOption(param : RequestSetOption) {
      this.setOption = await this.lcdClient.setOption(param);
      return this.setOption;
    },

    async fetchDeliverTx(param : RequestDeliverTx) {
      this.deliverTx = await this.lcdClient.deliverTx(param);
      return this.deliverTx;
    },

    async fetchCheckTx(param : RequestCheckTx) {
      this.checkTx = await this.lcdClient.checkTx(param);
      return this.checkTx;
    },

    async fetchQuery(param : RequestQuery) {
      this.query = await this.lcdClient.query(param);
      return this.query;
    },

    async fetchCommit(param : RequestCommit) {
      this.commit = await this.lcdClient.commit(param);
      return this.commit;
    },

    async fetchInitChain(param : RequestInitChain) {
      this.initChain = await this.lcdClient.initChain(param);
      return this.initChain;
    },

    async fetchBeginBlock(param : RequestBeginBlock) {
      this.beginBlock = await this.lcdClient.beginBlock(param);
      return this.beginBlock;
    },

    async fetchEndBlock(param : RequestEndBlock) {
      this.endBlock = await this.lcdClient.endBlock(param);
      return this.endBlock;
    },

    async fetchListSnapshots(param : RequestListSnapshots) {
      this.listSnapshots = await this.lcdClient.listSnapshots(param);
      return this.listSnapshots;
    },

    async fetchOfferSnapshot(param : RequestOfferSnapshot) {
      this.offerSnapshot = await this.lcdClient.offerSnapshot(param);
      return this.offerSnapshot;
    },

    async fetchLoadSnapshotChunk(param : RequestLoadSnapshotChunk) {
      this.loadSnapshotChunk = await this.lcdClient.loadSnapshotChunk(param);
      return this.loadSnapshotChunk;
    },

    async fetchApplySnapshotChunk(param : RequestApplySnapshotChunk) {
      this.applySnapshotChunk = await this.lcdClient.applySnapshotChunk(param);
      return this.applySnapshotChunk;
    }

  }
});