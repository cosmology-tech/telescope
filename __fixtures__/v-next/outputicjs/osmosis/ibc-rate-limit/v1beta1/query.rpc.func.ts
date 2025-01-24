import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.ibcratelimit.v1beta1.Query",
  method: "Params",
  clientResolver
});