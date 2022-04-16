import generate from '@babel/generator';
import { camel } from 'case';

const isRequire = (node) =>
    node.callee.name === 'require' &&
    node.callee.type === 'Identifier' &&
    node.arguments &&
    node.arguments.length === 1 &&
    node.arguments[0].type === 'StringLiteral';

const registerDeps = (filename, fileParser) => ({
    TSEnumDeclaration(path) {
        fileParser.addEnum({
            filename,
            name: path.node.id.name,
            node: path.node
        });
    },

    FunctionDeclaration(path) {
        // THIS IS THE any -> Casted Obj
        const possibleToEnum = path.node?.returnType?.typeAnnotation?.typeName?.name;
        if (possibleToEnum) {
            const funcName = path.node?.id?.name;
            const inputType = path.node?.params?.[0]?.typeAnnotation?.typeAnnotation;
            if (fileParser.hasEnum(possibleToEnum)) {
                // console.log(`if you need a ${possibleToEnum}, you can use ${funcName}, and pass in ${generate(inputType).code}`);
                fileParser.addEnumFunction(possibleToEnum, {
                    convertType: 'to',
                    funcName,
                    type: inputType
                });
            }
        }

        // THIS IS THE Casted Obj -> str or whatever
        const possibleFromEnum = path.node?.params?.[0]?.typeAnnotation?.typeAnnotation?.typeName?.name
        if (possibleFromEnum) {
            const funcName = path.node?.id?.name;
            const outType = path.node?.returnType?.typeAnnotation;
            if (fileParser.hasEnum(possibleFromEnum)) {
                // console.log(`if you have a ${possibleFromEnum}, you can use ${funcName}, and get a ${generate(outType).code}`);
                fileParser.addEnumFunction(possibleFromEnum, {
                    convertType: 'from',
                    funcName,
                    type: outType
                });
            }
        }
    },

    TSInterfaceDeclaration(path) {
        fileParser.addGenericInterface(path.node);
        const obj = path.node;
        const params = obj?.body?.body;
        if (params.length) {
            const Type = path.node.id.name;
            params.forEach(param => {
                if (param.type === 'TSPropertySignature') {
                    fileParser.addInterfaceField(
                        Type,
                        {
                            filename,
                            name: param.key.name,
                            type: generate(param.typeAnnotation.typeAnnotation).code,
                            node: param.typeAnnotation.typeAnnotation
                        }
                    );
                }
            })
        }
    },

    ClassDeclaration(path) {
        // Query Messages
        if (fileParser.isQuery()) {
            if (
                path.node.implements?.[0]?.type === 'TSExpressionWithTypeArguments'
            ) {
                const child = path.node.implements[0];
                if (child.expression.name === 'Query') {
                    path.node.body.body.map(element => {
                        if (element.type === 'ClassMethod') {
                            const reqParam = element.params.find(param => param.type === 'Identifier' && param.name === 'request');
                            if (reqParam) {
                                const name = reqParam?.typeAnnotation?.typeAnnotation?.typeName?.name;
                                fileParser.queries.push({
                                    typeUrl: `/${fileParser.protoPackage}.${name}`,
                                    type: name
                                });
                            }
                        }
                    });
                }
            }
        }

        // TX Messages
        if (fileParser.isTransaction()) {
            if (
                path.node.implements?.[0]?.type === 'TSExpressionWithTypeArguments'
            ) {
                const child = path.node.implements[0];
                if (child.expression.name === 'Msg') {
                    path.node.body.body.map(element => {
                        if (element.type === 'ClassMethod') {
                            const reqParam = element.params.find(param => param.type === 'Identifier' && param.name === 'request');
                            if (reqParam) {
                                const name = reqParam?.typeAnnotation?.typeAnnotation?.typeName?.name;
                                fileParser.mutations.push({
                                    typeUrl: `/${fileParser.protoPackage}.${name}`,
                                    TypeName: name,
                                    methodName: camel(name.replace(/^Msg/, ''))
                                });
                            }
                        }
                    });
                }
            }
        }
    },

    VariableDeclarator(path) {
        const name = path.node.id?.name;
        const value = path.node.init?.value;
        if (name === 'protobufPackage') {
            fileParser.setPackage(value);
        }
    },


    ImportDeclaration(path) {
        fileParser.addGenericImport(
            path.node
        );
        const node = path.node;
        const dep = node.source.value;
        const specifiers = node.specifiers || [];
        specifiers.forEach((spec) => {
            switch (spec.type) {
                case 'ImportDefaultSpecifier':
                    fileParser.addImport({
                        dep,
                        filename,
                        import: 'default',
                        type: spec.type,
                        node: path.node
                    });
                    break;
                case 'ImportNamespaceSpecifier':
                case 'ImportSpecifier':
                    fileParser.addImport({
                        dep,
                        filename,
                        import: spec.local.name,
                        type: spec.type,
                        node: path.node
                    });
                    break;
                default:
                    break;
            }
        });
    },

    CallExpression(path) {
        const node = path.node;
        if (isRequire(node)) {
            const value = node.arguments[0].value;
            fileParser.addImport({ dep: value, filename, require: true, node: path.node });
        }
    }
});

export { registerDeps };
