import { 
    ITemplate,
    IBundle,
    Artifact,
    Name,
    Path,
    Errors,
    ArtifactsKind,
    IArtifact,
    IProduct,
    IDir,
    Dir
 } from '..'
 import path from 'path'
 import shortid from 'shortid'

 import {
     Archive,
     Template as Tpl
 } from 'rara'

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Template.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Template implements ITemplate {
    /** @internal */
    protected _artifact: IArtifact;

    /** @internal */
    protected _archive: Archive

    /** @internal */
    protected _tpl?: Tpl

    /** @internal */
    protected _name: Name

    /**
     * 
     * @param name 
     * @param bundle 
     */
    constructor(name: Name, bundle: IBundle, archive: Archive) {
        this._archive = archive
        this._name = name
        this._artifact = new Artifact(name, bundle, ArtifactsKind.TEMPLATES)
    }

    /**
     * 
     */
    get archive() {
        return this._archive
    }

    /**
     * 
     */
    get artifact() {
        return this._artifact
    }

    /**
     * 
     */
    get name() {
        return this._name
    }

    /**
     * 
     * @param dir 
     */
    async install(name: Name, product: IProduct) {        
        product.exists && product.manifest.load()

        // Start fresh
        product.dir.make()

        // Figure out the dependencies
        const packerId = this._tpl?.content.packer
        const stackId = this._tpl?.content.stack

        // Resolve the archives
        const packer = packerId && await product.session?.index.installArchive({ id: packerId, section: "packers" })
        const stack = stackId && await product.session?.index.installArchive({ id: stackId, section: "stacks" })

        // Figure out the roots
        const packerDir = new Dir(packer.path)
        const stackDir = new Dir(stack.path)
 
        await this._tpl?.save(product.dir.path!, {})

        product.dir?.file('carmel.code-workspace')?.update({
            folders: [
                { path: "carmel/assets" },
                { path: "carmel/chunks" }
            ],
            settings: {}
        })

        if (stackDir.dir('node_modules')?.exists) {
            // Link node dependencies if necessary
            // stackDir?.dir('node_modules')?.copy(product.dir!.dir('node_modules')!)
            // product.dir?.dir('node_modules')?.dir(stackId)?.link(stackDir)
        }

        // if (product.exists) {
        //     productCacheDir?.file('.carmel.json')?.remove()
        //     // productCacheDir?.file('.carmel.json')?.link(dir.file('.carmel.json'))
        //     productCacheDir?.dir('carmel')?.remove()
        //     // productCacheDir?.dir('carmel')?.link(dir.dir('carmel'))
        //     return 
        // }

        // productCacheDir?.file('.carmel.json')?.move(dir.file('.carmel.json')!)
        // productCacheDir?.file('.carmel.json')?.link(dir.file('.carmel.json'))
        // productCacheDir?.dir('carmel')?.move(dir.dir('carmel')!)
        // productCacheDir?.dir('carmel')?.link(dir.dir('carmel'))

        product.manifest.load()
        product.manifest.data.append({
            id: product.id,
            name,
            carmelSDKVersion: product.session?.pkg.version,
            template: this.name,
            bundle: this.artifact.bundle.id,
            bundleVersion: this.artifact.bundle.version,
            stack: stack.id,
            stackVersion: stack.version,
            packer: packer.id,
            packerVersion: packer.version,
        })
        product.manifest.save()

        await product.generateCovers()
 
        return { packer, stack }
    }

    /**
     * 
     */
    async load() {
        await this._archive.load()
        this._tpl = this._archive.templates[this.name]
        await this._tpl?.load({})

        return this
    }
}
