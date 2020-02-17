const knex = require('knex')
const app = require('./app')

const { PORT, DB_URL } = require('./config')

const database = knex({
    client: 'pg',
    connection: DB_URL
})

app.set('db', database)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})