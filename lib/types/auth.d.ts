import { ISession, IDir, Name, IRepo, Id, IFile } from '.';
import { RequestHandler, Express } from 'express';
import expressSession, { Store } from 'express-session';
import SessionFileStore from 'session-file-store';
import { BrowserSyncInstance } from 'browser-sync';
export declare const AuthSession: typeof expressSession;
export declare const AuthStore: SessionFileStore.FileStore;
export declare type AuthStoreType = Store;
export declare type AuthSessionType = RequestHandler;
export declare type AuthBrowserType = BrowserSyncInstance;
export declare enum AccessTokenType {
    UNKNOWN = "unknown",
    GITHUB = "github",
    VERCEL = "vercel"
}
export declare type AccessToken = {
    type: AccessTokenType;
    value: string;
};
export declare type User = {
    id: string;
    username: string;
    imageUrl: string;
    name: string;
    location: string;
    email: string;
    tokens: AccessToken[];
    [key: string]: any;
};
export interface IKeyStore {
    readonly session: ISession;
    readonly dir?: IDir;
    readonly keys: Map<Name, IAuthKey[]>;
    initialize(): Promise<any>;
    addNewKey(group: string): Promise<IAuthKey>;
}
export interface IAuthKey {
    readonly dir?: IDir;
    readonly group: Name;
    readonly id?: Id;
    readonly fingerprint?: Id;
    readonly exists: boolean;
    readonly keystore: IKeyStore;
    readonly files: Map<Name, IFile>;
    readonly data: Map<Name, string>;
    generate(): Promise<any>;
    initialize(): Promise<IAuthKey>;
}
export interface IAuthProvider {
    readonly authenticator: IAuthenticator;
    readonly keys: IAuthKey[];
    readonly token?: string;
    readonly isLoggedIn: boolean;
    push(name: string, repo: IRepo): Promise<any>;
    request(uri: string, options?: any, patch?: boolean): Promise<any>;
    setupNewKey(title: string, service?: any): Promise<IAuthKey>;
    fetchRemoteKeys(service?: any): Promise<any>;
    initialize(): Promise<any>;
    prepareKeys(): Promise<any>;
}
export interface IAuthenticator {
    user?: User;
    readonly session: ISession;
    readonly port: number;
    readonly host: string;
    readonly protocol: string;
    readonly baseUrl: string;
    readonly dir: IDir;
    readonly app: Express;
    readonly providers: Map<AccessTokenType, IAuthProvider>;
    update(user: User): void;
    openBrowser(): Promise<void>;
    endpoint(uri: string): string;
    initialize(): Promise<void>;
    setupSecurity(): Promise<void>;
    start(): Promise<any>;
    stop(when: number): Promise<any>;
}
