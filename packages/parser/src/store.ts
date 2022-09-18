import { sync as glob } from 'glob';
import { parse } from '@pyramation/protobufjs';
import { readFileSync } from 'fs';
import { join, resolve as pathResolve } from 'path';
import { ProtoDep, ProtoRef, ProtoServiceMethod, TelescopeOptions } from '@osmonauts/types';
import { getNestedProto, getPackageAndNestedFromStr } from './utils';
import { traverse } from './traverse';
import { lookupAny, lookupAnyFromImports } from './lookup';
import { defaultTelescopeOptions } from '@osmonauts/types';

import google_any from './native/any';
import google_duration from './native/duration';
import google_timestamp from './native/timestamp';
import google_empty from './native/empty';
import google_field_mask from './native/field_mask';
import google_struct from './native/struct';
import google_wrappers from './native/wrappers';

const GOOGLE_PROTOS = [
    ['google/protobuf/any.proto', google_any],
    ['google/protobuf/duration.proto', google_duration],
    ['google/protobuf/timestamp.proto', google_timestamp],
    ['google/protobuf/empty.proto', google_empty],
    ['google/protobuf/struct.proto', google_struct],
    ['google/protobuf/wrappers.proto', google_wrappers],
    ['google/protobuf/field_mask.proto', google_field_mask]
];

interface ParseProtoOptions {
    keepCase?: boolean;
    alternateCommentMode?: boolean;
    preferTrailingComment?: boolean;
}

const protoParseOptionsDefaults = {
    keepCase: false,
    alternateCommentMode: true,
    preferTrailingComment: false
};

export const parseProto = (content, options?: ParseProtoOptions) => {
    if (!options) {
        options = protoParseOptionsDefaults
    }
    return parse(content, options);
};
export class ProtoStore {
    files: string[];
    protoDirs: string[];
    deps: ProtoDep[];
    protos: ProtoRef[];
    packages: string[];
    options: TelescopeOptions;

    requests: Record<string, ProtoServiceMethod> = {};

    _traversed: boolean = false;

    constructor(protoDirs: string[] = [], options: TelescopeOptions = defaultTelescopeOptions) {
        this.protoDirs = protoDirs.map(protoDir => pathResolve(protoDir));
        this.options = options;
    }

    findProto(filename): ProtoRef {
        return this.getProtos().find(proto => {
            return proto.filename === filename
        });
    }

    findProtoWhere(fn: (ref: ProtoRef) => boolean): ProtoRef {
        return this.getProtos().find(ref => {
            return fn(ref)
        });
    }

    filterProtoWhere(fn: (ref: ProtoRef) => boolean): ProtoRef[] {
        return this.getProtos().filter(ref => {
            return fn(ref)
        });
    }

    findProtoObject(filename, name): any {
        const proto = this.findProto(filename);
        return getNestedProto(proto.traversed ?? proto.proto)[name];
    }

    registerRequest(requestType: string, svc: ProtoServiceMethod): void {
        this.requests[requestType] = svc;
    };

    getProtos(): ProtoRef[] {
        if (this.protos) return this.protos;
        const contents = this.protoDirs.reduce((m, protoDir) => {
            const protoSplat = join(protoDir, '/**/*.proto');
            const protoFiles = glob(protoSplat);
            const contents = protoFiles.map(filename => ({
                absolute: filename,
                filename: filename.split(protoDir)[1].replace(/^\//, ''),
                content: readFileSync(filename, 'utf-8')
            }));
            return [...m, ...contents];
        }, []);

        // if they don't got it, let's give it to 'em!
        GOOGLE_PROTOS.map(([f, v]) => {
            const found = contents.find(file => file.filename === f);
            if (!found) {
                contents.push({
                    absolute: f,
                    filename: f,
                    content: v
                });
            }
        });

        const protos = contents.map(({ absolute, filename, content }) => {
            try {
                const proto = parseProto(content, this.options.prototypes.parser);
                return {
                    absolute,
                    filename,
                    proto,
                };
            } catch (e) {
                console.error(`${filename} has a proto syntax error`)
                throw e;
            }
        });

        this.protos = protos;
        return protos;
    }

    getPackages(): string[] {
        if (this.packages) return this.packages;
        this.packages = this.getProtos().reduce((m, ref) => {
            return [...new Set([...m, ref.proto.package])];
        }, []);
        // LONGEST strings first, for better matching
        this.packages = this.packages.sort((a, b) => {
            return b.length - a.length;
        })
        return this.packages;
    }

    parseScope(type: string) {
        const pkgs = this.getPackages();
        for (let pkg of pkgs) {
            const found = getPackageAndNestedFromStr(type, pkg);
            if (found) return found;
        }
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

    getImportFromRef(ref: ProtoRef, name: string) {
        if (!this._traversed) throw new Error('getImportFromRef() requires traversal')
        return lookupAnyFromImports(this, ref, name);
    }

}
