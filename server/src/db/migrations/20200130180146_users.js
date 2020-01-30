
exports.up = function(knex) {
  return knex.schema.createTable('user', (user) => {
    user.uuid('id').notNullable().primary()
    user.string('name').notNullable()
    user.string('email').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
