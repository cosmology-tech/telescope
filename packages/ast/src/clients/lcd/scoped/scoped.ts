import * as t from '@babel/types';

export const lcdArguments = (): t.ObjectProperty[] => {
    return [
        t.objectProperty(
            t.identifier('restEndpoint'),
            t.identifier('restEndpoint'),
            false,
            true
        )
    ];
};

export const lcdFuncArguments = (): t.ObjectPattern[] => {
    return [
        t.objectPattern(
            lcdArguments()
        )
    ];
};

export const lcdClassArguments = (): t.ObjectExpression[] => {
    return [
        t.objectExpression(
            lcdArguments()
        )
    ];
};

export const lcdNewAwaitImport = (
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

export const lcdRecursiveObjectProps = (
    names: string[],
    leaf?: any
) => {
    const [name, ...rest] = names;

    let baseComponent;
    if (names.length === 1) {
        baseComponent = leaf ? leaf : t.identifier(name)
    } else {
        baseComponent = lcdRecursiveObjectProps(rest, leaf)
    }

    return t.objectExpression([
        t.objectProperty(
            t.identifier(name),
            baseComponent
        )
    ])
};

export const lcdNestedImportObject = (
    obj: object,
    className: string,
    _arguments: t.ObjectExpression[]
) => {

    if (typeof obj === 'string') {
        return lcdNewAwaitImport(obj, className, _arguments);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            lcdNestedImportObject(obj[name], className, _arguments)
        )
    }))
};

export const createScopedLCDFactory = (
    obj: object,
    identifier: string,
    className: string
) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier(identifier),
                    t.arrowFunctionExpression(
                        lcdFuncArguments(),
                        //
                        lcdNestedImportObject(
                            obj,
                            className,
                            lcdClassArguments()
                        ),
                        true
                    )
                )
            ]
        )
    )
};