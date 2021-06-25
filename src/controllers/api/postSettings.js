const {execFile} = require('child_process')
const {postBase} = require('../shriBase')

module.exports = async (req, res) => {
    // здесь будем клонировать репозиторий

    // execFile('git', ['clone', 'https://github.com/visor517/GeekBrains_js', 'temp'], (err, out) => {
    //     if (err) {
    //         console.error(err)
    //     }
    //     else {
    //         console.log(out)
    //     }
    // })

    // в тестировании настройки из клиента в теле пост запроса передавались

    const response = await postBase('conf', req.body)
    return res.json(response.data)
}