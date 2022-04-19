import * as _900 from "./api/auth";
import * as _902 from "./api/backend";
import * as _904 from "./api/billing";
import * as _908 from "./api/config_change";
import * as _910 from "./api/consumer";
import * as _912 from "./api/context";
import * as _914 from "./api/control";
import * as _916 from "./api/distribution";
import * as _918 from "./api/documentation";
import * as _920 from "./api/endpoint";
import * as _922 from "./api/error_reason";
import * as _924 from "./api/field_behavior";
import * as _926 from "./api/http";
import * as _928 from "./api/httpbody";
import * as _930 from "./api/label";
import * as _932 from "./api/launch_stage";
import * as _934 from "./api/log";
import * as _936 from "./api/logging";
import * as _938 from "./api/metric";
import * as _940 from "./api/monitored_resource";
import * as _942 from "./api/monitoring";
import * as _944 from "./api/quota";
import * as _946 from "./api/resource";
import * as _948 from "./api/routing";
import * as _950 from "./api/service";
import * as _952 from "./api/source_info";
import * as _954 from "./api/system_parameter";
import * as _956 from "./api/usage";
import * as _958 from "./api/visibility";
import * as _960 from "./logging/type/http_request";
import * as _962 from "./logging/type/log_severity";
import * as _964 from "./logging/v2/log_entry";
import * as _966 from "./logging/v2/logging_config";
import * as _968 from "./logging/v2/logging_metrics";
import * as _970 from "./logging/v2/logging";
import * as _972 from "./longrunning/operations";
import * as _974 from "./protobuf/any";
import * as _976 from "./protobuf/api";
import * as _978 from "./protobuf/descriptor";
import * as _980 from "./protobuf/duration";
import * as _982 from "./protobuf/empty";
import * as _984 from "./protobuf/field_mask";
import * as _986 from "./protobuf/source_context";
import * as _988 from "./protobuf/struct";
import * as _990 from "./protobuf/timestamp";
import * as _992 from "./protobuf/type";
import * as _994 from "./protobuf/wrappers";
import * as _996 from "./rpc/code";
import * as _998 from "./rpc/error_details";
import * as _1000 from "./rpc/status";
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _958.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _958.Visibility;
            fromJSON(object: any): _958.Visibility;
            toJSON(message: _958.Visibility): unknown;
            fromPartial<I extends unknown>(object: I): _958.Visibility;
        };
        VisibilityRule: {
            encode(message: _958.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _958.VisibilityRule;
            fromJSON(object: any): _958.VisibilityRule;
            toJSON(message: _958.VisibilityRule): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _958.VisibilityRule;
        };
        Usage: {
            encode(message: _956.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _956.Usage;
            fromJSON(object: any): _956.Usage;
            toJSON(message: _956.Usage): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _956.Usage;
        };
        UsageRule: {
            encode(message: _956.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _956.UsageRule;
            fromJSON(object: any): _956.UsageRule;
            toJSON(message: _956.UsageRule): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _956.UsageRule;
        };
        SystemParameters: {
            encode(message: _954.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _954.SystemParameters;
            fromJSON(object: any): _954.SystemParameters;
            toJSON(message: _954.SystemParameters): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _954.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _954.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _954.SystemParameterRule;
            fromJSON(object: any): _954.SystemParameterRule;
            toJSON(message: _954.SystemParameterRule): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _954.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _954.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _954.SystemParameter;
            fromJSON(object: any): _954.SystemParameter;
            toJSON(message: _954.SystemParameter): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _954.SystemParameter;
        };
        SourceInfo: {
            encode(message: _952.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _952.SourceInfo;
            fromJSON(object: any): _952.SourceInfo;
            toJSON(message: _952.SourceInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _952.SourceInfo;
        };
        Service: {
            encode(message: _950.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _950.Service;
            fromJSON(object: any): _950.Service;
            toJSON(message: _950.Service): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _950.Service;
        };
        RoutingRule: {
            encode(message: _948.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _948.RoutingRule;
            fromJSON(object: any): _948.RoutingRule;
            toJSON(message: _948.RoutingRule): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _948.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _948.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _948.RoutingParameter;
            fromJSON(object: any): _948.RoutingParameter;
            toJSON(message: _948.RoutingParameter): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _948.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _946.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _946.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _946.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _946.ResourceDescriptor_Style): string;
        ResourceDescriptor: {
            encode(message: _946.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _946.ResourceDescriptor;
            fromJSON(object: any): _946.ResourceDescriptor;
            toJSON(message: _946.ResourceDescriptor): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _946.ResourceDescriptor;
        };
        ResourceDescriptor_History: typeof _946.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _946.ResourceDescriptor_Style;
        ResourceReference: {
            encode(message: _946.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _946.ResourceReference;
            fromJSON(object: any): _946.ResourceReference;
            toJSON(message: _946.ResourceReference): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _946.ResourceReference;
        };
        Quota: {
            encode(message: _944.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _944.Quota;
            fromJSON(object: any): _944.Quota;
            toJSON(message: _944.Quota): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _944.Quota;
        };
        MetricRule: {
            encode(message: _944.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _944.MetricRule;
            fromJSON(object: any): _944.MetricRule;
            toJSON(message: _944.MetricRule): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _944.MetricRule;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _944.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _944.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _944.MetricRule_MetricCostsEntry;
            toJSON(message: _944.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _944.MetricRule_MetricCostsEntry;
        };
        QuotaLimit: {
            encode(message: _944.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _944.QuotaLimit;
            fromJSON(object: any): _944.QuotaLimit;
            toJSON(message: _944.QuotaLimit): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _944.QuotaLimit;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _944.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _944.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _944.QuotaLimit_ValuesEntry;
            toJSON(message: _944.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _944.QuotaLimit_ValuesEntry;
        };
        Monitoring: {
            encode(message: _942.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _942.Monitoring;
            fromJSON(object: any): _942.Monitoring;
            toJSON(message: _942.Monitoring): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _942.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _942.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _942.Monitoring_MonitoringDestination;
            fromJSON(object: any): _942.Monitoring_MonitoringDestination;
            toJSON(message: _942.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _942.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _940.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.MonitoredResourceDescriptor;
            fromJSON(object: any): _940.MonitoredResourceDescriptor;
            toJSON(message: _940.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _940.MonitoredResourceDescriptor;
        };
        MonitoredResource: {
            encode(message: _940.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.MonitoredResource;
            fromJSON(object: any): _940.MonitoredResource;
            toJSON(message: _940.MonitoredResource): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _940.MonitoredResource;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _940.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _940.MonitoredResource_LabelsEntry;
            toJSON(message: _940.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _940.MonitoredResource_LabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _940.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.MonitoredResourceMetadata;
            fromJSON(object: any): _940.MonitoredResourceMetadata;
            toJSON(message: _940.MonitoredResourceMetadata): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _940.MonitoredResourceMetadata;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _940.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _940.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _940.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _940.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _940.MonitoredResourceMetadata_UserLabelsEntry;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _938.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _938.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _938.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _938.MetricDescriptor_ValueType): string;
        MetricDescriptor: {
            encode(message: _938.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.MetricDescriptor;
            fromJSON(object: any): _938.MetricDescriptor;
            toJSON(message: _938.MetricDescriptor): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _938.MetricDescriptor;
        };
        MetricDescriptor_MetricKind: typeof _938.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _938.MetricDescriptor_ValueType;
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _938.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _938.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _938.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _938.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric: {
            encode(message: _938.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.Metric;
            fromJSON(object: any): _938.Metric;
            toJSON(message: _938.Metric): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _938.Metric;
        };
        Metric_LabelsEntry: {
            encode(message: _938.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _938.Metric_LabelsEntry;
            fromJSON(object: any): _938.Metric_LabelsEntry;
            toJSON(message: _938.Metric_LabelsEntry): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _938.Metric_LabelsEntry;
        };
        Logging: {
            encode(message: _936.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _936.Logging;
            fromJSON(object: any): _936.Logging;
            toJSON(message: _936.Logging): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _936.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _936.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _936.Logging_LoggingDestination;
            fromJSON(object: any): _936.Logging_LoggingDestination;
            toJSON(message: _936.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _936.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _934.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _934.LogDescriptor;
            fromJSON(object: any): _934.LogDescriptor;
            toJSON(message: _934.LogDescriptor): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _934.LogDescriptor;
        };
        launchStageFromJSON(object: any): _932.LaunchStage;
        launchStageToJSON(object: _932.LaunchStage): string;
        LaunchStage: typeof _932.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _930.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _930.LabelDescriptor_ValueType): string;
        LabelDescriptor: {
            encode(message: _930.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _930.LabelDescriptor;
            fromJSON(object: any): _930.LabelDescriptor;
            toJSON(message: _930.LabelDescriptor): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _930.LabelDescriptor;
        };
        LabelDescriptor_ValueType: typeof _930.LabelDescriptor_ValueType;
        HttpBody: {
            encode(message: _928.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _928.HttpBody;
            fromJSON(object: any): _928.HttpBody;
            toJSON(message: _928.HttpBody): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _928.HttpBody;
        };
        Http: {
            encode(message: _926.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.Http;
            fromJSON(object: any): _926.Http;
            toJSON(message: _926.Http): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _926.Http;
        };
        HttpRule: {
            encode(message: _926.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.HttpRule;
            fromJSON(object: any): _926.HttpRule;
            toJSON(message: _926.HttpRule): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _926.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _926.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _926.CustomHttpPattern;
            fromJSON(object: any): _926.CustomHttpPattern;
            toJSON(message: _926.CustomHttpPattern): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _926.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _924.FieldBehavior;
        fieldBehaviorToJSON(object: _924.FieldBehavior): string;
        FieldBehavior: typeof _924.FieldBehavior;
        errorReasonFromJSON(object: any): _922.ErrorReason;
        errorReasonToJSON(object: _922.ErrorReason): string;
        ErrorReason: typeof _922.ErrorReason;
        Endpoint: {
            encode(message: _920.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _920.Endpoint;
            fromJSON(object: any): _920.Endpoint;
            toJSON(message: _920.Endpoint): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _920.Endpoint;
        };
        Documentation: {
            encode(message: _918.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _918.Documentation;
            fromJSON(object: any): _918.Documentation;
            toJSON(message: _918.Documentation): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _918.Documentation;
        };
        DocumentationRule: {
            encode(message: _918.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _918.DocumentationRule;
            fromJSON(object: any): _918.DocumentationRule;
            toJSON(message: _918.DocumentationRule): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _918.DocumentationRule;
        };
        Page: {
            encode(message: _918.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _918.Page;
            fromJSON(object: any): _918.Page;
            toJSON(message: _918.Page): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _918.Page;
        };
        Distribution: {
            encode(message: _916.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.Distribution;
            fromJSON(object: any): _916.Distribution;
            toJSON(message: _916.Distribution): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _916.Distribution;
        };
        Distribution_Range: {
            encode(message: _916.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.Distribution_Range;
            fromJSON(object: any): _916.Distribution_Range;
            toJSON(message: _916.Distribution_Range): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _916.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _916.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.Distribution_BucketOptions;
            fromJSON(object: any): _916.Distribution_BucketOptions;
            toJSON(message: _916.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _916.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _916.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _916.Distribution_BucketOptions_Linear;
            toJSON(message: _916.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _916.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _916.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _916.Distribution_BucketOptions_Exponential;
            toJSON(message: _916.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _916.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _916.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _916.Distribution_BucketOptions_Explicit;
            toJSON(message: _916.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _916.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _916.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _916.Distribution_Exemplar;
            fromJSON(object: any): _916.Distribution_Exemplar;
            toJSON(message: _916.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _916.Distribution_Exemplar;
        };
        Control: {
            encode(message: _914.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _914.Control;
            fromJSON(object: any): _914.Control;
            toJSON(message: _914.Control): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _914.Control;
        };
        Context: {
            encode(message: _912.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _912.Context;
            fromJSON(object: any): _912.Context;
            toJSON(message: _912.Context): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _912.Context;
        };
        ContextRule: {
            encode(message: _912.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _912.ContextRule;
            fromJSON(object: any): _912.ContextRule;
            toJSON(message: _912.ContextRule): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _912.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _910.Property_PropertyType;
        property_PropertyTypeToJSON(object: _910.Property_PropertyType): string;
        ProjectProperties: {
            encode(message: _910.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.ProjectProperties;
            fromJSON(object: any): _910.ProjectProperties;
            toJSON(message: _910.ProjectProperties): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _910.ProjectProperties;
        };
        Property: {
            encode(message: _910.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _910.Property;
            fromJSON(object: any): _910.Property;
            toJSON(message: _910.Property): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _910.Property;
        };
        Property_PropertyType: typeof _910.Property_PropertyType;
        changeTypeFromJSON(object: any): _908.ChangeType;
        changeTypeToJSON(object: _908.ChangeType): string;
        ChangeType: typeof _908.ChangeType;
        ConfigChange: {
            encode(message: _908.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.ConfigChange;
            fromJSON(object: any): _908.ConfigChange;
            toJSON(message: _908.ConfigChange): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _908.ConfigChange;
        };
        Advice: {
            encode(message: _908.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _908.Advice;
            fromJSON(object: any): _908.Advice;
            toJSON(message: _908.Advice): unknown;
            fromPartial<I_54 extends unknown>(object: I_54): _908.Advice;
        };
        Billing: {
            encode(message: _904.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _904.Billing;
            fromJSON(object: any): _904.Billing;
            toJSON(message: _904.Billing): unknown;
            fromPartial<I_55 extends unknown>(object: I_55): _904.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _904.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _904.Billing_BillingDestination;
            fromJSON(object: any): _904.Billing_BillingDestination;
            toJSON(message: _904.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends unknown>(object: I_56): _904.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _902.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _902.BackendRule_PathTranslation): string;
        Backend: {
            encode(message: _902.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _902.Backend;
            fromJSON(object: any): _902.Backend;
            toJSON(message: _902.Backend): unknown;
            fromPartial<I_57 extends unknown>(object: I_57): _902.Backend;
        };
        BackendRule: {
            encode(message: _902.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _902.BackendRule;
            fromJSON(object: any): _902.BackendRule;
            toJSON(message: _902.BackendRule): unknown;
            fromPartial<I_58 extends unknown>(object: I_58): _902.BackendRule;
        };
        BackendRule_PathTranslation: typeof _902.BackendRule_PathTranslation;
        Authentication: {
            encode(message: _900.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _900.Authentication;
            fromJSON(object: any): _900.Authentication;
            toJSON(message: _900.Authentication): unknown;
            fromPartial<I_59 extends unknown>(object: I_59): _900.Authentication;
        };
        AuthenticationRule: {
            encode(message: _900.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _900.AuthenticationRule;
            fromJSON(object: any): _900.AuthenticationRule;
            toJSON(message: _900.AuthenticationRule): unknown;
            fromPartial<I_60 extends unknown>(object: I_60): _900.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _900.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _900.JwtLocation;
            fromJSON(object: any): _900.JwtLocation;
            toJSON(message: _900.JwtLocation): unknown;
            fromPartial<I_61 extends unknown>(object: I_61): _900.JwtLocation;
        };
        AuthProvider: {
            encode(message: _900.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _900.AuthProvider;
            fromJSON(object: any): _900.AuthProvider;
            toJSON(message: _900.AuthProvider): unknown;
            fromPartial<I_62 extends unknown>(object: I_62): _900.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _900.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _900.OAuthRequirements;
            fromJSON(object: any): _900.OAuthRequirements;
            toJSON(message: _900.OAuthRequirements): unknown;
            fromPartial<I_63 extends unknown>(object: I_63): _900.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _900.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _900.AuthRequirement;
            fromJSON(object: any): _900.AuthRequirement;
            toJSON(message: _900.AuthRequirement): unknown;
            fromPartial<I_64 extends unknown>(object: I_64): _900.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _962.LogSeverity;
            logSeverityToJSON(object: _962.LogSeverity): string;
            LogSeverity: typeof _962.LogSeverity;
            HttpRequest: {
                encode(message: _960.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _960.HttpRequest;
                fromJSON(object: any): _960.HttpRequest;
                toJSON(message: _960.HttpRequest): unknown;
                fromPartial<I extends unknown>(object: I): _960.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _970.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _970.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            DeleteLogRequest: {
                encode(message: _970.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.DeleteLogRequest;
                fromJSON(object: any): _970.DeleteLogRequest;
                toJSON(message: _970.DeleteLogRequest): unknown;
                fromPartial<I extends unknown>(object: I): _970.DeleteLogRequest;
            };
            WriteLogEntriesRequest: {
                encode(message: _970.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.WriteLogEntriesRequest;
                fromJSON(object: any): _970.WriteLogEntriesRequest;
                toJSON(message: _970.WriteLogEntriesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _970.WriteLogEntriesRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _970.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _970.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _970.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _970.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesResponse: {
                encode(_: _970.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.WriteLogEntriesResponse;
                fromJSON(_: any): _970.WriteLogEntriesResponse;
                toJSON(_: _970.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _970.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _970.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _970.WriteLogEntriesPartialErrors;
                toJSON(message: _970.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _970.WriteLogEntriesPartialErrors;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _970.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _970.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _970.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _970.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            ListLogEntriesRequest: {
                encode(message: _970.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.ListLogEntriesRequest;
                fromJSON(object: any): _970.ListLogEntriesRequest;
                toJSON(message: _970.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _970.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _970.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.ListLogEntriesResponse;
                fromJSON(object: any): _970.ListLogEntriesResponse;
                toJSON(message: _970.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _970.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _970.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _970.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _970.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _970.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _970.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _970.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _970.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _970.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _970.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.ListLogsRequest;
                fromJSON(object: any): _970.ListLogsRequest;
                toJSON(message: _970.ListLogsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _970.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _970.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.ListLogsResponse;
                fromJSON(object: any): _970.ListLogsResponse;
                toJSON(message: _970.ListLogsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _970.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _970.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.TailLogEntriesRequest;
                fromJSON(object: any): _970.TailLogEntriesRequest;
                toJSON(message: _970.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _970.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _970.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.TailLogEntriesResponse;
                fromJSON(object: any): _970.TailLogEntriesResponse;
                toJSON(message: _970.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _970.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _970.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _970.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _970.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _970.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _970.TailLogEntriesResponse_SuppressionInfo;
            };
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _970.TailLogEntriesResponse_SuppressionInfo_Reason;
            LoggingServiceV2ClientImpl: typeof _970.LoggingServiceV2ClientImpl;
            logMetric_ApiVersionFromJSON(object: any): _968.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _968.LogMetric_ApiVersion): string;
            LogMetric: {
                encode(message: _968.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.LogMetric;
                fromJSON(object: any): _968.LogMetric;
                toJSON(message: _968.LogMetric): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _968.LogMetric;
            };
            LogMetric_ApiVersion: typeof _968.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _968.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _968.LogMetric_LabelExtractorsEntry;
                toJSON(message: _968.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _968.LogMetric_LabelExtractorsEntry;
            };
            ListLogMetricsRequest: {
                encode(message: _968.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.ListLogMetricsRequest;
                fromJSON(object: any): _968.ListLogMetricsRequest;
                toJSON(message: _968.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _968.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _968.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.ListLogMetricsResponse;
                fromJSON(object: any): _968.ListLogMetricsResponse;
                toJSON(message: _968.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _968.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _968.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.GetLogMetricRequest;
                fromJSON(object: any): _968.GetLogMetricRequest;
                toJSON(message: _968.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _968.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _968.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.CreateLogMetricRequest;
                fromJSON(object: any): _968.CreateLogMetricRequest;
                toJSON(message: _968.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _968.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _968.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.UpdateLogMetricRequest;
                fromJSON(object: any): _968.UpdateLogMetricRequest;
                toJSON(message: _968.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _968.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _968.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _968.DeleteLogMetricRequest;
                fromJSON(object: any): _968.DeleteLogMetricRequest;
                toJSON(message: _968.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _968.DeleteLogMetricRequest;
            };
            MetricsServiceV2ClientImpl: typeof _968.MetricsServiceV2ClientImpl;
            lifecycleStateFromJSON(object: any): _966.LifecycleState;
            lifecycleStateToJSON(object: _966.LifecycleState): string;
            operationStateFromJSON(object: any): _966.OperationState;
            operationStateToJSON(object: _966.OperationState): string;
            logSink_VersionFormatFromJSON(object: any): _966.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _966.LogSink_VersionFormat): string;
            LifecycleState: typeof _966.LifecycleState;
            OperationState: typeof _966.OperationState;
            LogBucket: {
                encode(message: _966.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.LogBucket;
                fromJSON(object: any): _966.LogBucket;
                toJSON(message: _966.LogBucket): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _966.LogBucket;
            };
            LogView: {
                encode(message: _966.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.LogView;
                fromJSON(object: any): _966.LogView;
                toJSON(message: _966.LogView): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _966.LogView;
            };
            LogSink: {
                encode(message: _966.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.LogSink;
                fromJSON(object: any): _966.LogSink;
                toJSON(message: _966.LogSink): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _966.LogSink;
            };
            LogSink_VersionFormat: typeof _966.LogSink_VersionFormat;
            BigQueryOptions: {
                encode(message: _966.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.BigQueryOptions;
                fromJSON(object: any): _966.BigQueryOptions;
                toJSON(message: _966.BigQueryOptions): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _966.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _966.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListBucketsRequest;
                fromJSON(object: any): _966.ListBucketsRequest;
                toJSON(message: _966.ListBucketsRequest): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _966.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _966.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListBucketsResponse;
                fromJSON(object: any): _966.ListBucketsResponse;
                toJSON(message: _966.ListBucketsResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _966.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _966.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CreateBucketRequest;
                fromJSON(object: any): _966.CreateBucketRequest;
                toJSON(message: _966.CreateBucketRequest): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _966.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _966.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.UpdateBucketRequest;
                fromJSON(object: any): _966.UpdateBucketRequest;
                toJSON(message: _966.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _966.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _966.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.GetBucketRequest;
                fromJSON(object: any): _966.GetBucketRequest;
                toJSON(message: _966.GetBucketRequest): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _966.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _966.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.DeleteBucketRequest;
                fromJSON(object: any): _966.DeleteBucketRequest;
                toJSON(message: _966.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _966.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _966.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.UndeleteBucketRequest;
                fromJSON(object: any): _966.UndeleteBucketRequest;
                toJSON(message: _966.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _966.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _966.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListViewsRequest;
                fromJSON(object: any): _966.ListViewsRequest;
                toJSON(message: _966.ListViewsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _966.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _966.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListViewsResponse;
                fromJSON(object: any): _966.ListViewsResponse;
                toJSON(message: _966.ListViewsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _966.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _966.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CreateViewRequest;
                fromJSON(object: any): _966.CreateViewRequest;
                toJSON(message: _966.CreateViewRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _966.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _966.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.UpdateViewRequest;
                fromJSON(object: any): _966.UpdateViewRequest;
                toJSON(message: _966.UpdateViewRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _966.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _966.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.GetViewRequest;
                fromJSON(object: any): _966.GetViewRequest;
                toJSON(message: _966.GetViewRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _966.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _966.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.DeleteViewRequest;
                fromJSON(object: any): _966.DeleteViewRequest;
                toJSON(message: _966.DeleteViewRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _966.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _966.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListSinksRequest;
                fromJSON(object: any): _966.ListSinksRequest;
                toJSON(message: _966.ListSinksRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _966.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _966.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListSinksResponse;
                fromJSON(object: any): _966.ListSinksResponse;
                toJSON(message: _966.ListSinksResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _966.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _966.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.GetSinkRequest;
                fromJSON(object: any): _966.GetSinkRequest;
                toJSON(message: _966.GetSinkRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _966.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _966.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CreateSinkRequest;
                fromJSON(object: any): _966.CreateSinkRequest;
                toJSON(message: _966.CreateSinkRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _966.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _966.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.UpdateSinkRequest;
                fromJSON(object: any): _966.UpdateSinkRequest;
                toJSON(message: _966.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _966.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _966.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.DeleteSinkRequest;
                fromJSON(object: any): _966.DeleteSinkRequest;
                toJSON(message: _966.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _966.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _966.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.LogExclusion;
                fromJSON(object: any): _966.LogExclusion;
                toJSON(message: _966.LogExclusion): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _966.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _966.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListExclusionsRequest;
                fromJSON(object: any): _966.ListExclusionsRequest;
                toJSON(message: _966.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _966.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _966.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.ListExclusionsResponse;
                fromJSON(object: any): _966.ListExclusionsResponse;
                toJSON(message: _966.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _966.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _966.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.GetExclusionRequest;
                fromJSON(object: any): _966.GetExclusionRequest;
                toJSON(message: _966.GetExclusionRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _966.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _966.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CreateExclusionRequest;
                fromJSON(object: any): _966.CreateExclusionRequest;
                toJSON(message: _966.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _966.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _966.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.UpdateExclusionRequest;
                fromJSON(object: any): _966.UpdateExclusionRequest;
                toJSON(message: _966.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _966.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _966.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.DeleteExclusionRequest;
                fromJSON(object: any): _966.DeleteExclusionRequest;
                toJSON(message: _966.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _966.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _966.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.GetCmekSettingsRequest;
                fromJSON(object: any): _966.GetCmekSettingsRequest;
                toJSON(message: _966.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _966.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _966.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.UpdateCmekSettingsRequest;
                fromJSON(object: any): _966.UpdateCmekSettingsRequest;
                toJSON(message: _966.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _966.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _966.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CmekSettings;
                fromJSON(object: any): _966.CmekSettings;
                toJSON(message: _966.CmekSettings): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _966.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _966.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.GetSettingsRequest;
                fromJSON(object: any): _966.GetSettingsRequest;
                toJSON(message: _966.GetSettingsRequest): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _966.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _966.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.UpdateSettingsRequest;
                fromJSON(object: any): _966.UpdateSettingsRequest;
                toJSON(message: _966.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _966.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _966.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.Settings;
                fromJSON(object: any): _966.Settings;
                toJSON(message: _966.Settings): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _966.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _966.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CopyLogEntriesRequest;
                fromJSON(object: any): _966.CopyLogEntriesRequest;
                toJSON(message: _966.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _966.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _966.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CopyLogEntriesMetadata;
                fromJSON(object: any): _966.CopyLogEntriesMetadata;
                toJSON(message: _966.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _966.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _966.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _966.CopyLogEntriesResponse;
                fromJSON(object: any): _966.CopyLogEntriesResponse;
                toJSON(message: _966.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _966.CopyLogEntriesResponse;
            };
            ConfigServiceV2ClientImpl: typeof _966.ConfigServiceV2ClientImpl;
            LogEntry: {
                encode(message: _964.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _964.LogEntry;
                fromJSON(object: any): _964.LogEntry;
                toJSON(message: _964.LogEntry): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _964.LogEntry;
            };
            LogEntry_LabelsEntry: {
                encode(message: _964.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _964.LogEntry_LabelsEntry;
                fromJSON(object: any): _964.LogEntry_LabelsEntry;
                toJSON(message: _964.LogEntry_LabelsEntry): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _964.LogEntry_LabelsEntry;
            };
            LogEntryOperation: {
                encode(message: _964.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _964.LogEntryOperation;
                fromJSON(object: any): _964.LogEntryOperation;
                toJSON(message: _964.LogEntryOperation): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _964.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _964.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _964.LogEntrySourceLocation;
                fromJSON(object: any): _964.LogEntrySourceLocation;
                toJSON(message: _964.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _964.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _964.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _964.LogSplit;
                fromJSON(object: any): _964.LogSplit;
                toJSON(message: _964.LogSplit): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _964.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _972.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.Operation;
            fromJSON(object: any): _972.Operation;
            toJSON(message: _972.Operation): unknown;
            fromPartial<I extends unknown>(object: I): _972.Operation;
        };
        GetOperationRequest: {
            encode(message: _972.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.GetOperationRequest;
            fromJSON(object: any): _972.GetOperationRequest;
            toJSON(message: _972.GetOperationRequest): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _972.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _972.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.ListOperationsRequest;
            fromJSON(object: any): _972.ListOperationsRequest;
            toJSON(message: _972.ListOperationsRequest): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _972.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _972.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.ListOperationsResponse;
            fromJSON(object: any): _972.ListOperationsResponse;
            toJSON(message: _972.ListOperationsResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _972.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _972.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.CancelOperationRequest;
            fromJSON(object: any): _972.CancelOperationRequest;
            toJSON(message: _972.CancelOperationRequest): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _972.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _972.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.DeleteOperationRequest;
            fromJSON(object: any): _972.DeleteOperationRequest;
            toJSON(message: _972.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _972.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _972.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.WaitOperationRequest;
            fromJSON(object: any): _972.WaitOperationRequest;
            toJSON(message: _972.WaitOperationRequest): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _972.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _972.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _972.OperationInfo;
            fromJSON(object: any): _972.OperationInfo;
            toJSON(message: _972.OperationInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _972.OperationInfo;
        };
        OperationsClientImpl: typeof _972.OperationsClientImpl;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _994.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.DoubleValue;
            fromJSON(object: any): _994.DoubleValue;
            toJSON(message: _994.DoubleValue): unknown;
            fromPartial<I extends unknown>(object: I): _994.DoubleValue;
        };
        FloatValue: {
            encode(message: _994.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.FloatValue;
            fromJSON(object: any): _994.FloatValue;
            toJSON(message: _994.FloatValue): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _994.FloatValue;
        };
        Int64Value: {
            encode(message: _994.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.Int64Value;
            fromJSON(object: any): _994.Int64Value;
            toJSON(message: _994.Int64Value): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _994.Int64Value;
        };
        UInt64Value: {
            encode(message: _994.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.UInt64Value;
            fromJSON(object: any): _994.UInt64Value;
            toJSON(message: _994.UInt64Value): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _994.UInt64Value;
        };
        Int32Value: {
            encode(message: _994.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.Int32Value;
            fromJSON(object: any): _994.Int32Value;
            toJSON(message: _994.Int32Value): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _994.Int32Value;
        };
        UInt32Value: {
            encode(message: _994.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.UInt32Value;
            fromJSON(object: any): _994.UInt32Value;
            toJSON(message: _994.UInt32Value): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _994.UInt32Value;
        };
        BoolValue: {
            encode(message: _994.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.BoolValue;
            fromJSON(object: any): _994.BoolValue;
            toJSON(message: _994.BoolValue): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _994.BoolValue;
        };
        StringValue: {
            encode(message: _994.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.StringValue;
            fromJSON(object: any): _994.StringValue;
            toJSON(message: _994.StringValue): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _994.StringValue;
        };
        BytesValue: {
            encode(message: _994.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _994.BytesValue;
            fromJSON(object: any): _994.BytesValue;
            toJSON(message: _994.BytesValue): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _994.BytesValue;
        };
        syntaxFromJSON(object: any): _992.Syntax;
        syntaxToJSON(object: _992.Syntax): string;
        field_KindFromJSON(object: any): _992.Field_Kind;
        field_KindToJSON(object: _992.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _992.Field_Cardinality;
        field_CardinalityToJSON(object: _992.Field_Cardinality): string;
        Syntax: typeof _992.Syntax;
        Type: {
            encode(message: _992.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _992.Type;
            fromJSON(object: any): _992.Type;
            toJSON(message: _992.Type): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _992.Type;
        };
        Field: {
            encode(message: _992.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _992.Field;
            fromJSON(object: any): _992.Field;
            toJSON(message: _992.Field): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _992.Field;
        };
        Field_Kind: typeof _992.Field_Kind;
        Field_Cardinality: typeof _992.Field_Cardinality;
        Enum: {
            encode(message: _992.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _992.Enum;
            fromJSON(object: any): _992.Enum;
            toJSON(message: _992.Enum): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _992.Enum;
        };
        EnumValue: {
            encode(message: _992.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _992.EnumValue;
            fromJSON(object: any): _992.EnumValue;
            toJSON(message: _992.EnumValue): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _992.EnumValue;
        };
        Option: {
            encode(message: _992.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _992.Option;
            fromJSON(object: any): _992.Option;
            toJSON(message: _992.Option): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _992.Option;
        };
        Timestamp: {
            encode(message: _990.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _990.Timestamp;
            fromJSON(object: any): _990.Timestamp;
            toJSON(message: _990.Timestamp): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _990.Timestamp;
        };
        nullValueFromJSON(object: any): _988.NullValue;
        nullValueToJSON(object: _988.NullValue): string;
        NullValue: typeof _988.NullValue;
        Struct: {
            encode(message: _988.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _988.Struct;
            fromJSON(object: any): _988.Struct;
            toJSON(message: _988.Struct): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _988.Struct;
            wrap(object: {
                [key: string]: any;
            }): _988.Struct;
            unwrap(message: _988.Struct): {
                [key: string]: any;
            };
        };
        Struct_FieldsEntry: {
            encode(message: _988.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _988.Struct_FieldsEntry;
            fromJSON(object: any): _988.Struct_FieldsEntry;
            toJSON(message: _988.Struct_FieldsEntry): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _988.Struct_FieldsEntry;
        };
        Value: {
            encode(message: _988.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _988.Value;
            fromJSON(object: any): _988.Value;
            toJSON(message: _988.Value): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _988.Value;
            wrap(value: any): _988.Value;
            unwrap(message: _988.Value): string | number | boolean | Object | any[];
        };
        ListValue: {
            encode(message: _988.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _988.ListValue;
            fromJSON(object: any): _988.ListValue;
            toJSON(message: _988.ListValue): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _988.ListValue;
            wrap(value: any[]): _988.ListValue;
            unwrap(message: _988.ListValue): any[];
        };
        SourceContext: {
            encode(message: _986.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _986.SourceContext;
            fromJSON(object: any): _986.SourceContext;
            toJSON(message: _986.SourceContext): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _986.SourceContext;
        };
        FieldMask: {
            encode(message: _984.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _984.FieldMask;
            fromJSON(object: any): _984.FieldMask;
            toJSON(message: _984.FieldMask): string;
            fromPartial<I_20 extends unknown>(object: I_20): _984.FieldMask;
            wrap(paths: string[]): _984.FieldMask;
            unwrap(message: _984.FieldMask): string[];
        };
        Empty: {
            encode(_: _982.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _982.Empty;
            fromJSON(_: any): _982.Empty;
            toJSON(_: _982.Empty): unknown;
            fromPartial<I_21 extends unknown>(_: I_21): _982.Empty;
        };
        Duration: {
            encode(message: _980.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _980.Duration;
            fromJSON(object: any): _980.Duration;
            toJSON(message: _980.Duration): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _980.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _978.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _978.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _978.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _978.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _978.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _978.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _978.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _978.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _978.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _978.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _978.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _978.MethodOptions_IdempotencyLevel): string;
        FileDescriptorSet: {
            encode(message: _978.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.FileDescriptorSet;
            fromJSON(object: any): _978.FileDescriptorSet;
            toJSON(message: _978.FileDescriptorSet): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _978.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _978.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.FileDescriptorProto;
            fromJSON(object: any): _978.FileDescriptorProto;
            toJSON(message: _978.FileDescriptorProto): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _978.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _978.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.DescriptorProto;
            fromJSON(object: any): _978.DescriptorProto;
            toJSON(message: _978.DescriptorProto): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _978.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _978.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _978.DescriptorProto_ExtensionRange;
            toJSON(message: _978.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _978.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _978.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.DescriptorProto_ReservedRange;
            fromJSON(object: any): _978.DescriptorProto_ReservedRange;
            toJSON(message: _978.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _978.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _978.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ExtensionRangeOptions;
            fromJSON(object: any): _978.ExtensionRangeOptions;
            toJSON(message: _978.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _978.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _978.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.FieldDescriptorProto;
            fromJSON(object: any): _978.FieldDescriptorProto;
            toJSON(message: _978.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _978.FieldDescriptorProto;
        };
        FieldDescriptorProto_Type: typeof _978.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _978.FieldDescriptorProto_Label;
        OneofDescriptorProto: {
            encode(message: _978.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.OneofDescriptorProto;
            fromJSON(object: any): _978.OneofDescriptorProto;
            toJSON(message: _978.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _978.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _978.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.EnumDescriptorProto;
            fromJSON(object: any): _978.EnumDescriptorProto;
            toJSON(message: _978.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _978.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _978.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _978.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _978.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _978.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _978.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.EnumValueDescriptorProto;
            fromJSON(object: any): _978.EnumValueDescriptorProto;
            toJSON(message: _978.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _978.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _978.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ServiceDescriptorProto;
            fromJSON(object: any): _978.ServiceDescriptorProto;
            toJSON(message: _978.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _978.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _978.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.MethodDescriptorProto;
            fromJSON(object: any): _978.MethodDescriptorProto;
            toJSON(message: _978.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _978.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _978.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.FileOptions;
            fromJSON(object: any): _978.FileOptions;
            toJSON(message: _978.FileOptions): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _978.FileOptions;
        };
        FileOptions_OptimizeMode: typeof _978.FileOptions_OptimizeMode;
        MessageOptions: {
            encode(message: _978.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.MessageOptions;
            fromJSON(object: any): _978.MessageOptions;
            toJSON(message: _978.MessageOptions): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _978.MessageOptions;
        };
        FieldOptions: {
            encode(message: _978.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.FieldOptions;
            fromJSON(object: any): _978.FieldOptions;
            toJSON(message: _978.FieldOptions): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _978.FieldOptions;
        };
        FieldOptions_CType: typeof _978.FieldOptions_CType;
        FieldOptions_JSType: typeof _978.FieldOptions_JSType;
        OneofOptions: {
            encode(message: _978.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.OneofOptions;
            fromJSON(object: any): _978.OneofOptions;
            toJSON(message: _978.OneofOptions): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _978.OneofOptions;
        };
        EnumOptions: {
            encode(message: _978.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.EnumOptions;
            fromJSON(object: any): _978.EnumOptions;
            toJSON(message: _978.EnumOptions): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _978.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _978.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.EnumValueOptions;
            fromJSON(object: any): _978.EnumValueOptions;
            toJSON(message: _978.EnumValueOptions): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _978.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _978.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.ServiceOptions;
            fromJSON(object: any): _978.ServiceOptions;
            toJSON(message: _978.ServiceOptions): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _978.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _978.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.MethodOptions;
            fromJSON(object: any): _978.MethodOptions;
            toJSON(message: _978.MethodOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _978.MethodOptions;
        };
        MethodOptions_IdempotencyLevel: typeof _978.MethodOptions_IdempotencyLevel;
        UninterpretedOption: {
            encode(message: _978.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.UninterpretedOption;
            fromJSON(object: any): _978.UninterpretedOption;
            toJSON(message: _978.UninterpretedOption): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _978.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _978.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.UninterpretedOption_NamePart;
            fromJSON(object: any): _978.UninterpretedOption_NamePart;
            toJSON(message: _978.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _978.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _978.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.SourceCodeInfo;
            fromJSON(object: any): _978.SourceCodeInfo;
            toJSON(message: _978.SourceCodeInfo): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _978.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _978.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.SourceCodeInfo_Location;
            fromJSON(object: any): _978.SourceCodeInfo_Location;
            toJSON(message: _978.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _978.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _978.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.GeneratedCodeInfo;
            fromJSON(object: any): _978.GeneratedCodeInfo;
            toJSON(message: _978.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _978.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _978.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _978.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _978.GeneratedCodeInfo_Annotation;
            toJSON(message: _978.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _978.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _976.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _976.Api;
            fromJSON(object: any): _976.Api;
            toJSON(message: _976.Api): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _976.Api;
        };
        Method: {
            encode(message: _976.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _976.Method;
            fromJSON(object: any): _976.Method;
            toJSON(message: _976.Method): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _976.Method;
        };
        Mixin: {
            encode(message: _976.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _976.Mixin;
            fromJSON(object: any): _976.Mixin;
            toJSON(message: _976.Mixin): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _976.Mixin;
        };
        Any: {
            encode(message: _974.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _974.Any;
            fromJSON(object: any): _974.Any;
            toJSON(message: _974.Any): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _974.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _1000.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1000.Status;
            fromJSON(object: any): _1000.Status;
            toJSON(message: _1000.Status): unknown;
            fromPartial<I extends unknown>(object: I): _1000.Status;
        };
        RetryInfo: {
            encode(message: _998.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.RetryInfo;
            fromJSON(object: any): _998.RetryInfo;
            toJSON(message: _998.RetryInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _998.RetryInfo;
        };
        DebugInfo: {
            encode(message: _998.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.DebugInfo;
            fromJSON(object: any): _998.DebugInfo;
            toJSON(message: _998.DebugInfo): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _998.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _998.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.QuotaFailure;
            fromJSON(object: any): _998.QuotaFailure;
            toJSON(message: _998.QuotaFailure): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _998.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _998.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.QuotaFailure_Violation;
            fromJSON(object: any): _998.QuotaFailure_Violation;
            toJSON(message: _998.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _998.QuotaFailure_Violation;
        };
        ErrorInfo: {
            encode(message: _998.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.ErrorInfo;
            fromJSON(object: any): _998.ErrorInfo;
            toJSON(message: _998.ErrorInfo): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _998.ErrorInfo;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _998.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _998.ErrorInfo_MetadataEntry;
            toJSON(message: _998.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _998.ErrorInfo_MetadataEntry;
        };
        PreconditionFailure: {
            encode(message: _998.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.PreconditionFailure;
            fromJSON(object: any): _998.PreconditionFailure;
            toJSON(message: _998.PreconditionFailure): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _998.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _998.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.PreconditionFailure_Violation;
            fromJSON(object: any): _998.PreconditionFailure_Violation;
            toJSON(message: _998.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _998.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _998.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.BadRequest;
            fromJSON(object: any): _998.BadRequest;
            toJSON(message: _998.BadRequest): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _998.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _998.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.BadRequest_FieldViolation;
            fromJSON(object: any): _998.BadRequest_FieldViolation;
            toJSON(message: _998.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _998.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _998.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.RequestInfo;
            fromJSON(object: any): _998.RequestInfo;
            toJSON(message: _998.RequestInfo): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _998.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _998.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.ResourceInfo;
            fromJSON(object: any): _998.ResourceInfo;
            toJSON(message: _998.ResourceInfo): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _998.ResourceInfo;
        };
        Help: {
            encode(message: _998.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.Help;
            fromJSON(object: any): _998.Help;
            toJSON(message: _998.Help): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _998.Help;
        };
        Help_Link: {
            encode(message: _998.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.Help_Link;
            fromJSON(object: any): _998.Help_Link;
            toJSON(message: _998.Help_Link): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _998.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _998.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _998.LocalizedMessage;
            fromJSON(object: any): _998.LocalizedMessage;
            toJSON(message: _998.LocalizedMessage): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _998.LocalizedMessage;
        };
        codeFromJSON(object: any): _996.Code;
        codeToJSON(object: _996.Code): string;
        Code: typeof _996.Code;
    };
}
