import { FieldMask, FieldMaskSDKType } from "../../protobuf/field_mask";
import { Timestamp, TimestampSDKType } from "../../protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "google.logging.v2";
/** Deprecated. This is unused. */
export enum LogSink_VersionFormat {
  /** VERSION_FORMAT_UNSPECIFIED - An unspecified format version that will default to V2. */
  VERSION_FORMAT_UNSPECIFIED = 0,
  /** V2 - `LogEntry` version 2 format. */
  V2 = 1,
  /** V1 - `LogEntry` version 1 format. */
  V1 = 2,
  UNRECOGNIZED = -1,
}
export const LogSink_VersionFormatSDKType = LogSink_VersionFormat;
export function logSink_VersionFormatFromJSON(object: any): LogSink_VersionFormat {
  switch (object) {
    case 0:
    case "VERSION_FORMAT_UNSPECIFIED":
      return LogSink_VersionFormat.VERSION_FORMAT_UNSPECIFIED;
    case 1:
    case "V2":
      return LogSink_VersionFormat.V2;
    case 2:
    case "V1":
      return LogSink_VersionFormat.V1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogSink_VersionFormat.UNRECOGNIZED;
  }
}
export function logSink_VersionFormatToJSON(object: LogSink_VersionFormat): string {
  switch (object) {
    case LogSink_VersionFormat.VERSION_FORMAT_UNSPECIFIED:
      return "VERSION_FORMAT_UNSPECIFIED";
    case LogSink_VersionFormat.V2:
      return "V2";
    case LogSink_VersionFormat.V1:
      return "V1";
    case LogSink_VersionFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LogBucket lifecycle states. */
export enum LifecycleState {
  /**
   * LIFECYCLE_STATE_UNSPECIFIED - Unspecified state. This is only used/useful for distinguishing unset
   * values.
   */
  LIFECYCLE_STATE_UNSPECIFIED = 0,
  /** ACTIVE - The normal and active state. */
  ACTIVE = 1,
  /**
   * DELETE_REQUESTED - The resource has been marked for deletion by the user. For some resources
   * (e.g. buckets), this can be reversed by an un-delete operation.
   */
  DELETE_REQUESTED = 2,
  UNRECOGNIZED = -1,
}
export const LifecycleStateSDKType = LifecycleState;
export function lifecycleStateFromJSON(object: any): LifecycleState {
  switch (object) {
    case 0:
    case "LIFECYCLE_STATE_UNSPECIFIED":
      return LifecycleState.LIFECYCLE_STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return LifecycleState.ACTIVE;
    case 2:
    case "DELETE_REQUESTED":
      return LifecycleState.DELETE_REQUESTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LifecycleState.UNRECOGNIZED;
  }
}
export function lifecycleStateToJSON(object: LifecycleState): string {
  switch (object) {
    case LifecycleState.LIFECYCLE_STATE_UNSPECIFIED:
      return "LIFECYCLE_STATE_UNSPECIFIED";
    case LifecycleState.ACTIVE:
      return "ACTIVE";
    case LifecycleState.DELETE_REQUESTED:
      return "DELETE_REQUESTED";
    case LifecycleState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * List of different operation states.
 * High level state of the operation. This is used to report the job's
 * current state to the user. Once a long running operation is created,
 * the current state of the operation can be queried even before the
 * operation is finished and the final result is available.
 */
export enum OperationState {
  /** OPERATION_STATE_UNSPECIFIED - Should not be used. */
  OPERATION_STATE_UNSPECIFIED = 0,
  /** OPERATION_STATE_SCHEDULED - The operation is scheduled. */
  OPERATION_STATE_SCHEDULED = 1,
  /** OPERATION_STATE_WAITING_FOR_PERMISSIONS - Waiting for necessary permissions. */
  OPERATION_STATE_WAITING_FOR_PERMISSIONS = 2,
  /** OPERATION_STATE_RUNNING - The operation is running. */
  OPERATION_STATE_RUNNING = 3,
  /** OPERATION_STATE_SUCCEEDED - The operation was completed successfully. */
  OPERATION_STATE_SUCCEEDED = 4,
  /** OPERATION_STATE_FAILED - The operation failed. */
  OPERATION_STATE_FAILED = 5,
  /** OPERATION_STATE_CANCELLED - The operation was cancelled by the user. */
  OPERATION_STATE_CANCELLED = 6,
  UNRECOGNIZED = -1,
}
export const OperationStateSDKType = OperationState;
export function operationStateFromJSON(object: any): OperationState {
  switch (object) {
    case 0:
    case "OPERATION_STATE_UNSPECIFIED":
      return OperationState.OPERATION_STATE_UNSPECIFIED;
    case 1:
    case "OPERATION_STATE_SCHEDULED":
      return OperationState.OPERATION_STATE_SCHEDULED;
    case 2:
    case "OPERATION_STATE_WAITING_FOR_PERMISSIONS":
      return OperationState.OPERATION_STATE_WAITING_FOR_PERMISSIONS;
    case 3:
    case "OPERATION_STATE_RUNNING":
      return OperationState.OPERATION_STATE_RUNNING;
    case 4:
    case "OPERATION_STATE_SUCCEEDED":
      return OperationState.OPERATION_STATE_SUCCEEDED;
    case 5:
    case "OPERATION_STATE_FAILED":
      return OperationState.OPERATION_STATE_FAILED;
    case 6:
    case "OPERATION_STATE_CANCELLED":
      return OperationState.OPERATION_STATE_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationState.UNRECOGNIZED;
  }
}
export function operationStateToJSON(object: OperationState): string {
  switch (object) {
    case OperationState.OPERATION_STATE_UNSPECIFIED:
      return "OPERATION_STATE_UNSPECIFIED";
    case OperationState.OPERATION_STATE_SCHEDULED:
      return "OPERATION_STATE_SCHEDULED";
    case OperationState.OPERATION_STATE_WAITING_FOR_PERMISSIONS:
      return "OPERATION_STATE_WAITING_FOR_PERMISSIONS";
    case OperationState.OPERATION_STATE_RUNNING:
      return "OPERATION_STATE_RUNNING";
    case OperationState.OPERATION_STATE_SUCCEEDED:
      return "OPERATION_STATE_SUCCEEDED";
    case OperationState.OPERATION_STATE_FAILED:
      return "OPERATION_STATE_FAILED";
    case OperationState.OPERATION_STATE_CANCELLED:
      return "OPERATION_STATE_CANCELLED";
    case OperationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Describes a repository in which log entries are stored. */
export interface LogBucket {
  /**
   * Output only. The resource name of the bucket.
   * 
   * For example:
   * 
   *   `projects/my-project/locations/global/buckets/my-bucket`
   * 
   * For a list of supported locations, see [Supported
   * Regions](https://cloud.google.com/logging/docs/region-support)
   * 
   * For the location of `global` it is unspecified where log entries are
   * actually stored.
   * 
   * After a bucket has been created, the location cannot be changed.
   */
  name: string;
  /** Describes this bucket. */
  description: string;
  /**
   * Output only. The creation timestamp of the bucket. This is not set for any of the
   * default buckets.
   */
  createTime?: Date;
  /** Output only. The last update timestamp of the bucket. */
  updateTime?: Date;
  /**
   * Logs will be retained by default for this amount of time, after which they
   * will automatically be deleted. The minimum retention period is 1 day. If
   * this value is set to zero at bucket creation time, the default time of 30
   * days will be used.
   */
  retentionDays: number;
  /**
   * Whether the bucket is locked.
   * 
   * The retention period on a locked bucket cannot be changed. Locked buckets
   * may only be deleted if they are empty.
   */
  locked: boolean;
  /** Output only. The bucket lifecycle state. */
  lifecycleState: LifecycleState;
  /**
   * Log entry field paths that are denied access in this bucket.
   * 
   * The following fields and their children are eligible: `textPayload`,
   * `jsonPayload`, `protoPayload`, `httpRequest`, `labels`, `sourceLocation`.
   * 
   * Restricting a repeated field will restrict all values. Adding a parent will
   * block all child fields. (e.g. `foo.bar` will block `foo.bar.baz`)
   */
  restrictedFields: string[];
  /**
   * The CMEK settings of the log bucket. If present, new log entries written to
   * this log bucket are encrypted using the CMEK key provided in this
   * configuration. If a log bucket has CMEK settings, the CMEK settings cannot
   * be disabled later by updating the log bucket. Changing the KMS key is
   * allowed.
   */
  cmekSettings?: CmekSettings;
}
export interface LogBucketProtoMsg {
  typeUrl: "/google.logging.v2.LogBucket";
  value: Uint8Array;
}
/** Describes a repository in which log entries are stored. */
export interface LogBucketSDKType {
  name: string;
  description: string;
  create_time?: Date;
  update_time?: Date;
  retention_days: number;
  locked: boolean;
  lifecycle_state: LifecycleState;
  restricted_fields: string[];
  cmek_settings?: CmekSettingsSDKType;
}
/** Describes a view over log entries in a bucket. */
export interface LogView {
  /**
   * The resource name of the view.
   * 
   * For example:
   * 
   *   `projects/my-project/locations/global/buckets/my-bucket/views/my-view`
   */
  name: string;
  /** Describes this view. */
  description: string;
  /** Output only. The creation timestamp of the view. */
  createTime?: Date;
  /** Output only. The last update timestamp of the view. */
  updateTime?: Date;
  /**
   * Filter that restricts which log entries in a bucket are visible in this
   * view.
   * 
   * Filters are restricted to be a logical AND of ==/!= of any of the
   * following:
   * 
   *   - originating project/folder/organization/billing account.
   *   - resource type
   *   - log id
   * 
   * For example:
   * 
   *   SOURCE("projects/myproject") AND resource.type = "gce_instance"
   *                                AND LOG_ID("stdout")
   */
  filter: string;
}
export interface LogViewProtoMsg {
  typeUrl: "/google.logging.v2.LogView";
  value: Uint8Array;
}
/** Describes a view over log entries in a bucket. */
export interface LogViewSDKType {
  name: string;
  description: string;
  create_time?: Date;
  update_time?: Date;
  filter: string;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a
 * Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log
 * entries are exported. The sink must be created within a project,
 * organization, billing account, or folder.
 */
export interface LogSink {
  /**
   * Required. The client-assigned sink identifier, unique within the project.
   * 
   * For example: `"my-syslog-errors-to-pubsub"`. Sink identifiers are limited
   * to 100 characters and can include only the following characters: upper and
   * lower-case alphanumeric characters, underscores, hyphens, and periods.
   * First character has to be alphanumeric.
   */
  name: string;
  /**
   * Required. The export destination:
   * 
   *     "storage.googleapis.com/[GCS_BUCKET]"
   *     "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
   *     "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]"
   * 
   * The sink's `writer_identity`, set when the sink is created, must have
   * permission to write to the destination or else the log entries are not
   * exported. For more information, see
   * [Exporting Logs with
   * Sinks](https://cloud.google.com/logging/docs/api/tasks/exporting-logs).
   */
  destination: string;
  /**
   * Optional. An [advanced logs
   * filter](https://cloud.google.com/logging/docs/view/advanced-queries). The
   * only exported log entries are those that are in the resource owning the
   * sink and that match the filter.
   * 
   * For example:
   * 
   *   `logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR`
   */
  filter: string;
  /**
   * Optional. A description of this sink.
   * 
   * The maximum length of the description is 8000 characters.
   */
  description: string;
  /**
   * Optional. If set to true, then this sink is disabled and it does not export any log
   * entries.
   */
  disabled: boolean;
  /**
   * Optional. Log entries that match any of these exclusion filters will not be exported.
   * 
   * If a log entry is matched by both `filter` and one of `exclusion_filters`
   * it will not be exported.
   */
  exclusions: LogExclusion[];
  /** Deprecated. This field is unused. */
  /** @deprecated */
  outputVersionFormat: LogSink_VersionFormat;
  /**
   * Output only. An IAM identity&mdash;a service account or group&mdash;under which Cloud
   * Logging writes the exported log entries to the sink's destination. This
   * field is set by
   * [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink] and
   * [sinks.update][google.logging.v2.ConfigServiceV2.UpdateSink] based on the
   * value of `unique_writer_identity` in those methods.
   * 
   * Until you grant this identity write-access to the destination, log entry
   * exports from this sink will fail. For more information, see [Granting
   * Access for a
   * Resource](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource).
   * Consult the destination service's documentation to determine the
   * appropriate IAM roles to assign to the identity.
   * 
   * Sinks that have a destination that is a log bucket in the same project as
   * the sink do not have a writer_identity and no additional permissions are
   * required.
   */
  writerIdentity: string;
  /**
   * Optional. This field applies only to sinks owned by organizations and folders. If the
   * field is false, the default, only the logs owned by the sink's parent
   * resource are available for export. If the field is true, then log entries
   * from all the projects, folders, and billing accounts contained in the
   * sink's parent resource are also available for export. Whether a particular
   * log entry from the children is exported depends on the sink's filter
   * expression.
   * 
   * For example, if this field is true, then the filter
   * `resource.type=gce_instance` would export all Compute Engine VM instance
   * log entries from all projects in the sink's parent.
   * 
   * To only export entries from certain child projects, filter on the project
   * part of the log name:
   * 
   *   logName:("projects/test-project1/" OR "projects/test-project2/") AND
   *   resource.type=gce_instance
   */
  includeChildren: boolean;
  /** Optional. Options that affect sinks exporting data to BigQuery. */
  bigqueryOptions?: BigQueryOptions;
  /**
   * Output only. The creation timestamp of the sink.
   * 
   * This field may not be present for older sinks.
   */
  createTime?: Date;
  /**
   * Output only. The last update timestamp of the sink.
   * 
   * This field may not be present for older sinks.
   */
  updateTime?: Date;
}
export interface LogSinkProtoMsg {
  typeUrl: "/google.logging.v2.LogSink";
  value: Uint8Array;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a
 * Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log
 * entries are exported. The sink must be created within a project,
 * organization, billing account, or folder.
 */
export interface LogSinkSDKType {
  name: string;
  destination: string;
  filter: string;
  description: string;
  disabled: boolean;
  exclusions: LogExclusionSDKType[];
  /** @deprecated */
  output_version_format: LogSink_VersionFormat;
  writer_identity: string;
  include_children: boolean;
  bigquery_options?: BigQueryOptionsSDKType;
  create_time?: Date;
  update_time?: Date;
}
/** Options that change functionality of a sink exporting data to BigQuery. */
export interface BigQueryOptions {
  /**
   * Optional. Whether to use [BigQuery's partition
   * tables](https://cloud.google.com/bigquery/docs/partitioned-tables). By
   * default, Cloud Logging creates dated tables based on the log entries'
   * timestamps, e.g. syslog_20170523. With partitioned tables the date suffix
   * is no longer present and [special query
   * syntax](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)
   * has to be used instead. In both cases, tables are sharded based on UTC
   * timezone.
   */
  usePartitionedTables: boolean;
  /**
   * Output only. True if new timestamp column based partitioning is in use, false if legacy
   * ingestion-time partitioning is in use.
   * 
   * All new sinks will have this field set true and will use timestamp column
   * based partitioning. If use_partitioned_tables is false, this value has no
   * meaning and will be false. Legacy sinks using partitioned tables will have
   * this field set to false.
   */
  usesTimestampColumnPartitioning: boolean;
}
export interface BigQueryOptionsProtoMsg {
  typeUrl: "/google.logging.v2.BigQueryOptions";
  value: Uint8Array;
}
/** Options that change functionality of a sink exporting data to BigQuery. */
export interface BigQueryOptionsSDKType {
  use_partitioned_tables: boolean;
  uses_timestamp_column_partitioning: boolean;
}
/** The parameters to `ListBuckets`. */
export interface ListBucketsRequest {
  /**
   * Required. The parent resource whose buckets are to be listed:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]"
   * 
   * Note: The locations portion of the resource must be specified, but
   * supplying the character `-` in place of [LOCATION_ID] will return all
   * buckets.
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the preceding call
   * to this method. `pageToken` must be the value of `nextPageToken` from the
   * previous response. The values of other method parameters should be
   * identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request. Non-positive
   * values are ignored. The presence of `nextPageToken` in the response
   * indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListBucketsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListBucketsRequest";
  value: Uint8Array;
}
/** The parameters to `ListBuckets`. */
export interface ListBucketsRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** The response from ListBuckets. */
export interface ListBucketsResponse {
  /** A list of buckets. */
  buckets: LogBucket[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListBucketsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListBucketsResponse";
  value: Uint8Array;
}
/** The response from ListBuckets. */
export interface ListBucketsResponseSDKType {
  buckets: LogBucketSDKType[];
  next_page_token: string;
}
/** The parameters to `CreateBucket`. */
export interface CreateBucketRequest {
  /**
   * Required. The resource in which to create the log bucket:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global"`
   */
  parent: string;
  /**
   * Required. A client-assigned identifier such as `"my-bucket"`. Identifiers are limited
   * to 100 characters and can include only letters, digits, underscores,
   * hyphens, and periods.
   */
  bucketId: string;
  /**
   * Required. The new bucket. The region specified in the new bucket must be compliant
   * with any Location Restriction Org Policy. The name field in the bucket is
   * ignored.
   */
  bucket?: LogBucket;
}
export interface CreateBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateBucketRequest";
  value: Uint8Array;
}
/** The parameters to `CreateBucket`. */
export interface CreateBucketRequestSDKType {
  parent: string;
  bucket_id: string;
  bucket?: LogBucketSDKType;
}
/** The parameters to `UpdateBucket`. */
export interface UpdateBucketRequest {
  /**
   * Required. The full resource name of the bucket to update.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
  /** Required. The updated bucket. */
  bucket?: LogBucket;
  /**
   * Required. Field mask that specifies the fields in `bucket` that need an update. A
   * bucket field will be overwritten if, and only if, it is in the update mask.
   * `name` and output only fields cannot be updated.
   * 
   * For a detailed `FieldMask` definition, see:
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=retention_days`
   */
  updateMask?: FieldMask;
}
export interface UpdateBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateBucketRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateBucket`. */
export interface UpdateBucketRequestSDKType {
  name: string;
  bucket?: LogBucketSDKType;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `GetBucket`. */
export interface GetBucketRequest {
  /**
   * Required. The resource name of the bucket:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
}
export interface GetBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetBucketRequest";
  value: Uint8Array;
}
/** The parameters to `GetBucket`. */
export interface GetBucketRequestSDKType {
  name: string;
}
/** The parameters to `DeleteBucket`. */
export interface DeleteBucketRequest {
  /**
   * Required. The full resource name of the bucket to delete.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
}
export interface DeleteBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteBucketRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteBucket`. */
export interface DeleteBucketRequestSDKType {
  name: string;
}
/** The parameters to `UndeleteBucket`. */
export interface UndeleteBucketRequest {
  /**
   * Required. The full resource name of the bucket to undelete.
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   *     "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  name: string;
}
export interface UndeleteBucketRequestProtoMsg {
  typeUrl: "/google.logging.v2.UndeleteBucketRequest";
  value: Uint8Array;
}
/** The parameters to `UndeleteBucket`. */
export interface UndeleteBucketRequestSDKType {
  name: string;
}
/** The parameters to `ListViews`. */
export interface ListViewsRequest {
  /**
   * Required. The bucket whose views are to be listed:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the preceding call
   * to this method. `pageToken` must be the value of `nextPageToken` from the
   * previous response. The values of other method parameters should be
   * identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * 
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListViewsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListViewsRequest";
  value: Uint8Array;
}
/** The parameters to `ListViews`. */
export interface ListViewsRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** The response from ListViews. */
export interface ListViewsResponse {
  /** A list of views. */
  views: LogView[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListViewsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListViewsResponse";
  value: Uint8Array;
}
/** The response from ListViews. */
export interface ListViewsResponseSDKType {
  views: LogViewSDKType[];
  next_page_token: string;
}
/** The parameters to `CreateView`. */
export interface CreateViewRequest {
  /**
   * Required. The bucket in which to create the view
   * 
   *     `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"`
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket"`
   */
  parent: string;
  /** Required. The id to use for this view. */
  viewId: string;
  /** Required. The new view. */
  view?: LogView;
}
export interface CreateViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateViewRequest";
  value: Uint8Array;
}
/** The parameters to `CreateView`. */
export interface CreateViewRequestSDKType {
  parent: string;
  view_id: string;
  view?: LogViewSDKType;
}
/** The parameters to `UpdateView`. */
export interface UpdateViewRequest {
  /**
   * Required. The full resource name of the view to update
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name: string;
  /** Required. The updated view. */
  view?: LogView;
  /**
   * Optional. Field mask that specifies the fields in `view` that need
   * an update. A field will be overwritten if, and only if, it is
   * in the update mask. `name` and output only fields cannot be updated.
   * 
   * For a detailed `FieldMask` definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=filter`
   */
  updateMask?: FieldMask;
}
export interface UpdateViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateViewRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateView`. */
export interface UpdateViewRequestSDKType {
  name: string;
  view?: LogViewSDKType;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `GetView`. */
export interface GetViewRequest {
  /**
   * Required. The resource name of the policy:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name: string;
}
export interface GetViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetViewRequest";
  value: Uint8Array;
}
/** The parameters to `GetView`. */
export interface GetViewRequestSDKType {
  name: string;
}
/** The parameters to `DeleteView`. */
export interface DeleteViewRequest {
  /**
   * Required. The full resource name of the view to delete:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]"
   * 
   * For example:
   * 
   *    `"projects/my-project/locations/global/buckets/my-bucket/views/my-view"`
   */
  name: string;
}
export interface DeleteViewRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteViewRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteView`. */
export interface DeleteViewRequestSDKType {
  name: string;
}
/** The parameters to `ListSinks`. */
export interface ListSinksRequest {
  /**
   * Required. The parent resource whose sinks are to be listed:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. `pageToken` must be the value of
   * `nextPageToken` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListSinksRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListSinksRequest";
  value: Uint8Array;
}
/** The parameters to `ListSinks`. */
export interface ListSinksRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** Result returned from `ListSinks`. */
export interface ListSinksResponse {
  /** A list of sinks. */
  sinks: LogSink[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListSinksResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListSinksResponse";
  value: Uint8Array;
}
/** Result returned from `ListSinks`. */
export interface ListSinksResponseSDKType {
  sinks: LogSinkSDKType[];
  next_page_token: string;
}
/** The parameters to `GetSink`. */
export interface GetSinkRequest {
  /**
   * Required. The resource name of the sink:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sinkName: string;
}
export interface GetSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetSinkRequest";
  value: Uint8Array;
}
/** The parameters to `GetSink`. */
export interface GetSinkRequestSDKType {
  sink_name: string;
}
/** The parameters to `CreateSink`. */
export interface CreateSinkRequest {
  /**
   * Required. The resource in which to create the sink:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   * 
   * For examples:
   * 
   *   `"projects/my-project"`
   *   `"organizations/123456789"`
   */
  parent: string;
  /**
   * Required. The new sink, whose `name` parameter is a sink identifier that
   * is not already in use.
   */
  sink?: LogSink;
  /**
   * Optional. Determines the kind of IAM identity returned as `writer_identity`
   * in the new sink. If this value is omitted or set to false, and if the
   * sink's parent is a project, then the value returned as `writer_identity` is
   * the same group or service account used by Cloud Logging before the addition
   * of writer identities to this API. The sink's destination must be in the
   * same project as the sink itself.
   * 
   * If this field is set to true, or if the sink is owned by a non-project
   * resource such as an organization, then the value of `writer_identity` will
   * be a unique service account used only for exports from the new sink. For
   * more information, see `writer_identity` in [LogSink][google.logging.v2.LogSink].
   */
  uniqueWriterIdentity: boolean;
}
export interface CreateSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateSinkRequest";
  value: Uint8Array;
}
/** The parameters to `CreateSink`. */
export interface CreateSinkRequestSDKType {
  parent: string;
  sink?: LogSinkSDKType;
  unique_writer_identity: boolean;
}
/** The parameters to `UpdateSink`. */
export interface UpdateSinkRequest {
  /**
   * Required. The full resource name of the sink to update, including the parent
   * resource and the sink identifier:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sinkName: string;
  /**
   * Required. The updated sink, whose name is the same identifier that appears as part
   * of `sink_name`.
   */
  sink?: LogSink;
  /**
   * Optional. See [sinks.create][google.logging.v2.ConfigServiceV2.CreateSink]
   * for a description of this field. When updating a sink, the effect of this
   * field on the value of `writer_identity` in the updated sink depends on both
   * the old and new values of this field:
   * 
   * +   If the old and new values of this field are both false or both true,
   *     then there is no change to the sink's `writer_identity`.
   * +   If the old value is false and the new value is true, then
   *     `writer_identity` is changed to a unique service account.
   * +   It is an error if the old value is true and the new value is
   *     set to false or defaulted to false.
   */
  uniqueWriterIdentity: boolean;
  /**
   * Optional. Field mask that specifies the fields in `sink` that need
   * an update. A sink field will be overwritten if, and only if, it is
   * in the update mask. `name` and output only fields cannot be updated.
   * 
   * An empty `updateMask` is temporarily treated as using the following mask
   * for backwards compatibility purposes:
   * 
   *   `destination,filter,includeChildren`
   * 
   * At some point in the future, behavior will be removed and specifying an
   * empty `updateMask` will be an error.
   * 
   * For a detailed `FieldMask` definition, see
   * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask
   * 
   * For example: `updateMask=filter`
   */
  updateMask?: FieldMask;
}
export interface UpdateSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateSinkRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateSink`. */
export interface UpdateSinkRequestSDKType {
  sink_name: string;
  sink?: LogSinkSDKType;
  unique_writer_identity: boolean;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `DeleteSink`. */
export interface DeleteSinkRequest {
  /**
   * Required. The full resource name of the sink to delete, including the parent
   * resource and the sink identifier:
   * 
   *     "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/sinks/my-sink"`
   */
  sinkName: string;
}
export interface DeleteSinkRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteSinkRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteSink`. */
export interface DeleteSinkRequestSDKType {
  sink_name: string;
}
/**
 * Specifies a set of log entries that are filtered out by a sink. If
 * your Google Cloud resource receives a large volume of log entries, you can
 * use exclusions to reduce your chargeable logs. Note that exclusions on
 * organization-level and folder-level sinks don't apply to child resources.
 * Note also that you cannot modify the _Required sink or exclude logs from it.
 */
export interface LogExclusion {
  /**
   * Required. A client-assigned identifier, such as `"load-balancer-exclusion"`.
   * Identifiers are limited to 100 characters and can include only letters,
   * digits, underscores, hyphens, and periods. First character has to be
   * alphanumeric.
   */
  name: string;
  /** Optional. A description of this exclusion. */
  description: string;
  /**
   * Required. An [advanced logs
   * filter](https://cloud.google.com/logging/docs/view/advanced-queries) that
   * matches the log entries to be excluded. By using the [sample
   * function](https://cloud.google.com/logging/docs/view/advanced-queries#sample),
   * you can exclude less than 100% of the matching log entries.
   * 
   * For example, the following query matches 99% of low-severity log entries
   * from Google Cloud Storage buckets:
   * 
   *   `resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)`
   */
  filter: string;
  /**
   * Optional. If set to True, then this exclusion is disabled and it does not
   * exclude any log entries. You can [update an
   * exclusion][google.logging.v2.ConfigServiceV2.UpdateExclusion] to change the
   * value of this field.
   */
  disabled: boolean;
  /**
   * Output only. The creation timestamp of the exclusion.
   * 
   * This field may not be present for older exclusions.
   */
  createTime?: Date;
  /**
   * Output only. The last update timestamp of the exclusion.
   * 
   * This field may not be present for older exclusions.
   */
  updateTime?: Date;
}
export interface LogExclusionProtoMsg {
  typeUrl: "/google.logging.v2.LogExclusion";
  value: Uint8Array;
}
/**
 * Specifies a set of log entries that are filtered out by a sink. If
 * your Google Cloud resource receives a large volume of log entries, you can
 * use exclusions to reduce your chargeable logs. Note that exclusions on
 * organization-level and folder-level sinks don't apply to child resources.
 * Note also that you cannot modify the _Required sink or exclude logs from it.
 */
export interface LogExclusionSDKType {
  name: string;
  description: string;
  filter: string;
  disabled: boolean;
  create_time?: Date;
  update_time?: Date;
}
/** The parameters to `ListExclusions`. */
export interface ListExclusionsRequest {
  /**
   * Required. The parent resource whose exclusions are to be listed.
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   */
  parent: string;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. `pageToken` must be the value of
   * `nextPageToken` from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of `nextPageToken` in the
   * response indicates that more results might be available.
   */
  pageSize: number;
}
export interface ListExclusionsRequestProtoMsg {
  typeUrl: "/google.logging.v2.ListExclusionsRequest";
  value: Uint8Array;
}
/** The parameters to `ListExclusions`. */
export interface ListExclusionsRequestSDKType {
  parent: string;
  page_token: string;
  page_size: number;
}
/** Result returned from `ListExclusions`. */
export interface ListExclusionsResponse {
  /** A list of exclusions. */
  exclusions: LogExclusion[];
  /**
   * If there might be more results than appear in this response, then
   * `nextPageToken` is included. To get the next set of results, call the same
   * method again using the value of `nextPageToken` as `pageToken`.
   */
  nextPageToken: string;
}
export interface ListExclusionsResponseProtoMsg {
  typeUrl: "/google.logging.v2.ListExclusionsResponse";
  value: Uint8Array;
}
/** Result returned from `ListExclusions`. */
export interface ListExclusionsResponseSDKType {
  exclusions: LogExclusionSDKType[];
  next_page_token: string;
}
/** The parameters to `GetExclusion`. */
export interface GetExclusionRequest {
  /**
   * Required. The resource name of an existing exclusion:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name: string;
}
export interface GetExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `GetExclusion`. */
export interface GetExclusionRequestSDKType {
  name: string;
}
/** The parameters to `CreateExclusion`. */
export interface CreateExclusionRequest {
  /**
   * Required. The parent resource in which to create the exclusion:
   * 
   *     "projects/[PROJECT_ID]"
   *     "organizations/[ORGANIZATION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     "folders/[FOLDER_ID]"
   * 
   * For examples:
   * 
   *   `"projects/my-logging-project"`
   *   `"organizations/123456789"`
   */
  parent: string;
  /**
   * Required. The new exclusion, whose `name` parameter is an exclusion name
   * that is not already used in the parent resource.
   */
  exclusion?: LogExclusion;
}
export interface CreateExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.CreateExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `CreateExclusion`. */
export interface CreateExclusionRequestSDKType {
  parent: string;
  exclusion?: LogExclusionSDKType;
}
/** The parameters to `UpdateExclusion`. */
export interface UpdateExclusionRequest {
  /**
   * Required. The resource name of the exclusion to update:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name: string;
  /**
   * Required. New values for the existing exclusion. Only the fields specified in
   * `update_mask` are relevant.
   */
  exclusion?: LogExclusion;
  /**
   * Required. A non-empty list of fields to change in the existing exclusion. New values
   * for the fields are taken from the corresponding fields in the
   * [LogExclusion][google.logging.v2.LogExclusion] included in this request. Fields not mentioned in
   * `update_mask` are not changed and are ignored in the request.
   * 
   * For example, to change the filter and description of an exclusion,
   * specify an `update_mask` of `"filter,description"`.
   */
  updateMask?: FieldMask;
}
export interface UpdateExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `UpdateExclusion`. */
export interface UpdateExclusionRequestSDKType {
  name: string;
  exclusion?: LogExclusionSDKType;
  update_mask?: FieldMaskSDKType;
}
/** The parameters to `DeleteExclusion`. */
export interface DeleteExclusionRequest {
  /**
   * Required. The resource name of an existing exclusion to delete:
   * 
   *     "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
   *     "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
   *     "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
   * 
   * For example:
   * 
   *   `"projects/my-project/exclusions/my-exclusion"`
   */
  name: string;
}
export interface DeleteExclusionRequestProtoMsg {
  typeUrl: "/google.logging.v2.DeleteExclusionRequest";
  value: Uint8Array;
}
/** The parameters to `DeleteExclusion`. */
export interface DeleteExclusionRequestSDKType {
  name: string;
}
/**
 * The parameters to
 * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetCmekSettingsRequest {
  /**
   * Required. The resource for which to retrieve CMEK settings.
   * 
   *     "projects/[PROJECT_ID]/cmekSettings"
   *     "organizations/[ORGANIZATION_ID]/cmekSettings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
   *     "folders/[FOLDER_ID]/cmekSettings"
   * 
   * For example:
   * 
   *   `"organizations/12345/cmekSettings"`
   * 
   * Note: CMEK for the Log Router can be configured for Google Cloud projects,
   * folders, organizations and billing accounts. Once configured for an
   * organization, it applies to all projects and folders in the Google Cloud
   * organization.
   */
  name: string;
}
export interface GetCmekSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetCmekSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetCmekSettingsRequestSDKType {
  name: string;
}
/**
 * The parameters to
 * [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateCmekSettingsRequest {
  /**
   * Required. The resource name for the CMEK settings to update.
   * 
   *     "projects/[PROJECT_ID]/cmekSettings"
   *     "organizations/[ORGANIZATION_ID]/cmekSettings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings"
   *     "folders/[FOLDER_ID]/cmekSettings"
   * 
   * For example:
   * 
   *   `"organizations/12345/cmekSettings"`
   * 
   * Note: CMEK for the Log Router can currently only be configured for Google
   * Cloud organizations. Once configured, it applies to all projects and
   * folders in the Google Cloud organization.
   */
  name: string;
  /**
   * Required. The CMEK settings to update.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  cmekSettings?: CmekSettings;
  /**
   * Optional. Field mask identifying which fields from `cmek_settings` should
   * be updated. A field will be overwritten if and only if it is in the update
   * mask. Output only fields cannot be updated.
   * 
   * See [FieldMask][google.protobuf.FieldMask] for more information.
   * 
   * For example: `"updateMask=kmsKeyName"`
   */
  updateMask?: FieldMask;
}
export interface UpdateCmekSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateCmekSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [UpdateCmekSettings][google.logging.v2.ConfigServiceV2.UpdateCmekSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateCmekSettingsRequestSDKType {
  name: string;
  cmek_settings?: CmekSettingsSDKType;
  update_mask?: FieldMaskSDKType;
}
/**
 * Describes the customer-managed encryption key (CMEK) settings associated with
 * a project, folder, organization, billing account, or flexible resource.
 * 
 * Note: CMEK for the Log Router can currently only be configured for Google
 * Cloud organizations. Once configured, it applies to all projects and folders
 * in the Google Cloud organization.
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface CmekSettings {
  /** Output only. The resource name of the CMEK settings. */
  name: string;
  /**
   * The resource name for the configured Cloud KMS key.
   * 
   * KMS key name format:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
   * 
   * 
   * 
   * To enable CMEK for the Log Router, set this field to a valid
   * `kms_key_name` for which the associated service account has the required
   * cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
   * 
   * The Cloud KMS key used by the Log Router can be updated by changing the
   * `kms_key_name` to a new valid key name or disabled by setting the key name
   * to an empty string. Encryption operations that are in progress will be
   * completed with the key that was in use when they started. Decryption
   * operations will be completed using the key that was used at the time of
   * encryption unless access to that key has been revoked.
   * 
   * To disable CMEK for the Log Router, set this field to an empty string.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kmsKeyName: string;
  /**
   * Output only. The service account that will be used by the Log Router to access your
   * Cloud KMS key.
   * 
   * Before enabling CMEK for Log Router, you must first assign the
   * cloudkms.cryptoKeyEncrypterDecrypter role to the service account that
   * the Log Router will use to access your Cloud KMS key. Use
   * [GetCmekSettings][google.logging.v2.ConfigServiceV2.GetCmekSettings] to
   * obtain the service account ID.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  serviceAccountId: string;
}
export interface CmekSettingsProtoMsg {
  typeUrl: "/google.logging.v2.CmekSettings";
  value: Uint8Array;
}
/**
 * Describes the customer-managed encryption key (CMEK) settings associated with
 * a project, folder, organization, billing account, or flexible resource.
 * 
 * Note: CMEK for the Log Router can currently only be configured for Google
 * Cloud organizations. Once configured, it applies to all projects and folders
 * in the Google Cloud organization.
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface CmekSettingsSDKType {
  name: string;
  kms_key_name: string;
  service_account_id: string;
}
/**
 * The parameters to
 * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetSettingsRequest {
  /**
   * Required. The resource for which to retrieve settings.
   * 
   *     "projects/[PROJECT_ID]/settings"
   *     "organizations/[ORGANIZATION_ID]/settings"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/settings"
   *     "folders/[FOLDER_ID]/settings"
   * 
   * For example:
   * 
   *   `"organizations/12345/settings"`
   * 
   * Note: Settings for the Log Router can be get for Google Cloud projects,
   * folders, organizations and billing accounts. Currently it can only be
   * configured for organizations. Once configured for an organization, it
   * applies to all projects and folders in the Google Cloud organization.
   */
  name: string;
}
export interface GetSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.GetSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface GetSettingsRequestSDKType {
  name: string;
}
/**
 * The parameters to
 * [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateSettingsRequest {
  /**
   * Required. The resource name for the settings to update.
   * 
   *     "organizations/[ORGANIZATION_ID]/settings"
   * 
   * For example:
   * 
   *   `"organizations/12345/settings"`
   * 
   * Note: Settings for the Log Router can currently only be configured for
   * Google Cloud organizations. Once configured, it applies to all projects and
   * folders in the Google Cloud organization.
   */
  name: string;
  /**
   * Required. The settings to update.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  settings?: Settings;
  /**
   * Optional. Field mask identifying which fields from `settings` should
   * be updated. A field will be overwritten if and only if it is in the update
   * mask. Output only fields cannot be updated.
   * 
   * See [FieldMask][google.protobuf.FieldMask] for more information.
   * 
   * For example: `"updateMask=kmsKeyName"`
   */
  updateMask?: FieldMask;
}
export interface UpdateSettingsRequestProtoMsg {
  typeUrl: "/google.logging.v2.UpdateSettingsRequest";
  value: Uint8Array;
}
/**
 * The parameters to
 * [UpdateSettings][google.logging.v2.ConfigServiceV2.UpdateSettings].
 * 
 * See [Enabling CMEK for Log
 * Router](https://cloud.google.com/logging/docs/routing/managed-encryption) for
 * more information.
 */
export interface UpdateSettingsRequestSDKType {
  name: string;
  settings?: SettingsSDKType;
  update_mask?: FieldMaskSDKType;
}
/**
 * Describes the settings associated with a project, folder, organization,
 * billing account, or flexible resource.
 */
export interface Settings {
  /** Output only. The resource name of the settings. */
  name: string;
  /**
   * Optional. The resource name for the configured Cloud KMS key.
   * 
   * KMS key name format:
   * 
   *     "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"`
   * 
   * 
   * 
   * To enable CMEK for the Log Router, set this field to a valid
   * `kms_key_name` for which the associated service account has the required
   * `roles/cloudkms.cryptoKeyEncrypterDecrypter` role assigned for the key.
   * 
   * The Cloud KMS key used by the Log Router can be updated by changing the
   * `kms_key_name` to a new valid key name. Encryption operations that are in
   * progress will be completed with the key that was in use when they started.
   * Decryption operations will be completed using the key that was used at the
   * time of encryption unless access to that key has been revoked.
   * 
   * To disable CMEK for the Log Router, set this field to an empty string.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kmsKeyName: string;
  /**
   * Output only. The service account that will be used by the Log Router to access your
   * Cloud KMS key.
   * 
   * Before enabling CMEK for Log Router, you must first assign the role
   * `roles/cloudkms.cryptoKeyEncrypterDecrypter` to the service account that
   * the Log Router will use to access your Cloud KMS key. Use
   * [GetSettings][google.logging.v2.ConfigServiceV2.GetSettings] to
   * obtain the service account ID.
   * 
   * See [Enabling CMEK for Log
   * Router](https://cloud.google.com/logging/docs/routing/managed-encryption)
   * for more information.
   */
  kmsServiceAccountId: string;
  /**
   * Optional. The Cloud region that will be used for _Default and _Required log buckets
   * for newly created projects and folders. For example `europe-west1`.
   * This setting does not affect the location of custom log buckets.
   */
  storageLocation: string;
  /**
   * Optional. If set to true, the _Default sink in newly created projects and folders
   * will created in a disabled state. This can be used to automatically disable
   * log ingestion if there is already an aggregated sink configured in the
   * hierarchy. The _Default sink can be re-enabled manually if needed.
   */
  disableDefaultSink: boolean;
}
export interface SettingsProtoMsg {
  typeUrl: "/google.logging.v2.Settings";
  value: Uint8Array;
}
/**
 * Describes the settings associated with a project, folder, organization,
 * billing account, or flexible resource.
 */
export interface SettingsSDKType {
  name: string;
  kms_key_name: string;
  kms_service_account_id: string;
  storage_location: string;
  disable_default_sink: boolean;
}
/** The parameters to CopyLogEntries. */
export interface CopyLogEntriesRequest {
  /**
   * Required. Log bucket from which to copy log entries.
   * 
   * For example:
   * 
   *   `"projects/my-project/locations/global/buckets/my-source-bucket"`
   */
  name: string;
  /**
   * Optional. A filter specifying which log entries to copy. The filter must be no more
   * than 20k characters. An empty filter matches all log entries.
   */
  filter: string;
  /** Required. Destination to which to copy log entries. */
  destination: string;
}
export interface CopyLogEntriesRequestProtoMsg {
  typeUrl: "/google.logging.v2.CopyLogEntriesRequest";
  value: Uint8Array;
}
/** The parameters to CopyLogEntries. */
export interface CopyLogEntriesRequestSDKType {
  name: string;
  filter: string;
  destination: string;
}
/** Metadata for CopyLogEntries long running operations. */
export interface CopyLogEntriesMetadata {
  /** The create time of an operation. */
  startTime?: Date;
  /** The end time of an operation. */
  endTime?: Date;
  /** State of an operation. */
  state: OperationState;
  /** Identifies whether the user has requested cancellation of the operation. */
  cancellationRequested: boolean;
  /** CopyLogEntries RPC request. */
  request?: CopyLogEntriesRequest;
  /** Estimated progress of the operation (0 - 100%). */
  progress: number;
  /**
   * The IAM identity of a service account that must be granted access to the
   * destination.
   * 
   * If the service account is not granted permission to the destination within
   * an hour, the operation will be cancelled.
   * 
   * For example: `"serviceAccount:foo@bar.com"`
   */
  writerIdentity: string;
}
export interface CopyLogEntriesMetadataProtoMsg {
  typeUrl: "/google.logging.v2.CopyLogEntriesMetadata";
  value: Uint8Array;
}
/** Metadata for CopyLogEntries long running operations. */
export interface CopyLogEntriesMetadataSDKType {
  start_time?: Date;
  end_time?: Date;
  state: OperationState;
  cancellation_requested: boolean;
  request?: CopyLogEntriesRequestSDKType;
  progress: number;
  writer_identity: string;
}
/** Response type for CopyLogEntries long running operations. */
export interface CopyLogEntriesResponse {
  /** Number of log entries copied. */
  logEntriesCopiedCount: bigint;
}
export interface CopyLogEntriesResponseProtoMsg {
  typeUrl: "/google.logging.v2.CopyLogEntriesResponse";
  value: Uint8Array;
}
/** Response type for CopyLogEntries long running operations. */
export interface CopyLogEntriesResponseSDKType {
  log_entries_copied_count: bigint;
}
function createBaseLogBucket(): LogBucket {
  return {
    name: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    retentionDays: 0,
    locked: false,
    lifecycleState: 0,
    restrictedFields: [],
    cmekSettings: undefined
  };
}
export const LogBucket = {
  typeUrl: "/google.logging.v2.LogBucket",
  encode(message: LogBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.retentionDays !== 0) {
      writer.uint32(88).int32(message.retentionDays);
    }
    if (message.locked === true) {
      writer.uint32(72).bool(message.locked);
    }
    if (message.lifecycleState !== 0) {
      writer.uint32(96).int32(message.lifecycleState);
    }
    for (const v of message.restrictedFields) {
      writer.uint32(122).string(v!);
    }
    if (message.cmekSettings !== undefined) {
      CmekSettings.encode(message.cmekSettings, writer.uint32(154).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.retentionDays = reader.int32();
          break;
        case 9:
          message.locked = reader.bool();
          break;
        case 12:
          message.lifecycleState = (reader.int32() as any);
          break;
        case 15:
          message.restrictedFields.push(reader.string());
          break;
        case 19:
          message.cmekSettings = CmekSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LogBucketProtoMsg): LogBucket {
    return LogBucket.decode(message.value);
  },
  toProto(message: LogBucket): Uint8Array {
    return LogBucket.encode(message).finish();
  },
  toProtoMsg(message: LogBucket): LogBucketProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogBucket",
      value: LogBucket.encode(message).finish()
    };
  }
};
function createBaseLogView(): LogView {
  return {
    name: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    filter: ""
  };
}
export const LogView = {
  typeUrl: "/google.logging.v2.LogView",
  encode(message: LogView, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.filter !== "") {
      writer.uint32(58).string(message.filter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogView {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LogViewProtoMsg): LogView {
    return LogView.decode(message.value);
  },
  toProto(message: LogView): Uint8Array {
    return LogView.encode(message).finish();
  },
  toProtoMsg(message: LogView): LogViewProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogView",
      value: LogView.encode(message).finish()
    };
  }
};
function createBaseLogSink(): LogSink {
  return {
    name: "",
    destination: "",
    filter: "",
    description: "",
    disabled: false,
    exclusions: [],
    outputVersionFormat: 0,
    writerIdentity: "",
    includeChildren: false,
    bigqueryOptions: undefined,
    createTime: undefined,
    updateTime: undefined
  };
}
export const LogSink = {
  typeUrl: "/google.logging.v2.LogSink",
  encode(message: LogSink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.destination !== "") {
      writer.uint32(26).string(message.destination);
    }
    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }
    if (message.description !== "") {
      writer.uint32(146).string(message.description);
    }
    if (message.disabled === true) {
      writer.uint32(152).bool(message.disabled);
    }
    for (const v of message.exclusions) {
      LogExclusion.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.outputVersionFormat !== 0) {
      writer.uint32(48).int32(message.outputVersionFormat);
    }
    if (message.writerIdentity !== "") {
      writer.uint32(66).string(message.writerIdentity);
    }
    if (message.includeChildren === true) {
      writer.uint32(72).bool(message.includeChildren);
    }
    if (message.bigqueryOptions !== undefined) {
      BigQueryOptions.encode(message.bigqueryOptions, writer.uint32(98).fork()).ldelim();
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(106).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogSink {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogSink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.destination = reader.string();
          break;
        case 5:
          message.filter = reader.string();
          break;
        case 18:
          message.description = reader.string();
          break;
        case 19:
          message.disabled = reader.bool();
          break;
        case 16:
          message.exclusions.push(LogExclusion.decode(reader, reader.uint32()));
          break;
        case 6:
          message.outputVersionFormat = (reader.int32() as any);
          break;
        case 8:
          message.writerIdentity = reader.string();
          break;
        case 9:
          message.includeChildren = reader.bool();
          break;
        case 12:
          message.bigqueryOptions = BigQueryOptions.decode(reader, reader.uint32());
          break;
        case 13:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 14:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LogSinkProtoMsg): LogSink {
    return LogSink.decode(message.value);
  },
  toProto(message: LogSink): Uint8Array {
    return LogSink.encode(message).finish();
  },
  toProtoMsg(message: LogSink): LogSinkProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogSink",
      value: LogSink.encode(message).finish()
    };
  }
};
function createBaseBigQueryOptions(): BigQueryOptions {
  return {
    usePartitionedTables: false,
    usesTimestampColumnPartitioning: false
  };
}
export const BigQueryOptions = {
  typeUrl: "/google.logging.v2.BigQueryOptions",
  encode(message: BigQueryOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.usePartitionedTables === true) {
      writer.uint32(8).bool(message.usePartitionedTables);
    }
    if (message.usesTimestampColumnPartitioning === true) {
      writer.uint32(24).bool(message.usesTimestampColumnPartitioning);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BigQueryOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigQueryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usePartitionedTables = reader.bool();
          break;
        case 3:
          message.usesTimestampColumnPartitioning = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: BigQueryOptionsProtoMsg): BigQueryOptions {
    return BigQueryOptions.decode(message.value);
  },
  toProto(message: BigQueryOptions): Uint8Array {
    return BigQueryOptions.encode(message).finish();
  },
  toProtoMsg(message: BigQueryOptions): BigQueryOptionsProtoMsg {
    return {
      typeUrl: "/google.logging.v2.BigQueryOptions",
      value: BigQueryOptions.encode(message).finish()
    };
  }
};
function createBaseListBucketsRequest(): ListBucketsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListBucketsRequest = {
  typeUrl: "/google.logging.v2.ListBucketsRequest",
  encode(message: ListBucketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListBucketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBucketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListBucketsRequestProtoMsg): ListBucketsRequest {
    return ListBucketsRequest.decode(message.value);
  },
  toProto(message: ListBucketsRequest): Uint8Array {
    return ListBucketsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListBucketsRequest): ListBucketsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListBucketsRequest",
      value: ListBucketsRequest.encode(message).finish()
    };
  }
};
function createBaseListBucketsResponse(): ListBucketsResponse {
  return {
    buckets: [],
    nextPageToken: ""
  };
}
export const ListBucketsResponse = {
  typeUrl: "/google.logging.v2.ListBucketsResponse",
  encode(message: ListBucketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.buckets) {
      LogBucket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListBucketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBucketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buckets.push(LogBucket.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListBucketsResponseProtoMsg): ListBucketsResponse {
    return ListBucketsResponse.decode(message.value);
  },
  toProto(message: ListBucketsResponse): Uint8Array {
    return ListBucketsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListBucketsResponse): ListBucketsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListBucketsResponse",
      value: ListBucketsResponse.encode(message).finish()
    };
  }
};
function createBaseCreateBucketRequest(): CreateBucketRequest {
  return {
    parent: "",
    bucketId: "",
    bucket: undefined
  };
}
export const CreateBucketRequest = {
  typeUrl: "/google.logging.v2.CreateBucketRequest",
  encode(message: CreateBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.bucketId !== "") {
      writer.uint32(18).string(message.bucketId);
    }
    if (message.bucket !== undefined) {
      LogBucket.encode(message.bucket, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.bucketId = reader.string();
          break;
        case 3:
          message.bucket = LogBucket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CreateBucketRequestProtoMsg): CreateBucketRequest {
    return CreateBucketRequest.decode(message.value);
  },
  toProto(message: CreateBucketRequest): Uint8Array {
    return CreateBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateBucketRequest): CreateBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateBucketRequest",
      value: CreateBucketRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateBucketRequest(): UpdateBucketRequest {
  return {
    name: "",
    bucket: undefined,
    updateMask: undefined
  };
}
export const UpdateBucketRequest = {
  typeUrl: "/google.logging.v2.UpdateBucketRequest",
  encode(message: UpdateBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.bucket !== undefined) {
      LogBucket.encode(message.bucket, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.bucket = LogBucket.decode(reader, reader.uint32());
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UpdateBucketRequestProtoMsg): UpdateBucketRequest {
    return UpdateBucketRequest.decode(message.value);
  },
  toProto(message: UpdateBucketRequest): Uint8Array {
    return UpdateBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateBucketRequest): UpdateBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateBucketRequest",
      value: UpdateBucketRequest.encode(message).finish()
    };
  }
};
function createBaseGetBucketRequest(): GetBucketRequest {
  return {
    name: ""
  };
}
export const GetBucketRequest = {
  typeUrl: "/google.logging.v2.GetBucketRequest",
  encode(message: GetBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetBucketRequestProtoMsg): GetBucketRequest {
    return GetBucketRequest.decode(message.value);
  },
  toProto(message: GetBucketRequest): Uint8Array {
    return GetBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBucketRequest): GetBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetBucketRequest",
      value: GetBucketRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteBucketRequest(): DeleteBucketRequest {
  return {
    name: ""
  };
}
export const DeleteBucketRequest = {
  typeUrl: "/google.logging.v2.DeleteBucketRequest",
  encode(message: DeleteBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DeleteBucketRequestProtoMsg): DeleteBucketRequest {
    return DeleteBucketRequest.decode(message.value);
  },
  toProto(message: DeleteBucketRequest): Uint8Array {
    return DeleteBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteBucketRequest): DeleteBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteBucketRequest",
      value: DeleteBucketRequest.encode(message).finish()
    };
  }
};
function createBaseUndeleteBucketRequest(): UndeleteBucketRequest {
  return {
    name: ""
  };
}
export const UndeleteBucketRequest = {
  typeUrl: "/google.logging.v2.UndeleteBucketRequest",
  encode(message: UndeleteBucketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteBucketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UndeleteBucketRequestProtoMsg): UndeleteBucketRequest {
    return UndeleteBucketRequest.decode(message.value);
  },
  toProto(message: UndeleteBucketRequest): Uint8Array {
    return UndeleteBucketRequest.encode(message).finish();
  },
  toProtoMsg(message: UndeleteBucketRequest): UndeleteBucketRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UndeleteBucketRequest",
      value: UndeleteBucketRequest.encode(message).finish()
    };
  }
};
function createBaseListViewsRequest(): ListViewsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListViewsRequest = {
  typeUrl: "/google.logging.v2.ListViewsRequest",
  encode(message: ListViewsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListViewsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListViewsRequestProtoMsg): ListViewsRequest {
    return ListViewsRequest.decode(message.value);
  },
  toProto(message: ListViewsRequest): Uint8Array {
    return ListViewsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListViewsRequest): ListViewsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListViewsRequest",
      value: ListViewsRequest.encode(message).finish()
    };
  }
};
function createBaseListViewsResponse(): ListViewsResponse {
  return {
    views: [],
    nextPageToken: ""
  };
}
export const ListViewsResponse = {
  typeUrl: "/google.logging.v2.ListViewsResponse",
  encode(message: ListViewsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.views) {
      LogView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListViewsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.views.push(LogView.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListViewsResponseProtoMsg): ListViewsResponse {
    return ListViewsResponse.decode(message.value);
  },
  toProto(message: ListViewsResponse): Uint8Array {
    return ListViewsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListViewsResponse): ListViewsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListViewsResponse",
      value: ListViewsResponse.encode(message).finish()
    };
  }
};
function createBaseCreateViewRequest(): CreateViewRequest {
  return {
    parent: "",
    viewId: "",
    view: undefined
  };
}
export const CreateViewRequest = {
  typeUrl: "/google.logging.v2.CreateViewRequest",
  encode(message: CreateViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.viewId !== "") {
      writer.uint32(18).string(message.viewId);
    }
    if (message.view !== undefined) {
      LogView.encode(message.view, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.viewId = reader.string();
          break;
        case 3:
          message.view = LogView.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CreateViewRequestProtoMsg): CreateViewRequest {
    return CreateViewRequest.decode(message.value);
  },
  toProto(message: CreateViewRequest): Uint8Array {
    return CreateViewRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateViewRequest): CreateViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateViewRequest",
      value: CreateViewRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateViewRequest(): UpdateViewRequest {
  return {
    name: "",
    view: undefined,
    updateMask: undefined
  };
}
export const UpdateViewRequest = {
  typeUrl: "/google.logging.v2.UpdateViewRequest",
  encode(message: UpdateViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== undefined) {
      LogView.encode(message.view, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.view = LogView.decode(reader, reader.uint32());
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UpdateViewRequestProtoMsg): UpdateViewRequest {
    return UpdateViewRequest.decode(message.value);
  },
  toProto(message: UpdateViewRequest): Uint8Array {
    return UpdateViewRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateViewRequest): UpdateViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateViewRequest",
      value: UpdateViewRequest.encode(message).finish()
    };
  }
};
function createBaseGetViewRequest(): GetViewRequest {
  return {
    name: ""
  };
}
export const GetViewRequest = {
  typeUrl: "/google.logging.v2.GetViewRequest",
  encode(message: GetViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetViewRequestProtoMsg): GetViewRequest {
    return GetViewRequest.decode(message.value);
  },
  toProto(message: GetViewRequest): Uint8Array {
    return GetViewRequest.encode(message).finish();
  },
  toProtoMsg(message: GetViewRequest): GetViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetViewRequest",
      value: GetViewRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteViewRequest(): DeleteViewRequest {
  return {
    name: ""
  };
}
export const DeleteViewRequest = {
  typeUrl: "/google.logging.v2.DeleteViewRequest",
  encode(message: DeleteViewRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteViewRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteViewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DeleteViewRequestProtoMsg): DeleteViewRequest {
    return DeleteViewRequest.decode(message.value);
  },
  toProto(message: DeleteViewRequest): Uint8Array {
    return DeleteViewRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteViewRequest): DeleteViewRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteViewRequest",
      value: DeleteViewRequest.encode(message).finish()
    };
  }
};
function createBaseListSinksRequest(): ListSinksRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListSinksRequest = {
  typeUrl: "/google.logging.v2.ListSinksRequest",
  encode(message: ListSinksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListSinksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListSinksRequestProtoMsg): ListSinksRequest {
    return ListSinksRequest.decode(message.value);
  },
  toProto(message: ListSinksRequest): Uint8Array {
    return ListSinksRequest.encode(message).finish();
  },
  toProtoMsg(message: ListSinksRequest): ListSinksRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListSinksRequest",
      value: ListSinksRequest.encode(message).finish()
    };
  }
};
function createBaseListSinksResponse(): ListSinksResponse {
  return {
    sinks: [],
    nextPageToken: ""
  };
}
export const ListSinksResponse = {
  typeUrl: "/google.logging.v2.ListSinksResponse",
  encode(message: ListSinksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sinks) {
      LogSink.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListSinksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinks.push(LogSink.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListSinksResponseProtoMsg): ListSinksResponse {
    return ListSinksResponse.decode(message.value);
  },
  toProto(message: ListSinksResponse): Uint8Array {
    return ListSinksResponse.encode(message).finish();
  },
  toProtoMsg(message: ListSinksResponse): ListSinksResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListSinksResponse",
      value: ListSinksResponse.encode(message).finish()
    };
  }
};
function createBaseGetSinkRequest(): GetSinkRequest {
  return {
    sinkName: ""
  };
}
export const GetSinkRequest = {
  typeUrl: "/google.logging.v2.GetSinkRequest",
  encode(message: GetSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sinkName !== "") {
      writer.uint32(10).string(message.sinkName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetSinkRequestProtoMsg): GetSinkRequest {
    return GetSinkRequest.decode(message.value);
  },
  toProto(message: GetSinkRequest): Uint8Array {
    return GetSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSinkRequest): GetSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetSinkRequest",
      value: GetSinkRequest.encode(message).finish()
    };
  }
};
function createBaseCreateSinkRequest(): CreateSinkRequest {
  return {
    parent: "",
    sink: undefined,
    uniqueWriterIdentity: false
  };
}
export const CreateSinkRequest = {
  typeUrl: "/google.logging.v2.CreateSinkRequest",
  encode(message: CreateSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.sink !== undefined) {
      LogSink.encode(message.sink, writer.uint32(18).fork()).ldelim();
    }
    if (message.uniqueWriterIdentity === true) {
      writer.uint32(24).bool(message.uniqueWriterIdentity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.sink = LogSink.decode(reader, reader.uint32());
          break;
        case 3:
          message.uniqueWriterIdentity = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CreateSinkRequestProtoMsg): CreateSinkRequest {
    return CreateSinkRequest.decode(message.value);
  },
  toProto(message: CreateSinkRequest): Uint8Array {
    return CreateSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateSinkRequest): CreateSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateSinkRequest",
      value: CreateSinkRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateSinkRequest(): UpdateSinkRequest {
  return {
    sinkName: "",
    sink: undefined,
    uniqueWriterIdentity: false,
    updateMask: undefined
  };
}
export const UpdateSinkRequest = {
  typeUrl: "/google.logging.v2.UpdateSinkRequest",
  encode(message: UpdateSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sinkName !== "") {
      writer.uint32(10).string(message.sinkName);
    }
    if (message.sink !== undefined) {
      LogSink.encode(message.sink, writer.uint32(18).fork()).ldelim();
    }
    if (message.uniqueWriterIdentity === true) {
      writer.uint32(24).bool(message.uniqueWriterIdentity);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;
        case 2:
          message.sink = LogSink.decode(reader, reader.uint32());
          break;
        case 3:
          message.uniqueWriterIdentity = reader.bool();
          break;
        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UpdateSinkRequestProtoMsg): UpdateSinkRequest {
    return UpdateSinkRequest.decode(message.value);
  },
  toProto(message: UpdateSinkRequest): Uint8Array {
    return UpdateSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateSinkRequest): UpdateSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateSinkRequest",
      value: UpdateSinkRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteSinkRequest(): DeleteSinkRequest {
  return {
    sinkName: ""
  };
}
export const DeleteSinkRequest = {
  typeUrl: "/google.logging.v2.DeleteSinkRequest",
  encode(message: DeleteSinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sinkName !== "") {
      writer.uint32(10).string(message.sinkName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteSinkRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DeleteSinkRequestProtoMsg): DeleteSinkRequest {
    return DeleteSinkRequest.decode(message.value);
  },
  toProto(message: DeleteSinkRequest): Uint8Array {
    return DeleteSinkRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteSinkRequest): DeleteSinkRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteSinkRequest",
      value: DeleteSinkRequest.encode(message).finish()
    };
  }
};
function createBaseLogExclusion(): LogExclusion {
  return {
    name: "",
    description: "",
    filter: "",
    disabled: false,
    createTime: undefined,
    updateTime: undefined
  };
}
export const LogExclusion = {
  typeUrl: "/google.logging.v2.LogExclusion",
  encode(message: LogExclusion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.disabled === true) {
      writer.uint32(32).bool(message.disabled);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogExclusion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogExclusion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.filter = reader.string();
          break;
        case 4:
          message.disabled = reader.bool();
          break;
        case 5:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LogExclusionProtoMsg): LogExclusion {
    return LogExclusion.decode(message.value);
  },
  toProto(message: LogExclusion): Uint8Array {
    return LogExclusion.encode(message).finish();
  },
  toProtoMsg(message: LogExclusion): LogExclusionProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogExclusion",
      value: LogExclusion.encode(message).finish()
    };
  }
};
function createBaseListExclusionsRequest(): ListExclusionsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListExclusionsRequest = {
  typeUrl: "/google.logging.v2.ListExclusionsRequest",
  encode(message: ListExclusionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListExclusionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExclusionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageToken = reader.string();
          break;
        case 3:
          message.pageSize = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListExclusionsRequestProtoMsg): ListExclusionsRequest {
    return ListExclusionsRequest.decode(message.value);
  },
  toProto(message: ListExclusionsRequest): Uint8Array {
    return ListExclusionsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListExclusionsRequest): ListExclusionsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListExclusionsRequest",
      value: ListExclusionsRequest.encode(message).finish()
    };
  }
};
function createBaseListExclusionsResponse(): ListExclusionsResponse {
  return {
    exclusions: [],
    nextPageToken: ""
  };
}
export const ListExclusionsResponse = {
  typeUrl: "/google.logging.v2.ListExclusionsResponse",
  encode(message: ListExclusionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exclusions) {
      LogExclusion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListExclusionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExclusionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exclusions.push(LogExclusion.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ListExclusionsResponseProtoMsg): ListExclusionsResponse {
    return ListExclusionsResponse.decode(message.value);
  },
  toProto(message: ListExclusionsResponse): Uint8Array {
    return ListExclusionsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListExclusionsResponse): ListExclusionsResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.ListExclusionsResponse",
      value: ListExclusionsResponse.encode(message).finish()
    };
  }
};
function createBaseGetExclusionRequest(): GetExclusionRequest {
  return {
    name: ""
  };
}
export const GetExclusionRequest = {
  typeUrl: "/google.logging.v2.GetExclusionRequest",
  encode(message: GetExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetExclusionRequestProtoMsg): GetExclusionRequest {
    return GetExclusionRequest.decode(message.value);
  },
  toProto(message: GetExclusionRequest): Uint8Array {
    return GetExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: GetExclusionRequest): GetExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetExclusionRequest",
      value: GetExclusionRequest.encode(message).finish()
    };
  }
};
function createBaseCreateExclusionRequest(): CreateExclusionRequest {
  return {
    parent: "",
    exclusion: undefined
  };
}
export const CreateExclusionRequest = {
  typeUrl: "/google.logging.v2.CreateExclusionRequest",
  encode(message: CreateExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.exclusion !== undefined) {
      LogExclusion.encode(message.exclusion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.exclusion = LogExclusion.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CreateExclusionRequestProtoMsg): CreateExclusionRequest {
    return CreateExclusionRequest.decode(message.value);
  },
  toProto(message: CreateExclusionRequest): Uint8Array {
    return CreateExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateExclusionRequest): CreateExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CreateExclusionRequest",
      value: CreateExclusionRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateExclusionRequest(): UpdateExclusionRequest {
  return {
    name: "",
    exclusion: undefined,
    updateMask: undefined
  };
}
export const UpdateExclusionRequest = {
  typeUrl: "/google.logging.v2.UpdateExclusionRequest",
  encode(message: UpdateExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.exclusion !== undefined) {
      LogExclusion.encode(message.exclusion, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.exclusion = LogExclusion.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UpdateExclusionRequestProtoMsg): UpdateExclusionRequest {
    return UpdateExclusionRequest.decode(message.value);
  },
  toProto(message: UpdateExclusionRequest): Uint8Array {
    return UpdateExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateExclusionRequest): UpdateExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateExclusionRequest",
      value: UpdateExclusionRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteExclusionRequest(): DeleteExclusionRequest {
  return {
    name: ""
  };
}
export const DeleteExclusionRequest = {
  typeUrl: "/google.logging.v2.DeleteExclusionRequest",
  encode(message: DeleteExclusionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteExclusionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExclusionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DeleteExclusionRequestProtoMsg): DeleteExclusionRequest {
    return DeleteExclusionRequest.decode(message.value);
  },
  toProto(message: DeleteExclusionRequest): Uint8Array {
    return DeleteExclusionRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteExclusionRequest): DeleteExclusionRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.DeleteExclusionRequest",
      value: DeleteExclusionRequest.encode(message).finish()
    };
  }
};
function createBaseGetCmekSettingsRequest(): GetCmekSettingsRequest {
  return {
    name: ""
  };
}
export const GetCmekSettingsRequest = {
  typeUrl: "/google.logging.v2.GetCmekSettingsRequest",
  encode(message: GetCmekSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCmekSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCmekSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetCmekSettingsRequestProtoMsg): GetCmekSettingsRequest {
    return GetCmekSettingsRequest.decode(message.value);
  },
  toProto(message: GetCmekSettingsRequest): Uint8Array {
    return GetCmekSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetCmekSettingsRequest): GetCmekSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetCmekSettingsRequest",
      value: GetCmekSettingsRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateCmekSettingsRequest(): UpdateCmekSettingsRequest {
  return {
    name: "",
    cmekSettings: undefined,
    updateMask: undefined
  };
}
export const UpdateCmekSettingsRequest = {
  typeUrl: "/google.logging.v2.UpdateCmekSettingsRequest",
  encode(message: UpdateCmekSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.cmekSettings !== undefined) {
      CmekSettings.encode(message.cmekSettings, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateCmekSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCmekSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.cmekSettings = CmekSettings.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UpdateCmekSettingsRequestProtoMsg): UpdateCmekSettingsRequest {
    return UpdateCmekSettingsRequest.decode(message.value);
  },
  toProto(message: UpdateCmekSettingsRequest): Uint8Array {
    return UpdateCmekSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateCmekSettingsRequest): UpdateCmekSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateCmekSettingsRequest",
      value: UpdateCmekSettingsRequest.encode(message).finish()
    };
  }
};
function createBaseCmekSettings(): CmekSettings {
  return {
    name: "",
    kmsKeyName: "",
    serviceAccountId: ""
  };
}
export const CmekSettings = {
  typeUrl: "/google.logging.v2.CmekSettings",
  encode(message: CmekSettings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.kmsKeyName !== "") {
      writer.uint32(18).string(message.kmsKeyName);
    }
    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CmekSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCmekSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kmsKeyName = reader.string();
          break;
        case 3:
          message.serviceAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CmekSettingsProtoMsg): CmekSettings {
    return CmekSettings.decode(message.value);
  },
  toProto(message: CmekSettings): Uint8Array {
    return CmekSettings.encode(message).finish();
  },
  toProtoMsg(message: CmekSettings): CmekSettingsProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CmekSettings",
      value: CmekSettings.encode(message).finish()
    };
  }
};
function createBaseGetSettingsRequest(): GetSettingsRequest {
  return {
    name: ""
  };
}
export const GetSettingsRequest = {
  typeUrl: "/google.logging.v2.GetSettingsRequest",
  encode(message: GetSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetSettingsRequestProtoMsg): GetSettingsRequest {
    return GetSettingsRequest.decode(message.value);
  },
  toProto(message: GetSettingsRequest): Uint8Array {
    return GetSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSettingsRequest): GetSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.GetSettingsRequest",
      value: GetSettingsRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateSettingsRequest(): UpdateSettingsRequest {
  return {
    name: "",
    settings: undefined,
    updateMask: undefined
  };
}
export const UpdateSettingsRequest = {
  typeUrl: "/google.logging.v2.UpdateSettingsRequest",
  encode(message: UpdateSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.settings !== undefined) {
      Settings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.settings = Settings.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: UpdateSettingsRequestProtoMsg): UpdateSettingsRequest {
    return UpdateSettingsRequest.decode(message.value);
  },
  toProto(message: UpdateSettingsRequest): Uint8Array {
    return UpdateSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateSettingsRequest): UpdateSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.UpdateSettingsRequest",
      value: UpdateSettingsRequest.encode(message).finish()
    };
  }
};
function createBaseSettings(): Settings {
  return {
    name: "",
    kmsKeyName: "",
    kmsServiceAccountId: "",
    storageLocation: "",
    disableDefaultSink: false
  };
}
export const Settings = {
  typeUrl: "/google.logging.v2.Settings",
  encode(message: Settings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.kmsKeyName !== "") {
      writer.uint32(18).string(message.kmsKeyName);
    }
    if (message.kmsServiceAccountId !== "") {
      writer.uint32(26).string(message.kmsServiceAccountId);
    }
    if (message.storageLocation !== "") {
      writer.uint32(34).string(message.storageLocation);
    }
    if (message.disableDefaultSink === true) {
      writer.uint32(40).bool(message.disableDefaultSink);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Settings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kmsKeyName = reader.string();
          break;
        case 3:
          message.kmsServiceAccountId = reader.string();
          break;
        case 4:
          message.storageLocation = reader.string();
          break;
        case 5:
          message.disableDefaultSink = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: SettingsProtoMsg): Settings {
    return Settings.decode(message.value);
  },
  toProto(message: Settings): Uint8Array {
    return Settings.encode(message).finish();
  },
  toProtoMsg(message: Settings): SettingsProtoMsg {
    return {
      typeUrl: "/google.logging.v2.Settings",
      value: Settings.encode(message).finish()
    };
  }
};
function createBaseCopyLogEntriesRequest(): CopyLogEntriesRequest {
  return {
    name: "",
    filter: "",
    destination: ""
  };
}
export const CopyLogEntriesRequest = {
  typeUrl: "/google.logging.v2.CopyLogEntriesRequest",
  encode(message: CopyLogEntriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.destination !== "") {
      writer.uint32(34).string(message.destination);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CopyLogEntriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.filter = reader.string();
          break;
        case 4:
          message.destination = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CopyLogEntriesRequestProtoMsg): CopyLogEntriesRequest {
    return CopyLogEntriesRequest.decode(message.value);
  },
  toProto(message: CopyLogEntriesRequest): Uint8Array {
    return CopyLogEntriesRequest.encode(message).finish();
  },
  toProtoMsg(message: CopyLogEntriesRequest): CopyLogEntriesRequestProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CopyLogEntriesRequest",
      value: CopyLogEntriesRequest.encode(message).finish()
    };
  }
};
function createBaseCopyLogEntriesMetadata(): CopyLogEntriesMetadata {
  return {
    startTime: undefined,
    endTime: undefined,
    state: 0,
    cancellationRequested: false,
    request: undefined,
    progress: 0,
    writerIdentity: ""
  };
}
export const CopyLogEntriesMetadata = {
  typeUrl: "/google.logging.v2.CopyLogEntriesMetadata",
  encode(message: CopyLogEntriesMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.cancellationRequested === true) {
      writer.uint32(32).bool(message.cancellationRequested);
    }
    if (message.request !== undefined) {
      CopyLogEntriesRequest.encode(message.request, writer.uint32(42).fork()).ldelim();
    }
    if (message.progress !== 0) {
      writer.uint32(48).int32(message.progress);
    }
    if (message.writerIdentity !== "") {
      writer.uint32(58).string(message.writerIdentity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CopyLogEntriesMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = (reader.int32() as any);
          break;
        case 4:
          message.cancellationRequested = reader.bool();
          break;
        case 5:
          message.request = CopyLogEntriesRequest.decode(reader, reader.uint32());
          break;
        case 6:
          message.progress = reader.int32();
          break;
        case 7:
          message.writerIdentity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CopyLogEntriesMetadataProtoMsg): CopyLogEntriesMetadata {
    return CopyLogEntriesMetadata.decode(message.value);
  },
  toProto(message: CopyLogEntriesMetadata): Uint8Array {
    return CopyLogEntriesMetadata.encode(message).finish();
  },
  toProtoMsg(message: CopyLogEntriesMetadata): CopyLogEntriesMetadataProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CopyLogEntriesMetadata",
      value: CopyLogEntriesMetadata.encode(message).finish()
    };
  }
};
function createBaseCopyLogEntriesResponse(): CopyLogEntriesResponse {
  return {
    logEntriesCopiedCount: BigInt(0)
  };
}
export const CopyLogEntriesResponse = {
  typeUrl: "/google.logging.v2.CopyLogEntriesResponse",
  encode(message: CopyLogEntriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.logEntriesCopiedCount !== BigInt(0)) {
      writer.uint32(8).int64(message.logEntriesCopiedCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CopyLogEntriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logEntriesCopiedCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CopyLogEntriesResponseProtoMsg): CopyLogEntriesResponse {
    return CopyLogEntriesResponse.decode(message.value);
  },
  toProto(message: CopyLogEntriesResponse): Uint8Array {
    return CopyLogEntriesResponse.encode(message).finish();
  },
  toProtoMsg(message: CopyLogEntriesResponse): CopyLogEntriesResponseProtoMsg {
    return {
      typeUrl: "/google.logging.v2.CopyLogEntriesResponse",
      value: CopyLogEntriesResponse.encode(message).finish()
    };
  }
};