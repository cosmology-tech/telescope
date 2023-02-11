import * as t from '@babel/types';
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../encoding';
/**
 * Create an ASTs for a function creating hooks
 * eg: __fixtures__/output1/akash/audit/v1beta2/query.rpc.Query.ts
 * export const createRpcQueryHooks = ...
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - service details
 * @returns {ParseResult} created AST
 */
export declare const createRpcQueryHooks: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
/**
 * Create ASTs for all the methods of a proto service.
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - service details
 * @returns {ParseResult} created AST
 */
export declare const createRpcQueryHookInterfaces: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration[];
/**
 * Create an ASTs for a map of query clients and a function of getting query service.
 * eg: __fixtures__/output1/akash/audit/v1beta2/query.rpc.Query.ts
 * const _queryClients: WeakMap...
 *
 * const getQueryService = (...
 * @param {Object=} context - context of generating the file
 * @param {Object=} service - service details
 * @returns {ParseResult} created AST
 */
export declare const createRpcQueryHookClientMap: (context: GenericParseContext, service: ProtoService) => ({
    type: string;
    declarations: {
        type: string;
        id: {
            type: string;
            name: string;
            typeAnnotation: {
                type: string;
                typeAnnotation: {
                    type: string;
                    typeName: {
                        type: string;
                        name: string;
                    };
                    typeParameters: {
                        type: string;
                        params: {
                            type: string;
                            typeName: {
                                type: string;
                                name: string;
                            };
                        }[];
                    };
                };
            };
        };
        init: {
            type: string;
            callee: {
                type: string;
                name: string;
            };
            arguments: any[];
        };
    }[];
    kind: string;
} | {
    type: string;
    declarations: {
        type: string;
        id: {
            type: string;
            name: string;
        };
        init: {
            type: string;
            returnType: {
                type: string;
                typeAnnotation: {
                    type: string;
                    types: ({
                        type: string;
                        typeName: {
                            type: string;
                            name: string;
                        };
                    } | {
                        type: string;
                        typeName?: undefined;
                    })[];
                };
            };
            id: any;
            generator: boolean;
            async: boolean;
            params: {
                type: string;
                name: string;
                typeAnnotation: {
                    type: string;
                    typeAnnotation: {
                        type: string;
                        types: ({
                            type: string;
                            typeName: {
                                type: string;
                                name: string;
                            };
                        } | {
                            type: string;
                            typeName?: undefined;
                        })[];
                    };
                };
            }[];
            body: {
                type: string;
                body: ({
                    type: string;
                    test: {
                        type: string;
                        operator: string;
                        prefix: boolean;
                        argument: {
                            type: string;
                            name: string;
                        };
                        callee?: undefined;
                        arguments?: undefined;
                    };
                    consequent: {
                        type: string;
                        argument: any;
                        body?: undefined;
                        directives?: undefined;
                    };
                    alternate: any;
                    declarations?: undefined;
                    kind?: undefined;
                    expression?: undefined;
                    argument?: undefined;
                } | {
                    type: string;
                    test: {
                        type: string;
                        callee: {
                            type: string;
                            object: {
                                type: string;
                                name: string;
                            };
                            computed: boolean;
                            property: {
                                type: string;
                                name: string;
                            };
                        };
                        arguments: {
                            type: string;
                            name: string;
                        }[];
                        operator?: undefined;
                        prefix?: undefined;
                        argument?: undefined;
                    };
                    consequent: {
                        type: string;
                        body: {
                            type: string;
                            argument: {
                                type: string;
                                callee: {
                                    type: string;
                                    object: {
                                        type: string;
                                        name: string;
                                    };
                                    computed: boolean;
                                    property: {
                                        type: string;
                                        name: string;
                                    };
                                };
                                arguments: {
                                    type: string;
                                    name: string;
                                }[];
                            };
                        }[];
                        directives: any[];
                        argument?: undefined;
                    };
                    alternate: any;
                    declarations?: undefined;
                    kind?: undefined;
                    expression?: undefined;
                    argument?: undefined;
                } | {
                    type: string;
                    declarations: {
                        type: string;
                        id: {
                            type: string;
                            name: string;
                        };
                        init: {
                            type: string;
                            callee: {
                                type: string;
                                name: string;
                            };
                            arguments: {
                                type: string;
                                name: string;
                            }[];
                        };
                    }[];
                    kind: string;
                    test?: undefined;
                    consequent?: undefined;
                    alternate?: undefined;
                    expression?: undefined;
                    argument?: undefined;
                } | {
                    type: string;
                    expression: {
                        type: string;
                        callee: {
                            type: string;
                            object: {
                                type: string;
                                name: string;
                            };
                            computed: boolean;
                            property: {
                                type: string;
                                name: string;
                            };
                        };
                        arguments: {
                            type: string;
                            name: string;
                        }[];
                    };
                    test?: undefined;
                    consequent?: undefined;
                    alternate?: undefined;
                    declarations?: undefined;
                    kind?: undefined;
                    argument?: undefined;
                } | {
                    type: string;
                    argument: {
                        type: string;
                        name: string;
                    };
                    test?: undefined;
                    consequent?: undefined;
                    alternate?: undefined;
                    declarations?: undefined;
                    kind?: undefined;
                    expression?: undefined;
                })[];
                directives: any[];
            };
        };
    }[];
    kind: string;
})[];
