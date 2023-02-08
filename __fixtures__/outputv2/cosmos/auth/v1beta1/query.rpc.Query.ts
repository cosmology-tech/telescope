import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType, BaseAccount, BaseAccountSDKType, ModuleAccount, ModuleAccountSDKType } from "./auth";
import * as fm from "../../../grpc-gateway";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";
export class Query {
  static Accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<QueryAccountsResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<QueryAccountResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/accounts/${request["address"]}?${fm.renderURLSearchParams({ ...request
    }, ["address"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ModuleAccounts(request: QueryModuleAccountsRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountsResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Bech32Prefix(request: Bech32PrefixRequest, initRequest?: fm.InitReq): Promise<Bech32PrefixResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/bech32?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AddressBytesToString(request: AddressBytesToStringRequest, initRequest?: fm.InitReq): Promise<AddressBytesToStringResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_bytes"]}?${fm.renderURLSearchParams({ ...request
    }, ["address_bytes"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AddressStringToBytes(request: AddressStringToBytesRequest, initRequest?: fm.InitReq): Promise<AddressStringToBytesResponse> {
    return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_string"]}?${fm.renderURLSearchParams({ ...request
    }, ["address_string"])}`, { ...initRequest,
      method: "GET"
    });
  }

}