import { Config, ConfigSDKType } from "./config";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";

/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  Config(request?: DeepPartial<QueryConfigRequest>, metadata?: grpc.Metadata): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.config = this.config.bind(this);
  }

  config(request: DeepPartial<QueryConfigRequest> = {}, metadata?: grpc.Metadata): Promise<QueryConfigResponse> {
    return this.rpc.unary(QueryConfigDesc, QueryConfigRequest.fromPartial(request), metadata);
  }

}