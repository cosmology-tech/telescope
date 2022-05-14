import * as _m0 from "protobufjs/minimal";
/**
 * ### System parameter configuration
 *
 * A system parameter is a special kind of parameter defined by the API
 * system, not by an individual API. It is typically mapped to an HTTP header
 * and/or a URL query parameter. This configuration specifies which methods
 * change the names of the system parameters.
 */
export interface SystemParameters {
    /**
     * Define system parameters.
     *
     * The parameters defined here will override the default parameters
     * implemented by the system. If this field is missing from the service
     * config, default system parameters will be used. Default system parameters
     * and names is implementation-dependent.
     *
     * Example: define api key for all methods
     *
     * system_parameters
     * rules:
     * - selector: "*"
     * parameters:
     * - name: api_key
     * url_query_parameter: api_key
     *
     *
     * Example: define 2 api key names for a specific method.
     *
     * system_parameters
     * rules:
     * - selector: "/ListShelves"
     * parameters:
     * - name: api_key
     * http_header: Api-Key1
     * - name: api_key
     * http_header: Api-Key2
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules: SystemParameterRule[];
}
/**
 * Define a system parameter rule mapping system parameter definitions to
 * methods.
 */
export interface SystemParameterRule {
    /**
     * Selects the methods to which this rule applies. Use '*' to indicate all
     * methods in all APIs.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector: string;
    /**
     * Define parameters. Multiple names may be defined for a parameter.
     * For a given method call, only one of them should be used. If multiple
     * names are used the behavior is implementation-dependent.
     * If none of the specified names are present the behavior is
     * parameter-dependent.
     */
    parameters: SystemParameter[];
}
/**
 * Define a parameter's name and location. The parameter may be passed as either
 * an HTTP header or a URL query parameter, and if both are passed the behavior
 * is implementation-dependent.
 */
export interface SystemParameter {
    /** Define the name of the parameter, such as "api_key" . It is case sensitive. */
    name: string;
    /**
     * Define the HTTP header name to use for the parameter. It is case
     * insensitive.
     */
    httpHeader: string;
    /**
     * Define the URL query parameter name to use for the parameter. It is case
     * sensitive.
     */
    urlQueryParameter: string;
}
export declare const SystemParameters: {
    encode(message: SystemParameters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameters;
    fromJSON(object: any): SystemParameters;
    toJSON(message: SystemParameters): unknown;
    fromPartial<I extends {
        rules?: {
            selector?: string;
            parameters?: {
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            }[];
        }[];
    } & {
        rules?: {
            selector?: string;
            parameters?: {
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            }[];
        }[] & ({
            selector?: string;
            parameters?: {
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            }[];
        } & {
            selector?: string;
            parameters?: {
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            }[] & ({
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            } & {
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            } & Record<Exclude<keyof I["rules"][number]["parameters"][number], keyof SystemParameter>, never>)[] & Record<Exclude<keyof I["rules"][number]["parameters"], keyof {
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["rules"][number], keyof SystemParameterRule>, never>)[] & Record<Exclude<keyof I["rules"], keyof {
            selector?: string;
            parameters?: {
                name?: string;
                httpHeader?: string;
                urlQueryParameter?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "rules">, never>>(object: I): SystemParameters;
};
export declare const SystemParameterRule: {
    encode(message: SystemParameterRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameterRule;
    fromJSON(object: any): SystemParameterRule;
    toJSON(message: SystemParameterRule): unknown;
    fromPartial<I extends {
        selector?: string;
        parameters?: {
            name?: string;
            httpHeader?: string;
            urlQueryParameter?: string;
        }[];
    } & {
        selector?: string;
        parameters?: {
            name?: string;
            httpHeader?: string;
            urlQueryParameter?: string;
        }[] & ({
            name?: string;
            httpHeader?: string;
            urlQueryParameter?: string;
        } & {
            name?: string;
            httpHeader?: string;
            urlQueryParameter?: string;
        } & Record<Exclude<keyof I["parameters"][number], keyof SystemParameter>, never>)[] & Record<Exclude<keyof I["parameters"], keyof {
            name?: string;
            httpHeader?: string;
            urlQueryParameter?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof SystemParameterRule>, never>>(object: I): SystemParameterRule;
};
export declare const SystemParameter: {
    encode(message: SystemParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameter;
    fromJSON(object: any): SystemParameter;
    toJSON(message: SystemParameter): unknown;
    fromPartial<I extends {
        name?: string;
        httpHeader?: string;
        urlQueryParameter?: string;
    } & {
        name?: string;
        httpHeader?: string;
        urlQueryParameter?: string;
    } & Record<Exclude<keyof I, keyof SystemParameter>, never>>(object: I): SystemParameter;
};
