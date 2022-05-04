export interface ProtoRoot {
    package: string;
    imports: string[];
    root: any;
}
export interface ProtoAny {
    type: string;
    name: string;
    [key: string]: any;
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
