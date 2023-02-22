import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
  AppVersion(request: DeepPartial<QueryAppVersionRequest>, metadata?: grpc.Metadata): Promise<QueryAppVersionResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.appVersion = this.appVersion.bind(this);
  }

  appVersion(request: DeepPartial<QueryAppVersionRequest>, metadata?: grpc.Metadata): Promise<QueryAppVersionResponse> {
    return this.rpc.unary(QueryAppVersionDesc, QueryAppVersionRequest.fromPartial(request), metadata);
  }

}