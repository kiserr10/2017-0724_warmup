
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet', table => {
    table.increments('id').primary();
    table.string('name').notNull();
    table.text('species').notNull();
    table.integer('legs').notNull();
    table.integer('account_id').unsigned().references('id').inTable('account').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pet');
};
