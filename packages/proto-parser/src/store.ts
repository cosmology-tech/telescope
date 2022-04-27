import { sync as glob } from 'glob';
import { parse } from 'protobufjs';
import { readFileSync } from 'fs';
import { join, resolve as pathResolve } from 'path';
import { ProtoDep, ProtoRef } from './types';
import { getNestedProto } from './utils';

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
