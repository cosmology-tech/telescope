import { Long } from './long';
import { isSet } from './misc';

interface Timestamp {
    /**
     * Represents seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     */
    seconds: Long;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999
     * inclusive.
     */

    nanos: number;
}

export function toTimestamp(date: Date): Timestamp {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = date.getTime() % 1_000 * 1_000_000;
    return {
        seconds,
        nanos
    };
};

export function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds.toNumber() * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
};

const fromJSON = (object: any): Timestamp => {
    return {
        seconds: isSet(object.seconds) ? Long.fromString(object.seconds) : Long.ZERO,
        nanos: isSet(object.nanos) ? Number(object.nanos) : 0
    };
};

export function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === "string") {
        return new Date(o);
    } else {
        // TODO should we put this all inline?
        // return fromTimestamp(Timestamp.fromJSON(o));
        return fromTimestamp(fromJSON(o));
    }
}

function numberToLong(number: number) {
    return Long.fromNumber(number);
}