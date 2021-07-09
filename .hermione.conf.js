module.exports = {
    baseUrl: 'http://localhost:3000',
    gridUrl: 'http://localhost:4444/wd/hub',
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    plugins: {
        'hermione-url-decorator':{
            query: {'enable_exp': '1'}
        },
        'hermione-selenium-runner': true
    }
}
