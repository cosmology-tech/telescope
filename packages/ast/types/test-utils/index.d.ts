import { ProtoType, TelescopeOptions } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser';
import { AminoParseContext } from '../src/encoding/context';
import { GenericParseContext } from '../src/encoding';
export declare const expectCode: (ast: any) => void;
export declare const printCode: (ast: any) => void;
export declare const defaultTelescopeOptions: {
    experimentalGlobalProtoNamespace: boolean;
    removeUnusedImports: boolean;
    classesUseArrowFunctions: boolean;
    useSDKTypes: boolean;
    includeExternalHelpers: boolean;
    logLevel: import("@osmonauts/types").TelescopeLogLevel;
    interfaces: {
        enabled?: boolean;
        useUnionTypes?: boolean;
    };
    prototypes: {
        enabled?: boolean;
        parser?: {
            keepCase?: boolean;
            alternateCommentMode?: boolean;
            preferTrailingComment?: boolean;
        };
        methods?: {
            encode?: boolean;
            decode?: boolean;
            fromJSON?: boolean;
            toJSON?: boolean;
            fromPartial?: boolean;
            toSDK?: boolean;
            fromSDK?: boolean;
            toAmino?: boolean;
            fromAmino?: boolean;
            toProto?: boolean;
            fromProto?: boolean;
        };
        includePackageVar?: boolean;
        fieldDefaultIsOptional?: boolean;
        useOptionalNullable?: boolean;
        allowUndefinedTypes?: boolean;
        optionalQueryParams?: boolean;
        optionalPageRequests?: boolean;
        addTypeUrlToObjects?: boolean;
        addAminoTypeToObjects?: boolean;
        addTypeUrlToDecoders?: boolean;
        excluded?: {
            packages?: string[];
            protos?: string[];
        };
        typingsFormat?: {
            useDeepPartial?: boolean;
            useExact?: boolean;
            timestamp?: "date" | "timestamp";
            duration?: "string" | "duration";
            updatedDuration?: boolean;
        };
    };
    tsDisable: {
        files?: string[];
        disableAll?: boolean;
        patterns?: string[];
    };
    eslintDisable: {
        files?: string[];
        disableAll?: boolean;
        patterns?: string[];
    };
    bundle: {
        enabled: boolean;
    };
    cosmwasm: import("@cosmwasm/ts-codegen").TSBuilderInput;
    aggregatedLCD: {
        dir: string;
        filename: string;
        packages: string[];
        addToBundle: boolean;
    };
    stargateClients: {
        enabled: boolean;
        includeCosmosDefaultTypes?: boolean;
    };
    aminoEncoding: {
        enabled: boolean;
        casingFn?: Function;
        exceptions?: import("@osmonauts/types").AminoExceptions;
        typeUrlToAmino?: (typeUrl: string) => string;
        useRecursiveV2encoding?: boolean;
    };
    lcdClients: {
        enabled: boolean;
        scopedIsExclusive?: boolean;
        bundle?: boolean;
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            addToBundle: boolean;
            methodName?: string;
        }[];
    };
    rpcClients: {
        type?: "tendermint" | "grpc-web" | "grpc-gateway";
        enabled: boolean;
        inline?: boolean;
        extensions?: boolean;
        camelCase?: boolean;
        scopedIsExclusive?: boolean;
        bundle?: boolean;
        enabledServices?: string[];
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            addToBundle: boolean;
            methodNameQuery?: string;
            methodNameTx?: string;
        }[];
    };
    reactQuery: {
        enabled: boolean;
        include?: {
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        };
    };
    mobx: {
        enabled: boolean;
        include?: {
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        };
    };
    pinia: {
        enabled: boolean;
        include?: {
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        };
    };
    packages: Record<string, any>;
} & {
    prototypes: {
        parser: {
            keepCase: boolean;
        };
        methods: {
            encode: boolean;
            decode: boolean;
            fromJSON: boolean;
            toJSON: boolean;
            fromPartial: boolean;
            toSDK: boolean;
            fromSDK: boolean;
        };
    };
};
export declare const getTestProtoStore: (options?: TelescopeOptions) => ProtoStore;
export declare const prepareContext: (store: ProtoStore, protoFile: string) => {
    context: AminoParseContext;
    root: import("@osmonauts/types").TraversedProtoRoot;
    protos: ProtoType[];
};
export declare const getGenericParseContext: () => GenericParseContext;
export declare const getGenericParseContextWithRef: (ref: any) => GenericParseContext;
