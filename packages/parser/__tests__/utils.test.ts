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

cases(`empty`, opts => {
    const ref = store.findProto(opts.value);
    const included = isRefIncluded(ref, {
        patterns: [],
        protos: [],
        packages: []
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
