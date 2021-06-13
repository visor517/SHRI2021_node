const express = require('express')
const axios = require('axios')
const path = require('path')
require('dotenv').config()
const settings = require('./entities/settings')

const PORT = 3000
const app = express()
const instance_shri = axios.create({baseURL: 'https://shri.yandex/hw/api/conf'})
instance_shri.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`;

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/', (req,res) => {
    res.render('index',settings)
})

app.get('/api/settings', (req, res) => {
    instance_shri.get()
        .then(result => res.json(result.data.data))
        .catch(err => console.log('Error axios', err.response.status))
})

app.post('/api/settings', async (req, res) => {
    //console.log(req)  //пока не получается из формы вернуть настройки для передачи их в https://shri.yandex/hw/api/conf

    instance_shri.post('https://shri.yandex/hw/api/conf', req.body)
        .catch(err => console.log('Error axios', err.response.status))
    console.log(req.body)
    res.json({ result: 'done' })
})

app.get('/ping', (req, res) => res.json({ ping: 'pong' }))

app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`))
