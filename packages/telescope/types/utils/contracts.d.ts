export declare const getDirectories: (source: any) => string[];
export declare const getContracts: () => {
    name: string;
    value: string;
}[];
export declare const getContractSchemata: (schemata: any[], out: string, argv: any) => {
    contractName: string;
    schemas: any[];
    outPath: string;
}[];
