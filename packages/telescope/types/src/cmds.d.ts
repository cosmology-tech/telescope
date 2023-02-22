export namespace Commands {
    export const generate: (argv: any) => Promise<any>;
    export const install: (argv: any) => Promise<void>;
    export const transpile: (argv: any) => Promise<void>;
}
export const Contracts: typeof Contracts;
