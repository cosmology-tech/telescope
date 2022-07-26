import * as t from '@babel/types';
import * as dotty from 'dotty';
import { getNestedProto } from '@osmonauts/proto-parser';
import { dirname, join } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { writeFileSync } from 'fs';
import { TelescopeBuilder } from '../builder';
import { createScopedImportObject, lcdArguments } from '@osmonauts/ast';
import { ProtoRef } from '@osmonauts/types';
import generate from '@babel/generator';
import { getRelativePath } from '../utils';
import { Bundler } from '../bundler';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    if (
        builder.options.lcds &&
        builder.options.lcds.length) {
        builder.options.lcds.forEach(lcd => {
            makeLCD(
                builder,
                lcd
            );
        });
    }

    if (builder.options.createLCDBundles) {
        if (!builder.options.includeLCDClients) {
            throw new Error('createLCDBundles requires includeLCDClients option to be true');
        }
        makeLCDBundles(
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

const makeLCD = (
    builder: TelescopeBuilder,
    lcd: {
        dir: string;
        filename?: string;
        packages: string[]
    }
) => {
    const dir = lcd.dir;
    const packages = lcd.packages;
    const localname = getFileName(dir, lcd.filename);

    const obj = {};
    builder.lcdClients.forEach(file => {

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
    const lcdast = createScopedImportObject(
        obj,
        'lcd',
        'LCDQueryClient',
        lcdArguments()
    );

    const prog = []
        .concat(lcdast)

    const ast = t.program(prog);
    const content = generate(ast).code;

    const filename = join(builder.outPath, localname);
    mkdirp(dirname(filename));
    writeFileSync(filename, content);
};

// TODO
/*
 move all options for lcd into previous `lcd` prop and 
 clean up all these many options for one nested object full of options
*/

const makeLCDBundles = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    // [x] loop through every bundle 
    // [x] if not cosmos, add all cosmos
    // [x] call makeLCD
    // [ ] add to bundle

    const dir = bundler.bundle.base;
    const filename = 'lcd.ts'

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

    makeLCD(builder, {
        dir,
        filename,
        packages
    });

};