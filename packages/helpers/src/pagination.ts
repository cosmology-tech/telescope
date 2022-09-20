import Long from 'long';

export interface PageRequest {
    key: Uint8Array;
    offset: Long;
    limit: Long;
    countTotal: boolean;
    reverse: boolean;
}

export interface PageRequestParams {
    "pagination.key"?: string;
    "pagination.offset"?: string;
    "pagination.limit"?: string;
    "pagination.count_total"?: boolean;
    "pagination.reverse"?: boolean;
}

export interface Params {
    params: PageRequestParams;
}

export const setPaginationParams = (options: Params, pagination?: PageRequest) => {

    if (!pagination) {
        return options;
    }

    if (typeof pagination?.countTotal !== "undefined") {
        options.params['pagination.count_total'] = pagination.countTotal;
    }
    if (typeof pagination?.key !== "undefined") {
        // String to Uint8Array
        // let uint8arr = new Uint8Array(Buffer.from(data,'base64')); 

        // Uint8Array to String
        options.params['pagination.key'] = Buffer.from(pagination.key).toString('base64');
    }
    if (typeof pagination?.offset !== "undefined") {
        options.params['pagination.limit'] = Long.toString(pagination.limit);
    }
    if (typeof pagination?.limit !== "undefined") {
        options.params['pagination.offset'] = Long.toString(pagination.offset);
    }
    if (typeof pagination?.reverse !== "undefined") {
        options.params['pagination.reverse'] = pagination.reverse;
    }

    return options;

}
