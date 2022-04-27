import { sync as glob } from 'glob';
import { parse } from 'protobufjs';
import { readFileSync } from 'fs';
import { join, resolve as pathResolve } from 'path';
import { ProtoDep, ProtoRef } from './types';
import { getNestedProto } from './utils';

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
                pkg: '_root',
                filename: '_root',
                imports,
            }
        ];
        depResolve(deps, '_root', resolved, unresolved);
        resolved.pop(); // pull _root off
        return resolved;
    }
}

export class ProtoStore {
    files: string[];
    protoDir: string;
    deps: ProtoDep[];
    protos: any[];

    constructor(protoDir) {
        this.protoDir = pathResolve(protoDir);
    }

    findProto(filename): ProtoRef {
        return this.getProtos().find(proto => {
            return proto.filename === filename
        });
    }

    findProtoObject(filename, name): any {
        const proto = this.findProto(filename);
        return getNestedProto(proto.proto)[name];
    }

    getProtos(): ProtoRef[] {
        if (this.protos) return this.protos;
        const protoSplat = join(this.protoDir, '/**/*.proto');
        const protoFiles = glob(protoSplat);
        const contents = protoFiles.map(filename => ({
            absolute: filename,
            filename: filename.split(this.protoDir)[1].replace(/^\//, ''),
            content: readFileSync(filename, 'utf-8')
        }))
        const protos = contents.map(({ absolute, filename, content }) => {
            return {
                proto: parse(content, {
                    keepCase: false,
                    alternateCommentMode: true,
                    preferTrailingComment: false
                }), absolute, filename
            };
        });
        this.protos = protos;
        return protos;
    }

    getDeps(): ProtoDep[] {
        if (this.deps) return this.deps;
        const deps = this.getProtos().map(el => {
            const {
                filename,
                proto: {
                    package: pkg,
                    imports
                }
            } = el;
            return {
                filename,
                pkg,
                imports
            }
        });
        this.deps = deps;
        return deps;
    }

}
