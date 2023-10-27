import { LabelDescriptor, LabelDescriptorSDKType } from "./label";
import { BinaryReader, BinaryWriter } from "../../binary";
export const protobufPackage = "google.api";
/**
 * A description of a log type. Example in YAML format:
 * 
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptor {
  /**
   * The name of the log. It must be less than 512 characters long and can
   * include the following characters: upper- and lower-case alphanumeric
   * characters [A-Za-z0-9], and punctuation characters including
   * slash, underscore, hyphen, period [/_-.].
   */
  name: string;
  /**
   * The set of labels that are available to describe a specific log entry.
   * Runtime requests that contain labels not specified here are
   * considered invalid.
   */
  labels: LabelDescriptor[];
  /**
   * A human-readable description of this log. This information appears in
   * the documentation and can contain details.
   */
  description: string;
  /**
   * The human-readable name for this log. This information appears on
   * the user interface and should be concise.
   */
  displayName: string;
}
export interface LogDescriptorProtoMsg {
  typeUrl: "/google.api.LogDescriptor";
  value: Uint8Array;
}
/**
 * A description of a log type. Example in YAML format:
 * 
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptorSDKType {
  name: string;
  labels: LabelDescriptorSDKType[];
  description: string;
  display_name: string;
}
function createBaseLogDescriptor(): LogDescriptor {
  return {
    name: "",
    labels: [],
    description: "",
    displayName: ""
  };
}
export const LogDescriptor = {
  typeUrl: "/google.api.LogDescriptor",
  encode(message: LogDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LogDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LogDescriptorProtoMsg): LogDescriptor {
    return LogDescriptor.decode(message.value);
  },
  toProto(message: LogDescriptor): Uint8Array {
    return LogDescriptor.encode(message).finish();
  },
  toProtoMsg(message: LogDescriptor): LogDescriptorProtoMsg {
    return {
      typeUrl: "/google.api.LogDescriptor",
      value: LogDescriptor.encode(message).finish()
    };
  }
};