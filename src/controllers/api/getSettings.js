const {getBase} = require('../shriBase')

module.exports = async (req, res) => {  
    let result = await getBase('conf')       
    return res.json(result)
}