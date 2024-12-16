import * as dotty from 'dotty';
import { getNestedProto, isRefIncluded, createEmptyProtoRef } from '@cosmology/proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcTmFactory, createScopedGrpcWebFactory, createScopedGrpcGatewayFactory } from '@cosmology/ast';
import { ProtoRef } from '@cosmology/types';
import { fixlocalpaths, getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { TelescopeParseContext } from '../build';
import { aggregateImports, getDepsFromQueries, getImportStatements } from '../imports';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    // if not enabled, exit
    if (!builder.options?.rpcClients?.enabled) {
        return;
    }

    if (builder.options?.rpcClients?.inline) {
        return;
    }

    // if no scopes, do them all!
    if (
        !builder.options.rpcClients.scoped ||
        !builder.options.rpcClients.scoped.length ||
        !builder.options.rpcClients.scopedIsExclusive
    ) {
        return makeAllRPCBundles(
            builder,
            bundler
        );
    }

};

const getFileName = (dir, filename) => {
    filename = filename.replace(/\.ts$/, '');
    const localname = join(dir, filename + '.query');
    return localname + '.ts';
};

const makeAllRPCBundles = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.rpcClients.bundle) return;

    const dir = bundler.bundle.base;
    const filename = 'rpc'

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

    const methodName = 'createRPCQueryClient'
    const localname = getFileName(dir, filename ?? 'rpc');

    const obj = {};
    builder.rpcQueryClients.forEach(file => {

        // ADD all option
        // which defaults to including cosmos
        // and defaults to base for each
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
    //based on rpc type to generate client from client factory
    let rpcast;

    switch (builder.options?.rpcClients?.type) {
        case "grpc-gateway":
            rpcast = createScopedGrpcGatewayFactory(
                ctx.proto,
                obj,
                "createGrpcGateWayClient"
                // 'QueryClientImpl' // make option later
            );
            break;
        case "tendermint":
            // TODO add addUtil to generic context
            ctx.proto.addUtil('Rpc');

            rpcast = createScopedRpcTmFactory(
                ctx.proto,
                obj,
                methodName
                // 'QueryClientImpl' // make option later
            );
            break;
        case "grpc-web":
            rpcast = createScopedGrpcWebFactory(
                ctx.proto,
                obj,
                "createGrpcWebClient"
            );
            break;
        default:
            break;
    }


    const serviceImports = getDepsFromQueries(
        ctx.queries,
        localname
    );

    const imports = aggregateImports(ctx, serviceImports, localname);

    const importStmts = getImportStatements(
        localname,
        [...fixlocalpaths(imports)],
        builder.options
    );

    const prog = []
        .concat(importStmts)
        .concat(rpcast);

    const writeFilename = bundler.getFilename(localname);
    bundler.writeAst(prog, writeFilename);
    bundler.addToBundleToPackage(`${dir}.ClientFactory`, localname)

};