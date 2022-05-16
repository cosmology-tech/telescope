import * as _m0 from "protobufjs/minimal";
/**
 * `Documentation` provides the information for describing a service.
 *
 * Example:
 * <pre><code>documentation:
 * summary: >
 * The Google Calendar API gives access
 * to most calendar features.
 * pages:
 * - name: Overview
 * content: &#40;== include google/foo/overview.md ==&#41;
 * - name: Tutorial
 * content: &#40;== include google/foo/tutorial.md ==&#41;
 * subpages;
 * - name: Java
 * content: &#40;== include google/foo/tutorial_java.md ==&#41;
 * rules:
 * - selector: google.calendar.Calendar.Get
 * description: >
 * ...
 * - selector: google.calendar.Calendar.Put
 * description: >
 * ...
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
     * summary: ...
     * overview: &#40;== include overview.md ==&#41;
     * </code></pre>
     * This is a shortcut for the following declaration (using pages style):
     * <pre><code>documentation:
     * summary: ...
     * pages:
     * - name: Overview
     * content: &#40;== include overview.md ==&#41;
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
     * content: &#40;== include tutorial.md ==&#41;
     * subpages:
     * - name: Java
     * content: &#40;== include tutorial_java.md ==&#41;
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
export declare const Documentation: {
    encode(message: Documentation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Documentation;
    fromJSON(object: any): Documentation;
    toJSON(message: Documentation): unknown;
    fromPartial<I extends {
        summary?: string;
        pages?: {
            name?: string;
            content?: string;
            subpages?: any[];
        }[];
        rules?: {
            selector?: string;
            description?: string;
            deprecationDescription?: string;
        }[];
        documentationRootUrl?: string;
        serviceRootUrl?: string;
        overview?: string;
    } & {
        summary?: string;
        pages?: {
            name?: string;
            content?: string;
            subpages?: any[];
        }[] & ({
            name?: string;
            content?: string;
            subpages?: any[];
        } & {
            name?: string;
            content?: string;
            subpages?: {
                name?: string;
                content?: string;
                subpages?: any[];
            }[] & ({
                name?: string;
                content?: string;
                subpages?: any[];
            } & {
                name?: string;
                content?: string;
                subpages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[] & ({
                    name?: string;
                    content?: string;
                    subpages?: any[];
                } & {
                    name?: string;
                    content?: string;
                    subpages?: {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[] & ({
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    } & {
                        name?: string;
                        content?: string;
                        subpages?: {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[] & ({
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        } & {
                            name?: string;
                            content?: string;
                            subpages?: {
                                name?: string;
                                content?: string;
                                subpages?: any[];
                            }[] & ({
                                name?: string;
                                content?: string;
                                subpages?: any[];
                            } & {
                                name?: string;
                                content?: string;
                                subpages?: {
                                    name?: string;
                                    content?: string;
                                    subpages?: any[];
                                }[] & ({
                                    name?: string;
                                    content?: string;
                                    subpages?: any[];
                                } & {
                                    name?: string;
                                    content?: string;
                                    subpages?: {
                                        name?: string;
                                        content?: string;
                                        subpages?: any[];
                                    }[] & ({
                                        name?: string;
                                        content?: string;
                                        subpages?: any[];
                                    } & {
                                        name?: string;
                                        content?: string;
                                        subpages?: {
                                            name?: string;
                                            content?: string;
                                            subpages?: any[];
                                        }[] & ({
                                            name?: string;
                                            content?: string;
                                            subpages?: any[];
                                        } & {
                                            name?: string;
                                            content?: string;
                                            subpages?: {
                                                name?: string;
                                                content?: string;
                                                subpages?: any[];
                                            }[] & ({
                                                name?: string;
                                                content?: string;
                                                subpages?: any[];
                                            } & {
                                                name?: string;
                                                content?: string;
                                                subpages?: {
                                                    name?: string;
                                                    content?: string;
                                                    subpages?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    content?: string;
                                                    subpages?: any[];
                                                } & any & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                                    name?: string;
                                                    content?: string;
                                                    subpages?: any[];
                                                }[]>, never>;
                                            } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                                name?: string;
                                                content?: string;
                                                subpages?: any[];
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                            name?: string;
                                            content?: string;
                                            subpages?: any[];
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                        name?: string;
                                        content?: string;
                                        subpages?: any[];
                                    }[]>, never>;
                                } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                    name?: string;
                                    content?: string;
                                    subpages?: any[];
                                }[]>, never>;
                            } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                name?: string;
                                content?: string;
                                subpages?: any[];
                            }[]>, never>;
                        } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"][number]["subpages"], keyof {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[]>, never>;
            } & Record<Exclude<keyof I["pages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"][number]["subpages"], keyof {
                name?: string;
                content?: string;
                subpages?: any[];
            }[]>, never>;
        } & Record<Exclude<keyof I["pages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["pages"], keyof {
            name?: string;
            content?: string;
            subpages?: any[];
        }[]>, never>;
        rules?: {
            selector?: string;
            description?: string;
            deprecationDescription?: string;
        }[] & ({
            selector?: string;
            description?: string;
            deprecationDescription?: string;
        } & {
            selector?: string;
            description?: string;
            deprecationDescription?: string;
        } & Record<Exclude<keyof I["rules"][number], keyof DocumentationRule>, never>)[] & Record<Exclude<keyof I["rules"], keyof {
            selector?: string;
            description?: string;
            deprecationDescription?: string;
        }[]>, never>;
        documentationRootUrl?: string;
        serviceRootUrl?: string;
        overview?: string;
    } & Record<Exclude<keyof I, keyof Documentation>, never>>(object: I): Documentation;
};
export declare const DocumentationRule: {
    encode(message: DocumentationRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DocumentationRule;
    fromJSON(object: any): DocumentationRule;
    toJSON(message: DocumentationRule): unknown;
    fromPartial<I extends {
        selector?: string;
        description?: string;
        deprecationDescription?: string;
    } & {
        selector?: string;
        description?: string;
        deprecationDescription?: string;
    } & Record<Exclude<keyof I, keyof DocumentationRule>, never>>(object: I): DocumentationRule;
};
export declare const Page: {
    encode(message: Page, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Page;
    fromJSON(object: any): Page;
    toJSON(message: Page): unknown;
    fromPartial<I extends {
        name?: string;
        content?: string;
        subpages?: any[];
    } & {
        name?: string;
        content?: string;
        subpages?: {
            name?: string;
            content?: string;
            subpages?: any[];
        }[] & ({
            name?: string;
            content?: string;
            subpages?: any[];
        } & {
            name?: string;
            content?: string;
            subpages?: {
                name?: string;
                content?: string;
                subpages?: any[];
            }[] & ({
                name?: string;
                content?: string;
                subpages?: any[];
            } & {
                name?: string;
                content?: string;
                subpages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[] & ({
                    name?: string;
                    content?: string;
                    subpages?: any[];
                } & {
                    name?: string;
                    content?: string;
                    subpages?: {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[] & ({
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    } & {
                        name?: string;
                        content?: string;
                        subpages?: {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[] & ({
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        } & {
                            name?: string;
                            content?: string;
                            subpages?: {
                                name?: string;
                                content?: string;
                                subpages?: any[];
                            }[] & ({
                                name?: string;
                                content?: string;
                                subpages?: any[];
                            } & {
                                name?: string;
                                content?: string;
                                subpages?: {
                                    name?: string;
                                    content?: string;
                                    subpages?: any[];
                                }[] & ({
                                    name?: string;
                                    content?: string;
                                    subpages?: any[];
                                } & {
                                    name?: string;
                                    content?: string;
                                    subpages?: {
                                        name?: string;
                                        content?: string;
                                        subpages?: any[];
                                    }[] & ({
                                        name?: string;
                                        content?: string;
                                        subpages?: any[];
                                    } & {
                                        name?: string;
                                        content?: string;
                                        subpages?: {
                                            name?: string;
                                            content?: string;
                                            subpages?: any[];
                                        }[] & ({
                                            name?: string;
                                            content?: string;
                                            subpages?: any[];
                                        } & {
                                            name?: string;
                                            content?: string;
                                            subpages?: {
                                                name?: string;
                                                content?: string;
                                                subpages?: any[];
                                            }[] & ({
                                                name?: string;
                                                content?: string;
                                                subpages?: any[];
                                            } & {
                                                name?: string;
                                                content?: string;
                                                subpages?: {
                                                    name?: string;
                                                    content?: string;
                                                    subpages?: any[];
                                                }[] & ({
                                                    name?: string;
                                                    content?: string;
                                                    subpages?: any[];
                                                } & any & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                                    name?: string;
                                                    content?: string;
                                                    subpages?: any[];
                                                }[]>, never>;
                                            } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                                name?: string;
                                                content?: string;
                                                subpages?: any[];
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                            name?: string;
                                            content?: string;
                                            subpages?: any[];
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                        name?: string;
                                        content?: string;
                                        subpages?: any[];
                                    }[]>, never>;
                                } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                    name?: string;
                                    content?: string;
                                    subpages?: any[];
                                }[]>, never>;
                            } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                name?: string;
                                content?: string;
                                subpages?: any[];
                            }[]>, never>;
                        } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"][number]["subpages"], keyof {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[]>, never>;
            } & Record<Exclude<keyof I["subpages"][number]["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"][number]["subpages"], keyof {
                name?: string;
                content?: string;
                subpages?: any[];
            }[]>, never>;
        } & Record<Exclude<keyof I["subpages"][number], keyof Page>, never>)[] & Record<Exclude<keyof I["subpages"], keyof {
            name?: string;
            content?: string;
            subpages?: any[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Page>, never>>(object: I): Page;
};
