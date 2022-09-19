import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  devFeeInfos(request: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponseSDKType>;
  /*DevFeeInfos retrieves all registered contracts for fee distribution*/

  devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponseSDKType>;
  /*DevFeeInfo retrieves a registered contract for fee distribution*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params retrieves the fees module params*/

  devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponseSDKType>;
  /*DevFeeInfosPerDeployer retrieves all contracts that a deployer has
  registered for fee distribution*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.devFeeInfos = this.devFeeInfos.bind(this);
    this.devFeeInfo = this.devFeeInfo.bind(this);
    this.params = this.params.bind(this);
    this.devFeeInfosPerDeployer = this.devFeeInfosPerDeployer.bind(this);
  }

  devFeeInfos(request: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponseSDKType> {
    const data = QueryDevFeeInfosRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfos", data);
    return promise.then(data => QueryDevFeeInfosResponse.decode(new _m0.Reader(data)));
  }

  devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponseSDKType> {
    const data = QueryDevFeeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfo", data);
    return promise.then(data => QueryDevFeeInfoResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponseSDKType> {
    const data = QueryDevFeeInfosPerDeployerRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfosPerDeployer", data);
    return promise.then(data => QueryDevFeeInfosPerDeployerResponse.decode(new _m0.Reader(data)));
  }

}