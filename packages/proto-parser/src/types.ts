
export interface ProtoDep {
    filename: string;
    package: string;
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
    root: any;
};
