describe('Конвертер', () => {
    it('должен появится', async function() {
        const browser = this.browser

        await browser.url('/')
        await browser.keys(['курс доллара к рублю','Enter'])

        const converter = await browser.$('.converter-form')
        await converter.waitForExist()

    })
})