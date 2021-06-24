const express = require('express')
const path = require('path')
const settings = require('./entities/settings')
const { apiRouter } = require('./routers')

const PORT = 3000
const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/', async (req,res) => {
    await settings.get_settings()
    return res.render('index', settings)
})

app.use('/api', apiRouter)

app.get('/ping', (req, res) => res.json({ ping: 'pong' }))

app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`))
