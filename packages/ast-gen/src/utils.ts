import * as t from '@babel/types';
import { kebab, snake } from "case";
import { Field } from './types';

const BILLION = t.numericLiteral(1_000_000_000);
BILLION.extra = { raw: "1_000_000_000", rawValue: 1000000000 };
export { BILLION };

export const recursiveNamespace = (names, moduleBlockBody) => {
    if (!names || !names.length) return moduleBlockBody;
    const name = names.pop();
    const body = [
        t.exportNamedDeclaration(
            t.tsModuleDeclaration(
                t.identifier(name),
                t.tsModuleBlock(recursiveNamespace(names, moduleBlockBody))
            )
        )
    ];
    return body;
};

export const arrayTypeNDimensions = (body, n) => {
    if (!n) return t.tsArrayType(body);
    return t.tsArrayType(
        arrayTypeNDimensions(body, n - 1)
    );
};

export const FieldTypeAsts = {
    string: () => {
        return t.tsStringKeyword()
    },
    array: (type) => {
        return t.tsArrayType(FieldTypeAsts[type]())
    },
    Duration: () => {
        return t.tsTypeReference(t.identifier('Duration'))
    },
    Height: () => {
        return t.tsTypeReference(t.identifier('Height'))
    },
    Coin: () => {
        return t.tsTypeReference(t.identifier('Coin'))
    },
    Long: () => {
        return t.tsTypeReference(t.identifier('Long'))
    }
};

export const typeUrlToAmino = (str, MsgName) => {
    const name = str.replace(/^\//, '');
    const elements = name.split('.');
    const pkg = elements[0];
    switch (pkg) {
        case 'cosmos':
        case 'ibc':
            return `cosmos-sdk/${MsgName}`;
        case 'osmosis': {
            const n = elements.filter(a => !a.match(/v1beta1/));
            n[n.length - 1] = kebab(n[n.length - 1]);
            return n.join('/');
        } default:
            return str;
    }
}

export const shorthandProperty = (prop: string) => {
    return t.objectProperty(t.identifier(prop), t.identifier(prop), false, true);
};

export const importStmt = (names: string[], path: string) => {
    return t.importDeclaration(
        names.map(name => t.importSpecifier(t.identifier(name), t.identifier(name))),
        t.stringLiteral(path));
};

export const importAminoMsg = () => {
    return importStmt(['AminoMsg'], '@cosmjs/amino');
};

export const getFieldDimensionality = (field: Field) => {
    let typeName = field.type;
    const isArray = typeName.endsWith('[]');
    let dimensions = 0;
    if (isArray) {
        dimensions = typeName.match(/\[\]/g).length - 1;
        typeName = typeName.replace(/\[\]/g, '');
    }
    return {
        typeName,
        dimensions,
        isArray
    };
}

export const memberExpressionOrIdentifier = (names) => {
    if (names.length === 1) {
        return t.identifier(names[0])
    }
    if (names.length === 2) {
        const [b, a] = names;
        return t.memberExpression(
            t.identifier(a),
            t.identifier(b)
        );
    }
    const [name, ...rest] = names;

    return t.memberExpression(
        memberExpressionOrIdentifier(rest),
        t.identifier(name)
    )
};

export const memberExpressionOrIdentifierSnake = (names) => {
    if (names.length === 1) {
        return t.identifier(snake(names[0]))
    }
    if (names.length === 2) {
        const [b, a] = names;
        return t.memberExpression(
            t.identifier(snake(a)),
            t.identifier(snake(b))
        );
    }
    const [name, ...rest] = names;

    return t.memberExpression(
        memberExpressionOrIdentifierSnake(rest),
        t.identifier(snake(name))
    )
};
