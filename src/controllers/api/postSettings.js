const {execFile} = require('child_process')
const {postBase} = require('../shriBase')

module.exports = async (req, res) => {
    // execFile('git', ['clone', 'https://github.com/visor517/GeekBrains_js', 'temp'], (err, out) => {
    //     if (err) {
    //         console.error(err)
    //     }
    //     else {
    //         console.log(out)
    //     }
    // })

    try {
        const response = await postBase('https://shri.yandex/hw/api/conf', req.body)
        return res.json(response.data)
    }
    catch (error) {
        res.status(500).json(error)
    } 
}