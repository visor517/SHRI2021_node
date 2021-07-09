module.exports = {
    baseUrl: 'http://yandex.ru',
    gridUrl: 'http://localhost:4444/wd/hub',
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
