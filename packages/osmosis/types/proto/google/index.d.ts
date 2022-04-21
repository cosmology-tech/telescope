import * as _640 from "./api/auth";
import * as _641 from "./api/backend";
import * as _642 from "./api/billing";
import * as _644 from "./api/config_change";
import * as _645 from "./api/consumer";
import * as _646 from "./api/context";
import * as _647 from "./api/control";
import * as _648 from "./api/distribution";
import * as _649 from "./api/documentation";
import * as _650 from "./api/endpoint";
import * as _651 from "./api/error_reason";
import * as _652 from "./api/field_behavior";
import * as _653 from "./api/http";
import * as _654 from "./api/httpbody";
import * as _655 from "./api/label";
import * as _656 from "./api/launch_stage";
import * as _657 from "./api/log";
import * as _658 from "./api/logging";
import * as _659 from "./api/metric";
import * as _660 from "./api/monitored_resource";
import * as _661 from "./api/monitoring";
import * as _662 from "./api/quota";
import * as _663 from "./api/resource";
import * as _664 from "./api/routing";
import * as _665 from "./api/service";
import * as _666 from "./api/source_info";
import * as _667 from "./api/system_parameter";
import * as _668 from "./api/usage";
import * as _669 from "./api/visibility";
import * as _670 from "./logging/type/http_request";
import * as _671 from "./logging/type/log_severity";
import * as _672 from "./logging/v2/log_entry";
import * as _673 from "./logging/v2/logging_config";
import * as _674 from "./logging/v2/logging_metrics";
import * as _675 from "./logging/v2/logging";
import * as _676 from "./longrunning/operations";
import * as _677 from "./protobuf/any";
import * as _678 from "./protobuf/api";
import * as _679 from "./protobuf/descriptor";
import * as _680 from "./protobuf/duration";
import * as _681 from "./protobuf/empty";
import * as _682 from "./protobuf/field_mask";
import * as _683 from "./protobuf/source_context";
import * as _684 from "./protobuf/struct";
import * as _685 from "./protobuf/timestamp";
import * as _686 from "./protobuf/type";
import * as _687 from "./protobuf/wrappers";
import * as _688 from "./rpc/code";
import * as _689 from "./rpc/error_details";
import * as _690 from "./rpc/status";
export declare namespace google {
    const api: {
        Visibility: {
            encode(message: _669.Visibility, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.Visibility;
            fromJSON(object: any): _669.Visibility;
            toJSON(message: _669.Visibility): unknown;
            fromPartial<I extends unknown>(object: I): _669.Visibility;
        };
        VisibilityRule: {
            encode(message: _669.VisibilityRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _669.VisibilityRule;
            fromJSON(object: any): _669.VisibilityRule;
            toJSON(message: _669.VisibilityRule): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _669.VisibilityRule;
        };
        Usage: {
            encode(message: _668.Usage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.Usage;
            fromJSON(object: any): _668.Usage;
            toJSON(message: _668.Usage): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _668.Usage;
        };
        UsageRule: {
            encode(message: _668.UsageRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _668.UsageRule;
            fromJSON(object: any): _668.UsageRule;
            toJSON(message: _668.UsageRule): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _668.UsageRule;
        };
        SystemParameters: {
            encode(message: _667.SystemParameters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.SystemParameters;
            fromJSON(object: any): _667.SystemParameters;
            toJSON(message: _667.SystemParameters): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _667.SystemParameters;
        };
        SystemParameterRule: {
            encode(message: _667.SystemParameterRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.SystemParameterRule;
            fromJSON(object: any): _667.SystemParameterRule;
            toJSON(message: _667.SystemParameterRule): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _667.SystemParameterRule;
        };
        SystemParameter: {
            encode(message: _667.SystemParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _667.SystemParameter;
            fromJSON(object: any): _667.SystemParameter;
            toJSON(message: _667.SystemParameter): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _667.SystemParameter;
        };
        SourceInfo: {
            encode(message: _666.SourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _666.SourceInfo;
            fromJSON(object: any): _666.SourceInfo;
            toJSON(message: _666.SourceInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _666.SourceInfo;
        };
        Service: {
            encode(message: _665.Service, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _665.Service;
            fromJSON(object: any): _665.Service;
            toJSON(message: _665.Service): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _665.Service;
        };
        RoutingRule: {
            encode(message: _664.RoutingRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.RoutingRule;
            fromJSON(object: any): _664.RoutingRule;
            toJSON(message: _664.RoutingRule): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _664.RoutingRule;
        };
        RoutingParameter: {
            encode(message: _664.RoutingParameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _664.RoutingParameter;
            fromJSON(object: any): _664.RoutingParameter;
            toJSON(message: _664.RoutingParameter): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _664.RoutingParameter;
        };
        resourceDescriptor_HistoryFromJSON(object: any): _663.ResourceDescriptor_History;
        resourceDescriptor_HistoryToJSON(object: _663.ResourceDescriptor_History): string;
        resourceDescriptor_StyleFromJSON(object: any): _663.ResourceDescriptor_Style;
        resourceDescriptor_StyleToJSON(object: _663.ResourceDescriptor_Style): string;
        ResourceDescriptor: {
            encode(message: _663.ResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.ResourceDescriptor;
            fromJSON(object: any): _663.ResourceDescriptor;
            toJSON(message: _663.ResourceDescriptor): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _663.ResourceDescriptor;
        };
        ResourceDescriptor_History: typeof _663.ResourceDescriptor_History;
        ResourceDescriptor_Style: typeof _663.ResourceDescriptor_Style;
        ResourceReference: {
            encode(message: _663.ResourceReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _663.ResourceReference;
            fromJSON(object: any): _663.ResourceReference;
            toJSON(message: _663.ResourceReference): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _663.ResourceReference;
        };
        Quota: {
            encode(message: _662.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.Quota;
            fromJSON(object: any): _662.Quota;
            toJSON(message: _662.Quota): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _662.Quota;
        };
        MetricRule: {
            encode(message: _662.MetricRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.MetricRule;
            fromJSON(object: any): _662.MetricRule;
            toJSON(message: _662.MetricRule): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _662.MetricRule;
        };
        MetricRule_MetricCostsEntry: {
            encode(message: _662.MetricRule_MetricCostsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.MetricRule_MetricCostsEntry;
            fromJSON(object: any): _662.MetricRule_MetricCostsEntry;
            toJSON(message: _662.MetricRule_MetricCostsEntry): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _662.MetricRule_MetricCostsEntry;
        };
        QuotaLimit: {
            encode(message: _662.QuotaLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.QuotaLimit;
            fromJSON(object: any): _662.QuotaLimit;
            toJSON(message: _662.QuotaLimit): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _662.QuotaLimit;
        };
        QuotaLimit_ValuesEntry: {
            encode(message: _662.QuotaLimit_ValuesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _662.QuotaLimit_ValuesEntry;
            fromJSON(object: any): _662.QuotaLimit_ValuesEntry;
            toJSON(message: _662.QuotaLimit_ValuesEntry): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _662.QuotaLimit_ValuesEntry;
        };
        Monitoring: {
            encode(message: _661.Monitoring, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.Monitoring;
            fromJSON(object: any): _661.Monitoring;
            toJSON(message: _661.Monitoring): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _661.Monitoring;
        };
        Monitoring_MonitoringDestination: {
            encode(message: _661.Monitoring_MonitoringDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _661.Monitoring_MonitoringDestination;
            fromJSON(object: any): _661.Monitoring_MonitoringDestination;
            toJSON(message: _661.Monitoring_MonitoringDestination): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _661.Monitoring_MonitoringDestination;
        };
        MonitoredResourceDescriptor: {
            encode(message: _660.MonitoredResourceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.MonitoredResourceDescriptor;
            fromJSON(object: any): _660.MonitoredResourceDescriptor;
            toJSON(message: _660.MonitoredResourceDescriptor): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _660.MonitoredResourceDescriptor;
        };
        MonitoredResource: {
            encode(message: _660.MonitoredResource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.MonitoredResource;
            fromJSON(object: any): _660.MonitoredResource;
            toJSON(message: _660.MonitoredResource): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _660.MonitoredResource;
        };
        MonitoredResource_LabelsEntry: {
            encode(message: _660.MonitoredResource_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.MonitoredResource_LabelsEntry;
            fromJSON(object: any): _660.MonitoredResource_LabelsEntry;
            toJSON(message: _660.MonitoredResource_LabelsEntry): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _660.MonitoredResource_LabelsEntry;
        };
        MonitoredResourceMetadata: {
            encode(message: _660.MonitoredResourceMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.MonitoredResourceMetadata;
            fromJSON(object: any): _660.MonitoredResourceMetadata;
            toJSON(message: _660.MonitoredResourceMetadata): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _660.MonitoredResourceMetadata;
        };
        MonitoredResourceMetadata_UserLabelsEntry: {
            encode(message: _660.MonitoredResourceMetadata_UserLabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _660.MonitoredResourceMetadata_UserLabelsEntry;
            fromJSON(object: any): _660.MonitoredResourceMetadata_UserLabelsEntry;
            toJSON(message: _660.MonitoredResourceMetadata_UserLabelsEntry): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _660.MonitoredResourceMetadata_UserLabelsEntry;
        };
        metricDescriptor_MetricKindFromJSON(object: any): _659.MetricDescriptor_MetricKind;
        metricDescriptor_MetricKindToJSON(object: _659.MetricDescriptor_MetricKind): string;
        metricDescriptor_ValueTypeFromJSON(object: any): _659.MetricDescriptor_ValueType;
        metricDescriptor_ValueTypeToJSON(object: _659.MetricDescriptor_ValueType): string;
        MetricDescriptor: {
            encode(message: _659.MetricDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.MetricDescriptor;
            fromJSON(object: any): _659.MetricDescriptor;
            toJSON(message: _659.MetricDescriptor): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _659.MetricDescriptor;
        };
        MetricDescriptor_MetricKind: typeof _659.MetricDescriptor_MetricKind;
        MetricDescriptor_ValueType: typeof _659.MetricDescriptor_ValueType;
        MetricDescriptor_MetricDescriptorMetadata: {
            encode(message: _659.MetricDescriptor_MetricDescriptorMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.MetricDescriptor_MetricDescriptorMetadata;
            fromJSON(object: any): _659.MetricDescriptor_MetricDescriptorMetadata;
            toJSON(message: _659.MetricDescriptor_MetricDescriptorMetadata): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _659.MetricDescriptor_MetricDescriptorMetadata;
        };
        Metric: {
            encode(message: _659.Metric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.Metric;
            fromJSON(object: any): _659.Metric;
            toJSON(message: _659.Metric): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _659.Metric;
        };
        Metric_LabelsEntry: {
            encode(message: _659.Metric_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _659.Metric_LabelsEntry;
            fromJSON(object: any): _659.Metric_LabelsEntry;
            toJSON(message: _659.Metric_LabelsEntry): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _659.Metric_LabelsEntry;
        };
        Logging: {
            encode(message: _658.Logging, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.Logging;
            fromJSON(object: any): _658.Logging;
            toJSON(message: _658.Logging): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _658.Logging;
        };
        Logging_LoggingDestination: {
            encode(message: _658.Logging_LoggingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _658.Logging_LoggingDestination;
            fromJSON(object: any): _658.Logging_LoggingDestination;
            toJSON(message: _658.Logging_LoggingDestination): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _658.Logging_LoggingDestination;
        };
        LogDescriptor: {
            encode(message: _657.LogDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _657.LogDescriptor;
            fromJSON(object: any): _657.LogDescriptor;
            toJSON(message: _657.LogDescriptor): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _657.LogDescriptor;
        };
        launchStageFromJSON(object: any): _656.LaunchStage;
        launchStageToJSON(object: _656.LaunchStage): string;
        LaunchStage: typeof _656.LaunchStage;
        labelDescriptor_ValueTypeFromJSON(object: any): _655.LabelDescriptor_ValueType;
        labelDescriptor_ValueTypeToJSON(object: _655.LabelDescriptor_ValueType): string;
        LabelDescriptor: {
            encode(message: _655.LabelDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _655.LabelDescriptor;
            fromJSON(object: any): _655.LabelDescriptor;
            toJSON(message: _655.LabelDescriptor): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _655.LabelDescriptor;
        };
        LabelDescriptor_ValueType: typeof _655.LabelDescriptor_ValueType;
        HttpBody: {
            encode(message: _654.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _654.HttpBody;
            fromJSON(object: any): _654.HttpBody;
            toJSON(message: _654.HttpBody): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _654.HttpBody;
        };
        Http: {
            encode(message: _653.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.Http;
            fromJSON(object: any): _653.Http;
            toJSON(message: _653.Http): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _653.Http;
        };
        HttpRule: {
            encode(message: _653.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.HttpRule;
            fromJSON(object: any): _653.HttpRule;
            toJSON(message: _653.HttpRule): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _653.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _653.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _653.CustomHttpPattern;
            fromJSON(object: any): _653.CustomHttpPattern;
            toJSON(message: _653.CustomHttpPattern): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _653.CustomHttpPattern;
        };
        fieldBehaviorFromJSON(object: any): _652.FieldBehavior;
        fieldBehaviorToJSON(object: _652.FieldBehavior): string;
        FieldBehavior: typeof _652.FieldBehavior;
        errorReasonFromJSON(object: any): _651.ErrorReason;
        errorReasonToJSON(object: _651.ErrorReason): string;
        ErrorReason: typeof _651.ErrorReason;
        Endpoint: {
            encode(message: _650.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _650.Endpoint;
            fromJSON(object: any): _650.Endpoint;
            toJSON(message: _650.Endpoint): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _650.Endpoint;
        };
        Documentation: {
            encode(message: _649.Documentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.Documentation;
            fromJSON(object: any): _649.Documentation;
            toJSON(message: _649.Documentation): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _649.Documentation;
        };
        DocumentationRule: {
            encode(message: _649.DocumentationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.DocumentationRule;
            fromJSON(object: any): _649.DocumentationRule;
            toJSON(message: _649.DocumentationRule): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _649.DocumentationRule;
        };
        Page: {
            encode(message: _649.Page, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _649.Page;
            fromJSON(object: any): _649.Page;
            toJSON(message: _649.Page): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _649.Page;
        };
        Distribution: {
            encode(message: _648.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution;
            fromJSON(object: any): _648.Distribution;
            toJSON(message: _648.Distribution): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _648.Distribution;
        };
        Distribution_Range: {
            encode(message: _648.Distribution_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution_Range;
            fromJSON(object: any): _648.Distribution_Range;
            toJSON(message: _648.Distribution_Range): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _648.Distribution_Range;
        };
        Distribution_BucketOptions: {
            encode(message: _648.Distribution_BucketOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution_BucketOptions;
            fromJSON(object: any): _648.Distribution_BucketOptions;
            toJSON(message: _648.Distribution_BucketOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _648.Distribution_BucketOptions;
        };
        Distribution_BucketOptions_Linear: {
            encode(message: _648.Distribution_BucketOptions_Linear, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution_BucketOptions_Linear;
            fromJSON(object: any): _648.Distribution_BucketOptions_Linear;
            toJSON(message: _648.Distribution_BucketOptions_Linear): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _648.Distribution_BucketOptions_Linear;
        };
        Distribution_BucketOptions_Exponential: {
            encode(message: _648.Distribution_BucketOptions_Exponential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution_BucketOptions_Exponential;
            fromJSON(object: any): _648.Distribution_BucketOptions_Exponential;
            toJSON(message: _648.Distribution_BucketOptions_Exponential): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _648.Distribution_BucketOptions_Exponential;
        };
        Distribution_BucketOptions_Explicit: {
            encode(message: _648.Distribution_BucketOptions_Explicit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution_BucketOptions_Explicit;
            fromJSON(object: any): _648.Distribution_BucketOptions_Explicit;
            toJSON(message: _648.Distribution_BucketOptions_Explicit): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _648.Distribution_BucketOptions_Explicit;
        };
        Distribution_Exemplar: {
            encode(message: _648.Distribution_Exemplar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _648.Distribution_Exemplar;
            fromJSON(object: any): _648.Distribution_Exemplar;
            toJSON(message: _648.Distribution_Exemplar): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _648.Distribution_Exemplar;
        };
        Control: {
            encode(message: _647.Control, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _647.Control;
            fromJSON(object: any): _647.Control;
            toJSON(message: _647.Control): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _647.Control;
        };
        Context: {
            encode(message: _646.Context, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.Context;
            fromJSON(object: any): _646.Context;
            toJSON(message: _646.Context): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _646.Context;
        };
        ContextRule: {
            encode(message: _646.ContextRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _646.ContextRule;
            fromJSON(object: any): _646.ContextRule;
            toJSON(message: _646.ContextRule): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _646.ContextRule;
        };
        property_PropertyTypeFromJSON(object: any): _645.Property_PropertyType;
        property_PropertyTypeToJSON(object: _645.Property_PropertyType): string;
        ProjectProperties: {
            encode(message: _645.ProjectProperties, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.ProjectProperties;
            fromJSON(object: any): _645.ProjectProperties;
            toJSON(message: _645.ProjectProperties): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _645.ProjectProperties;
        };
        Property: {
            encode(message: _645.Property, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _645.Property;
            fromJSON(object: any): _645.Property;
            toJSON(message: _645.Property): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _645.Property;
        };
        Property_PropertyType: typeof _645.Property_PropertyType;
        changeTypeFromJSON(object: any): _644.ChangeType;
        changeTypeToJSON(object: _644.ChangeType): string;
        ChangeType: typeof _644.ChangeType;
        ConfigChange: {
            encode(message: _644.ConfigChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.ConfigChange;
            fromJSON(object: any): _644.ConfigChange;
            toJSON(message: _644.ConfigChange): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _644.ConfigChange;
        };
        Advice: {
            encode(message: _644.Advice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _644.Advice;
            fromJSON(object: any): _644.Advice;
            toJSON(message: _644.Advice): unknown;
            fromPartial<I_54 extends unknown>(object: I_54): _644.Advice;
        };
        Billing: {
            encode(message: _642.Billing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.Billing;
            fromJSON(object: any): _642.Billing;
            toJSON(message: _642.Billing): unknown;
            fromPartial<I_55 extends unknown>(object: I_55): _642.Billing;
        };
        Billing_BillingDestination: {
            encode(message: _642.Billing_BillingDestination, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _642.Billing_BillingDestination;
            fromJSON(object: any): _642.Billing_BillingDestination;
            toJSON(message: _642.Billing_BillingDestination): unknown;
            fromPartial<I_56 extends unknown>(object: I_56): _642.Billing_BillingDestination;
        };
        backendRule_PathTranslationFromJSON(object: any): _641.BackendRule_PathTranslation;
        backendRule_PathTranslationToJSON(object: _641.BackendRule_PathTranslation): string;
        Backend: {
            encode(message: _641.Backend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.Backend;
            fromJSON(object: any): _641.Backend;
            toJSON(message: _641.Backend): unknown;
            fromPartial<I_57 extends unknown>(object: I_57): _641.Backend;
        };
        BackendRule: {
            encode(message: _641.BackendRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _641.BackendRule;
            fromJSON(object: any): _641.BackendRule;
            toJSON(message: _641.BackendRule): unknown;
            fromPartial<I_58 extends unknown>(object: I_58): _641.BackendRule;
        };
        BackendRule_PathTranslation: typeof _641.BackendRule_PathTranslation;
        Authentication: {
            encode(message: _640.Authentication, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.Authentication;
            fromJSON(object: any): _640.Authentication;
            toJSON(message: _640.Authentication): unknown;
            fromPartial<I_59 extends unknown>(object: I_59): _640.Authentication;
        };
        AuthenticationRule: {
            encode(message: _640.AuthenticationRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.AuthenticationRule;
            fromJSON(object: any): _640.AuthenticationRule;
            toJSON(message: _640.AuthenticationRule): unknown;
            fromPartial<I_60 extends unknown>(object: I_60): _640.AuthenticationRule;
        };
        JwtLocation: {
            encode(message: _640.JwtLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.JwtLocation;
            fromJSON(object: any): _640.JwtLocation;
            toJSON(message: _640.JwtLocation): unknown;
            fromPartial<I_61 extends unknown>(object: I_61): _640.JwtLocation;
        };
        AuthProvider: {
            encode(message: _640.AuthProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.AuthProvider;
            fromJSON(object: any): _640.AuthProvider;
            toJSON(message: _640.AuthProvider): unknown;
            fromPartial<I_62 extends unknown>(object: I_62): _640.AuthProvider;
        };
        OAuthRequirements: {
            encode(message: _640.OAuthRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.OAuthRequirements;
            fromJSON(object: any): _640.OAuthRequirements;
            toJSON(message: _640.OAuthRequirements): unknown;
            fromPartial<I_63 extends unknown>(object: I_63): _640.OAuthRequirements;
        };
        AuthRequirement: {
            encode(message: _640.AuthRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _640.AuthRequirement;
            fromJSON(object: any): _640.AuthRequirement;
            toJSON(message: _640.AuthRequirement): unknown;
            fromPartial<I_64 extends unknown>(object: I_64): _640.AuthRequirement;
        };
    };
    namespace logging {
        const type: {
            logSeverityFromJSON(object: any): _671.LogSeverity;
            logSeverityToJSON(object: _671.LogSeverity): string;
            LogSeverity: typeof _671.LogSeverity;
            HttpRequest: {
                encode(message: _670.HttpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _670.HttpRequest;
                fromJSON(object: any): _670.HttpRequest;
                toJSON(message: _670.HttpRequest): unknown;
                fromPartial<I extends unknown>(object: I): _670.HttpRequest;
            };
        };
        const v2: {
            tailLogEntriesResponse_SuppressionInfo_ReasonFromJSON(object: any): _675.TailLogEntriesResponse_SuppressionInfo_Reason;
            tailLogEntriesResponse_SuppressionInfo_ReasonToJSON(object: _675.TailLogEntriesResponse_SuppressionInfo_Reason): string;
            DeleteLogRequest: {
                encode(message: _675.DeleteLogRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.DeleteLogRequest;
                fromJSON(object: any): _675.DeleteLogRequest;
                toJSON(message: _675.DeleteLogRequest): unknown;
                fromPartial<I extends unknown>(object: I): _675.DeleteLogRequest;
            };
            WriteLogEntriesRequest: {
                encode(message: _675.WriteLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.WriteLogEntriesRequest;
                fromJSON(object: any): _675.WriteLogEntriesRequest;
                toJSON(message: _675.WriteLogEntriesRequest): unknown;
                fromPartial<I_1 extends unknown>(object: I_1): _675.WriteLogEntriesRequest;
            };
            WriteLogEntriesRequest_LabelsEntry: {
                encode(message: _675.WriteLogEntriesRequest_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.WriteLogEntriesRequest_LabelsEntry;
                fromJSON(object: any): _675.WriteLogEntriesRequest_LabelsEntry;
                toJSON(message: _675.WriteLogEntriesRequest_LabelsEntry): unknown;
                fromPartial<I_2 extends unknown>(object: I_2): _675.WriteLogEntriesRequest_LabelsEntry;
            };
            WriteLogEntriesResponse: {
                encode(_: _675.WriteLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.WriteLogEntriesResponse;
                fromJSON(_: any): _675.WriteLogEntriesResponse;
                toJSON(_: _675.WriteLogEntriesResponse): unknown;
                fromPartial<I_3 extends unknown>(_: I_3): _675.WriteLogEntriesResponse;
            };
            WriteLogEntriesPartialErrors: {
                encode(message: _675.WriteLogEntriesPartialErrors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.WriteLogEntriesPartialErrors;
                fromJSON(object: any): _675.WriteLogEntriesPartialErrors;
                toJSON(message: _675.WriteLogEntriesPartialErrors): unknown;
                fromPartial<I_4 extends unknown>(object: I_4): _675.WriteLogEntriesPartialErrors;
            };
            WriteLogEntriesPartialErrors_LogEntryErrorsEntry: {
                encode(message: _675.WriteLogEntriesPartialErrors_LogEntryErrorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                fromJSON(object: any): _675.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
                toJSON(message: _675.WriteLogEntriesPartialErrors_LogEntryErrorsEntry): unknown;
                fromPartial<I_5 extends unknown>(object: I_5): _675.WriteLogEntriesPartialErrors_LogEntryErrorsEntry;
            };
            ListLogEntriesRequest: {
                encode(message: _675.ListLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.ListLogEntriesRequest;
                fromJSON(object: any): _675.ListLogEntriesRequest;
                toJSON(message: _675.ListLogEntriesRequest): unknown;
                fromPartial<I_6 extends unknown>(object: I_6): _675.ListLogEntriesRequest;
            };
            ListLogEntriesResponse: {
                encode(message: _675.ListLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.ListLogEntriesResponse;
                fromJSON(object: any): _675.ListLogEntriesResponse;
                toJSON(message: _675.ListLogEntriesResponse): unknown;
                fromPartial<I_7 extends unknown>(object: I_7): _675.ListLogEntriesResponse;
            };
            ListMonitoredResourceDescriptorsRequest: {
                encode(message: _675.ListMonitoredResourceDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.ListMonitoredResourceDescriptorsRequest;
                fromJSON(object: any): _675.ListMonitoredResourceDescriptorsRequest;
                toJSON(message: _675.ListMonitoredResourceDescriptorsRequest): unknown;
                fromPartial<I_8 extends unknown>(object: I_8): _675.ListMonitoredResourceDescriptorsRequest;
            };
            ListMonitoredResourceDescriptorsResponse: {
                encode(message: _675.ListMonitoredResourceDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.ListMonitoredResourceDescriptorsResponse;
                fromJSON(object: any): _675.ListMonitoredResourceDescriptorsResponse;
                toJSON(message: _675.ListMonitoredResourceDescriptorsResponse): unknown;
                fromPartial<I_9 extends unknown>(object: I_9): _675.ListMonitoredResourceDescriptorsResponse;
            };
            ListLogsRequest: {
                encode(message: _675.ListLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.ListLogsRequest;
                fromJSON(object: any): _675.ListLogsRequest;
                toJSON(message: _675.ListLogsRequest): unknown;
                fromPartial<I_10 extends unknown>(object: I_10): _675.ListLogsRequest;
            };
            ListLogsResponse: {
                encode(message: _675.ListLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.ListLogsResponse;
                fromJSON(object: any): _675.ListLogsResponse;
                toJSON(message: _675.ListLogsResponse): unknown;
                fromPartial<I_11 extends unknown>(object: I_11): _675.ListLogsResponse;
            };
            TailLogEntriesRequest: {
                encode(message: _675.TailLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.TailLogEntriesRequest;
                fromJSON(object: any): _675.TailLogEntriesRequest;
                toJSON(message: _675.TailLogEntriesRequest): unknown;
                fromPartial<I_12 extends unknown>(object: I_12): _675.TailLogEntriesRequest;
            };
            TailLogEntriesResponse: {
                encode(message: _675.TailLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.TailLogEntriesResponse;
                fromJSON(object: any): _675.TailLogEntriesResponse;
                toJSON(message: _675.TailLogEntriesResponse): unknown;
                fromPartial<I_13 extends unknown>(object: I_13): _675.TailLogEntriesResponse;
            };
            TailLogEntriesResponse_SuppressionInfo: {
                encode(message: _675.TailLogEntriesResponse_SuppressionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _675.TailLogEntriesResponse_SuppressionInfo;
                fromJSON(object: any): _675.TailLogEntriesResponse_SuppressionInfo;
                toJSON(message: _675.TailLogEntriesResponse_SuppressionInfo): unknown;
                fromPartial<I_14 extends unknown>(object: I_14): _675.TailLogEntriesResponse_SuppressionInfo;
            };
            TailLogEntriesResponse_SuppressionInfo_Reason: typeof _675.TailLogEntriesResponse_SuppressionInfo_Reason;
            LoggingServiceV2ClientImpl: typeof _675.LoggingServiceV2ClientImpl;
            logMetric_ApiVersionFromJSON(object: any): _674.LogMetric_ApiVersion;
            logMetric_ApiVersionToJSON(object: _674.LogMetric_ApiVersion): string;
            LogMetric: {
                encode(message: _674.LogMetric, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.LogMetric;
                fromJSON(object: any): _674.LogMetric;
                toJSON(message: _674.LogMetric): unknown;
                fromPartial<I_15 extends unknown>(object: I_15): _674.LogMetric;
            };
            LogMetric_ApiVersion: typeof _674.LogMetric_ApiVersion;
            LogMetric_LabelExtractorsEntry: {
                encode(message: _674.LogMetric_LabelExtractorsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.LogMetric_LabelExtractorsEntry;
                fromJSON(object: any): _674.LogMetric_LabelExtractorsEntry;
                toJSON(message: _674.LogMetric_LabelExtractorsEntry): unknown;
                fromPartial<I_16 extends unknown>(object: I_16): _674.LogMetric_LabelExtractorsEntry;
            };
            ListLogMetricsRequest: {
                encode(message: _674.ListLogMetricsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.ListLogMetricsRequest;
                fromJSON(object: any): _674.ListLogMetricsRequest;
                toJSON(message: _674.ListLogMetricsRequest): unknown;
                fromPartial<I_17 extends unknown>(object: I_17): _674.ListLogMetricsRequest;
            };
            ListLogMetricsResponse: {
                encode(message: _674.ListLogMetricsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.ListLogMetricsResponse;
                fromJSON(object: any): _674.ListLogMetricsResponse;
                toJSON(message: _674.ListLogMetricsResponse): unknown;
                fromPartial<I_18 extends unknown>(object: I_18): _674.ListLogMetricsResponse;
            };
            GetLogMetricRequest: {
                encode(message: _674.GetLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.GetLogMetricRequest;
                fromJSON(object: any): _674.GetLogMetricRequest;
                toJSON(message: _674.GetLogMetricRequest): unknown;
                fromPartial<I_19 extends unknown>(object: I_19): _674.GetLogMetricRequest;
            };
            CreateLogMetricRequest: {
                encode(message: _674.CreateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.CreateLogMetricRequest;
                fromJSON(object: any): _674.CreateLogMetricRequest;
                toJSON(message: _674.CreateLogMetricRequest): unknown;
                fromPartial<I_20 extends unknown>(object: I_20): _674.CreateLogMetricRequest;
            };
            UpdateLogMetricRequest: {
                encode(message: _674.UpdateLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.UpdateLogMetricRequest;
                fromJSON(object: any): _674.UpdateLogMetricRequest;
                toJSON(message: _674.UpdateLogMetricRequest): unknown;
                fromPartial<I_21 extends unknown>(object: I_21): _674.UpdateLogMetricRequest;
            };
            DeleteLogMetricRequest: {
                encode(message: _674.DeleteLogMetricRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _674.DeleteLogMetricRequest;
                fromJSON(object: any): _674.DeleteLogMetricRequest;
                toJSON(message: _674.DeleteLogMetricRequest): unknown;
                fromPartial<I_22 extends unknown>(object: I_22): _674.DeleteLogMetricRequest;
            };
            MetricsServiceV2ClientImpl: typeof _674.MetricsServiceV2ClientImpl;
            lifecycleStateFromJSON(object: any): _673.LifecycleState;
            lifecycleStateToJSON(object: _673.LifecycleState): string;
            operationStateFromJSON(object: any): _673.OperationState;
            operationStateToJSON(object: _673.OperationState): string;
            logSink_VersionFormatFromJSON(object: any): _673.LogSink_VersionFormat;
            logSink_VersionFormatToJSON(object: _673.LogSink_VersionFormat): string;
            LifecycleState: typeof _673.LifecycleState;
            OperationState: typeof _673.OperationState;
            LogBucket: {
                encode(message: _673.LogBucket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.LogBucket;
                fromJSON(object: any): _673.LogBucket;
                toJSON(message: _673.LogBucket): unknown;
                fromPartial<I_23 extends unknown>(object: I_23): _673.LogBucket;
            };
            LogView: {
                encode(message: _673.LogView, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.LogView;
                fromJSON(object: any): _673.LogView;
                toJSON(message: _673.LogView): unknown;
                fromPartial<I_24 extends unknown>(object: I_24): _673.LogView;
            };
            LogSink: {
                encode(message: _673.LogSink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.LogSink;
                fromJSON(object: any): _673.LogSink;
                toJSON(message: _673.LogSink): unknown;
                fromPartial<I_25 extends unknown>(object: I_25): _673.LogSink;
            };
            LogSink_VersionFormat: typeof _673.LogSink_VersionFormat;
            BigQueryOptions: {
                encode(message: _673.BigQueryOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.BigQueryOptions;
                fromJSON(object: any): _673.BigQueryOptions;
                toJSON(message: _673.BigQueryOptions): unknown;
                fromPartial<I_26 extends unknown>(object: I_26): _673.BigQueryOptions;
            };
            ListBucketsRequest: {
                encode(message: _673.ListBucketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListBucketsRequest;
                fromJSON(object: any): _673.ListBucketsRequest;
                toJSON(message: _673.ListBucketsRequest): unknown;
                fromPartial<I_27 extends unknown>(object: I_27): _673.ListBucketsRequest;
            };
            ListBucketsResponse: {
                encode(message: _673.ListBucketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListBucketsResponse;
                fromJSON(object: any): _673.ListBucketsResponse;
                toJSON(message: _673.ListBucketsResponse): unknown;
                fromPartial<I_28 extends unknown>(object: I_28): _673.ListBucketsResponse;
            };
            CreateBucketRequest: {
                encode(message: _673.CreateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CreateBucketRequest;
                fromJSON(object: any): _673.CreateBucketRequest;
                toJSON(message: _673.CreateBucketRequest): unknown;
                fromPartial<I_29 extends unknown>(object: I_29): _673.CreateBucketRequest;
            };
            UpdateBucketRequest: {
                encode(message: _673.UpdateBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.UpdateBucketRequest;
                fromJSON(object: any): _673.UpdateBucketRequest;
                toJSON(message: _673.UpdateBucketRequest): unknown;
                fromPartial<I_30 extends unknown>(object: I_30): _673.UpdateBucketRequest;
            };
            GetBucketRequest: {
                encode(message: _673.GetBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.GetBucketRequest;
                fromJSON(object: any): _673.GetBucketRequest;
                toJSON(message: _673.GetBucketRequest): unknown;
                fromPartial<I_31 extends unknown>(object: I_31): _673.GetBucketRequest;
            };
            DeleteBucketRequest: {
                encode(message: _673.DeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.DeleteBucketRequest;
                fromJSON(object: any): _673.DeleteBucketRequest;
                toJSON(message: _673.DeleteBucketRequest): unknown;
                fromPartial<I_32 extends unknown>(object: I_32): _673.DeleteBucketRequest;
            };
            UndeleteBucketRequest: {
                encode(message: _673.UndeleteBucketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.UndeleteBucketRequest;
                fromJSON(object: any): _673.UndeleteBucketRequest;
                toJSON(message: _673.UndeleteBucketRequest): unknown;
                fromPartial<I_33 extends unknown>(object: I_33): _673.UndeleteBucketRequest;
            };
            ListViewsRequest: {
                encode(message: _673.ListViewsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListViewsRequest;
                fromJSON(object: any): _673.ListViewsRequest;
                toJSON(message: _673.ListViewsRequest): unknown;
                fromPartial<I_34 extends unknown>(object: I_34): _673.ListViewsRequest;
            };
            ListViewsResponse: {
                encode(message: _673.ListViewsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListViewsResponse;
                fromJSON(object: any): _673.ListViewsResponse;
                toJSON(message: _673.ListViewsResponse): unknown;
                fromPartial<I_35 extends unknown>(object: I_35): _673.ListViewsResponse;
            };
            CreateViewRequest: {
                encode(message: _673.CreateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CreateViewRequest;
                fromJSON(object: any): _673.CreateViewRequest;
                toJSON(message: _673.CreateViewRequest): unknown;
                fromPartial<I_36 extends unknown>(object: I_36): _673.CreateViewRequest;
            };
            UpdateViewRequest: {
                encode(message: _673.UpdateViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.UpdateViewRequest;
                fromJSON(object: any): _673.UpdateViewRequest;
                toJSON(message: _673.UpdateViewRequest): unknown;
                fromPartial<I_37 extends unknown>(object: I_37): _673.UpdateViewRequest;
            };
            GetViewRequest: {
                encode(message: _673.GetViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.GetViewRequest;
                fromJSON(object: any): _673.GetViewRequest;
                toJSON(message: _673.GetViewRequest): unknown;
                fromPartial<I_38 extends unknown>(object: I_38): _673.GetViewRequest;
            };
            DeleteViewRequest: {
                encode(message: _673.DeleteViewRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.DeleteViewRequest;
                fromJSON(object: any): _673.DeleteViewRequest;
                toJSON(message: _673.DeleteViewRequest): unknown;
                fromPartial<I_39 extends unknown>(object: I_39): _673.DeleteViewRequest;
            };
            ListSinksRequest: {
                encode(message: _673.ListSinksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListSinksRequest;
                fromJSON(object: any): _673.ListSinksRequest;
                toJSON(message: _673.ListSinksRequest): unknown;
                fromPartial<I_40 extends unknown>(object: I_40): _673.ListSinksRequest;
            };
            ListSinksResponse: {
                encode(message: _673.ListSinksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListSinksResponse;
                fromJSON(object: any): _673.ListSinksResponse;
                toJSON(message: _673.ListSinksResponse): unknown;
                fromPartial<I_41 extends unknown>(object: I_41): _673.ListSinksResponse;
            };
            GetSinkRequest: {
                encode(message: _673.GetSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.GetSinkRequest;
                fromJSON(object: any): _673.GetSinkRequest;
                toJSON(message: _673.GetSinkRequest): unknown;
                fromPartial<I_42 extends unknown>(object: I_42): _673.GetSinkRequest;
            };
            CreateSinkRequest: {
                encode(message: _673.CreateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CreateSinkRequest;
                fromJSON(object: any): _673.CreateSinkRequest;
                toJSON(message: _673.CreateSinkRequest): unknown;
                fromPartial<I_43 extends unknown>(object: I_43): _673.CreateSinkRequest;
            };
            UpdateSinkRequest: {
                encode(message: _673.UpdateSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.UpdateSinkRequest;
                fromJSON(object: any): _673.UpdateSinkRequest;
                toJSON(message: _673.UpdateSinkRequest): unknown;
                fromPartial<I_44 extends unknown>(object: I_44): _673.UpdateSinkRequest;
            };
            DeleteSinkRequest: {
                encode(message: _673.DeleteSinkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.DeleteSinkRequest;
                fromJSON(object: any): _673.DeleteSinkRequest;
                toJSON(message: _673.DeleteSinkRequest): unknown;
                fromPartial<I_45 extends unknown>(object: I_45): _673.DeleteSinkRequest;
            };
            LogExclusion: {
                encode(message: _673.LogExclusion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.LogExclusion;
                fromJSON(object: any): _673.LogExclusion;
                toJSON(message: _673.LogExclusion): unknown;
                fromPartial<I_46 extends unknown>(object: I_46): _673.LogExclusion;
            };
            ListExclusionsRequest: {
                encode(message: _673.ListExclusionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListExclusionsRequest;
                fromJSON(object: any): _673.ListExclusionsRequest;
                toJSON(message: _673.ListExclusionsRequest): unknown;
                fromPartial<I_47 extends unknown>(object: I_47): _673.ListExclusionsRequest;
            };
            ListExclusionsResponse: {
                encode(message: _673.ListExclusionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.ListExclusionsResponse;
                fromJSON(object: any): _673.ListExclusionsResponse;
                toJSON(message: _673.ListExclusionsResponse): unknown;
                fromPartial<I_48 extends unknown>(object: I_48): _673.ListExclusionsResponse;
            };
            GetExclusionRequest: {
                encode(message: _673.GetExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.GetExclusionRequest;
                fromJSON(object: any): _673.GetExclusionRequest;
                toJSON(message: _673.GetExclusionRequest): unknown;
                fromPartial<I_49 extends unknown>(object: I_49): _673.GetExclusionRequest;
            };
            CreateExclusionRequest: {
                encode(message: _673.CreateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CreateExclusionRequest;
                fromJSON(object: any): _673.CreateExclusionRequest;
                toJSON(message: _673.CreateExclusionRequest): unknown;
                fromPartial<I_50 extends unknown>(object: I_50): _673.CreateExclusionRequest;
            };
            UpdateExclusionRequest: {
                encode(message: _673.UpdateExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.UpdateExclusionRequest;
                fromJSON(object: any): _673.UpdateExclusionRequest;
                toJSON(message: _673.UpdateExclusionRequest): unknown;
                fromPartial<I_51 extends unknown>(object: I_51): _673.UpdateExclusionRequest;
            };
            DeleteExclusionRequest: {
                encode(message: _673.DeleteExclusionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.DeleteExclusionRequest;
                fromJSON(object: any): _673.DeleteExclusionRequest;
                toJSON(message: _673.DeleteExclusionRequest): unknown;
                fromPartial<I_52 extends unknown>(object: I_52): _673.DeleteExclusionRequest;
            };
            GetCmekSettingsRequest: {
                encode(message: _673.GetCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.GetCmekSettingsRequest;
                fromJSON(object: any): _673.GetCmekSettingsRequest;
                toJSON(message: _673.GetCmekSettingsRequest): unknown;
                fromPartial<I_53 extends unknown>(object: I_53): _673.GetCmekSettingsRequest;
            };
            UpdateCmekSettingsRequest: {
                encode(message: _673.UpdateCmekSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.UpdateCmekSettingsRequest;
                fromJSON(object: any): _673.UpdateCmekSettingsRequest;
                toJSON(message: _673.UpdateCmekSettingsRequest): unknown;
                fromPartial<I_54 extends unknown>(object: I_54): _673.UpdateCmekSettingsRequest;
            };
            CmekSettings: {
                encode(message: _673.CmekSettings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CmekSettings;
                fromJSON(object: any): _673.CmekSettings;
                toJSON(message: _673.CmekSettings): unknown;
                fromPartial<I_55 extends unknown>(object: I_55): _673.CmekSettings;
            };
            GetSettingsRequest: {
                encode(message: _673.GetSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.GetSettingsRequest;
                fromJSON(object: any): _673.GetSettingsRequest;
                toJSON(message: _673.GetSettingsRequest): unknown;
                fromPartial<I_56 extends unknown>(object: I_56): _673.GetSettingsRequest;
            };
            UpdateSettingsRequest: {
                encode(message: _673.UpdateSettingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.UpdateSettingsRequest;
                fromJSON(object: any): _673.UpdateSettingsRequest;
                toJSON(message: _673.UpdateSettingsRequest): unknown;
                fromPartial<I_57 extends unknown>(object: I_57): _673.UpdateSettingsRequest;
            };
            Settings: {
                encode(message: _673.Settings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.Settings;
                fromJSON(object: any): _673.Settings;
                toJSON(message: _673.Settings): unknown;
                fromPartial<I_58 extends unknown>(object: I_58): _673.Settings;
            };
            CopyLogEntriesRequest: {
                encode(message: _673.CopyLogEntriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CopyLogEntriesRequest;
                fromJSON(object: any): _673.CopyLogEntriesRequest;
                toJSON(message: _673.CopyLogEntriesRequest): unknown;
                fromPartial<I_59 extends unknown>(object: I_59): _673.CopyLogEntriesRequest;
            };
            CopyLogEntriesMetadata: {
                encode(message: _673.CopyLogEntriesMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CopyLogEntriesMetadata;
                fromJSON(object: any): _673.CopyLogEntriesMetadata;
                toJSON(message: _673.CopyLogEntriesMetadata): unknown;
                fromPartial<I_60 extends unknown>(object: I_60): _673.CopyLogEntriesMetadata;
            };
            CopyLogEntriesResponse: {
                encode(message: _673.CopyLogEntriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _673.CopyLogEntriesResponse;
                fromJSON(object: any): _673.CopyLogEntriesResponse;
                toJSON(message: _673.CopyLogEntriesResponse): unknown;
                fromPartial<I_61 extends unknown>(object: I_61): _673.CopyLogEntriesResponse;
            };
            ConfigServiceV2ClientImpl: typeof _673.ConfigServiceV2ClientImpl;
            LogEntry: {
                encode(message: _672.LogEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.LogEntry;
                fromJSON(object: any): _672.LogEntry;
                toJSON(message: _672.LogEntry): unknown;
                fromPartial<I_62 extends unknown>(object: I_62): _672.LogEntry;
            };
            LogEntry_LabelsEntry: {
                encode(message: _672.LogEntry_LabelsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.LogEntry_LabelsEntry;
                fromJSON(object: any): _672.LogEntry_LabelsEntry;
                toJSON(message: _672.LogEntry_LabelsEntry): unknown;
                fromPartial<I_63 extends unknown>(object: I_63): _672.LogEntry_LabelsEntry;
            };
            LogEntryOperation: {
                encode(message: _672.LogEntryOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.LogEntryOperation;
                fromJSON(object: any): _672.LogEntryOperation;
                toJSON(message: _672.LogEntryOperation): unknown;
                fromPartial<I_64 extends unknown>(object: I_64): _672.LogEntryOperation;
            };
            LogEntrySourceLocation: {
                encode(message: _672.LogEntrySourceLocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.LogEntrySourceLocation;
                fromJSON(object: any): _672.LogEntrySourceLocation;
                toJSON(message: _672.LogEntrySourceLocation): unknown;
                fromPartial<I_65 extends unknown>(object: I_65): _672.LogEntrySourceLocation;
            };
            LogSplit: {
                encode(message: _672.LogSplit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _672.LogSplit;
                fromJSON(object: any): _672.LogSplit;
                toJSON(message: _672.LogSplit): unknown;
                fromPartial<I_66 extends unknown>(object: I_66): _672.LogSplit;
            };
        };
    }
    const longrunning: {
        Operation: {
            encode(message: _676.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.Operation;
            fromJSON(object: any): _676.Operation;
            toJSON(message: _676.Operation): unknown;
            fromPartial<I extends unknown>(object: I): _676.Operation;
        };
        GetOperationRequest: {
            encode(message: _676.GetOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.GetOperationRequest;
            fromJSON(object: any): _676.GetOperationRequest;
            toJSON(message: _676.GetOperationRequest): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _676.GetOperationRequest;
        };
        ListOperationsRequest: {
            encode(message: _676.ListOperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.ListOperationsRequest;
            fromJSON(object: any): _676.ListOperationsRequest;
            toJSON(message: _676.ListOperationsRequest): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _676.ListOperationsRequest;
        };
        ListOperationsResponse: {
            encode(message: _676.ListOperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.ListOperationsResponse;
            fromJSON(object: any): _676.ListOperationsResponse;
            toJSON(message: _676.ListOperationsResponse): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _676.ListOperationsResponse;
        };
        CancelOperationRequest: {
            encode(message: _676.CancelOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.CancelOperationRequest;
            fromJSON(object: any): _676.CancelOperationRequest;
            toJSON(message: _676.CancelOperationRequest): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _676.CancelOperationRequest;
        };
        DeleteOperationRequest: {
            encode(message: _676.DeleteOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.DeleteOperationRequest;
            fromJSON(object: any): _676.DeleteOperationRequest;
            toJSON(message: _676.DeleteOperationRequest): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _676.DeleteOperationRequest;
        };
        WaitOperationRequest: {
            encode(message: _676.WaitOperationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.WaitOperationRequest;
            fromJSON(object: any): _676.WaitOperationRequest;
            toJSON(message: _676.WaitOperationRequest): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _676.WaitOperationRequest;
        };
        OperationInfo: {
            encode(message: _676.OperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _676.OperationInfo;
            fromJSON(object: any): _676.OperationInfo;
            toJSON(message: _676.OperationInfo): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _676.OperationInfo;
        };
        OperationsClientImpl: typeof _676.OperationsClientImpl;
    };
    const protobuf: {
        DoubleValue: {
            encode(message: _687.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.DoubleValue;
            fromJSON(object: any): _687.DoubleValue;
            toJSON(message: _687.DoubleValue): unknown;
            fromPartial<I extends unknown>(object: I): _687.DoubleValue;
        };
        FloatValue: {
            encode(message: _687.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.FloatValue;
            fromJSON(object: any): _687.FloatValue;
            toJSON(message: _687.FloatValue): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _687.FloatValue;
        };
        Int64Value: {
            encode(message: _687.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.Int64Value;
            fromJSON(object: any): _687.Int64Value;
            toJSON(message: _687.Int64Value): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _687.Int64Value;
        };
        UInt64Value: {
            encode(message: _687.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.UInt64Value;
            fromJSON(object: any): _687.UInt64Value;
            toJSON(message: _687.UInt64Value): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _687.UInt64Value;
        };
        Int32Value: {
            encode(message: _687.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.Int32Value;
            fromJSON(object: any): _687.Int32Value;
            toJSON(message: _687.Int32Value): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _687.Int32Value;
        };
        UInt32Value: {
            encode(message: _687.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.UInt32Value;
            fromJSON(object: any): _687.UInt32Value;
            toJSON(message: _687.UInt32Value): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _687.UInt32Value;
        };
        BoolValue: {
            encode(message: _687.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.BoolValue;
            fromJSON(object: any): _687.BoolValue;
            toJSON(message: _687.BoolValue): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _687.BoolValue;
        };
        StringValue: {
            encode(message: _687.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.StringValue;
            fromJSON(object: any): _687.StringValue;
            toJSON(message: _687.StringValue): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _687.StringValue;
        };
        BytesValue: {
            encode(message: _687.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _687.BytesValue;
            fromJSON(object: any): _687.BytesValue;
            toJSON(message: _687.BytesValue): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _687.BytesValue;
        };
        syntaxFromJSON(object: any): _686.Syntax;
        syntaxToJSON(object: _686.Syntax): string;
        field_KindFromJSON(object: any): _686.Field_Kind;
        field_KindToJSON(object: _686.Field_Kind): string;
        field_CardinalityFromJSON(object: any): _686.Field_Cardinality;
        field_CardinalityToJSON(object: _686.Field_Cardinality): string;
        Syntax: typeof _686.Syntax;
        Type: {
            encode(message: _686.Type, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.Type;
            fromJSON(object: any): _686.Type;
            toJSON(message: _686.Type): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _686.Type;
        };
        Field: {
            encode(message: _686.Field, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.Field;
            fromJSON(object: any): _686.Field;
            toJSON(message: _686.Field): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _686.Field;
        };
        Field_Kind: typeof _686.Field_Kind;
        Field_Cardinality: typeof _686.Field_Cardinality;
        Enum: {
            encode(message: _686.Enum, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.Enum;
            fromJSON(object: any): _686.Enum;
            toJSON(message: _686.Enum): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _686.Enum;
        };
        EnumValue: {
            encode(message: _686.EnumValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.EnumValue;
            fromJSON(object: any): _686.EnumValue;
            toJSON(message: _686.EnumValue): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _686.EnumValue;
        };
        Option: {
            encode(message: _686.Option, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _686.Option;
            fromJSON(object: any): _686.Option;
            toJSON(message: _686.Option): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _686.Option;
        };
        Timestamp: {
            encode(message: _685.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _685.Timestamp;
            fromJSON(object: any): _685.Timestamp;
            toJSON(message: _685.Timestamp): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _685.Timestamp;
        };
        nullValueFromJSON(object: any): _684.NullValue;
        nullValueToJSON(object: _684.NullValue): string;
        NullValue: typeof _684.NullValue;
        Struct: {
            encode(message: _684.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.Struct;
            fromJSON(object: any): _684.Struct;
            toJSON(message: _684.Struct): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _684.Struct;
            wrap(object: {
                [key: string]: any;
            }): _684.Struct;
            unwrap(message: _684.Struct): {
                [key: string]: any;
            };
        };
        Struct_FieldsEntry: {
            encode(message: _684.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.Struct_FieldsEntry;
            fromJSON(object: any): _684.Struct_FieldsEntry;
            toJSON(message: _684.Struct_FieldsEntry): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _684.Struct_FieldsEntry;
        };
        Value: {
            encode(message: _684.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.Value;
            fromJSON(object: any): _684.Value;
            toJSON(message: _684.Value): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _684.Value;
            wrap(value: any): _684.Value;
            unwrap(message: _684.Value): string | number | boolean | Object | any[];
        };
        ListValue: {
            encode(message: _684.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _684.ListValue;
            fromJSON(object: any): _684.ListValue;
            toJSON(message: _684.ListValue): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _684.ListValue;
            wrap(value: any[]): _684.ListValue;
            unwrap(message: _684.ListValue): any[];
        };
        SourceContext: {
            encode(message: _683.SourceContext, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _683.SourceContext;
            fromJSON(object: any): _683.SourceContext;
            toJSON(message: _683.SourceContext): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _683.SourceContext;
        };
        FieldMask: {
            encode(message: _682.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _682.FieldMask;
            fromJSON(object: any): _682.FieldMask;
            toJSON(message: _682.FieldMask): string;
            fromPartial<I_20 extends unknown>(object: I_20): _682.FieldMask;
            wrap(paths: string[]): _682.FieldMask;
            unwrap(message: _682.FieldMask): string[];
        };
        Empty: {
            encode(_: _681.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _681.Empty;
            fromJSON(_: any): _681.Empty;
            toJSON(_: _681.Empty): unknown;
            fromPartial<I_21 extends unknown>(_: I_21): _681.Empty;
        };
        Duration: {
            encode(message: _680.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _680.Duration;
            fromJSON(object: any): _680.Duration;
            toJSON(message: _680.Duration): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _680.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _679.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _679.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _679.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _679.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _679.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _679.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _679.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _679.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _679.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _679.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _679.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _679.MethodOptions_IdempotencyLevel): string;
        FileDescriptorSet: {
            encode(message: _679.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.FileDescriptorSet;
            fromJSON(object: any): _679.FileDescriptorSet;
            toJSON(message: _679.FileDescriptorSet): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _679.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _679.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.FileDescriptorProto;
            fromJSON(object: any): _679.FileDescriptorProto;
            toJSON(message: _679.FileDescriptorProto): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _679.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _679.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.DescriptorProto;
            fromJSON(object: any): _679.DescriptorProto;
            toJSON(message: _679.DescriptorProto): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _679.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _679.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _679.DescriptorProto_ExtensionRange;
            toJSON(message: _679.DescriptorProto_ExtensionRange): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _679.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _679.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.DescriptorProto_ReservedRange;
            fromJSON(object: any): _679.DescriptorProto_ReservedRange;
            toJSON(message: _679.DescriptorProto_ReservedRange): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _679.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _679.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.ExtensionRangeOptions;
            fromJSON(object: any): _679.ExtensionRangeOptions;
            toJSON(message: _679.ExtensionRangeOptions): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _679.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _679.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.FieldDescriptorProto;
            fromJSON(object: any): _679.FieldDescriptorProto;
            toJSON(message: _679.FieldDescriptorProto): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _679.FieldDescriptorProto;
        };
        FieldDescriptorProto_Type: typeof _679.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _679.FieldDescriptorProto_Label;
        OneofDescriptorProto: {
            encode(message: _679.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.OneofDescriptorProto;
            fromJSON(object: any): _679.OneofDescriptorProto;
            toJSON(message: _679.OneofDescriptorProto): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _679.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _679.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.EnumDescriptorProto;
            fromJSON(object: any): _679.EnumDescriptorProto;
            toJSON(message: _679.EnumDescriptorProto): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _679.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _679.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _679.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _679.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _679.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _679.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.EnumValueDescriptorProto;
            fromJSON(object: any): _679.EnumValueDescriptorProto;
            toJSON(message: _679.EnumValueDescriptorProto): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _679.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _679.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.ServiceDescriptorProto;
            fromJSON(object: any): _679.ServiceDescriptorProto;
            toJSON(message: _679.ServiceDescriptorProto): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _679.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _679.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.MethodDescriptorProto;
            fromJSON(object: any): _679.MethodDescriptorProto;
            toJSON(message: _679.MethodDescriptorProto): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _679.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _679.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.FileOptions;
            fromJSON(object: any): _679.FileOptions;
            toJSON(message: _679.FileOptions): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _679.FileOptions;
        };
        FileOptions_OptimizeMode: typeof _679.FileOptions_OptimizeMode;
        MessageOptions: {
            encode(message: _679.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.MessageOptions;
            fromJSON(object: any): _679.MessageOptions;
            toJSON(message: _679.MessageOptions): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _679.MessageOptions;
        };
        FieldOptions: {
            encode(message: _679.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.FieldOptions;
            fromJSON(object: any): _679.FieldOptions;
            toJSON(message: _679.FieldOptions): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _679.FieldOptions;
        };
        FieldOptions_CType: typeof _679.FieldOptions_CType;
        FieldOptions_JSType: typeof _679.FieldOptions_JSType;
        OneofOptions: {
            encode(message: _679.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.OneofOptions;
            fromJSON(object: any): _679.OneofOptions;
            toJSON(message: _679.OneofOptions): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _679.OneofOptions;
        };
        EnumOptions: {
            encode(message: _679.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.EnumOptions;
            fromJSON(object: any): _679.EnumOptions;
            toJSON(message: _679.EnumOptions): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _679.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _679.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.EnumValueOptions;
            fromJSON(object: any): _679.EnumValueOptions;
            toJSON(message: _679.EnumValueOptions): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _679.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _679.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.ServiceOptions;
            fromJSON(object: any): _679.ServiceOptions;
            toJSON(message: _679.ServiceOptions): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _679.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _679.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.MethodOptions;
            fromJSON(object: any): _679.MethodOptions;
            toJSON(message: _679.MethodOptions): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _679.MethodOptions;
        };
        MethodOptions_IdempotencyLevel: typeof _679.MethodOptions_IdempotencyLevel;
        UninterpretedOption: {
            encode(message: _679.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.UninterpretedOption;
            fromJSON(object: any): _679.UninterpretedOption;
            toJSON(message: _679.UninterpretedOption): unknown;
            fromPartial<I_44 extends unknown>(object: I_44): _679.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _679.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.UninterpretedOption_NamePart;
            fromJSON(object: any): _679.UninterpretedOption_NamePart;
            toJSON(message: _679.UninterpretedOption_NamePart): unknown;
            fromPartial<I_45 extends unknown>(object: I_45): _679.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _679.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.SourceCodeInfo;
            fromJSON(object: any): _679.SourceCodeInfo;
            toJSON(message: _679.SourceCodeInfo): unknown;
            fromPartial<I_46 extends unknown>(object: I_46): _679.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _679.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.SourceCodeInfo_Location;
            fromJSON(object: any): _679.SourceCodeInfo_Location;
            toJSON(message: _679.SourceCodeInfo_Location): unknown;
            fromPartial<I_47 extends unknown>(object: I_47): _679.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _679.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.GeneratedCodeInfo;
            fromJSON(object: any): _679.GeneratedCodeInfo;
            toJSON(message: _679.GeneratedCodeInfo): unknown;
            fromPartial<I_48 extends unknown>(object: I_48): _679.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _679.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _679.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _679.GeneratedCodeInfo_Annotation;
            toJSON(message: _679.GeneratedCodeInfo_Annotation): unknown;
            fromPartial<I_49 extends unknown>(object: I_49): _679.GeneratedCodeInfo_Annotation;
        };
        Api: {
            encode(message: _678.Api, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.Api;
            fromJSON(object: any): _678.Api;
            toJSON(message: _678.Api): unknown;
            fromPartial<I_50 extends unknown>(object: I_50): _678.Api;
        };
        Method: {
            encode(message: _678.Method, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.Method;
            fromJSON(object: any): _678.Method;
            toJSON(message: _678.Method): unknown;
            fromPartial<I_51 extends unknown>(object: I_51): _678.Method;
        };
        Mixin: {
            encode(message: _678.Mixin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _678.Mixin;
            fromJSON(object: any): _678.Mixin;
            toJSON(message: _678.Mixin): unknown;
            fromPartial<I_52 extends unknown>(object: I_52): _678.Mixin;
        };
        Any: {
            encode(message: _677.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _677.Any;
            fromJSON(object: any): _677.Any;
            toJSON(message: _677.Any): unknown;
            fromPartial<I_53 extends unknown>(object: I_53): _677.Any;
        };
    };
    const rpc: {
        Status: {
            encode(message: _690.Status, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _690.Status;
            fromJSON(object: any): _690.Status;
            toJSON(message: _690.Status): unknown;
            fromPartial<I extends unknown>(object: I): _690.Status;
        };
        RetryInfo: {
            encode(message: _689.RetryInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.RetryInfo;
            fromJSON(object: any): _689.RetryInfo;
            toJSON(message: _689.RetryInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _689.RetryInfo;
        };
        DebugInfo: {
            encode(message: _689.DebugInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.DebugInfo;
            fromJSON(object: any): _689.DebugInfo;
            toJSON(message: _689.DebugInfo): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _689.DebugInfo;
        };
        QuotaFailure: {
            encode(message: _689.QuotaFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QuotaFailure;
            fromJSON(object: any): _689.QuotaFailure;
            toJSON(message: _689.QuotaFailure): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _689.QuotaFailure;
        };
        QuotaFailure_Violation: {
            encode(message: _689.QuotaFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.QuotaFailure_Violation;
            fromJSON(object: any): _689.QuotaFailure_Violation;
            toJSON(message: _689.QuotaFailure_Violation): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _689.QuotaFailure_Violation;
        };
        ErrorInfo: {
            encode(message: _689.ErrorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.ErrorInfo;
            fromJSON(object: any): _689.ErrorInfo;
            toJSON(message: _689.ErrorInfo): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _689.ErrorInfo;
        };
        ErrorInfo_MetadataEntry: {
            encode(message: _689.ErrorInfo_MetadataEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.ErrorInfo_MetadataEntry;
            fromJSON(object: any): _689.ErrorInfo_MetadataEntry;
            toJSON(message: _689.ErrorInfo_MetadataEntry): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _689.ErrorInfo_MetadataEntry;
        };
        PreconditionFailure: {
            encode(message: _689.PreconditionFailure, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.PreconditionFailure;
            fromJSON(object: any): _689.PreconditionFailure;
            toJSON(message: _689.PreconditionFailure): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _689.PreconditionFailure;
        };
        PreconditionFailure_Violation: {
            encode(message: _689.PreconditionFailure_Violation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.PreconditionFailure_Violation;
            fromJSON(object: any): _689.PreconditionFailure_Violation;
            toJSON(message: _689.PreconditionFailure_Violation): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _689.PreconditionFailure_Violation;
        };
        BadRequest: {
            encode(message: _689.BadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.BadRequest;
            fromJSON(object: any): _689.BadRequest;
            toJSON(message: _689.BadRequest): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _689.BadRequest;
        };
        BadRequest_FieldViolation: {
            encode(message: _689.BadRequest_FieldViolation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.BadRequest_FieldViolation;
            fromJSON(object: any): _689.BadRequest_FieldViolation;
            toJSON(message: _689.BadRequest_FieldViolation): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _689.BadRequest_FieldViolation;
        };
        RequestInfo: {
            encode(message: _689.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.RequestInfo;
            fromJSON(object: any): _689.RequestInfo;
            toJSON(message: _689.RequestInfo): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _689.RequestInfo;
        };
        ResourceInfo: {
            encode(message: _689.ResourceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.ResourceInfo;
            fromJSON(object: any): _689.ResourceInfo;
            toJSON(message: _689.ResourceInfo): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _689.ResourceInfo;
        };
        Help: {
            encode(message: _689.Help, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.Help;
            fromJSON(object: any): _689.Help;
            toJSON(message: _689.Help): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _689.Help;
        };
        Help_Link: {
            encode(message: _689.Help_Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.Help_Link;
            fromJSON(object: any): _689.Help_Link;
            toJSON(message: _689.Help_Link): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _689.Help_Link;
        };
        LocalizedMessage: {
            encode(message: _689.LocalizedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _689.LocalizedMessage;
            fromJSON(object: any): _689.LocalizedMessage;
            toJSON(message: _689.LocalizedMessage): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _689.LocalizedMessage;
        };
        codeFromJSON(object: any): _688.Code;
        codeToJSON(object: _688.Code): string;
        Code: typeof _688.Code;
    };
}
