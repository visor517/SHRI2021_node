const { default: axios } = require("axios")

class Settings {
    constructor() {
        this.repoName = String,
        this.buildCommand = String,
        this.mainBranch = String,
        this.period = Number
    }  
        
    async get_settings() {
        await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/settings'   //надо переделать путь
            })
        .then(response => {
            this.repoName = response.data.repoName
            this.buildCommand = response.data.buildCommand
            this.mainBranch = response.data.mainBranch
            this.period = response.data.period
        })
        .catch(err => console.log('Настройки не получились'))
    }
}

const settings = new Settings
settings.get_settings()

module.exports = settings
