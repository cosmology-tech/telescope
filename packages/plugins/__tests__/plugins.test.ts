import dotty from 'dotty';
const cases = require('jest-in-case');

type OptionName = 'includeAminos' | 'includeLCDClient' | 'useDate';

interface TelescopeOpts {
    includeAminos?: boolean;
    includeLCDClient?: boolean;
    aminoCasing: string;
    useDate?: boolean;
    useExact?: boolean;
}

interface TelescopePackageOpts {
    packages: Record<string, TelescopeOpts>;
}

const bundleOptions = (options: TelescopeOpts & TelescopePackageOpts) => {
    const obj = {};
    Object.keys(options.packages).forEach(key => {
        dotty.put(obj, key + '._options', options.packages[key]);
    });
    return obj;
};

const getAllPackageParts = (name: string, list?: string[]) => {
    if (!list) list = [name];
    const newParts = name.split('.');
    newParts.pop();
    if (!newParts.length) return [...list];
    const newName = newParts.join('.');
    return getAllPackageParts(newName, [...list, newName]);
};

const getPluginValue = (optionName: OptionName, currentPkg: string, options: TelescopeOpts & TelescopePackageOpts) => {
    const pkgOpts = options.packages;
    let value;
    getAllPackageParts(currentPkg).some((pkg, i) => {
        if (pkgOpts.hasOwnProperty(pkg)) {
            if (pkgOpts[pkg].hasOwnProperty(optionName)) {
                value = pkgOpts[pkg][optionName];
                return true;
            }
        }
    });

    if (value === undefined) {
        const defaultValue = options.hasOwnProperty(optionName) ? options[optionName] : undefined;
        value = defaultValue;
    }
    return value;
};

const options = {
    includeAminos: false,
    includeLCDClient: false,
    useDate: false,

    packages: {
        cosmos: {
            useDate: true
        },
        'cosmos.v1beta1.tx': {
            includeAminos: false,
            useDate: false
        },
        'cosmos.v1beta1': {
            includeAminos: true,
        },
        osmosis: {
            aminoCasing: 'camel'
        }
    }
};

cases('includeAminos', opts => {
    const val = getPluginValue(opts.prop, opts.name, options);
    expect(val).toMatchSnapshot();

}, [
    { name: 'cosmos.v1beta1.tx', prop: 'includeAminos' },
    { name: 'cosmos.v1beta1', prop: 'includeAminos' },
    { name: 'cosmos.v1beta1.other', prop: 'includeAminos' },
    { name: 'cosmos', prop: 'includeAminos' },
]);

cases('useDate', opts => {
    const val = getPluginValue(opts.prop, opts.name, options);
    expect(val).toMatchSnapshot();

}, [
    { name: 'cosmos.v1beta1.tx', prop: 'useDate' },
    { name: 'cosmos.v1beta1', prop: 'useDate' },
    { name: 'cosmos.v1beta1.other', prop: 'useDate' },
    { name: 'cosmos', prop: 'useDate' },
]);