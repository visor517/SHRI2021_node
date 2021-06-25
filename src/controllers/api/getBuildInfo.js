const {execFile} = require('child_process')
const {getBase} = require('../shriBase')

module.exports = async (req, res) => {
    let result = await getBase(`build/details?buildId=${req.params.buildId}`)       
    return res.json(result)
}