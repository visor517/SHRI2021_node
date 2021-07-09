describe('/build/1', () => {
    it('должен показать коммит Test', async function() {
        const browser = this.browser

        await browser.url('/build/1')

        const name = await browser.$('.commit_name')   //просто проверяет, что коммит есть
                // как получить содержимое тега что-то не нашел. getText не работает

        await name.waitForExist()
    })
})