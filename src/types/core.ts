import {
  SessionProps,
  CommandProps,
  Path,
  EngineState,
  IClass,
  IBundle,
  Name,
  ChunkConfig,
  Id,
  ILogger,
  ArtifactsKind,
  ServerState,
  IFile,
  JSON,
  AccessTokenType,
  IDir,
  IKeyStore,
  CommandType,
  SessionState,
  AuthStoreType,
  ChunkConfigRoute,
  IAuthenticator,
  Target,
  Version,
  ProductState,
  CommandArg,
  User,
} from '.'
import { IAuthKey } from './auth'
import { Archive } from 'rara'

export interface IEngine extends IClass {
  readonly state: EngineState
  readonly isStarted: boolean
  readonly hasSession: boolean
  readonly session?: ISession

  changeState(state: EngineState): void
  newSession(props?: SessionProps): Promise<void>
  start(props?: SessionProps): Promise<ISession>
  startServer(command?: ICommand, args?: CommandArg[]): Promise<any>
  stop(): Promise<void>
  exec(command?: ICommand, args?: CommandArg[]): Promise<any>
}

export interface ISession extends IClass {
  readonly props?: SessionProps
  readonly keystore: IKeyStore
  readonly logger: ILogger
  readonly index: any
  readonly state: SessionState
  readonly isInitialized: boolean
  readonly isReady: boolean
  readonly product?: IProduct
  readonly pkg: JSON
  readonly dir: IDir
  readonly authDir: IDir
  readonly user?: User
  readonly isLoggedIn: boolean
  readonly id: Id
  readonly name: Name
  readonly store?: AuthStoreType
  readonly authenticator: IAuthenticator
  readonly manifest?: IFile
  readonly system?: JSON

  keys(type: AccessTokenType): IAuthKey[] | undefined
  token(type: AccessTokenType): string | undefined
  initialize(command?: ICommand): Promise<void>
  enableSecurity(): Promise<void>
  authenticate(): Promise<void>
  makeReady(): Promise<void>
  destroy(): Promise<void>
  changeState(state: SessionState): void
  resolveProduct(id?: string): Promise<IProduct | undefined>
  findBundle(
    id: Id,
    version: Version,
    install?: boolean
  ): Promise<IBundle | undefined>
  findArtifact(id: Id, kind: ArtifactsKind, install?: boolean): Promise<any>
  findTemplate(id: Id, install?: boolean): Promise<ITemplate | undefined>
}

export interface ICommand extends IClass {
  readonly props: CommandProps
  readonly session?: ISession
  readonly requiresArgs: boolean
  readonly requiresAuth: boolean
  readonly product?: IProduct
  readonly target: Target
  readonly type: CommandType
  readonly id: Id
  readonly isLongRunning: boolean
  readonly args?: CommandArg[]

  initialize(session: ISession, args?: CommandArg[]): Promise<any>
  exec(): Promise<any>
  arg(name: Name): any
}

export interface IStack extends Archive {
}

export interface IPacker extends Archive {
  pack(callback: (event: any) => void): Promise<any>
}

export interface IRepo extends IClass {
  readonly code: ICode
  readonly dir?: IDir
  readonly nodeDir?: IDir
  readonly name?: string
  readonly owner?: string
  readonly hasRemote: boolean
  readonly isRemoteForeign: boolean

  open(): Promise<any>
  commit(paths: string[], comment: string): Promise<any>
  push(): Promise<any>
  loadRemote(): Promise<any>
  initialize(): Promise<any>
  setupHosting(): Promise<any>
}

export interface ICode extends IClass {
  readonly product: IProduct
  readonly dir?: IDir
  readonly keystore?: IKeyStore
  readonly keys?: IAuthKey[]
  readonly credentials?: any
  readonly key?: IAuthKey
  readonly user?: User
  readonly deployRepo?: IRepo
  readonly service?: any

  initialize(): Promise<any>
  deploy(target: Target): Promise<any>
  setupDeployment(): Promise<any>
}

export interface IProduct extends IClass {
  readonly dir: IDir
  readonly manifest: IFile
  readonly session?: ISession
  readonly exists: boolean
  readonly context?: any
  readonly isLoaded: boolean
  readonly isReady: boolean
  readonly state: ProductState
  readonly snapshot?: ISnapshot
  readonly id: Id
  readonly code: ICode
  readonly data?: JSON
  readonly packer?: IPacker
  readonly stack?: IStack
  readonly packerPort?: number
  readonly content: IContent
 
  // openCode(): Promise<any>
  // openWeb(): Promise<any>
  create(data?: any): void
  createFromTemplate(id: Id, name: Name): Promise<IProduct | undefined>
  load(): Promise<IProduct>
  saveContext(context: object): void
  changeState(state: ProductState): void
  loadFile(path: Path): void
  saveData(data: any): void
  findDirs(dirpath: Path): Path[]
  resolve(target: Target, watch: boolean): Promise<any>
  generateCover(cover: Path): Promise<any>
  generateCovers(): Promise<any>
}

export interface IContent extends IClass {
  readonly rootDir: IDir
  readonly index?: IFile
  readonly hashes: Map<Path, any>
  readonly product: IProduct
  initialize(): Promise<any>
  refresh(): Promise<any>
}

export interface ISnapshot extends IClass {
  readonly id: Id
  readonly product: IProduct
  readonly exists: boolean
  readonly dir?: IDir
  readonly chunksDir?: IDir
  readonly apps?: Map<Target, IApp>
  readonly chunks?: Map<Name, IChunk>

  load(): Promise<ISnapshot | undefined>
  app(target: Target): Promise<IApp | undefined>
  chunk(name: Name): Promise<IChunk | undefined>
}

export interface IServer extends IClass {
  readonly isInitialized: boolean
  readonly isStarted: boolean
  readonly isRunning: boolean
  readonly state: ServerState
  readonly scriptFile?: IFile
  readonly dir: IDir
  readonly pidFile?: IFile
  readonly outputFile?: IFile
  readonly errorFile?: IFile
  readonly io?: any
  readonly args?: CommandArg[]
  readonly id: Id
  readonly command: ICommand
  readonly forceStart: boolean

  initialize(): Promise<any>
  start(): Promise<any>
  stop(): Promise<any>
  changeState(state: ServerState): void
}

export interface IArtifact extends IClass {
  readonly kind: ArtifactsKind
  readonly name: Name
  readonly bundle: IBundle
  readonly dir?: IDir
  readonly exists: boolean
}

export interface ITemplate extends IClass {
  readonly artifact: IArtifact
  readonly name: Name

  install(name: Name, product: IProduct): Promise<any>
  load(): Promise<ITemplate | undefined>
}

export interface IApp extends IClass {
  readonly target: Target
  readonly snapshot: ISnapshot
  readonly exists: boolean
  readonly dir?: IDir

  load(): Promise<IApp | undefined>
}

export interface IChunk extends IClass {
  readonly name: Name
  readonly snapshot: ISnapshot
  readonly exists: boolean
  readonly config?: ChunkConfig
  readonly manifest?: IFile
  readonly screens?: Map<Name, IScreen>
  readonly dir?: IDir
  readonly srcDir?: IDir

  load(): Promise<IChunk | undefined>
  screen(route: ChunkConfigRoute): Promise<IScreen | undefined>
}

export interface IScreen extends IClass {
  readonly chunk: IChunk
  readonly exists: boolean
  readonly dir?: IDir
  readonly config?: ChunkConfigRoute

  load(): Promise<IScreen | undefined>
}
