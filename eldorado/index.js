const customExpress = require('./config/CustomExpress')
const connection = require('./data/Connection')
const tables = require('./data/Tables')

connection.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('success connected')

        tables.init(connection)

        const app = customExpress()

        app.listen(3000, () => console.log('run in 3000'))
    }
})
