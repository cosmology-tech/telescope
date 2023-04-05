import cases from 'jest-in-case'
import { isRefIncluded } from '../src';
import { getTestProtoStore } from '../test-utils';

const store = getTestProtoStore();

cases(`isRefIncluded`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        patterns: [
            'osmosis/**/gamm/**/query.proto'
        ],
        protos: [
            'akash/cert/v1beta2/query.proto'
        ],
        packages: [
            'cosmos.bank.v1beta1',
            'cosmos.gov.v1beta1',
            'evmos.erc20.v1'
        ]
    });
    expect(included).toMatchSnapshot();
},
    [
        'google/api/expr/conformance/v1alpha1/conformance_service.proto',
        'osmosis/gamm/v2/query.proto',
        'osmosis/gamm/v1beta1/query.proto',
        'osmosis/gamm/v1beta1/tx.proto'
    ].map(el => {
        return {
            name: el,
            value: el
        }
    })
);

const protos = [
    'cosmos/bank/v1beta1/bank.proto',
    'cosmos/bank/v1beta1/query.proto',
    'cosmos/bank/v1beta1/tx.proto',
    'cosmos/gov/v1beta1/gov.proto',
    'cosmos/gov/v1beta1/query.proto',
    'cosmos/gov/v1beta1/tx.proto',
    'google/api/expr/conformance/v1alpha1/conformance_service.proto',
    'osmosis/gamm/v1beta1/query.proto',
    'osmosis/gamm/v1beta1/tx.proto',
    'osmosis/gamm/v2/query.proto',
];
const protoNameValPairs = protos.map(el => {
    return {
        name: el,
        value: el
    }
});
cases(`isRefIncluded w minimatch`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        protos: [
            'osmosis/**/gamm/**/query.proto'
        ],
        packages: [
            '*.gov.*',
            'evmos.erc20.*'
        ]
    });
    expect(included).toMatchSnapshot();
},
    protoNameValPairs
);

cases(`isRefIncluded w minimatch`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        protos: [
            'osmosis/**/gamm/v1beta1/query.proto'
        ],
        packages: [
            'cosmos.*'
        ]
    });
    expect(included).toMatchSnapshot();
},
    protoNameValPairs
);

cases(`empty`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        patterns: [],
        protos: [],
        packages: []
    });
    expect(included).toMatchSnapshot();
},
    protoNameValPairs
);

cases(`pkg`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        patterns: [],
        protos: [],
        packages: ['osmosis.gamm.v1beta1']
    });
    expect(included).toMatchSnapshot();
},
    [
        'google/api/expr/conformance/v1alpha1/conformance_service.proto',
        'osmosis/gamm/v2/query.proto',
        'osmosis/gamm/v1beta1/query.proto',
        'osmosis/gamm/v1beta1/tx.proto'
    ].map(el => {
        return {
            name: el,
            value: el
        }
    })
);
