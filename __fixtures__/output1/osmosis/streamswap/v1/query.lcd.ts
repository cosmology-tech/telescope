import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Sale, SaleSDKType, UserPosition, UserPositionSDKType } from "./state";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QuerySales, QuerySalesSDKType, QuerySalesResponse, QuerySalesResponseSDKType, QuerySale, QuerySaleSDKType, QuerySaleResponse, QuerySaleResponseSDKType, QueryUserPosition, QueryUserPositionSDKType, QueryUserPositionResponse, QueryUserPositionResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.sales = this.sales.bind(this);
    this.sale = this.sale.bind(this);
    this.userPosition = this.userPosition.bind(this);
  }

  /* Returns list of Sales ordered by the creation time */
  async sales(params: QuerySales = {
    pagination: undefined
  }): Promise<QuerySalesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/streamswap/v1/sales`;
    return await this.req.get<QuerySalesResponseSDKType>(endpoint, options);
  }

  /* Returns the specific Sale object */
  async sale(params: QuerySale): Promise<QuerySaleResponseSDKType> {
    const endpoint = `cosmos/streamswap/v1/sales/${params.saleId}`;
    return await this.req.get<QuerySaleResponseSDKType>(endpoint);
  }

  /* UserPosition */
  async userPosition(params: QueryUserPosition): Promise<QueryUserPositionResponseSDKType> {
    const endpoint = `cosmos/streamswap/v1/sales/${params.saleId}/${params.user}`;
    return await this.req.get<QueryUserPositionResponseSDKType>(endpoint);
  }

}