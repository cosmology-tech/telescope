import * as t from '@babel/types';

export const lcdArguments = (): t.ObjectProperty[] => {
    return [
        t.objectProperty(
            t.identifier('restEndpoint'),
            t.identifier('restEndpoint'),
            false,
            true
        )
    ]
};

export const rpcArguments = (): t.ObjectProperty[] => {
    return [
        t.objectProperty(
            t.identifier('rpc'),
            t.identifier('rpc'),
            false,
            true
        )
    ]
};

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

export const nestedImportObject = (
    obj: object,
    className: string,
    _arguments: t.ObjectProperty[]
) => {

    if (typeof obj === 'string') {
        return newAwaitImport(obj, className,
            [
                t.objectExpression(
                    _arguments
                )
            ]);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            nestedImportObject(obj[name], className, _arguments)
        )
    }))
};

export const createScopedImportObject = (
    obj: object,
    identifier: string,
    className: string,
    _arguments: t.ObjectProperty[]
) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier(identifier),
                    t.arrowFunctionExpression(
                        [
                            t.objectPattern(_arguments)
                        ],
                        //
                        nestedImportObject(
                            obj,
                            className,
                            _arguments
                        ),
                        true
                    )
                )
            ]
        )
    )
}