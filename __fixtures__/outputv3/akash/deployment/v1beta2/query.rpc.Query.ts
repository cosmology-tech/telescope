import { DeploymentFilters, DeploymentFiltersSDKType, DeploymentID, DeploymentIDSDKType, Deployment, DeploymentSDKType } from "./deployment";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, GroupIDSDKType } from "./groupid";
import { Group, GroupSDKType } from "./group";
import { Account, AccountSDKType } from "../../escrow/v1beta2/types";
import * as fm from "../../../grpc-gateway";
import { QueryDeploymentsRequest, QueryDeploymentsRequestSDKType, QueryDeploymentsResponse, QueryDeploymentsResponseSDKType, QueryDeploymentRequest, QueryDeploymentRequestSDKType, QueryDeploymentResponse, QueryDeploymentResponseSDKType, QueryGroupRequest, QueryGroupRequestSDKType, QueryGroupResponse, QueryGroupResponseSDKType } from "./query";
export class Query {
  static Deployments(request: QueryDeploymentsRequest, initRequest?: fm.InitReq): Promise<QueryDeploymentsResponse> {
    return fm.fetchReq(`/akash/deployment/v1beta2/deployments/list?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Deployment(request: QueryDeploymentRequest, initRequest?: fm.InitReq): Promise<QueryDeploymentResponse> {
    return fm.fetchReq(`/akash/deployment/v1beta2/deployments/info?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Group(request: QueryGroupRequest, initRequest?: fm.InitReq): Promise<QueryGroupResponse> {
    return fm.fetchReq(`/akash/deployment/v1beta2/groups/info?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}