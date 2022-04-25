import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { ProviderInfo, MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider, Provider, MsgCreateProviderResponse, MsgUpdateProviderResponse, MsgDeleteProviderResponse, Msg, Rpc } from "./provider";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";
import { Registry, GeneratedType } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.provider.v1beta1.MsgCreateProvider", MsgCreateProvider], ["/akash.provider.v1beta1.MsgUpdateProvider", MsgUpdateProvider], ["/akash.provider.v1beta1.MsgDeleteProvider", MsgDeleteProvider]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};