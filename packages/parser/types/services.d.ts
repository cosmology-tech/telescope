interface ServiceOptions {
    "(google.api.http).get": string;
}
export declare const parseServiceUrl: (options: ServiceOptions) => {
    url: string;
    pathParams: string[];
};
export declare const parseService: (obj: any) => {
    queryParams: string[];
    casing: {};
    url: string;
    pathParams: string[];
};
export {};
