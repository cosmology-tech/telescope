export interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
