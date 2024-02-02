import { ProtoDep } from '@subql/x-cosmology-types';

function depResolve(deps: ProtoDep[], protofile: string, resolved: string[], unresolved: string[]) {
    unresolved.push(protofile);

    let dep = deps.find(dep => dep.filename === protofile);
    if (!dep) {
        throw new Error(`Dependency Not Found ${protofile}`)
    }
    let imports = dep.imports ?? [];
    for (let i = 0; i < imports.length; i++) {
        const dep = imports[i];
        if (!resolved.includes(dep)) {
            if (unresolved.includes(dep)) {
                throw new Error(`Circular reference detected ${protofile}, ${dep}`);
            }
            depResolve(deps, dep, resolved, unresolved);
        }
    }
    resolved.push(protofile);
    const index = unresolved.indexOf(protofile);
    unresolved.splice(index);
}

export class ProtoResolver {
    deps: ProtoDep[];
    constructor(deps) {
        this.deps = deps;
    }
    resolve(proto) {
        const resolved = [];
        const unresolved = [];
        depResolve(this.deps, proto, resolved, unresolved);
        return resolved;
    }

    resolveAll() {
        const resolved = [];
        const unresolved = [];


        const allFiles = this.deps.map(({ filename }) => filename)
        const imports = [...new Set(allFiles)];

        const deps: ProtoDep[] = [
            ...this.deps,
            {
                package: '_root',
                filename: '_root',
                imports,
            }
        ];
        depResolve(deps, '_root', resolved, unresolved);
        resolved.pop(); // pull _root off
        return resolved;
    }
}

