interface Timestamp {
  /**
   * Represents seconds of UTC time since Unix epoch
   * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59Z inclusive.
   */
  seconds: bigint;
  /**
   * Non-negative fractions of a second at nanosecond resolution. Negative
   * second values with fractions must still have non-negative nanos values
   * that count forward in time. Must be from 0 to 999,999,999
   * inclusive.
   */

  nanos: number;
}

export function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1000) * 1000000;
  return {
    seconds,
    nanos
  };
}

export function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1000;
  millis += t.nanos / 1000000;
  return new Date(millis);
}

const timestampFromJSON = (object: any): Timestamp => {
  return {
    seconds: isSet(object.seconds)
      ? BigInt(object.seconds.toString())
      : BigInt(0),
    nanos: isSet(object.nanos) ? Number(object.nanos) : 0
  };
};

export function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === 'string') {
    return toTimestamp(new Date(o));
  } else {
    return timestampFromJSON(o);
  }
}

function numberToLong(number: number) {
  return BigInt(Math.trunc(number));
}