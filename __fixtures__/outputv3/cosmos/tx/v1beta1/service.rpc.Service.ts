import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import * as fm from "../../../grpc-gateway";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";
export class Service {
  //Simulate simulates executing a transaction for estimating gas usage.
  static Simulate(request: SimulateRequest, initRequest?: fm.InitReq): Promise<SimulateResponse> {
    return fm.fetchReq(`cosmos.tx.v1beta1.Simulate?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //GetTx fetches a tx by hash.
  static GetTx(request: GetTxRequest, initRequest?: fm.InitReq): Promise<GetTxResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${request["hash"]}?${fm.renderURLSearchParams({ ...request
    }, ["hash"])}`, { ...initRequest,
      method: "GET"
    });
  }

  //BroadcastTx broadcast transaction.
  static BroadcastTx(request: BroadcastTxRequest, initRequest?: fm.InitReq): Promise<BroadcastTxResponse> {
    return fm.fetchReq(`cosmos.tx.v1beta1.BroadcastTx?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //GetTxsEvent fetches txs by event.
  static GetTxsEvent(request: GetTxsEventRequest, initRequest?: fm.InitReq): Promise<GetTxsEventResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //GetBlockWithTxs fetches a block with decoded txs.

 Since: cosmos-sdk 0.45.2
  static GetBlockWithTxs(request: GetBlockWithTxsRequest, initRequest?: fm.InitReq): Promise<GetBlockWithTxsResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${request["height"]}?${fm.renderURLSearchParams({ ...request
    }, ["height"])}`, { ...initRequest,
      method: "GET"
    });
  }

}