const {getBase} = require("../src/controllers/shriBase")

it('Get response / https://shri.yandex/hw/api/conf', async () => {
    const data = await getBase('conf')
    expect(data.data).toBeDefined()
})
