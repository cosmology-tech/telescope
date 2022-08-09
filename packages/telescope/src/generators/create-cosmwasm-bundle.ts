import { aggregateImports, getDepsFromQueries, getImportStatements } from '../imports';
import { getNestedProto } from '@osmonauts/proto-parser';
import { parse } from '../parse';
import { dirname, join } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { writeFileSync } from 'fs';
import { TelescopeBuilder } from '../builder';
import { createAggregatedLCDClient, GenericParseContext } from '@osmonauts/ast';
import { ProtoRef, ProtoService } from '@osmonauts/types';
import { TelescopeParseContext } from '../build';
import * as t from '@babel/types';
import generate from '@babel/generator';
import { TSBuilder } from '@cosmwasm/ts-codegen';

export const plugin = async (
    builder: TelescopeBuilder
) => {

    if (!builder.options.cosmwasm) {
        return;
    }

    const input = builder.options.cosmwasm;
    const cosmWasmBuilder = new TSBuilder(input);
    await cosmWasmBuilder.build();
    const file = input.options.bundle.bundleFile;
    builder.files.push(file);
};