const {execFile} = require('child_process')

module.exports = async (req, res) => {   
    await execFile('git', ['log'], (err, out) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(out)
        }
    })
        
    return res.json({all: 'right'})
}