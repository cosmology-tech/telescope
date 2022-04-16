import * as _m0 from "protobufjs/minimal";
export interface ProtocolVersion {
    p2p: string;
    block: string;
    app: string;
}
export interface NodeInfo {
    protocolVersion: ProtocolVersion;
    nodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOther;
}
export interface NodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface PeerInfo {
    id: string;
    addressInfo: PeerAddressInfo[];
    lastConnected: Date;
}
export interface PeerAddressInfo {
    address: string;
    lastDialSuccess: Date;
    lastDialFailure: Date;
    dialFailures: number;
}
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial<I extends {
        p2p?: string;
        block?: string;
        app?: string;
    } & {
        p2p?: string;
        block?: string;
        app?: string;
    } & Record<Exclude<keyof I, keyof ProtocolVersion>, never>>(object: I): ProtocolVersion;
};
export declare const NodeInfo: {
    encode(message: NodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo;
    fromJSON(object: any): NodeInfo;
    toJSON(message: NodeInfo): unknown;
    fromPartial<I extends {
        protocolVersion?: {
            p2p?: string;
            block?: string;
            app?: string;
        };
        nodeId?: string;
        listenAddr?: string;
        network?: string;
        version?: string;
        channels?: Uint8Array;
        moniker?: string;
        other?: {
            txIndex?: string;
            rpcAddress?: string;
        };
    } & {
        protocolVersion?: {
            p2p?: string;
            block?: string;
            app?: string;
        } & {
            p2p?: string;
            block?: string;
            app?: string;
        } & Record<Exclude<keyof I["protocolVersion"], keyof ProtocolVersion>, never>;
        nodeId?: string;
        listenAddr?: string;
        network?: string;
        version?: string;
        channels?: Uint8Array;
        moniker?: string;
        other?: {
            txIndex?: string;
            rpcAddress?: string;
        } & {
            txIndex?: string;
            rpcAddress?: string;
        } & Record<Exclude<keyof I["other"], keyof NodeInfoOther>, never>;
    } & Record<Exclude<keyof I, keyof NodeInfo>, never>>(object: I): NodeInfo;
};
export declare const NodeInfoOther: {
    encode(message: NodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoOther;
    fromJSON(object: any): NodeInfoOther;
    toJSON(message: NodeInfoOther): unknown;
    fromPartial<I extends {
        txIndex?: string;
        rpcAddress?: string;
    } & {
        txIndex?: string;
        rpcAddress?: string;
    } & Record<Exclude<keyof I, keyof NodeInfoOther>, never>>(object: I): NodeInfoOther;
};
export declare const PeerInfo: {
    encode(message: PeerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo;
    fromJSON(object: any): PeerInfo;
    toJSON(message: PeerInfo): unknown;
    fromPartial<I extends {
        id?: string;
        addressInfo?: {
            address?: string;
            lastDialSuccess?: Date;
            lastDialFailure?: Date;
            dialFailures?: number;
        }[];
        lastConnected?: Date;
    } & {
        id?: string;
        addressInfo?: {
            address?: string;
            lastDialSuccess?: Date;
            lastDialFailure?: Date;
            dialFailures?: number;
        }[] & ({
            address?: string;
            lastDialSuccess?: Date;
            lastDialFailure?: Date;
            dialFailures?: number;
        } & {
            address?: string;
            lastDialSuccess?: Date;
            lastDialFailure?: Date;
            dialFailures?: number;
        } & Record<Exclude<keyof I["addressInfo"][number], keyof PeerAddressInfo>, never>)[] & Record<Exclude<keyof I["addressInfo"], keyof {
            address?: string;
            lastDialSuccess?: Date;
            lastDialFailure?: Date;
            dialFailures?: number;
        }[]>, never>;
        lastConnected?: Date;
    } & Record<Exclude<keyof I, keyof PeerInfo>, never>>(object: I): PeerInfo;
};
export declare const PeerAddressInfo: {
    encode(message: PeerAddressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeerAddressInfo;
    fromJSON(object: any): PeerAddressInfo;
    toJSON(message: PeerAddressInfo): unknown;
    fromPartial<I extends {
        address?: string;
        lastDialSuccess?: Date;
        lastDialFailure?: Date;
        dialFailures?: number;
    } & {
        address?: string;
        lastDialSuccess?: Date;
        lastDialFailure?: Date;
        dialFailures?: number;
    } & Record<Exclude<keyof I, keyof PeerAddressInfo>, never>>(object: I): PeerAddressInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
