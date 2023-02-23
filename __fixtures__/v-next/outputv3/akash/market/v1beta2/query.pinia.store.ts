import { OrderFilters, OrderFiltersSDKType, OrderID, OrderIDSDKType, Order, OrderSDKType } from "./order";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidFiltersSDKType, BidID, BidIDSDKType, Bid, BidSDKType } from "./bid";
import { LeaseFilters, LeaseFiltersSDKType, LeaseID, LeaseIDSDKType, Lease, LeaseSDKType } from "./lease";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "../../escrow/v1beta2/types";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryOrdersRequest, QueryOrdersRequestSDKType, QueryOrdersResponse, QueryOrdersResponseSDKType, QueryOrderRequest, QueryOrderRequestSDKType, QueryOrderResponse, QueryOrderResponseSDKType, QueryBidsRequest, QueryBidsRequestSDKType, QueryBidsResponse, QueryBidsResponseSDKType, QueryBidRequest, QueryBidRequestSDKType, QueryBidResponse, QueryBidResponseSDKType, QueryLeasesRequest, QueryLeasesRequestSDKType, QueryLeasesResponse, QueryLeasesResponseSDKType, QueryLeaseRequest, QueryLeaseRequestSDKType, QueryLeaseResponse, QueryLeaseResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('akash/market/v1beta2/query.proto', {
  state: () => {
    return {
      orders: ({} as QueryOrdersResponse),
      order: ({} as QueryOrderResponse),
      bids: ({} as QueryBidsResponse),
      bid: ({} as QueryBidResponse),
      leases: ({} as QueryLeasesResponse),
      lease: ({} as QueryLeaseResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchOrders(param : QueryOrdersRequest) {
      this.orders = await this.lcdClient.orders(param);
      return this.orders;
    },

    async fetchOrder(param : QueryOrderRequest) {
      this.order = await this.lcdClient.order(param);
      return this.order;
    },

    async fetchBids(param : QueryBidsRequest) {
      this.bids = await this.lcdClient.bids(param);
      return this.bids;
    },

    async fetchBid(param : QueryBidRequest) {
      this.bid = await this.lcdClient.bid(param);
      return this.bid;
    },

    async fetchLeases(param : QueryLeasesRequest) {
      this.leases = await this.lcdClient.leases(param);
      return this.leases;
    },

    async fetchLease(param : QueryLeaseRequest) {
      this.lease = await this.lcdClient.lease(param);
      return this.lease;
    }

  }
});