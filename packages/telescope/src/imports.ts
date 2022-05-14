import * as t from '@babel/types';
import { importStmt, } from '@osmonauts/ast';
import { extname, relative, dirname } from 'path';
import { ImportHash, ImportObj, ServiceMutation } from './types';
import { UTILS, getRelativePath } from './utils';
import { TelescopeParseContext } from './build';

const importHashToArray = (hash: ImportHash): ImportObj[] => {
    return Object.entries(hash ?? {})
        .reduce((m, [path, names]) => {
            names.forEach(name => {
                m.push({
                    type: 'import',
                    name,
                    path
                })
            })
            return m;
        }, [])
};

const getProtoImports = (
    context: TelescopeParseContext,
    filename: string
): ImportObj[] => {
    return context.proto.imports
        .map(usage => {
            if (filename === usage.import) return;
            const importPath = getRelativePath(filename, usage.import);
            return {
                type: 'import',
                name: usage.name,
                importAs: usage.importedAs,
                path: importPath
            }
        })
        .filter(Boolean);
};

const getAminoImports = (
    context: TelescopeParseContext,
    filename: string
): ImportObj[] => {
    return context.amino.imports
        .map(usage => {
            if (filename === usage.import) return;
            const importPath = getRelativePath(filename, usage.import);
            return {
                type: 'import',
                name: usage.name,
                importAs: usage.importedAs,
                path: importPath
            }
        })
        .filter(Boolean);
};

const getParsedImports = (
    context: TelescopeParseContext,
    parsedImports: ImportHash,
    filename: string
): ImportObj[] => {
    const imports = [];
    Object.entries(parsedImports ?? {})
        .forEach(([path, names]) => {
            if (filename === path) return;
            const importPath = getRelativePath(filename, path);
            const aliases = context.ref?.traversed?.importNames?.[path];
            names.forEach(name => {
                let importAs = name;
                if (aliases && aliases[name]) {
                    importAs = aliases[name]
                }
                imports.push({
                    type: 'import',
                    name,
                    importAs,
                    path: importPath
                })
            });
        });
    return imports;
};

const importAs = (name: string, importAs: string, importPath: string) => {
    return t.importDeclaration(
        [
            t.importSpecifier(
                t.identifier(importAs),
                t.identifier(name)
            )
        ],
        t.stringLiteral(importPath)
    )
}

const getImportStatments = (list: ImportObj[]) => {
    const imports = list.reduce((m, obj) => {
        m[obj.path] = m[obj.path] || [];
        const exists = m[obj.path].find(el => el.type === obj.type && el.path === obj.path && el.name === obj.name);
        if (!exists) m[obj.path].push(obj);
        return m;
    }, {});

    return Object.entries(imports)
        .reduce((m, [importPath, imports]: [string, ImportObj[]]) => {
            const defaultImports = imports.filter(a => a.type === 'default');
            if (defaultImports.length) {
                if (defaultImports.length > 1) throw new Error('more than one default name NOT allowed.')
                m.push(
                    t.importDeclaration(
                        [
                            t.importDefaultSpecifier(
                                t.identifier(defaultImports[0].name)
                            )
                        ],
                        t.stringLiteral(defaultImports[0].path)
                    )
                )
            }
            const namedImports = imports.filter(a => a.type === 'import' && (!a.importAs || (a.name === a.importAs)));
            if (namedImports.length) {
                m.push(importStmt(namedImports.map(i => i.name), namedImports[0].path));
            }
            const aliasNamedImports = imports.filter(a => a.type === 'import' && (a.importAs && (a.name !== a.importAs)));
            aliasNamedImports.forEach(imp => {
                m.push(importAs(imp.name, imp.importAs, imp.path));
            });

            const namespaced = imports.filter(a => a.type === 'namespace');
            if (namespaced.length) {
                if (namespaced.length > 1) throw new Error('more than one namespaced name NOT allowed.')
                m.push(
                    t.importDeclaration(
                        [
                            t.importNamespaceSpecifier(
                                t.identifier(namespaced[0].name)
                            )
                        ],
                        t.stringLiteral(namespaced[0].path)
                    )
                )
            }
            return m;
        }, [])
};

const convertUtilsToImports = (context: TelescopeParseContext): ImportObj[] => {
    const list = [];
    const utils = Object.keys({
        ...context.amino.utils,
        ...context.proto.utils
    });

    utils.forEach(util => {
        if (!UTILS.hasOwnProperty(util)) throw new Error('missing Util! ::' + util);
        if (typeof UTILS[util] === 'string') {
            list.push({
                type: 'import',
                path: UTILS[util],
                name: util
            });
        } else {
            list.push(UTILS[util]);
        }
    });
    return list;
};

export const buildAllImports = (context: TelescopeParseContext, allImports: ImportHash, filepath: string) => {

    const protoImports: ImportObj[] = getProtoImports(context, filepath);
    const aminoImports: ImportObj[] = getAminoImports(context, filepath);
    const parsedImports: ImportObj[] = getParsedImports(context, context.amino.ref.traversed.parsedImports, filepath);
    const additionalImports: ImportObj[] = importHashToArray(allImports);
    const utilities: ImportObj[] = convertUtilsToImports(context);

    const list = []
        .concat(parsedImports)
        .concat(utilities)
        .concat(protoImports)
        .concat(aminoImports)
        .concat(additionalImports);

    const importStmts = getImportStatments(list);

    return importStmts;
}


export const getAminoImportsFromMutations = (mutations: ServiceMutation[]) => {
    return mutations.map(mutation => {
        return {
            import: mutation.messageImport,
            name: mutation.message
        };
    });
};

export const getServiceDependencies = (
    mutations: ServiceMutation[],
    filename: string
) => {
    return getAminoImportsFromMutations(mutations)
        .map(imp => {
            const f = filename;
            const f2 = imp.import;
            if (f === f2) return;
            const rel = relative(dirname(f), f2);
            let importPath = rel.replace(extname(rel), '');
            if (!/\//.test(importPath)) importPath = `./${importPath}`;
            return {
                ...imp,
                importPath
            };
        })
        .filter(Boolean)
        .reduce((m, v) => {
            m[v.importPath] = m[v.importPath] ?? [];
            if (!m[v.importPath].includes(v.name)) {
                m[v.importPath].push(v.name);
            }
            return m;
        }, {});
};
