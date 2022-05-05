import * as t from '@babel/types';
import { kebab } from "case";
import { ProtoType, ProtoAny, ProtoField } from '../proto/types';
import { ProtoRoot } from '@osmonauts/proto-parser'
import { AminoParseContext, DEFAULT_AMINO_EXCEPTIONS } from './types';

export const getTypeUrl = (root: ProtoRoot, proto: ProtoAny | ProtoType) => {
    return `/${root.package}.${proto.name}`;
}

export const arrayTypeNDim = (body, n) => {
    if (!n || n <= 1) return t.tsArrayType(body);
    return t.tsArrayType(
        arrayTypeNDim(body, n - 1)
    );
};

export const typeUrlToAmino = (typeUrl, exceptions = {}) => {
    const exceptionsToCheck = {
        ...exceptions,
        ...DEFAULT_AMINO_EXCEPTIONS
    }
    const exceptionAminoName = exceptionsToCheck?.[typeUrl]?.aminoType;
    if (exceptionAminoName) return exceptionAminoName;

    const name = typeUrl.replace(/^\//, '');
    const elements = name.split('.');
    const pkg = elements[0];
    switch (pkg) {
        case 'cosmos':
        case 'ibc':
            return `cosmos-sdk/${elements[elements.length - 1]}`;
        case 'osmosis': {
            const n = elements.filter(a => !a.match(/v1beta1/));
            n[n.length - 1] = kebab(n[n.length - 1]);
            n[n.length - 1] = n[n.length - 1].replace(/^msg-/, '');
            return n.join('/');
        } default:
            return typeUrl;
    }
}

export const protoFieldsToArray = (proto: ProtoType) => {
    return Object.keys(proto.fields).map(name => {
        return {
            name,
            ...proto.fields[name]
        };
    })
}


export const getTypeFromFieldViaImport = (field: ProtoField, context: AminoParseContext, importPath: string) => {
    const innerRef = context.store.findProto(importPath);
    if (innerRef) {
        const lookup = context.store.get(innerRef, field.parsedType.name);
        if (lookup) {
            // TODO test super-nested types imported from other .proto files
            // and use this innerRef in recursion
            context.current = innerRef;
            return lookup;
        }
    }
};

export const getTypeFromNestedContext = (field: ProtoField, context: AminoParseContext) => {
    const imports = context.ref.proto.imports ?? [];
    if (!imports.length) return;

    for (let i = 0; i < imports.length; i++) {
        const imp = imports[i];
        const lookup = getTypeFromFieldViaImport(field, context, imp);
        if (lookup) {
            return lookup;
        }
    }
};

export const getTypeFromContext = (field: ProtoField, context: AminoParseContext) => {
    // TODO can we move this out somewhere else?
    // NOTE this is the only place in ast codebase that uses store...
    let lookup;
    if (context.current) {
        // if we're recursing, use the current
        lookup = context.store.get(context.current, field.parsedType.name);
    }
    if (!lookup) {
        lookup = context.store.get(context.ref, field.parsedType.name);
    }
    if (!lookup) {
        if (field.import) {
            lookup = getTypeFromFieldViaImport(field, context, field.import);
        } else {
            lookup = getTypeFromNestedContext(field, context);
        }
        if (!lookup) {
            throw new Error('Undefined Symbol: ' + field.parsedType.name);
        }
    }

    return lookup.obj;
};