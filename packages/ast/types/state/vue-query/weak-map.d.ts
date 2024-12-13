export declare const createClientMap: (QueryClientImpl: string) => {
    type: string;
    declaration: {
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
                        typeName: {
                            type: string;
                            name: string;
                        };
                        typeParameters: {
                            type: string;
                            params: {
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
                            }[];
                        };
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
                            typeName: {
                                type: string;
                                name: string;
                            };
                            typeParameters: {
                                type: string;
                                params: {
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
                                }[];
                            };
                        };
                    };
                }[];
                body: {
                    type: string;
                    body: ({
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
                                arguments: any[];
                            };
                        }[];
                        kind: string;
                        argument?: undefined;
                    } | {
                        type: string;
                        argument: {
                            type: string;
                            callee: {
                                type: string;
                                name: string;
                            };
                            arguments: {
                                type: string;
                                id: any;
                                generator: boolean;
                                async: boolean;
                                params: any[];
                                body: {
                                    type: string;
                                    body: {
                                        type: string;
                                        test: {
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
                                        consequent: {
                                            type: string;
                                            body: ({
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
                                                        object: {
                                                            type: string;
                                                            name: string;
                                                        };
                                                        computed: boolean;
                                                        property: {
                                                            type: string;
                                                            name: string;
                                                        };
                                                    }[];
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
                                                                object: {
                                                                    type: string;
                                                                    name: string;
                                                                };
                                                                computed: boolean;
                                                                property: {
                                                                    type: string;
                                                                    name: string;
                                                                };
                                                            }[];
                                                        };
                                                    }[];
                                                    directives: any[];
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
                                                            object: {
                                                                type: string;
                                                                name: string;
                                                            };
                                                            computed: boolean;
                                                            property: {
                                                                type: string;
                                                                name: string;
                                                            };
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
                                                    arguments: ({
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
                                                        name?: undefined;
                                                    } | {
                                                        type: string;
                                                        name: string;
                                                        object?: undefined;
                                                        computed?: undefined;
                                                        property?: undefined;
                                                    })[];
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
                                        alternate: any;
                                    }[];
                                    directives: any[];
                                };
                            }[];
                        };
                        declarations?: undefined;
                        kind?: undefined;
                    })[];
                };
            };
        }[];
        kind: string;
    };
}[];
