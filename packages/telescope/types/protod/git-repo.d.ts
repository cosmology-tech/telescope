export declare class GitRepo {
    readonly owner: string;
    readonly repo: string;
    constructor(owner: string, repo: string);
    get fullName(): string;
    get httpsUrl(): string;
    get sshUrl(): string;
    clone(branch: string, depth?: number, outDir?: string): string;
}
