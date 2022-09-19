import { Deployment, DeploymentSDKType } from "./deployment";
import { Group, GroupSDKType } from "./group";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact } from "@osmonauts/helpers";
export const protobufPackage = "akash.deployment.v1beta1";

/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
  deployment: Deployment | undefined;
  groups: Group[];
}

/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeploymentSDKType {
  deployment: DeploymentSDKType | undefined;
  groups: GroupSDKType[];
}

/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
  deployments: GenesisDeployment[];
  params: Params | undefined;
}

/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
  deployments: GenesisDeploymentSDKType[];
  params: ParamsSDKType | undefined;
}

function createBaseGenesisDeployment(): GenesisDeployment {
  return {
    deployment: undefined,
    groups: []
  };
}

export const GenesisDeployment = {
  encode(message: GenesisDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDeployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDeployment();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;

        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisDeployment {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisDeployment): unknown {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toJSON(message.deployment) : undefined);

    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<Partial<GenesisDeployment>, I>>(object: I): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisDeploymentSDKType): GenesisDeployment {
    return {
      deployment: isSet(object.deployment) ? Deployment.fromSDK(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisDeployment): GenesisDeploymentSDKType {
    const obj: any = {};
    message.deployment !== undefined && (obj.deployment = message.deployment ? Deployment.toSDK(message.deployment) : undefined);

    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }

    return obj;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    deployments: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deployments) {
      GenesisDeployment.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deployments.push(GenesisDeployment.decode(reader, reader.uint32()));
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => GenesisDeployment.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toJSON(e) : undefined);
    } else {
      obj.deployments = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<Partial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => GenesisDeployment.fromSDK(e)) : [],
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toSDK(e) : undefined);
    } else {
      obj.deployments = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }

};