import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface Documentation {
  summary: string;
  pages: Page[];
  rules: DocumentationRule[];
  documentationRootUrl: string;
  serviceRootUrl: string;
  overview: string;
}

function createBaseDocumentation(): Documentation {
  return {
    summary: "",
    pages: [],
    rules: [],
    documentationRootUrl: "",
    serviceRootUrl: "",
    overview: ""
  };
}

export const Documentation = {
  encode(message: Documentation, writer = _m0.Writer.create()): _m0.Writer {
    if (message.summary !== "") {
      writer.uint32(10).string(message.summary);
    }

    for (const v of message.pages) {
      Page.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.rules) {
      DocumentationRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.documentationRootUrl !== "") {
      writer.uint32(34).string(message.documentationRootUrl);
    }

    if (message.serviceRootUrl !== "") {
      writer.uint32(50).string(message.serviceRootUrl);
    }

    if (message.overview !== "") {
      writer.uint32(18).string(message.overview);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Documentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.summary = reader.string();
          break;

        case 5:
          message.pages.push(Page.decode(reader, reader.uint32()));
          break;

        case 3:
          message.rules.push(DocumentationRule.decode(reader, reader.uint32()));
          break;

        case 4:
          message.documentationRootUrl = reader.string();
          break;

        case 6:
          message.serviceRootUrl = reader.string();
          break;

        case 2:
          message.overview = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Documentation {
    return {
      summary: isSet(object.summary) ? String(object.summary) : "",
      pages: Array.isArray(object?.pages) ? object.pages.map((e: any) => Page.fromJSON(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => DocumentationRule.fromJSON(e)) : [],
      documentationRootUrl: isSet(object.documentationRootUrl) ? String(object.documentationRootUrl) : "",
      serviceRootUrl: isSet(object.serviceRootUrl) ? String(object.serviceRootUrl) : "",
      overview: isSet(object.overview) ? String(object.overview) : ""
    };
  },

  toJSON(message: Documentation): unknown {
    const obj: any = {};
    message.summary !== undefined && (obj.summary = message.summary);

    if (message.pages) {
      obj.pages = message.pages.map(e => e ? Page.toJSON(e) : undefined);
    } else {
      obj.pages = [];
    }

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? DocumentationRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    message.documentationRootUrl !== undefined && (obj.documentationRootUrl = message.documentationRootUrl);
    message.serviceRootUrl !== undefined && (obj.serviceRootUrl = message.serviceRootUrl);
    message.overview !== undefined && (obj.overview = message.overview);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Documentation>, I>>(object: I): Documentation {
    const message = createBaseDocumentation();
    message.summary = object.summary ?? "";
    message.pages = object.pages?.map(e => Page.fromPartial(e)) || [];
    message.rules = object.rules?.map(e => DocumentationRule.fromPartial(e)) || [];
    message.documentationRootUrl = object.documentationRootUrl ?? "";
    message.serviceRootUrl = object.serviceRootUrl ?? "";
    message.overview = object.overview ?? "";
    return message;
  }

};
export interface DocumentationRule {
  selector: string;
  description: string;
  deprecationDescription: string;
}

function createBaseDocumentationRule(): DocumentationRule {
  return {
    selector: "",
    description: "",
    deprecationDescription: ""
  };
}

export const DocumentationRule = {
  encode(message: DocumentationRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.deprecationDescription !== "") {
      writer.uint32(26).string(message.deprecationDescription);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DocumentationRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentationRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.deprecationDescription = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DocumentationRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      description: isSet(object.description) ? String(object.description) : "",
      deprecationDescription: isSet(object.deprecationDescription) ? String(object.deprecationDescription) : ""
    };
  },

  toJSON(message: DocumentationRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.description !== undefined && (obj.description = message.description);
    message.deprecationDescription !== undefined && (obj.deprecationDescription = message.deprecationDescription);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DocumentationRule>, I>>(object: I): DocumentationRule {
    const message = createBaseDocumentationRule();
    message.selector = object.selector ?? "";
    message.description = object.description ?? "";
    message.deprecationDescription = object.deprecationDescription ?? "";
    return message;
  }

};
export interface Page {
  name: string;
  content: string;
  subpages: Page[];
}

function createBasePage(): Page {
  return {
    name: "",
    content: "",
    subpages: []
  };
}

export const Page = {
  encode(message: Page, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }

    for (const v of message.subpages) {
      Page.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Page {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.content = reader.string();
          break;

        case 3:
          message.subpages.push(Page.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Page {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      content: isSet(object.content) ? String(object.content) : "",
      subpages: Array.isArray(object?.subpages) ? object.subpages.map((e: any) => Page.fromJSON(e)) : []
    };
  },

  toJSON(message: Page): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.content !== undefined && (obj.content = message.content);

    if (message.subpages) {
      obj.subpages = message.subpages.map(e => e ? Page.toJSON(e) : undefined);
    } else {
      obj.subpages = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Page>, I>>(object: I): Page {
    const message = createBasePage();
    message.name = object.name ?? "";
    message.content = object.content ?? "";
    message.subpages = object.subpages?.map(e => Page.fromPartial(e)) || [];
    return message;
  }

};