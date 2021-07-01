const {execFile} = require('child_process')
const {postBase} = require('../shriBase')

module.exports = async (req, res) => {
    const hash = req.params.commitHash

    //console.log(hash)
    
    // здесь в клонированном репозитори будем искать по хешу commitMessage, branchName и authorName

    const params = {
        commitMessage: "string",
        commitHash: hash,
        branchName: "string",
        authorName: "string"
    }

    const request = await postBase('build/request', params) // получаем buildID

    // запустим сборку

    const start = await postBase('build/start', {buildId: request.data.id, dateTime: new Date}) // отправляем запрос в /build/start

    // тут сборка закончится

    const finish = await postBase('build/finish', { // отправляем запрос в /build/finish
        buildId: request.data.id,
        duration: Math.floor(Math.random() * 120),
        success: Math.random() < 0.5,
        buildLog: "string"
    })

    return {error: 0}   // тут может что-нибудь отдадим на все это    
}
