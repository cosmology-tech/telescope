import { _m0 } from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
import { Api } from "../protobuf/api";
import { Type, Enum } from "../protobuf/type";
import { Documentation } from "./documentation";
import { Backend } from "./backend";
import { Http } from "./http";
import { Quota } from "./quota";
import { Authentication } from "./auth";
import { Context } from "./context";
import { Usage } from "./usage";
import { Endpoint } from "./endpoint";
import { Control } from "./control";
import { LogDescriptor } from "./log";
import { MetricDescriptor } from "./metric";
import { MonitoredResourceDescriptor } from "./monitored_resource";
import { Billing } from "./billing";
import { Logging } from "./logging";
import { Monitoring } from "./monitoring";
import { SystemParameters } from "./system_parameter";
import { SourceInfo } from "./source_info";
import { UInt32Value } from "../protobuf/wrappers";
export interface Service {
  name: string;
  title: string;
  producerProjectId: string;
  id: string;
  apis: Api[];
  types: Type[];
  enums: Enum[];
  documentation: Documentation;
  backend: Backend;
  http: Http;
  quota: Quota;
  authentication: Authentication;
  context: Context;
  usage: Usage;
  endpoints: Endpoint[];
  control: Control;
  logs: LogDescriptor[];
  metrics: MetricDescriptor[];
  monitoredResources: MonitoredResourceDescriptor[];
  billing: Billing;
  logging: Logging;
  monitoring: Monitoring;
  systemParameters: SystemParameters;
  sourceInfo: SourceInfo;
  configVersion: UInt32Value;
}

function createBaseService(): Service {
  return {
    name: "",
    title: "",
    producerProjectId: "",
    id: "",
    apis: [],
    types: [],
    enums: [],
    documentation: undefined,
    backend: undefined,
    http: undefined,
    quota: undefined,
    authentication: undefined,
    context: undefined,
    usage: undefined,
    endpoints: [],
    control: undefined,
    logs: [],
    metrics: [],
    monitoredResources: [],
    billing: undefined,
    logging: undefined,
    monitoring: undefined,
    systemParameters: undefined,
    sourceInfo: undefined,
    configVersion: undefined
  };
}

export const Service = {
  encode(message: Service, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }

    if (message.producerProjectId !== "") {
      writer.uint32(178).string(message.producerProjectId);
    }

    if (message.id !== "") {
      writer.uint32(266).string(message.id);
    }

    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.types) {
      Type.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.enums) {
      Enum.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }

    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(66).fork()).ldelim();
    }

    if (message.http !== undefined) {
      Http.encode(message.http, writer.uint32(74).fork()).ldelim();
    }

    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }

    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }

    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(98).fork()).ldelim();
    }

    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }

    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
    }

    if (message.control !== undefined) {
      Control.encode(message.control, writer.uint32(170).fork()).ldelim();
    }

    for (const v of message.logs) {
      LogDescriptor.encode(v!, writer.uint32(186).fork()).ldelim();
    }

    for (const v of message.metrics) {
      MetricDescriptor.encode(v!, writer.uint32(194).fork()).ldelim();
    }

    for (const v of message.monitoredResources) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
    }

    if (message.billing !== undefined) {
      Billing.encode(message.billing, writer.uint32(210).fork()).ldelim();
    }

    if (message.logging !== undefined) {
      Logging.encode(message.logging, writer.uint32(218).fork()).ldelim();
    }

    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }

    if (message.systemParameters !== undefined) {
      SystemParameters.encode(message.systemParameters, writer.uint32(234).fork()).ldelim();
    }

    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(298).fork()).ldelim();
    }

    if (message.configVersion !== undefined) {
      UInt32Value.encode(message.configVersion, writer.uint32(162).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.title = reader.string();
          break;

        case 22:
          message.producerProjectId = reader.string();
          break;

        case 33:
          message.id = reader.string();
          break;

        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;

        case 4:
          message.types.push(Type.decode(reader, reader.uint32()));
          break;

        case 5:
          message.enums.push(Enum.decode(reader, reader.uint32()));
          break;

        case 6:
          message.documentation = Documentation.decode(reader, reader.uint32());
          break;

        case 8:
          message.backend = Backend.decode(reader, reader.uint32());
          break;

        case 9:
          message.http = Http.decode(reader, reader.uint32());
          break;

        case 10:
          message.quota = Quota.decode(reader, reader.uint32());
          break;

        case 11:
          message.authentication = Authentication.decode(reader, reader.uint32());
          break;

        case 12:
          message.context = Context.decode(reader, reader.uint32());
          break;

        case 15:
          message.usage = Usage.decode(reader, reader.uint32());
          break;

        case 18:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;

        case 21:
          message.control = Control.decode(reader, reader.uint32());
          break;

        case 23:
          message.logs.push(LogDescriptor.decode(reader, reader.uint32()));
          break;

        case 24:
          message.metrics.push(MetricDescriptor.decode(reader, reader.uint32()));
          break;

        case 25:
          message.monitoredResources.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;

        case 26:
          message.billing = Billing.decode(reader, reader.uint32());
          break;

        case 27:
          message.logging = Logging.decode(reader, reader.uint32());
          break;

        case 28:
          message.monitoring = Monitoring.decode(reader, reader.uint32());
          break;

        case 29:
          message.systemParameters = SystemParameters.decode(reader, reader.uint32());
          break;

        case 37:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;

        case 20:
          message.configVersion = UInt32Value.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Service {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      producerProjectId: isSet(object.producerProjectId) ? String(object.producerProjectId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromJSON(e)) : [],
      types: Array.isArray(object?.types) ? object.types.map((e: any) => Type.fromJSON(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromJSON(e)) : [],
      documentation: isSet(object.documentation) ? Documentation.fromJSON(object.documentation) : undefined,
      backend: isSet(object.backend) ? Backend.fromJSON(object.backend) : undefined,
      http: isSet(object.http) ? Http.fromJSON(object.http) : undefined,
      quota: isSet(object.quota) ? Quota.fromJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromJSON(object.authentication) : undefined,
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
      usage: isSet(object.usage) ? Usage.fromJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      control: isSet(object.control) ? Control.fromJSON(object.control) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogDescriptor.fromJSON(e)) : [],
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => MetricDescriptor.fromJSON(e)) : [],
      monitoredResources: Array.isArray(object?.monitoredResources) ? object.monitoredResources.map((e: any) => MonitoredResourceDescriptor.fromJSON(e)) : [],
      billing: isSet(object.billing) ? Billing.fromJSON(object.billing) : undefined,
      logging: isSet(object.logging) ? Logging.fromJSON(object.logging) : undefined,
      monitoring: isSet(object.monitoring) ? Monitoring.fromJSON(object.monitoring) : undefined,
      systemParameters: isSet(object.systemParameters) ? SystemParameters.fromJSON(object.systemParameters) : undefined,
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
      configVersion: isSet(object.configVersion) ? UInt32Value.fromJSON(object.configVersion) : undefined
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    message.id !== undefined && (obj.id = message.id);

    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toJSON(e) : undefined);
    } else {
      obj.apis = [];
    }

    if (message.types) {
      obj.types = message.types.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.types = [];
    }

    if (message.enums) {
      obj.enums = message.enums.map(e => e ? Enum.toJSON(e) : undefined);
    } else {
      obj.enums = [];
    }

    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toJSON(message.documentation) : undefined);
    message.backend !== undefined && (obj.backend = message.backend ? Backend.toJSON(message.backend) : undefined);
    message.http !== undefined && (obj.http = message.http ? Http.toJSON(message.http) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toJSON(message.authentication) : undefined);
    message.context !== undefined && (obj.context = message.context ? Context.toJSON(message.context) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toJSON(message.usage) : undefined);

    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }

    message.control !== undefined && (obj.control = message.control ? Control.toJSON(message.control) : undefined);

    if (message.logs) {
      obj.logs = message.logs.map(e => e ? LogDescriptor.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }

    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricDescriptor.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }

    if (message.monitoredResources) {
      obj.monitoredResources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toJSON(e) : undefined);
    } else {
      obj.monitoredResources = [];
    }

    message.billing !== undefined && (obj.billing = message.billing ? Billing.toJSON(message.billing) : undefined);
    message.logging !== undefined && (obj.logging = message.logging ? Logging.toJSON(message.logging) : undefined);
    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toJSON(message.monitoring) : undefined);
    message.systemParameters !== undefined && (obj.systemParameters = message.systemParameters ? SystemParameters.toJSON(message.systemParameters) : undefined);
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.configVersion !== undefined && (obj.configVersion = message.configVersion ? UInt32Value.toJSON(message.configVersion) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.producerProjectId = object.producerProjectId ?? "";
    message.id = object.id ?? "";
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    message.types = object.types?.map(e => Type.fromPartial(e)) || [];
    message.enums = object.enums?.map(e => Enum.fromPartial(e)) || [];
    message.documentation = object.documentation !== undefined && object.documentation !== null ? Documentation.fromPartial(object.documentation) : undefined;
    message.backend = object.backend !== undefined && object.backend !== null ? Backend.fromPartial(object.backend) : undefined;
    message.http = object.http !== undefined && object.http !== null ? Http.fromPartial(object.http) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.authentication = object.authentication !== undefined && object.authentication !== null ? Authentication.fromPartial(object.authentication) : undefined;
    message.context = object.context !== undefined && object.context !== null ? Context.fromPartial(object.context) : undefined;
    message.usage = object.usage !== undefined && object.usage !== null ? Usage.fromPartial(object.usage) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.control = object.control !== undefined && object.control !== null ? Control.fromPartial(object.control) : undefined;
    message.logs = object.logs?.map(e => LogDescriptor.fromPartial(e)) || [];
    message.metrics = object.metrics?.map(e => MetricDescriptor.fromPartial(e)) || [];
    message.monitoredResources = object.monitoredResources?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    message.billing = object.billing !== undefined && object.billing !== null ? Billing.fromPartial(object.billing) : undefined;
    message.logging = object.logging !== undefined && object.logging !== null ? Logging.fromPartial(object.logging) : undefined;
    message.monitoring = object.monitoring !== undefined && object.monitoring !== null ? Monitoring.fromPartial(object.monitoring) : undefined;
    message.systemParameters = object.systemParameters !== undefined && object.systemParameters !== null ? SystemParameters.fromPartial(object.systemParameters) : undefined;
    message.sourceInfo = object.sourceInfo !== undefined && object.sourceInfo !== null ? SourceInfo.fromPartial(object.sourceInfo) : undefined;
    message.configVersion = object.configVersion !== undefined && object.configVersion !== null ? UInt32Value.fromPartial(object.configVersion) : undefined;
    return message;
  }

};