import cases from 'jest-in-case';
import { getPluginValue } from './plugins';

const options = {
    includeAminos: false,
    includeLCDClients: false,
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