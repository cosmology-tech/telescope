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
export declare const setPaginationParams: (options: Params, pagination?: PageRequest) => Params;
