import { ProtoStore } from '../src/index'
import { traverse } from '../src/';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
import { getNested } from '../src/utils'

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

interface ServiceOptions {
    "(google.api.http).get": string;
}
const parseServiceUrl = (
    options: ServiceOptions
) => {
    const url = options['(google.api.http).get'];
    if (!url) return;
    const match = url.match(/\{([^\}]*)\}/g);
    return {
        url,
        pathParams: match?.length ? match.map(el => el.replace('{', '').replace('}', '')) : []
    };
};

// TODO make types package
interface ProtoField {
    comment?: string,
    id: number,
    isScalar: boolean,
    options: Record<string, string>,
    parsedType: {
        name: string,
        type: string,
    },
    type: string,
    typeNum: number,
}

const parseService = (
    obj: any
) => {
    const fields: Record<string, ProtoField> = obj.fields;
    const options: ServiceOptions = obj.options;
    const pathInfo = parseServiceUrl(options);
    const allParams = Object.keys(fields);
    const queryParams = allParams.filter(param => !pathInfo.pathParams.includes(param));
    return {
        ...pathInfo,
        queryParams
    };
};

it('parsing options', () => {
    const opts = {
        "(google.api.http).get": "/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in"
    };
    expect(parseServiceUrl(opts)).toEqual({
        url: '/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in',
        pathParams: ['poolId']
    })
});

it('parsing options many path params', () => {
    const opts = {
        "(google.api.http).get": "/osmosis/gamm/v1beta1/{poolId}/{estimate}/{swap_exact_amount_in}"
    };
    expect(parseServiceUrl(opts)).toEqual({
        url: '/osmosis/gamm/v1beta1/{poolId}/{estimate}/{swap_exact_amount_in}',
        pathParams: ['poolId', 'estimate', 'swap_exact_amount_in']
    })
});

// NOTE looks like in API they don't include routes - perhaps bc it's non scalar?
// https://osmosis.stakesystems.io/static/openapi
it('parsing service', () => {
    expect(parseService(EstimateSwapExactAmountIn)).toEqual({
        url: '/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in',
        pathParams: ['poolId'],
        queryParams: ['routes', 'sender', 'tokenIn']
    })
});

const EstimateSwapExactAmountIn = {
    type: "ServiceMethod",
    name: "EstimateSwapExactAmountIn",
    options: {
        "(google.api.http).get": "/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in",
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
