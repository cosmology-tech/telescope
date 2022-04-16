declare const registerDeps: (filename: any, fileParser: any) => {
    TSEnumDeclaration(path: any): void;
    FunctionDeclaration(path: any): void;
    TSInterfaceDeclaration(path: any): void;
    ClassDeclaration(path: any): void;
    VariableDeclarator(path: any): void;
    ImportDeclaration(path: any): void;
    CallExpression(path: any): void;
};
export { registerDeps };
