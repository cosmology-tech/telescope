import * as t from '@babel/types';

export const lcdClassArguments = (): t.ObjectExpression[] => {
    return [
        t.objectExpression([
            t.objectProperty(
                t.identifier('restEndpoint'),
                t.identifier('restEndpoint'),
                false,
                true
            )
        ])
    ]
}

export const newAwaitImport = (
    path: string,
    className: string,
    _arguments: t.ObjectExpression[]
) => {
    return t.newExpression(
        t.memberExpression(
            t.awaitExpression(
                t.callExpression(
                    t.import(),
                    [
                        t.stringLiteral(
                            path
                        )
                    ]
                )
            ),
            t.identifier(className),
            false
        ),
        _arguments
    );
}

export const recursiveObjectProps = (
    names: string[],
    leaf?: any
) => {
    const [name, ...rest] = names;

    let baseComponent;
    if (names.length === 1) {
        baseComponent = leaf ? leaf : t.identifier(name)
    } else {
        baseComponent = recursiveObjectProps(rest, leaf)
    }

    return t.objectExpression([
        t.objectProperty(
            t.identifier(name),
            baseComponent
        )
    ])
};

export const createNestedImportObject = (
    obj: object,
    className: string,
    _arguments: t.ObjectExpression[]
) => {

    if (typeof obj === 'string') {
        return newAwaitImport(obj, className, _arguments)
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            createNestedImportObject(obj[name], className, _arguments)
        )
    }))
};

export const createScopedImportObject = (
    names: string[],
    path: string,
    className: string,
    _arguments: t.ObjectExpression[]
) => {
    return recursiveObjectProps(
        names,
        newAwaitImport(
            path,
            className,
            _arguments
        )
    )
};

export const scopedImportObject = () => {
    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier('lcd'),
                    t.arrowFunctionExpression(
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
                        //
                        t.objectExpression([
                            t.objectProperty(
                                t.identifier('cosmos'),
                                t.objectExpression([
                                    t.objectProperty(
                                        t.identifier('bank'),
                                        t.objectExpression([
                                            t.objectProperty(
                                                t.identifier('v1beta1'),
                                                t.newExpression(
                                                    t.memberExpression(
                                                        t.awaitExpression(
                                                            t.callExpression(
                                                                t.import(),
                                                                [
                                                                    t.stringLiteral(
                                                                        './proto/thing'
                                                                    )
                                                                ]
                                                            )
                                                        ),
                                                        t.identifier('LCDQueryClient'),
                                                        false
                                                    ),
                                                    [
                                                        t.objectExpression([
                                                            t.objectProperty(
                                                                t.identifier('restEndpoint'),
                                                                t.identifier('restEndpoint'),
                                                                false,
                                                                true
                                                            )
                                                        ])
                                                    ]
                                                )
                                            )
                                        ]),
                                        false,
                                        true
                                    ),
                                    ////////
                                    t.objectProperty(
                                        t.identifier('gov'),
                                        t.objectExpression([
                                            t.objectProperty(
                                                t.identifier('v1beta1'),
                                                t.newExpression(
                                                    t.memberExpression(
                                                        t.awaitExpression(
                                                            t.callExpression(
                                                                t.import(),
                                                                [
                                                                    t.stringLiteral(
                                                                        './proto/thing'
                                                                    )
                                                                ]
                                                            )
                                                        ),
                                                        t.identifier('LCDQueryClient'),
                                                        false
                                                    ),
                                                    [
                                                        t.objectExpression([
                                                            t.objectProperty(
                                                                t.identifier('restEndpoint'),
                                                                t.identifier('restEndpoint'),
                                                                false,
                                                                true
                                                            )
                                                        ])
                                                    ]
                                                )
                                            )
                                        ]),
                                        false,
                                        true
                                    ),

                                ])
                            ),
                            //////

                            t.objectProperty(
                                t.identifier('osmosis'),
                                t.objectExpression([
                                    t.objectProperty(
                                        t.identifier('gamm'),
                                        t.objectExpression([
                                            t.objectProperty(
                                                t.identifier('v1beta1'),
                                                t.newExpression(
                                                    t.memberExpression(
                                                        t.awaitExpression(
                                                            t.callExpression(
                                                                t.import(),
                                                                [
                                                                    t.stringLiteral(
                                                                        './proto/thing'
                                                                    )
                                                                ]
                                                            )
                                                        ),
                                                        t.identifier('LCDQueryClient'),
                                                        false
                                                    ),
                                                    [
                                                        t.objectExpression([
                                                            t.objectProperty(
                                                                t.identifier('restEndpoint'),
                                                                t.identifier('restEndpoint'),
                                                                false,
                                                                true
                                                            )
                                                        ])
                                                    ]
                                                )
                                            )
                                        ]),
                                        false,
                                        true
                                    )
                                ])
                            ),
                        ]),
                        true
                    )
                )
            ]
        )
    )
}