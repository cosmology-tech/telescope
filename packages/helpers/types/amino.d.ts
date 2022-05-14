import { Long } from './long';
export interface AminoHeight {
    readonly revision_number?: string;
    readonly revision_height?: string;
}
export declare function omitDefault<T extends string | number | Long>(input: T): T | undefined;
