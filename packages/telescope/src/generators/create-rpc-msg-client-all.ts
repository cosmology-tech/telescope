import * as dotty from 'dotty';
import { createEmptyProtoRef, getNestedProto } from '@cosmology/proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedRpcFactory, createScopedGrpcWebMsgFactory, createRpcMsgExtension, importStmt } from '@cosmology/ast';
import { ProtoRef } from '@cosmology/types';
import { fixlocalpaths, getRelativePath } from '../utils';
import { Bundler } from '../bundler';
import { aggregateImports, getDepsFromQueries, getImportStatements } from '../imports';
import { TelescopeParseContext } from '../build';
import { pascal } from 'case';

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
    const localname = join(dir, filename + '.tx');
    return localname + '.ts';
};

const makeAllRPCBundles = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.rpcClients.bundle) return;

    const dir = bundler.bundle.base;
    const filename = 'rpc';

    // refs with services
    const refs = builder.store.getProtos().filter((ref: ProtoRef) => {
        const proto = getNestedProto(ref.traversed);
        if (!proto?.Msg || proto.Msg?.type !== 'Service') {
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

    const methodName = 'createRPCMsgClient'
    const localname = getFileName(dir, filename ?? 'rpc');

    const obj = {};
    builder.rpcMsgClients.forEach(file => {

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
        createEmptyProtoRef(dir, localname),
        builder.store,
        builder.options
    );

    let rpcast;
    let msgExt: any = [];
    let txRpcImport: any = [];
    switch (builder.options?.rpcClients?.type) {
        case "grpc-gateway":
        case "tendermint":
            ctx.proto.addUtil('Rpc');

            rpcast = createScopedRpcFactory(
                obj,
                methodName,
                'MsgClientImpl', // make option later,
                ctx.options
            );

            if (ctx.proto.pluginValue('env') === 'v-next' && ctx.proto.pluginValue('rpcClients.extensions') && ctx.proto.pluginValue('stargateClients.addGetTxRpc')) {
                const txRpcName = 'getSigning' + pascal(bundler.bundle.base + 'TxRpc');

                txRpcImport = importStmt([txRpcName], `./client${ctx.options.restoreImportExtension ?? ""}`)

                msgExt = createRpcMsgExtension(ctx.proto, txRpcName);
            }
            break;
        case "grpc-web":
            ctx.proto.addUtil('grpc');
            ctx.proto.addUtil('NodeHttpTransport');

            rpcast = createScopedGrpcWebMsgFactory(
                obj,
                methodName,
                'MsgClientImpl', // make option later,
                ctx.options
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
        .concat(txRpcImport)
        .concat(importStmts)
        .concat(rpcast)
        .concat(msgExt);

    const writeFilename = bundler.getFilename(localname);
    bundler.writeAst(prog, writeFilename);
    bundler.addToBundleToPackage(`${dir}.ClientFactory`, localname)
};