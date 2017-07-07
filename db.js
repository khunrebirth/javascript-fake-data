let faker = require('faker'); // Document Faker (https://github.com/marak/Faker.js/)

module.exports = function() {
  let data = { users: [] }
  for (let i = 1; i <= 100; i++) {
    data.users.push({ 
      id: i, 
      name: faker.name.findName(), 
      job: faker.name.jobTitle(),
      phone: faker.phone.phoneNumber()
    });
  }
  return data;
}