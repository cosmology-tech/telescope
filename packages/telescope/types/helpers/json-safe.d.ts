export declare const jsonSafe = "\nexport type JsonSafe<T> = {\n  [Prop in keyof T]: T[Prop] extends Uint8Array | bigint | Date ? string : T[Prop];\n}\n";
