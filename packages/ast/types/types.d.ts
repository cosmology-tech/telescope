export declare type fieldType = 'Long' | 'Coin' | 'Duration' | 'Height' | string;
export interface Field {
    name: string;
    type: fieldType;
    node: any;
}
export interface Interface {
    name: string;
    fields: Field[];
}
export interface MessageSchema extends Interface {
    typeUrl: string;
    name: string;
    fields: Field[];
}
export interface AminoException {
    aminoType?: string;
    toAmino?: object;
    fromAmino?: object;
    AminoMsg?: object;
    Msg?: object;
}
export interface AminoExceptions {
    [key: string]: AminoException;
}
export declare const DEFAULT_AMINO_EXCEPTIONS: AminoExceptions;
