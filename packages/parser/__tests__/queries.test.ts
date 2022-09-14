import { traverse } from '../src/';
import { getNested } from '../src/utils'
import { parseService, parseServiceUrl } from '../src/services'
import { getTestProtoStore } from '../test-utils';

const store = getTestProtoStore();

it('queries', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const res = traverse(store, ref);
    const v1beta1 = getNested(res, [
        'osmosis',
        'gamm',
        'v1beta1'
    ]);
    expect(v1beta1).toMatchSnapshot();
});

it('parsing options', () => {
    const opts = {
        "(google.api.http).get": "/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in"
    };
    expect(parseServiceUrl(opts)).toEqual({
        method: 'get',
        url: '/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in',
        pathParams: ['poolId']
    })
});

it('parsing options many path params', () => {
    const opts = {
        "(google.api.http).get": "/osmosis/gamm/v1beta1/{poolId}/{estimate}/{swap_exact_amount_in}"
    };
    expect(parseServiceUrl(opts)).toEqual({
        method: 'get',
        url: '/osmosis/gamm/v1beta1/{poolId}/{estimate}/{swap_exact_amount_in}',
        pathParams: ['poolId', 'estimate', 'swap_exact_amount_in']
    })
});

// NOTE looks like in API they don't include routes - perhaps bc it's non scalar?
// https://osmosis.stakesystems.io/static/openapi
it('parsing service', () => {
    expect(parseService(EstimateSwapExactAmountIn)).toEqual({
        method: 'get',
        url: '/osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_in',
        pathParams: ['pool_id'],
        queryParams: ['routes', 'sender', 'token_id'],
        paramMap: {
            "pool_id": "poolId",
            "routes": "routes",
            "sender": "sender",
            "token_id": "tokenIn",
        },
        casing: {}
    })
});

const EstimateSwapExactAmountIn = {
    type: "ServiceMethod",
    name: "EstimateSwapExactAmountIn",
    options: {
        "(google.api.http).get": "/osmosis/gamm/v1beta1/{pool_id}/estimate/swap_exact_amount_in",
    },
    requestType: "QuerySwapExactAmountInRequest",
    responseType: "QuerySwapExactAmountInResponse",
    comment: "Estimate the swap.",
    fields: {
        poolId: {
            comment: null,
            id: 2,
            isScalar: true,
            options: {
                "(gogoproto.moretags)": "yaml:pool_id",
                "(telescope:camel)": "poolId",
                "(telescope:name)": "poolId",
                "(telescope:orig)": "pool_id"
            },
            parsedType: {
                name: "uint64",
                type: "native",
            },
            type: "uint64",
            typeNum: 8,
        },
        routes: {
            comment: null,
            id: 4,
            import: "osmosis/gamm/v1beta1/tx.proto",
            importedName: "SwapAmountInRoute",
            options: {
                "(gogoproto.moretags)": "yaml:routes",
                "(gogoproto.nullable)": false,
                "(telescope:camel)": "routes",
                "(telescope:name)": "routes",
                "(telescope:orig)": "routes"
            },
            parsedType: {
                name: "SwapAmountInRoute",
                type: "Type",
            },
            rule: "repeated",
            scope: [
                [
                    "osmosis.gamm.v1beta1",
                ],
            ],
            scopeType: "import",
            type: "SwapAmountInRoute",
        },
        sender: {
            comment: null,
            id: 1,
            isScalar: true,
            options: {
                "(gogoproto.moretags)": "yaml:sender",
                "(telescope:camel)": "sender",
                "(telescope:name)": "sender",
                "(telescope:orig)": "sender"
            },
            parsedType: {
                name: "string",
                type: "native",
            },
            type: "string",
            typeNum: 13,
        },
        tokenIn: {
            comment: null,
            id: 3,
            isScalar: true,
            options: {
                "(gogoproto.moretags)": "yaml:token_in",
                "(telescope:camel)": "tokenIn",
                "(telescope:name)": "tokenIn",
                "(telescope:orig)": "token_id"
            },
            parsedType: {
                name: "string",
                type: "native",
            },
            type: "string",
            typeNum: 13,
        },
    }
};