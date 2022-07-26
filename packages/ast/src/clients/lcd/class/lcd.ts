import * as t from '@babel/types';
import { ProtoService, ProtoServiceMethod, ProtoServiceMethodInfo } from '@osmonauts/types';
import { snake } from 'case';
import { GenericParseContext } from '../../../encoding';
import { classMethod, identifier } from '../../../utils';

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

const returnAwaitRequest = (hasOptions: boolean = false) => {
    const args = [
        t.identifier('endpoint')
    ];
    if (hasOptions) {
        args.push(t.identifier('options'));
    }
    return t.returnStatement(
        t.awaitExpression(
            t.callExpression(
                t.memberExpression(
                    t.thisExpression(),
                    t.identifier('request')
                ),
                args
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

const setParamOption = (name) => {
    return t.ifStatement(
        t.binaryExpression(
            '!==',
            t.unaryExpression(
                'typeof',
                t.optionalMemberExpression(
                    t.identifier('params'),
                    t.identifier(name),
                    false,
                    true
                )
            ),
            t.stringLiteral('undefined')
        ),
        t.blockStatement([
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('options'),
                            t.identifier('params')
                        ),
                        t.identifier(snake(name))
                    ),
                    t.memberExpression(
                        t.identifier('params'),
                        t.identifier(name)
                    )
                )
            )
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
        return t.memberExpression(
            t.identifier('params'),
            t.identifier(param)
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
        return setParamOption(param);
    });

    const optionsAst = [];
    if (serviceMethod.info.queryParams.length) {
        // options params object
        optionsAst.push(makeOptionsObject())
    }

    // parse field types
    Object.entries(serviceMethod.fields ?? {})
        .map(([key, value]) => {
            switch (value.parsedType.type) {
                case 'Type':
                    // this gets the import for us
                    // if later we need to get subtypes, we have it all w/ctx
                    context.getTypeName(value);
                case 'native':
            }
        });

    return classMethod(
        'method',
        t.identifier(methodName),
        [
            identifier(
                'params',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(serviceMethod.requestType)
                    )
                )
            )
        ],
        t.blockStatement([

            ...optionsAst,
            // if optional params not undefined
            ...queryParams,

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
            returnAwaitRequest(serviceMethod.info.queryParams.length > 0)
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
                        t.objectPattern([
                            t.objectProperty(
                                t.identifier('restEndpoint'),
                                t.identifier('restEndpoint'),
                                false,
                                true
                            )
                        ])
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
    context.addUtil('LCDClient');
    const methods = Object.keys(service.methods).map(key => {
        const method: ProtoServiceMethod = service.methods[key];
        if (method.info)
            return requestMethod(context, method);
    }).filter(Boolean);
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