import * as t from '@babel/types';

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
                        t.objectExpression([
                            t.objectProperty(
                                t.identifier('cosmos'),
                                t.objectExpression([
                                    t.objectProperty(
                                        t.identifier('bank'),
                                        t.identifier('bank'),
                                        false,
                                        true
                                    )
                                ])
                            )
                        ]),
                        true
                    )
                )
            ]
        )
    )
}