import { Plan, PlanSDKType } from "./upgrade";
import { TelescopeGeneratedType } from "../../../types";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", MsgSoftwareUpgrade], ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", MsgCancelUpgrade]];