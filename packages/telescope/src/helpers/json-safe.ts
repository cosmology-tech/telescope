export const jsonSafe = `
export type JsonSafe<T> = {
  [Prop in keyof T]: T[Prop] extends Uint8Array | bigint | Date ? string : T[Prop];
}
`;


