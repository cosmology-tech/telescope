export declare class LCDClient {
    restEndpoint: string;
    instance: any;
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    request(endpoint: any, opts?: {}): Promise<unknown>;
}
