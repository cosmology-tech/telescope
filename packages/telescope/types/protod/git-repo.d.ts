export declare class GitRepo {
    readonly owner: string;
    readonly repo: string;
    readonly ssh: boolean;
    constructor(owner: string, repo: string, ssh?: boolean);
    get fullName(): string;
    get httpsUrl(): string;
    get sshUrl(): string;
    getMainBranchName(): Promise<string>;
    clone(branch: string, depth?: number, outDir?: string, isOverride?: boolean): string;
}
