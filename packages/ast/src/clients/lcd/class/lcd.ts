import * as t from '@babel/types';
import { ProtoService, ProtoServiceMethod, ProtoServiceMethodInfo } from '@osmonauts/types';
import { GenericParseContext } from '../../../encoding';
import { callExpression, classMethod, identifier, objectPattern } from '../../../utils';

const returnReponseType = (ResponseType: string) => {
    return t.tsTypeAnnotation(
        t.tsTypeReference(
            t.identifier('Promise'),
            t.tsTypeParameterInstantiation(
                [
                    t.tsTypeReference(
                        t.identifier(ResponseType)
                    )
                ]
            )
        )
    );
};

const firstLower = (s: string) => s = s.charAt(0).toLowerCase() + s.slice(1);
const firstUpper = (s: string) => s = s.charAt(0).toUpperCase() + s.slice(1);

const returnAwaitRequest = (
    responseType: string,
    // method: 'get' | 'post',
    hasOptions: boolean = false
) => {
    const args = [
        t.identifier('endpoint')
    ];
    // if (method === 'post') {
    //     args.push(t.identifier('body'));
    // }

    if (hasOptions) {
        args.push(t.identifier('options'));
    }

    return t.returnStatement(
        t.awaitExpression(
            callExpression(
                t.memberExpression(
                    t.thisExpression(),
                    t.identifier('get')
                ),
                args,
                t.tsTypeParameterInstantiation([
                    t.tsTypeReference(
                        t.identifier(responseType)
                    )
                ])
            )
        )
    );

};

const makeOptionsObject = () => {
    return t.variableDeclaration(
        'const',
        [
            t.variableDeclarator(
                identifier(
                    'options',
                    t.tsTypeAnnotation(
                        t.tsAnyKeyword()
                    )
                ),
                t.objectExpression(
                    [
                        t.objectProperty(
                            t.identifier('params'),
                            t.objectExpression([])
                        )
                    ]
                )
            )
        ]
    )
};

const setParamOption = (
    context: GenericParseContext,
    name: string,
    svc: ProtoServiceMethod
) => {

    const flippedCasing = Object.keys(svc.info.casing).reduce((m, v) => {
        m[svc.info.casing[v]] = v;
        return m;
    }, {});

    const queryParam = flippedCasing[name] ? flippedCasing[name] : name;
    const param = svc.info.paramMap[name];

    // options.params.group_id = params.groupId;
    let expr = t.expressionStatement(
        t.assignmentExpression(
            '=',
            t.memberExpression(
                t.memberExpression(
                    t.identifier('options'),
                    t.identifier('params')
                ),
                t.identifier(queryParam)
            ),
            t.memberExpression(
                t.identifier('params'),
                t.identifier(param)
            )
        )
    );

    if (name === 'pagination') {
        context.addUtil('setPaginationParams');
        expr = t.expressionStatement(
            t.callExpression(
                t.identifier('setPaginationParams'),
                [
                    t.identifier('options'),
                    t.memberExpression(
                        t.identifier('params'),
                        t.identifier('pagination'),
                        false
                    )
                ]
            )
        )


    }

    return t.ifStatement(
        t.binaryExpression(
            '!==',
            t.unaryExpression(
                'typeof',
                t.optionalMemberExpression(
                    t.identifier('params'),
                    t.identifier(param),
                    false,
                    true
                )
            ),
            t.stringLiteral('undefined')
        ),
        t.blockStatement([
            expr
        ])
    );
};

// breaks a url string to prepare it for template strings
export const getUrlTemplateString = (url: string) => {
    const parts = url.split('/').filter(a => a !== '');

    let cur = []
    let strs = [];
    let atEnd = false;
    for (let p = 0; p < parts.length; p++) {
        const part = parts[p];
        if (/[{}]+/.test(part)) {
            if (p === parts.length - 1) atEnd = true;
            if (cur.length) {
                const vals = cur.join('/');
                strs.push(vals);
            } else {
                strs.push('/')
            }
            cur = [];
        } else {
            cur.push(part);
        }
    }
    if (cur.length) {
        strs.push(cur.join('/'));
    }
    strs = strs.filter(str => str !== '').map((v, i) => {
        if (i === 0) {
            if (!v.endsWith('/')) v = `${v}/`;
            return v;
        } else if (i === strs.length - 1) {
            if (atEnd) {
                // we want them to end with / if it's an "atEnd" el
                if (!v.endsWith('/')) v = `${v}/`;
                return v;
            }
            // they should all start with "/"
            if (!v.startsWith('/')) v = `/${v}`;
            return v;
        }
        if (!v.endsWith('/')) v = `${v}/`;
        if (!v.startsWith('/')) v = `/${v}`;
        return v;
    });

    return {
        strs,
        atEnd
    };
};

// do we need to set end prop in ast?
// we may want to t.templateElement!!!
export const makeTemplateTag = (info: ProtoServiceMethodInfo) => {
    if (!info.url) throw new Error('no URL on service method');
    const parts = getUrlTemplateString(info.url);
    const templateElts = parts.strs.map(raw => t.templateElement({ raw }))

    // Number of TemplateLiteral quasis should be exactly one more than the number of expressions

    const pathParams = info.pathParams.map(param => {
        const name = info.casing?.[param] ? info.casing[param] : param;
        return t.memberExpression(
            t.identifier('params'),
            t.identifier(name)
        );
    });

    if (parts.atEnd) {
        templateElts.push(t.templateElement({ raw: '' }));
    }

    // THIS MEANS WE PROBABLY HAVE A BUG
    if (templateElts.length !== pathParams.length + 1) {
        templateElts.push(t.templateElement({ raw: '' }));
    }

    templateElts.forEach((el, n) => {
        if (n === templateElts.length - 1) {
            // remove trailing slash...
            el.value.raw = el.value.raw.replace(/\/$/, '');
        }
    });

    return t.templateLiteral(
        templateElts,
        pathParams
    );
};

const makeComment = (comment: string) => {
    return [{ type: 'CommentBlock', value: ` ${comment} ` }]
}

const requestMethod = (
    context: GenericParseContext,
    serviceMethod: ProtoServiceMethod
) => {
    const methodName = firstLower(serviceMethod.name);
    const comment = serviceMethod.comment ?? serviceMethod.name;

    if (!serviceMethod.info) {
        throw new Error('No Service URL!');
    }

    const queryParams = serviceMethod.info.queryParams.map(param => {
        return setParamOption(context, param, serviceMethod);
    });

    const optionsAst = [];
    if (serviceMethod.info.queryParams.length) {
        // options params object
        optionsAst.push(makeOptionsObject())
    }

    // parse field types
    Object.entries(serviceMethod.fields ?? {})
        .forEach(([key, value]) => {
            switch (value.parsedType.type) {
                case 'Type':
                    // this gets the import for us and loads them into ctx
                    // if later we need to get subtypes, we have it all w/ctx
                    context.getTypeName(value);
                case 'native':
            }
        });

    const fieldNames = Object.keys(serviceMethod.fields ?? {})
    const hasParams = fieldNames.length > 0;
    const paramName = hasParams ? 'params' : '_params';
    let methodArgs: t.Identifier | t.AssignmentPattern = identifier(
        paramName,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(serviceMethod.requestType)
            )
        )
    );

    // if no params, then let's default to empty object for cleaner API
    if (!hasParams) {
        methodArgs = t.assignmentPattern(
            methodArgs,
            t.objectExpression([])
        )
    } else if (hasParams && fieldNames.length === 1 && fieldNames.includes('pagination')) {
        // if only argument "required" is pagination
        // also default to empty
        methodArgs = t.assignmentPattern(
            methodArgs,
            t.objectExpression([
                t.objectProperty(
                    t.identifier('pagination'),
                    t.identifier('undefined'),
                    false,
                    false
                )
            ])
        )
    }

    const body = [];
    // if (serviceMethod.info.method === 'post') {
    //     body.push(t.variableDeclaration(
    //         'const',
    //         [
    //             t.variableDeclarator
    //                 (
    //                     t.identifier('body'),
    //                     t.objectExpression([])
    //                 )
    //         ]
    //     ));
    // }

    return classMethod(
        'method',
        t.identifier(methodName),
        [
            methodArgs
        ],
        t.blockStatement([

            ...optionsAst,

            // if optional params not undefined
            ...queryParams,

            // body
            ...body,

            // endpoint
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator
                        (
                            t.identifier('endpoint'),
                            makeTemplateTag(serviceMethod.info)
                        )
                ]
            ),

            // return 
            returnAwaitRequest(
                serviceMethod.responseType,
                // serviceMethod.info.method,
                serviceMethod.info.queryParams.length > 0
            )
        ]),
        returnReponseType(serviceMethod.responseType),
        makeComment(comment),
        false,
        false,
        false,
        true // async
    );
}

const createLCDClientClassBody = (clientName: string, methods: t.ClassMethod[]) => {
    return t.exportNamedDeclaration(
        t.classDeclaration(
            t.identifier(clientName),
            t.identifier('LCDClient'),
            t.classBody([
                // constructor
                t.classMethod(
                    'constructor',
                    t.identifier('constructor'),
                    [
                        objectPattern([
                            t.objectProperty(
                                t.identifier('restEndpoint'),
                                t.identifier('restEndpoint'),
                                false,
                                true
                            )],
                            t.tsTypeAnnotation(
                                t.tsTypeLiteral([
                                    t.tsPropertySignature(
                                        t.identifier('restEndpoint'),
                                        t.tsTypeAnnotation(
                                            t.tsStringKeyword()
                                        )
                                    )
                                ])
                            )
                        )
                    ],
                    t.blockStatement([
                        t.expressionStatement(
                            t.callExpression(
                                t.super(),
                                [
                                    t.objectExpression(
                                        [
                                            t.objectProperty(
                                                t.identifier('restEndpoint'),
                                                t.identifier('restEndpoint'),
                                                false,
                                                true
                                            )
                                        ]
                                    )
                                ]
                            )
                        )
                    ])
                ),
                ...methods
            ])
        )
    )
};

export const createLCDClient = (
    context: GenericParseContext,
    service: ProtoService
) => {
    const methods = Object.keys(service.methods).map(key => {
        const method: ProtoServiceMethod = service.methods[key];
        if (method.info &&
            (method.options['(google.api.http).get'] || method.options['(google.api.http)'])
        ) {
            return requestMethod(context, method);
        }
    }).filter(Boolean);
    context.addUtil('LCDClient');
    if (methods.length) {
        const clientName = 'LCD' + firstUpper(service.name) + 'Client'
        return createLCDClientClassBody(clientName, methods);
    }
};

export const createAggregatedLCDClient = (
    context: GenericParseContext,
    services: ProtoService[],
    clientName: string
) => {
    context.addUtil('LCDClient');
    const methods = services.reduce((m, service) => {
        const innerMethods = Object.keys(service.methods).map(key => {
            const method: ProtoServiceMethod = service.methods[key];
            return requestMethod(context, method);
        });
        return [...m, ...innerMethods];
    }, []);
    return createLCDClientClassBody(clientName, methods);
};