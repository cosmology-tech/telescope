import { Plan, PlanSDKType } from "./upgrade";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeSDKType, MsgCancelUpgrade, MsgCancelUpgradeSDKType } from "./tx";
export interface MsgSoftwareUpgradeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgrade";
  value: {
    authority: string;
    plan: {
      name: string;
      time: string;
      height: string;
      info: string;
      upgraded_client_state: {
        type_url: string;
        value: Uint8Array;
      };
    };
  };
}
export interface MsgCancelUpgradeAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCancelUpgrade";
  value: {
    authority: string;
  };
}
export const AminoConverter = {
  "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
    aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
    toAmino: ({
      authority,
      plan
    }: MsgSoftwareUpgrade): MsgSoftwareUpgradeAminoType["value"] => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: plan.height.toString(),
          info: plan.info,
          upgraded_client_state: {
            type_url: plan.upgradedClientState.typeUrl,
            value: plan.upgradedClientState.value
          }
        }
      };
    },
    fromAmino: ({
      authority,
      plan
    }: MsgSoftwareUpgradeAminoType["value"]): MsgSoftwareUpgrade => {
      return {
        authority,
        plan: {
          name: plan.name,
          time: plan.time,
          height: Long.fromString(plan.height),
          info: plan.info,
          upgradedClientState: {
            typeUrl: plan.upgraded_client_state.type_url,
            value: plan.upgraded_client_state.value
          }
        }
      };
    }
  },
  "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
    aminoType: "cosmos-sdk/MsgCancelUpgrade",
    toAmino: ({
      authority
    }: MsgCancelUpgrade): MsgCancelUpgradeAminoType["value"] => {
      return {
        authority
      };
    },
    fromAmino: ({
      authority
    }: MsgCancelUpgradeAminoType["value"]): MsgCancelUpgrade => {
      return {
        authority
      };
    }
  }
};