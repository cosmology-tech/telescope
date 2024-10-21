import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * `Documentation` provides the information for describing a service.
 * 
 * Example:
 * <pre><code>documentation:
 *   summary: >
 *     The Google Calendar API gives access
 *     to most calendar features.
 *   pages:
 *   - name: Overview
 *     content: &#40;== include google/foo/overview.md ==&#41;
 *   - name: Tutorial
 *     content: &#40;== include google/foo/tutorial.md ==&#41;
 *     subpages;
 *     - name: Java
 *       content: &#40;== include google/foo/tutorial_java.md ==&#41;
 *   rules:
 *   - selector: google.calendar.Calendar.Get
 *     description: >
 *       ...
 *   - selector: google.calendar.Calendar.Put
 *     description: >
 *       ...
 * </code></pre>
 * Documentation is provided in markdown syntax. In addition to
 * standard markdown features, definition lists, tables and fenced
 * code blocks are supported. Section headers can be provided and are
 * interpreted relative to the section nesting of the context where
 * a documentation fragment is embedded.
 * 
 * Documentation from the IDL is merged with documentation defined
 * via the config at normalization time, where documentation provided
 * by config rules overrides IDL provided.
 * 
 * A number of constructs specific to the API platform are supported
 * in documentation text.
 * 
 * In order to reference a proto element, the following
 * notation can be used:
 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
 * To override the display text used for the link, this can be used:
 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
 * Text can be excluded from doc using the following notation:
 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
 * 
 * A few directives are available in documentation. Note that
 * directives must appear on a single line to be properly
 * identified. The `include` directive includes a markdown file from
 * an external source:
 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
 * The `resource_for` directive marks a message to be the resource of
 * a collection in REST view. If it is not specified, tools attempt
 * to infer the resource from the operations in a collection:
 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
 * The directive `suppress_warning` does not directly affect documentation
 * and is documented together with service config validation.
 */
export interface Documentation {
  /**
   * A short summary of what the service does. Can only be provided by
   * plain text.
   */
  summary: string;
  /** The top level pages for the documentation set. */
  pages: Page[];
  /**
   * A list of documentation rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: DocumentationRule[];
  /** The URL to the root of documentation. */
  documentationRootUrl: string;
  /**
   * Specifies the service root url if the default one (the service name
   * from the yaml file) is not suitable. This can be seen in any fully
   * specified service urls as well as sections that show a base that other
   * urls are relative to.
   */
  serviceRootUrl: string;
  /**
   * Declares a single overview page. For example:
   * <pre><code>documentation:
   *   summary: ...
   *   overview: &#40;== include overview.md ==&#41;
   * </code></pre>
   * This is a shortcut for the following declaration (using pages style):
   * <pre><code>documentation:
   *   summary: ...
   *   pages:
   *   - name: Overview
   *     content: &#40;== include overview.md ==&#41;
   * </code></pre>
   * Note: you cannot specify both `overview` field and `pages` field.
   */
  overview: string;
}
/** A documentation rule provides information about individual API elements. */
export interface DocumentationRule {
  /**
   * The selector is a comma-separated list of patterns. Each pattern is a
   * qualified name of the element which may end in "*", indicating a wildcard.
   * Wildcards are only allowed at the end and for a whole component of the
   * qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A
   * wildcard will match one or more components. To specify a default for all
   * applicable elements, the whole pattern "*" is used.
   */
  selector: string;
  /** Description of the selected API(s). */
  description: string;
  /**
   * Deprecation description of the selected element(s). It can be provided if
   * an element is marked as `deprecated`.
   */
  deprecationDescription: string;
}
/**
 * Represents a documentation page. A page can contain subpages to represent
 * nested documentation set structure.
 */
export interface Page {
  /**
   * The name of the page. It will be used as an identity of the page to
   * generate URI of the page, text of the link to this page in navigation,
   * etc. The full page name (start from the root page name to this page
   * concatenated with `.`) can be used as reference to the page in your
   * documentation. For example:
   * <pre><code>pages:
   * - name: Tutorial
   *   content: &#40;== include tutorial.md ==&#41;
   *   subpages:
   *   - name: Java
   *     content: &#40;== include tutorial_java.md ==&#41;
   * </code></pre>
   * You can reference `Java` page using Markdown reference link syntax:
   * `[Java][Tutorial.Java]`.
   */
  name: string;
  /**
   * The Markdown content of the page. You can use <code>&#40;== include {path}
   * ==&#41;</code> to include content from a Markdown file.
   */
  content: string;
  /**
   * Subpages of this page. The order of subpages specified here will be
   * honored in the generated docset.
   */
  subpages: Page[];
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
  typeUrl: "/google.api.Documentation",
  encode(message: Documentation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Documentation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<Documentation>): Documentation {
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
function createBaseDocumentationRule(): DocumentationRule {
  return {
    selector: "",
    description: "",
    deprecationDescription: ""
  };
}
export const DocumentationRule = {
  typeUrl: "/google.api.DocumentationRule",
  encode(message: DocumentationRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): DocumentationRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<DocumentationRule>): DocumentationRule {
    const message = createBaseDocumentationRule();
    message.selector = object.selector ?? "";
    message.description = object.description ?? "";
    message.deprecationDescription = object.deprecationDescription ?? "";
    return message;
  }
};
function createBasePage(): Page {
  return {
    name: "",
    content: "",
    subpages: []
  };
}
export const Page = {
  typeUrl: "/google.api.Page",
  encode(message: Page, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Page {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<Page>): Page {
    const message = createBasePage();
    message.name = object.name ?? "";
    message.content = object.content ?? "";
    message.subpages = object.subpages?.map(e => Page.fromPartial(e)) || [];
    return message;
  }
};