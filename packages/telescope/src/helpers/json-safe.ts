export const jsonSafe = `
export type JsonSafe<T> = {
  [Prop in keyof T]: T[Prop] extends Uint8Array ? string : T[Prop] extends bigint ? string : T[Prop];
}
`;


