export declare class LCDClient {
    restEndpoint: string;
    instance: any;
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    request<ResponseType = unknown>(endpoint: any, opts?: {}): Promise<ResponseType>;
}
