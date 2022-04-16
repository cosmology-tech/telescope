import { basename } from 'path';

export default (filename) => {

    const isQuery = () =>
        basename(filename) === 'query.ts';

    const isTransaction = () =>
        basename(filename) === 'tx.ts';

    return {
        TSInterfaceDeclaration(path) {
            // TX Messages
            if (isTransaction()) {
                if (path.node?.id?.name === 'Rpc') {
                    path.remove();
                    return;
                }
                if (path.node?.id?.name === 'Msg') {
                    path.remove();
                    return;
                }
            }

            // Query Messages
            if (isQuery()) {
                if (path.node?.id?.name === 'Rpc') {
                    path.remove();
                    return;
                }
                if (path.node?.id?.name === 'Query') {
                    path.remove();
                    return;
                }

            }
        },

        // remove Msg Classes
        ClassDeclaration(path) {
            // Query Messages
            if (isQuery()) {
                if (
                    path.node.implements?.[0]?.type === 'TSExpressionWithTypeArguments'
                ) {
                    const child = path.node.implements[0];
                    if (child.expression.name === 'Query') {
                        path.remove();
                    }
                }
            }

            // TX Messages
            if (isTransaction()) {
                if (
                    path.node.implements?.[0]?.type === 'TSExpressionWithTypeArguments'
                ) {
                    const child = path.node.implements[0];
                    if (child.expression.name === 'Msg') {
                        path.remove();
                    }
                }
            }
        },

        VariableDeclarator(path) {
            const name = path.node.id?.name;
            if (name === 'protobufPackage') {
                path.remove();
            }
        }
    };

};
