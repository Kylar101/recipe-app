const path = require('path')

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    database: 'recipe-api',
  },
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds')
  }
}