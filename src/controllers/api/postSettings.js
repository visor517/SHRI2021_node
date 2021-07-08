const {execFile} = require('child_process')
const {postBase} = require('../shriBase')
const fs = require('fs')

module.exports = async (req, res) => {
    let result = {error: 0}
    
    let cloneRepo = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Клонировали'), Math.floor(Math.random() * 10000))
    })

    // await execFile('git', ['clone', req.body.repoName, 'temp'], (err, out) => {
    //     if (err) {
    //         console.log(err)
    //         result.error = "Сбой клонирования"
    //     }
    //     else {
    //         console.log('Склонировано')
    //     }
    // })

    // console.log('Хочу быть позже')

    const response = await postBase('conf', req.body)

    console.log(await cloneRepo)
    
    return res.json(result)

    // пока споткнулся здесь
    // не могу сделать execfile асинхронно.
    // Не хочу сохранять настройки если клонирование не удалось
}