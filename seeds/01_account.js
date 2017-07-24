const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE account RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('account').insert([
        {email: 'jake@awesome.com', password: bcrypt.hashSync('password', 10)},
        {email: 'jake@word.com', password: bcrypt.hashSync('password', 10)},
        {email: 'jake@puppies.com', password: bcrypt.hashSync('password', 10)},
        {email: 'jake@beats.com', password: bcrypt.hashSync('password', 10)},
        {email: 'jake@dude.com', password: bcrypt.hashSync('password', 10)},
      ]);
    });
};
