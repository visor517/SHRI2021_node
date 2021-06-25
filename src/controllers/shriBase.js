const axios = require('axios')
const { response } = require('express')
require('dotenv').config()
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`

module.exports.getBase = async function (url) {
    try {
        const response = await axios.get('https://shri.yandex/hw/api/' + url)
        return response.data
    }
    catch (error) {
        console.log(`Ошибка axios.get(${url})`)
        return response.status(500)
    }
}

module.exports.postBase = async function (url, data) {
    try {
        const response = await axios.post('https://shri.yandex/hw/api/' + url, data)
        return response.data
    }
    catch (error) {
        console.log(`Ошибка axios.post(${url})`)
        return response.status(500)
    }
}