import { sync as glob } from 'glob';
import { parse } from 'protobufjs';
import { readFileSync } from 'fs';
import { join, resolve as pathResolve } from 'path';
import { ProtoDep, ProtoRef, ProtoRoot } from './types';
import { getNestedProto } from './utils';
import { traverse } from './traverse';
import { lookupAny } from './lookup';

export class ProtoStore {
    files: string[];
    protoDir: string;
    deps: ProtoDep[];
    protos: ProtoRef[];

    _traversed: boolean = false;

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
                package: pkg,
                imports
            }
        });
        this.deps = deps;
        return deps;
    }

    traverseAll(): void {
        if (this._traversed) return;
        this.protos = this.getProtos().map((ref: ProtoRef) => {
            return {
                absolute: ref.absolute,
                filename: ref.filename,
                proto: ref.proto,
                traversed: traverse(this, ref)
            };
        })
        this._traversed = true;
    }

    get(from: ProtoRef, name: string) {
        if (!this._traversed) throw new Error('get() requires traversal')
        return lookupAny(this, from, name);
    }

}
