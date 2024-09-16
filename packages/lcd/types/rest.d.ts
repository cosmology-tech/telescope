export declare class LCDClient {
    restEndpoint: string;
    timeout: number;
    private instance;
    constructor(config: {
        restEndpoint: string;
        timeout?: number;
    });
    get<ResponseType = unknown>(endpoint: any, opts?: {}): Promise<ResponseType>;
    post<ResponseType = unknown>(endpoint: any, body?: {}, opts?: {}): Promise<ResponseType>;
}
