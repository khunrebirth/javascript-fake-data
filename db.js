let faker = require('faker');

module.exports = function() {
  let data = { users: [] }
  for (let i = 1; i <= 100; i++) {
    data.users.push({ id: i, name: faker.name.findName() });
  }
  return data;
}