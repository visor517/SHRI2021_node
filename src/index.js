const express = require('express')
const { apiRouter } = require('./routers')

const PORT = 3000
const app = express()

app.use('/api', apiRouter)

app.get('/ping', (req, res) => res.json({ ping: 'pong' }))

app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`))
