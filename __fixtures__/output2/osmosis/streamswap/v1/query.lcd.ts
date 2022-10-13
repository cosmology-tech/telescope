import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QuerySales, QuerySalesResponse, QuerySale, QuerySaleResponse, QueryUserPosition, QueryUserPositionResponse } from "./query";
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
  }): Promise<QuerySalesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/streamswap/v1/sales`;
    return await this.req.get<QuerySalesResponse>(endpoint, options);
  }
  /* Returns the specific Sale object */


  async sale(params: QuerySale): Promise<QuerySaleResponse> {
    const endpoint = `cosmos/streamswap/v1/sales/${params.saleId}`;
    return await this.req.get<QuerySaleResponse>(endpoint);
  }
  /* UserPosition */


  async userPosition(params: QueryUserPosition): Promise<QueryUserPositionResponse> {
    const endpoint = `cosmos/streamswap/v1/sales/${params.saleId}/${params.user}`;
    return await this.req.get<QueryUserPositionResponse>(endpoint);
  }

}