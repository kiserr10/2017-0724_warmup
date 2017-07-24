
exports.up = function(knex, Promise) {
  return knex.schema.createTable('account', table => {
    table.increments('id').primary();
    table.string('email').unique();
    table.text('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account');
};
