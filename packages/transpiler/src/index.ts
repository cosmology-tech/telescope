interface TelescopeInput {
    protoPath: string;
    outPath: string;
}

export default (input: TelescopeInput) => {
    console.log(input);
};

