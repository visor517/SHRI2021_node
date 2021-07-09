const fs = require('fs')
const spawn = require('child_process').spawn
const delay = require('delay')

module.exports = (hermione) => {
    let selenium

    hermione.on(hermione.events.RUNNER_START, async () => {
        const file = fs.openSync('selenium.log', 'w')

        // без этого на windows у меня не работает, на другом не проверял
        selenium = spawn(/^win/.test(process.platform) ? 'selenium-standalone.cmd' :
                                                        'selenium-standalone', ['start'], {
            stdio: ['ignore', file, file]
        })

        await delay(2000)
    })

    hermione.on(hermione.events.RUNNER_END, () => {
        return new Promise((resolve) => {
            selenium.on('exit', () => resolve())

            selenium.kill()
        })
    })
}