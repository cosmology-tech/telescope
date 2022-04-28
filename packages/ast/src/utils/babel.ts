import * as t from '@babel/types';

export const tsPropertySignature = (
    key: t.Expression,
    typeAnnotation: t.TSTypeAnnotation,
    optional: boolean
) => {
    const obj = t.tsPropertySignature(key, typeAnnotation);
    obj.optional = optional;
    return obj
};

export const callExpression = (
    callee: t.Expression | t.V8IntrinsicIdentifier,
    _arguments: (t.Expression | t.SpreadElement | t.ArgumentPlaceholder)[],
    typeParameters: t.TSTypeParameterInstantiation
) => {
    const callExpr = t.callExpression(callee, _arguments);
    callExpr.typeParameters = typeParameters;
    return callExpr;
};


export const identifier = (name: string, typeAnnotation: t.TSTypeAnnotation, optional: boolean = false) => {
    const type = t.identifier(name);
    type.typeAnnotation = typeAnnotation;
    type.optional = optional;
    return type;
}

export const classDeclaration = (name: string, body: any[], implementsExressions: t.TSExpressionWithTypeArguments[] = [], superClass: t.Identifier = null) => {
    const declaration = t.classDeclaration(
        t.identifier(name),
        superClass,
        t.classBody(body)
    );
    if (implementsExressions.length) {
        declaration.implements = implementsExressions;
    }
    return declaration;
};

export const classProperty = (name: string, typeAnnotation: t.TSTypeAnnotation = null, isReadonly: boolean = false, isStatic: boolean = false) => {
    const prop = t.classProperty(t.identifier(name));
    if (isReadonly) prop.readonly = true;
    if (isStatic) prop.static = true;
    if (typeAnnotation) prop.typeAnnotation = typeAnnotation;
    return prop;
};

export const arrowFunctionExpression = (
    params: (t.Identifier | t.Pattern | t.RestElement)[],
    body: t.BlockStatement,
    returnType: t.TSTypeAnnotation,
    isAsync: boolean = false
) => {
    const func = t.arrowFunctionExpression(params, body, isAsync);
    if (returnType) func.returnType = returnType;
    return func;
};

export const objectPattern = (
    properties: (t.RestElement | t.ObjectProperty)[],
    typeAnnotation: t.TSTypeAnnotation
) => {
    const obj = t.objectPattern(properties);
    obj.typeAnnotation = typeAnnotation;
    return obj;
}

