import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, Payment } from "./types";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Accounts queries all accounts */
  async accounts(params: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.scope !== "undefined") {
      options.params.scope = params.scope;
    }

    if (typeof params?.xid !== "undefined") {
      options.params.xid = params.xid;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.state !== "undefined") {
      options.params.state = params.state;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/escrow/v1beta1/types/accounts/list`;
    return await this.request<QueryAccountsResponse>(endpoint, options);
  }

  /* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Payments queries all payments */
  async payments(params: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.scope !== "undefined") {
      options.params.scope = params.scope;
    }

    if (typeof params?.xid !== "undefined") {
      options.params.xid = params.xid;
    }

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }

    if (typeof params?.state !== "undefined") {
      options.params.state = params.state;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/escrow/v1beta1/types/payments/list`;
    return await this.request<QueryPaymentsResponse>(endpoint, options);
  }

}