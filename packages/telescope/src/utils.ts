import { join, relative, dirname, extname, basename } from 'path';
import * as t from '@babel/types';
import * as ast from '@osmonauts/ast-gen'
import dotty from 'dotty';
import { pascal } from 'case';

export const recursiveModuleBundle = (obj) => {
    return Object.keys(obj).map(key => {
        if (obj[key]?.__export) {
            // e.g. abci
            // 1. create variable for abci
            // 2. splat ALL _0, parms into abci
            // 3. export that variable

            const nmspc = t.variableDeclaration('const',
                [t.variableDeclarator(
                    t.identifier(key),
                    t.objectExpression(
                        Object.keys(obj[key])
                            .filter(a => a !== '__export')
                            .filter(a => a.startsWith('_'))
                            .map(a => t.spreadElement(t.identifier(a)))
                    )
                )]
            );

            const others = Object.keys(obj[key])
                .filter(a => a !== '__export')
                .filter(a => !a.startsWith('_'));
            if (others.length) {
                throw new Error('namespace and package not supported, yet.')
            }

            // return nmspc;
            return t.exportNamedDeclaration(nmspc, []);



        } else {
            // you can make a namespace for obj[key]
            // e.g. libs
            return t.exportNamedDeclaration(
                t.tsModuleDeclaration(
                    t.identifier(key),
                    t.tsModuleBlock(recursiveModuleBundle(obj[key]))
                )
            )
        }
    });
};

export const importNamespace = (ident: string, path: string) => t.importDeclaration(
    [
        t.importNamespaceSpecifier(t.identifier(ident))
    ],
    t.stringLiteral(path.replace(extname(path), ''))
);

let counter = 0;
const createFileBundle = (obj, filename, bundleFile, importPaths, bundleVariables) => {
    let rel = relative(dirname(bundleFile), filename);
    if (!rel.startsWith('.')) rel = `./${rel}`;
    const variable = `_${counter++}`;
    importPaths.push(importNamespace(variable, rel));
    dotty.put(bundleVariables, obj.pkg + '.__export', true);
    dotty.put(bundleVariables, obj.pkg + '.' + variable, true);
}

export const buildClients = (obj) => {
    return Object.keys(obj).map(pkg => {
        const name = 'get' + pascal(pkg + 'SigningClient');
        const { registries, aminos } = obj[pkg];
        return ast.createClient({
            name,
            registries,
            aminos
        })
    })

}

export const parsePackage = (obj, bundleFile, importPaths, bundleVariables) => {
    if (!obj) return;
    if (obj.pkg && obj.files) {
        obj.files.forEach(file => {
            createFileBundle(obj, file.filename, bundleFile, importPaths, bundleVariables);
            // TODO better namespacing for aminos/messages/encoding:
            file.outFiles.forEach(outFile =>
                createFileBundle(obj, outFile.filename, bundleFile, importPaths, bundleVariables)
            );
        });
        return;
    }
    Object.keys(obj).forEach(mini => {
        parsePackage(obj[mini], bundleFile, importPaths, bundleVariables);
    })
}

export const parsePackageCreateClient = ({ obj, bundleFilePath, clientFilePath, importPaths, bundleVariables, level = 0 }) => {
    if (!obj) return;
    if (obj.pkg && obj.files) {
        const matched = obj.files.filter(file => file.mutations.length);
        if (matched.length) {
            const value = dotty.get(bundleVariables, obj.pkg.split('.')[0] + '.include') ?? [];
            const newvalue = [...value, obj.pkg];
            dotty.put(bundleVariables, obj.pkg.split('.')[0] + '.include', newvalue);
        }
        obj.files.forEach(file => {
            file.outFiles.forEach(outFile => {
                if (/registry.ts$/.test(outFile.filename)) {
                    let rel = relative(dirname(clientFilePath), outFile.filename);
                    if (!rel.startsWith('.')) rel = `./${rel}`;
                    const variable = `_${counter++}`;
                    importPaths.push(importNamespace(variable, rel));
                    const value = dotty.get(bundleVariables, obj.pkg.split('.')[0] + '.registries') ?? [];
                    const newvalue = [...value, variable];
                    dotty.put(bundleVariables, obj.pkg.split('.')[0] + '.registries', newvalue);
                }
                if (/aminos.ts$/.test(outFile.filename)) {
                    let rel = relative(dirname(clientFilePath), outFile.filename);
                    if (!rel.startsWith('.')) rel = `./${rel}`;
                    const variable = `_${counter++}`;
                    importPaths.push(importNamespace(variable, rel));
                    const value = dotty.get(bundleVariables, obj.pkg.split('.')[0] + '.aminos') ?? [];
                    const newvalue = [...value, variable];
                    dotty.put(bundleVariables, obj.pkg.split('.')[0] + '.aminos', newvalue);
                }
            });
        });
        return;
    }
    Object.keys(obj).forEach(mini => {
        parsePackageCreateClient({ obj: obj[mini], bundleFilePath, clientFilePath, importPaths, bundleVariables, level: level + 1 });
    })
}

