import { Attribute, AttributeSDKType } from "../../base/v1beta1/attribute";
import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateProvider, MsgCreateProviderSDKType, MsgUpdateProvider, MsgUpdateProviderSDKType, MsgDeleteProvider, MsgDeleteProviderSDKType } from "./provider";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/akash.provider.v1beta1.MsgCreateProvider", MsgCreateProvider], ["/akash.provider.v1beta1.MsgUpdateProvider", MsgUpdateProvider], ["/akash.provider.v1beta1.MsgDeleteProvider", MsgDeleteProvider]];