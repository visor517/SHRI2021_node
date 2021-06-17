const express = require('express')
const axios = require('axios')
const path = require('path')
const settings = require('./entities/settings')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 3000
const app = express()
const instance_shri = axios.create({baseURL: 'https://shri.yandex/hw/api/conf'})
instance_shri.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`;
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    settings.get_settings()
    .then(() => res.render('index', settings))
})

app.get('/api/settings', (req, res) => {
    instance_shri.get()
        .then(result => res.json(result.data.data))
        .catch(err => console.log('Error axios', err.response.status))
})

app.post('/api/settings', urlencodedParser, async (req, res) => {
    instance_shri.post('https://shri.yandex/hw/api/conf', req.body)
        .catch(err => console.log('Error axios', err.response.status))
    res.json({ result: 'done' })    //позже передеклаю на разные результаты
})

app.get('/ping', (req, res) => res.json({ ping: 'pong' }))

app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`))
