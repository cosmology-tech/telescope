import { GenericParseContext } from "../../../encoding";
export declare const createInstantRpcClass: (context: GenericParseContext, obj: object, identifier: string, instantHooksMapping?: {
    [key: string]: {
        useHookName: string;
        importedVarName: string;
        comment?: string;
    };
}) => {
    imports: any[];
    ast: any[];
};
