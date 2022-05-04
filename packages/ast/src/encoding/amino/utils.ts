import * as t from '@babel/types';
import { kebab } from "case";
import { ProtoType, ProtoAny, ProtoField } from '../types';
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

export const getTypeFromContext = (field: ProtoField, context: AminoParseContext) => {
    // TODO can we move this out somewhere else?
    // NOTE this is the only place in ast codebase that uses store...
    let lookup;
    if (context.current) {
        // if we're recursing, use the current
        lookup = context.store.get(context.current, field.parsedType.name);
    }
    if (!lookup) {
        // also check the context ref
        lookup = context.store.get(context.ref, field.parsedType.name);
    }
    if (!lookup) {
        // try the Ref by looking inside of the file that the field was imported from
        const innerRef = context.store.findProto(field.import)
        lookup = context.store.get(innerRef, field.parsedType.name);
        if (lookup) {
            // TODO test super-nested types imported from other .proto files
            // and use this innerRef in recursion
            context.current = innerRef;
        }
        if (!lookup) {
            throw new Error('Undefined Symbol: ' + field.parsedType.name);
        }
    }

    return lookup.obj;
};