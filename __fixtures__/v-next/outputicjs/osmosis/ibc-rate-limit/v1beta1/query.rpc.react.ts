import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetParams } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});