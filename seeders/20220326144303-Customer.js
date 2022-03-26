'use strict';

const { password } = require("pg/lib/defaults");

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@gmmail.com',
        login: 'jdoe',
        password: 'password1',
        createdAt: '1/1/2022',
        updatedAt: '1/1/2022'
      },
      {
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jane@gmmail.com',
        login: 'jadoe',
        password: 'password2',
        createdAt: '1/1/2022',
        updatedAt: '1/1/2022'
      },
      {
        firstname: 'Mary',
        lastname: 'Smith',
        email: 'mary@gmmail.com',
        login: 'msmith',
        password: 'password3',
        createdAt: '1/1/2022',
        updatedAt: '1/1/2022'
      },
      {
        firstname: 'Joseph',
        lastname: 'Smith',
        email: 'joseph@gmmail.com',
        login: 'jsmith',
        password: 'password4',
        createdAt: '1/1/2022',
        updatedAt: '1/1/2022'
      }
    ],{});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
