
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE pet RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('pet').insert([
        {name: "Banksy", species: 'dog', legs: 4 , account_id: 1},
        {name: "Bella", species: 'dog', legs: 4, account_id: 2},
        {name: "TimTim", species: 'bird', legs: 2, account_id: 2},
        {name: "Insta", species: 'dog', legs: 3, account_id: 1},
        {name: "Molly", species: 'dog', legs: 4, account_id: 3},
        {name: "Blah", species: 'cat', legs: 4, account_id: 4}
      ]);
    });
};
