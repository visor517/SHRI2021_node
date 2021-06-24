const express = require('express')
const api = require('./controllers/api')
const {getBase, postBase} = require('./controllers/shriBase')

const apiRouter = new express.Router()

apiRouter.use(express.urlencoded())

apiRouter.get('/settings', async (req, res) => {
    try {
        const response = await getBase('https://shri.yandex/hw/api/conf')
        return res.json(response)
    }
    catch (error) {
        res.status(500).json(error)
    }
})

apiRouter.post('/settings', api.postSettings)
apiRouter.get('/build', api.getBuildsList)

exports.apiRouter = apiRouter;