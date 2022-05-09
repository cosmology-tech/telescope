declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;

var globalThis: any = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw "Unable to locate global object";
})();

export const atob: (b64: string) => string = globalThis.atob || (b64 => globalThis.Buffer.from(b64, "base64").toString("binary"));

export function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);

    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }

    return arr;
}

export const btoa: (bin: string) => string = globalThis.btoa || (bin => globalThis.Buffer.from(bin, "binary").toString("base64"));

export function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];

    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }

    return btoa(bin.join(""));
}
