import {
    Command,
    Errors,
    CommandProps,
    CommandType
  } from '../..'

  import getPort from 'get-port'

  const props: CommandProps = {
    id: "node",
    longRunning: true,
    type: CommandType.WORKSPACE,
    title: "Manage your Carmel Node"
  }
  
  /**
   * 
   * @category Commands
   */
  export default class Node extends Command {
    /** @internal */
    constructor() {
      super(props)
    }

    /** @internal */
    async stop() {

    }

    /** @internal */
    async start() {
      const { createController } = require('ipfsd-ctl')
      process.env.IPFS_PATH = this.session!.dir.dir('node')?.make()?.dir('ipfs')?.make()?.path    

      console.log(process.env.IPFS_PATH)
      const node = await createController({
        type: 'js',
        ipfsModule: require('ipfs'),
        ipfsHttpModule: require('ipfs-http-client'),
        ipfsBin: require.resolve('ipfs/src/cli.js'),
        init: true, 
        start: true,
        ipfsOptions: { start: true, init: true, repo: process.env.IPFS_PATH }
      })

      return node
    }
  
    /** @internal */
    async exec() {
      // Look up the command
      // const start = this.arg("start")
      // const stop = this.arg("stop")

      console.log("s....")
      // const config: any = this.session?.manifest?.load()
      // const isRunning = config.ipfsRunning

      // if (start && !isRunning) {
      await this.start()
      console.log("s2....")
      //     this.session?.manifest?.update({
      //       ipfsRunning: true
          // })
      //   return
      // }

      // if (stop && isRunning) {
      //   await this.stop()
      //   this.session?.manifest?.update({
      //     ipfsRunning: false
      //   })
      //   return
      // }
    }
  }