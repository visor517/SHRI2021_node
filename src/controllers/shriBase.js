const axios = require('axios')
require('dotenv').config()
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`

module.exports.getBase = async function (url) {
    try {
        const response = await axios.get(url)
        return response.data.data
    }
    catch (error) {
        console.log(`Ошибка axios.get(${url})`)
    }
}

module.exports.postBase = async function (url, data) {
    try {
        const response = await axios.post(url, data)
        return response.data
    }
    catch (error) {
        console.log(`Ошибка axios.get(${url})`)
    }
}