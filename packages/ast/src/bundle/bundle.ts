import { extname } from 'path';
import * as t from '@babel/types';
import { TelescopeOptions } from '@cosmology/types';

export const recursiveModuleBundle = (
    options: TelescopeOptions,
    obj
) => {
    return Object.keys(obj).map(key => {
        if (obj[key]?.__export) {
            // get exported parts inside the package.
            const properties: (t.SpreadElement | t.ObjectProperty | t.ObjectMethod)[] = Object.keys(obj[key])
                .filter(a => a !== '__export')
                .filter(a => a.startsWith('_'))
                .map(a => t.spreadElement(t.identifier(a)));

            // see if there's recursive package inside.
            const others = Object.keys(obj[key])
                .filter(a => a !== '__export')
                .filter(a => !a.startsWith('_')).map(otherKey => ({ key: otherKey, value: obj[key][otherKey] }));

            if (others.length) {
                // export recursive package through object properties
                properties.push(...recursiveOtherNameSpaces(others))
            }

            const nmspc = t.variableDeclaration('const',
                [t.variableDeclarator(
                    t.identifier(key),
                    t.objectExpression(properties)
                )]
            );

            // return nmspc;
            return t.exportNamedDeclaration(nmspc, []);
        } else {
            // you can make a namespace for obj[key]
            // e.g. libs
            return t.exportNamedDeclaration(
                t.tsModuleDeclaration(
                    t.identifier(key),
                    t.tsModuleBlock(recursiveModuleBundle(options, obj[key]))
                )
            )
        }
    });
};

export const recursiveOtherNameSpaces = (
    objs
): t.ObjectProperty[] => {
    return objs.map(obj => {
        const properties: (t.SpreadElement | t.ObjectProperty | t.ObjectMethod)[] = Object.keys(obj.value)
            .filter(a => a !== '__export')
            .filter(a => a.startsWith('_'))
            .map(a => t.spreadElement(t.identifier(a)));

        const others = Object.keys(obj.value)
            .filter(a => a !== '__export')
            .filter(a => !a.startsWith('_')).map(otherKey => ({ key: otherKey, value: obj.value[otherKey] }));

        if (others.length) {
            properties.push(...recursiveOtherNameSpaces(others))
        }

        return t.objectProperty(t.identifier(obj.key), t.objectExpression(properties))
    })
};

export const importNamespace = (ident: string, path: string) => t.importDeclaration(
    [
        t.importNamespaceSpecifier(t.identifier(ident))
    ],
    t.stringLiteral(path.replace(extname(path), ''))
);