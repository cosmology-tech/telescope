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
    const allParams = Object.keys(fields);
    const queryParams = allParams.filter(param => !pathInfo.pathParams.includes(param));
    return {
        ...pathInfo,
        queryParams,
        casing: {}
    };
};

