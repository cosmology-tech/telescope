export declare class LCDClient {
    restEndpoint: string;
    instance: any;
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    get<ResponseType = unknown>(endpoint: any, opts?: {}): Promise<ResponseType>;
    post<ResponseType = unknown>(endpoint: any, body?: {}, opts?: {}): Promise<ResponseType>;
}
