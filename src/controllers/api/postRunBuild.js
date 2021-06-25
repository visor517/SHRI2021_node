const {execFile} = require('child_process')
const {postBase} = require('../shriBase')

module.exports = async (req, res) => {
    const hash = req.params.commitHash
    
    // здесь в клонированном репозитори будем искать по хешу commitMessage, branchName и authorName

    const params = {
        commitMessage: "string",
        commitHash: hash,
        branchName: "string",
        authorName: "string"
    }

    const response = await postBase('build/request', params)
    return res.json(response.data)
    // здесь получим buildID

    // запустим сборку и отправим запрос в /build/start

    // тут сборка закончится и отправим запрос в /build/finish или /build/cancel (а может и нет)

    // а тут может что-нибудь отдадим на все это
}