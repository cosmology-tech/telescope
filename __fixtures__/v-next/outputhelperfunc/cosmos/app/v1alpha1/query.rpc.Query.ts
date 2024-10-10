import { Config, ConfigSDKType } from "./config";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Config returns the current app config. */
  config = async (request: QueryConfigRequest = {}): Promise<QueryConfigResponse> => {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};