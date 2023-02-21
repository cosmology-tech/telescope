import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType } from "./query";
export interface Query {
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.spotPrice = this.spotPrice.bind(this);
  }

  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse> {
    return this.rpc.unary(QuerySpotPriceDesc, QuerySpotPriceRequest.fromPartial(request), metadata);
  }

}