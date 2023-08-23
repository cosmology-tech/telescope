import { TelescopeOptions, TelescopeOption, ProtoRef } from '@cosmology/types';
/**
 * swap the key and value of the input object
 * @param input obj needs to swap
 * @returns swapped obj
 */
export declare const swapKeyValue: (input: {
    [key: string]: string;
}) => {
    [key: string]: string;
};
export declare const getPluginValue: (optionName: TelescopeOption | string, currentPkg: string, options: TelescopeOptions) => any;
export declare const getTypeNameFromFieldName: (name: string, importSrc: string, ref: ProtoRef) => string;
