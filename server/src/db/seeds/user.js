const uuid = require('uuid')
async function clear(knex) {
  await knex('user').del()
}

async function seed(knex) {
  await clear(knex)
  await knex('user').insert({
    id: uuid(),
    name: 'Joe Blogs',
    email: 'joe@gmail.com'
  })
  await knex('user').insert({
    id: uuid(),
    name: 'Jane Blogs',
    email: 'jane@gmail.com'
  })
}

module.exports = { clear, seed }
