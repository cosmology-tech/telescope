export function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}

export function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
}