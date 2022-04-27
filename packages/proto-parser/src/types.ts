
export interface ProtoDep {
    filename: string;
    pkg: string;
    imports: string[]
}
export interface ProtoRef {
    absolute: string;
    filename: string;
    proto: ProtoRoot;
}

export interface ProtoRoot {
    package: string;
    imports: string[];
    nested: any;
};
