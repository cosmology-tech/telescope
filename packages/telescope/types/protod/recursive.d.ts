export declare function clone({ owner, repo, branch, outDir, }: {
    owner: string;
    repo: string;
    branch?: string;
    protoDir?: string;
    outDir: string;
}): Promise<void>;
export declare function extractProto({ sourceDir, targets, outDir, }: {
    sourceDir: string;
    targets: string[];
    outDir: string;
}): Promise<void>;
