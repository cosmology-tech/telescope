import * as dotty from 'dotty';
import { getNestedProto } from '@osmonauts/proto-parser';
import { join } from 'path';
import { TelescopeBuilder } from '../builder';
import { createScopedLCDFactory } from '@osmonauts/ast';
import { ProtoRef } from '@osmonauts/types';
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
            if (lcd.dir !== bundler.bundle.base) return;
            makeLCD(
                builder,
                bundler,
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
    bundler: Bundler,
    lcd: {
        dir: string;
        filename?: string;
        packages: string[];
        addToBundle: boolean;
        methodName?: string;
    }
) => {
    const dir = lcd.dir;
    const packages = lcd.packages;
    const methodName = lcd.methodName ?? 'createLCDClient'
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
    const lcdast = createScopedLCDFactory(
        obj,
        methodName,
        'LCDQueryClient' // make option later
    );

    const prog = []
        .concat(lcdast);

    const filename = bundler.getFilename(localname);
    bundler.writeAst(prog, filename);

    if (lcd.addToBundle) {
        bundler.addToBundleToPackage('ClientFactory', localname)
    }
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
    // [x] add to bundle

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

    makeLCD(
        builder,
        bundler,
        {
            dir,
            filename,
            packages,
            addToBundle: true,
            methodName: 'createLCDClient'
        }
    );

};