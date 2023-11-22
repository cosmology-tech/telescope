import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GroupID, GroupIDSDKType } from "./groupid";
import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateDeployment, MsgCreateDeploymentSDKType, MsgDepositDeployment, MsgDepositDeploymentSDKType, MsgUpdateDeployment, MsgUpdateDeploymentSDKType, MsgCloseDeployment, MsgCloseDeploymentSDKType } from "./deploymentmsg";
import { MsgCloseGroup, MsgCloseGroupSDKType, MsgPauseGroup, MsgPauseGroupSDKType, MsgStartGroup, MsgStartGroupSDKType } from "./groupmsg";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.deployment.v1beta2.MsgCreateDeployment", MsgCreateDeployment], ["/akash.deployment.v1beta2.MsgDepositDeployment", MsgDepositDeployment], ["/akash.deployment.v1beta2.MsgUpdateDeployment", MsgUpdateDeployment], ["/akash.deployment.v1beta2.MsgCloseDeployment", MsgCloseDeployment], ["/akash.deployment.v1beta2.MsgCloseGroup", MsgCloseGroup], ["/akash.deployment.v1beta2.MsgPauseGroup", MsgPauseGroup], ["/akash.deployment.v1beta2.MsgStartGroup", MsgStartGroup]];