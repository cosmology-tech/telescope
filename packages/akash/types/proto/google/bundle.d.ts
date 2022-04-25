import * as _874 from "./api/auth";
import * as _875 from "./api/backend";
import * as _876 from "./api/billing";
import * as _878 from "./api/config_change";
import * as _879 from "./api/consumer";
import * as _880 from "./api/context";
import * as _881 from "./api/control";
import * as _882 from "./api/distribution";
import * as _883 from "./api/documentation";
import * as _884 from "./api/endpoint";
import * as _885 from "./api/error_reason";
import * as _886 from "./api/field_behavior";
import * as _887 from "./api/http";
import * as _888 from "./api/httpbody";
import * as _889 from "./api/label";
import * as _890 from "./api/launch_stage";
import * as _891 from "./api/log";
import * as _892 from "./api/logging";
import * as _893 from "./api/metric";
import * as _894 from "./api/monitored_resource";
import * as _895 from "./api/monitoring";
import * as _896 from "./api/quota";
import * as _897 from "./api/resource";
import * as _898 from "./api/routing";
import * as _899 from "./api/service";
import * as _900 from "./api/source_info";
import * as _901 from "./api/system_parameter";
import * as _902 from "./api/usage";
import * as _903 from "./api/visibility";
import * as _904 from "./logging/type/http_request";
import * as _905 from "./logging/type/log_severity";
import * as _906 from "./logging/v2/log_entry";
import * as _907 from "./logging/v2/logging_config";
import * as _908 from "./logging/v2/logging_metrics";
import * as _909 from "./logging/v2/logging";
import * as _910 from "./longrunning/operations";
import * as _911 from "./protobuf/any";
import * as _912 from "./protobuf/api";
import * as _913 from "./protobuf/descriptor";
import * as _914 from "./protobuf/duration";
import * as _915 from "./protobuf/empty";
import * as _916 from "./protobuf/field_mask";
import * as _917 from "./protobuf/source_context";
import * as _918 from "./protobuf/struct";
import * as _919 from "./protobuf/timestamp";
import * as _920 from "./protobuf/type";
import * as _921 from "./protobuf/wrappers";
import * as _922 from "./rpc/code";
import * as _923 from "./rpc/error_details";
import * as _924 from "./rpc/status";
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _903.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _903.Visibility;
            fromJSON(object: any): _903.Visibility;
            toJSON(message: _903.Visibility): unknown;
            fromPartial<I extends unknown>(object: I): _903.Visibility;
        };
        VisibilityRule: {
            encode(message: _903.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _903.VisibilityRule;
            fromJSON(object: any): _903.VisibilityRule;
            toJSON(message: _903.VisibilityRule): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _903.VisibilityRule;
        };
        Usage: {
            encode(message: _902.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _902.Usage;
            fromJSON(object: any): _902.Usage;
            toJSON(message: _902.Usage): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _902.Usage;
        };
        UsageRule: {
            encode(message: _902.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _902.UsageRule;
            fromJSON(object: any): _902.UsageRule;
            toJSON(message: _902.UsageRule): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _902.UsageRule;
        };
        SystemParameters: {
            encode(message: _901.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _901.SystemParameters;
            fromJSON(object: any): _901.SystemParameters;
            toJSON(message: _901.SystemParameters): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _901.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _901.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _901.SystemParameterRule;
            fromJSON(object: any): _901.SystemParameterRule;
            toJSON(message: _901.SystemParameterRule): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _901.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _901.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _901.SystemParameter;
            fromJSON(object: any): _901.SystemParameter;
            toJSON(message: _901.SystemParameter): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _901.SystemParameter;
        };
        SourceInfo: {
            encode(message: _900.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _900.SourceInfo;
            fromJSON(object: any): _900.SourceInfo;
            toJSON(message: _900.SourceInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _900.SourceInfo;
        };
        Service: {
            encode(message: _899.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _899.Service;
            fromJSON(object: any): _899.Service;
            toJSON(message: _899.Service): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _899.Service;
        };
        RoutingRule: {
            encode(message: _898.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _898.RoutingRule;
            fromJSON(object: any): _898.RoutingRule;
            toJSON(message: _898.RoutingRule): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _898.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _898.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _898.RoutingParameter;
            fromJSON(object: any): _898.RoutingParameter;
            toJSON(message: _898.RoutingParameter): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _898.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _897.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _897.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _897.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _897.ResourceDescriptor_Style): string;
        ResourceDescriptor: {
            encode(message: _897.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _897.ResourceDescriptor;
            fromJSON(object: any): _897.ResourceDescriptor;
            toJSON(message: _897.ResourceDescriptor): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _897.ResourceDescriptor;
        };
        ResourceDescriptor_History: typeof _897.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _897.ResourceDescriptor_Style;
        ResourceReference: {
            encode(message: _897.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _897.ResourceReference;
            fromJSON(object: any): _897.ResourceReference;
            toJSON(message: _897.ResourceReference): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _897.ResourceReference;
        };
        Quota: {
            encode(message: _896.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _896.Quota;
            fromJSON(object: any): _896.Quota;
            toJSON(message: _896.Quota): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _896.Quota;
        };
        MetricRule: {
            encode(message: _896.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _896.MetricRule;
            fromJSON(object: any): _896.MetricRule;
            toJSON(message: _896.MetricRule): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _896.MetricRule;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _896.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _896.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _896.MetricRule_MetricCostsEntry;
            toJSON(message: _896.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _896.MetricRule_MetricCostsEntry;
        };
        QuotaLimit: {
            encode(message: _896.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _896.QuotaLimit;
            fromJSON(object: any): _896.QuotaLimit;
            toJSON(message: _896.QuotaLimit): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _896.QuotaLimit;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _896.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _896.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _896.QuotaLimit_ValuesEntry;
            toJSON(message: _896.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _896.QuotaLimit_ValuesEntry;
        };
        Monitoring: {
            encode(message: _895.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _895.Monitoring;
            fromJSON(object: any): _895.Monitoring;
            toJSON(message: _895.Monitoring): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _895.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _895.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _895.Monitoring_MonitoringDestination;
            fromJSON(object: any): _895.Monitoring_MonitoringDestination;
            toJSON(message: _895.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _895.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _894.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.MonitoredResourceDescriptor;
            fromJSON(object: any): _894.MonitoredResourceDescriptor;
            toJSON(message: _894.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _894.MonitoredResourceDescriptor;
        };
        MonitoredResource: {
            encode(message: _894.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.MonitoredResource;
            fromJSON(object: any): _894.MonitoredResource;
            toJSON(message: _894.MonitoredResource): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _894.MonitoredResource;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _894.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _894.MonitoredResource_LabelsEntry;
            toJSON(message: _894.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _894.MonitoredResource_LabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _894.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.MonitoredResourceMetadata;
            fromJSON(object: any): _894.MonitoredResourceMetadata;
            toJSON(message: _894.MonitoredResourceMetadata): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _894.MonitoredResourceMetadata;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _894.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _894.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _894.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _894.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _894.MonitoredResourceMetadata_UserLabelsEntry;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _893.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _893.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _893.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _893.MetricDescriptor_ValueType): string;
        MetricDescriptor: {
            encode(message: _893.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _893.MetricDescriptor;
            fromJSON(object: any): _893.MetricDescriptor;
            toJSON(message: _893.MetricDescriptor): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _893.MetricDescriptor;
        };
        MetricDescriptor_MetricKind: typeof _893.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _893.MetricDescriptor_ValueType;
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _893.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _893.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _893.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _893.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _893.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric: {
            encode(message: _893.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _893.Metric;
            fromJSON(object: any): _893.Metric;
            toJSON(message: _893.Metric): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _893.Metric;
        };
        Metric_LabelsEntry: {
            encode(message: _893.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _893.Metric_LabelsEntry;
            fromJSON(object: any): _893.Metric_LabelsEntry;
            toJSON(message: _893.Metric_LabelsEntry): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _893.Metric_LabelsEntry;
        };
        Logging: {
            encode(message: _892.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _892.Logging;
            fromJSON(object: any): _892.Logging;
            toJSON(message: _892.Logging): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _892.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _892.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _892.Logging_LoggingDestination;
            fromJSON(object: any): _892.Logging_LoggingDestination;
            toJSON(message: _892.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _892.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _891.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _891.LogDescriptor;
            fromJSON(object: any): _891.LogDescriptor;
            toJSON(message: _891.LogDescriptor): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _891.LogDescriptor;
        };
        launchStageFromJSON(object: any): _890.LaunchStage;
        launchStageToJSON(object: _890.LaunchStage): string;
        LaunchStage: typeof _890.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _889.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _889.LabelDescriptor_ValueType): string;
        LabelDescriptor: {
            encode(message: _889.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _889.LabelDescriptor;
            fromJSON(object: any): _889.LabelDescriptor;
            toJSON(message: _889.LabelDescriptor): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _889.LabelDescriptor;
        };
        LabelDescriptor_ValueType: typeof _889.LabelDescriptor_ValueType;
        HttpBody: {
            encode(message: _888.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _888.HttpBody;
            fromJSON(object: any): _888.HttpBody;
            toJSON(message: _888.HttpBody): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _888.HttpBody;
        };
        Http: {
            encode(message: _887.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _887.Http;
            fromJSON(object: any): _887.Http;
            toJSON(message: _887.Http): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _887.Http;
        };
        HttpRule: {
            encode(message: _887.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _887.HttpRule;
            fromJSON(object: any): _887.HttpRule;
            toJSON(message: _887.HttpRule): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _887.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _887.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _887.CustomHttpPattern;
            fromJSON(object: any): _887.CustomHttpPattern;
            toJSON(message: _887.CustomHttpPattern): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _887.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _886.FieldBehavior;
        fieldBehaviorToJSON(object: _886.FieldBehavior): string;
        FieldBehavior: typeof _886.FieldBehavior;
        errorReasonFromJSON(object: any): _885.ErrorReason;
        errorReasonToJSON(object: _885.ErrorReason): string;
        ErrorReason: typeof _885.ErrorReason;
        Endpoint: {
            encode(message: _884.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.Endpoint;
            fromJSON(object: any): _884.Endpoint;
            toJSON(message: _884.Endpoint): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _884.Endpoint;
        };
        Documentation: {
            encode(message: _883.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _883.Documentation;
            fromJSON(object: any): _883.Documentation;
            toJSON(message: _883.Documentation): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _883.Documentation;
        };
        DocumentationRule: {
            encode(message: _883.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _883.DocumentationRule;
            fromJSON(object: any): _883.DocumentationRule;
            toJSON(message: _883.DocumentationRule): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _883.DocumentationRule;
        };
        Page: {
            encode(message: _883.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _883.Page;
            fromJSON(object: any): _883.Page;
            toJSON(message: _883.Page): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _883.Page;
        };
        Distribution: {
            encode(message: _882.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.Distribution;
            fromJSON(object: any): _882.Distribution;
            toJSON(message: _882.Distribution): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _882.Distribution;
        };
        Distribution_Range: {
            encode(message: _882.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.Distribution_Range;
            fromJSON(object: any): _882.Distribution_Range;
            toJSON(message: _882.Distribution_Range): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _882.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _882.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.Distribution_BucketOptions;
            fromJSON(object: any): _882.Distribution_BucketOptions;
            toJSON(message: _882.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _882.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _882.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _882.Distribution_BucketOptions_Linear;
            toJSON(message: _882.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _882.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _882.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _882.Distribution_BucketOptions_Exponential;
            toJSON(message: _882.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _882.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _882.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _882.Distribution_BucketOptions_Explicit;
            toJSON(message: _882.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _882.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _882.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _882.Distribution_Exemplar;
            fromJSON(object: any): _882.Distribution_Exemplar;
            toJSON(message: _882.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _882.Distribution_Exemplar;
        };
        Control: {
            encode(message: _881.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _881.Control;
            fromJSON(object: any): _881.Control;
            toJSON(message: _881.Control): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _881.Control;
        };
        Context: {
            encode(message: _880.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.Context;
            fromJSON(object: any): _880.Context;
            toJSON(message: _880.Context): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _880.Context;
        };
        ContextRule: {
            encode(message: _880.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.ContextRule;
            fromJSON(object: any): _880.ContextRule;
            toJSON(message: _880.ContextRule): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _880.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _879.Property_PropertyType;
        property_PropertyTypeToJSON(object: _879.Property_PropertyType): string;
        ProjectProperties: {
            encode(message: _879.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _879.ProjectProperties;
            fromJSON(object: any): _879.ProjectProperties;
            toJSON(message: _879.ProjectProperties): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _879.ProjectProperties;
        };
        Property: {
            encode(message: _879.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _879.Property;
            fromJSON(object: any): _879.Property;
            toJSON(message: _879.Property): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _879.Property;
        };
        Property_PropertyType: typeof _879.Property_PropertyType;
        changeTypeFromJSON(object: any): _878.ChangeType;
        changeTypeToJSON(object: _878.ChangeType): string;
        ChangeType: typeof _878.ChangeType;
        ConfigChange: {
            encode(message: _878.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.ConfigChange;
            fromJSON(object: any): _878.ConfigChange;
            toJSON(message: _878.ConfigChange): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _878.ConfigChange;
        };
        Advice: {
            encode(message: _878.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Advice;
            fromJSON(object: any): _878.Advice;
            toJSON(message: _878.Advice): unknown;
            fromPartial<I_54 extends unknown>(object: I_54): _878.Advice;
        };
        Billing: {
            encode(message: _876.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.Billing;
            fromJSON(object: any): _876.Billing;
            toJSON(message: _876.Billing): unknown;
            fromPartial<I_55 extends unknown>(object: I_55): _876.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _876.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.Billing_BillingDestination;
            fromJSON(object: any): _876.Billing_BillingDestination;
            toJSON(message: _876.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends unknown>(object: I_56): _876.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _875.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _875.BackendRule_PathTranslation): string;
        Backend: {
            encode(message: _875.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _875.Backend;
            fromJSON(object: any): _875.Backend;
            toJSON(message: _875.Backend): unknown;
            fromPartial<I_57 extends unknown>(object: I_57): _875.Backend;
        };
        BackendRule: {
            encode(message: _875.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _875.BackendRule;
            fromJSON(object: any): _875.BackendRule;
            toJSON(message: _875.BackendRule): unknown;
            fromPartial<I_58 extends unknown>(object: I_58): _875.BackendRule;
        };
        BackendRule_PathTranslation: typeof _875.BackendRule_PathTranslation;
        Authentication: {
            encode(message: _874.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.Authentication;
            fromJSON(object: any): _874.Authentication;
            toJSON(message: _874.Authentication): unknown;
            fromPartial<I_59 extends unknown>(object: I_59): _874.Authentication;
        };
        AuthenticationRule: {
            encode(message: _874.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.AuthenticationRule;
            fromJSON(object: any): _874.AuthenticationRule;
            toJSON(message: _874.AuthenticationRule): unknown;
            fromPartial<I_60 extends unknown>(object: I_60): _874.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _874.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.JwtLocation;
            fromJSON(object: any): _874.JwtLocation;
            toJSON(message: _874.JwtLocation): unknown;
            fromPartial<I_61 extends unknown>(object: I_61): _874.JwtLocation;
        };
        AuthProvider: {
            encode(message: _874.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.AuthProvider;
            fromJSON(object: any): _874.AuthProvider;
            toJSON(message: _874.AuthProvider): unknown;
            fromPartial<I_62 extends unknown>(object: I_62): _874.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _874.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.OAuthRequirements;
            fromJSON(object: any): _874.OAuthRequirements;
            toJSON(message: _874.OAuthRequirements): unknown;
            fromPartial<I_63 extends unknown>(object: I_63): _874.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _874.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.AuthRequirement;
            fromJSON(object: any): _874.AuthRequirement;
            toJSON(message: _874.AuthRequirement): unknown;
            fromPartial<I_64 extends unknown>(object: I_64): _874.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _905.LogSeverity;
            logSeverityToJSON(object: _905.LogSeverity): string;
            LogSeverity: typeof _905.LogSeverity;
            HttpRequest: {
                encode(message: _904.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _904.HttpRequest;
                fromJSON(object: any): _904.HttpRequest;
                toJSON(message: _904.HttpRequest): unknown;
                fromPartial<I extends unknown>(object: I): _904.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _909.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _909.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            DeleteLogRequest: {
                encode(message: _909.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.DeleteLogRequest;
                fromJSON(object: any): _909.DeleteLogRequest;
                toJSON(message: _909.DeleteLogRequest): unknown;
                fromPartial<I extends unknown>(object: I): _909.DeleteLogRequest;
            };
            WriteLogEntriesRequest: {
                encode(message: _909.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.WriteLogEntriesRequest;
                fromJSON(object: any): _909.WriteLogEntriesRequest;
                toJSON(message: _909.WriteLogEntriesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _909.WriteLogEntriesRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _909.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _909.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _909.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _909.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesResponse: {
                encode(_: _909.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.WriteLogEntriesResponse;
                fromJSON(_: any): _909.WriteLogEntriesResponse;
                toJSON(_: _909.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _909.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _909.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _909.WriteLogEntriesPartialErrors;
                toJSON(message: _909.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _909.WriteLogEntriesPartialErrors;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _909.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _909.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _909.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _909.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            ListLogEntriesRequest: {
                encode(message: _909.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.ListLogEntriesRequest;
                fromJSON(object: any): _909.ListLogEntriesRequest;
                toJSON(message: _909.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _909.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _909.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.ListLogEntriesResponse;
                fromJSON(object: any): _909.ListLogEntriesResponse;
                toJSON(message: _909.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _909.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _909.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _909.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _909.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _909.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _909.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _909.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _909.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _909.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _909.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.ListLogsRequest;
                fromJSON(object: any): _909.ListLogsRequest;
                toJSON(message: _909.ListLogsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _909.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _909.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.ListLogsResponse;
                fromJSON(object: any): _909.ListLogsResponse;
                toJSON(message: _909.ListLogsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _909.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _909.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.TailLogEntriesRequest;
                fromJSON(object: any): _909.TailLogEntriesRequest;
                toJSON(message: _909.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _909.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _909.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.TailLogEntriesResponse;
                fromJSON(object: any): _909.TailLogEntriesResponse;
                toJSON(message: _909.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _909.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _909.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _909.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _909.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _909.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _909.TailLogEntriesResponse_SuppressionInfo;
            };
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _909.TailLogEntriesResponse_SuppressionInfo_Reason;
            LoggingServiceV2ClientImpl: typeof _909.LoggingServiceV2ClientImpl;
            logMetric_ApiVersionFromJSON(object: any): _908.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _908.LogMetric_ApiVersion): string;
            LogMetric: {
                encode(message: _908.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.LogMetric;
                fromJSON(object: any): _908.LogMetric;
                toJSON(message: _908.LogMetric): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _908.LogMetric;
            };
            LogMetric_ApiVersion: typeof _908.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _908.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _908.LogMetric_LabelExtractorsEntry;
                toJSON(message: _908.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _908.LogMetric_LabelExtractorsEntry;
            };
            ListLogMetricsRequest: {
                encode(message: _908.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.ListLogMetricsRequest;
                fromJSON(object: any): _908.ListLogMetricsRequest;
                toJSON(message: _908.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _908.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _908.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.ListLogMetricsResponse;
                fromJSON(object: any): _908.ListLogMetricsResponse;
                toJSON(message: _908.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _908.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _908.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.GetLogMetricRequest;
                fromJSON(object: any): _908.GetLogMetricRequest;
                toJSON(message: _908.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _908.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _908.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.CreateLogMetricRequest;
                fromJSON(object: any): _908.CreateLogMetricRequest;
                toJSON(message: _908.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _908.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _908.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.UpdateLogMetricRequest;
                fromJSON(object: any): _908.UpdateLogMetricRequest;
                toJSON(message: _908.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _908.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _908.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.DeleteLogMetricRequest;
                fromJSON(object: any): _908.DeleteLogMetricRequest;
                toJSON(message: _908.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _908.DeleteLogMetricRequest;
            };
            MetricsServiceV2ClientImpl: typeof _908.MetricsServiceV2ClientImpl;
            lifecycleStateFromJSON(object: any): _907.LifecycleState;
            lifecycleStateToJSON(object: _907.LifecycleState): string;
            operationStateFromJSON(object: any): _907.OperationState;
            operationStateToJSON(object: _907.OperationState): string;
            logSink_VersionFormatFromJSON(object: any): _907.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _907.LogSink_VersionFormat): string;
            LifecycleState: typeof _907.LifecycleState;
            OperationState: typeof _907.OperationState;
            LogBucket: {
                encode(message: _907.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.LogBucket;
                fromJSON(object: any): _907.LogBucket;
                toJSON(message: _907.LogBucket): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _907.LogBucket;
            };
            LogView: {
                encode(message: _907.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.LogView;
                fromJSON(object: any): _907.LogView;
                toJSON(message: _907.LogView): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _907.LogView;
            };
            LogSink: {
                encode(message: _907.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.LogSink;
                fromJSON(object: any): _907.LogSink;
                toJSON(message: _907.LogSink): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _907.LogSink;
            };
            LogSink_VersionFormat: typeof _907.LogSink_VersionFormat;
            BigQueryOptions: {
                encode(message: _907.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.BigQueryOptions;
                fromJSON(object: any): _907.BigQueryOptions;
                toJSON(message: _907.BigQueryOptions): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _907.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _907.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListBucketsRequest;
                fromJSON(object: any): _907.ListBucketsRequest;
                toJSON(message: _907.ListBucketsRequest): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _907.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _907.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListBucketsResponse;
                fromJSON(object: any): _907.ListBucketsResponse;
                toJSON(message: _907.ListBucketsResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _907.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _907.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CreateBucketRequest;
                fromJSON(object: any): _907.CreateBucketRequest;
                toJSON(message: _907.CreateBucketRequest): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _907.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _907.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.UpdateBucketRequest;
                fromJSON(object: any): _907.UpdateBucketRequest;
                toJSON(message: _907.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _907.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _907.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.GetBucketRequest;
                fromJSON(object: any): _907.GetBucketRequest;
                toJSON(message: _907.GetBucketRequest): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _907.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _907.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.DeleteBucketRequest;
                fromJSON(object: any): _907.DeleteBucketRequest;
                toJSON(message: _907.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _907.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _907.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.UndeleteBucketRequest;
                fromJSON(object: any): _907.UndeleteBucketRequest;
                toJSON(message: _907.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _907.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _907.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListViewsRequest;
                fromJSON(object: any): _907.ListViewsRequest;
                toJSON(message: _907.ListViewsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _907.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _907.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListViewsResponse;
                fromJSON(object: any): _907.ListViewsResponse;
                toJSON(message: _907.ListViewsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _907.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _907.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CreateViewRequest;
                fromJSON(object: any): _907.CreateViewRequest;
                toJSON(message: _907.CreateViewRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _907.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _907.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.UpdateViewRequest;
                fromJSON(object: any): _907.UpdateViewRequest;
                toJSON(message: _907.UpdateViewRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _907.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _907.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.GetViewRequest;
                fromJSON(object: any): _907.GetViewRequest;
                toJSON(message: _907.GetViewRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _907.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _907.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.DeleteViewRequest;
                fromJSON(object: any): _907.DeleteViewRequest;
                toJSON(message: _907.DeleteViewRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _907.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _907.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListSinksRequest;
                fromJSON(object: any): _907.ListSinksRequest;
                toJSON(message: _907.ListSinksRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _907.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _907.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListSinksResponse;
                fromJSON(object: any): _907.ListSinksResponse;
                toJSON(message: _907.ListSinksResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _907.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _907.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.GetSinkRequest;
                fromJSON(object: any): _907.GetSinkRequest;
                toJSON(message: _907.GetSinkRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _907.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _907.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CreateSinkRequest;
                fromJSON(object: any): _907.CreateSinkRequest;
                toJSON(message: _907.CreateSinkRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _907.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _907.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.UpdateSinkRequest;
                fromJSON(object: any): _907.UpdateSinkRequest;
                toJSON(message: _907.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _907.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _907.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.DeleteSinkRequest;
                fromJSON(object: any): _907.DeleteSinkRequest;
                toJSON(message: _907.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _907.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _907.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.LogExclusion;
                fromJSON(object: any): _907.LogExclusion;
                toJSON(message: _907.LogExclusion): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _907.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _907.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListExclusionsRequest;
                fromJSON(object: any): _907.ListExclusionsRequest;
                toJSON(message: _907.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _907.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _907.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.ListExclusionsResponse;
                fromJSON(object: any): _907.ListExclusionsResponse;
                toJSON(message: _907.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _907.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _907.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.GetExclusionRequest;
                fromJSON(object: any): _907.GetExclusionRequest;
                toJSON(message: _907.GetExclusionRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _907.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _907.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CreateExclusionRequest;
                fromJSON(object: any): _907.CreateExclusionRequest;
                toJSON(message: _907.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _907.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _907.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.UpdateExclusionRequest;
                fromJSON(object: any): _907.UpdateExclusionRequest;
                toJSON(message: _907.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _907.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _907.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.DeleteExclusionRequest;
                fromJSON(object: any): _907.DeleteExclusionRequest;
                toJSON(message: _907.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _907.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _907.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.GetCmekSettingsRequest;
                fromJSON(object: any): _907.GetCmekSettingsRequest;
                toJSON(message: _907.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _907.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _907.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.UpdateCmekSettingsRequest;
                fromJSON(object: any): _907.UpdateCmekSettingsRequest;
                toJSON(message: _907.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _907.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _907.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CmekSettings;
                fromJSON(object: any): _907.CmekSettings;
                toJSON(message: _907.CmekSettings): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _907.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _907.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.GetSettingsRequest;
                fromJSON(object: any): _907.GetSettingsRequest;
                toJSON(message: _907.GetSettingsRequest): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _907.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _907.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.UpdateSettingsRequest;
                fromJSON(object: any): _907.UpdateSettingsRequest;
                toJSON(message: _907.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _907.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _907.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.Settings;
                fromJSON(object: any): _907.Settings;
                toJSON(message: _907.Settings): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _907.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _907.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CopyLogEntriesRequest;
                fromJSON(object: any): _907.CopyLogEntriesRequest;
                toJSON(message: _907.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _907.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _907.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CopyLogEntriesMetadata;
                fromJSON(object: any): _907.CopyLogEntriesMetadata;
                toJSON(message: _907.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _907.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _907.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _907.CopyLogEntriesResponse;
                fromJSON(object: any): _907.CopyLogEntriesResponse;
                toJSON(message: _907.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _907.CopyLogEntriesResponse;
            };
            ConfigServiceV2ClientImpl: typeof _907.ConfigServiceV2ClientImpl;
            LogEntry: {
                encode(message: _906.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _906.LogEntry;
                fromJSON(object: any): _906.LogEntry;
                toJSON(message: _906.LogEntry): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _906.LogEntry;
            };
            LogEntry_LabelsEntry: {
                encode(message: _906.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _906.LogEntry_LabelsEntry;
                fromJSON(object: any): _906.LogEntry_LabelsEntry;
                toJSON(message: _906.LogEntry_LabelsEntry): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _906.LogEntry_LabelsEntry;
            };
            LogEntryOperation: {
                encode(message: _906.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _906.LogEntryOperation;
                fromJSON(object: any): _906.LogEntryOperation;
                toJSON(message: _906.LogEntryOperation): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _906.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _906.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _906.LogEntrySourceLocation;
                fromJSON(object: any): _906.LogEntrySourceLocation;
                toJSON(message: _906.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _906.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _906.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _906.LogSplit;
                fromJSON(object: any): _906.LogSplit;
                toJSON(message: _906.LogSplit): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _906.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _910.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.Operation;
            fromJSON(object: any): _910.Operation;
            toJSON(message: _910.Operation): unknown;
            fromPartial<I extends unknown>(object: I): _910.Operation;
        };
        GetOperationRequest: {
            encode(message: _910.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.GetOperationRequest;
            fromJSON(object: any): _910.GetOperationRequest;
            toJSON(message: _910.GetOperationRequest): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _910.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _910.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.ListOperationsRequest;
            fromJSON(object: any): _910.ListOperationsRequest;
            toJSON(message: _910.ListOperationsRequest): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _910.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _910.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.ListOperationsResponse;
            fromJSON(object: any): _910.ListOperationsResponse;
            toJSON(message: _910.ListOperationsResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _910.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _910.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.CancelOperationRequest;
            fromJSON(object: any): _910.CancelOperationRequest;
            toJSON(message: _910.CancelOperationRequest): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _910.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _910.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.DeleteOperationRequest;
            fromJSON(object: any): _910.DeleteOperationRequest;
            toJSON(message: _910.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _910.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _910.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.WaitOperationRequest;
            fromJSON(object: any): _910.WaitOperationRequest;
            toJSON(message: _910.WaitOperationRequest): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _910.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _910.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.OperationInfo;
            fromJSON(object: any): _910.OperationInfo;
            toJSON(message: _910.OperationInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _910.OperationInfo;
        };
        OperationsClientImpl: typeof _910.OperationsClientImpl;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _921.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.DoubleValue;
            fromJSON(object: any): _921.DoubleValue;
            toJSON(message: _921.DoubleValue): unknown;
            fromPartial<I extends unknown>(object: I): _921.DoubleValue;
        };
        FloatValue: {
            encode(message: _921.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.FloatValue;
            fromJSON(object: any): _921.FloatValue;
            toJSON(message: _921.FloatValue): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _921.FloatValue;
        };
        Int64Value: {
            encode(message: _921.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.Int64Value;
            fromJSON(object: any): _921.Int64Value;
            toJSON(message: _921.Int64Value): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _921.Int64Value;
        };
        UInt64Value: {
            encode(message: _921.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.UInt64Value;
            fromJSON(object: any): _921.UInt64Value;
            toJSON(message: _921.UInt64Value): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _921.UInt64Value;
        };
        Int32Value: {
            encode(message: _921.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.Int32Value;
            fromJSON(object: any): _921.Int32Value;
            toJSON(message: _921.Int32Value): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _921.Int32Value;
        };
        UInt32Value: {
            encode(message: _921.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.UInt32Value;
            fromJSON(object: any): _921.UInt32Value;
            toJSON(message: _921.UInt32Value): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _921.UInt32Value;
        };
        BoolValue: {
            encode(message: _921.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.BoolValue;
            fromJSON(object: any): _921.BoolValue;
            toJSON(message: _921.BoolValue): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _921.BoolValue;
        };
        StringValue: {
            encode(message: _921.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.StringValue;
            fromJSON(object: any): _921.StringValue;
            toJSON(message: _921.StringValue): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _921.StringValue;
        };
        BytesValue: {
            encode(message: _921.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _921.BytesValue;
            fromJSON(object: any): _921.BytesValue;
            toJSON(message: _921.BytesValue): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _921.BytesValue;
        };
        syntaxFromJSON(object: any): _920.Syntax;
        syntaxToJSON(object: _920.Syntax): string;
        field_KindFromJSON(object: any): _920.Field_Kind;
        field_KindToJSON(object: _920.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _920.Field_Cardinality;
        field_CardinalityToJSON(object: _920.Field_Cardinality): string;
        Syntax: typeof _920.Syntax;
        Type: {
            encode(message: _920.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _920.Type;
            fromJSON(object: any): _920.Type;
            toJSON(message: _920.Type): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _920.Type;
        };
        Field: {
            encode(message: _920.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _920.Field;
            fromJSON(object: any): _920.Field;
            toJSON(message: _920.Field): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _920.Field;
        };
        Field_Kind: typeof _920.Field_Kind;
        Field_Cardinality: typeof _920.Field_Cardinality;
        Enum: {
            encode(message: _920.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _920.Enum;
            fromJSON(object: any): _920.Enum;
            toJSON(message: _920.Enum): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _920.Enum;
        };
        EnumValue: {
            encode(message: _920.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _920.EnumValue;
            fromJSON(object: any): _920.EnumValue;
            toJSON(message: _920.EnumValue): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _920.EnumValue;
        };
        Option: {
            encode(message: _920.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _920.Option;
            fromJSON(object: any): _920.Option;
            toJSON(message: _920.Option): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _920.Option;
        };
        Timestamp: {
            encode(message: _919.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _919.Timestamp;
            fromJSON(object: any): _919.Timestamp;
            toJSON(message: _919.Timestamp): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _919.Timestamp;
        };
        nullValueFromJSON(object: any): _918.NullValue;
        nullValueToJSON(object: _918.NullValue): string;
        NullValue: typeof _918.NullValue;
        Struct: {
            encode(message: _918.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _918.Struct;
            fromJSON(object: any): _918.Struct;
            toJSON(message: _918.Struct): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _918.Struct;
            wrap(object: {
                [key: string]: any;
            }): _918.Struct;
            unwrap(message: _918.Struct): {
                [key: string]: any;
            };
        };
        Struct_FieldsEntry: {
            encode(message: _918.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _918.Struct_FieldsEntry;
            fromJSON(object: any): _918.Struct_FieldsEntry;
            toJSON(message: _918.Struct_FieldsEntry): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _918.Struct_FieldsEntry;
        };
        Value: {
            encode(message: _918.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _918.Value;
            fromJSON(object: any): _918.Value;
            toJSON(message: _918.Value): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _918.Value;
            wrap(value: any): _918.Value;
            unwrap(message: _918.Value): string | number | boolean | Object | any[];
        };
        ListValue: {
            encode(message: _918.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _918.ListValue;
            fromJSON(object: any): _918.ListValue;
            toJSON(message: _918.ListValue): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _918.ListValue;
            wrap(value: any[]): _918.ListValue;
            unwrap(message: _918.ListValue): any[];
        };
        SourceContext: {
            encode(message: _917.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _917.SourceContext;
            fromJSON(object: any): _917.SourceContext;
            toJSON(message: _917.SourceContext): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _917.SourceContext;
        };
        FieldMask: {
            encode(message: _916.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.FieldMask;
            fromJSON(object: any): _916.FieldMask;
            toJSON(message: _916.FieldMask): string;
            fromPartial<I_20 extends unknown>(object: I_20): _916.FieldMask;
            wrap(paths: string[]): _916.FieldMask;
            unwrap(message: _916.FieldMask): string[];
        };
        Empty: {
            encode(_: _915.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _915.Empty;
            fromJSON(_: any): _915.Empty;
            toJSON(_: _915.Empty): unknown;
            fromPartial<I_21 extends unknown>(_: I_21): _915.Empty;
        };
        Duration: {
            encode(message: _914.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _914.Duration;
            fromJSON(object: any): _914.Duration;
            toJSON(message: _914.Duration): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _914.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _913.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _913.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _913.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _913.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _913.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _913.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _913.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _913.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _913.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _913.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _913.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _913.MethodOptions_IdempotencyLevel): string;
        FileDescriptorSet: {
            encode(message: _913.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.FileDescriptorSet;
            fromJSON(object: any): _913.FileDescriptorSet;
            toJSON(message: _913.FileDescriptorSet): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _913.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _913.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.FileDescriptorProto;
            fromJSON(object: any): _913.FileDescriptorProto;
            toJSON(message: _913.FileDescriptorProto): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _913.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _913.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.DescriptorProto;
            fromJSON(object: any): _913.DescriptorProto;
            toJSON(message: _913.DescriptorProto): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _913.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _913.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _913.DescriptorProto_ExtensionRange;
            toJSON(message: _913.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _913.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _913.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.DescriptorProto_ReservedRange;
            fromJSON(object: any): _913.DescriptorProto_ReservedRange;
            toJSON(message: _913.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _913.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _913.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.ExtensionRangeOptions;
            fromJSON(object: any): _913.ExtensionRangeOptions;
            toJSON(message: _913.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _913.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _913.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.FieldDescriptorProto;
            fromJSON(object: any): _913.FieldDescriptorProto;
            toJSON(message: _913.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _913.FieldDescriptorProto;
        };
        FieldDescriptorProto_Type: typeof _913.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _913.FieldDescriptorProto_Label;
        OneofDescriptorProto: {
            encode(message: _913.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.OneofDescriptorProto;
            fromJSON(object: any): _913.OneofDescriptorProto;
            toJSON(message: _913.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _913.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _913.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.EnumDescriptorProto;
            fromJSON(object: any): _913.EnumDescriptorProto;
            toJSON(message: _913.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _913.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _913.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _913.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _913.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _913.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _913.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.EnumValueDescriptorProto;
            fromJSON(object: any): _913.EnumValueDescriptorProto;
            toJSON(message: _913.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _913.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _913.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.ServiceDescriptorProto;
            fromJSON(object: any): _913.ServiceDescriptorProto;
            toJSON(message: _913.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _913.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _913.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.MethodDescriptorProto;
            fromJSON(object: any): _913.MethodDescriptorProto;
            toJSON(message: _913.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _913.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _913.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.FileOptions;
            fromJSON(object: any): _913.FileOptions;
            toJSON(message: _913.FileOptions): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _913.FileOptions;
        };
        FileOptions_OptimizeMode: typeof _913.FileOptions_OptimizeMode;
        MessageOptions: {
            encode(message: _913.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.MessageOptions;
            fromJSON(object: any): _913.MessageOptions;
            toJSON(message: _913.MessageOptions): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _913.MessageOptions;
        };
        FieldOptions: {
            encode(message: _913.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.FieldOptions;
            fromJSON(object: any): _913.FieldOptions;
            toJSON(message: _913.FieldOptions): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _913.FieldOptions;
        };
        FieldOptions_CType: typeof _913.FieldOptions_CType;
        FieldOptions_JSType: typeof _913.FieldOptions_JSType;
        OneofOptions: {
            encode(message: _913.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.OneofOptions;
            fromJSON(object: any): _913.OneofOptions;
            toJSON(message: _913.OneofOptions): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _913.OneofOptions;
        };
        EnumOptions: {
            encode(message: _913.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.EnumOptions;
            fromJSON(object: any): _913.EnumOptions;
            toJSON(message: _913.EnumOptions): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _913.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _913.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.EnumValueOptions;
            fromJSON(object: any): _913.EnumValueOptions;
            toJSON(message: _913.EnumValueOptions): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _913.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _913.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.ServiceOptions;
            fromJSON(object: any): _913.ServiceOptions;
            toJSON(message: _913.ServiceOptions): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _913.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _913.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.MethodOptions;
            fromJSON(object: any): _913.MethodOptions;
            toJSON(message: _913.MethodOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _913.MethodOptions;
        };
        MethodOptions_IdempotencyLevel: typeof _913.MethodOptions_IdempotencyLevel;
        UninterpretedOption: {
            encode(message: _913.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.UninterpretedOption;
            fromJSON(object: any): _913.UninterpretedOption;
            toJSON(message: _913.UninterpretedOption): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _913.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _913.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.UninterpretedOption_NamePart;
            fromJSON(object: any): _913.UninterpretedOption_NamePart;
            toJSON(message: _913.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _913.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _913.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.SourceCodeInfo;
            fromJSON(object: any): _913.SourceCodeInfo;
            toJSON(message: _913.SourceCodeInfo): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _913.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _913.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.SourceCodeInfo_Location;
            fromJSON(object: any): _913.SourceCodeInfo_Location;
            toJSON(message: _913.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _913.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _913.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.GeneratedCodeInfo;
            fromJSON(object: any): _913.GeneratedCodeInfo;
            toJSON(message: _913.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _913.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _913.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _913.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _913.GeneratedCodeInfo_Annotation;
            toJSON(message: _913.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _913.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _912.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _912.Api;
            fromJSON(object: any): _912.Api;
            toJSON(message: _912.Api): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _912.Api;
        };
        Method: {
            encode(message: _912.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _912.Method;
            fromJSON(object: any): _912.Method;
            toJSON(message: _912.Method): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _912.Method;
        };
        Mixin: {
            encode(message: _912.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _912.Mixin;
            fromJSON(object: any): _912.Mixin;
            toJSON(message: _912.Mixin): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _912.Mixin;
        };
        Any: {
            encode(message: _911.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _911.Any;
            fromJSON(object: any): _911.Any;
            toJSON(message: _911.Any): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _911.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _924.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _924.Status;
            fromJSON(object: any): _924.Status;
            toJSON(message: _924.Status): unknown;
            fromPartial<I extends unknown>(object: I): _924.Status;
        };
        RetryInfo: {
            encode(message: _923.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.RetryInfo;
            fromJSON(object: any): _923.RetryInfo;
            toJSON(message: _923.RetryInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _923.RetryInfo;
        };
        DebugInfo: {
            encode(message: _923.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.DebugInfo;
            fromJSON(object: any): _923.DebugInfo;
            toJSON(message: _923.DebugInfo): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _923.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _923.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.QuotaFailure;
            fromJSON(object: any): _923.QuotaFailure;
            toJSON(message: _923.QuotaFailure): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _923.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _923.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.QuotaFailure_Violation;
            fromJSON(object: any): _923.QuotaFailure_Violation;
            toJSON(message: _923.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _923.QuotaFailure_Violation;
        };
        ErrorInfo: {
            encode(message: _923.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.ErrorInfo;
            fromJSON(object: any): _923.ErrorInfo;
            toJSON(message: _923.ErrorInfo): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _923.ErrorInfo;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _923.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _923.ErrorInfo_MetadataEntry;
            toJSON(message: _923.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _923.ErrorInfo_MetadataEntry;
        };
        PreconditionFailure: {
            encode(message: _923.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.PreconditionFailure;
            fromJSON(object: any): _923.PreconditionFailure;
            toJSON(message: _923.PreconditionFailure): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _923.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _923.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.PreconditionFailure_Violation;
            fromJSON(object: any): _923.PreconditionFailure_Violation;
            toJSON(message: _923.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _923.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _923.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.BadRequest;
            fromJSON(object: any): _923.BadRequest;
            toJSON(message: _923.BadRequest): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _923.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _923.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.BadRequest_FieldViolation;
            fromJSON(object: any): _923.BadRequest_FieldViolation;
            toJSON(message: _923.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _923.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _923.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.RequestInfo;
            fromJSON(object: any): _923.RequestInfo;
            toJSON(message: _923.RequestInfo): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _923.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _923.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.ResourceInfo;
            fromJSON(object: any): _923.ResourceInfo;
            toJSON(message: _923.ResourceInfo): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _923.ResourceInfo;
        };
        Help: {
            encode(message: _923.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.Help;
            fromJSON(object: any): _923.Help;
            toJSON(message: _923.Help): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _923.Help;
        };
        Help_Link: {
            encode(message: _923.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.Help_Link;
            fromJSON(object: any): _923.Help_Link;
            toJSON(message: _923.Help_Link): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _923.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _923.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _923.LocalizedMessage;
            fromJSON(object: any): _923.LocalizedMessage;
            toJSON(message: _923.LocalizedMessage): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _923.LocalizedMessage;
        };
        codeFromJSON(object: any): _922.Code;
        codeToJSON(object: _922.Code): string;
        Code: typeof _922.Code;
    };
}
