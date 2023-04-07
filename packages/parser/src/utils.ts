import dotty from 'dotty';
import { Service, Type, Enum, Root, Namespace } from '@pyramation/protobufjs';
import { InterfaceTypeUrlMap, ProtoRef, ProtoRoot, ProtoType } from '@osmonauts/types';
import { ProtoStore } from './store';
import { GenericParseContext, getTypeUrl, getAminoTypeName, getPluginValue } from '@osmonauts/ast';
import minimatch from 'minimatch';

export const getNestedProto = (root: ProtoRoot) => {
    const nestedPath = 'root.nested.' + root.package.split('.').join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

export const getNestedProtoGeneric = (root: ProtoRoot, path: string[]) => {
    path = root.package.split('.').concat(path);
    const nestedPath = 'root.nested.' + path.join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

export const getNested = (root: ProtoRoot, path: string[]) => {
    const nestedPath = 'root.nested.' + path.join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

// https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.cc#L3798-L3812
// NOTE: sometimes you need to pass in `.Dummy` for the first call,
// for example, osmosis.gamm.v1beta1.Dummy, so the first pop()
// that gets called, it will still look relative to the current module scope
export const lookupSymbolScopes = (name: string, relativeTo: string, list?: string[]) => {
    // fully-qualified name
    if (name.startsWith('.')) return [name.replace(/^\./, '')];

    if (!list) list = [];
    const relativeToParts = relativeTo.split('.');
    // This first searches siblings of relative_to (pop off relative_to)
    relativeToParts.pop();
    const newName = [...relativeToParts, ...name.split('.')].join('.');
    if (newName === name) return [...list, name];
    return lookupSymbolScopes(name, relativeToParts.join('.'), [...list, newName]);
};

export const createTypeUrlTypeMap = (
    store: ProtoStore,
    fromRef: ProtoRef // ref to create HashMap for (includes proper import names)
): InterfaceTypeUrlMap => {
    const ctx = new GenericParseContext(fromRef, store, store.options);
    const result = {};
    const interfaces = [];
    Object.keys(fromRef.traversed?.acceptsInterface ?? {}).forEach(implementsType => {
        interfaces.push(implementsType);
    });

    store.getProtos().forEach(ref => {
        if (
            ref.traversed?.implementsInterface
        ) {
            Object.keys(ref.traversed.implementsInterface).forEach(implementsType => {
                if (!interfaces.includes(implementsType)) return;
                const types = ref.traversed?.implementsInterface[implementsType];
                result[implementsType] = result[implementsType] || [];
                result[implementsType].push({
                    ref: ref.filename,
                    pkg: ref.proto.package,
                    types: types?.map(type => {
                        const protoType: ProtoType = getNestedProto(ref.proto)[type];
                        const typeUrl = getTypeUrl(ref.proto, protoType);
                        const aminoType = getAminoTypeName(ctx, ref.proto, protoType);
                        return {
                            typeUrl,
                            aminoType,
                            type,
                            importAs: ctx.getTypeNameFromFieldName(
                                type, ref.filename
                            )
                        }
                    })
                });
            });
        }
    });
    return result;
};

// https://github.com/isaacs/minimatch/blob/main/src/index.ts#L61
// Optimized checking for the most common glob patterns.
const globPattern = /\*+([^+@!?\*\[\(]*)/;


/**
 * test if a proto ref is included by the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param exclude patterns(will be deprecated soon), packages, proto files to include
 * @returns
 */
export const isRefIncluded = (
    ref: ProtoRef,
    include?: {
        patterns?: string[];
        packages?: string[];
        protos?: string[];
    }
) => {
    // if no include object, no filter
    if (!include) return true;
    // if no arrays are populated, no filter
    if (
        !include.patterns?.length &&
        !include.packages?.length &&
        !include.protos?.length
    ) {
        return true;
    }

    // TODO consider deprecating `patterns` in favor of packages and protos supporting minimatch
    if (include?.patterns?.some(pattern => minimatch(ref.filename, pattern))) {
        return true;
    }

    const pkgMatched = include?.packages?.some(pkgName => {
        if (!globPattern.test(pkgName)) {
            return ref.proto.package === pkgName;
        }
        return minimatch(ref.proto.package, pkgName)
    });

    if (pkgMatched) {
        return true;
    }

    const protoMatched = include?.protos?.some(protoName => {
        if (!globPattern.test(protoName)) {
            return ref.filename === protoName;
        }
        return minimatch(ref.filename, protoName)
    });

    if (protoMatched) {
        return true;
    }

    return false;

};

/**
 * test if a proto ref is excluded from the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param exclude patterns(will be deprecated soon), packages, proto files to exclude
 * @returns
 */
export const isRefExcluded = (
  ref: ProtoRef,
  exclude?: {
      patterns?: string[];
      packages?: string[];
      protos?: string[];
  }
) => {
  return !isRefIncluded(ref, exclude);
};

export const getPackageAndNestedFromStr = (type: string, pkg: string) => {
    if (type.startsWith(pkg) && type.length > pkg.length) {
        const nested = type.substring(pkg.length + 1);
        return {
            nested,
            package: pkg
        };
    }
};

export const getServices = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Service;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

export const getTypes = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Type;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

export const getEnums = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Enum;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

/*
    nested objects get a slightly different naming convention
    e.g. SignatureDescriptor_Data or SignatureDescriptor_Data_Multi
*/

export const getObjectName = (name: string, scope: string[] = []) => {
    if (!scope.length || scope.length === 1) return name;
    const [_pkg, ...scopes] = scope;
    return [...scopes, name].join('_')
};

export const SCALAR_TYPES = [
    "double",   // 0
    "float",    // 1
    "int32",    // 2
    "uint32",   // 3
    "sint32",   // 4
    "fixed32",  // 5
    "sfixed32", // 6
    "int64",    // 7
    "uint64",   // 8
    "sint64",   // 9
    "fixed64",  // 10
    "sfixed64", // 11
    "bool",     // 12
    "string",   // 13
    "bytes"     // 14
];

export const instanceType = (obj: any) => {
    if (obj instanceof Type) {
        return {
            name: obj.name,
            type: 'Type'
        };
    }
    if (obj instanceof Enum) {
        return {
            name: obj.name,
            type: 'Enum'
        };
    }
    if (obj instanceof Service) {
        return {
            name: obj.name,
            type: 'Service'
        };
    }
    if (obj instanceof Root) {
        return {
            type: 'Root'
        };
    }
    if (obj instanceof Namespace) {
        return {
            type: 'Namespace'
        };
    }
    // if (obj.name === 'Timestamp') {
    //     return {
    //         name: obj.name,
    //         type: 'google'
    //     };
    // }
    // if (obj.name === 'Duration') {
    //     return {
    //         name: obj.name,
    //         type: 'google'
    //     };
    // }
    if (obj.name.match(/^[a-z]/)) {
        throw new Error('instanceType() cannot find protobufjs Type')
    }
    // duck typing...
    // TODO why did we lose instance types/names?
    if (obj.fields) {
        return {
            name: obj.name,
            type: 'Type'
        };
    }
    if (obj.values) {
        return {
            name: obj.name,
            type: 'Enum'
        };
    }
    throw new Error('instanceType() cannot find protobufjs Type')
};

/**
 * get a protoref instance for scope check by package.
 * @param pkg package used to do the scope check.
 * @returns
 */
export const createEmptyProtoRef = (pkg?: string, filename?: string): ProtoRef => {
  return {
    absolute: '',
    filename: filename,
    proto: {
        package: pkg,
        imports: null,
        root: {},
        importNames: null
    },
    traversed: {
        package: pkg,
        imports: null,
        root: {},
        importNames: null,
        acceptsInterface: {},
        implementsInterface: {},
        parsedExports: {},
        parsedImports: {},
        symbols: null
    }
}
};