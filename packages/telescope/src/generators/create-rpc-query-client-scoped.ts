import * as dotty from 'dotty';
import { getNestedProto } from '@osmonauts/proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcFactory } from '@osmonauts/ast';
import { ProtoRef } from '@osmonauts/types';
import { getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { TelescopeParseContext } from '../build';
import { aggregateImports, getDepsFromQueries, getImportStatments } from '../imports';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    if (
        builder.options.rpcs &&
        builder.options.rpcs.length) {
        builder.options.rpcs.forEach(rpc => {
            if (rpc.dir !== bundler.bundle.base) return;
            makeRPC(
                builder,
                bundler,
                rpc
            );
        });
    }

    if (builder.options.createRPCBundles) {
        if (!builder.options.includeRPCClients) {
            throw new Error('createRPCBundles requires includeRPCClients option to be true');
        }
        makeRPCBundles(
            builder,
            bundler
        );
    }
};

const getFileName = (dir, filename) => {
    const localname = join(dir, filename ?? 'rpc.query.ts');
    if (localname.endsWith('.ts')) return localname;
    return localname + '.ts';
};

const makeRPC = (
    builder: TelescopeBuilder,
    bundler: Bundler,
    rpc: {
        dir: string;
        filename?: string;
        packages: string[];
        addToBundle: boolean;
        methodName?: string;
    }
) => {
    const dir = rpc.dir;
    const packages = rpc.packages;
    const methodName = rpc.methodName ?? 'createRPCQueryClient'
    const localname = getFileName(dir, rpc.filename);

    const obj = {};
    builder.rpcQueryClients.forEach(file => {

        // ADD all option
        // which defaults to including cosmos 
        // and defaults to base for each
        if (!packages.includes(file.package)) {
            return;
        }

        const f = localname;
        const f2 = file.localname;
        const importPath = getRelativePath(f, f2);
        dotty.put(obj, file.package, importPath);
    });

    const ctx = new TelescopeParseContext(
        {
            absolute: '',
            filename: localname,
            proto: {
                package: dir,
                imports: null,
                root: {},
                importNames: null
            },
            traversed: {
                package: dir,
                imports: null,
                root: {},
                importNames: null
            }
        },
        builder.store,
        builder.options
    );

    // TODO add addUtil to generic context
    ctx.proto.addUtil('Rpc');

    const rpcast = createScopedRpcFactory(
        obj,
        methodName,
        'QueryClientImpl' // make option later
    );

    const serviceImports = getDepsFromQueries(
        ctx.queries,
        localname
    );

    const imports = aggregateImports(ctx, serviceImports, localname);

    const fixlocalpaths = imports.map(imp => {
        return {
            ...imp,
            path: (imp.path.startsWith('.') || imp.path.startsWith('@')) ?
                imp.path : `./${imp.path}`
        };
    });

    const importStmts = getImportStatments(
        [...fixlocalpaths]
    );

    const prog = []
        .concat(importStmts)
        .concat(rpcast);

    const filename = bundler.getFilename(localname);
    bundler.writeAst(prog, filename);
    if (rpc.addToBundle) {
        bundler.addToBundleToPackage('ClientFactory', localname)
    }
};

// TODO
/*
 move all options for rpc into previous `rpc` prop and 
 clean up all these many options for one nested object full of options
*/

const makeRPCBundles = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    // [x] loop through every bundle 
    // [x] if not cosmos, add all cosmos
    // [x] call makeRPC

    const dir = bundler.bundle.base;
    const filename = 'rpc.query.ts'

    ///
    ///
    ///

    // refs with services
    const refs = builder.store.getProtos().filter((ref: ProtoRef) => {
        const proto = getNestedProto(ref.traversed);
        if (!proto?.Query || proto.Query?.type !== 'Service') {
            return;
        }
        return true;
    });

    const check = refs.filter((ref: ProtoRef) => {
        const [base] = ref.proto.package.split('.');
        return base === bundler.bundle.base;
    });

    if (!check.length) {
        // if there are no services
        // exit the plugin
        return;
    }

    const packages = refs.reduce((m, ref: ProtoRef) => {
        const [base] = ref.proto.package.split('.');
        if (base === 'cosmos' || base === bundler.bundle.base)
            return [...new Set([...m, ref.proto.package])];
        return m;
    }, []);

    makeRPC(
        builder,
        bundler,
        {
            dir,
            filename,
            packages,
            addToBundle: true,
            methodName: 'createRPCQueryClient'
        }
    );

};