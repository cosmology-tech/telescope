import * as _786 from "./api/auth";
import * as _788 from "./api/backend";
import * as _790 from "./api/billing";
import * as _794 from "./api/config_change";
import * as _796 from "./api/consumer";
import * as _798 from "./api/context";
import * as _800 from "./api/control";
import * as _802 from "./api/distribution";
import * as _804 from "./api/documentation";
import * as _806 from "./api/endpoint";
import * as _808 from "./api/error_reason";
import * as _810 from "./api/field_behavior";
import * as _812 from "./api/http";
import * as _814 from "./api/httpbody";
import * as _816 from "./api/label";
import * as _818 from "./api/launch_stage";
import * as _820 from "./api/log";
import * as _822 from "./api/logging";
import * as _824 from "./api/metric";
import * as _826 from "./api/monitored_resource";
import * as _828 from "./api/monitoring";
import * as _830 from "./api/quota";
import * as _832 from "./api/resource";
import * as _834 from "./api/routing";
import * as _836 from "./api/service";
import * as _838 from "./api/source_info";
import * as _840 from "./api/system_parameter";
import * as _842 from "./api/usage";
import * as _844 from "./api/visibility";
import * as _846 from "./logging/type/http_request";
import * as _848 from "./logging/type/log_severity";
import * as _850 from "./logging/v2/log_entry";
import * as _852 from "./logging/v2/logging_config";
import * as _854 from "./logging/v2/logging_metrics";
import * as _856 from "./logging/v2/logging";
import * as _858 from "./longrunning/operations";
import * as _860 from "./protobuf/any";
import * as _862 from "./protobuf/api";
import * as _864 from "./protobuf/descriptor";
import * as _866 from "./protobuf/duration";
import * as _868 from "./protobuf/empty";
import * as _870 from "./protobuf/field_mask";
import * as _872 from "./protobuf/source_context";
import * as _874 from "./protobuf/struct";
import * as _876 from "./protobuf/timestamp";
import * as _878 from "./protobuf/type";
import * as _880 from "./protobuf/wrappers";
import * as _882 from "./rpc/code";
import * as _884 from "./rpc/error_details";
import * as _886 from "./rpc/status";
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _844.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _844.Visibility;
            fromJSON(object: any): _844.Visibility;
            toJSON(message: _844.Visibility): unknown;
            fromPartial<I extends unknown>(object: I): _844.Visibility;
        };
        VisibilityRule: {
            encode(message: _844.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _844.VisibilityRule;
            fromJSON(object: any): _844.VisibilityRule;
            toJSON(message: _844.VisibilityRule): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _844.VisibilityRule;
        };
        Usage: {
            encode(message: _842.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.Usage;
            fromJSON(object: any): _842.Usage;
            toJSON(message: _842.Usage): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _842.Usage;
        };
        UsageRule: {
            encode(message: _842.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _842.UsageRule;
            fromJSON(object: any): _842.UsageRule;
            toJSON(message: _842.UsageRule): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _842.UsageRule;
        };
        SystemParameters: {
            encode(message: _840.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.SystemParameters;
            fromJSON(object: any): _840.SystemParameters;
            toJSON(message: _840.SystemParameters): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _840.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _840.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.SystemParameterRule;
            fromJSON(object: any): _840.SystemParameterRule;
            toJSON(message: _840.SystemParameterRule): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _840.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _840.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _840.SystemParameter;
            fromJSON(object: any): _840.SystemParameter;
            toJSON(message: _840.SystemParameter): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _840.SystemParameter;
        };
        SourceInfo: {
            encode(message: _838.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _838.SourceInfo;
            fromJSON(object: any): _838.SourceInfo;
            toJSON(message: _838.SourceInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _838.SourceInfo;
        };
        Service: {
            encode(message: _836.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _836.Service;
            fromJSON(object: any): _836.Service;
            toJSON(message: _836.Service): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _836.Service;
        };
        RoutingRule: {
            encode(message: _834.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.RoutingRule;
            fromJSON(object: any): _834.RoutingRule;
            toJSON(message: _834.RoutingRule): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _834.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _834.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.RoutingParameter;
            fromJSON(object: any): _834.RoutingParameter;
            toJSON(message: _834.RoutingParameter): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _834.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _832.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _832.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _832.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _832.ResourceDescriptor_Style): string;
        ResourceDescriptor: {
            encode(message: _832.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.ResourceDescriptor;
            fromJSON(object: any): _832.ResourceDescriptor;
            toJSON(message: _832.ResourceDescriptor): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _832.ResourceDescriptor;
        };
        ResourceDescriptor_History: typeof _832.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _832.ResourceDescriptor_Style;
        ResourceReference: {
            encode(message: _832.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.ResourceReference;
            fromJSON(object: any): _832.ResourceReference;
            toJSON(message: _832.ResourceReference): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _832.ResourceReference;
        };
        Quota: {
            encode(message: _830.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _830.Quota;
            fromJSON(object: any): _830.Quota;
            toJSON(message: _830.Quota): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _830.Quota;
        };
        MetricRule: {
            encode(message: _830.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _830.MetricRule;
            fromJSON(object: any): _830.MetricRule;
            toJSON(message: _830.MetricRule): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _830.MetricRule;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _830.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _830.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _830.MetricRule_MetricCostsEntry;
            toJSON(message: _830.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _830.MetricRule_MetricCostsEntry;
        };
        QuotaLimit: {
            encode(message: _830.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _830.QuotaLimit;
            fromJSON(object: any): _830.QuotaLimit;
            toJSON(message: _830.QuotaLimit): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _830.QuotaLimit;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _830.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _830.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _830.QuotaLimit_ValuesEntry;
            toJSON(message: _830.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _830.QuotaLimit_ValuesEntry;
        };
        Monitoring: {
            encode(message: _828.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _828.Monitoring;
            fromJSON(object: any): _828.Monitoring;
            toJSON(message: _828.Monitoring): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _828.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _828.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _828.Monitoring_MonitoringDestination;
            fromJSON(object: any): _828.Monitoring_MonitoringDestination;
            toJSON(message: _828.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _828.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _826.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.MonitoredResourceDescriptor;
            fromJSON(object: any): _826.MonitoredResourceDescriptor;
            toJSON(message: _826.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _826.MonitoredResourceDescriptor;
        };
        MonitoredResource: {
            encode(message: _826.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.MonitoredResource;
            fromJSON(object: any): _826.MonitoredResource;
            toJSON(message: _826.MonitoredResource): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _826.MonitoredResource;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _826.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _826.MonitoredResource_LabelsEntry;
            toJSON(message: _826.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _826.MonitoredResource_LabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _826.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.MonitoredResourceMetadata;
            fromJSON(object: any): _826.MonitoredResourceMetadata;
            toJSON(message: _826.MonitoredResourceMetadata): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _826.MonitoredResourceMetadata;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _826.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _826.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _826.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _826.MonitoredResourceMetadata_UserLabelsEntry;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _824.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _824.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _824.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _824.MetricDescriptor_ValueType): string;
        MetricDescriptor: {
            encode(message: _824.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.MetricDescriptor;
            fromJSON(object: any): _824.MetricDescriptor;
            toJSON(message: _824.MetricDescriptor): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _824.MetricDescriptor;
        };
        MetricDescriptor_MetricKind: typeof _824.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _824.MetricDescriptor_ValueType;
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _824.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _824.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _824.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _824.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric: {
            encode(message: _824.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Metric;
            fromJSON(object: any): _824.Metric;
            toJSON(message: _824.Metric): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _824.Metric;
        };
        Metric_LabelsEntry: {
            encode(message: _824.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _824.Metric_LabelsEntry;
            fromJSON(object: any): _824.Metric_LabelsEntry;
            toJSON(message: _824.Metric_LabelsEntry): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _824.Metric_LabelsEntry;
        };
        Logging: {
            encode(message: _822.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.Logging;
            fromJSON(object: any): _822.Logging;
            toJSON(message: _822.Logging): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _822.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _822.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _822.Logging_LoggingDestination;
            fromJSON(object: any): _822.Logging_LoggingDestination;
            toJSON(message: _822.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _822.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _820.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _820.LogDescriptor;
            fromJSON(object: any): _820.LogDescriptor;
            toJSON(message: _820.LogDescriptor): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _820.LogDescriptor;
        };
        launchStageFromJSON(object: any): _818.LaunchStage;
        launchStageToJSON(object: _818.LaunchStage): string;
        LaunchStage: typeof _818.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _816.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _816.LabelDescriptor_ValueType): string;
        LabelDescriptor: {
            encode(message: _816.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _816.LabelDescriptor;
            fromJSON(object: any): _816.LabelDescriptor;
            toJSON(message: _816.LabelDescriptor): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _816.LabelDescriptor;
        };
        LabelDescriptor_ValueType: typeof _816.LabelDescriptor_ValueType;
        HttpBody: {
            encode(message: _814.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _814.HttpBody;
            fromJSON(object: any): _814.HttpBody;
            toJSON(message: _814.HttpBody): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _814.HttpBody;
        };
        Http: {
            encode(message: _812.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.Http;
            fromJSON(object: any): _812.Http;
            toJSON(message: _812.Http): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _812.Http;
        };
        HttpRule: {
            encode(message: _812.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.HttpRule;
            fromJSON(object: any): _812.HttpRule;
            toJSON(message: _812.HttpRule): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _812.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _812.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _812.CustomHttpPattern;
            fromJSON(object: any): _812.CustomHttpPattern;
            toJSON(message: _812.CustomHttpPattern): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _812.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _810.FieldBehavior;
        fieldBehaviorToJSON(object: _810.FieldBehavior): string;
        FieldBehavior: typeof _810.FieldBehavior;
        errorReasonFromJSON(object: any): _808.ErrorReason;
        errorReasonToJSON(object: _808.ErrorReason): string;
        ErrorReason: typeof _808.ErrorReason;
        Endpoint: {
            encode(message: _806.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _806.Endpoint;
            fromJSON(object: any): _806.Endpoint;
            toJSON(message: _806.Endpoint): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _806.Endpoint;
        };
        Documentation: {
            encode(message: _804.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _804.Documentation;
            fromJSON(object: any): _804.Documentation;
            toJSON(message: _804.Documentation): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _804.Documentation;
        };
        DocumentationRule: {
            encode(message: _804.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _804.DocumentationRule;
            fromJSON(object: any): _804.DocumentationRule;
            toJSON(message: _804.DocumentationRule): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _804.DocumentationRule;
        };
        Page: {
            encode(message: _804.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _804.Page;
            fromJSON(object: any): _804.Page;
            toJSON(message: _804.Page): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _804.Page;
        };
        Distribution: {
            encode(message: _802.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.Distribution;
            fromJSON(object: any): _802.Distribution;
            toJSON(message: _802.Distribution): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _802.Distribution;
        };
        Distribution_Range: {
            encode(message: _802.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.Distribution_Range;
            fromJSON(object: any): _802.Distribution_Range;
            toJSON(message: _802.Distribution_Range): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _802.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _802.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.Distribution_BucketOptions;
            fromJSON(object: any): _802.Distribution_BucketOptions;
            toJSON(message: _802.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _802.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _802.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _802.Distribution_BucketOptions_Linear;
            toJSON(message: _802.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _802.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _802.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _802.Distribution_BucketOptions_Exponential;
            toJSON(message: _802.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _802.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _802.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _802.Distribution_BucketOptions_Explicit;
            toJSON(message: _802.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _802.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _802.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _802.Distribution_Exemplar;
            fromJSON(object: any): _802.Distribution_Exemplar;
            toJSON(message: _802.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _802.Distribution_Exemplar;
        };
        Control: {
            encode(message: _800.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _800.Control;
            fromJSON(object: any): _800.Control;
            toJSON(message: _800.Control): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _800.Control;
        };
        Context: {
            encode(message: _798.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _798.Context;
            fromJSON(object: any): _798.Context;
            toJSON(message: _798.Context): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _798.Context;
        };
        ContextRule: {
            encode(message: _798.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _798.ContextRule;
            fromJSON(object: any): _798.ContextRule;
            toJSON(message: _798.ContextRule): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _798.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _796.Property_PropertyType;
        property_PropertyTypeToJSON(object: _796.Property_PropertyType): string;
        ProjectProperties: {
            encode(message: _796.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.ProjectProperties;
            fromJSON(object: any): _796.ProjectProperties;
            toJSON(message: _796.ProjectProperties): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _796.ProjectProperties;
        };
        Property: {
            encode(message: _796.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _796.Property;
            fromJSON(object: any): _796.Property;
            toJSON(message: _796.Property): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _796.Property;
        };
        Property_PropertyType: typeof _796.Property_PropertyType;
        changeTypeFromJSON(object: any): _794.ChangeType;
        changeTypeToJSON(object: _794.ChangeType): string;
        ChangeType: typeof _794.ChangeType;
        ConfigChange: {
            encode(message: _794.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _794.ConfigChange;
            fromJSON(object: any): _794.ConfigChange;
            toJSON(message: _794.ConfigChange): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _794.ConfigChange;
        };
        Advice: {
            encode(message: _794.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _794.Advice;
            fromJSON(object: any): _794.Advice;
            toJSON(message: _794.Advice): unknown;
            fromPartial<I_54 extends unknown>(object: I_54): _794.Advice;
        };
        Billing: {
            encode(message: _790.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.Billing;
            fromJSON(object: any): _790.Billing;
            toJSON(message: _790.Billing): unknown;
            fromPartial<I_55 extends unknown>(object: I_55): _790.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _790.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _790.Billing_BillingDestination;
            fromJSON(object: any): _790.Billing_BillingDestination;
            toJSON(message: _790.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends unknown>(object: I_56): _790.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _788.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _788.BackendRule_PathTranslation): string;
        Backend: {
            encode(message: _788.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _788.Backend;
            fromJSON(object: any): _788.Backend;
            toJSON(message: _788.Backend): unknown;
            fromPartial<I_57 extends unknown>(object: I_57): _788.Backend;
        };
        BackendRule: {
            encode(message: _788.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _788.BackendRule;
            fromJSON(object: any): _788.BackendRule;
            toJSON(message: _788.BackendRule): unknown;
            fromPartial<I_58 extends unknown>(object: I_58): _788.BackendRule;
        };
        BackendRule_PathTranslation: typeof _788.BackendRule_PathTranslation;
        Authentication: {
            encode(message: _786.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.Authentication;
            fromJSON(object: any): _786.Authentication;
            toJSON(message: _786.Authentication): unknown;
            fromPartial<I_59 extends unknown>(object: I_59): _786.Authentication;
        };
        AuthenticationRule: {
            encode(message: _786.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.AuthenticationRule;
            fromJSON(object: any): _786.AuthenticationRule;
            toJSON(message: _786.AuthenticationRule): unknown;
            fromPartial<I_60 extends unknown>(object: I_60): _786.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _786.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.JwtLocation;
            fromJSON(object: any): _786.JwtLocation;
            toJSON(message: _786.JwtLocation): unknown;
            fromPartial<I_61 extends unknown>(object: I_61): _786.JwtLocation;
        };
        AuthProvider: {
            encode(message: _786.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.AuthProvider;
            fromJSON(object: any): _786.AuthProvider;
            toJSON(message: _786.AuthProvider): unknown;
            fromPartial<I_62 extends unknown>(object: I_62): _786.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _786.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.OAuthRequirements;
            fromJSON(object: any): _786.OAuthRequirements;
            toJSON(message: _786.OAuthRequirements): unknown;
            fromPartial<I_63 extends unknown>(object: I_63): _786.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _786.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _786.AuthRequirement;
            fromJSON(object: any): _786.AuthRequirement;
            toJSON(message: _786.AuthRequirement): unknown;
            fromPartial<I_64 extends unknown>(object: I_64): _786.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _848.LogSeverity;
            logSeverityToJSON(object: _848.LogSeverity): string;
            LogSeverity: typeof _848.LogSeverity;
            HttpRequest: {
                encode(message: _846.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _846.HttpRequest;
                fromJSON(object: any): _846.HttpRequest;
                toJSON(message: _846.HttpRequest): unknown;
                fromPartial<I extends unknown>(object: I): _846.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _856.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _856.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            DeleteLogRequest: {
                encode(message: _856.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.DeleteLogRequest;
                fromJSON(object: any): _856.DeleteLogRequest;
                toJSON(message: _856.DeleteLogRequest): unknown;
                fromPartial<I extends unknown>(object: I): _856.DeleteLogRequest;
            };
            WriteLogEntriesRequest: {
                encode(message: _856.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.WriteLogEntriesRequest;
                fromJSON(object: any): _856.WriteLogEntriesRequest;
                toJSON(message: _856.WriteLogEntriesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _856.WriteLogEntriesRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _856.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _856.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _856.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _856.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesResponse: {
                encode(_: _856.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.WriteLogEntriesResponse;
                fromJSON(_: any): _856.WriteLogEntriesResponse;
                toJSON(_: _856.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _856.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _856.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _856.WriteLogEntriesPartialErrors;
                toJSON(message: _856.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _856.WriteLogEntriesPartialErrors;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _856.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _856.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _856.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _856.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            ListLogEntriesRequest: {
                encode(message: _856.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.ListLogEntriesRequest;
                fromJSON(object: any): _856.ListLogEntriesRequest;
                toJSON(message: _856.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _856.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _856.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.ListLogEntriesResponse;
                fromJSON(object: any): _856.ListLogEntriesResponse;
                toJSON(message: _856.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _856.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _856.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _856.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _856.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _856.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _856.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _856.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _856.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _856.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _856.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.ListLogsRequest;
                fromJSON(object: any): _856.ListLogsRequest;
                toJSON(message: _856.ListLogsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _856.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _856.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.ListLogsResponse;
                fromJSON(object: any): _856.ListLogsResponse;
                toJSON(message: _856.ListLogsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _856.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _856.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.TailLogEntriesRequest;
                fromJSON(object: any): _856.TailLogEntriesRequest;
                toJSON(message: _856.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _856.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _856.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.TailLogEntriesResponse;
                fromJSON(object: any): _856.TailLogEntriesResponse;
                toJSON(message: _856.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _856.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _856.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _856.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _856.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _856.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _856.TailLogEntriesResponse_SuppressionInfo;
            };
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _856.TailLogEntriesResponse_SuppressionInfo_Reason;
            LoggingServiceV2ClientImpl: typeof _856.LoggingServiceV2ClientImpl;
            logMetric_ApiVersionFromJSON(object: any): _854.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _854.LogMetric_ApiVersion): string;
            LogMetric: {
                encode(message: _854.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.LogMetric;
                fromJSON(object: any): _854.LogMetric;
                toJSON(message: _854.LogMetric): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _854.LogMetric;
            };
            LogMetric_ApiVersion: typeof _854.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _854.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _854.LogMetric_LabelExtractorsEntry;
                toJSON(message: _854.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _854.LogMetric_LabelExtractorsEntry;
            };
            ListLogMetricsRequest: {
                encode(message: _854.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.ListLogMetricsRequest;
                fromJSON(object: any): _854.ListLogMetricsRequest;
                toJSON(message: _854.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _854.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _854.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.ListLogMetricsResponse;
                fromJSON(object: any): _854.ListLogMetricsResponse;
                toJSON(message: _854.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _854.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _854.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.GetLogMetricRequest;
                fromJSON(object: any): _854.GetLogMetricRequest;
                toJSON(message: _854.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _854.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _854.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.CreateLogMetricRequest;
                fromJSON(object: any): _854.CreateLogMetricRequest;
                toJSON(message: _854.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _854.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _854.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.UpdateLogMetricRequest;
                fromJSON(object: any): _854.UpdateLogMetricRequest;
                toJSON(message: _854.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _854.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _854.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _854.DeleteLogMetricRequest;
                fromJSON(object: any): _854.DeleteLogMetricRequest;
                toJSON(message: _854.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _854.DeleteLogMetricRequest;
            };
            MetricsServiceV2ClientImpl: typeof _854.MetricsServiceV2ClientImpl;
            lifecycleStateFromJSON(object: any): _852.LifecycleState;
            lifecycleStateToJSON(object: _852.LifecycleState): string;
            operationStateFromJSON(object: any): _852.OperationState;
            operationStateToJSON(object: _852.OperationState): string;
            logSink_VersionFormatFromJSON(object: any): _852.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _852.LogSink_VersionFormat): string;
            LifecycleState: typeof _852.LifecycleState;
            OperationState: typeof _852.OperationState;
            LogBucket: {
                encode(message: _852.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.LogBucket;
                fromJSON(object: any): _852.LogBucket;
                toJSON(message: _852.LogBucket): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _852.LogBucket;
            };
            LogView: {
                encode(message: _852.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.LogView;
                fromJSON(object: any): _852.LogView;
                toJSON(message: _852.LogView): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _852.LogView;
            };
            LogSink: {
                encode(message: _852.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.LogSink;
                fromJSON(object: any): _852.LogSink;
                toJSON(message: _852.LogSink): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _852.LogSink;
            };
            LogSink_VersionFormat: typeof _852.LogSink_VersionFormat;
            BigQueryOptions: {
                encode(message: _852.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.BigQueryOptions;
                fromJSON(object: any): _852.BigQueryOptions;
                toJSON(message: _852.BigQueryOptions): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _852.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _852.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListBucketsRequest;
                fromJSON(object: any): _852.ListBucketsRequest;
                toJSON(message: _852.ListBucketsRequest): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _852.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _852.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListBucketsResponse;
                fromJSON(object: any): _852.ListBucketsResponse;
                toJSON(message: _852.ListBucketsResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _852.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _852.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CreateBucketRequest;
                fromJSON(object: any): _852.CreateBucketRequest;
                toJSON(message: _852.CreateBucketRequest): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _852.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _852.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.UpdateBucketRequest;
                fromJSON(object: any): _852.UpdateBucketRequest;
                toJSON(message: _852.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _852.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _852.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetBucketRequest;
                fromJSON(object: any): _852.GetBucketRequest;
                toJSON(message: _852.GetBucketRequest): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _852.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _852.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.DeleteBucketRequest;
                fromJSON(object: any): _852.DeleteBucketRequest;
                toJSON(message: _852.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _852.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _852.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.UndeleteBucketRequest;
                fromJSON(object: any): _852.UndeleteBucketRequest;
                toJSON(message: _852.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _852.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _852.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListViewsRequest;
                fromJSON(object: any): _852.ListViewsRequest;
                toJSON(message: _852.ListViewsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _852.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _852.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListViewsResponse;
                fromJSON(object: any): _852.ListViewsResponse;
                toJSON(message: _852.ListViewsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _852.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _852.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CreateViewRequest;
                fromJSON(object: any): _852.CreateViewRequest;
                toJSON(message: _852.CreateViewRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _852.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _852.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.UpdateViewRequest;
                fromJSON(object: any): _852.UpdateViewRequest;
                toJSON(message: _852.UpdateViewRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _852.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _852.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetViewRequest;
                fromJSON(object: any): _852.GetViewRequest;
                toJSON(message: _852.GetViewRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _852.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _852.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.DeleteViewRequest;
                fromJSON(object: any): _852.DeleteViewRequest;
                toJSON(message: _852.DeleteViewRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _852.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _852.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListSinksRequest;
                fromJSON(object: any): _852.ListSinksRequest;
                toJSON(message: _852.ListSinksRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _852.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _852.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListSinksResponse;
                fromJSON(object: any): _852.ListSinksResponse;
                toJSON(message: _852.ListSinksResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _852.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _852.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetSinkRequest;
                fromJSON(object: any): _852.GetSinkRequest;
                toJSON(message: _852.GetSinkRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _852.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _852.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CreateSinkRequest;
                fromJSON(object: any): _852.CreateSinkRequest;
                toJSON(message: _852.CreateSinkRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _852.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _852.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.UpdateSinkRequest;
                fromJSON(object: any): _852.UpdateSinkRequest;
                toJSON(message: _852.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _852.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _852.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.DeleteSinkRequest;
                fromJSON(object: any): _852.DeleteSinkRequest;
                toJSON(message: _852.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _852.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _852.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.LogExclusion;
                fromJSON(object: any): _852.LogExclusion;
                toJSON(message: _852.LogExclusion): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _852.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _852.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListExclusionsRequest;
                fromJSON(object: any): _852.ListExclusionsRequest;
                toJSON(message: _852.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _852.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _852.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.ListExclusionsResponse;
                fromJSON(object: any): _852.ListExclusionsResponse;
                toJSON(message: _852.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _852.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _852.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetExclusionRequest;
                fromJSON(object: any): _852.GetExclusionRequest;
                toJSON(message: _852.GetExclusionRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _852.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _852.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CreateExclusionRequest;
                fromJSON(object: any): _852.CreateExclusionRequest;
                toJSON(message: _852.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _852.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _852.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.UpdateExclusionRequest;
                fromJSON(object: any): _852.UpdateExclusionRequest;
                toJSON(message: _852.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _852.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _852.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.DeleteExclusionRequest;
                fromJSON(object: any): _852.DeleteExclusionRequest;
                toJSON(message: _852.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _852.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _852.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetCmekSettingsRequest;
                fromJSON(object: any): _852.GetCmekSettingsRequest;
                toJSON(message: _852.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _852.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _852.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.UpdateCmekSettingsRequest;
                fromJSON(object: any): _852.UpdateCmekSettingsRequest;
                toJSON(message: _852.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _852.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _852.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CmekSettings;
                fromJSON(object: any): _852.CmekSettings;
                toJSON(message: _852.CmekSettings): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _852.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _852.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.GetSettingsRequest;
                fromJSON(object: any): _852.GetSettingsRequest;
                toJSON(message: _852.GetSettingsRequest): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _852.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _852.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.UpdateSettingsRequest;
                fromJSON(object: any): _852.UpdateSettingsRequest;
                toJSON(message: _852.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _852.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _852.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.Settings;
                fromJSON(object: any): _852.Settings;
                toJSON(message: _852.Settings): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _852.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _852.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CopyLogEntriesRequest;
                fromJSON(object: any): _852.CopyLogEntriesRequest;
                toJSON(message: _852.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _852.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _852.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CopyLogEntriesMetadata;
                fromJSON(object: any): _852.CopyLogEntriesMetadata;
                toJSON(message: _852.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _852.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _852.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _852.CopyLogEntriesResponse;
                fromJSON(object: any): _852.CopyLogEntriesResponse;
                toJSON(message: _852.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _852.CopyLogEntriesResponse;
            };
            ConfigServiceV2ClientImpl: typeof _852.ConfigServiceV2ClientImpl;
            LogEntry: {
                encode(message: _850.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.LogEntry;
                fromJSON(object: any): _850.LogEntry;
                toJSON(message: _850.LogEntry): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _850.LogEntry;
            };
            LogEntry_LabelsEntry: {
                encode(message: _850.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.LogEntry_LabelsEntry;
                fromJSON(object: any): _850.LogEntry_LabelsEntry;
                toJSON(message: _850.LogEntry_LabelsEntry): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _850.LogEntry_LabelsEntry;
            };
            LogEntryOperation: {
                encode(message: _850.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.LogEntryOperation;
                fromJSON(object: any): _850.LogEntryOperation;
                toJSON(message: _850.LogEntryOperation): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _850.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _850.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.LogEntrySourceLocation;
                fromJSON(object: any): _850.LogEntrySourceLocation;
                toJSON(message: _850.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _850.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _850.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _850.LogSplit;
                fromJSON(object: any): _850.LogSplit;
                toJSON(message: _850.LogSplit): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _850.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _858.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.Operation;
            fromJSON(object: any): _858.Operation;
            toJSON(message: _858.Operation): unknown;
            fromPartial<I extends unknown>(object: I): _858.Operation;
        };
        GetOperationRequest: {
            encode(message: _858.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.GetOperationRequest;
            fromJSON(object: any): _858.GetOperationRequest;
            toJSON(message: _858.GetOperationRequest): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _858.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _858.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.ListOperationsRequest;
            fromJSON(object: any): _858.ListOperationsRequest;
            toJSON(message: _858.ListOperationsRequest): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _858.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _858.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.ListOperationsResponse;
            fromJSON(object: any): _858.ListOperationsResponse;
            toJSON(message: _858.ListOperationsResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _858.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _858.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.CancelOperationRequest;
            fromJSON(object: any): _858.CancelOperationRequest;
            toJSON(message: _858.CancelOperationRequest): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _858.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _858.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.DeleteOperationRequest;
            fromJSON(object: any): _858.DeleteOperationRequest;
            toJSON(message: _858.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _858.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _858.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.WaitOperationRequest;
            fromJSON(object: any): _858.WaitOperationRequest;
            toJSON(message: _858.WaitOperationRequest): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _858.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _858.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _858.OperationInfo;
            fromJSON(object: any): _858.OperationInfo;
            toJSON(message: _858.OperationInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _858.OperationInfo;
        };
        OperationsClientImpl: typeof _858.OperationsClientImpl;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _880.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.DoubleValue;
            fromJSON(object: any): _880.DoubleValue;
            toJSON(message: _880.DoubleValue): unknown;
            fromPartial<I extends unknown>(object: I): _880.DoubleValue;
        };
        FloatValue: {
            encode(message: _880.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.FloatValue;
            fromJSON(object: any): _880.FloatValue;
            toJSON(message: _880.FloatValue): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _880.FloatValue;
        };
        Int64Value: {
            encode(message: _880.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.Int64Value;
            fromJSON(object: any): _880.Int64Value;
            toJSON(message: _880.Int64Value): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _880.Int64Value;
        };
        UInt64Value: {
            encode(message: _880.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.UInt64Value;
            fromJSON(object: any): _880.UInt64Value;
            toJSON(message: _880.UInt64Value): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _880.UInt64Value;
        };
        Int32Value: {
            encode(message: _880.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.Int32Value;
            fromJSON(object: any): _880.Int32Value;
            toJSON(message: _880.Int32Value): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _880.Int32Value;
        };
        UInt32Value: {
            encode(message: _880.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.UInt32Value;
            fromJSON(object: any): _880.UInt32Value;
            toJSON(message: _880.UInt32Value): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _880.UInt32Value;
        };
        BoolValue: {
            encode(message: _880.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.BoolValue;
            fromJSON(object: any): _880.BoolValue;
            toJSON(message: _880.BoolValue): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _880.BoolValue;
        };
        StringValue: {
            encode(message: _880.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.StringValue;
            fromJSON(object: any): _880.StringValue;
            toJSON(message: _880.StringValue): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _880.StringValue;
        };
        BytesValue: {
            encode(message: _880.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _880.BytesValue;
            fromJSON(object: any): _880.BytesValue;
            toJSON(message: _880.BytesValue): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _880.BytesValue;
        };
        syntaxFromJSON(object: any): _878.Syntax;
        syntaxToJSON(object: _878.Syntax): string;
        field_KindFromJSON(object: any): _878.Field_Kind;
        field_KindToJSON(object: _878.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _878.Field_Cardinality;
        field_CardinalityToJSON(object: _878.Field_Cardinality): string;
        Syntax: typeof _878.Syntax;
        Type: {
            encode(message: _878.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Type;
            fromJSON(object: any): _878.Type;
            toJSON(message: _878.Type): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _878.Type;
        };
        Field: {
            encode(message: _878.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Field;
            fromJSON(object: any): _878.Field;
            toJSON(message: _878.Field): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _878.Field;
        };
        Field_Kind: typeof _878.Field_Kind;
        Field_Cardinality: typeof _878.Field_Cardinality;
        Enum: {
            encode(message: _878.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Enum;
            fromJSON(object: any): _878.Enum;
            toJSON(message: _878.Enum): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _878.Enum;
        };
        EnumValue: {
            encode(message: _878.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.EnumValue;
            fromJSON(object: any): _878.EnumValue;
            toJSON(message: _878.EnumValue): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _878.EnumValue;
        };
        Option: {
            encode(message: _878.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _878.Option;
            fromJSON(object: any): _878.Option;
            toJSON(message: _878.Option): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _878.Option;
        };
        Timestamp: {
            encode(message: _876.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _876.Timestamp;
            fromJSON(object: any): _876.Timestamp;
            toJSON(message: _876.Timestamp): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _876.Timestamp;
        };
        nullValueFromJSON(object: any): _874.NullValue;
        nullValueToJSON(object: _874.NullValue): string;
        NullValue: typeof _874.NullValue;
        Struct: {
            encode(message: _874.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.Struct;
            fromJSON(object: any): _874.Struct;
            toJSON(message: _874.Struct): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _874.Struct;
            wrap(object: {
                [key: string]: any;
            }): _874.Struct;
            unwrap(message: _874.Struct): {
                [key: string]: any;
            };
        };
        Struct_FieldsEntry: {
            encode(message: _874.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.Struct_FieldsEntry;
            fromJSON(object: any): _874.Struct_FieldsEntry;
            toJSON(message: _874.Struct_FieldsEntry): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _874.Struct_FieldsEntry;
        };
        Value: {
            encode(message: _874.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.Value;
            fromJSON(object: any): _874.Value;
            toJSON(message: _874.Value): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _874.Value;
            wrap(value: any): _874.Value;
            unwrap(message: _874.Value): string | number | boolean | Object | any[];
        };
        ListValue: {
            encode(message: _874.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _874.ListValue;
            fromJSON(object: any): _874.ListValue;
            toJSON(message: _874.ListValue): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _874.ListValue;
            wrap(value: any[]): _874.ListValue;
            unwrap(message: _874.ListValue): any[];
        };
        SourceContext: {
            encode(message: _872.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _872.SourceContext;
            fromJSON(object: any): _872.SourceContext;
            toJSON(message: _872.SourceContext): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _872.SourceContext;
        };
        FieldMask: {
            encode(message: _870.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _870.FieldMask;
            fromJSON(object: any): _870.FieldMask;
            toJSON(message: _870.FieldMask): string;
            fromPartial<I_20 extends unknown>(object: I_20): _870.FieldMask;
            wrap(paths: string[]): _870.FieldMask;
            unwrap(message: _870.FieldMask): string[];
        };
        Empty: {
            encode(_: _868.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _868.Empty;
            fromJSON(_: any): _868.Empty;
            toJSON(_: _868.Empty): unknown;
            fromPartial<I_21 extends unknown>(_: I_21): _868.Empty;
        };
        Duration: {
            encode(message: _866.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _866.Duration;
            fromJSON(object: any): _866.Duration;
            toJSON(message: _866.Duration): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _866.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _864.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _864.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _864.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _864.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _864.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _864.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _864.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _864.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _864.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _864.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _864.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _864.MethodOptions_IdempotencyLevel): string;
        FileDescriptorSet: {
            encode(message: _864.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.FileDescriptorSet;
            fromJSON(object: any): _864.FileDescriptorSet;
            toJSON(message: _864.FileDescriptorSet): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _864.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _864.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.FileDescriptorProto;
            fromJSON(object: any): _864.FileDescriptorProto;
            toJSON(message: _864.FileDescriptorProto): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _864.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _864.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.DescriptorProto;
            fromJSON(object: any): _864.DescriptorProto;
            toJSON(message: _864.DescriptorProto): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _864.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _864.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _864.DescriptorProto_ExtensionRange;
            toJSON(message: _864.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _864.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _864.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.DescriptorProto_ReservedRange;
            fromJSON(object: any): _864.DescriptorProto_ReservedRange;
            toJSON(message: _864.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _864.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _864.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.ExtensionRangeOptions;
            fromJSON(object: any): _864.ExtensionRangeOptions;
            toJSON(message: _864.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _864.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _864.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.FieldDescriptorProto;
            fromJSON(object: any): _864.FieldDescriptorProto;
            toJSON(message: _864.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _864.FieldDescriptorProto;
        };
        FieldDescriptorProto_Type: typeof _864.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _864.FieldDescriptorProto_Label;
        OneofDescriptorProto: {
            encode(message: _864.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.OneofDescriptorProto;
            fromJSON(object: any): _864.OneofDescriptorProto;
            toJSON(message: _864.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _864.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _864.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.EnumDescriptorProto;
            fromJSON(object: any): _864.EnumDescriptorProto;
            toJSON(message: _864.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _864.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _864.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _864.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _864.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _864.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _864.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.EnumValueDescriptorProto;
            fromJSON(object: any): _864.EnumValueDescriptorProto;
            toJSON(message: _864.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _864.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _864.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.ServiceDescriptorProto;
            fromJSON(object: any): _864.ServiceDescriptorProto;
            toJSON(message: _864.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _864.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _864.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.MethodDescriptorProto;
            fromJSON(object: any): _864.MethodDescriptorProto;
            toJSON(message: _864.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _864.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _864.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.FileOptions;
            fromJSON(object: any): _864.FileOptions;
            toJSON(message: _864.FileOptions): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _864.FileOptions;
        };
        FileOptions_OptimizeMode: typeof _864.FileOptions_OptimizeMode;
        MessageOptions: {
            encode(message: _864.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.MessageOptions;
            fromJSON(object: any): _864.MessageOptions;
            toJSON(message: _864.MessageOptions): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _864.MessageOptions;
        };
        FieldOptions: {
            encode(message: _864.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.FieldOptions;
            fromJSON(object: any): _864.FieldOptions;
            toJSON(message: _864.FieldOptions): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _864.FieldOptions;
        };
        FieldOptions_CType: typeof _864.FieldOptions_CType;
        FieldOptions_JSType: typeof _864.FieldOptions_JSType;
        OneofOptions: {
            encode(message: _864.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.OneofOptions;
            fromJSON(object: any): _864.OneofOptions;
            toJSON(message: _864.OneofOptions): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _864.OneofOptions;
        };
        EnumOptions: {
            encode(message: _864.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.EnumOptions;
            fromJSON(object: any): _864.EnumOptions;
            toJSON(message: _864.EnumOptions): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _864.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _864.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.EnumValueOptions;
            fromJSON(object: any): _864.EnumValueOptions;
            toJSON(message: _864.EnumValueOptions): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _864.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _864.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.ServiceOptions;
            fromJSON(object: any): _864.ServiceOptions;
            toJSON(message: _864.ServiceOptions): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _864.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _864.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.MethodOptions;
            fromJSON(object: any): _864.MethodOptions;
            toJSON(message: _864.MethodOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _864.MethodOptions;
        };
        MethodOptions_IdempotencyLevel: typeof _864.MethodOptions_IdempotencyLevel;
        UninterpretedOption: {
            encode(message: _864.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.UninterpretedOption;
            fromJSON(object: any): _864.UninterpretedOption;
            toJSON(message: _864.UninterpretedOption): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _864.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _864.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.UninterpretedOption_NamePart;
            fromJSON(object: any): _864.UninterpretedOption_NamePart;
            toJSON(message: _864.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _864.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _864.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.SourceCodeInfo;
            fromJSON(object: any): _864.SourceCodeInfo;
            toJSON(message: _864.SourceCodeInfo): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _864.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _864.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.SourceCodeInfo_Location;
            fromJSON(object: any): _864.SourceCodeInfo_Location;
            toJSON(message: _864.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _864.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _864.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.GeneratedCodeInfo;
            fromJSON(object: any): _864.GeneratedCodeInfo;
            toJSON(message: _864.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _864.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _864.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _864.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _864.GeneratedCodeInfo_Annotation;
            toJSON(message: _864.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _864.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _862.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.Api;
            fromJSON(object: any): _862.Api;
            toJSON(message: _862.Api): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _862.Api;
        };
        Method: {
            encode(message: _862.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.Method;
            fromJSON(object: any): _862.Method;
            toJSON(message: _862.Method): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _862.Method;
        };
        Mixin: {
            encode(message: _862.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _862.Mixin;
            fromJSON(object: any): _862.Mixin;
            toJSON(message: _862.Mixin): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _862.Mixin;
        };
        Any: {
            encode(message: _860.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _860.Any;
            fromJSON(object: any): _860.Any;
            toJSON(message: _860.Any): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _860.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _886.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _886.Status;
            fromJSON(object: any): _886.Status;
            toJSON(message: _886.Status): unknown;
            fromPartial<I extends unknown>(object: I): _886.Status;
        };
        RetryInfo: {
            encode(message: _884.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.RetryInfo;
            fromJSON(object: any): _884.RetryInfo;
            toJSON(message: _884.RetryInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _884.RetryInfo;
        };
        DebugInfo: {
            encode(message: _884.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.DebugInfo;
            fromJSON(object: any): _884.DebugInfo;
            toJSON(message: _884.DebugInfo): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _884.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _884.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QuotaFailure;
            fromJSON(object: any): _884.QuotaFailure;
            toJSON(message: _884.QuotaFailure): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _884.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _884.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.QuotaFailure_Violation;
            fromJSON(object: any): _884.QuotaFailure_Violation;
            toJSON(message: _884.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _884.QuotaFailure_Violation;
        };
        ErrorInfo: {
            encode(message: _884.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.ErrorInfo;
            fromJSON(object: any): _884.ErrorInfo;
            toJSON(message: _884.ErrorInfo): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _884.ErrorInfo;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _884.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _884.ErrorInfo_MetadataEntry;
            toJSON(message: _884.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _884.ErrorInfo_MetadataEntry;
        };
        PreconditionFailure: {
            encode(message: _884.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.PreconditionFailure;
            fromJSON(object: any): _884.PreconditionFailure;
            toJSON(message: _884.PreconditionFailure): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _884.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _884.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.PreconditionFailure_Violation;
            fromJSON(object: any): _884.PreconditionFailure_Violation;
            toJSON(message: _884.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _884.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _884.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.BadRequest;
            fromJSON(object: any): _884.BadRequest;
            toJSON(message: _884.BadRequest): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _884.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _884.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.BadRequest_FieldViolation;
            fromJSON(object: any): _884.BadRequest_FieldViolation;
            toJSON(message: _884.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _884.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _884.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.RequestInfo;
            fromJSON(object: any): _884.RequestInfo;
            toJSON(message: _884.RequestInfo): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _884.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _884.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.ResourceInfo;
            fromJSON(object: any): _884.ResourceInfo;
            toJSON(message: _884.ResourceInfo): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _884.ResourceInfo;
        };
        Help: {
            encode(message: _884.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.Help;
            fromJSON(object: any): _884.Help;
            toJSON(message: _884.Help): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _884.Help;
        };
        Help_Link: {
            encode(message: _884.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.Help_Link;
            fromJSON(object: any): _884.Help_Link;
            toJSON(message: _884.Help_Link): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _884.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _884.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _884.LocalizedMessage;
            fromJSON(object: any): _884.LocalizedMessage;
            toJSON(message: _884.LocalizedMessage): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _884.LocalizedMessage;
        };
        codeFromJSON(object: any): _882.Code;
        codeToJSON(object: _882.Code): string;
        Code: typeof _882.Code;
    };
}
