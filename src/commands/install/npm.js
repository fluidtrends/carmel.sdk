const npm = require('npm')

module.exports = (args) => {
    return new Promise((resolve, reject) => {
        const startTime = Date.now()
        // npm.load((err, npm) => {
            // npm.config.set('loglevel', 'silent')
            // npm.config.set('cache', '~/.carmel-npm')

            // npm.commands.install((error, result) => {
            //     console.log("DIIDIDID")
            //     if (error) {
            //         reject(error)
            //         return
            //     }
                
                const totalTime = (Date.now() - startTime)
                resolve ({ totalTime })
            // })
        // })
    })
}