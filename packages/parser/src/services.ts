import { ProtoField } from '@osmonauts/types';

interface ServiceOptions {
    "(google.api.http).get": string;
}
export const parseServiceUrl = (
    options: ServiceOptions
) => {
    const url = options?.['(google.api.http).get'];
    if (!url) return;
    const match = url.match(/\{([^\}]*)\}/g);
    // NOTE pathParams are the original casing!
    // e.g.: 
    // "(google.api.http).get": "/cosmwasm/wasm/v1/code/{code_id}",
    // "(google.api.http).get": "/osmosis/gamm/v1beta1/pools/{poolId}/total_pool_liquidity",
    return {
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
    const allParams = Object.keys(fields).map(field => {
        // NOTE pathParams are the original casing!
        return fields[field].options['(telescope:orig)'];
    })
    const queryParams = allParams.filter(param => !pathInfo.pathParams.includes(param));
    return {
        ...pathInfo,
        queryParams,
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