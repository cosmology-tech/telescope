import * as c from '@cosmonauts/ast-gen';
import { Enum, Mutation, EnumConverter, Interface, Field } from '@cosmonauts/ast-gen';
export interface FileStore {
    filename: string;
    code: string;
    program: TSProtoStore;
}
export interface OutFile {
    filename: string;
    ast: any;
}
export interface Import {
    filename: string;
    dep: string;
    import: string;
    type: string;
    node: any;
}
export interface GenericInterface {
    filename: string;
    node: any;
}
export declare class TSProtoStore {
    protoPath: string;
    outPath: string;
    paths: string[];
    files: TSFileStore[];
    enums: Enum[];
    constructor(protoPath: any, outPath: any);
    load(): void;
    write(): void;
    traverse(): void;
    loadFile(filename: string): void;
    getFile(filename: any): TSFileStore;
    getDefinitions(): Interface[];
    getEnum(name: string): Enum;
    addEnum(data: Enum): void;
    getPackages(): any;
    getPackagesBundled(): any;
    bundlePackages(): void;
    bundleRootPackage(): void;
    protoPathToOutPath(filename: any): string;
    writeFile(ast: any, filename: any): void;
    findDependency(name: any): {
        type: string;
        name: any;
        loc: string;
    };
    findFilesOfPackage(protoPackage: string): TSFileStore[];
    findInterfaceFile(type: string): TSFileStore;
    findInterfaceFiles(type: string): TSFileStore[];
    print(): void;
}
export declare class TSFileStore implements FileStore {
    filename: string;
    protoPath: string;
    outPath: string;
    protoPackage: string;
    code: string;
    ast: any;
    program: TSProtoStore;
    interfaces: GenericInterface[];
    definitions: Interface[];
    imports: Import[];
    exports: any[];
    queries: any[];
    mutations: Mutation[];
    enums: Enum[];
    visitor: any;
    mutator: any;
    _traversed: boolean;
    importStmts: any[];
    outFiles: OutFile[];
    constructor(filename: any, code: any, program: any);
    traverse(): void;
    isQuery(): boolean;
    isTransaction(): boolean;
    setPackage(value: any): void;
    addGenericImport(data: any): void;
    addImport(data: any): void;
    addGenericInterface(node: any): void;
    addInterfaceField(type: string, el: Field): void;
    getInterface(type: string): Interface;
    addEnum(el: Enum): void;
    getEnum(name: string): Enum;
    hasEnum(name: string): boolean;
    addEnumFunction(key: string, data: EnumConverter): void;
    writeFile(ast: any, filename: any): void;
    getSiblingFileName(name: any): string;
    write(): void;
    generateFiles(): void;
    print(): void;
    toJSON(): {
        filename: string;
        protoPackage: string;
        mutations: c.Mutation[];
    };
}
