export const camel = (str) => {
    return str.substring(0, 1)
        + str.substring(1)
            .replace(/_([a-z])/g, function ($0, $1) { return $1.toUpperCase(); });
};