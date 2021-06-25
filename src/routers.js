const express = require('express')
const api = require('./controllers/api')

const apiRouter = new express.Router()

apiRouter.use(express.json())

apiRouter.get('/settings', api.getSettings)
apiRouter.post('/settings', api.postSettings)
apiRouter.get('/builds', api.getBuildsList)
apiRouter.post('/builds/:commitHash', api.postRunBuild)
apiRouter.get('/builds/:buildId', api.getBuildInfo)
apiRouter.get('/builds/:buildId/logs', api.getBuildLog)

exports.apiRouter = apiRouter;