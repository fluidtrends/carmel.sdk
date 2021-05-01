import { Authenticator, IRepo, IAuthKey, IAuthProvider } from '..';
/**
 *
 */
export declare class GitHubProvider implements IAuthProvider {
    /** */
    static APP_CLIENT_ID: string;
    /** */
    static APP_CLIENT_SECRET: string;
    /** @internal */
    protected _authenticator: Authenticator;
    /** @internal */
    protected _keys: IAuthKey[];
    /**
     *
     * @param authenticator
     */
    constructor(authenticator: Authenticator);
    /**
     *
     */
    get keys(): IAuthKey[];
    /**
     *
     */
    get authenticator(): Authenticator;
    /**
     *
     */
    get token(): string | undefined;
    /**
     *
     */
    get isLoggedIn(): boolean;
    /**
     *
     * @param uri
     * @param options
     * @param patch
     */
    request(uri: string, options?: any, patch?: boolean): Promise<void>;
    /**
     *
     * @param name
     * @param repo
     */
    push(name: string, repo: IRepo): Promise<void>;
    /**
     *
     */
    setupNewKey(title: string, service?: any): Promise<IAuthKey>;
    /**
     *
     * @param service
     */
    fetchRemoteKeys(service?: any): Promise<any>;
    /**
     *
     */
    prepareKeys(): Promise<void>;
    initialize(): Promise<void>;
}
