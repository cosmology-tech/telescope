import { parse, Service, Type, Enum } from 'protobufjs';
import dotty from 'dotty';

import { ProtoDep, ProtoRef, ProtoRoot } from './types';

export const getNestedProto = (root: ProtoRoot) => {
    const nestedPath = 'root.nested.' + root.package.split('.').join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

export const getServices = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key]
    }).filter(obj => {
        return obj instanceof Service;
    }).map(service => {
        return {
            name: service.name,
            ...service.toJSON({ keepComments: true })
        }
    });
};

export const getTypes = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key]
    }).filter(obj => {
        return obj instanceof Type;
    }).map(type => {
        return type.toJSON({ keepComments: true });
    });
};

export const getEnums = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key]
    }).filter(obj => {
        return obj instanceof Enum;
    }).map(el => {
        return el.toJSON({ keepComments: true });
    });
};

