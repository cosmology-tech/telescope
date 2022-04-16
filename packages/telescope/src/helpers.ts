export const aminoHelperCode = () => {
  return `
import Long from "long";

export interface AminoHeight {
  readonly revision_number?: string;
  readonly revision_height?: string;
}

export function omitDefault<T extends string | number | Long>(input: T): T | undefined {
  if (typeof input === "string") {
    return input === "" ? undefined : input;
  }

  if (typeof input === "number") {
    return input === 0 ? undefined : input;
  }

  if (Long.isLong(input)) {
    return input.isZero() ? undefined : input;
  }

  throw new Error(\`Got unsupported type \${typeof input}\`);
}
  `
};
