export interface AminoOptions {
    aminoCasingFn: Function;
    exceptions?: AminoExceptions;
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
