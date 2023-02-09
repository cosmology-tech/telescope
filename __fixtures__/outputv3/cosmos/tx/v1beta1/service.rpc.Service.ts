import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import * as fm from "../../../grpc-gateway";
import { SimulateRequest, SimulateRequestSDKType, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxRequestSDKType, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxRequestSDKType, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventRequestSDKType, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsRequestSDKType, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";
export class Service {
  static Simulate(request: SimulateRequest, initRequest?: fm.InitReq): Promise<SimulateResponse> {
    return fm.fetchReq(`cosmos.tx.v1beta1.Simulate?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GetTx(request: GetTxRequest, initRequest?: fm.InitReq): Promise<GetTxResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${request["hash"]}?${fm.renderURLSearchParams({ ...request
    }, ["hash"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static BroadcastTx(request: BroadcastTxRequest, initRequest?: fm.InitReq): Promise<BroadcastTxResponse> {
    return fm.fetchReq(`cosmos.tx.v1beta1.BroadcastTx?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GetTxsEvent(request: GetTxsEventRequest, initRequest?: fm.InitReq): Promise<GetTxsEventResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GetBlockWithTxs(request: GetBlockWithTxsRequest, initRequest?: fm.InitReq): Promise<GetBlockWithTxsResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${request["height"]}?${fm.renderURLSearchParams({ ...request
    }, ["height"])}`, { ...initRequest,
      method: "GET"
    });
  }

}