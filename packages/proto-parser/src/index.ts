import { sync as glob } from 'glob';
import { parse, Service } from 'protobufjs';
import { readFileSync } from 'fs';
import { join, resolve as pathResolve } from 'path';
import dotty from 'dotty';

export interface ProtoDep {
    filename: string;
    pkg: string;
    imports: string[]
}

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

export class ProtoGlobber {
    files: string[];
    protoDir: string;
    deps: ProtoDep[];
    protos: any[];

    constructor(protoDir) {
        this.protoDir = pathResolve(protoDir);
    }

    findProto(filename) {
        return this.getProtos().find(proto => {
            return proto.filename === filename
        });
    }

    getProtoNested(filename) {
        const coinProto = this.findProto(filename);
        const nestedPath = 'root.nested.' + coinProto.proto.package.split('.').join('.nested.') + '.nested';
        return dotty.get(coinProto.proto, nestedPath)
    }

    getProtoNestedObject(filename, objname) {
        const children = this.getProtoNested(filename);
        return children[objname];
    }

    listProtoObjects(filename) {
        const nested = this.getProtoNested(filename);
        return Object.keys(nested);
    }

    listServicesObjects(filename) {
        const nested = this.getProtoNested(filename);
        return Object.keys(nested).map(key => {
            return nested[key]
        }).filter(obj => {
            return obj instanceof Service;
        })
    }

    listServices(filename) {
        const services = this.listServicesObjects(filename);
        return services.map(svc => {
            return {
                name: svc.name,
                methods: Object.keys(svc.methods).map(k => {
                    const method = svc.methods[k];
                    return {
                        name: k,
                        options: method.options,
                        type: method.type,
                        resolved: method.resolved,
                        comment: method.comment,
                        filename: method.filename,
                        requestType: method.requestType,
                        requestStream: method.requestStream,
                        responseType: method.responseType,
                        responseStream: method.responseStream,
                        resolvedRequestType: method.resolvedRequestType,
                        resolvedResponseType: method.resolvedResponseType,
                    }
                })
            }
        })
    }

    getProtoNestedObjectSchema(filename, objname) {
        const obj = this.getProtoNestedObject(filename, objname);
        if (!obj) throw new Error(`cannot find ${objname}`);
        if (!obj.fields) throw new Error(`cannot find ${objname} fields.`);
        const fields = Object.keys(obj.fields).map(key => {
            const field = obj.fields[key];
            return {
                name: field.name,
                type: field.type,
                required: field.required,
                optional: field.optional,
                repeated: field.repeated,
                map: field.map,
                partOf: field.partOf,
                typeDefault: field.typeDefault,
                defaultValue: field.defaultValue,
                long: field.long,
                bytes: field.bytes,
                resolvedType: field.resolvedType,
                extensionField: field.extensionField,
                declaringField: field.declaringField,
                options: field.options
            };
        });
        return {
            name: objname,
            fields
        };
    }

    getProtos() {
        if (this.protos) return this.protos;
        const protoSplat = join(this.protoDir, '/**/*.proto');
        const protoFiles = glob(protoSplat);
        const contents = protoFiles.map(filename => ({
            absolute: filename,
            filename: filename.split(this.protoDir)[1].replace(/^\//, ''),
            content: readFileSync(filename, 'utf-8')
        }))
        const protos = contents.map(({ absolute, filename, content }) => {
            return { proto: parse(content), absolute, filename };
        });
        this.protos = protos;
        return protos;
    }

    getDeps() {
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
