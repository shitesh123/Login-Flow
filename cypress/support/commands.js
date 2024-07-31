const faker = require('faker');
Cypress.Commands.add('generateRandomEmail', () => {
  return faker.internet.email();
});