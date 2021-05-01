import { IRepo, ICode, IDir } from '..';
/**
 *
 */
export declare class Repo implements IRepo {
    /** @internal */
    protected _code: ICode;
    /** @internal */
    /** @internal */
    protected _remote?: any;
    /** @internal */
    protected _owner?: string;
    /** @internal */
    protected _name?: string;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _nodeDir?: IDir;
    /**
     *
     * @param code
     */
    constructor(code: ICode);
    /**
     *
     */
    get code(): ICode;
    /**
     *
     */
    get remote(): any;
    /**
     *
     */
    get owner(): string | undefined;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get nodeDir(): IDir | undefined;
    /**
     *
     */
    get name(): string | undefined;
    /**
     *
     */
    get hasRemote(): boolean;
    /**
     *
     */
    get isRemoteForeign(): boolean;
    /**
     *
     */
    open(): Promise<void>;
    /**
     *
     */
    loadRemote(): Promise<void>;
    /**
     *
     */
    commit(paths: string[], comment: string): Promise<void>;
    runNamecheapCommand(data: any): Promise<void>;
    getNamespaceHosts(data: any): Promise<void>;
    updateNamespaceHosts(data: any): Promise<void>;
    pinDeployment(deployment: any): Promise<void>;
    /**
     *
     */
    setupDeployment(id: string): Promise<void>;
    /**
     *
     */
    push(): Promise<any>;
    /**
     *
     */
    setupHosting(): Promise<void>;
    /**
     *
     */
    initialize(): Promise<void>;
}
