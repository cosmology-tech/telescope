import { ProtoField } from '@osmonauts/types';

interface ServiceOptions {
    "(google.api.http).get"?: string;
    "(google.api.http)"?: {
        post: string;
        body: string;
    }
}
export const parseServiceUrl = (
    options: ServiceOptions
) => {
    let method = 'get';
    let url = options?.['(google.api.http).get'];
    if (!url) {
        method = 'post';
        url = options?.['(google.api.http)']?.post;
    }
    if (!url) {
        return;
    }
    const match = url.match(/\{([^\}]*)\}/g);
    // NOTE pathParams are the original casing!
    // e.g.: 
    // "(google.api.http).get": "/cosmwasm/wasm/v1/code/{code_id}",
    // "(google.api.http).get": "/osmosis/gamm/v1beta1/pools/{poolId}/total_pool_liquidity",
    return {
        method,
        url,
        pathParams: match?.length ? match.map(el => el.replace('{', '').replace('}', '')) : []
    };
};

// this basically takes in a ServiceMethod object! not any!
export const parseService = (
    obj: any
) => {
    const fields: Record<string, ProtoField> = obj.fields ?? {};
    const options: ServiceOptions = obj.options ?? {};
    const pathInfo = parseServiceUrl(options);
    if (!pathInfo) return;
    const mapping = {};
    const allParams = Object.keys(fields).map(field => {
        // NOTE pathParams are the original casing!
        const name = fields[field].options['(telescope:orig)'];
        mapping[name] = fields[field].options['(telescope:name)']
        return name;
    })
    const queryParams = allParams
        .filter(param => !pathInfo.pathParams.includes(param))

    const paramMap = mapping;

    return {
        ...pathInfo,
        queryParams,
        paramMap,
        // TODO paramMap === casing?
        casing: {}
    };
};

// ProtoField:
// validatorAddress: {
//     parsedType: { name: 'string', type: 'native' },
//     isScalar: true,
//     typeNum: 13,
//     type: 'string',
//     id: 1,
//     options: {
//       '(cosmos_proto.scalar)': 'cosmos.AddressString',
//       '(telescope:name)': 'validatorAddress',
//       '(telescope:orig)': 'validator_address',
//       '(telescope:camel)': 'validatorAddress'
//     },
//     comment: 'validator_address defines the validator address to query for.'
//   }