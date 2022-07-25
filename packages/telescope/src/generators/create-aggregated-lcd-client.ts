import { buildAllImports, getDepsFromQueries } from '../imports';
import { Bundler } from '../bundler';
import { getNestedProto } from '@osmonauts/proto-parser';
import { parse } from '../parse';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createAggregatedLCDClient, GenericParseContext } from '@osmonauts/ast';
import { ProtoRef, ProtoService } from '@osmonauts/types';
import { TelescopeParseContext } from '../build';
import { ImportHash } from '../types';
import generate from '@babel/generator';

export const plugin = (
    builder: TelescopeBuilder
) => {

    if (!builder.options.lcd) {
        return;
    }

    const dir = builder.options.lcd.dir;
    const packages = builder.options.lcd.packages;

    const localname = join(dir, 'lcd.ts');

    const refs = builder.store.filterProtoWhere((ref: ProtoRef) => {
        return packages.includes(ref.proto.package)
    });

    const services: ProtoService[] = refs.map(ref => {
        const proto = getNestedProto(ref.traversed);
        if (!proto?.Query || proto.Query?.type !== 'Service') {
            return;
        }
        return proto.Query;
    }).filter(Boolean);

    const refsToTraverse = refs.map(ref => {
        const proto = getNestedProto(ref.traversed);
        if (!proto?.Query || proto.Query?.type !== 'Service') {
            return;
        }
        return ref;
    }).filter(Boolean);

    const context = new GenericParseContext(refs[0], builder.store, builder.options);
    const ast = createAggregatedLCDClient(context, services, 'QueryClient');

    /////////
    /////////
    /////////
    /////////

    const progImports = refsToTraverse.reduce((m, ref) => {

        const ctx = new TelescopeParseContext(
            context.ref,
            context.store,
            builder.options
        );

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(ref.traversed);

        const serviceImports = getDepsFromQueries(
            ctx.queries,
            localname
        );

        console.log(serviceImports);

        return { ...m, ...serviceImports }

    }, {});

    console.log(progImports);

    // const imports = buildAllImports(context, progImports, localname);
    // const prog = []
    //     .concat(imports)
    //     .concat(ast);

    // console.log(generate(prog).code)

};