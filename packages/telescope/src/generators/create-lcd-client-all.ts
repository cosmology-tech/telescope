import * as dotty from 'dotty';
import { getNestedProto, isRefIncluded, createEmptyProtoRef } from '@cosmology/proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedLCDFactory } from '@cosmology/ast';
import { ALLOWED_RPC_SERVICES, ProtoRef } from '@cosmology/types';
import { fixlocalpaths, getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { TelescopeParseContext } from '../build';
import { aggregateImports, getImportStatements } from '../imports';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    // if not enabled, exit
    if (!builder.options?.lcdClients?.enabled) {
        return;
    }

    // if no scopes, do them all!
    if (
        !builder.options.lcdClients.scoped ||
        !builder.options.lcdClients.scoped.length ||
        !builder.options.lcdClients.scopedIsExclusive
    ) {
        return createAllLCDBundles(
            builder,
            bundler
        );
    }
};

const getFileName = (dir, filename) => {
    const localname = join(dir, filename ?? 'lcd.ts');
    if (localname.endsWith('.ts')) return localname;
    return localname + '.ts';
};

const createAllLCDBundles = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.lcdClients.bundle) return;

    const dir = bundler.bundle.base;
    const filename = 'lcd.ts'

    // refs with services
    const refs = builder.store.getProtos().filter((ref: ProtoRef) => {
        const proto = getNestedProto(ref.traversed);
        //// Anything except Msg Service OK...
        const allowedRpcServices = builder.options.rpcClients.enabledServices.filter(a => a !== 'Msg');
        const found = allowedRpcServices.some(svc => {
            return proto?.[svc] &&
                proto[svc]?.type === 'Service'
        });

        if (!found) {
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

    const methodName = 'createLCDClient'
    const localname = getFileName(dir, filename);

    const obj = {};
    builder.lcdClients.forEach(file => {

        // ADD all option
        // which defaults to including cosmos
        // and defaults to base for each
        // if (!packages.includes(file.package)) {
        if (!isRefIncluded(createEmptyProtoRef(file.package, file.proto), {
            packages,
        })) {
            return;
        }

        const f = localname;
        const f2 = file.localname;
        const importPath = getRelativePath(f, f2);
        dotty.put(obj, file.package, importPath);
    });


    const ctx = new TelescopeParseContext(
        createEmptyProtoRef(dir, localname),
        builder.store,
        builder.options
    );

    const lcdast = createScopedLCDFactory(
        ctx.proto,
        obj,
        methodName,
        'LCDQueryClient' // make option later
    );

    const imports = aggregateImports(ctx, {}, localname);

    const importStmts = getImportStatements(
        localname,
        [...fixlocalpaths(imports)],
        builder.options
    );

    const prog = []
        .concat(importStmts)
        .concat(lcdast);

    const writeFilename = bundler.getFilename(localname);
    bundler.writeAst(prog, writeFilename);

    bundler.addToBundleToPackage(`${dir}.ClientFactory`, localname)

};